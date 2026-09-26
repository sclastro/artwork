"use client";

import { focusHotspot } from "./RichText";

export function HotspotButton({ index, className, children, label }: { index: number; className?: string; children: React.ReactNode; label?: string }) {
  return (
    <button type="button" className={className} onClick={() => focusHotspot(index)} aria-label={label}>
      {children}
    </button>
  );
}
