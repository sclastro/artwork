"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Fuse from "fuse.js";
import type { Bi, Nationality, PeriodSlug, Subject } from "@/content/types";
import type { CatalogItem } from "@/lib/catalog";
import { useDict, useLocale } from "../LocaleProvider";
import { Masonry } from "../art/Masonry";
import { IconClose, IconSearch } from "../icons";

type Sort = "year" | "year-desc" | "title";

interface Opts {
  periods: { slug: PeriodSlug; name: Bi; color: string }[];
  artists: { slug: string; name: Bi }[];
  museums: { slug: string; name: Bi }[];
}

export function Explore({ items, opts }: { items: CatalogItem[]; opts: Opts }) {
  const t = useDict();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  const [q, setQ] = useState(sp.get("q") ?? "");
  const periods = (sp.get("period")?.split(",").filter(Boolean) ?? []) as PeriodSlug[];
  const artist = sp.get("artist") ?? "";
  const nat = (sp.get("nat") ?? "") as Nationality | "";
  const museum = sp.get("museum") ?? "";
  const subject = (sp.get("subject") ?? "") as Subject | "";
  const minYear = Math.min(...items.map((i) => i.year));
  const maxYear = Math.max(...items.map((i) => i.year));
  const from = Number(sp.get("from") ?? minYear);
  const to = Number(sp.get("to") ?? maxYear);
  const sort = (sp.get("sort") ?? "year") as Sort;

  const update = (patch: Record<string, string | null>) => {
    const next = new URLSearchParams(sp.toString());
    Object.entries(patch).forEach(([k, v]) => (v ? next.set(k, v) : next.delete(k)));
    const s = next.toString();
    window.__tgwKeepScroll = true;
    router.replace(`${pathname}${s ? `?${s}` : ""}`, { scroll: false });
  };

  // 關鍵字輸入稍作延遲才寫入網址
  useEffect(() => {
    const id = setTimeout(() => {
      if ((sp.get("q") ?? "") !== q) update({ q: q || null });
    }, 250);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  const fuse = useMemo(
    () =>
      new Fuse(items, {
        keys: [
          { name: "title.zh", weight: 3 },
          { name: "title.en", weight: 3 },
          { name: "artistName.zh", weight: 2 },
          { name: "artistName.en", weight: 2 },
          "museumName.zh",
          "museumName.en",
          "city.zh",
          "city.en",
          { name: "summary.zh", weight: 0.3 },
          { name: "summary.en", weight: 0.3 },
        ],
        threshold: 0.34,
        ignoreLocation: true,
      }),
    [items],
  );

  const results = useMemo(() => {
    const query = (sp.get("q") ?? "").trim();
    let list = query ? fuse.search(query).map((r) => r.item) : items;
    list = list.filter(
      (i) =>
        (!periods.length || periods.includes(i.period)) &&
        (!artist || i.artist === artist) &&
        (!nat || i.nationality === nat) &&
        (!museum || i.museum === museum) &&
        (!subject || i.subjects.includes(subject)) &&
        i.year >= from &&
        i.year <= to,
    );
    if (!query || sort !== "year") {
      list = [...list].sort((a, b) =>
        sort === "title" ? a.title[locale].localeCompare(b.title[locale], locale === "zh" ? "zh-Hant" : "en") : sort === "year-desc" ? b.year - a.year : a.year - b.year,
      );
    }
    return list;
  }, [items, fuse, sp, periods, artist, nat, museum, subject, from, to, sort, locale]);

  const nats = [...new Set(items.map((i) => i.nationality))];
  const subjects = [...new Set(items.flatMap((i) => i.subjects))];
  const active = periods.length || artist || nat || museum || subject || sp.get("from") || sp.get("to") || sp.get("q");

  const togglePeriod = (p: PeriodSlug) => {
    const next = periods.includes(p) ? periods.filter((x) => x !== p) : [...periods, p];
    update({ period: next.join(",") || null });
  };

  return (
    <div className="explore">
      <div className="explore-search">
        <IconSearch />
        <input className="input" value={q} onChange={(e) => setQ(e.target.value)} placeholder={t.common.searchPlaceholder} aria-label={t.common.search} type="search" />
        {q && (
          <button type="button" className="icon-btn" onClick={() => setQ("")} aria-label={t.common.clear}>
            <IconClose />
          </button>
        )}
      </div>

      <div className="explore-filters">
        <div className="chips" role="group" aria-label={t.search.period}>
          {opts.periods.map((p) => (
            <button key={p.slug} type="button" className="chip" aria-pressed={periods.includes(p.slug)} onClick={() => togglePeriod(p.slug)}>
              <span className="dot" style={{ background: p.color }} />
              {p.name[locale]}
            </button>
          ))}
        </div>
        <div className="filter-grid">
          <label className="field">
            <span>{t.search.artist}</span>
            <select className="select" value={artist} onChange={(e) => update({ artist: e.target.value || null })}>
              <option value="">{t.search.any}</option>
              {opts.artists.map((a) => (
                <option key={a.slug} value={a.slug}>
                  {a.name[locale]}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>{t.search.nationality}</span>
            <select className="select" value={nat} onChange={(e) => update({ nat: e.target.value || null })}>
              <option value="">{t.search.any}</option>
              {nats.map((n) => (
                <option key={n} value={n}>
                  {t.nationalities[n]}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>{t.search.museum}</span>
            <select className="select" value={museum} onChange={(e) => update({ museum: e.target.value || null })}>
              <option value="">{t.search.any}</option>
              {opts.museums.map((m) => (
                <option key={m.slug} value={m.slug}>
                  {m.name[locale]}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>{t.search.subject}</span>
            <select className="select" value={subject} onChange={(e) => update({ subject: e.target.value || null })}>
              <option value="">{t.search.any}</option>
              {subjects.map((s) => (
                <option key={s} value={s}>
                  {t.subjects[s]}
                </option>
              ))}
            </select>
          </label>
          <div className="field">
            <span>
              {t.search.years}: {from}–{to}
            </span>
            <div className="range-pair">
              <input type="range" min={minYear} max={maxYear} value={from} onChange={(e) => update({ from: String(Math.min(Number(e.target.value), to)) })} aria-label={t.search.from} />
              <input type="range" min={minYear} max={maxYear} value={to} onChange={(e) => update({ to: String(Math.max(Number(e.target.value), from)) })} aria-label={t.search.to} />
            </div>
          </div>
          <label className="field">
            <span>{t.search.sort}</span>
            <select className="select" value={sort} onChange={(e) => update({ sort: e.target.value === "year" ? null : e.target.value })}>
              <option value="year">{t.search.sortYear}</option>
              <option value="year-desc">{t.search.sortYearDesc}</option>
              <option value="title">{t.search.sortTitle}</option>
            </select>
          </label>
        </div>
      </div>

      <div className="explore-status">
        <span className="muted">{t.search.results(results.length)}</span>
        {active && (
          <button
            type="button"
            className="btn btn-sm"
            onClick={() => {
              setQ("");
              window.__tgwKeepScroll = true;
              router.replace(pathname, { scroll: false });
            }}
          >
            {t.search.reset}
          </button>
        )}
      </div>

      {results.length ? <Masonry key={results.map((r) => r.slug).join()} items={results} /> : <div className="empty">{t.common.noResults}</div>}
    </div>
  );
}
