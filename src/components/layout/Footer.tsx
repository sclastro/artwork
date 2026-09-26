import Link from "next/link";
import type { Locale } from "@/content/types";
import { getDict } from "@/i18n";
import { periods } from "@/lib/data";

export function Footer({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const L = (p: string) => `/${locale}${p}`;
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="brand-mark" style={{ fontFamily: "var(--font-serif)" }}>
              The <em>Gallery</em> Walk
            </span>
            <p>{t.site.description}</p>
          </div>
          <div>
            <h3>{t.nav.periods}</h3>
            <ul>
              {periods.map((p) => (
                <li key={p.slug}>
                  <Link href={L(`/periods/${p.slug}/`)}>{p.name[locale]}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{t.nav.explore}</h3>
            <ul>
              <li><Link href={L("/timeline/")}>{t.nav.timeline}</Link></li>
              <li><Link href={L("/artists/")}>{t.nav.artists}</Link></li>
              <li><Link href={L("/museums/")}>{t.nav.museums}</Link></li>
              <li><Link href={L("/explore/")}>{t.search.title}</Link></li>
            </ul>
          </div>
          <div>
            <h3>{t.nav.more}</h3>
            <ul>
              <li><Link href={L("/quiz/")}>{t.nav.quiz}</Link></li>
              <li><Link href={L("/compare/")}>{t.nav.compare}</Link></li>
              <li><Link href={L("/glossary/")}>{t.nav.glossary}</Link></li>
              <li><Link href={L("/favorites/")}>{t.nav.favorites}</Link></li>
              <li><Link href={L("/about/")}>{t.nav.about}</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} The Gallery Walk</span>
          <span>{t.common.imageCredit}</span>
        </div>
      </div>
    </footer>
  );
}
