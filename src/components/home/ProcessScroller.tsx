"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { admissionSteps } from "@/data/process";

export function ProcessScroller() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.4 });
  const x = useTransform(smooth, [0, 1], [0, -distance]);
  const bar = useTransform(smooth, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (track) setDistance(Math.max(0, track.scrollWidth - window.innerWidth + 80));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <>
      <section ref={sectionRef} aria-label="Admission flowchart" className="relative hidden lg:block" style={{ height: `${admissionSteps.length * 32}vh` }}>
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div aria-hidden className="absolute inset-0 grid-lines opacity-50" />
          <div className="container-x relative flex items-end justify-between gap-10">
            <SectionHeading
              eyebrow="Our admission flowchart"
              title="From counselling"
              accent="to departure."
              description="Eleven clear steps, so students and parents understand exactly how GoAbroad Services supports them."
            />
            <div className="shrink-0 pb-2">
              <ButtonLink href="/admission-process" variant="ghost">
                Full process
              </ButtonLink>
            </div>
          </div>

          <motion.div ref={trackRef} style={{ x }} className="relative mt-14 flex gap-5 pl-[max(2.5rem,calc((100vw-82rem)/2+2.5rem))]">
            {admissionSteps.map((s, i) => (
              <StepCard key={s.title} i={i} title={s.title} short={s.short} />
            ))}
            <div className="flex w-[22rem] shrink-0 flex-col justify-center rounded-3xl border border-dashed border-brand-400/40 p-8">
              <p className="font-serif text-4xl italic text-white">Bon voyage.</p>
              <p className="mt-3 text-white/60">Ongoing guidance continues after you arrive.</p>
            </div>
          </motion.div>

          <div className="container-x relative mt-12">
            <div className="h-px w-full bg-white/10">
              <motion.div style={{ width: bar }} className="h-px bg-gradient-to-r from-brand-400 to-sun-400" />
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Admission flowchart" className="py-24 lg:hidden">
        <div className="container-x">
          <SectionHeading eyebrow="Our admission flowchart" title="From counselling" accent="to departure." description="Eleven clear steps, so students and parents understand exactly how GoAbroad Services supports them." />
        </div>
        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 [scrollbar-width:none]" data-lenis-prevent>
          {admissionSteps.map((s, i) => (
            <div key={s.title} className="snap-start">
              <StepCard i={i} title={s.title} short={s.short} />
            </div>
          ))}
        </div>
        <div className="container-x mt-6">
          <ButtonLink href="/admission-process" variant="ghost">
            See the full process
          </ButtonLink>
        </div>
      </section>
    </>
  );
}

function StepCard({ i, title, short }: { i: number; title: string; short: string }) {
  return (
    <article className="group relative flex h-[22rem] w-[78vw] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-ink-800 to-ink-900 p-7 transition-colors duration-500 hover:border-brand-400/50 sm:w-[22rem] lg:h-[24rem]">
      <span aria-hidden className="absolute -right-4 -top-10 font-display text-[10rem] font-bold leading-none text-white/[0.04] transition-colors duration-500 group-hover:text-brand-500/15">
        {String(i + 1).padStart(2, "0")}
      </span>
      <div className="relative flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-500 font-mono text-sm font-semibold text-white shadow-[0_0_30px_-4px_rgba(0,163,230,0.8)]">
          {i + 1}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-brand-400/60 to-transparent" />
      </div>
      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sun-300">Step {i + 1}</p>
        <h3 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-tight text-white">{title}</h3>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-white/60">{short}</p>
      </div>
    </article>
  );
}
