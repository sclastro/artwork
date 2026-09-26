"use client";

import { useEffect, useState } from "react";
import { useDict } from "../LocaleProvider";
import { IconMoon, IconSun } from "../icons";
import { getPref, setPref, THEME_KEY } from "@/lib/prefs";

type Theme = "light" | "dark";

function apply(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  window.dispatchEvent(new CustomEvent("tgw:theme", { detail: theme }));
}

export function ThemeToggle() {
  const t = useDict();
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme((document.documentElement.getAttribute("data-theme") as Theme) || "light");
    // 未曾手動選擇時跟隨系統
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const saved = getPref(THEME_KEY);
      if (saved === "light" || saved === "dark") return;
      const next: Theme = mq.matches ? "dark" : "light";
      apply(next);
      setTheme(next);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setPref(THEME_KEY, next);
    const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (doc.startViewTransition && !reduce) doc.startViewTransition(() => apply(next));
    else apply(next);
    setTheme(next);
  };

  const label = theme === "dark" ? t.toggle.toLight : t.toggle.toDark;
  return (
    <button type="button" className="icon-btn theme-toggle" onClick={toggle} aria-label={label} title={label}>
      <span>
        <IconSun className="sun" />
        <IconMoon className="moon" />
      </span>
    </button>
  );
}
