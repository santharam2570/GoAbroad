"use client";

import { motion } from "motion/react";
import { Eye, Target } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { about } from "@/data/content";

export function WhyChoose({ showVision = true }: { showVision?: boolean }) {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionHeading eyebrow="Why GoAbroad Services" title="Guidance that is" accent="personal, transparent & responsible." />
              {showVision && (
                <div className="mt-10 space-y-4">
                  <Reveal className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
                      <Eye className="h-4 w-4" /> Our vision
                    </p>
                    <p className="mt-3 text-lg leading-relaxed text-white/85">{about.vision}</p>
                  </Reveal>
                  <Reveal delay={0.08} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sun-300">
                      <Target className="h-4 w-4" /> Our mission
                    </p>
                    <p className="mt-3 text-lg leading-relaxed text-white/85">{about.mission}</p>
                  </Reveal>
                </div>
              )}
            </div>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {about.whyChoose.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800 to-ink-900 p-7 [perspective:800px]"
              >
                <span aria-hidden className="absolute -bottom-6 -right-2 font-display text-8xl font-bold text-white/[0.04] transition-all duration-700 group-hover:-translate-y-2 group-hover:text-brand-500/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="block h-1 w-10 rounded-full bg-brand-500 transition-all duration-500 group-hover:w-20 group-hover:bg-sun-400" />
                <p className="relative mt-6 font-display text-xl font-medium leading-snug text-white">{item}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
