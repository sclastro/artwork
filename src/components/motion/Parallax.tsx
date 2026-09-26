"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

/** 內容隨捲動以不同速度移動（speed 為正數時比頁面慢） */
export function Parallax({ children, speed = 0.15, className, style }: { children: React.ReactNode; speed?: number; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 100}%`, `${speed * 100}%`]);
  return (
    <div ref={ref} className={className} style={{ overflow: "hidden", ...style }}>
      <motion.div style={{ y: reduce ? 0 : y, height: "100%", scale: reduce ? 1 : 1 + speed * 1.4 }}>{children}</motion.div>
    </div>
  );
}
