"use client";

import Link from "next/link";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowUpRight, Check, Plane } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { FlagBadge } from "@/components/ui/FlagBadge";
import { LogoMark } from "@/components/brand/Logo";
import { countries, type Country } from "@/data/countries";
import { heroBadges } from "@/data/site";
import { cn } from "@/lib/cn";
import { LandingPlane } from "./LandingPlane";
import { SplitFlap } from "./SplitFlap";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_CINE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Seconds; offsets clear the route curtain in app/template.tsx.
const T = {
  backdrop: 0.6,
  runway: 0.9,
  eyebrow: 1.0,
  headline: 1.15,
  copy: 2.0,
  ctas: 2.2,
  badges: 2.45,
  board: 1.4,
  stamp: 2.6,
  plane: 2.2,
  scroll: 3.0,
};

const headline = [
  { text: "Your Global Education.", leg: "01" },
  { text: "Your International Career.", leg: "02" },
  { text: "Your Future.", leg: "03", accent: true },
];

const ROWS = 6;
const NAME_LEN = 11;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const boardY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const id = setInterval(() => setOffset((o) => (o + 1) % countries.length), 3600);
    return () => clearInterval(id);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <section ref={ref} className="grain relative isolate flex min-h-[100svh] items-center overflow-hidden pb-20 pt-32 lg:pt-28">
        <Backdrop />

        <div className="container-x relative grid grid-cols-[minmax(0,1fr)] items-center gap-16 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-8">
          <motion.div style={{ y: textY, opacity: fade }} className="relative z-10 min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <motion.span
                initial={{ clipPath: "inset(0% 100% 0% 0% round 999px)", opacity: 0 }}
                animate={{ clipPath: "inset(0% 0% 0% 0% round 999px)", opacity: 1 }}
                transition={{ duration: 1, delay: T.eyebrow, ease: EASE_CINE }}
                className="inline-flex items-center gap-2 rounded-full border border-sun-400/25 bg-sun-400/[0.07] py-1 pl-1 pr-3 text-xs font-semibold tracking-[0.18em] text-sun-300"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sun-400 text-ink-950">
                  <Plane className="h-3.5 w-3.5 -rotate-45" />
                </span>
                NOW BOARDING
              </motion.span>
              <motion.span
                initial={{ opacity: 0, letterSpacing: "0.6em" }}
                animate={{ opacity: 1, letterSpacing: "0.2em" }}
                transition={{ duration: 1.4, delay: T.eyebrow + 0.35, ease: EASE_CINE }}
                className="hidden font-mono text-[0.7rem] uppercase text-white/45 sm:inline"
              >
                Study Abroad · Work Abroad · Immigration & PR
              </motion.span>
            </div>

            <ItineraryHeadline />

            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.1, delay: T.copy, ease: EASE }}
              className="relative mt-8 max-w-2xl space-y-3 border-l border-white/10 pl-5 text-base leading-relaxed text-white/70 sm:text-lg"
            >
              <motion.span
                aria-hidden
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.2, delay: T.copy + 0.2, ease: EASE_CINE }}
                className="absolute -left-px top-0 h-full w-px origin-top bg-gradient-to-b from-brand-400 via-sun-400 to-transparent"
              />
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
              <motion.div variants={ctaVariants} transition={{ duration: 0.9, ease: EASE_CINE }}>
                <ButtonLink href="/study-abroad" variant="sun">
                  Explore Study Abroad
                </ButtonLink>
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
              className="mt-10 grid max-w-xl grid-cols-1 gap-2 text-sm text-white/65 sm:grid-cols-2"
            >
              {heroBadges.map((b, i) => (
                <motion.li
                  key={b}
                  variants={{
                    hidden: { opacity: 0, x: -14 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
                  }}
                  className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.025] px-3 py-2"
                >
                  <motion.span
                    variants={{
                      hidden: { scale: 0, rotate: -90 },
                      show: { scale: 1, rotate: 0, transition: { type: "spring", stiffness: 260, damping: 16 } },
                    }}
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-brand-500/15 ring-1 ring-brand-400/40"
                  >
                    <Check className="h-3 w-3 text-brand-300" strokeWidth={3} />
                  </motion.span>
                  <span className="font-mono text-[0.62rem] text-white/30">{String(i + 1).padStart(2, "0")}</span>
                  {b}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div style={{ y: boardY }} className="relative min-w-0">
            <DepartureBoard offset={offset} />
          </motion.div>
        </div>

        <LandingPlane delay={T.plane} />

        <motion.div style={{ opacity: fade }} className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: T.scroll, ease: EASE }}
            className="flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-white/40"
          >
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-white/30" />
            Scroll for take-off
            <span className="relative flex h-8 w-px overflow-hidden bg-white/15">
              <motion.span
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeIn" }}
                className="absolute inset-x-0 top-0 h-1/2 bg-sun-300"
              />
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-white/30" />
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

function ItineraryHeadline() {
  return (
    <h1
      aria-label={headline.map((l) => l.text).join(" ")}
      className="mt-8 font-display text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.03em] text-white sm:text-6xl lg:text-[3.2rem] xl:text-[3.7rem]"
    >
      {headline.map((line, li) => {
        const delay = T.headline + li * 0.32;
        return (
          <span key={line.leg} aria-hidden="true" className="relative block">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay, ease: EASE }}
              className="absolute -left-7 top-[0.55em] hidden font-mono text-[0.7rem] font-medium tracking-[0.15em] text-brand-400/80 sm:block"
            >
              {line.leg}
            </motion.span>
            <span className="relative block w-fit max-w-full pb-[0.08em]">
              <motion.span
                initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                transition={{ duration: 1.1, delay, ease: [0.65, 0, 0.35, 1] }}
                className={cn(
                  "relative block",
                  line.accent && "text-gradient pr-3 font-serif font-normal italic tracking-normal",
                )}
              >
                {line.accent && (
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.9, delay: delay + 0.9, ease: EASE_CINE }}
                    className="absolute bottom-[0.02em] left-0 h-[3px] w-[85%] origin-left rounded-full bg-gradient-to-r from-brand-300 via-sun-400 to-transparent shadow-[0_0_12px_rgba(255,192,97,0.6)]"
                  />
                )}
                {line.text}
              </motion.span>
              <motion.span
                initial={{ left: "0%", opacity: 0 }}
                animate={{ left: "100%", opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1.1, delay, ease: [0.65, 0, 0.35, 1] }}
                className="absolute inset-y-[8%] w-[3px] rounded-full bg-brand-300 shadow-[0_0_18px_4px_rgba(56,189,248,0.7)]"
              />
            </span>
          </span>
        );
      })}
    </h1>
  );
}

