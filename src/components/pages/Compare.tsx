"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import type { Bi, PeriodSlug } from "@/content/types";
import type { CatalogItem } from "@/lib/catalog";
import { useDict, useLocale } from "../LocaleProvider";
import { IconSwap } from "../icons";

interface PeriodInfo {
  slug: PeriodSlug;
  name: Bi;
  color: string;
  traits: { title: Bi; body: Bi }[];
}

export function Compare({ items, periods }: { items: CatalogItem[]; periods: PeriodInfo[] }) {
  const t = useDict();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();
  const [trueScale, setTrueScale] = useState(false);
  const a = items.find((i) => i.slug === sp.get("a"));
  const b = items.find((i) => i.slug === sp.get("b"));

  const set = (k: "a" | "b", v: string) => {
    const next = new URLSearchParams(sp.toString());
    if (v) next.set(k, v);
    else next.delete(k);
    window.__tgwKeepScroll = true;
    router.replace(`${pathname}?${next.toString()}`, { scroll: false });
  };
  const swap = () => {
    const next = new URLSearchParams();
    if (b) next.set("a", b.slug);
    if (a) next.set("b", a.slug);
    window.__tgwKeepScroll = true;
    router.replace(`${pathname}?${next.toString()}`, { scroll: false });
  };

  const sorted = useMemo(() => [...items].sort((x, y) => x.year - y.year), [items]);
  const pmap = Object.fromEntries(periods.map((p) => [p.slug, p]));
  // 實際比例模式：以兩幅中較高者為基準
  const maxH = Math.max(a?.dimensions.h ?? 1, b?.dimensions.h ?? 1);

  const Picker = ({ k, value, label }: { k: "a" | "b"; value?: CatalogItem; label: string }) => (
    <label className="field">
      <span>{label}</span>
      <select className="select" value={value?.slug ?? ""} onChange={(e) => set(k, e.target.value)}>
        <option value="">{t.compare.choose}</option>
        {periods.map((p) => (
          <optgroup key={p.slug} label={p.name[locale]}>
            {sorted
              .filter((i) => i.period === p.slug)
              .map((i) => (
                <option key={i.slug} value={i.slug}>
                  {i.title[locale]} — {i.artistName[locale]}
                </option>
              ))}
          </optgroup>
        ))}
      </select>
    </label>
  );

  const rows: { label: string; get: (i: CatalogItem) => React.ReactNode }[] = [
    { label: t.artwork.artist, get: (i) => <Link href={`/${locale}/artists/${i.artist}/`}>{i.artistName[locale]}</Link> },
    { label: t.artwork.date, get: (i) => i.date?.[locale] ?? i.year },
    { label: t.artwork.period, get: (i) => <Link href={`/${locale}/periods/${i.period}/`}>{pmap[i.period].name[locale]}</Link> },
    { label: t.artwork.medium, get: (i) => i.medium[locale] },
    { label: t.artwork.dimensions, get: (i) => `${i.dimensions.h} × ${i.dimensions.w} ${t.common.cm}` },
    { label: t.artwork.location, get: (i) => `${i.museumName[locale]} · ${i.city[locale]}` },
    { label: t.search.subject, get: (i) => i.subjects.map((s) => t.subjects[s]).join(" · ") },
    {
      label: t.artwork.palette,
      get: (i) => (
        <span className="mini-palette">
          {i.colors.map((c) => (
            <span key={c} style={{ background: c }} title={c} />
          ))}
        </span>
      ),
    },
  ];

  return (
    <div className="compare">
      <div className="compare-pickers">
        <Picker k="a" value={a} label={t.compare.pickA} />
        <button type="button" className="icon-btn compare-swap" onClick={swap} aria-label={t.compare.swap} title={t.compare.swap} disabled={!a && !b}>
          <IconSwap />
        </button>
        <Picker k="b" value={b} label={t.compare.pickB} />
      </div>

      {a && b && (
        <div className="compare-summary">
          <span className="chip">{a.year === b.year ? t.compare.sameYear : t.compare.yearsApart(Math.abs(a.year - b.year))}</span>
          <button type="button" className="chip" aria-pressed={trueScale} onClick={() => setTrueScale((s) => !s)}>
            {t.artwork.scale}
          </button>
        </div>
      )}

      <div className="compare-stage">
        {[a, b].map((item, k) => (
          <div key={k} className="compare-col">
            {item ? (
              <motion.div key={item.slug} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Link href={`/${locale}/artworks/${item.slug}/`} className="compare-img" style={{ height: trueScale ? `${(item.dimensions.h / maxH) * 100}%` : undefined }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.thumbLarge} srcSet={item.srcset} sizes="50vw" alt={item.title[locale]} />
                </Link>
                <h2 className="h3">{item.title[locale]}</h2>
                <p className="muted">
                  {item.artistName[locale]} · {item.year}
                </p>
              </motion.div>
            ) : (
              <div className="compare-empty">{k === 0 ? t.compare.pickA : t.compare.pickB}</div>
            )}
          </div>
        ))}
      </div>

      {a && b && (
        <>
          <div className="table-wrap">
            <table className="table compare-table">
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label}>
                    <th scope="row">{r.label}</th>
                    <td>{r.get(a)}</td>
                    <td>{r.get(b)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="compare-traits">
            {[a, b].map((i, k) => (
              <div key={k}>
                <p className="kicker">
                  {pmap[i.period].name[locale]} · {t.compare.traitsOf}
                </p>
                <ul>
                  {pmap[i.period].traits.map((tr) => (
                    <li key={tr.title.en}>
                      <strong>{tr.title[locale]}</strong>
                      <span>{tr.body[locale]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </>
      )}
      {!(a && b) && <p className="empty">{t.compare.empty}</p>}
    </div>
  );
}
