"use client";

import { AnimatePresence, motion } from "motion/react";
import { Award, Building2, Calculator, GraduationCap, MapPinned, Users } from "lucide-react";
import { useState } from "react";
import { immigrationPathways } from "@/data/process";
import { cn } from "@/lib/cn";

const icons = [GraduationCap, Building2, Calculator, MapPinned, Users, Award];

export function PathwayTabs() {
  const [active, setActive] = useState(0);
  const p = immigrationPathways[active];
  const Icon = icons[active];

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div role="tablist" aria-label="Immigration pathways" aria-orientation="vertical" className="flex gap-2 overflow-x-auto pb-2 lg:col-span-5 lg:flex-col lg:overflow-visible lg:pb-0" data-lenis-prevent>
        {immigrationPathways.map((x, i) => {
          const I = icons[i];
          return (
            <button
              key={x.title}
              role="tab"
              id={`pathway-tab-${i}`}
              aria-selected={active === i}
              aria-controls="pathway-panel"
              onClick={() => setActive(i)}
              className={cn(
                "relative flex shrink-0 items-center gap-4 rounded-2xl px-5 py-4 text-left transition-colors",
                active === i ? "text-white" : "text-white/55 hover:bg-white/[0.04] hover:text-white",
              )}
            >
              {active === i && <motion.span layoutId="pathway-active" className="absolute inset-0 rounded-2xl border border-brand-400/40 bg-brand-500/15" transition={{ type: "spring", stiffness: 300, damping: 30 }} />}
              <span className="relative font-mono text-xs opacity-60">0{i + 1}</span>
              <I className="relative h-5 w-5 shrink-0" />
              <span className="relative whitespace-nowrap font-display text-lg font-medium lg:whitespace-normal">{x.title}</span>
            </button>
          );
        })}
      </div>
      <div className="lg:col-span-7">
        <div id="pathway-panel" role="tabpanel" aria-labelledby={`pathway-tab-${active}`} className="relative h-full min-h-[22rem] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900 p-8 sm:p-12">
          <div aria-hidden className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="relative">
              <motion.span initial={{ scale: 0.6, rotate: -20 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 200, damping: 14 }} className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-500 text-white">
                <Icon className="h-7 w-7" />
              </motion.span>
              <p className="mt-8 font-mono text-sm text-sun-300">Pathway {active + 1} of {immigrationPathways.length}</p>
              <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{p.title}</h3>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">{p.body}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
