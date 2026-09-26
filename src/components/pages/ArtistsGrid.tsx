"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Bi, Nationality, PeriodSlug } from "@/content/types";
import { useDict, useLocale } from "../LocaleProvider";

export interface ArtistCardData {
  slug: string;
  name: Bi;
  born: number;
  died: number;
  nationality: Nationality;
  periods: PeriodSlug[];
  count: number;
  thumb: string;
  lqip: string;
}

export function ArtistsGrid({ artists, periods }: { artists: ArtistCardData[]; periods: { slug: PeriodSlug; name: Bi; color: string }[] }) {
  const t = useDict();
  const locale = useLocale();
  const [period, setPeriod] = useState<PeriodSlug | "">("");
  const [nat, setNat] = useState<Nationality | "">("");
  const [sort, setSort] = useState<"born" | "name">("born");

  const nats = useMemo(() => [...new Set(artists.map((a) => a.nationality))], [artists]);
  const list = useMemo(() => {
    const l = artists.filter((a) => (!period || a.periods.includes(period)) && (!nat || a.nationality === nat));
    return sort === "born" ? l : [...l].sort((a, b) => a.name[locale].localeCompare(b.name[locale], locale === "zh" ? "zh-Hant" : "en"));
  }, [artists, period, nat, sort, locale]);

  return (
    <>
      <div className="filter-bar">
        <div className="chips">
          <button type="button" className="chip" aria-pressed={!period} onClick={() => setPeriod("")}>
            {t.artists.filterAll}
          </button>
          {periods.map((p) => (
            <button key={p.slug} type="button" className="chip" aria-pressed={period === p.slug} onClick={() => setPeriod(period === p.slug ? "" : p.slug)}>
              <span className="dot" style={{ background: p.color }} />
              {p.name[locale]}
            </button>
          ))}
        </div>
        <div className="filter-selects">
          <label className="field">
            <span>{t.artists.nationality}</span>
            <select className="select" value={nat} onChange={(e) => setNat(e.target.value as Nationality | "")}>
              <option value="">{t.search.any}</option>
              {nats.map((n) => (
                <option key={n} value={n}>
                  {t.nationalities[n]}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>{t.search.sort}</span>
            <select className="select" value={sort} onChange={(e) => setSort(e.target.value as "born" | "name")}>
              <option value="born">{t.artists.born}</option>
              <option value="name">{locale === "zh" ? "名稱" : "Name"}</option>
            </select>
          </label>
        </div>
      </div>
      <p className="muted result-count">{t.common.artistsCount(list.length)}</p>
      <motion.div className="artist-grid" layout>
        <AnimatePresence mode="popLayout">
          {list.map((a) => (
            <motion.div key={a.slug} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.35 }}>
              <Link href={`/${locale}/artists/${a.slug}/`} className="artist-card">
                <span className="artist-card-img">
                  <span className="lqip" style={{ backgroundImage: `url(${a.lqip})` }} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.thumb} alt="" loading="lazy" />
                </span>
                <span className="artist-card-body">
                  <strong>{a.name[locale]}</strong>
                  {locale === "zh" && <em lang="en">{a.name.en}</em>}
                  <small>
                    {a.born}–{a.died} · {t.nationalities[a.nationality]} · {t.common.works(a.count)}
                  </small>
                </span>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
