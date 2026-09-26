import { artworks } from "@/content/artworks";
import { artists, artistMap } from "@/content/artists";
import { museums, museumMap } from "@/content/museums";
import { periods, periodMap } from "@/content/periods";
import { glossary, glossaryMap } from "@/content/glossary";
import type { Artist, Artwork, Bi, Locale, Museum, Period, PeriodSlug } from "@/content/types";

export { artworks, artists, museums, periods, glossary, artistMap, museumMap, periodMap, glossaryMap };

/** 依年份排序的全部作品 */
export const artworksByYear: Artwork[] = [...artworks].sort((a, b) => a.year - b.year || a.slug.localeCompare(b.slug));

const artworkMap: Record<string, Artwork> = Object.fromEntries(artworks.map((a) => [a.slug, a]));

export function getArtwork(slug: string): Artwork | undefined {
  return artworkMap[slug];
}

export function getArtist(slug: string): Artist {
  return artistMap[slug];
}

export function getMuseum(slug: string): Museum {
  return museumMap[slug];
}

export function getPeriod(slug: PeriodSlug): Period {
  return periodMap[slug];
}

export function worksInPeriod(slug: PeriodSlug): Artwork[] {
  return artworksByYear.filter((a) => a.period === slug);
}

export function worksByArtist(slug: string): Artwork[] {
  return artworksByYear.filter((a) => a.artist === slug);
}

export function worksInMuseum(slug: string): Artwork[] {
  return artworksByYear.filter((a) => a.museum === slug);
}

/** 有作品收錄的畫家，按出生年排序 */
export const artistsByBirth: Artist[] = [...artists]
  .filter((a) => artworks.some((w) => w.artist === a.slug))
  .sort((a, b) => a.born - b.born);

export function artistsInPeriod(slug: PeriodSlug): Artist[] {
  const seen = new Set(worksInPeriod(slug).map((w) => w.artist));
  return artistsByBirth.filter((a) => seen.has(a.slug));
}

/** 有作品收錄的博物館 */
export const museumsInUse: Museum[] = museums.filter((m) => artworks.some((w) => w.museum === m.slug));

export function displayDate(a: Artwork, locale: Locale): string {
  return a.date ? a.date[locale] : String(a.year);
}

export function displayDimensions(a: Artwork, locale: Locale): string {
  const f = (n: number) => (Number.isInteger(n) ? String(n) : n.toFixed(1));
  return locale === "zh"
    ? `${f(a.dimensions.h)} × ${f(a.dimensions.w)} 厘米`
    : `${f(a.dimensions.h)} × ${f(a.dimensions.w)} cm`;
}

/** 同一時期中的上一幅與下一幅 */
export function neighbours(a: Artwork): { prev?: Artwork; next?: Artwork } {
  const list = worksInPeriod(a.period);
  const i = list.findIndex((w) => w.slug === a.slug);
  return { prev: list[i - 1], next: list[i + 1] };
}

/** 相關作品：先用手動指定，再補同畫家、同時期 */
export function relatedWorks(a: Artwork, n = 6): Artwork[] {
  const out: Artwork[] = [];
  const push = (w?: Artwork) => {
    if (w && w.slug !== a.slug && !out.some((o) => o.slug === w.slug)) out.push(w);
  };
  (a.related ?? []).forEach((s) => push(getArtwork(s)));
  worksByArtist(a.artist).forEach(push);
  worksInPeriod(a.period).forEach(push);
  return out.slice(0, n);
}

/** 估算閱讀時間（中文每分鐘約 400 字，英文約 220 詞） */
export function readingMinutes(a: Artwork, locale: Locale): number {
  const texts: Bi[] = [
    a.summary,
    ...a.background,
    ...a.technique,
    ...a.symbolism.flatMap((s) => [s.title, s.body]),
    ...a.anecdotes,
    ...a.legacy,
  ];
  const all = texts.map((t) => t[locale]).join(" ");
  const n = locale === "zh" ? all.replace(/\s/g, "").length / 400 : all.split(/\s+/).length / 220;
  return Math.max(1, Math.round(n));
}

export function periodIndex(slug: PeriodSlug): number {
  return periods.findIndex((p) => p.slug === slug);
}
