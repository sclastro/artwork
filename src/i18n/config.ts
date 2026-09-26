import type { Locale } from "@/content/types";

export const LOCALES: Locale[] = ["zh", "en"];
export const DEFAULT_LOCALE: Locale = "zh";

export const HTML_LANG: Record<Locale, string> = { zh: "zh-Hant", en: "en" };

export function isLocale(v: string | undefined): v is Locale {
  return v === "zh" || v === "en";
}

/** 把路徑中的語言段替換為另一語言，其餘部分（含 query 與 hash）保持不變 */
export function swapLocale(pathname: string, to: Locale, basePath = ""): string {
  let p = pathname;
  if (basePath && p.startsWith(basePath)) p = p.slice(basePath.length) || "/";
  const m = p.match(/^\/(zh|en)(\/|$)(.*)$/);
  const rest = m ? m[3] : p.replace(/^\//, "");
  return `/${to}/${rest}`.replace(/\/{2,}/g, "/");
}

/** 由路徑判斷語言 */
export function localeFromPath(pathname: string, basePath = ""): Locale | null {
  let p = pathname;
  if (basePath && p.startsWith(basePath)) p = p.slice(basePath.length);
  const m = p.match(/^\/(zh|en)(\/|$)/);
  return m ? (m[1] as Locale) : null;
}
