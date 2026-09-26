"use client";

import { useEffect, useRef, useState } from "react";
import type { CatalogItem } from "@/lib/catalog";
import { distribute } from "@/lib/masonry";
import { ArtCard } from "./ArtCard";
import { Reveal } from "../motion/Reveal";

/** 瀑布流：保留每幅畫的原始比例。首次繪製用 CSS columns，掛載後改為按比例平衡分欄 */
export function Masonry({ items, maxCols = 4, morph = true }: { items: CatalogItem[]; maxCols?: number; morph?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [cols, setCols] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const w = el.clientWidth;
      const n = w < 520 ? 2 : w < 860 ? 3 : Math.min(maxCols, w < 1200 ? 3 : 4);
      setCols(n);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [maxCols]);

  const sizes = cols ? `(max-width: 640px) ${Math.round(100 / cols)}vw, ${Math.round(100 / cols)}vw` : undefined;

  if (!cols) {
    return (
      <div ref={ref} className="masonry-fallback">
        {items.map((it) => (
          <ArtCard key={it.slug} item={it} morph={false} />
        ))}
      </div>
    );
  }

  const columns = distribute(items, (i) => i.aspect, cols);
  return (
    <div ref={ref} className="masonry" style={{ ["--cols" as string]: cols }}>
      {columns.map((col, ci) => (
        <div className="masonry-col" key={ci}>
          {col.map((it, i) => (
            <Reveal key={it.slug} delay={Math.min(i * 0.05 + ci * 0.06, 0.4)}>
              <ArtCard item={it} sizes={sizes} morph={morph} />
            </Reveal>
          ))}
        </div>
      ))}
    </div>
  );
}
