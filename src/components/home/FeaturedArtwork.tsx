"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useDict, useLocale } from "../LocaleProvider";
import { IconArrowRight } from "../icons";

/** 全寬深色區塊：畫作隨捲動緩緩推近 */
export function FeaturedArtwork({ slug, src, srcSet, lqip }: { slug: string; src: string; srcSet: string; lqip: string }) {
  const t = useDict();
  const locale = useLocale();
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.25, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const textY = useTransform(scrollYProgress, [0.2, 0.6], [60, 0]);
  const textO = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  return (
    <section ref={ref} className="featured">
      <motion.div className="featured-media" style={reduce ? undefined : { scale, y }}>
        <div className="lqip" style={{ backgroundImage: `url(${lqip})` }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} srcSet={srcSet} sizes="100vw" alt="" loading="lazy" />
      </motion.div>
      <div className="featured-shade" />
      <motion.div className="featured-content container" style={reduce ? undefined : { y: textY, opacity: textO }}>
        <p className="kicker" style={{ color: "#e2c992" }}>
          {t.home.featuredKicker}
        </p>
        <h2 className="display">{t.home.featuredTitle}</h2>
        <p className="lead">{t.home.featuredBody}</p>
        <Link href={`/${locale}/artworks/${slug}/`} className="btn btn-light">
          {t.common.explore}
          <IconArrowRight width={18} height={18} />
        </Link>
      </motion.div>
    </section>
  );
}
