import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import { bootScript } from "@/lib/prefs";
import "@/styles/tokens.css";
import "@/styles/base.css";
import "@/styles/home.css";
import "@/styles/artwork.css";
import "@/styles/pages.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--f-cormorant",
  display: "swap",
});
const inter = Inter({ subsets: ["latin"], variable: "--f-inter", display: "swap" });
// CJK 字體沒有 subset，靠 unicode-range 分片按需下載
const notoSerif = Noto_Serif_TC({ weight: ["500", "700"], variable: "--f-noto-serif-tc", display: "swap", preload: false });
const notoSans = Noto_Sans_TC({ weight: ["400", "500"], variable: "--f-noto-sans-tc", display: "swap", preload: false });

export const metadata: Metadata = {
  title: { default: "The Gallery Walk", template: "%s · The Gallery Walk" },
  description: "由文藝復興到現代，八十七幅西洋名畫的中英雙語深度導賞。",
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/favicon.svg` },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f1e7" },
    { media: "(prefers-color-scheme: dark)", color: "#121110" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="zh-Hant"
      data-theme="light"
      suppressHydrationWarning
      className={`${cormorant.variable} ${inter.variable} ${notoSerif.variable} ${notoSans.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
