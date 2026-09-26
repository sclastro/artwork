"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { useDict } from "../LocaleProvider";

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
    // 手機標籤列：令目前分段保持可見
    document.querySelector(`.section-tabs a[href="#${current}"]`)?.scrollIntoView({ block: "nearest", inline: "center" });
  }, [current]);

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 110;
    if (window.__lenis) window.__lenis.scrollTo(top, { duration: 1.1 });
    else window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <>
      <motion.div className="read-progress" style={{ scaleX: progress }} aria-hidden />
      <nav className="toc" aria-label={t.artwork.contents}>
        <p className="kicker">{t.artwork.contents}</p>
        <ol>
          {sections.map((s, i) => (
            <li key={s.id}>
              <a href={`#${s.id}`} aria-current={current === s.id ? "true" : undefined} onClick={(e) => go(e, s.id)}>
                <span className="toc-num">{String(i + 1).padStart(2, "0")}</span>
                {s.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <nav className="section-tabs" aria-label={t.artwork.contents}>
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`} aria-current={current === s.id ? "true" : undefined} onClick={(e) => go(e, s.id)}>
            {s.label}
          </a>
        ))}
      </nav>
    </>
  );
}
