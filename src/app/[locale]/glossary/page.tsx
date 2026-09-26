import type { Metadata } from "next";
import type { Locale } from "@/content/types";
import { getDict } from "@/i18n";
import { artworksByYear, glossary, glossaryMap } from "@/lib/data";
import { plainText, termSlugs } from "@/lib/richText";
import { GlossaryList, type GlossaryEntry } from "@/components/pages/GlossaryList";
import { SplitText } from "@/components/motion/SplitText";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDict(locale);
  return { title: t.glossary.title, description: t.glossary.intro };
}

export default async function GlossaryPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDict(locale);
  // 找出每個術語出現於哪些畫作
  const usage = new Map<string, Set<string>>();
  artworksByYear.forEach((a) => {
    const text = [a.summary, ...a.background, ...a.technique, ...a.symbolism.map((s) => s.body), ...a.anecdotes, ...a.legacy].map((b) => b.en + " " + b.zh).join(" ");
    termSlugs(text).forEach((s) => usage.set(s, (usage.get(s) ?? new Set()).add(a.slug)));
  });
  const entries: GlossaryEntry[] = [...glossary]
    .sort((a, b) => a.term.en.localeCompare(b.term.en))
    .map((g) => ({
      slug: g.slug,
      term: g.term,
      definition: {
        zh: plainText(g.definition.zh, (s) => glossaryMap[s]?.term.zh ?? s),
        en: plainText(g.definition.en, (s) => glossaryMap[s]?.term.en ?? s),
      },
      works: artworksByYear.filter((a) => usage.get(g.slug)?.has(a.slug)).map((a) => ({ slug: a.slug, title: a.title })),
    }));
  return (
    <div className="page-top container">
      <header className="page-head">
        <p className="kicker">{t.nav.glossary}</p>
        <SplitText text={t.glossary.title} className="display" />
        <p className="lead">{t.glossary.intro}</p>
      </header>
      <GlossaryList entries={entries} />
    </div>
  );
}
