"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { BadgeCheck, Briefcase, CalendarCheck, ChevronRight, ExternalLink, GraduationCap, Home, Stamp } from "lucide-react";
import { FlagBadge } from "@/components/ui/FlagBadge";
import { SplitText } from "@/components/ui/SplitText";
import type { Country } from "@/data/countries";
import { site } from "@/data/site";

const quick = [
  { label: "Study", id: "study", icon: GraduationCap },
  { label: "Admissions", id: "admission-requirements", icon: BadgeCheck },
  { label: "Student Visa", id: "student-visa", icon: Stamp },
  { label: "Work", id: "work-while-studying", icon: Briefcase },
  { label: "Immigration/PR", id: "immigration", icon: Home },
];

export function CountryHero({ country: c, index, total }: { country: Country; index: number; total: number }) {
  return (
    <section className="grain relative isolate overflow-hidden pb-20 pt-36 sm:pt-44">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-lines mask-fade-b opacity-60" />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.22, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -right-40 -top-40 h-[44rem] w-[44rem] rounded-full blur-[120px]"
          style={{ background: `conic-gradient(from 90deg, ${[...c.flag.colors, c.flag.colors[0]].join(",")})` }}
        />
        <div className="absolute -left-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-brand-500/20 blur-[130px]" />
        <div aria-hidden className="absolute -bottom-10 right-4 select-none font-display text-[38vw] font-bold leading-none tracking-tighter text-white/[0.03] lg:text-[26rem]">
          {c.code}
        </div>
      </div>

      <div className="container-x">
        <motion.nav aria-label="Breadcrumb" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/45">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li className="flex items-center gap-1.5"><ChevronRight className="h-3.5 w-3.5" /><Link href="/study-abroad" className="hover:text-white">Study Abroad</Link></li>
            <li className="flex items-center gap-1.5"><ChevronRight className="h-3.5 w-3.5" /><span aria-current="page" className="text-white/80">{c.name}</span></li>
          </ol>
        </motion.nav>

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex items-center gap-4">
              <motion.span initial={{ rotate: -180, scale: 0 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.5 }}>
                <FlagBadge country={c} className="h-12 w-12" />
              </motion.span>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-300">
                Destination {String(index + 1).padStart(2, "0")} / {total} · {c.region}
              </span>
            </motion.div>
            <SplitText
              delay={0.6}
              className="mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-[-0.03em] text-white sm:text-7xl lg:text-[5.5rem]"
              segments={[{ text: "Study in", className: "font-serif font-normal italic tracking-normal text-white/70" }, { text: c.name }]}
            />
            <motion.ul initial="h" animate="s" variants={{ s: { transition: { staggerChildren: 0.06, delayChildren: 1 } } }} className="mt-7 flex flex-wrap gap-2">
              {c.focus.map((f) => (
                <motion.li key={f} variants={{ h: { opacity: 0, y: 10 }, s: { opacity: 1, y: 0 } }} className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/85">
                  {f}
                </motion.li>
              ))}
            </motion.ul>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }} className="mt-7 max-w-2xl text-lg leading-relaxed text-white/70">
              {c.overview}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.25, duration: 0.8 }} className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-5">
              {quick.map((q) => (
                <a key={q.id} href={`#${q.id}`} className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:-translate-y-1 hover:border-brand-400/50 hover:bg-brand-500/10">
                  <q.icon className="h-5 w-5 text-brand-300 transition-transform group-hover:scale-110" />
                  <span className="text-sm font-semibold text-white">{q.label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4"
          >
            <div className="glass rounded-3xl p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">At a glance</p>
              <dl className="mt-4 space-y-4 text-sm">
                <div className="flex justify-between gap-4 border-b border-white/10 pb-4">
                  <dt className="text-white/55">Student status</dt>
                  <dd className="text-right font-semibold text-white">{c.visaLabel}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-white/10 pb-4">
                  <dt className="text-white/55">Region</dt>
                  <dd className="font-semibold text-white">{c.region}</dd>
                </div>
                <div className="border-b border-white/10 pb-4">
                  <dt className="text-white/55">Official resources</dt>
                  <dd className="mt-2 space-y-1.5">
                    {c.resources.map((r) => (
                      <a key={r.url} href={r.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-2 rounded-lg px-2 py-1 -mx-2 font-medium text-brand-300 hover:bg-white/5 hover:text-brand-200">
                        {r.label}
                        <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                      </a>
                    ))}
                  </dd>
                </div>
                <div className="flex items-start gap-3 rounded-2xl bg-sun-400/10 p-3 text-xs text-sun-300">
                  <CalendarCheck className="h-4 w-4 shrink-0" />
                  <span>
                    Last reviewed: <strong>{site.lastReviewed}</strong>
                    <br />
                    Next review: {site.nextReview}
                  </span>
                </div>
              </dl>
              <a href="#apply" className="mt-5 flex w-full items-center justify-center rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-400">
                Apply with GoAbroad Services
              </a>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