function DepartureBoard({ offset }: { offset: number }) {
  const rows = Array.from({ length: ROWS }, (_, r) => {
    const i = (offset + r) % countries.length;
    return { r, i, country: countries[i] };
  });
  const boarding = rows[0].country;

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 120, damping: 18 });
  const sry = useSpring(ry, { stiffness: 120, damping: 18 });

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const b = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - b.left) / b.width - 0.5) * 8);
    rx.set(-((e.clientY - b.top) / b.height - 0.5) * 8);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 18, filter: "blur(14px)" }}
      animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.6, delay: T.board, ease: EASE_CINE }}
      style={{ perspective: 1400 }}
      className="relative mx-auto w-full max-w-[34rem]"
    >
      <Stamp />

      <motion.div
        onPointerMove={onMove}
        onPointerLeave={() => {
          rx.set(0);
          ry.set(0);
        }}
        style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-950/85 shadow-[0_40px_120px_-30px_rgba(0,163,230,0.45),0_0_0_1px_rgba(255,255,255,0.03)_inset] backdrop-blur-xl"
      >
        <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-sun-400/15 via-sun-400/5 to-transparent px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-sun-400 text-ink-950">
              <Plane className="h-4 w-4 -rotate-45" />
            </span>
            <div className="leading-none">
              <p className="font-display text-base font-bold tracking-[0.18em] text-white">DEPARTURES</p>
              <p className="mt-1 font-mono text-[0.6rem] tracking-[0.2em] text-white/40">FROM INDIA<span className="hidden sm:inline"> · 20 DESTINATIONS</span></p>
            </div>
          </div>
          <Clock />
        </div>

        <div className="grid grid-cols-[3.2rem_1fr_4.2rem] gap-2 border-b border-white/5 sm:gap-3 px-4 py-2 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-white/35 sm:grid-cols-[3.4rem_1fr_3.6rem_4.6rem] sm:px-5">
          <span>Time</span>
          <span>Destination</span>
          <span className="hidden sm:block">Flight</span>
          <span className="text-right">Status</span>
        </div>

        <ul>
          {rows.map(({ r, i, country }) => (
            <li key={r}>
              <Link
                href={`/study-abroad/${country.slug}`}
                className={cn(
                  "group grid grid-cols-[3.2rem_1fr_4.2rem] items-center gap-2 border-b sm:gap-3 border-white/[0.04] px-4 py-2.5 transition-colors hover:bg-white/[0.04] sm:grid-cols-[3.4rem_1fr_3.6rem_4.6rem] sm:px-5",
                  r === 0 && "bg-brand-500/[0.07]",
                )}
              >
                <SplitFlap text={departureTime(offset + r)} className="text-[0.7rem]" tileClass="w-[0.95em]! bg-ink-800!" />
                <span className="flex min-w-0 items-center gap-2">
                  <FlagBadge country={country} className="h-3.5 w-3.5 ring-1 ring-white/15" />
                  <SplitFlap text={boardName(country)} length={NAME_LEN} className="min-w-0 overflow-hidden text-[0.7rem]" tileClass="w-[1em]! bg-ink-800!" />
                </span>
                <span className="hidden font-mono text-[0.7rem] text-white/55 sm:block">GA{String(101 + i * 7).padStart(3, "0")}</span>
                <Status r={r} />
              </Link>
            </li>
          ))}
        </ul>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={boarding.slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <Link
              href={`/study-abroad/${boarding.slug}`}
              className="group flex items-center justify-between gap-4 px-4 py-3.5 sm:px-5"
            >
              <div className="min-w-0">
                <p className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-sun-300/80">Pathway · {boarding.name}</p>
                <p className="mt-1 truncate text-sm font-medium text-white/80">{boarding.focus.join(" · ")}</p>
              </div>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors group-hover:border-sun-400 group-hover:bg-sun-400 group-hover:text-ink-950">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </motion.div>
        </AnimatePresence>

        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.015)_50%)] bg-[length:100%_4px]" />
      </motion.div>

      <div aria-hidden className="absolute -bottom-6 left-1/2 h-12 w-3/4 -translate-x-1/2 rounded-full bg-brand-500/25 blur-3xl" />
    </motion.div>
  );
}

