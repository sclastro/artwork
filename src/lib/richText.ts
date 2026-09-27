// 內文標記解析：
//   [[slug]] / [[slug|顯示文字]]  → 詞彙表術語
//   {{2|顯示文字}}                → 連結至索引 2 的熱點
//   ((English name))              → 人名／作品名的英文註（由 lib/names 自動加入）
export type RichToken =
  | { type: "text"; text: string }
  | { type: "term"; slug: string; label?: string }
  | { type: "hotspot"; index: number; label: string }
  | { type: "en"; text: string };

const RE = /\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]|\{\{(\d+)\|([^}]+)\}\}|\(\(([^)]+)\)\)/g;

export function parseRich(input: string): RichToken[] {
  const out: RichToken[] = [];
  let last = 0;
  for (const m of input.matchAll(RE)) {
    const i = m.index ?? 0;
    if (i > last) out.push({ type: "text", text: input.slice(last, i) });
    if (m[1]) out.push({ type: "term", slug: m[1], label: m[2] });
    else if (m[3]) out.push({ type: "hotspot", index: Number(m[3]), label: m[4] });
    else out.push({ type: "en", text: m[5] });
    last = i + m[0].length;
  }
  if (last < input.length) out.push({ type: "text", text: input.slice(last) });
  return out;
}

/** 去除標記，得出純文字（術語沒有顯示文字時由 resolveTerm 提供；英文註略去） */
export function plainText(input: string, resolveTerm: (slug: string) => string = (s) => s): string {
  return parseRich(input)
    .map((t) => (t.type === "text" ? t.text : t.type === "term" ? (t.label ?? resolveTerm(t.slug)) : t.type === "hotspot" ? t.label : ""))
    .join("");
}

/** 列出字串中引用的所有術語 slug */
export function termSlugs(input: string): string[] {
  return parseRich(input).flatMap((t) => (t.type === "term" ? [t.slug] : []));
}

export function hotspotIndexes(input: string): number[] {
  return parseRich(input).flatMap((t) => (t.type === "hotspot" ? [t.index] : []));
}
