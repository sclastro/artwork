"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { Bi } from "@/content/types";
import { useDict, useLocale } from "../LocaleProvider";
import { SplitText } from "../motion/SplitText";
import { onAnchorClick } from "../motion/SmoothScroll";
import { IconArrowRight, IconPause, IconPlay } from "../icons";

export interface HeroSlide {
  slug: string;
  title: Bi;
  artist: Bi;
  year: string;
  src: string;
  srcSet: string;
  lqip: string;
  /** object-position，令主體留在畫面內 */
  focus: string;
}

const DURATION = 8000;

export function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const t = useDict();
  const locale = useLocale();
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [glow, setGlow] = useState<{ x: number; y: number } | null>(null);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), [slides.length]);

  useEffect(() => {
    if (paused || reduce) return;
    const id = setTimeout(next, DURATION);
    return () => clearTimeout(id);
  }, [index, paused, reduce, next]);

  // 分頁不可見時暫停
  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    setGlow({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  const s = slides[index];
  return (
    <section ref={ref} className="hero" onPointerMove={onMove} onPointerLeave={() => setGlow(null)} aria-roledescription="carousel">
      <motion.div className="hero-media" style={{ scale: reduce ? 1 : imgScale }}>
        <AnimatePresence initial={false}>
          <motion.div
            key={s.slug}
            className="hero-slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          >
            <div className="lqip" style={{ backgroundImage: `url(${s.lqip})`, filter: "blur(20px)" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.src}
              srcSet={s.srcSet}
              sizes="(orientation: portrait) 190vh, 100vw"
              alt=""
              className="kenburns"
              style={{ objectPosition: s.focus, animationDuration: `${DURATION + 2000}ms` }}
              fetchPriority={index === 0 ? "high" : "auto"}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <div className="hero-shade" />
      {glow && <div className="hero-glow" style={{ left: glow.x, top: glow.y }} aria-hidden />}

      <motion.div className="hero-content container" style={{ y: reduce ? 0 : contentY, opacity: contentOpacity }}>
        <motion.p className="kicker hero-kicker" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          {t.home.kicker}
        </motion.p>
        <SplitText text={t.home.title} className="display hero-title" delay={0.35} />
        <motion.p className="hero-sub" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.9 }}>
          {t.home.subtitle}
        </motion.p>
        <motion.div className="hero-cta" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.1 }}>
          <a href="#periods" className="btn btn-light" onClick={(e) => onAnchorClick(e, 0)}>
            {t.home.start}
            <IconArrowRight width={18} height={18} />
          </a>
          <Link href={`/${locale}/artworks/the-starry-night/`} className="btn btn-ghost-light">
            {t.home.featuredTitle}
          </Link>
        </motion.div>
      </motion.div>

      <div className="hero-caption container">
        <Link href={`/${locale}/artworks/${s.slug}/`} className="hero-caption-link" aria-live="polite">
          <span className="hero-caption-title">{s.title[locale]}</span>
          <span className="hero-caption-sub">
            {s.artist[locale]}, {s.year}
          </span>
        </Link>
        <div className="hero-controls">
          <div className="hero-dots" role="tablist">
            {slides.map((sl, i) => (
              <button
                key={sl.slug}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={sl.title[locale]}
                className="hero-dot"
                onClick={() => setIndex(i)}
              >
                <span className="hero-dot-fill" style={{ animationDuration: `${DURATION}ms`, animationPlayState: paused ? "paused" : "running" }} key={i === index ? `a${index}` : "i"} data-active={i === index} data-done={i < index} />
              </button>
            ))}
          </div>
          <button type="button" className="icon-btn" onClick={() => setPaused((p) => !p)} aria-label={paused ? t.common.play : t.common.pause}>
            {paused ? <IconPlay /> : <IconPause />}
          </button>
        </div>
      </div>
      <a href="#intro" className="hero-scroll" aria-label={t.common.scrollDown} onClick={(e) => onAnchorClick(e, 0)}>
        <span />
      </a>
    </section>
  );
}
