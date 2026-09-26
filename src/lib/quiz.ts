import type { Artwork, PeriodSlug } from "@/content/types";

export type QuizMode = "artist" | "period" | "year";

export interface QuizQuestion {
  artwork: string;
  options: string[];
  answer: string;
}

/** 可重現的亂數產生器（mulberry32），測試時可固定種子 */
export function rng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function shuffle<T>(arr: T[], rand: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** 年份模式的選項：正確年份加三個相距至少 25 年、彼此亦相距至少 20 年的干擾項 */
function yearOptions(year: number, rand: () => number): string[] {
  const chosen = [year];
  let guard = 0;
  while (chosen.length < 4 && guard++ < 500) {
    const offset = (25 + Math.floor(rand() * 176)) * (rand() < 0.5 ? -1 : 1);
    const y = year + offset;
    if (y < 1400 || y > 1950) continue;
    if (chosen.some((c) => Math.abs(c - y) < 20)) continue;
    chosen.push(y);
  }
  return shuffle(chosen.map(String), rand);
}

/** 出題只需要這幾個欄位，client 端的輕量資料亦可直接使用 */
export type QuizSource = Pick<Artwork, "slug" | "artist" | "period" | "year">;

export function buildQuiz(all: QuizSource[], mode: QuizMode, count: number, seed: number, periodOrder: PeriodSlug[]): QuizQuestion[] {
  const rand = rng(seed);
  const picks = shuffle(all, rand).slice(0, Math.min(count, all.length));
  return picks.map((a) => {
    if (mode === "artist") {
      const others = shuffle([...new Set(all.map((w) => w.artist).filter((s) => s !== a.artist))], rand).slice(0, 3);
      return { artwork: a.slug, options: shuffle([a.artist, ...others], rand), answer: a.artist };
    }
    if (mode === "period") {
      // 干擾項優先取相鄰時期，難度較合理
      const idx = periodOrder.indexOf(a.period);
      const near = periodOrder.filter((p, i) => p !== a.period && Math.abs(i - idx) <= 3);
      const others = shuffle(near, rand).slice(0, 3);
      return { artwork: a.slug, options: shuffle([a.period, ...others], rand), answer: a.period };
    }
    return { artwork: a.slug, options: yearOptions(a.year, rand), answer: String(a.year) };
  });
}
