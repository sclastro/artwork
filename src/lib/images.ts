import type { ImageMeta } from "@/content/types";
import imagesJson from "@/data/images.json";

const images = imagesJson as Record<string, ImageMeta>;

/** Wikimedia 標準縮圖寬度（非標準寬度會回 400，見 CLAUDE.md） */
export const THUMB_WIDTHS = [250, 330, 500, 960, 1280, 1920, 3840] as const;

export function imageMeta(file: string): ImageMeta {
  const m = images[file];
  if (!m) throw new Error(`Missing image metadata for "${file}". Run npm run images.`);
  return m;
}

/** 取得不大於原圖的標準寬度縮圖；要求寬度超過原圖時回傳原圖 */
export function imageUrl(file: string, width: number): string {
  const m = imageMeta(file);
  const w = THUMB_WIDTHS.find((t) => t >= width) ?? THUMB_WIDTHS[THUMB_WIDTHS.length - 1];
  if (w >= m.width) return m.original;
  return m.thumb.replace("{w}", String(w));
}

export function srcSet(file: string, max = 1920): string {
  const m = imageMeta(file);
  const parts = THUMB_WIDTHS.filter((w) => w <= max && w < m.width).map((w) => `${m.thumb.replace("{w}", String(w))} ${w}w`);
  if (m.width <= max) parts.push(`${m.original} ${m.width}w`);
  return parts.join(", ");
}

export function aspect(file: string): number {
  const m = imageMeta(file);
  return m.width / m.height;
}

export function allImages(): Record<string, ImageMeta> {
  return images;
}
