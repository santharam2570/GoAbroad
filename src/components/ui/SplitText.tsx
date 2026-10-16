"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/cn";

type Segment = { text: string; className?: string };

export function SplitText({
  segments,
  className,
  delay = 0,
  stagger = 0.06,
  as = "h1",
  inView = false,
  lineBreaks = false,
}: {
  segments: Segment[];
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p";
  inView?: boolean;
  lineBreaks?: boolean;
}) {
  const Tag = as;
  let index = 0;
  const label = segments.map((s) => s.text).join(" ");
  const trigger = inView
    ? { whileInView: { y: "0%", opacity: 1, rotate: 0 }, viewport: { once: true, margin: "-40px" } }
    : { animate: { y: "0%", opacity: 1, rotate: 0 } };

  return (
    <Tag className={className} aria-label={label}>
      {segments.map((seg, si) => [
        lineBreaks && si > 0 ? <br key={`br-${si}`} aria-hidden="true" className="hidden lg:block" /> : null,
        ...seg.text.split(" ").map((word, wi) => {
          const i = index++;
          return (
            <span key={`${si}-${wi}`} aria-hidden="true" className="inline-block overflow-hidden pb-[0.12em] align-bottom -mb-[0.12em]">
              <motion.span
                className={cn("inline-block will-change-transform", seg.className)}
                initial={{ y: "110%", opacity: 0, rotate: 4 }}
                {...trigger}
                transition={{ duration: 0.9, delay: delay + i * stagger, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
              {"\u00A0"}
            </span>
          );
        }),
      ])}
    </Tag>
  );
}
