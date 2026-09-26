"use client";

import { useEffect, useRef } from "react";
import type { Map as LMap, TileLayer } from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Bi } from "@/content/types";
import { BASE_PATH } from "@/lib/prefs";
import { useDict, useLocale } from "../LocaleProvider";

export interface MapMuseum {
  slug: string;
  name: Bi;
  city: Bi;
  lat: number;
  lng: number;
  works: { slug: string; title: Bi; thumb: string }[];
}

const TILES = {
  light: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
  dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
};

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/** 博物館地圖（Leaflet + CARTO 底圖，隨深淺色切換） */
export function MuseumMap({ museums, height = "62vh", zoom }: { museums: MapMuseum[]; height?: string; zoom?: number }) {
  const t = useDict();
  const locale = useLocale();
  const el = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LMap | null>(null);
  const tileRef = useRef<TileLayer | null>(null);

  useEffect(() => {
    let cancelled = false;
    import("leaflet").then((L) => {
      if (cancelled || !el.current || mapRef.current) return;
      const map = L.map(el.current, { scrollWheelZoom: false, worldCopyJump: true, zoomControl: true, attributionControl: true });
      mapRef.current = map;
      const theme = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
      tileRef.current = L.tileLayer(TILES[theme], {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }).addTo(map);

      const bounds = L.latLngBounds([]);
      museums.forEach((m) => {
        const icon = L.divIcon({
          className: "map-pin",
          html: `<span>${m.works.length}</span>`,
          iconSize: [34, 34],
          iconAnchor: [17, 17],
        });
        const thumbs = m.works
          .slice(0, 6)
          .map((w) => `<a href="${BASE_PATH}/${locale}/artworks/${w.slug}/" title="${esc(w.title[locale])}"><img src="${w.thumb}" alt="" loading="lazy"/></a>`)
          .join("");
        const html = `<div class="map-pop"><strong>${esc(m.name[locale])}</strong><small>${esc(m.city[locale])} · ${esc(t.common.works(m.works.length))}</small><div class="map-pop-thumbs">${thumbs}</div><a class="map-pop-link" href="${BASE_PATH}/${locale}/museums/${m.slug}/">${esc(t.museums.works)} →</a></div>`;
        L.marker([m.lat, m.lng], { icon, title: m.name[locale], keyboard: true }).addTo(map).bindPopup(html, { maxWidth: 280, minWidth: 220 });
        bounds.extend([m.lat, m.lng]);
      });
      if (museums.length === 1) map.setView([museums[0].lat, museums[0].lng], zoom ?? 13);
      else map.fitBounds(bounds, { padding: [40, 40] });
      // 點擊地圖後才啟用滾輪縮放，避免捲動頁面時誤觸
      map.on("click", () => map.scrollWheelZoom.enable());
      map.on("mouseout", () => map.scrollWheelZoom.disable());
    });

    const onTheme = (e: Event) => {
      const theme = (e as CustomEvent<string>).detail === "dark" ? "dark" : "light";
      tileRef.current?.setUrl(TILES[theme]);
    };
    window.addEventListener("tgw:theme", onTheme);
    return () => {
      cancelled = true;
      window.removeEventListener("tgw:theme", onTheme);
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [museums, locale, t, zoom]);

  return <div ref={el} className="museum-map" style={{ height }} role="region" aria-label={t.museums.mapLabel} data-lenis-prevent />;
}
