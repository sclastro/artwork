import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocaleProvider } from "@/components/LocaleProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { isLocale, LOCALES, HTML_LANG } from "@/i18n/config";
import { getDict } from "@/i18n";
import { getPaletteItems } from "@/lib/catalog";
import { artistsByBirth, museumsInUse, periods } from "@/lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDict(locale);
  return {
    title: { default: `${t.site.name} · ${t.site.tagline}`, template: `%s · ${t.site.name}` },
    description: t.site.description,
    alternates: { languages: { "zh-Hant": "/zh/", en: "/en/" } },
    openGraph: { siteName: t.site.name, type: "website", locale: locale === "zh" ? "zh_HK" : "en_GB" },
  };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDict(locale);
  const paletteData = {
    works: getPaletteItems(),
    artists: artistsByBirth.map((a) => ({ slug: a.slug, name: a.name, born: a.born, died: a.died })),
    periods: periods.map((p) => ({ slug: p.slug, name: p.name, start: p.start, end: p.end })),
    museums: museumsInUse.map((m) => ({ slug: m.slug, name: m.name, city: m.city })),
  };

  return (
    <LocaleProvider locale={locale}>
      <div lang={HTML_LANG[locale]} className={`app lang-${locale}`}>
        <a href="#main" className="skip-link">
          {t.nav.skip}
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer locale={locale} />
        <CommandPalette data={paletteData} />
        <SmoothScroll />
      </div>
    </LocaleProvider>
  );
}
