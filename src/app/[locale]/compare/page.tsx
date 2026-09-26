import type { Metadata } from "next";
import { Suspense } from "react";
import type { Locale } from "@/content/types";
import { getDict } from "@/i18n";
import { glossaryMap, periods } from "@/lib/data";
import { plainText } from "@/lib/richText";
import { getCatalog } from "@/lib/catalog";
import { Compare } from "@/components/pages/Compare";
import { SplitText } from "@/components/motion/SplitText";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDict(locale);
  return { title: t.compare.title, description: t.compare.intro };
}

export default async function ComparePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDict(locale);
  return (
    <div className="page-top container">
      <header className="page-head">
        <p className="kicker">{t.nav.compare}</p>
        <SplitText text={t.compare.title} className="display" />
        <p className="lead">{t.compare.intro}</p>
      </header>
      <Suspense fallback={null}>
        <Compare items={getCatalog()} periods={periods.map((p) => ({
            slug: p.slug,
            name: p.name,
            color: p.color,
            // 術語標記轉為純文字
            traits: p.traits.map((tr) => ({
              title: tr.title,
              body: { zh: plainText(tr.body.zh, (s) => glossaryMap[s]?.term.zh ?? s), en: plainText(tr.body.en, (s) => glossaryMap[s]?.term.en ?? s) },
            })),
          }))} />
      </Suspense>
    </div>
  );
}