function boardName(c: Country) {
  return (c.name.length > NAME_LEN ? c.short : c.name).toUpperCase();
}

function departureTime(slot: number) {
  const mins = (6 * 60 + slot * 25) % (24 * 60);
  return `${String(Math.floor(mins / 60)).padStart(2, "0")}:${String(mins % 60).padStart(2, "0")}`;
}

function Status({ r }: { r: number }) {
  if (r === 0) {
    return (
      <span className="flex items-center justify-end gap-1.5 font-mono text-[0.62rem] font-semibold uppercase tracking-wider text-sun-300">
        <motion.span
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.1, repeat: Infinity }}
          className="h-1.5 w-1.5 rounded-full bg-sun-400 shadow-[0_0_8px_rgba(255,192,97,0.9)]"
        />
        Boarding
      </span>
    );
  }
  return (
    <span
      className={cn(
        "text-right font-mono text-[0.62rem] uppercase tracking-wider",
        r === 1 ? "text-brand-300" : "text-white/40",
      )}
    >
      {r === 1 ? "Gate open" : "On time"}
    </span>
  );
}

function Clock() {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "Asia/Kolkata",
    });
    const tick = () => setNow(fmt.format(new Date()));
    const first = window.setTimeout(tick, 0);
    const id = window.setInterval(tick, 1000);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(id);
    };
  }, []);

  return (
    <div className="text-right leading-none">
      <p className="font-mono text-sm tabular-nums text-sun-300">{now ?? "--:--:--"}</p>
      <p className="mt-1 font-mono text-[0.55rem] tracking-[0.2em] text-white/35">IST</p>
    </div>
  );
}

