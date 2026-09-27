import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { artworks } from "@/content/artworks";
import { artists, artistMap } from "@/content/artists";
import { museums, museumMap } from "@/content/museums";
import { periods, periodMap } from "@/content/periods";
import { glossary, glossaryMap } from "@/content/glossary";
import { PERIOD_SLUGS, type Bi } from "@/content/types";
import imagesJson from "@/data/images.json";
import { hotspotIndexes, termSlugs } from "@/lib/richText";

const images = imagesJson as Record<string, { license: string; width: number; height: number; thumb: string; local?: { id: string; widths: number[] } }>;

/** 收集物件中所有雙語欄位 */
function collectBi(obj: unknown, path = "", out: { path: string; bi: Bi }[] = []) {
  if (obj && typeof obj === "object") {
    const o = obj as Record<string, unknown>;
    if (typeof o.zh === "string" && typeof o.en === "string" && Object.keys(o).length === 2) out.push({ path, bi: o as Bi });
    else for (const [k, v] of Object.entries(o)) collectBi(v, `${path}.${k}`, out);
  }
  return out;
}

describe("artworks", () => {
  it("has at least 50 works with unique slugs", () => {
    expect(artworks.length).toBeGreaterThanOrEqual(50);
    expect(new Set(artworks.map((a) => a.slug)).size).toBe(artworks.length);
  });

  it.each(artworks.map((a) => [a.slug, a] as const))("%s references valid artist, museum, period and image", (_, a) => {
    expect(artistMap[a.artist], `artist ${a.artist}`).toBeDefined();
    expect(museumMap[a.museum], `museum ${a.museum}`).toBeDefined();
    expect(periodMap[a.period], `period ${a.period}`).toBeDefined();
    const img = images[a.image];
    expect(img, `image metadata for ${a.image}`).toBeDefined();
    expect(img.license).toMatch(/public domain|pd|cc0/i);
    expect(img.thumb).toContain("{w}px-");
    // 自存圖片（npm run fetch-images）
    expect(img.local, `local images for ${a.image}; run npm run fetch-images`).toBeDefined();
    for (const w of img.local!.widths) {
      expect(fs.existsSync(path.join(__dirname, "../public/art", `${img.local!.id}-${w}.webp`)), `${img.local!.id}-${w}.webp`).toBe(true);
    }
  });

  it.each(artworks.map((a) => [a.slug, a] as const))("%s has complete bilingual content", (_, a) => {
    for (const { path, bi } of collectBi(a)) {
      expect(bi.zh.trim(), `${a.slug}${path}.zh`).not.toBe("");
      expect(bi.en.trim(), `${a.slug}${path}.en`).not.toBe("");
    }
    expect(a.background.length).toBeGreaterThanOrEqual(2);
    expect(a.technique.length).toBeGreaterThanOrEqual(2);
    expect(a.symbolism.length).toBeGreaterThanOrEqual(2);
    expect(a.anecdotes.length).toBeGreaterThanOrEqual(2);
    expect(a.legacy.length).toBeGreaterThanOrEqual(1);
    expect(a.hotspots.length).toBeGreaterThanOrEqual(4);
    expect(a.dimensions.h).toBeGreaterThan(0);
    expect(a.dimensions.w).toBeGreaterThan(0);
  });

  it.each(artworks.map((a) => [a.slug, a] as const))("%s hotspots and markup are valid", (_, a) => {
    for (const h of a.hotspots) {
      expect(h.x).toBeGreaterThanOrEqual(0);
      expect(h.x).toBeLessThanOrEqual(1);
      expect(h.y).toBeGreaterThanOrEqual(0);
      expect(h.y).toBeLessThanOrEqual(1);
    }
    for (const s of a.symbolism) if (s.hotspot != null) expect(s.hotspot).toBeLessThan(a.hotspots.length);
    for (const { path, bi } of collectBi(a)) {
      for (const lang of ["zh", "en"] as const) {
        for (const t of termSlugs(bi[lang])) expect(glossaryMap[t], `${a.slug}${path}.${lang}: unknown term [[${t}]]`).toBeDefined();
        for (const i of hotspotIndexes(bi[lang])) expect(i, `${a.slug}${path}.${lang}: hotspot {{${i}}}`).toBeLessThan(a.hotspots.length);
      }
      // 中英兩版引用的熱點應一致
      expect(hotspotIndexes(bi.zh).sort(), `${a.slug}${path} hotspot links differ between languages`).toEqual(hotspotIndexes(bi.en).sort());
    }
    for (const r of a.related ?? []) expect(artworks.some((w) => w.slug === r), `${a.slug} related ${r}`).toBe(true);
  });

  it("the Chinese text does not use Cantonese colloquialisms", () => {
    const colloquial = /[嘅咗喺唔冇啲嗰俾]/;
    for (const a of artworks) for (const { path, bi } of collectBi(a)) expect(colloquial.test(bi.zh), `${a.slug}${path}`).toBe(false);
  });

  it("the Starry Night page exists", () => {
    expect(artworks.find((a) => a.slug === "the-starry-night")).toBeDefined();
  });
});

describe("periods, artists, museums, glossary", () => {
  it("defines all ten periods in order with a valid hero", () => {
    expect(periods.map((p) => p.slug)).toEqual([...PERIOD_SLUGS]);
    for (const p of periods) {
      expect(artworks.some((a) => a.slug === p.hero), `${p.slug} hero ${p.hero}`).toBe(true);
      expect(p.traits).toHaveLength(3);
      expect(p.start).toBeLessThan(p.end);
    }
  });

  it("every period and every artist has at least one work", () => {
    for (const p of periods) expect(artworks.some((a) => a.period === p.slug), p.slug).toBe(true);
    for (const a of artists) expect(artworks.some((w) => w.artist === a.slug), a.slug).toBe(true);
  });

  it("artist lifespans are consistent with their works", () => {
    for (const w of artworks) {
      const a = artistMap[w.artist];
      expect(w.year, `${w.slug} painted within ${a.slug}'s life`).toBeGreaterThanOrEqual(a.born + 10);
      expect(w.year).toBeLessThanOrEqual(a.died);
    }
  });

  it("museums have valid coordinates and https links", () => {
    for (const m of museums) {
      expect(Math.abs(m.lat)).toBeLessThanOrEqual(90);
      expect(Math.abs(m.lng)).toBeLessThanOrEqual(180);
      expect(m.url).toMatch(/^https:\/\//);
    }
  });

  it("glossary slugs are unique and cross-references resolve", () => {
    expect(new Set(glossary.map((g) => g.slug)).size).toBe(glossary.length);
    for (const g of glossary) for (const lang of ["zh", "en"] as const) for (const t of termSlugs(g.definition[lang])) expect(glossaryMap[t], `${g.slug} → ${t}`).toBeDefined();
  });

  it("period and artist texts only reference known terms", () => {
    const texts = [...periods.flatMap((p) => collectBi(p)), ...artists.flatMap((a) => collectBi(a))];
    for (const { bi } of texts) for (const lang of ["zh", "en"] as const) for (const t of termSlugs(bi[lang])) expect(glossaryMap[t], t).toBeDefined();
  });
});
