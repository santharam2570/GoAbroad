"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { Quote } from "lucide-react";
import { useRef } from "react";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { about, homeIntro } from "@/data/content";

export function Intro() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = homeIntro.lead.split(" ");

  return (
    <section className="relative py-28 sm:py-36">
      <div className="container-x">
        <Reveal>
          <Eyebrow>{homeIntro.title}</Eyebrow>
        </Reveal>
        <p ref={ref} className="mt-8 max-w-5xl font-display text-3xl font-medium leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.7rem]">
          {words.map((w, i) => (
            <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
              {w}
            </Word>
          ))}
        </p>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <div className="space-y-6 text-lg leading-relaxed text-white/65 lg:col-span-7">
            {homeIntro.body.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p>{p}</p>
              </Reveal>
            ))}
            <Reveal delay={0.16}>
              <p>{homeIntro.services}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="flex flex-wrap gap-2 pt-2">
                {homeIntro.counsellingFactors.map((f) => (
                  <li key={f} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80">
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <figure className="relative h-full overflow-hidden rounded-3xl border border-brand-400/20 bg-gradient-to-br from-brand-600/30 via-ink-800 to-ink-900 p-8 sm:p-10">
              <div aria-hidden className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brand-400/20 blur-3xl" />
              <Quote className="h-10 w-10 text-brand-400" />
              <figcaption className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-sun-300">Our commitment</figcaption>
              <blockquote className="mt-3 font-serif text-3xl italic leading-snug text-white sm:text-4xl">{about.commitment}</blockquote>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const accent = /achievable|plans/.test(children);
  return (
    <motion.span
      style={{ opacity }}
      className={accent ? "mr-[0.25em] inline-block font-serif font-normal italic text-brand-300" : "mr-[0.25em] inline-block text-white"}
    >
      {children}
    </motion.span>
  );
}
