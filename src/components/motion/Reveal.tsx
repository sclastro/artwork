"use client";

import { motion } from "motion/react";

/**
 * 捲動進入視窗時淡入上移。
 * 注意：不可按 useReducedMotion 切換成另一種結構——伺服器端無法得知使用者設定，
 * 會令首次繪製的 opacity:0 殘留。減少動態交由 MotionConfig reducedMotion="user" 處理。
 */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </M>
  );
}
