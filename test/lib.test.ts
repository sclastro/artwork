import { describe, expect, it } from "vitest";
import { parseRich, plainText, termSlugs, hotspotIndexes } from "@/lib/richText";
import { distribute } from "@/lib/masonry";
import { buildQuiz, rng, shuffle } from "@/lib/quiz";
import { swapLocale, localeFromPath } from "@/i18n/config";
import { zh } from "@/i18n/zh";
import { en } from "@/i18n/en";
import { imageUrl, srcSet, THUMB_WIDTHS } from "@/lib/images";
import { artworks } from "@/content/artworks";
import { PERIOD_SLUGS } from "@/content/types";

describe("richText", () => {
  it("parses terms, labelled terms and hotspot links", () => {
    const t = parseRich("A [[sfumato]] and [[impasto|thick paint]] near {{2|the tree}}.");
    expect(t).toEqual([
      { type: "text", text: "A " },
      { type: "term", slug: "sfumato", label: undefined },
      { type: "text", text: " and " },
      { type: "term", slug: "impasto", label: "thick paint" },
      { type: "text", text: " near " },
      { type: "hotspot", index: 2, label: "the tree" },
      { type: "text", text: "." },
    ]);
  });
  it("produces plain text", () => {
    expect(plainText("[[sfumato]] {{0|here}}", (s) => s.toUpperCase())).toBe("SFUMATO here");
    expect(termSlugs("[[a-b]] x [[c|d]]")).toEqual(["a-b", "c"]);
    expect(hotspotIndexes("{{3|x}} {{0|y}}")).toEqual([3, 0]);
  });
});

describe("masonry", () => {
  it("balances columns by aspect ratio and keeps order within columns", () => {
    const items = [1, 0.5, 2, 1, 1, 0.8].map((a, i) => ({ id: i, a }));
    const cols = distribute(items, (x) => x.a, 3);
    expect(cols.flat()).toHaveLength(items.length);
    for (const c of cols) expect(c.map((x) => x.id)).toEqual([...c.map((x) => x.id)].sort((p, q) => p - q));
    expect(cols[0][0].id).toBe(0);
    expect(cols[1][0].id).toBe(1);
  });
});

describe("quiz", () => {
  it("is deterministic for a seed and every question contains its answer", () => {
    const a = buildQuiz(artworks, "artist", 10, 42, [...PERIOD_SLUGS]);
    const b = buildQuiz(artworks, "artist", 10, 42, [...PERIOD_SLUGS]);
    expect(a).toEqual(b);
    for (const mode of ["artist", "period", "year"] as const) {
      const qs = buildQuiz(artworks, mode, 10, 7, [...PERIOD_SLUGS]);
      expect(qs).toHaveLength(10);
      expect(new Set(qs.map((q) => q.artwork)).size).toBe(10);
      for (const q of qs) {
        expect(q.options).toContain(q.answer);
        expect(new Set(q.options).size).toBe(q.options.length);
        expect(q.options.length).toBe(4);
      }
    }
  });
  it("year distractors are at least 20 years apart from each other", () => {
    for (let seed = 0; seed < 30; seed++) {
      for (const q of buildQuiz(artworks, "year", 10, seed, [...PERIOD_SLUGS])) {
        const ys = q.options.map(Number).sort((x, y) => x - y);
        for (let i = 1; i < ys.length; i++) expect(ys[i] - ys[i - 1]).toBeGreaterThanOrEqual(20);
      }
    }
  });
  it("shuffle keeps all elements", () => {
    expect(shuffle([1, 2, 3, 4], rng(1)).sort()).toEqual([1, 2, 3, 4]);
  });
});

describe("i18n", () => {
  it("swaps the locale segment and keeps the rest of the path", () => {
    expect(swapLocale("/zh/artworks/the-starry-night/", "en")).toBe("/en/artworks/the-starry-night/");
    expect(swapLocale("/en/", "zh")).toBe("/zh/");
    expect(swapLocale("/en", "zh")).toBe("/zh/");
    expect(swapLocale("/artwork/zh/periods/", "en", "/artwork")).toBe("/en/periods/");
    expect(localeFromPath("/artwork/en/quiz/", "/artwork")).toBe("en");
    expect(localeFromPath("/", "")).toBeNull();
  });
  it("both dictionaries have identical keys", () => {
    const keys = (o: object, p = ""): string[] =>
      Object.entries(o).flatMap(([k, v]) => (v && typeof v === "object" && !Array.isArray(v) ? keys(v, `${p}${k}.`) : [`${p}${k}`]));
    expect(keys(en).sort()).toEqual(keys(zh).sort());
  });
});

describe("images", () => {
  it("only requests standard Wikimedia thumbnail widths", () => {
    for (const a of artworks.slice(0, 10)) {
      for (const w of [100, 400, 700, 1000, 2000]) {
        const url = imageUrl(a.image, w);
        const m = url.match(/\/(\d+)px-/);
        if (m) expect(THUMB_WIDTHS).toContain(Number(m[1]) as (typeof THUMB_WIDTHS)[number]);
      }
      expect(srcSet(a.image)).toMatch(/\d+w/);
    }
  });
});
