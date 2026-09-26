/**
 * 由 Wikimedia Commons 取得畫作圖片資料，寫入 src/data/images.json（提交入 repo）。
 *
 *   npm run images                 掃描 src/content/artworks/*.ts 的 image 欄位，補回缺少的項目，並刪除已不再使用者
 *   npm run images -- --refresh    全部重新取得
 *   npm run images -- 檔名 檔名…    只補指定檔案（不刪除其他項目）
 *
 * 每項記錄原圖尺寸、縮圖網址模板、作者、授權、24px 模糊預覽及主色。
 * 非公有領域的圖片會令腳本報錯，避免誤用受版權保護的作品。
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import type { ImageMeta } from "../src/content/types";

const UA = "TheGalleryWalk/1.0 (https://github.com/sclastro/artwork) build-script";
const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "src/data/images.json");
const ARTWORK_DIR = path.join(ROOT, "src/content/artworks");

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function get(url: string): Promise<Response> {
  for (let i = 0; i < 10; i++) {
    const res = await fetch(url, { headers: { "User-Agent": UA } });
    if (res.status === 429 || res.status >= 500) {
      await sleep(2000 * (i + 1));
      continue;
    }
    if (!res.ok) throw new Error(`${res.status} ${url}`);
    return res;
  }
  throw new Error(`Rate limited too many times: ${url}`);
}

function scanArtworkImages(): string[] {
  const names: string[] = [];
  for (const f of fs.readdirSync(ARTWORK_DIR)) {
    if (!f.endsWith(".ts") || f === "index.ts") continue;
    const src = fs.readFileSync(path.join(ARTWORK_DIR, f), "utf8");
    const m = src.match(/^\s*image:\s*("(?:[^"\\]|\\.)*")/m);
    if (m) names.push(JSON.parse(m[1]));
  }
  return names;
}

const stripHtml = (s: string) =>
  s
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();

/** 簡單 k-means，抽取主色 */
function dominantColors(pixels: Buffer, k = 6): string[] {
  const pts: [number, number, number][] = [];
  for (let i = 0; i < pixels.length; i += 3) pts.push([pixels[i], pixels[i + 1], pixels[i + 2]]);
  let centers = Array.from({ length: k }, (_, i) => pts[Math.floor(((i + 0.5) * pts.length) / k)]);
  let assign = new Array(pts.length).fill(0);
  for (let iter = 0; iter < 12; iter++) {
    assign = pts.map((p) => {
      let best = 0;
      let bd = Infinity;
      centers.forEach((c, j) => {
        const d = (p[0] - c[0]) ** 2 + (p[1] - c[1]) ** 2 + (p[2] - c[2]) ** 2;
        if (d < bd) {
          bd = d;
          best = j;
        }
      });
      return best;
    });
    centers = centers.map((c, j) => {
      const mine = pts.filter((_, i) => assign[i] === j);
      if (!mine.length) return c;
      return [0, 1, 2].map((ch) => Math.round(mine.reduce((s, p) => s + p[ch], 0) / mine.length)) as [
        number,
        number,
        number,
      ];
    });
  }
  const counts = centers.map((_, j) => assign.filter((a) => a === j).length);
  const order = centers.map((c, j) => ({ c, n: counts[j] })).sort((a, b) => b.n - a.n);
  const out: [number, number, number][] = [];
  for (const { c } of order) {
    if (out.some((o) => Math.hypot(o[0] - c[0], o[1] - c[1], o[2] - c[2]) < 28)) continue;
    out.push(c);
    if (out.length === 5) break;
  }
  return out.map((c) => "#" + c.map((v) => v.toString(16).padStart(2, "0")).join(""));
}

interface ApiPage {
  title: string;
  missing?: boolean;
  imageinfo?: {
    width: number;
    height: number;
    url: string;
    descriptionurl: string;
    thumburl: string;
    extmetadata: Record<string, { value: string }>;
  }[];
}

async function fetchMeta(names: string[]): Promise<Record<string, ImageMeta>> {
  const result: Record<string, ImageMeta> = {};
  for (let i = 0; i < names.length; i += 40) {
    const batch = names.slice(i, i + 40);
    const params = new URLSearchParams({
      action: "query",
      titles: batch.map((n) => "File:" + n).join("|"),
      prop: "imageinfo",
      iiprop: "url|size|extmetadata",
      iiextmetadatafilter: "Artist|LicenseShortName",
      iiurlwidth: "250",
      redirects: "1",
      format: "json",
      formatversion: "2",
    });
    const data = await (await get("https://commons.wikimedia.org/w/api.php?" + params)).json();
    const q = data.query;
    // 請求名稱 → 最終標題（經 normalize 及 redirect）
    const resolve = (t: string) => {
      let cur = "File:" + t;
      for (const n of q.normalized ?? []) if (n.from === cur) cur = n.to;
      for (const r of q.redirects ?? []) if (r.from === cur) cur = r.to;
      return cur;
    };
    const pages: Record<string, ApiPage> = {};
    for (const p of q.pages as ApiPage[]) pages[p.title] = p;

    for (const name of batch) {
      const page = pages[resolve(name)];
      if (!page || page.missing || !page.imageinfo) throw new Error(`Commons file not found: ${name}`);
      const ii = page.imageinfo[0];
      const license = stripHtml(ii.extmetadata.LicenseShortName?.value ?? "");
      if (!/public domain|^pd|cc0/i.test(license)) throw new Error(`Not public domain (${license}): ${name}`);
      const thumb = ii.thumburl
        .split("?")[0]
        .replace("://thumb.wikimedia.org/", "://upload.wikimedia.org/")
        .replace(/\/250px-/, "/{w}px-");
      if (!thumb.includes("{w}px-")) throw new Error(`Unexpected thumb URL: ${ii.thumburl}`);

      await sleep(400);
      const tiny = Buffer.from(await (await get(thumb.replace("{w}", "60"))).arrayBuffer());
      const lqip = await sharp(tiny).resize({ width: 24 }).jpeg({ quality: 50 }).toBuffer();
      const raw = await sharp(tiny).resize(40, 40, { fit: "fill" }).removeAlpha().raw().toBuffer();

      result[name] = {
        file: page.title.replace(/^File:/, ""),
        width: ii.width,
        height: ii.height,
        thumb,
        original: ii.url,
        page: ii.descriptionurl,
        artist: stripHtml(ii.extmetadata.Artist?.value ?? "").slice(0, 160),
        license,
        lqip: "data:image/jpeg;base64," + lqip.toString("base64"),
        colors: dominantColors(raw),
      };
      console.log("✓", name, `${ii.width}×${ii.height}`);
    }
    await sleep(1000);
  }
  return result;
}

async function main() {
  const args = process.argv.slice(2);
  const refresh = args.includes("--refresh");
  const explicit = args.filter((a) => !a.startsWith("--"));
  const existing: Record<string, ImageMeta> = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, "utf8")) : {};

  const wanted = explicit.length ? explicit : scanArtworkImages();
  const todo = refresh ? wanted : wanted.filter((n) => !existing[n]);
  const fetched = await fetchMeta(todo);

  const merged: Record<string, ImageMeta> = { ...existing, ...fetched };
  if (!explicit.length) for (const k of Object.keys(merged)) if (!wanted.includes(k)) delete merged[k];

  const sorted = Object.fromEntries(Object.entries(merged).sort(([a], [b]) => a.localeCompare(b)));
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(sorted, null, 2) + "\n");
  console.log(`images.json: ${Object.keys(sorted).length} entries (${todo.length} fetched)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
