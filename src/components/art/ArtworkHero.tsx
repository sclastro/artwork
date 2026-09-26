"use client";

import Link from "next/link";
import { ViewTransition, useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useDict, useLocale } from "../LocaleProvider";
import { toggleFavorite, useFavorites } from "@/lib/favorites";
import { DeepZoomViewer, type ViewerHotspot } from "./DeepZoomViewer";
import { ArtImage } from "./ArtImage";
import { IconArrowLeft, IconArrowRight, IconClock, IconClose, IconCompare, IconHeart, IconLayers, IconLink, IconZoom } from "../icons";

interface Props {
  slug: string;
  title: string;
  artistName: string;
  artistSlug: string;
  date: string;
  periodName: string;
  periodSlug: string;
  periodColor: string;
  museumName: string;
  minutes: number;
  image: { src: string; srcSet: string; lqip: string; aspect: number; zoom: string; zoomSmall: string };
  hotspots: ViewerHotspot[];
}

export function ArtworkHero(p: Props) {
  const t = useDict();
  const locale = useLocale();
  const reduce = useReducedMotion();
  const favs = useFavorites();
  const fav = favs.includes(p.slug);
  const [markers, setMarkers] = useState(true);
  const [active, setActive] = useState<number | null>(null);
  const [viewer, setViewer] = useState<{ open: boolean; at: number | null }>({ open: false, at: null });
  const [toast, setToast] = useState<string | null>(null);
  const stageRef = useRef<HTMLElement>(null);

  // 內文的熱點連結：捲回大圖並開啟該熱點
  useEffect(() => {
    const onHotspot = (e: Event) => {
      const i = (e as CustomEvent<number>).detail;
      setMarkers(true);
      setActive(i);
      const top = (stageRef.current?.getBoundingClientRect().top ?? 0) + window.scrollY;
      if (window.__lenis) window.__lenis.scrollTo(top, { duration: 1.2 });
      else window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
    };
    window.addEventListener("tgw:hotspot", onHotspot);
    return () => window.removeEventListener("tgw:hotspot", onHotspot);
  }, [reduce]);

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 2200);
    return () => clearTimeout(id);
  }, [toast]);

  useEffect(() => {
    if (active == null) return;
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, [active]);

  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share && window.matchMedia("(pointer: coarse)").matches) {
        await navigator.share({ title: p.title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setToast(t.common.copied);
    } catch {
      /* 使用者取消分享 */
    }
  };

  const closeViewer = useCallback(() => setViewer({ open: false, at: null }), []);
  const n = p.hotspots.length;
  const h = active != null ? p.hotspots[active] : null;
  const maxH = "min(72svh, 860px)";

  return (
    <section className="art-stage" ref={stageRef}>
      <div className="art-stage-light" aria-hidden />
      <div className="art-stage-inner">
        <div className="art-frame-wrap" style={{ width: `min(92vw, calc(${maxH} * ${p.image.aspect}), 1400px)` }}>
          <ViewTransition name={`art-${p.slug}`} share="morph" default="none">
            <motion.div
              className="art-frame"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <button type="button" className="art-frame-btn" onClick={() => setViewer({ open: true, at: null })} aria-label={t.artwork.zoom}>
                <ArtImage src={p.image.src} srcSet={p.image.srcSet} sizes="92vw" alt={p.title} lqip={p.image.lqip} aspect={p.image.aspect} priority />
              </button>
              {markers &&
                p.hotspots.map((hs, i) => (
                  <motion.button
                    key={i}
                    type="button"
                    className={`hs-marker ${active === i ? "is-active" : ""}`}
                    style={{ left: `${hs.x * 100}%`, top: `${hs.y * 100}%` }}
                    onClick={() => setActive(active === i ? null : i)}
                    aria-label={`${i + 1}. ${hs.title}`}
                    aria-expanded={active === i}
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.4 }}
                    transition={{ delay: 0.9 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span>{i + 1}</span>
                  </motion.button>
                ))}
              <AnimatePresence>
                {h && (
                  <motion.div
                    key={active}
                    className={`hs-card ${p.hotspots[active!].x > 0.55 ? "is-left" : "is-right"} ${p.hotspots[active!].y > 0.6 ? "is-up" : ""}`}
                    style={{ ["--x" as string]: `${h.x * 100}%`, ["--y" as string]: `${h.y * 100}%` }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    role="dialog"
                    aria-label={h.title}
                  >
                    <div className="hs-card-head">
                      <span className="kicker">{t.artwork.hotspotOf(active! + 1, n)}</span>
                      <button type="button" className="icon-btn" onClick={() => setActive(null)} aria-label={t.common.close}>
                        <IconClose />
                      </button>
                    </div>
                    <h3>{h.title}</h3>
                    <p>{h.body}</p>
                    <div className="hs-card-nav">
                      <button type="button" className="icon-btn" onClick={() => setActive((a) => ((a ?? 0) - 1 + n) % n)} aria-label={t.common.previous}>
                        <IconArrowLeft />
                      </button>
                      <button type="button" className="btn btn-sm" onClick={() => setViewer({ open: true, at: active })}>
                        <IconZoom width={16} height={16} />
                        {t.artwork.zoom}
                      </button>
                      <button type="button" className="icon-btn" onClick={() => setActive((a) => ((a ?? -1) + 1) % n)} aria-label={t.common.next}>
                        <IconArrowRight />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </ViewTransition>
        </div>

        <motion.div
          className="art-caption"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link href={`/${locale}/periods/${p.periodSlug}/`} className="art-caption-period" style={{ ["--pc" as string]: p.periodColor }}>
            <i />
            {p.periodName} · {p.date}
          </Link>
          <h1 className="art-title">{p.title}</h1>
          <p className="art-byline">
            <Link href={`/${locale}/artists/${p.artistSlug}/`}>{p.artistName}</Link>
            <span aria-hidden> · </span>
            <span>{p.museumName}</span>
          </p>
          <div className="art-actions">
            <button type="button" className="btn btn-light" onClick={() => setViewer({ open: true, at: null })}>
              <IconZoom width={18} height={18} />
              {t.artwork.zoom}
            </button>
            {n > 0 && (
              <button type="button" className="btn btn-ghost-light" aria-pressed={markers} onClick={() => { setMarkers((m) => !m); setActive(null); }}>
                <IconLayers width={18} height={18} />
                {markers ? t.artwork.hideHotspots : t.artwork.showHotspots}
              </button>
            )}
            <button
              type="button"
              className={`icon-btn stage-icon ${fav ? "is-fav" : ""}`}
              onClick={() => toggleFavorite(p.slug)}
              aria-pressed={fav}
              aria-label={fav ? t.common.removeFavorite : t.common.addFavorite}
              title={fav ? t.common.removeFavorite : t.common.addFavorite}
            >
              <IconHeart filled={fav} />
            </button>
            <Link href={`/${locale}/compare/?a=${p.slug}`} className="icon-btn stage-icon" aria-label={t.common.compare} title={t.common.compare}>
              <IconCompare />
            </Link>
            <button type="button" className="icon-btn stage-icon" onClick={share} aria-label={t.common.share} title={t.common.share}>
              <IconLink />
            </button>
            <span className="art-minutes">
              <IconClock width={16} height={16} />
              {t.common.minutes(p.minutes)}
            </span>
          </div>
          {n > 0 && <p className="art-hint">{t.artwork.hotspotHint}</p>}
        </motion.div>
      </div>

      <AnimatePresence>
        {viewer.open && (
          <DeepZoomViewer
            title={p.title}
            src={p.image.zoom}
            srcSmall={p.image.zoomSmall}
            aspect={p.image.aspect}
            hotspots={p.hotspots}
            initialHotspot={viewer.at}
            onClose={closeViewer}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {toast && (
          <motion.div className="toast" role="status" initial={{ opacity: 0, y: 12, x: "-50%" }} animate={{ opacity: 1, y: 0, x: "-50%" }} exit={{ opacity: 0, y: 8, x: "-50%" }}>
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
