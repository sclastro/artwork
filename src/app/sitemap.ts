import type { MetadataRoute } from "next";
import { PERIOD_SLUGS } from "@/content/types";
import { artistsByBirth, artworksByYear, museumsInUse } from "@/lib/data";
import { LOCALES } from "@/i18n/config";
import { SITE_ORIGIN } from "@/lib/images";
import { BASE_PATH } from "@/lib/prefs";

export const dynamic = "force-static";

const PAGES = ["", "periods/", "timeline/", "artists/", "museums/", "explore/", "quiz/", "compare/", "glossary/", "about/"];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...PAGES,
    ...PERIOD_SLUGS.map((s) => `periods/${s}/`),
    ...artworksByYear.map((a) => `artworks/${a.slug}/`),
    ...artistsByBirth.map((a) => `artists/${a.slug}/`),
    ...museumsInUse.map((m) => `museums/${m.slug}/`),
  ];
  return paths.flatMap((p) =>
    LOCALES.map((l) => ({
      url: `${SITE_ORIGIN}${BASE_PATH}/${l}/${p}`,
      alternates: { languages: Object.fromEntries(LOCALES.map((x) => [x === "zh" ? "zh-Hant" : x, `${SITE_ORIGIN}${BASE_PATH}/${x}/${p}`])) },
    })),
  );
}
