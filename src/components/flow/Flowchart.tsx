"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { Check } from "lucide-react";
import { useRef } from "react";
import type { FlowStep } from "@/data/process";
import { cn } from "@/lib/cn";

export function Flowchart({ steps, light = false, detailed = false, idPrefix }: { steps: FlowStep[]; light?: boolean; detailed?: boolean; idPrefix?: string }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.6"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 26 });

  return (
    <ol ref={ref} className="relative">
      <div aria-hidden className={cn("absolute bottom-6 left-[1.4rem] top-6 w-px sm:left-[1.9rem]", light ? "bg-ink-900/10" : "bg-white/10")} />
      <motion.div
        aria-hidden
        style={{ scaleY }}
        className="absolute bottom-6 left-[1.4rem] top-6 w-px origin-top bg-gradient-to-b from-brand-400 via-brand-500 to-sun-400 sm:left-[1.9rem]"
      />
      {steps.map((s, i) => (
        <motion.li
          key={s.title}
          id={idPrefix ? `${idPrefix}${i + 1}` : undefined}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex scroll-mt-32 gap-5 pb-8 last:pb-0 sm:gap-8"
        >
          <motion.span
            initial={{ scale: 0.4, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
            className={cn(
              "relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-mono text-sm font-semibold sm:h-[3.8rem] sm:w-[3.8rem] sm:text-base",
              i === steps.length - 1 ? "bg-sun-400 text-ink-950" : "bg-brand-500 text-white",
              "shadow-[0_0_0_6px_var(--ring)]",
            )}
            style={{ ["--ring" as string]: light ? "#f4f7fb" : "#03060d" }}
          >
            {i === steps.length - 1 ? <Check className="h-5 w-5" /> : String(i + 1).padStart(2, "0")}
          </motion.span>
          <div
            className={cn(
              "flex-1 rounded-3xl border p-6 transition-colors duration-500 sm:p-7",
              light ? "border-ink-900/10 bg-white hover:border-brand-500/40" : "border-white/10 bg-white/[0.03] hover:border-brand-400/40 hover:bg-white/[0.05]",
            )}
          >
            <p className={cn("text-xs font-semibold uppercase tracking-[0.2em]", light ? "text-brand-600" : "text-sun-300")}>Step {i + 1}</p>
            <h3 className={cn("mt-2 font-display text-xl font-semibold tracking-tight sm:text-2xl", light ? "text-ink-900" : "text-white")}>{s.title}</h3>
            <p className={cn("mt-2 leading-relaxed", light ? "text-ink-700" : "text-white/75")}>{s.short}</p>
            {detailed && s.detail && (
              <p className={cn("mt-4 border-t pt-4 text-[0.95rem] leading-relaxed", light ? "border-ink-900/10 text-ink-600" : "border-white/10 text-white/60")}>{s.detail}</p>
            )}
            {detailed && s.list && (
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {s.list.map((d) => (
                  <li key={d} className={cn("flex gap-2.5 rounded-xl p-3 text-sm", light ? "bg-paper text-ink-700" : "bg-white/[0.04] text-white/75")}>
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                    {d}
                  </li>
                ))}
              </ul>
            )}
            {detailed && s.note && (
              <p className={cn("mt-4 rounded-xl border-l-2 border-sun-400 p-3 text-sm italic", light ? "bg-sun-300/20 text-ink-700" : "bg-sun-400/5 text-white/70")}>{s.note}</p>
            )}
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
