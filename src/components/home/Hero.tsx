"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { AnimatePresence, MotionConfig, motion, useScroll, useTransform } from "motion/react";
import { Plane } from "lucide-react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { FlagBadge } from "@/components/ui/FlagBadge";
import { LogoMark } from "@/components/brand/Logo";
import { countries } from "@/data/countries";
import { heroBadges } from "@/data/site";
import { cn } from "@/lib/cn";
import { SplitFlap } from "./SplitFlap";

const Globe = dynamic(() => import("./Globe").then((m) => m.Globe), { ssr: false });

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_CINE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Seconds; offsets clear the route curtain in app/template.tsx.
const T = {
  backdrop: 0.6,
  sweep: 0.9,
  globe: 0.8,
  eyebrow: 1.0,
  headline: 1.15,
  underline: 2.25,
  copy: 2.0,
  ctas: 2.2,
  badges: 2.45,
  pass: 2.35,
  orbit: 2.6,
  scroll: 3.0,
};

const headline = [
  { text: "Your Global Education." },
  { text: "Your International Career." },
  { text: "Your Future.", accent: true },
];

const stars = Array.from({ length: 42 }, (_, i) => ({
  left: (i * 61.8034) % 100,
  top: (i * 38.1966 + (i % 7) * 11) % 100,
  size: i % 9 === 0 ? 2.5 : i % 3 === 0 ? 1.5 : 1,
  duration: 2.6 + (i % 5) * 0.7,
  delay: T.backdrop + (i % 11) * 0.23,
}));

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const globeY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const globeScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const globeRotate = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-24%"]);
  const textBlur = useTransform(scrollYProgress, [0, 0.6], ["blur(0px)", "blur(6px)"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % countries.length), 3800);
    return () => clearInterval(id);
  }, []);

  const country = countries[index];

  return (
    <MotionConfig reducedMotion="user">
      <section ref={ref} className="grain relative isolate flex min-h-[100svh] items-center overflow-hidden pb-16 pt-32 lg:pt-28">
        <Backdrop />

        <div className="container-x relative">
          <motion.div style={{ y: textY, opacity: fade, filter: textBlur }} className="relative z-10 max-w-[54rem]">
            <div className="flex flex-wrap items-center gap-3">
              <motion.span
                initial={{ clipPath: "inset(0% 100% 0% 0% round 999px)", opacity: 0 }}
                animate={{ clipPath: "inset(0% 0% 0% 0% round 999px)", opacity: 1 }}
                transition={{ duration: 1, delay: T.eyebrow, ease: EASE_CINE }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1 pl-1 pr-3 text-xs font-semibold tracking-[0.18em] text-white/80"
              >
                <motion.span
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 180, damping: 14, delay: T.eyebrow + 0.1 }}
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 shadow-[0_0_18px_rgba(0,163,230,0.7)]"
                >
                  <LogoMark className="h-3.5 w-3.5 text-white" />
                </motion.span>
                GOABROAD SERVICES
              </motion.span>
              <motion.span
                initial={{ opacity: 0, letterSpacing: "0.6em" }}
                animate={{ opacity: 1, letterSpacing: "0.2em" }}
                transition={{ duration: 1.4, delay: T.eyebrow + 0.35, ease: EASE_CINE }}
                className="hidden text-xs font-medium uppercase text-white/45 sm:inline"
              >
                Study Abroad · Work Abroad · Immigration & PR
              </motion.span>
            </div>

            <CinematicHeadline />

            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.1, delay: T.copy, ease: EASE }}
              className="mt-7 max-w-2xl space-y-3 text-base leading-relaxed text-white/70 sm:text-lg"
            >
              <p className="text-white/85">
                Plan your journey to international education, overseas employment and long-term settlement with personalised guidance from GoAbroad Services.
              </p>
              <p className="hidden text-[0.95rem] text-white/50 sm:block">
                From selecting the right country and university to admission applications, visa documentation, education loan assistance, English test preparation and post-arrival guidance, we support you throughout your international journey.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: T.ctas } } }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <motion.div variants={ctaVariants} transition={{ duration: 0.9, ease: EASE_CINE }} className="relative">
                <ButtonLink href="/study-abroad">Explore Study Abroad</ButtonLink>
                <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                  <motion.span
                    initial={{ x: "-150%" }}
                    animate={{ x: "350%" }}
                    transition={{ duration: 1.1, delay: T.ctas + 0.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 4.5 }}
                    className="absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/45 to-transparent"
                  />
                </span>
              </motion.div>
              <motion.div variants={ctaVariants} transition={{ duration: 0.9, ease: EASE_CINE }}>
                <ButtonLink href="/work-abroad" variant="ghost">
                  Explore Work Abroad
                </ButtonLink>
              </motion.div>
            </motion.div>

            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: T.badges } } }}
              className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/55"
            >
              {heroBadges.map((b) => (
                <motion.li
                  key={b}
                  variants={{
                    hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
                    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: EASE } },
                  }}
                  className="flex items-center gap-2"
                >
                  <motion.span
                    variants={{
                      hidden: { scale: 0 },
                      show: { scale: [0, 1.8, 1], transition: { duration: 0.6, ease: EASE } },
                    }}
                    className="h-1.5 w-1.5 rounded-full bg-sun-400 shadow-[0_0_8px_rgba(255,192,97,0.9)]"
                  />
                  {b}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            style={{ y: globeY, scale: globeScale, rotate: globeRotate }}
            className="relative mt-14 lg:absolute lg:-right-48 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2 xl:-right-28"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.55, rotate: -25, filter: "blur(24px)" }}
              animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
              transition={{ duration: 2.2, delay: T.globe, ease: EASE_CINE }}
              className="relative mx-auto aspect-square w-full max-w-[32rem] lg:w-[38rem] lg:max-w-none xl:w-[44rem]"
            >
              <div aria-hidden className="absolute inset-[6%] rounded-full border border-white/5" />
              <div aria-hidden className="absolute inset-[-2%] rounded-full border border-dashed border-brand-400/15 animate-spin-slow" />
              <motion.div
                aria-hidden
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: [0, 1, 0.7], scale: [0.6, 1.05, 1] }}
                transition={{ duration: 2.4, delay: T.globe + 0.2, ease: EASE_CINE }}
                className="absolute inset-[12%] rounded-full bg-brand-500/15 blur-3xl"
              />
              <Globe focus={country.coords} />

              <motion.div
                key={`pulse-${index}`}
                aria-hidden
                initial={{ opacity: 0, scale: 0.86 }}
                animate={{ opacity: [0, 0.75, 0], scale: [0.86, 1, 1.22] }}
                transition={{ duration: 1.9, delay: index === 0 ? T.globe + 1.4 : 0, ease: "easeOut" }}
                className="pointer-events-none absolute inset-[9%] rounded-full border border-brand-300/50 shadow-[0_0_40px_rgba(56,189,248,0.35)]"
              />

              <motion.div
                aria-hidden
                initial={{ opacity: 0, rotate: -40 }}
                animate={{ opacity: 1, rotate: 320 }}
                transition={{
                  opacity: { duration: 1, delay: T.orbit },
                  rotate: { duration: 30, delay: T.orbit, repeat: Infinity, ease: "linear" },
                }}
                className="pointer-events-none absolute inset-[-2%]"
              >
                <span className="absolute left-1/2 top-0 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink-900/80 shadow-[0_0_22px_rgba(56,189,248,0.65)] ring-1 ring-brand-400/40">
                  <Plane className="h-3.5 w-3.5 rotate-45 text-brand-300" />
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -90, y: 70, rotate: -16, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.3, delay: T.pass, ease: EASE_CINE }}
                style={{ perspective: 1200 }}
                className="absolute bottom-[4%] left-0 w-[17.5rem] sm:w-[19rem] lg:bottom-[10%] lg:left-[8%] xl:left-[14%]"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={country.slug}
                    initial={{ opacity: 0, rotateY: -95, rotate: -6, scale: 0.92 }}
                    animate={{ opacity: 1, rotateY: 0, rotate: -2, scale: 1 }}
                    exit={{ opacity: 0, rotateY: 95, rotate: 2, scale: 0.92 }}
                    transition={{ duration: 0.55, ease: EASE }}
                  >
                    <BoardingPass index={index} />
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div style={{ opacity: fade }} className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: T.scroll, ease: EASE }}
            className="flex flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-white/40"
          >
            <span className="relative flex h-8 w-5 justify-center rounded-full border border-white/25">
              <motion.span
                animate={{ y: [4, 14], opacity: [1, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeIn" }}
                className="absolute top-0 h-1.5 w-1 rounded-full bg-white/70"
              />
            </span>
            Scroll
          </motion.div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}

const ctaVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.9, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
};

function CinematicHeadline() {
  let i = 0;
  return (
    <h1
      aria-label={headline.map((l) => l.text).join(" ")}
      className="mt-7 font-display text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl lg:text-[3.7rem] xl:text-[4.2rem]"
    >
      {headline.map((line, li) => {
        const words = line.text.split(" ").map((word) => {
          const delay = T.headline + i++ * 0.09;
          return (
            <span
              key={word}
              aria-hidden="true"
              style={{ perspective: 900 }}
              className="inline-block overflow-hidden pb-[0.12em] align-bottom -mb-[0.12em]"
            >
              <motion.span
                className={cn(
                  "inline-block origin-bottom will-change-transform",
                  line.accent && "text-gradient pr-2 font-serif font-normal italic tracking-normal",
                )}
                style={line.accent ? { backgroundSize: "200% 100%" } : undefined}
                initial={{ y: "105%", rotateX: -80, opacity: 0, filter: "blur(12px)" }}
                animate={{
                  y: "0%",
                  rotateX: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  ...(line.accent && { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }),
                }}
                transition={{
                  duration: 1.1,
                  delay,
                  ease: EASE_CINE,
                  backgroundPosition: { duration: 6, delay: delay + 1.2, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                {word}
              </motion.span>
              {"\u00A0"}
            </span>
          );
        });

        return (
          <Fragment key={li}>
            {li > 0 && <br aria-hidden="true" className="hidden lg:block" />}
            {line.accent ? (
              <span className="relative inline-block">
                {words}
                <svg
                  aria-hidden
                  viewBox="0 0 300 20"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute -bottom-1 left-0 h-3 w-[88%] overflow-visible"
                >
                  <defs>
                    <linearGradient id="hero-underline" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="#7dd3fc" />
                      <stop offset="55%" stopColor="#00a3e6" />
                      <stop offset="100%" stopColor="#ffc061" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M3 14 C 70 4, 160 3, 297 9"
                    fill="none"
                    stroke="url(#hero-underline)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: T.underline, ease: EASE_CINE }}
                    style={{ filter: "drop-shadow(0 0 6px rgba(56,189,248,0.7))" }}
                  />
                </svg>
              </span>
            ) : (
              words
            )}
          </Fragment>
        );
      })}
    </h1>
  );
}

function Backdrop() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 2.4, delay: T.backdrop, ease: EASE_CINE }}
        className="absolute inset-0 grid-lines mask-fade-b"
      />
      <Aurora position="-left-40 -top-40 h-[42rem] w-[42rem]" color="bg-brand-500/25 blur-[140px]" drift={[70, 50]} duration={16} delay={T.backdrop} />
      <Aurora position="-bottom-60 right-[-10rem] h-[38rem] w-[38rem]" color="bg-sun-500/15 blur-[150px]" drift={[-60, -40]} duration={19} delay={T.backdrop + 0.4} />
      <Aurora position="left-1/2 top-1/3 h-[20rem] w-[20rem]" color="bg-brand-400/10 blur-[120px]" drift={[-40, 60]} duration={13} delay={T.backdrop + 0.2} />

      {stars.map((s, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white"
          style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.7, 0.15, 0.7] }}
          transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        />
      ))}

      <motion.div
        initial={{ x: "-120%", opacity: 0 }}
        animate={{ x: "420%", opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2.4, delay: T.sweep, ease: [0.65, 0, 0.35, 1] }}
        className="absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-brand-300/[0.08] to-transparent"
      />
    </div>
  );
}

