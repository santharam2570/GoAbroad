"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function SplitFlap({ text, length, className, tileClass }: { text: string; length?: number; className?: string; tileClass?: string }) {
  const target = (length ? text.padEnd(length, " ").slice(0, length) : text).toUpperCase();
  const [display, setDisplay] = useState(target);
  const frame = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const t = window.setTimeout(() => setDisplay(target), 0);
      return () => window.clearTimeout(t);
    }
    let tick = 0;
    const id = window.setInterval(() => {
      tick++;
      setDisplay(
        target
          .split("")
          .map((ch, i) => (tick > 3 + i * 1.6 || ch === " " ? ch : CHARS[(tick * 7 + i * 13 + frame.current) % CHARS.length]))
          .join(""),
      );
      if (tick > 4 + target.length * 1.6) window.clearInterval(id);
    }, 45);
    frame.current++;
    return () => window.clearInterval(id);
  }, [target]);

  return (
    <span className={cn("inline-flex gap-[3px]", className)} aria-label={text}>
      {display.split("").map((ch, i) => (
        <span
          key={i}
          aria-hidden
          className={cn(
            "relative inline-flex h-[1.6em] w-[1.15em] items-center justify-center overflow-hidden rounded-[4px] bg-ink-950 font-mono font-semibold text-sun-300 shadow-[inset_0_-1px_0_rgba(255,255,255,0.06)]",
            tileClass,
          )}
        >
          <span className="absolute inset-x-0 top-1/2 h-px bg-black/60" />
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}
