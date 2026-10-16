"use client";

import { motion } from "motion/react";
import { BadgeCheck, Briefcase, GraduationCap, Home } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { keyPrinciple } from "@/data/site";

const icons = [GraduationCap, BadgeCheck, Briefcase, Home];
const who = ["Decided by the institution", "Decided by the immigration authority", "Set by your visa conditions & employer", "Governed by settlement rules"];

export function KeyPrinciple() {
  return (
    <section className="relative overflow-hidden bg-paper py-24 text-ink-900 sm:py-32">
      <div aria-hidden className="absolute inset-0 grid-lines-dark" />
      <div className="container-x relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow light>A key principle</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:text-[3.6rem]">
                {keyPrinciple.title.split(".")[0]}.{" "}
                <span className="font-serif font-normal italic text-brand-600">{keyPrinciple.title.split(".")[1].trim()}.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <p className="text-lg leading-relaxed text-ink-600">{keyPrinciple.body}</p>
          </Reveal>
        </div>

        <div className="relative mt-16">
          <svg aria-hidden className="absolute left-0 right-0 top-[3.25rem] hidden h-2 w-full lg:block" preserveAspectRatio="none" viewBox="0 0 100 2">
            <motion.line
              x1="6" y1="1" x2="94" y2="1"
              stroke="#00a3e6" strokeWidth="0.3" strokeDasharray="1 1.2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
          </svg>
          <ol className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {keyPrinciple.stages.map((stage, i) => {
              const Icon = icons[i];
              return (
                <motion.li
                  key={stage}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative rounded-3xl border border-ink-900/10 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(6,11,23,0.35)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-25px_rgba(0,132,189,0.45)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-900 text-white transition-colors duration-500 group-hover:bg-brand-500">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-mono text-sm text-ink-500/60">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">{stage}</h3>
                  <p className="mt-2 text-sm text-ink-600">{who[i]}</p>
                  <span className="mt-5 inline-flex rounded-full bg-mist px-3 py-1 text-xs font-semibold text-ink-700">Separate process</span>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
