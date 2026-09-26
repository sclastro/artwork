import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/content/types";
import { getDict } from "@/i18n";
import { artistsInPeriod, getArtwork, periods, worksInPeriod } from "@/lib/data";
import { imageUrl, srcSet } from "@/lib/images";
import { Reveal } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { IconArrowRight } from "@/components/icons";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDict(locale);
  return { title: t.nav.periods, description: t.period.intro };
}

const MIN = 1400;
const MAX = 1940;

export default async function PeriodsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDict(locale);
  const pct = (y: number) => ((y - MIN) / (MAX - MIN)) * 100;

  return (
    <div className="page-top container">
      <header className="page-head">
        <p className="kicker">{t.nav.periods}</p>
        <SplitText text={t.nav.periods} className="display" />
        <p className="lead">{t.period.intro}</p>
      </header>

      {/* 各時期跨度一覽 */}
      <Reveal className="span-chart" aria-hidden>
        <div className="span-axis">
          {[1400, 1500, 1600, 1700, 1800, 1900].map((y) => (
            <span key={y} style={{ left: `${pct(y)}%` }}>
              {y}
            </span>
          ))}
        </div>
        {periods.map((p) => (
          <Link key={p.slug} href={`/${locale}/periods/${p.slug}/`} className="span-row" tabIndex={-1}>
            <span className="span-label">{p.name[locale]}</span>
            <span className="span-track">
              <span className="span-bar" style={{ left: `${pct(p.start)}%`, width: `${pct(p.end) - pct(p.start)}%`, background: p.color }} />
            </span>
          </Link>
        ))}
      </Reveal>

      <div className="periods-list">
        {periods.map((p, i) => {
          const works = worksInPeriod(p.slug);
          const hero = getArtwork(p.hero) ?? works[0];
          const artists = artistsInPeriod(p.slug);
          return (
            <Reveal key={p.slug} className="period-row">
              <Link href={`/${locale}/periods/${p.slug}/`} className="period-row-link" style={{ ["--pc" as string]: p.color }}>
                <span className="period-row-num">{String(i + 1).padStart(2, "0")}</span>
                <div className="period-row-text">
                  <h2 className="h2">{p.name[locale]}</h2>
                  <p className="period-row-years">
                    {p.start}–{p.end} · {t.common.works(works.length)} · {t.common.artistsCount(artists.length)}
                  </p>
                  <p className="period-row-tag">{p.tagline[locale]}</p>
                </div>
                <div className="period-row-thumbs">
                  {works.slice(0, 4).map((w) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={w.slug} src={imageUrl(w.image, 250)} alt="" loading="lazy" />
                  ))}
                </div>
                {hero && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="period-row-peek" src={imageUrl(hero.image, 960)} srcSet={srcSet(hero.image, 960)} sizes="360px" alt="" loading="lazy" />
                )}
                <span className="period-row-arrow">
                  <IconArrowRight />
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