function Stamp() {
  const text = "STUDY ABROAD • WORK ABROAD • IMMIGRATION & PR • ";
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, scale: 1.8, rotate: -40 }}
      animate={{ opacity: 1, scale: 1, rotate: -12 }}
      transition={{ type: "spring", stiffness: 160, damping: 13, delay: T.stamp }}
      className="absolute -left-24 -top-24 z-20 hidden h-28 w-28 lg:block"
    >
      <motion.svg
        viewBox="0 0 120 120"
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <path id="hero-stamp-ring" d="M60 60 m-46 0 a46 46 0 1 1 92 0 a46 46 0 1 1 -92 0" />
        </defs>
        <text className="fill-sun-300 font-mono" style={{ fontSize: 7.4, letterSpacing: 1.4 }}>
          <textPath href="#hero-stamp-ring">{text}</textPath>
        </text>
      </motion.svg>
      <div className="absolute inset-[22%] flex items-center justify-center rounded-full border border-dashed border-sun-400/50 bg-ink-950/80 shadow-[0_0_30px_rgba(255,192,97,0.25)] backdrop-blur">
        <LogoMark className="h-8 w-8 text-sun-400" />
      </div>
    </motion.div>
  );
}

function Backdrop() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.4, delay: T.backdrop, ease: EASE_CINE }}
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 50% 100%, rgba(255,166,43,0.20), rgba(0,163,230,0.10) 45%, transparent 75%), radial-gradient(ellipse 40% 35% at 85% 10%, rgba(0,163,230,0.14), transparent 70%)",
        }}
      />

      <Runway />
      <FlightPaths />

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 2, delay: T.runway, ease: EASE_CINE }}
        className="absolute inset-x-0 bottom-[42%] h-px bg-gradient-to-r from-transparent via-sun-300/40 to-transparent"
      />
    </div>
  );
}

function Runway() {
  const scroll = { duration: 2.2, repeat: Infinity, ease: "linear" as const };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: T.runway, ease: EASE_CINE }}
      className="absolute inset-x-0 bottom-0 h-[42%] overflow-hidden"
      style={{ perspective: 520, maskImage: "linear-gradient(to top, black 20%, transparent 95%)" }}
    >
      <div
        className="absolute bottom-0 left-1/2 h-[300%] w-[180%]"
        style={{ transform: "translateX(-50%) rotateX(76deg)", transformOrigin: "50% 100%" }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(51,194,255,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(51,194,255,0.16) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
          animate={{ backgroundPosition: ["0px 0px", "0px 80px"] }}
          transition={scroll}
        />
        <motion.div
          className="absolute inset-y-0 left-1/2 w-[6px] -translate-x-1/2"
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(255,216,146,0.95) 0 45%, transparent 45% 100%)",
            backgroundSize: "6px 80px",
          }}
          animate={{ backgroundPosition: ["0px 0px", "0px 80px"] }}
          transition={scroll}
        />
        {["41%", "59%"].map((left) => (
          <motion.div
            key={left}
            className="absolute inset-y-0 w-[8px] -translate-x-1/2"
            style={{
              left,
              backgroundImage: "radial-gradient(circle, rgba(127,219,255,0.95) 0 2.5px, transparent 3.5px)",
              backgroundSize: "8px 40px",
            }}
            animate={{ backgroundPosition: ["0px 0px", "0px 40px"] }}
            transition={scroll}
          />
        ))}
      </div>
    </motion.div>
  );
}

const paths = [
  { id: "hero-route-a", d: "M -60 700 C 280 640, 560 160, 1500 110", dur: "11s", delay: 0 },
  { id: "hero-route-b", d: "M -60 360 C 420 250, 960 560, 1500 330", dur: "15s", delay: 0.3 },
];

function FlightPaths() {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id="hero-trail" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#ffd892" stopOpacity="0" />
          <stop offset="100%" stopColor="#ffd892" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      {paths.map((p) => (
        <g key={p.id}>
          <motion.path
            id={p.id}
            d={p.d}
            fill="none"
            stroke="rgba(255,255,255,0.10)"
            strokeWidth="1.2"
            strokeDasharray="2 8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.4, delay: T.runway + p.delay, ease: EASE_CINE }}
          />
          {!reduce && (
            <g opacity="0">
              <line x1="-60" y1="0" x2="0" y2="0" stroke="url(#hero-trail)" strokeWidth="2" strokeLinecap="round" />
              <circle r="3.5" fill="#ffd892" style={{ filter: "drop-shadow(0 0 6px rgba(255,192,97,0.9))" }} />
              <set attributeName="opacity" to="1" begin={`${T.runway + 1.5 + p.delay}s`} />
              <animateMotion dur={p.dur} begin={`${T.runway + 1.5 + p.delay}s`} repeatCount="indefinite" rotate="auto">
                <mpath href={`#${p.id}`} />
              </animateMotion>
            </g>
          )}
        </g>
      ))}
    </svg>
  );
}
