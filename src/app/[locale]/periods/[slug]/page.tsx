import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale, PeriodSlug } from "@/content/types";
import { PERIOD_SLUGS } from "@/content/types";
import { getDict } from "@/i18n";
import { LOCALES } from "@/i18n/config";
import { artistsInPeriod, getArtwork, getPeriod, glossaryMap, periodIndex, periods, worksInPeriod } from "@/lib/data";
import { getCatalog } from "@/lib/catalog";
import { imageMeta, imageUrl, srcSet } from "@/lib/images";
import { plainText, termSlugs } from "@/lib/richText";
import { Masonry } from "@/components/art/Masonry";
import { GlossaryProvider } from "@/components/art/GlossaryContext";
import { RichText } from "@/components/art/RichText";
import { annotateNames } from "@/lib/names";
import { Reveal } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { Parallax } from "@/components/motion/Parallax";
import { IconArrowLeft, IconArrowRight } from "@/components/icons";

export const dynamicParams = false;
export function generateStaticParams() {
  return LOCALES.flatMap((locale) => PERIOD_SLUGS.map((slug) => ({ locale, slug })));
}

type Params = { params: Promise<{ locale: Locale; slug: PeriodSlug }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  const p = getPeriod(slug);
  if (!p) return {};
  return { title: p.name[locale], description: plainText(p.tagline[locale]) };
}

export default async function PeriodPage({ params }: Params) {
  const { locale, slug } = await params;
  const p = getPeriod(slug);
  if (!p) notFound();
  const t = getDict(locale);
  const works = worksInPeriod(slug);
  const hero = getArtwork(p.hero) ?? works[0];
  const artists = artistsInPeriod(slug);
  const catalog = getCatalog().filter((c) => c.period === slug);
  const i = periodIndex(slug);
  const prev = periods[i - 1];
  const next = periods[i + 1];

  const text = [...p.intro, ...p.traits.flatMap((x) => [x.body])].map((b) => b[locale]).join(" ");
  const seen = new Set<string>();
  const intro = annotateNames(p.intro.map((x) => x[locale]), locale, seen);
  const traits = annotateNames(p.traits.map((x) => x.body[locale]), locale, seen);
  const terms = Object.fromEntries(termSlugs(text).filter((s) => glossaryMap[s]).map((s) => [s, glossaryMap[s]]));

  return (
    <GlossaryProvider terms={terms}>
      <section className="period-hero" style={{ ["--pc" as string]: p.colorDark }}>
        {hero && (
          <Parallax className="period-hero-media" speed={0.12}>
            <div className="lqip" style={{ backgroundImage: `url(${imageMeta(hero.image).lqip})` }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageUrl(hero.image, 1920)} srcSet={srcSet(hero.image, 1920)} sizes="100vw" alt="" />
          </Parallax>
        )}
        <div className="period-hero-shade" />
        <div className="container period-hero-content">
          <p className="kicker" style={{ color: "#e2c992" }}>
            {String(i + 1).padStart(2, "0")} / {periods.length} · {p.start}–{p.end}
          </p>
          <SplitText text={p.name[locale]} className="display" delay={0.1} />
          <p className="lead">{p.tagline[locale]}</p>
          {hero && (
            <Link href={`/${locale}/artworks/${hero.slug}/`} className="period-hero-credit">
              {hero.title[locale]} · {t.common.readMore} →
            </Link>
          )}
        </div>
      </section>

      <section className="section container period-intro">
        <div className="prose period-prose">
          {intro.map((x, k) => (
            <Reveal key={k} delay={k * 0.06}>
              <p>
                <RichText text={x} />
              </p>
            </Reveal>
          ))}
        </div>
        <aside className="period-side">
          <p className="kicker">{t.period.traits}</p>
          <ol className="traits">
            {p.traits.map((tr, k) => (
              <Reveal as="li" key={k} delay={k * 0.08}>
                <span className="trait-num">{k + 1}</span>
                <div>
                  <h3>{tr.title[locale]}</h3>
                  <p>
                    <RichText text={traits[k]} />
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
          <p className="kicker" style={{ marginTop: 32 }}>
            {t.period.artists}
          </p>
          <div className="chips">
            {artists.map((a) => (
              <Link key={a.slug} href={`/${locale}/artists/${a.slug}/`} className="chip">
                {a.name[locale]}
              </Link>
            ))}
          </div>
        </aside>
      </section>

      <section className="container">
        <div className="works-head">
          <h2 className="h2">{t.period.works}</h2>
          <span className="muted">{t.common.works(works.length)}</span>
        </div>
        <Masonry items={catalog} />
      </section>

      <nav className="container period-pager" aria-label={t.nav.periods}>
        {prev ? (
          <Link href={`/${locale}/periods/${prev.slug}/`} className="period-pager-link">
            <small>
              <IconArrowLeft width={14} height={14} /> {t.common.previous}
            </small>
            <strong>{prev.name[locale]}</strong>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/${locale}/periods/${next.slug}/`} className="period-pager-link is-next">
            <small>
              {t.common.next} <IconArrowRight width={14} height={14} />
            </small>
            <strong>{next.name[locale]}</strong>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </GlossaryProvider>
  );
}
