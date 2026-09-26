import type { Metadata } from "next";
import type { Locale } from "@/content/types";
import { getDict } from "@/i18n";
import { artistsByBirth, periods, worksByArtist } from "@/lib/data";
import { imageMeta, imageUrl } from "@/lib/images";
import { ArtistsGrid, type ArtistCardData } from "@/components/pages/ArtistsGrid";
import { SplitText } from "@/components/motion/SplitText";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDict(locale);
  return { title: t.artists.title, description: t.artists.intro };
}

export default async function ArtistsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDict(locale);
  const data: ArtistCardData[] = artistsByBirth.map((a) => {
    const works = worksByArtist(a.slug);
    return {
      slug: a.slug,
      name: a.name,
      born: a.born,
      died: a.died,
      nationality: a.nationality,
      periods: [...new Set(works.map((w) => w.period))],
      count: works.length,
      thumb: imageUrl(works[0].image, 500),
      lqip: imageMeta(works[0].image).lqip,
    };
  });
  return (
    <div className="page-top container">
      <header className="page-head">
        <p className="kicker">{t.nav.artists}</p>
        <SplitText text={t.artists.title} className="display" />
        <p className="lead">{t.artists.intro}</p>
      </header>
      <ArtistsGrid artists={data} periods={periods.map((p) => ({ slug: p.slug, name: p.name, color: p.color }))} />
    </div>
  );
}
