import type { Bi, Locale } from "@/content/types";
import { zh } from "./zh";
import { en } from "./en";

type Widen<T> = T extends (...args: infer A) => infer R
  ? (...args: A) => R
  : T extends string
    ? string
    : T extends readonly (infer U)[]
      ? Widen<U>[]
      : { [K in keyof T]: Widen<T[K]> };

export type Dict = Widen<typeof zh>;

const dicts: Record<Locale, Dict> = { zh, en };

export function getDict(locale: Locale): Dict {
  return dicts[locale];
}

/** 取雙語欄位的當前語言文字 */
export function tr(b: Bi, locale: Locale): string {
  return b[locale];
}
