import type { Metadata } from "next";
import type { Locale } from "@/content/types";
import { getDict } from "@/i18n";
import { getCatalog } from "@/lib/catalog";
import { Favorites } from "@/components/pages/Favorites";
import { SplitText } from "@/components/motion/SplitText";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return { title: getDict(locale).favorites.title };
}

export default async function FavoritesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDict(locale);
  return (
    <div className="page-top container">
      <header className="page-head">
        <p className="kicker">{t.nav.favorites}</p>
        <SplitText text={t.favorites.title} className="display" />
        <p className="lead">{t.favorites.intro}</p>
      </header>
      <Favorites items={getCatalog()} />
    </div>
  );
}
