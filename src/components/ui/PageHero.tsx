"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronRight } from "lucide-react";
import { useRef, type ReactNode } from "react";
import { LogoMark } from "@/components/brand/Logo";
import { SplitText } from "./SplitText";

export function PageHero({
  eyebrow,
  title,
  accent,
  description,
  crumbs = [],
  children,
  aside,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: ReactNode;
  crumbs?: { label: string; href?: string }[];
  children?: ReactNode;
  aside?: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="grain relative isolate overflow-hidden pb-20 pt-36 sm:pb-24 sm:pt-44">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-lines mask-fade-b opacity-70" />
        <div className="absolute -left-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-brand-500/25 blur-[130px]" />
        <div className="absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-sun-500/10 blur-[140px]" />
        <motion.div style={{ rotate, y }} className="absolute -right-24 top-16 h-[26rem] w-[26rem] text-white/[0.035] sm:h-[34rem] sm:w-[34rem]">
          <LogoMark className="h-full w-full" />
        </motion.div>
      </div>

      <div className="container-x">
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mb-8"
        >
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/45">
            <li>
              <Link href="/" className="hover:text-white">Home</Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5" />
                {c.href ? (
                  <Link href={c.href} className="hover:text-white">{c.label}</Link>
                ) : (
                  <span aria-current="page" className="text-white/80">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </motion.nav>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className={aside ? "lg:col-span-7" : "lg:col-span-10"}>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-300"
            >
              {eyebrow}
            </motion.p>
            <SplitText
              delay={0.55}
              className="mt-5 font-display text-[2.6rem] font-semibold leading-[1] tracking-[-0.03em] text-white text-balance sm:text-6xl lg:text-7xl"
              segments={[{ text: title }, ...(accent ? [{ text: accent, className: "font-serif font-normal italic tracking-normal text-gradient pr-2" }] : [])]}
            />
            {description && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                className="mt-7 max-w-2xl text-lg leading-relaxed text-white/65"
              >
                {description}
              </motion.div>
            )}
            {children && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.15 }} className="mt-9">
                {children}
              </motion.div>
            )}
          </div>
          {aside && (
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              {aside}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
