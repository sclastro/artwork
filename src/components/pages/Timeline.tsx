"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import type { Bi } from "@/content/types";
import type { CatalogItem } from "@/lib/catalog";
import { useDict, useLocale } from "../LocaleProvider";

interface PeriodLite {
  slug: string;
  name: Bi;
  start: number;
  end: number;
  color: string;
  colorDark: string;
  tagline: Bi;
}

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * 桌面：縱向捲動驅動橫向移動的時間軸（區段固定於畫面），背景色隨時期漸變。
 * 手機或減少動態：普通縱向時間線。
 */
export function Timeline({ items, periods }: { items: CatalogItem[]; periods: PeriodLite[] }) {
  const t = useDict();
  const locale = useLocale();
  const reduce = useReducedMotion();
  const [horizontal, setHorizontal] = useState(false);
  const section = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);
  const [current, setCurrent] = useState(periods[0].slug);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px) and (pointer: fine)");
    const upd = () => setHorizontal(mq.matches && !reduce);
    upd();
    mq.addEventListener("change", upd);
    return () => mq.removeEventListener("change", upd);
  }, [reduce]);

  useIsoLayoutEffect(() => {
    if (!horizontal || !track.current) return;
    const measure = () => setDist(Math.max(0, track.current!.scrollWidth - window.innerWidth));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [horizontal, items.length]);

  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });
  const x = useTransform(smooth, (v) => -v * dist);

  // 以畫面中央的作品判斷目前時期
  useMotionValueEvent(smooth, "change", () => {
    if (!track.current) return;
    const mid = window.innerWidth / 2;
    const groups = track.current.querySelectorAll<HTMLElement>("[data-period]");
    for (const g of groups) {
      const r = g.getBoundingClientRect();
      if (r.left <= mid && r.right >= mid) {
        if (g.dataset.period !== current) setCurrent(g.dataset.period!);
        break;
      }
    }
  });

  const grouped = periods.map((p) => ({ p, works: items.filter((i) => i.period === p.slug) })).filter((g) => g.works.length);
  const cur = periods.find((p) => p.slug === current) ?? periods[0];

  if (!horizontal) {
    return (
      <div className="tl-vertical container">
        {grouped.map(({ p, works }) => (
          <section key={p.slug} className="tlv-group" style={{ ["--pc" as string]: p.color }}>
            <header className="tlv-head">
              <span className="tlv-years">
                {p.start}–{p.end}
              </span>
              <h2 className="h3">
                <Link href={`/${locale}/periods/${p.slug}/`}>{p.name[locale]}</Link>
              </h2>
            </header>
            <ol>
              {works.map((w) => (
                <li key={w.slug}>
                  <span className="tlv-year">{w.year}</span>
                  <Link href={`/${locale}/artworks/${w.slug}/`} className="tlv-item">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={w.thumb} alt="" loading="lazy" />
                    <span>
                      <strong>{w.title[locale]}</strong>
                      <small>{w.artistName[locale]}</small>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    );
  }

  return (
    <div ref={section} className="tl-h" style={{ height: `calc(100vh + ${dist}px)` }}>
      <div className="tl-sticky" style={{ ["--pc" as string]: cur.color, ["--pcd" as string]: cur.colorDark }}>
        <div className="tl-bg" />
        <div className="tl-now container">
          <span className="kicker">{t.timeline.title}</span>
          <motion.h2 key={cur.slug} className="h2" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {cur.name[locale]}
          </motion.h2>
          <span className="tl-now-years">
            {cur.start}–{cur.end}
          </span>
        </div>
        <motion.div ref={track} className="tl-track" style={{ x }}>
          {grouped.map(({ p, works }) => (
            <div key={p.slug} className="tl-group" data-period={p.slug} style={{ ["--pc" as string]: p.color }}>
              <div className="tl-group-head">
                <span>
                  {p.start}–{p.end}
                </span>
                <strong>{p.name[locale]}</strong>
                <p>{p.tagline[locale]}</p>
              </div>
              {works.map((w) => (
                <Link key={w.slug} href={`/${locale}/artworks/${w.slug}/`} className="tl-item">
                  <span className="tl-year">{w.year}</span>
                  <span className="tl-img" style={{ aspectRatio: String(Math.max(0.62, Math.min(1.9, w.aspect))) }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={w.thumbLarge} alt="" loading="lazy" />
                  </span>
                  <strong>{w.title[locale]}</strong>
                  <small>{w.artistName[locale]}</small>
                </Link>
              ))}
            </div>
          ))}
        </motion.div>
        <div className="tl-axis">
          <motion.span className="tl-axis-fill" style={{ scaleX: smooth }} />
        </div>
        <p className="tl-hint">{t.timeline.hint}</p>
      </div>
    </div>
  );
}
