"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useDict, useLocale } from "../LocaleProvider";
import { IconClose } from "../icons";
import { LangToggle } from "./LangToggle";
import { ThemeToggle } from "./ThemeToggle";

export function MobileMenu({ links, onClose }: { links: { href: string; label: string }[]; onClose: () => void }) {
  const t = useDict();
  const locale = useLocale();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", esc);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", esc);
    };
  }, [onClose]);

  return (
    <motion.div
      className="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label={t.nav.menu}
      data-lenis-prevent
      initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
      animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
      exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <button ref={closeRef} type="button" className="icon-btn mobile-menu-close" onClick={onClose} aria-label={t.nav.closeMenu}>
        <IconClose />
      </button>
      <nav>
        <Link href={`/${locale}/`} onClick={onClose}>
          {t.nav.home}
        </Link>
        {links.map((l, i) => (
          <motion.span key={l.href} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + i * 0.04, duration: 0.5 }}>
            <Link href={`/${locale}${l.href}`} onClick={onClose}>
              {l.label}
              <small>{String(i + 1).padStart(2, "0")}</small>
            </Link>
          </motion.span>
        ))}
      </nav>
      <div className="secondary">
        <LangToggle />
        <ThemeToggle />
      </div>
    </motion.div>
  );
}
