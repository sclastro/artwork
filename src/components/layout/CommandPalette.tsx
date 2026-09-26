"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import Fuse from "fuse.js";
import type { Bi } from "@/content/types";
import type { PaletteItem } from "@/lib/catalog";
import { useDict, useLocale } from "../LocaleProvider";
import { lockScroll } from "../motion/SmoothScroll";
import { IconBook, IconCompare, IconHeart, IconLayers, IconMuseum, IconQuiz, IconSearch, IconTimeline, IconUser } from "../icons";

export interface PaletteData {
  works: PaletteItem[];
  artists: { slug: string; name: Bi; born: number; died: number }[];
  periods: { slug: string; name: Bi; start: number; end: number }[];
  museums: { slug: string; name: Bi; city: Bi }[];
}

interface Entry {
  key: string;
  group: "works" | "artists" | "periods" | "museums" | "pages";
  href: string;
  zh: string;
  en: string;
  subZh: string;
  subEn: string;
  thumb?: string;
  icon?: React.ReactNode;
}

export function CommandPalette({ data }: { data: PaletteData }) {
  const t = useDict();
  const locale = useLocale();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const entries = useMemo<Entry[]>(() => {
    const L = (p: string) => `/${locale}${p}`;
    const pages: Entry[] = [
      { key: "p-timeline", group: "pages", href: L("/timeline/"), zh: "時間軸", en: "Timeline", subZh: "", subEn: "", icon: <IconTimeline /> },
      { key: "p-quiz", group: "pages", href: L("/quiz/"), zh: "小測驗", en: "Quiz", subZh: "", subEn: "", icon: <IconQuiz /> },
      { key: "p-compare", group: "pages", href: L("/compare/"), zh: "比較", en: "Compare", subZh: "", subEn: "", icon: <IconCompare /> },
      { key: "p-glossary", group: "pages", href: L("/glossary/"), zh: "詞彙表", en: "Glossary", subZh: "", subEn: "", icon: <IconBook /> },
      { key: "p-fav", group: "pages", href: L("/favorites/"), zh: "我的收藏", en: "Favourites", subZh: "", subEn: "", icon: <IconHeart /> },
    ];
    return [
      ...data.works.map((w) => ({
        key: "w-" + w.slug,
        group: "works" as const,
        href: L(`/artworks/${w.slug}/`),
        zh: w.title.zh,
        en: w.title.en,
        subZh: `${w.artistName.zh} · ${w.year}`,
        subEn: `${w.artistName.en} · ${w.year}`,
        thumb: w.thumb,
      })),
      ...data.artists.map((a) => ({
        key: "a-" + a.slug,
        group: "artists" as const,
        href: L(`/artists/${a.slug}/`),
        zh: a.name.zh,
        en: a.name.en,
        subZh: `${a.born}–${a.died}`,
        subEn: `${a.born}–${a.died}`,
        icon: <IconUser />,
      })),
      ...data.periods.map((p) => ({
        key: "pe-" + p.slug,
        group: "periods" as const,
        href: L(`/periods/${p.slug}/`),
        zh: p.name.zh,
        en: p.name.en,
        subZh: `${p.start}–${p.end}`,
        subEn: `${p.start}–${p.end}`,
        icon: <IconLayers />,
      })),
      ...data.museums.map((m) => ({
        key: "m-" + m.slug,
        group: "museums" as const,
        href: L(`/museums/${m.slug}/`),
        zh: m.name.zh,
        en: m.name.en,
        subZh: m.city.zh,
        subEn: m.city.en,
        icon: <IconMuseum />,
      })),
      ...pages,
    ];
  }, [data, locale]);

  const fuse = useMemo(
    () => new Fuse(entries, { keys: ["zh", "en", "subZh", "subEn"], threshold: 0.34, ignoreLocation: true }),
    [entries],
  );

  const results = useMemo(() => {
    if (!q.trim()) {
      // 未輸入時：精選數幅作品及全部時期
      const featured = ["the-starry-night", "mona-lisa", "girl-with-a-pearl-earring", "wanderer-above-the-sea-of-fog", "the-kiss"];
      return [
        ...entries.filter((e) => e.group === "works" && featured.includes(e.key.slice(2))),
        ...entries.filter((e) => e.group === "periods"),
        ...entries.filter((e) => e.group === "pages"),
      ];
    }
    return fuse.search(q.trim()).slice(0, 24).map((r) => r.item);
  }, [q, entries, fuse]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "/" && !open && !(e.target as HTMLElement).closest("input, textarea, select, [contenteditable]")) {
        e.preventDefault();
        setOpen(true);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("tgw:open-search", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("tgw:open-search", onOpen);
    };
  }, [open]);

  useEffect(() => {
    lockScroll(open);
    if (open) {
      setQ("");
      setSel(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
    return () => lockScroll(false);
  }, [open]);

  useEffect(() => setSel(0), [q]);

  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>(`[data-index="${sel}"]`)?.scrollIntoView({ block: "nearest" });
  }, [sel]);

  const go = (e?: Entry) => {
    if (!e) return;
    setOpen(false);
    router.push(e.href);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSel((s) => Math.min(results.length - 1, s + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSel((s) => Math.max(0, s - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      go(results[sel]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const groupLabel: Record<Entry["group"], string> = {
    works: locale === "zh" ? "畫作" : "Works",
    artists: t.nav.artists,
    periods: t.nav.periods,
    museums: t.nav.museums,
    pages: locale === "zh" ? "頁面" : "Pages",
  };

  let lastGroup = "";
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div className="overlay-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />
          <motion.div
            className="palette"
            role="dialog"
            aria-modal="true"
            aria-label={t.search.quickHint}
            initial={{ opacity: 0, y: -16, scale: 0.98, x: "-50%" }}
            animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
            exit={{ opacity: 0, y: -10, scale: 0.98, x: "-50%" }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            data-lenis-prevent
          >
            <div className="palette-input">
              <IconSearch />
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder={t.common.searchPlaceholder}
                aria-label={t.common.search}
                role="combobox"
                aria-expanded="true"
                aria-controls="palette-list"
                aria-activedescendant={results[sel] ? `pal-${results[sel].key}` : undefined}
              />
              <kbd>Esc</kbd>
            </div>
            <div className="palette-list" id="palette-list" role="listbox" ref={listRef}>
              {results.length === 0 && <div className="palette-empty">{t.common.noResults}</div>}
              {results.map((e, i) => {
                const header = e.group !== lastGroup ? groupLabel[e.group] : null;
                lastGroup = e.group;
                return (
                  <div key={e.key}>
                    {header && <div className="palette-group">{header}</div>}
                    <button
                      type="button"
                      id={`pal-${e.key}`}
                      className="palette-item"
                      role="option"
                      aria-selected={i === sel}
                      data-index={i}
                      onMouseMove={() => setSel(i)}
                      onClick={() => go(e)}
                    >
                      {e.thumb ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={e.thumb} alt="" loading="lazy" />
                      ) : (
                        <span className="ph">{e.icon}</span>
                      )}
                      <span>
                        <strong>{locale === "zh" ? e.zh : e.en}</strong>
                        <small>
                          {locale === "zh" ? e.subZh : e.subEn}
                          {locale === "zh" && e.group !== "pages" ? ` · ${e.en}` : ""}
                        </small>
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="palette-foot">
              <span>↑ ↓</span>
              <span>Enter {t.search.goTo}</span>
              <span style={{ marginLeft: "auto" }}>{t.search.shortcut}</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
