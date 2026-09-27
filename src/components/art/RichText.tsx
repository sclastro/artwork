"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { parseRich } from "@/lib/richText";
import { useDict, useLocale } from "../LocaleProvider";
import { useGlossary } from "./GlossaryContext";
import { SayButton } from "./SayButton";

export function focusHotspot(index: number) {
  window.dispatchEvent(new CustomEvent("tgw:hotspot", { detail: index }));
}

function Term({ slug, label }: { slug: string; label?: string }) {
  const terms = useGlossary();
  const locale = useLocale();
  const t = useDict();
  const term = terms[slug];
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null);
  const btn = useRef<HTMLButtonElement>(null);
  const pop = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    if (!open) return;
    const place = () => {
      const r = btn.current!.getBoundingClientRect();
      const w = Math.min(320, window.innerWidth - 32);
      const left = Math.max(16, Math.min(window.innerWidth - w - 16, r.left + r.width / 2 - w / 2)) + window.scrollX;
      setPos({ left, top: r.bottom + window.scrollY + 10 });
    };
    place();
    const close = (e: Event) => {
      if (!pop.current?.contains(e.target as Node) && !btn.current?.contains(e.target as Node)) setOpen(false);
    };
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("resize", place);
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", esc);
    return () => {
      window.removeEventListener("resize", place);
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", esc);
    };
  }, [open]);

  if (!term) return <>{label ?? slug}</>;
  const other = locale === "zh" ? "en" : "zh";
  return (
    <>
      <button ref={btn} type="button" className="term" aria-expanded={open} aria-controls={id} onClick={() => setOpen((v) => !v)}>
        {label ?? term.term[locale]}
      </button>
      {open &&
        pos &&
        createPortal(
          <div ref={pop} id={id} role="dialog" className="term-pop" style={{ left: pos.left, top: pos.top }}>
            <strong>{term.term[locale]}</strong>
            <span className="alt" lang={other === "en" ? "en" : "zh-Hant"}>
              {term.term[other]}
              {other === "en" && <SayButton text={term.term.en} />}
            </span>
            {term.definition[locale].replace(/\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g, (_, s, l) => l ?? terms[s]?.term[locale] ?? s)}
            <br />
            <Link href={`/${locale}/glossary/#${slug}`}>{t.glossary.seeGlossary} →</Link>
          </div>,
          document.body,
        )}
    </>
  );
}

/** 解析 [[術語]] 與 {{熱點}} 標記 */
export function RichText({ text }: { text: string }) {
  return (
    <>
      {parseRich(text).map((tok, i) => {
        if (tok.type === "text") return <span key={i}>{tok.text}</span>;
        if (tok.type === "term") return <Term key={i} slug={tok.slug} label={tok.label} />;
        if (tok.type === "en")
          return (
            <span key={i} className="en-name" lang="en">
              （{tok.text}
              <SayButton text={tok.text} />）
            </span>
          );
        return (
          <button key={i} type="button" className="hotspot-link" onClick={() => focusHotspot(tok.index)}>
            {tok.label}
            <sup>{tok.index + 1}</sup>
          </button>
        );
      })}
    </>
  );
}

export function Paragraphs({ items }: { items: string[] }) {
  return (
    <>
      {items.map((p, i) => (
        <p key={i}>
          <RichText text={p} />
        </p>
      ))}
    </>
  );
}
