"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import type OpenSeadragon from "openseadragon";
import { useDict } from "../LocaleProvider";
import { lockScroll } from "../motion/SmoothScroll";
import { IconArrowLeft, IconArrowRight, IconClose, IconExpand, IconLayers, IconReset, IconZoom, IconZoomOut } from "../icons";

export interface ViewerHotspot {
  x: number;
  y: number;
  title: string;
  body: string;
}

interface Props {
  title: string;
  src: string;
  srcSmall: string;
  aspect: number;
  hotspots: ViewerHotspot[];
  initialHotspot?: number | null;
  onClose: () => void;
}

/** 全屏深度縮放檢視器（OpenSeadragon），畫上顯示可按的熱點 */
export function DeepZoomViewer({ title, src, srcSmall, aspect, hotspots, initialHotspot, onClose }: Props) {
  const t = useDict();
  const holder = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<OpenSeadragon.Viewer | null>(null);
  const osdRef = useRef<typeof OpenSeadragon | null>(null);
  const [active, setActive] = useState<number | null>(initialHotspot ?? null);
  const [showMarkers, setShowMarkers] = useState(true);
  const [ready, setReady] = useState(false);
  const markerEls = useRef<HTMLElement[]>([]);

  useEffect(() => {
    lockScroll(true);
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", esc);
    return () => {
      lockScroll(false);
      document.removeEventListener("keydown", esc);
    };
  }, [onClose]);

  useEffect(() => {
    let destroyed = false;
    import("openseadragon").then(({ default: OSD }) => {
      if (destroyed || !holder.current) return;
      osdRef.current = OSD;
      const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
      const small = window.innerWidth < 800 || memory < 4;
      const viewer = OSD({
        element: holder.current,
        // 單張大圖；OSD 會在瀏覽器內建立多層金字塔（需 CORS，Wikimedia 有提供）
        tileSources: { type: "image", url: small ? srcSmall : src, buildPyramid: true } as unknown as OpenSeadragon.TileSourceOptions,
        crossOriginPolicy: "Anonymous",
        showNavigationControl: false,
        showNavigator: window.innerWidth > 800,
        navigatorPosition: "BOTTOM_RIGHT",
        navigatorAutoFade: false,
        animationTime: 0.9,
        springStiffness: 7,
        blendTime: 0.3,
        maxZoomPixelRatio: 2.2,
        minZoomImageRatio: 0.8,
        visibilityRatio: 0.6,
        gestureSettingsMouse: { clickToZoom: false, dblClickToZoom: true, scrollToZoom: true },
        gestureSettingsTouch: { pinchRotate: false, dblClickToZoom: true },
      });
      viewerRef.current = viewer;

      viewer.addHandler("open", () => {
        setReady(true);
        markerEls.current = hotspots.map((h, i) => {
          const el = document.createElement("button");
          el.type = "button";
          el.className = "dz-marker";
          el.textContent = String(i + 1);
          el.setAttribute("aria-label", `${i + 1}. ${h.title}`);
          viewer.addOverlay({ element: el, location: new OSD.Point(h.x, h.y / aspect), placement: OSD.Placement.CENTER });
          // OSD 的滑鼠追蹤會攔截 click，故以 MouseTracker 綁定
          new OSD.MouseTracker({
            element: el,
            clickHandler: () => setActive(i),
          });
          return el;
        });
        if (initialHotspot != null) flyTo(initialHotspot, false);
      });
    });
    return () => {
      destroyed = true;
      viewerRef.current?.destroy();
      viewerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    markerEls.current.forEach((el, i) => {
      el.classList.toggle("is-active", i === active);
      el.style.visibility = showMarkers ? "visible" : "hidden";
    });
  }, [active, showMarkers, ready]);

  const flyTo = (i: number, immediate = false) => {
    const v = viewerRef.current;
    const OSD = osdRef.current;
    if (!v || !OSD) return;
    const h = hotspots[i];
    const zoom = Math.max(3, aspect * 2.4);
    v.viewport.zoomTo(zoom, undefined, immediate);
    v.viewport.panTo(new OSD.Point(h.x, h.y / aspect), immediate);
  };

  useEffect(() => {
    if (active != null && ready) flyTo(active);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, ready]);

  const zoomBy = (f: number) => {
    const v = viewerRef.current;
    if (!v) return;
    v.viewport.zoomBy(f);
    v.viewport.applyConstraints();
  };
  const reset = () => {
    setActive(null);
    viewerRef.current?.viewport.goHome();
  };
  const fullscreen = () => {
    const el = holder.current?.parentElement;
    if (!document.fullscreenElement) el?.requestFullscreen?.().catch(() => {});
    else document.exitFullscreen?.();
  };

  const h = active != null ? hotspots[active] : null;
  return createPortal(
    <motion.div
      className="dz"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      data-lenis-prevent
    >
      <div className="dz-canvas" ref={holder} />
      {!ready && <div className="dz-loading">{t.common.loading}</div>}
      <div className="dz-top">
        <div className="dz-title">
          <strong>{title}</strong>
          <span>{t.artwork.zoomHint}</span>
        </div>
        <div className="dz-tools">
          <button type="button" className="icon-btn" onClick={() => zoomBy(1.6)} aria-label={t.artwork.zoomIn} title={t.artwork.zoomIn}>
            <IconZoom />
          </button>
          <button type="button" className="icon-btn" onClick={() => zoomBy(1 / 1.6)} aria-label={t.artwork.zoomOut} title={t.artwork.zoomOut}>
            <IconZoomOut />
          </button>
          <button type="button" className="icon-btn" onClick={reset} aria-label={t.artwork.reset} title={t.artwork.reset}>
            <IconReset />
          </button>
          {hotspots.length > 0 && (
            <button
              type="button"
              className="icon-btn"
              aria-pressed={showMarkers}
              onClick={() => setShowMarkers((s) => !s)}
              aria-label={showMarkers ? t.artwork.hideHotspots : t.artwork.showHotspots}
              title={showMarkers ? t.artwork.hideHotspots : t.artwork.showHotspots}
            >
              <IconLayers />
            </button>
          )}
          <button type="button" className="icon-btn dz-fs" onClick={fullscreen} aria-label={t.artwork.fullscreen} title={t.artwork.fullscreen}>
            <IconExpand />
          </button>
          <button type="button" className="icon-btn" onClick={onClose} aria-label={t.common.close} title={t.common.close}>
            <IconClose />
          </button>
        </div>
      </div>
      {hotspots.length > 0 && (
        <div className={`dz-panel ${h ? "is-open" : ""}`}>
          {h ? (
            <>
              <span className="kicker">{t.artwork.hotspotOf(active! + 1, hotspots.length)}</span>
              <h3>{h.title}</h3>
              <p>{h.body}</p>
              <div className="dz-panel-nav">
                <button type="button" className="btn btn-sm btn-ghost-light" onClick={() => setActive((a) => ((a ?? 0) - 1 + hotspots.length) % hotspots.length)}>
                  <IconArrowLeft width={16} height={16} />
                </button>
                <button type="button" className="btn btn-sm btn-ghost-light" onClick={() => setActive((a) => ((a ?? -1) + 1) % hotspots.length)}>
                  <IconArrowRight width={16} height={16} />
                </button>
                <button type="button" className="btn btn-sm btn-ghost-light" onClick={reset}>
                  {t.artwork.reset}
                </button>
              </div>
            </>
          ) : (
            <button type="button" className="btn btn-sm btn-light" onClick={() => setActive(0)}>
              {t.artwork.hotspots} · {hotspots.length}
              <IconArrowRight width={16} height={16} />
            </button>
          )}
        </div>
      )}
    </motion.div>,
    document.body,
  );
}
