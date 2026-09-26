"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
  srcSet?: string;
  sizes?: string;
  alt: string;
  lqip?: string;
  /** 闊 ÷ 高；提供後預留空間，避免版面跳動 */
  aspect?: number;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  style?: React.CSSProperties;
  fit?: "cover" | "contain";
}

/** 帶模糊預覽與淡入效果的圖片 */
export function ArtImage({ src, srcSet, sizes, alt, lqip, aspect, priority, className, imgClassName, style, fit = "cover" }: Props) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // 圖片已由瀏覽器快取時，onLoad 可能早於 hydration 觸發
    if (ref.current?.complete && ref.current.naturalWidth > 0) setLoaded(true);
  }, [src]);

  return (
    <div
      className={className}
      style={{ position: "relative", aspectRatio: aspect ? String(aspect) : undefined, overflow: "hidden", ...style }}
    >
      {lqip && !loaded && <div className="lqip" style={{ backgroundImage: `url(${lqip})` }} aria-hidden />}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={ref}
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`img-fade ${loaded ? "is-loaded" : ""} ${imgClassName ?? ""}`}
        style={{ position: "relative", width: "100%", height: "100%", objectFit: fit, transition: "opacity .7s var(--ease-out)" }}
      />
    </div>
  );
}
