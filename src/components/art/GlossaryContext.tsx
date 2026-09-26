"use client";

import { createContext, useContext } from "react";
import type { GlossaryTerm } from "@/content/types";

// 只傳入本頁用到的術語，避免把整份詞彙表打包到每一頁
const Ctx = createContext<Record<string, GlossaryTerm>>({});

export function GlossaryProvider({ terms, children }: { terms: Record<string, GlossaryTerm>; children: React.ReactNode }) {
  return <Ctx.Provider value={terms}>{children}</Ctx.Provider>;
}

export function useGlossary() {
  return useContext(Ctx);
}
