// 內容資料的型別。所有面向讀者的文字一律為雙語 Bi，型別檢查即可捕捉漏譯。

export type Locale = "zh" | "en";

export type Bi = { zh: string; en: string };

export const PERIOD_SLUGS = [
  "renaissance",
  "northern-renaissance",
  "baroque",
  "rococo",
  "neoclassicism",
  "romanticism",
  "realism",
  "impressionism",
  "post-impressionism",
  "modern",
] as const;
export type PeriodSlug = (typeof PERIOD_SLUGS)[number];

export const SUBJECTS = [
  "portrait",
  "landscape",
  "religious",
  "mythology",
  "history",
  "everyday",
  "night",
  "sea",
  "nude",
  "interior",
  "city",
  "abstract",
  "still-life",
] as const;
export type Subject = (typeof SUBJECTS)[number];

export const NATIONALITIES = [
  "italian",
  "flemish",
  "netherlandish",
  "dutch",
  "german",
  "spanish",
  "french",
  "english",
  "swiss",
  "american",
  "russian",
  "norwegian",
  "austrian",
] as const;
export type Nationality = (typeof NATIONALITIES)[number];

export interface Period {
  slug: PeriodSlug;
  name: Bi;
  /** 大約起訖年份，時間軸及排序用 */
  start: number;
  end: number;
  /** 時期標識色（低飽和度），淺色／深色模式各一 */
  color: string;
  colorDark: string;
  tagline: Bi;
  intro: Bi[];
  traits: { title: Bi; body: Bi }[];
  /** 時期頁頂部大圖所用的畫作 slug */
  hero: string;
}

export interface Artist {
  slug: string;
  name: Bi;
  born: number;
  died: number;
  birthPlace: Bi;
  nationality: Nationality;
  bio: Bi[];
}

export interface Museum {
  slug: string;
  name: Bi;
  city: Bi;
  country: Bi;
  lat: number;
  lng: number;
  url: string;
}

export interface Hotspot {
  /** 0–1 相對座標，以畫面左上角為原點 */
  x: number;
  y: number;
  title: Bi;
  body: Bi;
}

export interface SymbolCard {
  title: Bi;
  body: Bi;
  /** 對應 hotspots 的索引（由 0 起） */
  hotspot?: number;
}

/**
 * 內文可用的標記（見 lib/richText.ts）：
 *   [[term]] 或 [[term|顯示文字]] —— 詞彙表術語
 *   {{2|顯示文字}}                  —— 連結至第 3 個熱點（索引由 0 起）
 */
export interface Artwork {
  slug: string;
  title: Bi;
  artist: string;
  /** 排序用年份（取完成年或起始年） */
  year: number;
  /** 顯示用日期，如「約 1503–1519」；省略則顯示 year */
  date?: Bi;
  period: PeriodSlug;
  medium: Bi;
  /** 高 × 闊，單位厘米 */
  dimensions: { h: number; w: number };
  museum: string;
  /** Wikimedia Commons 檔名（不含 File: 前綴） */
  image: string;
  subjects: Subject[];
  /** 一段導語，用於卡片、搜尋及 meta description */
  summary: Bi;
  background: Bi[];
  technique: Bi[];
  symbolism: SymbolCard[];
  anecdotes: Bi[];
  legacy: Bi[];
  hotspots: Hotspot[];
  related?: string[];
}

export interface GlossaryTerm {
  slug: string;
  term: Bi;
  definition: Bi;
}

export interface ImageMeta {
  file: string;
  width: number;
  height: number;
  /** 縮圖網址模板，{w} 代入寬度 */
  thumb: string;
  original: string;
  page: string;
  artist: string;
  license: string;
  /** 24px 寬模糊預覽（data URL） */
  lqip: string;
  /** 主色（由多至少） */
  colors: string[];
  /** 自存於 public/art/ 的 WebP（由 npm run fetch-images 產生）：`${id}-${w}.webp` */
  local?: { id: string; widths: number[] };
}
