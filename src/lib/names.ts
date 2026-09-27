import { artists } from "@/content/artists";
import { artworks } from "@/content/artworks";
import { EXTRA_NAMES } from "@/content/names";
import type { Locale } from "@/content/types";

// 在中文內文中，為人名與作品名在「每頁首次出現」時加上英文：
//   梵高 → 梵高((Vincent van Gogh))
// ((…)) 由 lib/richText 解析，RichText 顯示為「（Vincent van Gogh 🔊）」。

let cached: { re: RegExp; map: Map<string, string | null> } | null = null;

export function nameDictionary(): Map<string, string | null> {
  const map = new Map<string, string | null>();
  for (const a of artists) map.set(a.name.zh, a.name.en);
  for (const w of artworks) map.set(`《${w.title.zh}》`, w.title.en);
  for (const [k, v] of Object.entries(EXTRA_NAMES)) map.set(k, v);
  return map;
}

function matcher() {
  if (!cached) {
    const map = nameDictionary();
    // 較長的鍵先配對，令「拿破崙三世」優先於「拿破崙」
    const keys = [...map.keys()].sort((a, b) => b.length - a.length).map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    cached = { re: new RegExp(keys.join("|"), "g"), map };
  }
  return cached;
}

/** 內文標記（術語、熱點、英文註）——這些範圍內不加註 */
const MARKUP = /\[\[[^\]]*\]\]|\{\{\d+\|[^}]*\}\}|\(\([^)]*\)\)/g;

function annotateText(text: string, seen: Set<string>): string {
  const { re, map } = matcher();
  return text.replace(re, (m) => {
    const en = map.get(m);
    if (!en || seen.has(en)) return m;
    seen.add(en);
    return `${m}((${en}))`;
  });
}

/**
 * 按次序處理一頁的所有段落：每個名稱只在第一次出現時加註。
 * 只處理中文；英文頁面原樣返回。
 */
export function annotateNames(texts: string[], locale: Locale, seen = new Set<string>()): string[] {
  if (locale !== "zh") return texts;
  return texts.map((t) => {
    let out = "";
    let last = 0;
    for (const m of t.matchAll(MARKUP)) {
      out += annotateText(t.slice(last, m.index), seen) + m[0];
      last = (m.index ?? 0) + m[0].length;
    }
    return out + annotateText(t.slice(last), seen);
  });
}
