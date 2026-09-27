/**
 * 把 src/data/images.json 內每幅畫下載一次，轉成 WebP 存於 public/art/，並在 images.json 記錄 local 欄位。
 *
 *   npm run fetch-images              只處理缺少檔案的項目（可重跑）
 *   npm run fetch-images -- --refresh 全部重新下載
 *
 * 列表與大圖一律用自存圖片，避免 Wikimedia 限流（429）令圖片載入失敗；
 * 只有深度縮放的最高解像度仍向 Wikimedia 取圖（見 lib/images.ts 的 zoomUrl）。
 * 須先執行 npm run images 取得圖片資料。
 */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import type { ImageMeta } from "../src/content/types";

const UA = "TheGalleryWalk/1.0 (https://github.com/sclastro/artwork) build-script";
const ROOT = path.resolve(__dirname, "..");
const JSON_PATH = path.join(ROOT, "src/data/images.json");
const OUT_DIR = path.join(ROOT, "public/art");
/** 自存的寬度；須與 lib/images.ts 的 LOCAL_WIDTHS 一致 */
const WIDTHS = [320, 960, 1920];
/** 下載來源用 Wikimedia 標準縮圖寬度（非標準寬度會回 400） */
const SOURCE_WIDTH = 1920;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function download(url: string): Promise<Buffer> {
  for (let i = 0; i < 10; i++) {
    const res = await fetch(url, { headers: { "User-Agent": UA } });
    if (res.status === 429 || res.status >= 500) {
      await sleep(3000 * (i + 1));
      continue;
    }
    if (!res.ok) throw new Error(`${res.status} ${url}`);
    return Buffer.from(await res.arrayBuffer());
  }
  throw new Error(`Rate limited too many times: ${url}`);
}

export function localId(file: string): string {
  return crypto.createHash("sha1").update(file).digest("hex").slice(0, 12);
}

async function main() {
  const refresh = process.argv.includes("--refresh");
  const images: Record<string, ImageMeta> = JSON.parse(fs.readFileSync(JSON_PATH, "utf8"));
  fs.mkdirSync(OUT_DIR, { recursive: true });

  let done = 0;
  for (const [name, m] of Object.entries(images)) {
    const id = localId(name);
    const widths = WIDTHS.filter((w) => w < m.width);
    if (!widths.length || m.width <= WIDTHS[WIDTHS.length - 1]) widths.push(m.width);
    const uniq = [...new Set(widths)].sort((a, b) => a - b);
    const files = uniq.map((w) => path.join(OUT_DIR, `${id}-${w}.webp`));
    const complete = files.every((f) => fs.existsSync(f));

    if (refresh || !complete) {
      const src = m.width > SOURCE_WIDTH ? m.thumb.replace("{w}", String(SOURCE_WIDTH)) : m.original;
      const buf = await download(src);
      for (const [i, w] of uniq.entries()) {
        await sharp(buf).resize({ width: w, withoutEnlargement: true }).webp({ quality: w >= 1920 ? 78 : 80 }).toFile(files[i]);
      }
      done++;
      console.log("✓", name, uniq.join("/"));
      await sleep(800);
    }
    m.local = { id, widths: uniq };
  }

  // 清走已不再使用的檔案
  const keep = new Set(Object.values(images).flatMap((m) => m.local!.widths.map((w) => `${m.local!.id}-${w}.webp`)));
  for (const f of fs.readdirSync(OUT_DIR)) if (f.endsWith(".webp") && !keep.has(f)) fs.unlinkSync(path.join(OUT_DIR, f));

  fs.writeFileSync(JSON_PATH, JSON.stringify(images, null, 2) + "\n");
  const bytes = fs.readdirSync(OUT_DIR).reduce((s, f) => s + fs.statSync(path.join(OUT_DIR, f)).size, 0);
  console.log(`public/art: ${keep.size} files, ${(bytes / 1024 / 1024).toFixed(1)} MB (${done} downloaded)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
