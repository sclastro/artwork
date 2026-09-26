import type { Metadata } from "next";
import type { Locale } from "@/content/types";
import { getDict } from "@/i18n";
import { periods } from "@/lib/data";
import { getCatalog } from "@/lib/catalog";
import { Timeline } from "@/components/pages/Timeline";
import { SplitText } from "@/components/motion/SplitText";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDict(locale);
  return { title: t.timeline.title, description: t.timeline.intro };
}

export default async function TimelinePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDict(locale);
  const lite = periods.map(({ slug, name, start, end, color, colorDark, tagline }) => ({ slug, name, start, end, color, colorDark, tagline }));
  return (
    <>
      <div className="page-top container">
        <header className="page-head">
          <p className="kicker">{t.nav.timeline}</p>
          <SplitText text={t.timeline.title} className="display" />
          <p className="lead">{t.timeline.intro}</p>
        </header>
      </div>
      <Timeline items={getCatalog()} periods={lite} />
    </>
  );
}
