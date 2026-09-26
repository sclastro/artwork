"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Bi, PeriodSlug } from "@/content/types";
import type { CatalogItem } from "@/lib/catalog";
import { buildQuiz, type QuizMode, type QuizQuestion } from "@/lib/quiz";
import { useDict, useLocale } from "../LocaleProvider";
import { IconArrowRight, IconCheck, IconClose, IconQuiz, IconTimeline, IconUser } from "../icons";

const COUNT = 10;

export function Quiz({ items, periods, artists }: { items: CatalogItem[]; periods: { slug: PeriodSlug; name: Bi }[]; artists: Record<string, Bi> }) {
  const t = useDict();
  const locale = useLocale();
  const [mode, setMode] = useState<QuizMode | null>(null);
  const [seed, setSeed] = useState(0);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [answers, setAnswers] = useState<{ q: QuizQuestion; pick: string }[]>([]);

  const questions = useMemo(
    () => (mode ? buildQuiz(items, mode, COUNT, seed, periods.map((p) => p.slug)) : []),
    [mode, seed, items, periods],
  );
  const byslug = useMemo(() => Object.fromEntries(items.map((w) => [w.slug, w])), [items]);
  const periodName = (s: string) => periods.find((p) => p.slug === s)?.name[locale] ?? s;
  const label = (opt: string) => (mode === "artist" ? artists[opt]?.[locale] ?? opt : mode === "period" ? periodName(opt) : opt);

  const start = (m: QuizMode) => {
    setMode(m);
    setSeed(Date.now() % 1_000_000);
    setI(0);
    setPicked(null);
    setAnswers([]);
  };

  if (!mode) {
    const modes: { m: QuizMode; icon: React.ReactNode }[] = [
      { m: "artist", icon: <IconUser /> },
      { m: "period", icon: <IconTimeline /> },
      { m: "year", icon: <IconQuiz /> },
    ];
    return (
      <div className="quiz-modes">
        {modes.map(({ m, icon }) => (
          <button key={m} type="button" className="explore-card quiz-mode" onClick={() => start(m)}>
            <span className="explore-icon">{icon}</span>
            <h3 className="h3">{t.quiz.modes[m].name}</h3>
            <p>{t.quiz.modes[m].desc}</p>
            <span className="btn btn-sm btn-primary" style={{ justifySelf: "start", marginTop: 8 }}>
              {t.quiz.start}
              <IconArrowRight width={16} height={16} />
            </span>
          </button>
        ))}
      </div>
    );
  }

  const done = answers.length === questions.length && questions.length > 0;
  if (done) {
    const score = answers.filter((a) => a.pick === a.q.answer).length;
    const verdict = t.quiz.verdict[Math.min(3, Math.floor((score / COUNT) * 4))];
    return (
      <div className="quiz-result">
        <motion.div className="quiz-score" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 160, damping: 16 }}>
          <span>{score}</span>
          <small>/ {COUNT}</small>
        </motion.div>
        <h2 className="h2">{t.quiz.score(score, COUNT)}</h2>
        <p className="lead">{verdict}</p>
        <div className="chips" style={{ justifyContent: "center" }}>
          <button type="button" className="btn btn-primary" onClick={() => start(mode)}>
            {t.quiz.again}
          </button>
          <button type="button" className="btn" onClick={() => setMode(null)}>
            {t.quiz.changeMode}
          </button>
        </div>
        <h3 className="kicker" style={{ marginTop: 48 }}>
          {t.quiz.review}
        </h3>
        <ol className="quiz-review">
          {answers.map(({ q, pick }, k) => {
            const w = byslug[q.artwork];
            const ok = pick === q.answer;
            return (
              <li key={k} className={ok ? "is-ok" : "is-bad"}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={w.thumb} alt="" loading="lazy" />
                <span>
                  <strong>{w.title[locale]}</strong>
                  <small>
                    {ok ? <IconCheck width={14} height={14} /> : <IconClose width={14} height={14} />} {label(pick)}
                    {!ok && ` → ${label(q.answer)}`}
                  </small>
                </span>
                <Link href={`/${locale}/artworks/${w.slug}/`} className="btn btn-sm">
                  {t.quiz.learnMore}
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }

  const q = questions[i];
  const w = byslug[q.artwork];
  const prompt = mode === "artist" ? t.quiz.whoPainted : mode === "period" ? t.quiz.whichPeriod : t.quiz.whichYear;
  const choose = (opt: string) => {
    if (picked) return;
    setPicked(opt);
  };
  const next = () => {
    setAnswers((a) => [...a, { q, pick: picked! }]);
    setPicked(null);
    setI((n) => n + 1);
  };

  return (
    <div className="quiz">
      <div className="quiz-progress">
        <span>{t.quiz.question(i + 1, COUNT)}</span>
        <div className="quiz-bar">
          <motion.span animate={{ scaleX: (i + (picked ? 1 : 0)) / COUNT }} transition={{ duration: 0.4 }} />
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={i} className="quiz-card" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.35 }}>
          <div className="quiz-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={w.thumbLarge} alt="" />
            {picked && (
              <div className="quiz-reveal">
                <strong>{w.title[locale]}</strong>
                <small>
                  {w.artistName[locale]} · {w.year}
                </small>
              </div>
            )}
          </div>
          <div className="quiz-side">
            <h2 className="h3">{prompt}</h2>
            <div className="quiz-options">
              {q.options.map((opt) => {
                const state = !picked ? "" : opt === q.answer ? "is-correct" : opt === picked ? "is-wrong" : "is-dim";
                return (
                  <button key={opt} type="button" className={`quiz-option ${state}`} onClick={() => choose(opt)} disabled={!!picked}>
                    {label(opt)}
                    {picked && opt === q.answer && <IconCheck width={18} height={18} />}
                    {picked && opt === picked && opt !== q.answer && <IconClose width={18} height={18} />}
                  </button>
                );
              })}
            </div>
            {picked && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="quiz-feedback">
                <p className={picked === q.answer ? "ok" : "bad"}>{picked === q.answer ? t.quiz.correct : `${t.quiz.wrong} ${t.quiz.answerWas}${label(q.answer)}`}</p>
                <button type="button" className="btn btn-primary" onClick={next} autoFocus>
                  {i + 1 === COUNT ? t.quiz.finish : t.quiz.next}
                  <IconArrowRight width={16} height={16} />
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
