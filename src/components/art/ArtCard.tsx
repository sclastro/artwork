"use client";

import Link from "next/link";
import { ViewTransition } from "react";
import type { CatalogItem } from "@/lib/catalog";
import { periodMap } from "@/content/index-maps";
import { useFavorites } from "@/lib/favorites";
import { useLocale } from "../LocaleProvider";
import { ArtImage } from "./ArtImage";
import { IconHeart } from "../icons";

interface Props {
  item: CatalogItem;
  sizes?: string;
  /** 是否參與縮圖→大圖的轉場（同一頁內同一作品只能有一張） */
  morph?: boolean;
  showPeriod?: boolean;
  fixedAspect?: number;
  priority?: boolean;
}

export function ArtCard({ item, sizes = "(max-width: 640px) 50vw, (max-width: 1100px) 33vw, 25vw", morph = true, showPeriod = true, fixedAspect, priority }: Props) {
  const locale = useLocale();
  const favs = useFavorites();
  const period = periodMap[item.period];
  const image = (
    <ArtImage
      src={item.thumbLarge}
      srcSet={item.srcset}
      sizes={sizes}
      alt={item.title[locale]}
      lqip={item.lqip}
      aspect={fixedAspect ?? item.aspect}
      priority={priority}
    />
  );
  return (
    <Link href={`/${locale}/artworks/${item.slug}/`} className="art-card" style={{ ["--pc" as string]: period.color }}>
      <div className="art-card-frame">
        {morph ? (
          <ViewTransition name={`art-${item.slug}`} share="morph" default="none">
            {image}
          </ViewTransition>
        ) : (
          image
        )}
        {favs.includes(item.slug) && (
          <span className="fav-dot" aria-hidden>
            <IconHeart filled />
          </span>
        )}
      </div>
      <div className="art-card-meta">
        {showPeriod && (
          <span className="art-card-period">
            <i />
            {period.name[locale]}
          </span>
        )}
        <span className="art-card-title">{item.title[locale]}</span>
        <span className="art-card-sub">
          {item.artistName[locale]} · {item.date?.[locale] ?? item.year}
        </span>
      </div>
    </Link>
  );
}
