import type { Bi, Nationality, PeriodSlug, Subject } from "@/content/types";
import { artworksByYear, getArtist, getMuseum } from "./data";
import { aspect, imageMeta, imageUrl, srcSet } from "./images";

/** 傳給 client 元件的輕量畫作資料（不含導賞全文） */
export interface CatalogItem {
  slug: string;
  title: Bi;
  artist: string;
  artistName: Bi;
  nationality: Nationality;
  year: number;
  date?: Bi;
  period: PeriodSlug;
  museum: string;
  museumName: Bi;
  city: Bi;
  subjects: Subject[];
  image: string;
  aspect: number;
  thumb: string;
  thumbLarge: string;
  srcset: string;
  lqip: string;
  dimensions: { h: number; w: number };
  medium: Bi;
  summary: Bi;
  colors: string[];
}

let cache: CatalogItem[] | null = null;

export function getCatalog(): CatalogItem[] {
  if (cache) return cache;
  cache = artworksByYear.map((a) => {
    const artist = getArtist(a.artist);
    const museum = getMuseum(a.museum);
    const meta = imageMeta(a.image);
    return {
      slug: a.slug,
      title: a.title,
      artist: a.artist,
      artistName: artist.name,
      nationality: artist.nationality,
      year: a.year,
      date: a.date,
      period: a.period,
      museum: a.museum,
      museumName: museum.name,
      city: museum.city,
      subjects: a.subjects,
      image: a.image,
      aspect: aspect(a.image),
      thumb: imageUrl(a.image, 330),
      thumbLarge: imageUrl(a.image, 960),
      srcset: srcSet(a.image, 960),
      lqip: meta.lqip,
      dimensions: a.dimensions,
      medium: a.medium,
      summary: a.summary,
      colors: meta.colors,
    };
  });
  return cache;
}

/** 快速搜尋面板用的最精簡版本 */
export interface PaletteItem {
  slug: string;
  title: Bi;
  artistName: Bi;
  year: number;
  thumb: string;
}

export function getPaletteItems(): PaletteItem[] {
  return getCatalog().map(({ slug, title, artistName, year, thumb }) => ({ slug, title, artistName, year, thumb }));
}
