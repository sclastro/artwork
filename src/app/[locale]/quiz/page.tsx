import type { Metadata } from "next";
import type { Locale } from "@/content/types";
import { getDict } from "@/i18n";
import { artistsByBirth, periods } from "@/lib/data";
import { getCatalog } from "@/lib/catalog";
import { Quiz } from "@/components/pages/Quiz";
import { SplitText } from "@/components/motion/SplitText";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDict(locale);
  return { title: t.quiz.title, description: t.quiz.intro };
}

export default async function QuizPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDict(locale);
  return (
    <div className="page-top container">
      <header className="page-head">
        <p className="kicker">{t.nav.quiz}</p>
        <SplitText text={t.quiz.title} className="display" />
        <p className="lead">{t.quiz.intro}</p>
      </header>
      <Quiz
        items={getCatalog()}
        periods={periods.map((p) => ({ slug: p.slug, name: p.name }))}
        artists={Object.fromEntries(artistsByBirth.map((a) => [a.slug, a.name]))}
      />
    </div>
  );
}
