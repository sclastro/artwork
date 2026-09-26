"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { CatalogItem } from "@/lib/catalog";
import { clearFavorites, useFavorites } from "@/lib/favorites";
import { useDict, useLocale } from "../LocaleProvider";
import { Masonry } from "../art/Masonry";
import { IconCompare, IconHeart } from "../icons";

export function Favorites({ items }: { items: CatalogItem[] }) {
  const t = useDict();
  const locale = useLocale();
  const favs = useFavorites();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const list = favs.map((s) => items.find((i) => i.slug === s)).filter((i): i is CatalogItem => !!i);
  if (!list.length)
    return (
      <div className="empty">
        <IconHeart width={36} height={36} style={{ margin: "0 auto 12px", color: "var(--accent)" }} />
        <p>{t.favorites.empty}</p>
        <Link href={`/${locale}/explore/`} className="btn btn-primary">
          {t.nav.explore}
        </Link>
      </div>
    );
  return (
    <>
      <div className="explore-status">
        <span className="muted">{t.common.works(list.length)}</span>
        <div className="chips">
          {list.length >= 2 && (
            <Link href={`/${locale}/compare/?a=${list[0].slug}&b=${list[1].slug}`} className="btn btn-sm">
              <IconCompare width={16} height={16} />
              {t.favorites.compareTwo}
            </Link>
          )}
          <button type="button" className="btn btn-sm" onClick={() => window.confirm(t.favorites.confirmClear) && clearFavorites()}>
            {t.favorites.clear}
          </button>
        </div>
      </div>
      <Masonry key={list.map((l) => l.slug).join()} items={list} />
    </>
  );
}
