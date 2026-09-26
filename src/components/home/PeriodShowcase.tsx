"use client";

import Link from "next/link";
import type { Bi } from "@/content/types";
import { useDict, useLocale } from "../LocaleProvider";
import { Parallax } from "../motion/Parallax";
import { Reveal } from "../motion/Reveal";
import { IconArrowRight } from "../icons";

export interface PeriodCardData {
  slug: string;
  name: Bi;
  tagline: Bi;
  start: number;
  end: number;
  color: string;
  count: number;
  src: string;
  srcSet: string;
  lqip: string;
  focus: string;
}

/** 首頁的時期展廳：錯落排列，圖片帶視差 */
export function PeriodShowcase({ items }: { items: PeriodCardData[] }) {
  const t = useDict();
  const locale = useLocale();
  return (
    <div className="period-grid">
      {items.map((p, i) => (
        <Reveal key={p.slug} className={`period-card-wrap ${i % 2 ? "is-offset" : ""}`} delay={(i % 2) * 0.08}>
          <Link href={`/${locale}/periods/${p.slug}/`} className="period-card" style={{ ["--pc" as string]: p.color }}>
            <Parallax className="period-card-media" speed={0.08}>
              <div className="lqip" style={{ backgroundImage: `url(${p.lqip})` }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} srcSet={p.srcSet} sizes="(max-width: 800px) 100vw, 50vw" alt="" loading="lazy" style={{ objectPosition: p.focus }} />
            </Parallax>
            <div className="period-card-body">
              <span className="period-card-num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="period-card-name">{p.name[locale]}</h3>
                <p className="period-card-years">
                  {p.start}–{p.end} · {t.common.works(p.count)}
                </p>
                <p className="period-card-tag">{p.tagline[locale]}</p>
              </div>
              <span className="period-card-arrow" aria-hidden>
                <IconArrowRight />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
