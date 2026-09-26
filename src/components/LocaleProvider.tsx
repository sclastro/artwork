"use client";

import { createContext, useContext } from "react";
import { MotionConfig } from "motion/react";
import type { Locale } from "@/content/types";
import { getDict, type Dict } from "@/i18n";

const Ctx = createContext<Locale>("zh");

export function LocaleProvider({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  // reducedMotion="user"：系統要求減少動態時，motion 自動停用位移動畫，只保留淡入
  return (
    <Ctx.Provider value={locale}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </Ctx.Provider>
  );
}

export function useLocale(): Locale {
  return useContext(Ctx);
}

export function useDict(): Dict {
  return getDict(useContext(Ctx));
}
