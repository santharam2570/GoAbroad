"use client";

import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { useId, useState } from "react";
import { cn } from "@/lib/cn";

export function Accordion({
  items,
  light = false,
  defaultOpen = 0,
}: {
  items: { q: string; a: string }[];
  light?: boolean;
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <div className={cn("divide-y border-y", light ? "divide-ink-900/10 border-ink-900/10" : "divide-white/10 border-white/10")}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const id = `${baseId}-${i}`;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={id}
                onClick={() => setOpen(isOpen ? null : i)}
                className={cn(
                  "group flex w-full items-center justify-between gap-6 py-6 text-left font-display text-lg font-medium tracking-tight transition-colors sm:text-xl",
                  light ? "text-ink-900 hover:text-brand-600" : "text-white hover:text-brand-300",
                )}
              >
                <span className="flex items-baseline gap-4">
                  <span className={cn("font-mono text-xs", light ? "text-ink-500/60" : "text-white/35")}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.q}
                </span>
                <span
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500",
                    isOpen
                      ? "rotate-45 border-brand-500 bg-brand-500 text-white"
                      : light
                        ? "border-ink-900/15 text-ink-900"
                        : "border-white/15 text-white",
                  )}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={id}
                  role="region"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className={cn("max-w-3xl pb-7 pl-9 leading-relaxed", light ? "text-ink-600" : "text-white/65")}>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
