"use client";

import { usePathname, useRouter } from "next/navigation";
import { useDict, useLocale } from "../LocaleProvider";
import { swapLocale } from "@/i18n/config";
import { LOCALE_KEY, setPref } from "@/lib/prefs";

/** 一按即在中文與英文之間切換，停留在同一頁（保留 query 與 hash） */
export function LangToggle() {
  const locale = useLocale();
  const t = useDict();
  const router = useRouter();
  const pathname = usePathname() || "/";
  const to = locale === "zh" ? "en" : "zh";

  const onClick = () => {
    setPref(LOCALE_KEY, to);
    const target = swapLocale(pathname, to) + window.location.search + window.location.hash;
    window.__tgwKeepScroll = true;
    router.push(target, { scroll: false });
  };

  return (
    <button
      type="button"
      className="lang-toggle"
      data-locale={locale}
      onClick={onClick}
      aria-label={to === "en" ? t.toggle.toEnglish : t.toggle.toChinese}
      title={to === "en" ? t.toggle.toEnglish : t.toggle.toChinese}
    >
      <span className={locale === "zh" ? "is-active" : ""} lang="zh-Hant">
        中
      </span>
      <span className={locale === "en" ? "is-active" : ""} lang="en">
        EN
      </span>
    </button>
  );
}
