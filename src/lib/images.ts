import type { ImageMeta } from "@/content/types";
import imagesJson from "@/data/images.json";
import { BASE_PATH } from "./prefs";

const images = imagesJson as Record<string, ImageMeta>;

/** 網站的 origin（og:image、JSON-LD 需要完整網址） */
export const SITE_ORIGIN = "https://sclastro.github.io";

/** 自存 WebP 的寬度（見 scripts/fetch-images.ts）；原圖較窄時最大一級為原圖寬度 */
export const LOCAL_WIDTHS = [320, 960, 1920] as const;

/** Wikimedia 標準縮圖寬度（非標準寬度會回 400，見 CLAUDE.md）；只供深度縮放及未自存時後備 */
const WIKI_WIDTHS = [250, 330, 500, 960, 1280, 1920, 3840] as const;

export function imageMeta(file: string): ImageMeta {
  const m = images[file];
  if (!m) throw new Error(`Missing image metadata for "${file}". Run npm run images.`);
  return m;
}

function wikiUrl(m: ImageMeta, width: number): string {
  const w = WIKI_WIDTHS.find((t) => t >= width) ?? WIKI_WIDTHS[WIKI_WIDTHS.length - 1];
  if (w >= m.width) return m.original;
  return m.thumb.replace("{w}", String(w));
}

const localUrl = (id: string, w: number) => `${BASE_PATH}/art/${id}-${w}.webp`;

/** 取得不小於指定寬度的自存圖片；沒有更大的就用最大一級 */
export function imageUrl(file: string, width: number): string {
  const m = imageMeta(file);
  if (!m.local) return wikiUrl(m, width);
  const ws = m.local.widths;
  const w = ws.find((t) => t >= width) ?? ws[ws.length - 1];
  return localUrl(m.local.id, w);
}

export function srcSet(file: string, max = 1920): string {
  const m = imageMeta(file);
  if (!m.local) {
    return WIKI_WIDTHS.filter((w) => w <= max && w < m.width)
      .map((w) => `${m.thumb.replace("{w}", String(w))} ${w}w`)
      .join(", ");
  }
  const ws = m.local.widths.filter((w) => w <= max);
  const use = ws.length ? ws : [m.local.widths[0]];
  return use.map((w) => `${localUrl(m.local!.id, w)} ${w}w`).join(", ");
}

/** 深度縮放用的最高解像度：Wikimedia 3840px 縮圖，原圖較窄時用原圖 */
export function zoomUrl(file: string): string {
  return wikiUrl(imageMeta(file), 3840);
}

export function absoluteUrl(path: string): string {
  return path.startsWith("http") ? path : SITE_ORIGIN + path;
}

export function aspect(file: string): number {
  const m = imageMeta(file);
  return m.width / m.height;
}

export function allImages(): Record<string, ImageMeta> {
  return images;
}
