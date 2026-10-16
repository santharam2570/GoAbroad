"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { serviceIcons } from "@/components/ui/icons";
import { services } from "@/data/services";

export function ServiceList() {
  return (
    <ul className="border-t border-white/10">
      {services.map((s, i) => {
        const Icon = serviceIcons[s.icon];
        return (
          <motion.li
            key={s.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-white/10"
          >
            <Link href={`/services/${s.slug}`} className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-5 overflow-hidden px-2 py-6 sm:gap-8 sm:px-4 sm:py-7 lg:grid-cols-[4rem_1.1fr_1fr_auto]">
              <span aria-hidden className="absolute inset-0 origin-bottom scale-y-0 bg-gradient-to-r from-brand-600 to-brand-500 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
              <span className="relative font-display text-3xl font-semibold text-white/25 transition-colors group-hover:text-white/60 sm:text-4xl">{s.letter}</span>
              <span className="relative flex items-center gap-4">
                <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 text-brand-300 transition-colors group-hover:border-white/30 group-hover:text-white sm:flex">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-display text-xl font-semibold tracking-tight text-white transition-transform duration-500 group-hover:translate-x-2 sm:text-2xl">{s.title}</span>
              </span>
              <span className="relative hidden text-white/55 transition-colors group-hover:text-white/90 lg:block">{s.summary}</span>
              <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-500 group-hover:rotate-45 group-hover:border-white group-hover:bg-white group-hover:text-brand-600">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </motion.li>
        );
      })}
    </ul>
  );
}
