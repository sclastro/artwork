"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useDict, useLocale } from "../LocaleProvider";
import { LangToggle } from "./LangToggle";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { useFavorites } from "@/lib/favorites";
import { IconBook, IconChevronDown, IconCompare, IconHeart, IconInfo, IconMenu, IconQuiz, IconSearch } from "../icons";

/** 頂部有深色大圖的頁面：導覽列先透明、捲動後變實色 */
function isOverlayPage(path: string) {
  return /^\/(zh|en)\/?$/.test(path) || /^\/(zh|en)\/(artworks|periods)\/[^/]+\/?$/.test(path);
}

export function openSearch() {
  window.dispatchEvent(new CustomEvent("tgw:open-search"));
}

export function Header() {
  const t = useDict();
  const locale = useLocale();
  const pathname = usePathname() || "/";
  const favs = useFavorites();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);
  const lastY = useRef(0);
  const moreRef = useRef<HTMLDivElement>(null);
  const overlay = isOverlayPage(pathname);

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent));
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      // 向下捲動較遠時收起導覽列，向上捲動即重現
      if (y > 480 && y > lastY.current + 6) setHidden(true);
      else if (y < lastY.current - 6 || y < 480) setHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    setMenuOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!moreOpen) return;
    const close = (e: MouseEvent) => {
      if (!moreRef.current?.contains(e.target as Node)) setMoreOpen(false);
    };
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setMoreOpen(false);
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", esc);
    };
  }, [moreOpen]);

  const L = (p: string) => `/${locale}${p}`;
  const current = (p: string) => (pathname.startsWith(L(p)) ? "page" : undefined);
  const links = [
    { href: "/periods/", label: t.nav.periods },
    { href: "/timeline/", label: t.nav.timeline },
    { href: "/artists/", label: t.nav.artists },
    { href: "/museums/", label: t.nav.museums },
    { href: "/explore/", label: t.nav.explore },
  ];
  const more = [
    { href: "/quiz/", label: t.nav.quiz, icon: <IconQuiz /> },
    { href: "/compare/", label: t.nav.compare, icon: <IconCompare /> },
    { href: "/glossary/", label: t.nav.glossary, icon: <IconBook /> },
    { href: "/favorites/", label: t.nav.favorites, icon: <IconHeart /> },
    { href: "/about/", label: t.nav.about, icon: <IconInfo /> },
  ];

  const cls = ["site-header", overlay && "is-overlay", scrolled && "is-scrolled", hidden && !menuOpen && !moreOpen && "is-hidden"]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header className={cls}>
        <div className="header-inner">
          <Link href={L("/")} className="brand" aria-label={t.site.name}>
            <span className="brand-mark">
              The <em>Gallery</em> Walk
            </span>
          </Link>

          <nav className="main-nav" aria-label="Main">
            {links.map((l) => (
              <Link key={l.href} href={L(l.href)} aria-current={current(l.href)}>
                {l.label}
              </Link>
            ))}
            <div className="nav-more" ref={moreRef} data-open={moreOpen}>
              <button type="button" aria-expanded={moreOpen} aria-haspopup="true" onClick={() => setMoreOpen((v) => !v)}>
                {t.nav.more}
                <IconChevronDown />
              </button>
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    className="nav-dropdown"
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.98 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {more.map((m) => (
                      <Link key={m.href} href={L(m.href)}>
                        {m.icon}
                        {m.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="header-actions">
            <button type="button" className="search-trigger" onClick={openSearch} aria-label={t.common.search}>
              <IconSearch />
              <span className="label">{t.common.search}</span>
              <kbd>{isMac ? "⌘K" : "Ctrl K"}</kbd>
            </button>
            <Link href={L("/favorites/")} className="icon-btn fav-link" aria-label={t.nav.favorites}>
              <IconHeart />
              {favs.length > 0 && <span className="fav-badge">{favs.length}</span>}
            </Link>
            <LangToggle />
            <ThemeToggle />
            <button type="button" className="icon-btn menu-btn" aria-label={t.nav.menu} aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}>
              <IconMenu />
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>{menuOpen && <MobileMenu links={[...links, ...more]} onClose={() => setMenuOpen(false)} />}</AnimatePresence>
    </>
  );
}
