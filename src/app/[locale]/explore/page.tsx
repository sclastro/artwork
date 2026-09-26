import type { Metadata } from "next";
import { Suspense } from "react";
import type { Locale } from "@/content/types";
import { getDict } from "@/i18n";
import { artistsByBirth, museumsInUse, periods } from "@/lib/data";
import { getCatalog } from "@/lib/catalog";
import { Explore } from "@/components/pages/Explore";
import { Masonry } from "@/components/art/Masonry";
import { SplitText } from "@/components/motion/SplitText";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDict(locale);
  return { title: t.search.title, description: t.search.intro };
}

export default async function ExplorePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDict(locale);
  const items = getCatalog();
  const opts = {
    periods: periods.map((p) => ({ slug: p.slug, name: p.name, color: p.color })),
    artists: artistsByBirth.map((a) => ({ slug: a.slug, name: a.name })),
    museums: [...museumsInUse].sort((a, b) => a.name.en.localeCompare(b.name.en)).map((m) => ({ slug: m.slug, name: m.name })),
  };
  return (
    <div className="page-top container">
      <header className="page-head">
        <p className="kicker">{t.nav.explore}</p>
        <SplitText text={t.search.title} className="display" />
        <p className="lead">{t.search.intro}</p>
      </header>
      {/* 靜態匯出時 useSearchParams 需要 Suspense；後備內容為全部作品 */}
      <Suspense fallback={<Masonry items={items} />}>
        <Explore items={items} opts={opts} />
      </Suspense>
    </div>
  );
}
