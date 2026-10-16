"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Briefcase, GraduationCap, Home, Languages, Wallet } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { FlagBadge } from "@/components/ui/FlagBadge";
import { countries } from "@/data/countries";
import { primaryNav } from "@/data/site";
import { cn } from "@/lib/cn";

const meta = [
  { icon: GraduationCap, span: "lg:col-span-7 lg:row-span-2", tone: "from-brand-500/30", stat: "20", statLabel: "country guides" },
  { icon: Briefcase, span: "lg:col-span-5", tone: "from-sun-500/25", stat: "8", statLabel: "work authorisation types" },
  { icon: Home, span: "lg:col-span-5", tone: "from-emerald-500/20", stat: "6", statLabel: "immigration pathways" },
  { icon: Languages, span: "lg:col-span-6", tone: "from-violet-500/20", stat: "7", statLabel: "English tests covered" },
  { icon: Wallet, span: "lg:col-span-6", tone: "from-brand-400/20", stat: "7", statLabel: "step loan flowchart" },
];

export function Pillars() {
  const items = primaryNav.slice(1);
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="What we do"
          title="One platform for every"
          accent="international ambition."
          description="More than a traditional study-abroad consultancy — a comprehensive international education and career guidance platform for students, graduates, skilled professionals and families."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          {items.map((item, i) => {
            const m = meta[i];
            const Icon = m.icon;
            const big = i === 0;
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={m.span}
              >
                <SpotlightCard className="h-full border border-white/10 bg-ink-800/60">
                  <Link href={item.href} className={cn("relative flex h-full flex-col justify-between overflow-hidden p-7 sm:p-9", big ? "min-h-[22rem] lg:min-h-[30rem]" : "min-h-[14rem]")}>
                    <div aria-hidden className={cn("absolute inset-0 bg-gradient-to-br to-transparent opacity-60", m.tone)} />
                    {big && (
                      <div aria-hidden className="absolute right-8 top-24 hidden max-w-[17rem] flex-wrap justify-end gap-2.5 sm:flex">
                        {countries.map((c, ci) => (
                          <motion.span
                            key={c.slug}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.3 + ci * 0.04 }}
                            className="transition-transform duration-500 group-hover:-translate-y-1"
                            style={{ transitionDelay: `${ci * 20}ms` }}
                          >
                            <FlagBadge country={c} className="h-9 w-9 ring-white/10" />
                          </motion.span>
                        ))}
                      </div>
                    )}
                    {big && (
                      <div aria-hidden className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full border border-white/10">
                        <div className="absolute inset-8 rounded-full border border-white/10" />
                        <div className="absolute inset-16 rounded-full border border-dashed border-brand-400/30 animate-spin-slow" />
                        <div className="absolute inset-24 rounded-full bg-brand-500/30 blur-2xl" />
                      </div>
                    )}
                    <div className="relative flex items-start justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-500 group-hover:rotate-45 group-hover:border-brand-400 group-hover:bg-brand-500">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                    <div className="relative mt-10">
                      <p className="font-mono text-xs text-white/40">
                        <span className={cn("font-display font-semibold text-white", big ? "text-6xl sm:text-7xl" : "text-4xl")}>{m.stat}</span>{" "}
                        {m.statLabel}
                      </p>
                      <h3 className={cn("mt-4 font-display font-semibold tracking-tight text-white", big ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl")}>
                        {item.label}
                      </h3>
                      <p className="mt-3 max-w-md text-white/60">{item.description}</p>
                    </div>
                  </Link>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
