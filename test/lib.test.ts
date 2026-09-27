import { describe, expect, it } from "vitest";
import { parseRich, plainText, termSlugs, hotspotIndexes } from "@/lib/richText";
import { distribute } from "@/lib/masonry";
import { buildQuiz, rng, shuffle } from "@/lib/quiz";
import { swapLocale, localeFromPath } from "@/i18n/config";
import { zh } from "@/i18n/zh";
import { en } from "@/i18n/en";
import { imageMeta, imageUrl, srcSet, zoomUrl } from "@/lib/images";
import { artworks } from "@/content/artworks";
import { PERIOD_SLUGS } from "@/content/types";
import { annotateNames, nameDictionary } from "@/lib/names";

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
  it("serves self-hosted WebP for lists and heroes", () => {
    for (const a of artworks.slice(0, 10)) {
      for (const w of [100, 400, 700, 1000, 2000]) {
        expect(imageUrl(a.image, w)).toMatch(/\/art\/[0-9a-f]{12}-\d+\.webp$/);
      }
      expect(srcSet(a.image)).toMatch(/\.webp \d+w/);
    }
  });
  it("picks the smallest local width that is large enough", () => {
    const a = artworks.find((x) => imageMeta(x.image).width > 2000)!;
    expect(imageUrl(a.image, 300)).toMatch(/-320\.webp$/);
    expect(imageUrl(a.image, 500)).toMatch(/-960\.webp$/);
    expect(imageUrl(a.image, 4000)).toMatch(/-1920\.webp$/);
  });
  it("uses only standard Wikimedia widths for deep zoom", () => {
    for (const a of artworks) {
      const m = zoomUrl(a.image).match(/\/(\d+)px-/);
      if (m) expect(m[1]).toBe("3840");
    }
  });
});

describe("English name annotations", () => {
  it("annotates only the first occurrence on a page, across paragraphs", () => {
    const out = annotateNames(["梵高與高更同住。", "梵高後來離開，《星夜》也在此時完成。"], "zh");
    expect(out[0]).toBe("梵高((Vincent van Gogh))與高更((Paul Gauguin))同住。");
    expect(out[1]).toBe("梵高後來離開，《星夜》((The Starry Night))也在此時完成。");
  });
  it("prefers the longest match and respects blocked phrases", () => {
    expect(annotateNames(["拿破崙三世下令"], "zh")[0]).toBe("拿破崙三世((Napoleon III))下令");
    expect(annotateNames(["奧斯曼帝國的後宮"], "zh")[0]).toBe("奧斯曼帝國的後宮");
    expect(annotateNames(["拉斐爾前派畫家"], "zh")[0]).toBe("拉斐爾前派((Pre-Raphaelites))畫家");
  });
  it("never annotates inside markup and leaves English pages alone", () => {
    expect(annotateNames(["[[pre-raphaelites|拉斐爾前派]]與{{0|梵高的柏樹}}"], "zh")[0]).toBe("[[pre-raphaelites|拉斐爾前派]]與{{0|梵高的柏樹}}");
    expect(annotateNames(["Van Gogh"], "en")[0]).toBe("Van Gogh");
  });
  it("parses the annotation as its own token and drops it from plain text", () => {
    const s = "梵高((Vincent van Gogh))的畫";
    expect(parseRich(s)).toEqual([
      { type: "text", text: "梵高" },
      { type: "en", text: "Vincent van Gogh" },
      { type: "text", text: "的畫" },
    ]);
    expect(plainText(s)).toBe("梵高的畫");
  });
  it("has no name keys that are single characters or contain markup", () => {
    for (const k of nameDictionary().keys()) {
      expect(k.length, k).toBeGreaterThan(1);
      expect(k).not.toMatch(/[[\]{}()]/);
    }
  });
});
