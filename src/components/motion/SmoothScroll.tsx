"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import type Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
    /** 切換語言時保留捲動位置 */
    __tgwKeepScroll?: boolean;
  }
}

/** 平滑捲動：只在滑鼠裝置、且未要求減少動態時啟用 */
export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    let lenis: Lenis | undefined;
    let cancelled = false;
    import("lenis").then(({ default: L }) => {
      if (cancelled) return;
      // 不開 anchors：頁內錨點由各元件自行處理（見 SectionNav），否則同一次點擊會觸發兩段捲動互相打斷
      lenis = new L({ lerp: 0.1, wheelMultiplier: 1, autoRaf: true });
      window.__lenis = lenis;
    });
    return () => {
      cancelled = true;
      lenis?.destroy();
      window.__lenis = undefined;
    };
  }, []);

  useEffect(() => {
    if (window.__tgwKeepScroll) {
      window.__tgwKeepScroll = false;
      return;
    }
    if (!window.location.hash) window.__lenis?.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  return null;
}

/** 平滑捲動至頁內某個 id；offset 為目標與畫面頂部的距離 */
export function scrollToId(id: string, offset = 110) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  if (window.__lenis) window.__lenis.scrollTo(top, { duration: 1.1 });
  else window.scrollTo({ top, behavior: "smooth" });
}

/** 頁內錨點的 onClick：以平滑捲動代替瀏覽器的即時跳轉 */
export function onAnchorClick(e: React.MouseEvent<HTMLAnchorElement>, offset?: number) {
  const id = e.currentTarget.hash.slice(1);
  if (!id || !document.getElementById(id)) return;
  e.preventDefault();
  e.stopPropagation();
  scrollToId(id, offset);
  history.replaceState(null, "", `#${id}`);
}

/** 開啟全屏覆蓋層時暫停平滑捲動 */
export function lockScroll(lock: boolean) {
  if (lock) {
    window.__lenis?.stop();
    document.documentElement.style.overflow = "hidden";
  } else {
    window.__lenis?.start();
    document.documentElement.style.overflow = "";
  }
}
