"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Bi } from "@/content/types";
import { useDict, useLocale } from "../LocaleProvider";
import { IconSearch } from "../icons";

export interface GlossaryEntry {
  slug: string;
  term: Bi;
  definition: Bi;
  works: { slug: string; title: Bi }[];
}

export function GlossaryList({ entries }: { entries: GlossaryEntry[] }) {
  const t = useDict();
  const locale = useLocale();
  const other = locale === "zh" ? "en" : "zh";
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return entries;
    return entries.filter((e) => [e.term.zh, e.term.en, e.definition[locale]].some((x) => x.toLowerCase().includes(s)));
  }, [q, entries, locale]);
  const letters = [...new Set(list.map((e) => e.term.en[0].toUpperCase()))];

  return (
    <>
      <div className="glossary-tools">
        <div className="explore-search">
          <IconSearch />
          <input className="input" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={t.glossary.filter} aria-label={t.glossary.filter} />
        </div>
        <nav className="letters" aria-label="A–Z">
          {letters.map((l) => (
            <a key={l} href={`#letter-${l}`}>
              {l}
            </a>
          ))}
        </nav>
      </div>
      <div className="glossary">
        {letters.map((l) => (
          <section key={l} id={`letter-${l}`} className="glossary-group">
            <h2 className="glossary-letter">{l}</h2>
            <dl>
              {list
                .filter((e) => e.term.en[0].toUpperCase() === l)
                .map((e) => (
                  <div key={e.slug} id={e.slug} className="glossary-item">
                    <dt>
                      <strong>{e.term[locale]}</strong>
                      <span lang={other === "en" ? "en" : "zh-Hant"}>{e.term[other]}</span>
                    </dt>
                    <dd>
                      <p>{e.definition[locale]}</p>
                      {e.works.length > 0 && (
                        <p className="glossary-works">
                          <span className="muted">{t.glossary.appearsIn}：</span>
                          {e.works.slice(0, 6).map((w, i) => (
                            <span key={w.slug}>
                              {i > 0 && " · "}
                              <Link href={`/${locale}/artworks/${w.slug}/`}>{w.title[locale]}</Link>
                            </span>
                          ))}
                        </p>
                      )}
                    </dd>
                  </div>
                ))}
            </dl>
          </section>
        ))}
      </div>
    </>
  );
}
