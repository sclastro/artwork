import Link from "next/link";
import type { Locale } from "@/content/types";
import { getDict } from "@/i18n";
import { artistsByBirth, artworks, getArtist, getArtwork, museumsInUse, periods, worksInPeriod } from "@/lib/data";
import { imageMeta, imageUrl, srcSet } from "@/lib/images";
import { HeroCarousel, type HeroSlide } from "@/components/home/HeroCarousel";
import { Stats } from "@/components/home/Stats";
import { FeaturedArtwork } from "@/components/home/FeaturedArtwork";
import { PeriodShowcase } from "@/components/home/PeriodShowcase";
import { Reveal } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { Parallax } from "@/components/motion/Parallax";
import { IconArrowRight, IconMuseum, IconQuiz, IconTimeline, IconUser } from "@/components/icons";

// 首頁輪換：[作品, 取景位置]
const HERO: [string, string][] = [
  ["the-starry-night", "50% 40%"],
  ["the-birth-of-venus", "50% 30%"],
  ["wanderer-above-the-sea-of-fog", "50% 28%"],
  ["liberty-leading-the-people", "50% 35%"],
  ["impression-sunrise", "50% 55%"],
  ["girl-with-a-pearl-earring", "50% 38%"],
  ["the-kiss", "50% 28%"],
  ["hunters-in-the-snow", "50% 60%"],
];

// 時期卡片取景
const PERIOD_FOCUS: Record<string, string> = {
  renaissance: "50% 30%",
  "northern-renaissance": "50% 55%",
  baroque: "50% 45%",
  rococo: "50% 35%",
  neoclassicism: "50% 40%",
  romanticism: "50% 25%",
  realism: "50% 60%",
  impressionism: "50% 50%",
  "post-impressionism": "50% 40%",
  modern: "50% 25%",
};

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDict(locale);

  const slides: HeroSlide[] = HERO.flatMap(([slug, focus]) => {
    const a = getArtwork(slug);
    if (!a) return [];
    return [
      {
        slug,
        title: a.title,
        artist: getArtist(a.artist).name,
        year: a.date ? a.date[locale] : String(a.year),
        src: imageUrl(a.image, 1920),
        srcSet: srcSet(a.image, 1920),
        lqip: imageMeta(a.image).lqip,
        focus,
      },
    ];
  });

  const periodCards = periods.map((p) => {
    const hero = getArtwork(p.hero) ?? worksInPeriod(p.slug)[0] ?? artworks[0];
    return {
      slug: p.slug,
      name: p.name,
      tagline: p.tagline,
      start: p.start,
      end: p.end,
      color: p.color,
      count: worksInPeriod(p.slug).length,
      src: imageUrl(hero.image, 960),
      srcSet: srcSet(hero.image, 1280),
      lqip: imageMeta(hero.image).lqip,
      focus: PERIOD_FOCUS[p.slug] ?? "50% 50%",
    };
  });

  const starry = getArtwork("the-starry-night")!;
  const collage = ["girl-with-a-pearl-earring", "the-birth-of-venus", "sunflowers"].map(getArtwork).filter((a) => !!a);

  return (
    <>
      <HeroCarousel slides={slides} />

      <section className="section intro" id="intro">
        <div className="container intro-grid">
          <div>
            <Reveal>
              <p className="kicker">{t.site.tagline}</p>
            </Reveal>
            <SplitText as="h2" text={t.home.introTitle} className="h2 intro-title" inView />
            <Reveal delay={0.1}>
              <p className="lead">{t.home.introBody}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <Stats
                items={[
                  { value: artworks.length, label: t.home.stats.works },
                  { value: periods.length, label: t.home.stats.periods },
                  { value: artistsByBirth.length, label: t.home.stats.artists },
                  { value: museumsInUse.length, label: t.home.stats.museums },
                ]}
              />
            </Reveal>
          </div>
          <div className="intro-collage" aria-hidden>
            {collage.map((a, i) => (
              <Parallax key={a.slug} className={`collage-item collage-${i}`} speed={0.06 + i * 0.05}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imageUrl(a.image, 500)} alt="" loading="lazy" />
              </Parallax>
            ))}
          </div>
        </div>
      </section>

      <section className="section periods-section" id="periods">
        <div className="container">
          <div className="section-head">
            <div>
              <Reveal>
                <p className="kicker">{t.nav.periods}</p>
              </Reveal>
              <SplitText as="h2" text={t.home.periodsTitle} className="h2" inView />
            </div>
            <Reveal delay={0.1}>
              <p className="lead">{t.home.periodsBody}</p>
            </Reveal>
          </div>
          <PeriodShowcase items={periodCards} />
        </div>
      </section>

      <FeaturedArtwork slug={starry.slug} src={imageUrl(starry.image, 1920)} srcSet={srcSet(starry.image, 1920)} lqip={imageMeta(starry.image).lqip} />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <Reveal>
                <p className="kicker">{t.common.explore}</p>
              </Reveal>
              <SplitText as="h2" text={t.home.exploreTitle} className="h2" inView />
            </div>
          </div>
          <div className="explore-grid">
            {[
              { href: "/timeline/", icon: <IconTimeline />, title: t.nav.timeline, body: t.home.cards.timeline },
              { href: "/artists/", icon: <IconUser />, title: t.nav.artists, body: t.home.cards.artists },
              { href: "/museums/", icon: <IconMuseum />, title: t.nav.museums, body: t.home.cards.museums },
              { href: "/quiz/", icon: <IconQuiz />, title: t.nav.quiz, body: t.home.cards.quiz },
            ].map((c, i) => (
              <Reveal key={c.href} delay={i * 0.08}>
                <Link href={`/${locale}${c.href}`} className="explore-card">
                  <span className="explore-icon">{c.icon}</span>
                  <h3 className="h3">{c.title}</h3>
                  <p>{c.body}</p>
                  <span className="explore-arrow">
                    <IconArrowRight />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
