"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { useDict } from "../LocaleProvider";
import { onAnchorClick } from "../motion/SmoothScroll";

/** 側邊目錄（scroll-spy）＋頂部閱讀進度條；手機版為橫向分段標籤 */
export function SectionNav({ sections }: { sections: { id: string; label: string }[] }) {
  const t = useDict();
  const [current, setCurrent] = useState(sections[0]?.id);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setCurrent(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [sections]);

  useEffect(() => {
    // 手機標籤列：令目前分段保持可見。只可橫向捲動標籤列本身；
    // 用 scrollIntoView 會連整頁一併捲動，並打斷正在進行的平滑捲動。
    const nav = document.querySelector<HTMLElement>(".section-tabs");
    const a = nav?.querySelector<HTMLElement>(`a[href="#${current}"]`);
    if (nav && a && nav.clientWidth > 0) {
      nav.scrollTo({ left: a.offsetLeft - (nav.clientWidth - a.clientWidth) / 2, behavior: "smooth" });
    }
  }, [current]);

  return (
    <>
      <motion.div className="read-progress" style={{ scaleX: progress }} aria-hidden />
      <nav className="toc" aria-label={t.artwork.contents}>
        <p className="kicker">{t.artwork.contents}</p>
        <ol>
          {sections.map((s, i) => (
            <li key={s.id}>
              <a href={`#${s.id}`} aria-current={current === s.id ? "true" : undefined} onClick={onAnchorClick}>
                <span className="toc-num">{String(i + 1).padStart(2, "0")}</span>
                {s.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <nav className="section-tabs" aria-label={t.artwork.contents}>
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`} aria-current={current === s.id ? "true" : undefined} onClick={onAnchorClick}>
            {s.label}
          </a>
        ))}
      </nav>
    </>
  );
}
