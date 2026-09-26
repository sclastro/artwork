import Fuse from "fuse.js";
import type { Artwork, Locale } from "@/content/types";
import { artistMap, museumMap, periodMap } from "@/content/index-maps";
import { plainText } from "./richText";

export interface SearchDoc {
  slug: string;
  titleZh: string;
  titleEn: string;
  artistZh: string;
  artistEn: string;
  museumZh: string;
  museumEn: string;
  periodZh: string;
  periodEn: string;
  summaryZh: string;
  summaryEn: string;
  year: number;
}

export function toDoc(a: Artwork): SearchDoc {
  const artist = artistMap[a.artist];
  const museum = museumMap[a.museum];
  const period = periodMap[a.period];
  return {
    slug: a.slug,
    titleZh: a.title.zh,
    titleEn: a.title.en,
    artistZh: artist.name.zh,
    artistEn: artist.name.en,
    museumZh: `${museum.name.zh} ${museum.city.zh}`,
    museumEn: `${museum.name.en} ${museum.city.en}`,
    periodZh: period.name.zh,
    periodEn: period.name.en,
    summaryZh: plainText(a.summary.zh),
    summaryEn: plainText(a.summary.en),
    year: a.year,
  };
}

/** 中英文欄位一併索引：無論介面語言，都可以用任何一種語言搜尋 */
export function createIndex(works: Artwork[]) {
  return new Fuse(works.map(toDoc), {
    keys: [
      { name: "titleZh", weight: 3 },
      { name: "titleEn", weight: 3 },
      { name: "artistZh", weight: 2 },
      { name: "artistEn", weight: 2 },
      { name: "museumZh", weight: 1 },
      { name: "museumEn", weight: 1 },
      { name: "periodZh", weight: 1 },
      { name: "periodEn", weight: 1 },
      { name: "summaryZh", weight: 0.4 },
      { name: "summaryEn", weight: 0.4 },
    ],
    threshold: 0.34,
    ignoreLocation: true,
    minMatchCharLength: 1,
  });
}

export function searchSlugs(index: ReturnType<typeof createIndex>, query: string): string[] {
  const q = query.trim();
  if (!q) return [];
  return index.search(q).map((r) => r.item.slug);
}

export type { Locale };
