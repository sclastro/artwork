import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/content/types";
import { getDict } from "@/i18n";
import { artworksByYear, getArtist } from "@/lib/data";
import { imageMeta, imageUrl } from "@/lib/images";
import { SplitText } from "@/components/motion/SplitText";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return { title: getDict(locale).about.title };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDict(locale);
  return (
    <div className="page-top container-narrow">
      <header className="page-head">
        <p className="kicker">{t.nav.about}</p>
        <SplitText text={t.about.title} className="display" />
      </header>
      <div className="prose">
        {t.about.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <h2 className="h3" style={{ margin: "48px 0 16px" }}>
        {t.about.credits}
      </h2>
      <div className="table-wrap">
        <table className="table credits-table">
          <thead>
            <tr>
              <th>{t.about.work}</th>
              <th>{t.about.file}</th>
              <th>{t.about.license}</th>
            </tr>
          </thead>
          <tbody>
            {artworksByYear.map((a) => {
              const m = imageMeta(a.image);
              return (
                <tr key={a.slug}>
                  <td>
                    <span className="credit-work">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={imageUrl(a.image, 60)} alt="" loading="lazy" width={40} height={40} />
                      <span>
                        <Link href={`/${locale}/artworks/${a.slug}/`}>{a.title[locale]}</Link>
                        <small>{getArtist(a.artist).name[locale]}</small>
                      </span>
                    </span>
                  </td>
                  <td>
                    <a href={m.page} target="_blank" rel="noopener noreferrer" className="credit-file">
                      {m.file}
                    </a>
                  </td>
                  <td className="nowrap">{m.license === "Public domain" ? t.about.publicDomain : m.license}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
