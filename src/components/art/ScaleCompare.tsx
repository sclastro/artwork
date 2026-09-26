import type { Locale } from "@/content/types";

/** 畫作實際尺寸與 170 厘米高成年人的比例示意 */
export function ScaleCompare({ h, w, thumb, locale, label }: { h: number; w: number; thumb: string; locale: Locale; label: string }) {
  const person = 170;
  const personW = 48;
  const gap = 30;
  const totalW = w + gap + personW;
  const totalH = Math.max(h + 40, person) + 10; // 畫作底邊離地約 40 厘米（近似掛畫高度）
  const ground = totalH;
  const artY = ground - 40 - h;
  const px = w + gap;
  return (
    <figure className="scale">
      <svg viewBox={`0 0 ${totalW} ${totalH + 2}`} role="img" aria-label={label} preserveAspectRatio="xMidYMax meet">
        <line x1="0" y1={ground} x2={totalW} y2={ground} stroke="currentColor" strokeOpacity="0.3" strokeWidth={totalW / 400} />
        <image href={thumb} x="0" y={artY} width={w} height={h} preserveAspectRatio="none" />
        <rect x="0" y={artY} width={w} height={h} fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth={totalW / 500} />
        {/* 人形剪影，高 170 */}
        <g transform={`translate(${px}, ${ground - person}) scale(${personW / 48}, ${person / 170})`} fill="currentColor" fillOpacity="0.55">
          <circle cx="24" cy="12" r="11" />
          <path d="M10 30 Q24 24 38 30 L44 88 Q44 92 40 92 L37 92 L35 60 L34 60 L35 166 Q35 170 31 170 L27 170 L25 100 L23 100 L21 170 L17 170 Q13 170 13 166 L14 60 L13 60 L11 92 L8 92 Q4 92 4 88 Z" />
        </g>
      </svg>
      <figcaption>
        {locale === "zh" ? `${h} × ${w} 厘米` : `${h} × ${w} cm`}
      </figcaption>
    </figure>
  );
}
