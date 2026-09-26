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
      lenis = new L({ lerp: 0.1, wheelMultiplier: 1, autoRaf: true, anchors: { offset: -96 } });
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
