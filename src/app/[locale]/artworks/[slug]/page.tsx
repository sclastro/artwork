import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { GlossaryTerm, Locale } from "@/content/types";
import { getDict } from "@/i18n";
import { LOCALES } from "@/i18n/config";
import {
  artworks,
  displayDate,
  displayDimensions,
  getArtist,
  getArtwork,
  getMuseum,
  getPeriod,
  glossaryMap,
  neighbours,
  readingMinutes,
  relatedWorks,
} from "@/lib/data";
import { getCatalog } from "@/lib/catalog";
import { annotateNames } from "@/lib/names";
import { absoluteUrl, aspect, imageMeta, imageUrl, srcSet, zoomUrl } from "@/lib/images";
import { plainText, termSlugs } from "@/lib/richText";
import { ArtworkHero } from "@/components/art/ArtworkHero";
import { SectionNav } from "@/components/art/SectionNav";
import { GlossaryProvider } from "@/components/art/GlossaryContext";
import { Paragraphs, RichText } from "@/components/art/RichText";
import { HotspotButton } from "@/components/art/HotspotButton";
import { ScaleCompare } from "@/components/art/ScaleCompare";
import { ArtCard } from "@/components/art/ArtCard";
import { Reveal } from "@/components/motion/Reveal";
import { IconArrowLeft, IconArrowRight, IconExternal, IconPin } from "@/components/icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => artworks.map((a) => ({ locale, slug: a.slug })));
}

type Params = { params: Promise<{ locale: Locale; slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  const a = getArtwork(slug);
  if (!a) return {};
  const artist = getArtist(a.artist);
  const title = `${a.title[locale]} — ${artist.name[locale]}`;
  const description = plainText(a.summary[locale], (s) => glossaryMap[s]?.term[locale] ?? s);
  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: absoluteUrl(imageUrl(a.image, 1920)) }] },
    twitter: { card: "summary_large_image", title, description, images: [absoluteUrl(imageUrl(a.image, 1920))] },
  };
}

/** 熱點細部裁切：以大圖作背景並放大定位 */
function cropStyle(file: string, x: number, y: number): React.CSSProperties {
  const A = aspect(file);
  const Z = Math.max(3.2, A * 2.6);
  const H = Z / A;
  const clamp = (v: number) => Math.max(0, Math.min(1, v));
  const px = clamp((x * Z - 0.5) / (Z - 1));
  const py = clamp((y * H - 0.5) / (H - 1));
  return {
    backgroundImage: `url(${imageUrl(file, 1920)})`,
    backgroundSize: `${Z * 100}% auto`,
    backgroundPosition: `${px * 100}% ${py * 100}%`,
  };
}

