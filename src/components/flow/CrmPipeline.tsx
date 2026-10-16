"use client";

import { motion } from "motion/react";
import { crmStages } from "@/data/process";

export function CrmPipeline() {
  return (
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-3">
      {crmStages.map((s, i) => (
        <motion.li
          key={s}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2"
        >
          <span
            className={
              i === crmStages.length - 1
                ? "rounded-full bg-sun-400 px-4 py-2 text-sm font-semibold text-ink-950"
                : "rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm text-white/85"
            }
          >
            <span className="mr-2 font-mono text-xs opacity-50">{String(i + 1).padStart(2, "0")}</span>
            {s}
          </span>
          {i < crmStages.length - 1 && (
            <svg aria-hidden width="28" height="8" viewBox="0 0 28 8" className="text-brand-400">
              <line x1="0" y1="4" x2="22" y2="4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" className="animate-dash" />
              <path d="M22 0 L28 4 L22 8 Z" fill="currentColor" />
            </svg>
          )}
        </motion.li>
      ))}
    </ol>
  );
}
