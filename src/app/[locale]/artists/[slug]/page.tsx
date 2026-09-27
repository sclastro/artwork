import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/content/types";
import { getDict } from "@/i18n";
import { LOCALES } from "@/i18n/config";
import { artistsByBirth, getArtist, getPeriod, glossaryMap, worksByArtist } from "@/lib/data";
import { getCatalog } from "@/lib/catalog";
import { plainText, termSlugs } from "@/lib/richText";
import { Masonry } from "@/components/art/Masonry";
import { GlossaryProvider } from "@/components/art/GlossaryContext";
import { RichText } from "@/components/art/RichText";
import { annotateNames } from "@/lib/names";
import { Reveal } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";

export const dynamicParams = false;
export function generateStaticParams() {
  return LOCALES.flatMap((locale) => artistsByBirth.map((a) => ({ locale, slug: a.slug })));
}

type Params = { params: Promise<{ locale: Locale; slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  const a = getArtist(slug);
  if (!a) return {};
  return { title: a.name[locale], description: plainText(a.bio[0][locale]) };
}

export default async function ArtistPage({ params }: Params) {
  const { locale, slug } = await params;
  const a = getArtist(slug);
  if (!a) notFound();
  const t = getDict(locale);
  const works = worksByArtist(slug);
  const catalog = getCatalog().filter((c) => c.artist === slug);
  const periods = [...new Set(works.map((w) => w.period))].map(getPeriod);
  const span = a.died - a.born;
  const terms = Object.fromEntries(
    termSlugs(a.bio.map((b) => b[locale]).join(" "))
      .filter((s) => glossaryMap[s])
      .map((s) => [s, glossaryMap[s]]),
  );

  return (
    <GlossaryProvider terms={terms}>
      <div className="page-top container">
        <header className="artist-head">
          <div>
            <p className="kicker">
              {t.nationalities[a.nationality]} · {a.born}–{a.died}
            </p>
            <SplitText text={a.name[locale]} className="display" />
            {locale === "zh" && (
              <p className="artist-alt" lang="en">
                {a.name.en}
              </p>
            )}
          </div>
          <dl className="artist-facts">
            <div>
              <dt>{t.artists.lifespan}</dt>
              <dd>
                {a.born}–{a.died}
              </dd>
            </div>
            <div>
              <dt>{t.artists.birthPlace}</dt>
              <dd>{a.birthPlace[locale]}</dd>
            </div>
            <div>
              <dt>{t.nav.periods}</dt>
              <dd>
                {periods.map((p, i) => (
                  <span key={p.slug}>
                    {i > 0 && " · "}
                    <Link href={`/${locale}/periods/${p.slug}/`}>{p.name[locale]}</Link>
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </header>

        {/* 生平時間線：作品在畫家一生中的位置 */}
        <Reveal className="lifeline" aria-label={t.artists.lifespan}>
          <div className="lifeline-bar">
            {works.map((w) => (
              <Link
                key={w.slug}
                href={`/${locale}/artworks/${w.slug}/`}
                className="lifeline-dot"
                style={{ left: `${((w.year - a.born) / span) * 100}%` }}
                title={`${w.title[locale]} (${w.year})`}
              >
                <span>
                  {w.year} · {w.title[locale]}
                </span>
              </Link>
            ))}
          </div>
          <div className="lifeline-ends">
            <span>{a.born}</span>
            <span>{a.died}</span>
          </div>
        </Reveal>

        <div className="prose artist-bio">
          {annotateNames(a.bio.map((b) => b[locale]), locale).map((b, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p>
                <RichText text={b} />
              </p>
            </Reveal>
          ))}
        </div>

        <div className="works-head">
          <h2 className="h2">{t.artists.worksHere}</h2>
          <span className="muted">{t.common.works(works.length)}</span>
        </div>
        <Masonry items={catalog} maxCols={3} />
      </div>
    </GlossaryProvider>
  );
}
