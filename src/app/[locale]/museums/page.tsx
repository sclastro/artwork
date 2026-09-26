import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/content/types";
import { getDict } from "@/i18n";
import { museumsInUse, worksInMuseum } from "@/lib/data";
import { imageUrl } from "@/lib/images";
import { MuseumMap, type MapMuseum } from "@/components/pages/MuseumMap";
import { SplitText } from "@/components/motion/SplitText";
import { Reveal } from "@/components/motion/Reveal";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDict(locale);
  return { title: t.museums.title, description: t.museums.intro };
}

export default async function MuseumsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDict(locale);
  const data: MapMuseum[] = museumsInUse.map((m) => ({
    slug: m.slug,
    name: m.name,
    city: m.city,
    lat: m.lat,
    lng: m.lng,
    works: worksInMuseum(m.slug).map((w) => ({ slug: w.slug, title: w.title, thumb: imageUrl(w.image, 250) })),
  }));
  // 按國家、城市分組
  const byCountry = new Map<string, typeof museumsInUse>();
  [...museumsInUse]
    .sort((a, b) => a.country.en.localeCompare(b.country.en) || a.city.en.localeCompare(b.city.en))
    .forEach((m) => byCountry.set(m.country[locale], [...(byCountry.get(m.country[locale]) ?? []), m]));

  return (
    <div className="page-top container">
      <header className="page-head">
        <p className="kicker">{t.nav.museums}</p>
        <SplitText text={t.museums.title} className="display" />
        <p className="lead">{t.museums.intro}</p>
      </header>
      <MuseumMap museums={data} />
      <h2 className="h3" style={{ margin: "56px 0 24px" }}>
        {t.museums.list}
      </h2>
      <div className="museum-list">
        {[...byCountry.entries()].map(([country, list]) => (
          <Reveal key={country} className="museum-country">
            <h3 className="kicker">{country}</h3>
            <ul>
              {list.map((m) => {
                const works = worksInMuseum(m.slug);
                return (
                  <li key={m.slug}>
                    <Link href={`/${locale}/museums/${m.slug}/`} className="museum-item">
                      <span>
                        <strong>{m.name[locale]}</strong>
                        <small>
                          {m.city[locale]} · {t.common.works(works.length)}
                        </small>
                      </span>
                      <span className="museum-thumbs">
                        {works.slice(0, 3).map((w) => (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img key={w.slug} src={imageUrl(w.image, 250)} alt="" loading="lazy" />
                        ))}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
