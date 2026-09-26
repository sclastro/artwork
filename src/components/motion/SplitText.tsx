"use client";

import { motion } from "motion/react";

/**
 * 標題逐字（中文）或逐詞（英文）浮現。
 * 以 aria-label 保留完整文字供螢幕閱讀器讀出。
 */
export function SplitText({
  text,
  as = "h1",
  className,
  delay = 0,
  stagger,
  inView = false,
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  stagger?: number;
  inView?: boolean;
}) {
  const Tag = as;
  const isCJK = /[㐀-鿿]/.test(text);
  const parts = isCJK ? Array.from(text) : text.split(/(\s+)/);
  const step = stagger ?? (isCJK ? 0.045 : 0.07);
  const trigger = inView
    ? { whileInView: { y: "0%", opacity: 1 }, viewport: { once: true, margin: "0px 0px -10% 0px" } }
    : { animate: { y: "0%", opacity: 1 } };
  let n = 0;
  return (
    <Tag className={className} aria-label={text}>
      {parts.map((p, i) =>
        /^\s+$/.test(p) ? (
          <span key={i}> </span>
        ) : (
          <span key={i} aria-hidden style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", paddingBottom: "0.08em" }}>
            <motion.span
              style={{ display: "inline-block" }}
              initial={{ y: "105%", opacity: 0 }}
              {...trigger}
              transition={{ duration: 0.9, delay: delay + n++ * step, ease: [0.16, 1, 0.3, 1] }}
            >
              {p}
            </motion.span>
          </span>
        ),
      )}
    </Tag>
  );
}