export default async function ArtworkPage({ params }: Params) {
  const { locale, slug } = await params;
  const a = getArtwork(slug);
  if (!a) notFound();
  const t = getDict(locale);
  const artist = getArtist(a.artist);
  const museum = getMuseum(a.museum);
  const period = getPeriod(a.period);
  const meta = imageMeta(a.image);
  const { prev, next } = neighbours(a);
  const catalog = getCatalog();
  const cat = (s: string) => catalog.find((c) => c.slug === s)!;
  const related = relatedWorks(a, 8).map((w) => cat(w.slug));
  const L = (p: string) => `/${locale}${p}`;
  const sep = locale === "zh" ? "，" : ", ";
  const hotspots = a.hotspots.map((h) => ({ x: h.x, y: h.y, title: h.title[locale], body: h.body[locale] }));

  // 本頁用到的術語（連同術語定義中引用的術語）
  const allText = [
    a.summary,
    ...a.background,
    ...a.technique,
    ...a.symbolism.flatMap((s) => [s.title, s.body]),
    ...a.anecdotes,
    ...a.legacy,
  ]
    .map((b) => b[locale])
    .join(" ");
  const used = new Set(termSlugs(allText));
  used.forEach((s) => glossaryMap[s] && termSlugs(glossaryMap[s].definition[locale]).forEach((x) => used.add(x)));
  const terms: Record<string, GlossaryTerm> = Object.fromEntries([...used].filter((s) => glossaryMap[s]).map((s) => [s, glossaryMap[s]]));

  // 中文內文：人名與作品名在本頁首次出現時附上英文（按頁面次序處理）
  const seen = new Set<string>();
  const tx = {
    summary: annotateNames([a.summary[locale]], locale, seen)[0],
    background: annotateNames(a.background.map((b) => b[locale]), locale, seen),
    technique: annotateNames(a.technique.map((b) => b[locale]), locale, seen),
    symbolism: annotateNames(a.symbolism.map((b) => b.body[locale]), locale, seen),
    anecdotes: annotateNames(a.anecdotes.map((b) => b[locale]), locale, seen),
    legacy: annotateNames(a.legacy.map((b) => b[locale]), locale, seen),
  };

  const sections = [
    { id: "facts", label: t.artwork.facts },
    { id: "background", label: t.artwork.background },
    { id: "technique", label: t.artwork.technique },
    { id: "symbolism", label: t.artwork.symbolism },
    { id: "anecdotes", label: t.artwork.anecdotes },
    { id: "legacy", label: t.artwork.legacy },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    name: a.title[locale],
    creator: { "@type": "Person", name: artist.name.en },
    dateCreated: String(a.year),
    artMedium: a.medium[locale],
    height: `${a.dimensions.h} cm`,
    width: `${a.dimensions.w} cm`,
    image: absoluteUrl(imageUrl(a.image, 1920)),
    contentLocation: museum.name[locale],
  };

  return (
    <GlossaryProvider terms={terms}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArtworkHero
        slug={a.slug}
        title={a.title[locale]}
        artistName={artist.name[locale]}
        artistSlug={artist.slug}
        date={displayDate(a, locale)}
        periodName={period.name[locale]}
        periodSlug={period.slug}
        periodColor={period.colorDark}
        museumName={`${museum.name[locale]}${sep}${museum.city[locale]}`}
        minutes={readingMinutes(a, locale)}
        image={{
          src: imageUrl(a.image, 1920),
          srcSet: srcSet(a.image),
          lqip: meta.lqip,
          aspect: aspect(a.image),
          zoom: zoomUrl(a.image),
          zoomSmall: imageUrl(a.image, 1920),
        }}
        hotspots={hotspots}
      />

      <div className="art-body container">
        <aside className="art-aside">
          <SectionNav sections={sections} />
        </aside>

        <article className="art-article">
          <Reveal>
            <p className="art-summary">
              <RichText text={tx.summary} />
            </p>
          </Reveal>

          {/* 1 基本資料 */}
          <section id="facts" className="art-section">
            <SectionTitle n={1} title={t.artwork.facts} />
            <dl className="facts">
              <Fact label={t.artwork.artist}>
                <Link href={L(`/artists/${artist.slug}/`)}>{artist.name[locale]}</Link>
                <small>
                  {artist.born}–{artist.died} · {t.nationalities[artist.nationality]}
                </small>
              </Fact>
              <Fact label={t.artwork.date}>{displayDate(a, locale)}</Fact>
              <Fact label={t.artwork.period}>
                <Link href={L(`/periods/${period.slug}/`)}>{period.name[locale]}</Link>
                <small>
                  {period.start}–{period.end}
                </small>
              </Fact>
              <Fact label={t.artwork.medium}>{a.medium[locale]}</Fact>
              <Fact label={t.artwork.dimensions}>{displayDimensions(a, locale)}</Fact>
              <Fact label={t.artwork.location}>
                <Link href={L(`/museums/${museum.slug}/`)}>{museum.name[locale]}</Link>
                <small>
                  <IconPin width={13} height={13} /> {museum.city[locale]}
                  {sep}
                  {museum.country[locale]}
                </small>
              </Fact>
            </dl>
            <div className="facts-extra">
              <div className="facts-panel">
                <p className="kicker">{t.artwork.scale}</p>
                <ScaleCompare h={a.dimensions.h} w={a.dimensions.w} thumb={imageUrl(a.image, 500)} locale={locale} label={t.artwork.scaleNote} />
                <p className="muted small">{t.artwork.scaleNote}</p>
              </div>
              <div className="facts-panel">
                <p className="kicker">{t.artwork.palette}</p>
                <div className="palette-swatches">
                  {meta.colors.map((c) => (
                    <div key={c} className="swatch">
                      <span style={{ background: c }} />
                      <code>{c.toUpperCase()}</code>
                    </div>
                  ))}
                </div>
                <div className="palette-bar" aria-hidden>
                  {meta.colors.map((c, i) => (
                    <span key={c} style={{ background: c, flex: 5 - i }} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 2 創作背景 */}
          <section id="background" className="art-section">
            <SectionTitle n={2} title={t.artwork.background} />
            <div className={`prose ${/^[A-Za-z\u3400-\u9fff]/.test(a.background[0]?.[locale] ?? "") ? "dropcap" : ""}`}>
              <Paragraphs items={tx.background} />
            </div>
          </section>

          {/* 3 技法與構圖 */}
          <section id="technique" className="art-section">
            <SectionTitle n={3} title={t.artwork.technique} />
            <div className="prose">
              <Paragraphs items={tx.technique} />
            </div>
            {a.hotspots.length > 0 && (
              <div className="details">
                <p className="kicker">{t.artwork.hotspots}</p>
                <div className="details-grid">
                  {a.hotspots.map((h, i) => (
                    <HotspotButton key={i} index={i} className="detail-crop" label={`${i + 1}. ${h.title[locale]}`}>
                      <span className="detail-img" style={cropStyle(a.image, h.x, h.y)} />
                      <span className="detail-label">
                        <b>{i + 1}</b>
                        {h.title[locale]}
                      </span>
                    </HotspotButton>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* 4 象徵意義 */}
          <section id="symbolism" className="art-section">
            <SectionTitle n={4} title={t.artwork.symbolism} />
            <div className="symbols">
              {a.symbolism.map((s, i) => {
                const hs = s.hotspot != null ? a.hotspots[s.hotspot] : undefined;
                return (
                  <Reveal key={i} delay={(i % 2) * 0.08} className="symbol">
                    {hs && (
                      <HotspotButton index={s.hotspot!} className="symbol-crop" label={hs.title[locale]}>
                        <span className="detail-img" style={cropStyle(a.image, hs.x, hs.y)} />
                        <b>{s.hotspot! + 1}</b>
                      </HotspotButton>
                    )}
                    <div>
                      <h3>{s.title[locale]}</h3>
                      <p>
                        <RichText text={tx.symbolism[i]} />
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </section>

          {/* 5 趣聞 */}
          <section id="anecdotes" className="art-section">
            <SectionTitle n={5} title={t.artwork.anecdotes} />
            <ol className="anecdotes">
              {a.anecdotes.map((x, i) => (
                <Reveal as="li" key={i} delay={i * 0.05}>
                  <span className="anecdote-num">{t.artwork.didYouKnow}</span>
                  <p>
                    <RichText text={tx.anecdotes[i]} />
                  </p>
                </Reveal>
              ))}
            </ol>
          </section>

          {/* 6 歷史影響與相關作品 */}
          <section id="legacy" className="art-section">
            <SectionTitle n={6} title={t.artwork.legacy} />
            <div className="prose">
              <Paragraphs items={tx.legacy} />
            </div>
          </section>
        </article>
      </div>

      <section className="section-tight related">
        <div className="container">
          <div className="related-head">
            <h2 className="h3">{t.artwork.related}</h2>
            <Link href={L(`/artists/${artist.slug}/`)} className="btn btn-sm">
              {t.artwork.moreByArtist}
              <IconArrowRight width={16} height={16} />
            </Link>
          </div>
          <div className="rail">
            {related.map((r) => (
              <ArtCard key={r.slug} item={r} fixedAspect={4 / 5} sizes="280px" />
            ))}
          </div>
        </div>
      </section>

      <nav className="container art-pager" aria-label={t.artwork.inPeriod}>
        {prev ? (
          <Link href={L(`/artworks/${prev.slug}/`)} className="pager-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageUrl(prev.image, 330)} alt="" loading="lazy" />
            <span>
              <small>
                <IconArrowLeft width={14} height={14} /> {t.common.previous}
              </small>
              <strong>{prev.title[locale]}</strong>
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={L(`/artworks/${next.slug}/`)} className="pager-card is-next">
            <span>
              <small>
                {t.common.next} <IconArrowRight width={14} height={14} />
              </small>
              <strong>{next.title[locale]}</strong>
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageUrl(next.image, 330)} alt="" loading="lazy" />
          </Link>
        ) : (
          <span />
        )}
      </nav>

      <p className="container credit">
        {t.common.imageCredit} ·{" "}
        <a href={meta.page} target="_blank" rel="noopener noreferrer">
          {t.artwork.source} <IconExternal width={13} height={13} />
        </a>
      </p>
    </GlossaryProvider>
  );
}

function SectionTitle({ n, title }: { n: number; title: string }) {
  return (
    <Reveal className="section-title">
      <span className="section-num">{String(n).padStart(2, "0")}</span>
      <h2 className="h2">{title}</h2>
    </Reveal>
  );
}

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="fact">
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}
