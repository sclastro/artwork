import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/content/types";
import { getDict } from "@/i18n";
import { LOCALES } from "@/i18n/config";
import { getMuseum, museumsInUse, worksInMuseum } from "@/lib/data";
import { getCatalog } from "@/lib/catalog";
import { imageUrl } from "@/lib/images";
import { Masonry } from "@/components/art/Masonry";
import { MuseumMap } from "@/components/pages/MuseumMap";
import { SplitText } from "@/components/motion/SplitText";
import { IconExternal, IconPin } from "@/components/icons";

export const dynamicParams = false;
export function generateStaticParams() {
  return LOCALES.flatMap((locale) => museumsInUse.map((m) => ({ locale, slug: m.slug })));
}

type Params = { params: Promise<{ locale: Locale; slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  const m = getMuseum(slug);
  if (!m) return {};
  return { title: m.name[locale], description: `${m.name[locale]} · ${m.city[locale]}` };
}

export default async function MuseumPage({ params }: Params) {
  const { locale, slug } = await params;
  const m = getMuseum(slug);
  if (!m) notFound();
  const t = getDict(locale);
  const works = worksInMuseum(slug);
  const catalog = getCatalog().filter((c) => c.museum === slug);
  return (
    <div className="page-top container">
      <header className="museum-head">
        <div>
          <p className="kicker">
            <IconPin width={13} height={13} /> {m.city[locale]}
            {locale === "zh" ? "，" : ", "}
            {m.country[locale]}
          </p>
          <SplitText text={m.name[locale]} className="display" />
          {locale === "zh" && (
            <p className="artist-alt" lang="en">
              {m.name.en}
            </p>
          )}
          <a href={m.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm" style={{ marginTop: 20 }}>
            {t.museums.website} <IconExternal width={14} height={14} />
          </a>
        </div>
        <MuseumMap
          museums={[{ slug: m.slug, name: m.name, city: m.city, lat: m.lat, lng: m.lng, works: works.map((w) => ({ slug: w.slug, title: w.title, thumb: imageUrl(w.image, 250) })) }]}
          height="300px"
          zoom={14}
        />
      </header>
      <div className="works-head">
        <h2 className="h2">{t.museums.works}</h2>
        <span className="muted">{t.common.works(works.length)}</span>
      </div>
      <Masonry items={catalog} maxCols={3} />
    </div>
  );
}