function Aurora({
  position,
  color,
  drift,
  duration,
  delay,
}: {
  position: string;
  color: string;
  drift: [number, number];
  duration: number;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2.6, delay, ease: EASE_CINE }}
      className={cn("absolute", position)}
    >
      <motion.div
        animate={{ x: [0, drift[0], 0], y: [0, drift[1], 0], scale: [1, 1.12, 1] }}
        transition={{ duration, delay: delay + 2, repeat: Infinity, ease: "easeInOut" }}
        className={cn("h-full w-full rounded-full will-change-transform", color)}
      />
    </motion.div>
  );
}

function BoardingPass({ index }: { index: number }) {
  const c = countries[index];
  return (
    <Link
      href={`/study-abroad/${c.slug}`}
      className="ticket-notch block overflow-hidden rounded-2xl bg-white text-ink-900 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] transition-transform hover:-translate-y-1"
      style={{ ["--notch-y" as string]: "64%" }}
    >
      <div className="flex items-center justify-between bg-ink-900 px-4 py-2.5 text-white">
        <span className="flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.2em]">
          <LogoMark className="h-3.5 w-3.5 text-brand-400" /> Boarding pass
        </span>
        <span className="font-mono text-[0.62rem] text-white/50">
          {String(index + 1).padStart(2, "0")}/{countries.length}
        </span>
      </div>
      <div className="px-4 pb-3 pt-3.5">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ink-500/70">From</p>
            <p className="font-display text-2xl font-bold leading-none">IND</p>
          </div>
          <div className="relative mx-2 mb-1.5 flex-1 border-t border-dashed border-ink-900/25">
            <motion.span
              initial={{ left: "0%", opacity: 0 }}
              animate={{ left: "50%", opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.15, ease: EASE_CINE }}
              className="absolute -top-2 -translate-x-1/2"
            >
              <Plane className="h-4 w-4 rotate-45 text-brand-500" />
            </motion.span>
          </div>
          <div className="text-right">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ink-500/70">To</p>
            <SplitFlap text={c.code} className="text-xl" tileClass="text-base" />
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <FlagBadge country={c} className="h-4 w-4 ring-1 ring-ink-900/10" />
          <p className="truncate text-sm font-semibold">{c.name}</p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-dashed border-ink-900/15 px-4 py-3">
        <div className="min-w-0">
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ink-500/70">Pathway</p>
          <p className="truncate text-xs font-medium text-ink-700">{c.focus.slice(0, 2).join(" · ")}</p>
        </div>
        <div aria-hidden className="flex h-8 shrink-0 items-end gap-[2px]">
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.span
              key={i}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.4, delay: 0.25 + i * 0.025, ease: EASE }}
              className="w-[2px] origin-bottom bg-ink-900"
              style={{ height: `${40 + ((i * 37 + index * 11) % 60)}%` }}
            />
          ))}
        </div>
      </div>
    </Link>
  );
}
