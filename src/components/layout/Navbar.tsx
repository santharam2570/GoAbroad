"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { FlagBadge } from "@/components/ui/FlagBadge";
import { countries, regions } from "@/data/countries";
import { primaryNav, secondaryNav, site } from "@/data/site";
import { cn } from "@/lib/cn";

type MenuKey = "study" | "company" | null;

const simpleLinks = [
  { label: "Work Abroad", href: "/work-abroad" },
  { label: "Immigration & PR", href: "/immigration-pr" },
  { label: "Test Prep", href: "/english-test-preparation" },
  { label: "Education Loan", href: "/education-loan" },
];

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > prev && y > 320 && !menu);
  });

  const [prevPath, setPrevPath] = useState(pathname);
  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setMenu(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const openMenu = (key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenu(key);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setMenu(null), 140);
  };

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: hidden ? -110 : 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5"
        onMouseLeave={scheduleClose}
      >
        <nav
          aria-label="Primary"
          className={cn(
            "mx-auto flex max-w-[86rem] items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5",
            scrolled || menu ? "glass shadow-[0_20px_60px_-25px_rgba(0,0,0,0.8)]" : "border border-transparent",
          )}
        >
          <Link href="/" aria-label="GoAbroad Services home" className="rounded-lg">
            <Logo />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            <li onMouseEnter={() => openMenu("study")}>
              <button
                type="button"
                aria-expanded={menu === "study"}
                aria-haspopup="true"
                onClick={() => setMenu(menu === "study" ? null : "study")}
                className={cn(
                  "flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  isActive("/study-abroad") ? "text-white" : "text-white/70 hover:text-white",
                )}
              >
                Study Abroad
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", menu === "study" && "rotate-180")} />
              </button>
            </li>
            {simpleLinks.map((l) => (
              <li key={l.href} onMouseEnter={() => openMenu(null)}>
                <Link
                  href={l.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    isActive(l.href) ? "text-white" : "text-white/70 hover:text-white",
                  )}
                >
                  {isActive(l.href) && (
                    <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-white/10" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                  )}
                  {l.label}
                </Link>
              </li>
            ))}
            <li onMouseEnter={() => openMenu("company")}>
              <button
                type="button"
                aria-expanded={menu === "company"}
                aria-haspopup="true"
                onClick={() => setMenu(menu === "company" ? null : "company")}
                className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                More
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", menu === "company" && "rotate-180")} />
              </button>
            </li>
          </ul>

          <div className="flex items-center gap-2">
            <a href={site.phoneHref} className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/80 transition-colors hover:border-brand-400 hover:text-white xl:flex" aria-label={`Call ${site.phone}`}>
              <Phone className="h-4 w-4" />
            </a>
            <Link
              href="/contact"
              className="hidden rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(0,163,230,0.9)] transition-colors hover:bg-brand-400 sm:inline-flex"
            >
              Book Counselling
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {menu && (
            <motion.div
              key={menu}
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => openMenu(menu)}
              className="mx-auto mt-2 hidden max-w-[86rem] lg:block"
            >
              <div className="glass overflow-hidden rounded-3xl p-6 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]">
                {menu === "study" ? <StudyMega /> : <CompanyMenu />}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>{mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}</AnimatePresence>
    </>
  );
}

function StudyMega() {
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-3 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-brand-600/40 via-ink-800 to-ink-900 p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">Study Abroad</p>
          <p className="mt-3 font-display text-2xl font-semibold leading-tight text-white">20 country guides</p>
          <p className="mt-2 text-sm leading-relaxed text-white/60">{primaryNav[1].description}</p>
        </div>
        <div className="mt-6 space-y-2 text-sm">
          <Link href="/study-abroad" className="flex items-center gap-2 font-semibold text-white hover:text-brand-300">
            All destinations <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/admission-process" className="flex items-center gap-2 text-white/70 hover:text-white">
            Admission process <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="col-span-9 grid grid-cols-4 gap-6">
        {regions.map((region) => (
          <div key={region}>
            <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/40">{region}</p>
            <ul className="space-y-0.5">
              {countries
                .filter((c) => c.region === region)
                .map((c) => (
                  <li key={c.slug}>
                    <Link href={`/study-abroad/${c.slug}`} className="group flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm text-white/75 transition-colors hover:bg-white/5 hover:text-white">
                      <FlagBadge country={c} className="h-4 w-4 ring-1" />
                      <span>{c.name}</span>
                      <ArrowRight className="ml-auto h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function CompanyMenu() {
  const items = [...primaryNav.slice(2), ...secondaryNav];
  return (
    <div className="grid grid-cols-4 gap-2">
      {items.map((l) => (
        <Link key={l.href} href={l.href} className="group rounded-2xl p-4 transition-colors hover:bg-white/5">
          <p className="flex items-center gap-2 font-display text-base font-semibold text-white">
            {l.label}
            <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
          </p>
          <p className="mt-1 text-sm leading-snug text-white/55">{l.description}</p>
        </Link>
      ))}
    </div>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [studyOpen, setStudyOpen] = useState(false);
  const links = [primaryNav[0], ...primaryNav.slice(2), ...secondaryNav];
  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      initial={{ clipPath: "circle(0% at 95% 4%)" }}
      animate={{ clipPath: "circle(150% at 95% 4%)" }}
      exit={{ clipPath: "circle(0% at 95% 4%)" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[60] overflow-y-auto bg-ink-950 lg:hidden"
      data-lenis-prevent
    >
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
      <div className="relative flex items-center justify-between px-5 py-5">
        <Logo />
        <button type="button" onClick={onClose} aria-label="Close menu" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white">
          <X className="h-5 w-5" />
        </button>
      </div>
      <nav aria-label="Mobile" className="relative px-5 pb-12">
        <motion.ul initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.045, delayChildren: 0.2 } } }}>
          <motion.li variants={mItem} className="border-b border-white/10">
            <button type="button" onClick={() => setStudyOpen(!studyOpen)} aria-expanded={studyOpen} className="flex w-full items-center justify-between py-4 font-display text-3xl font-semibold text-white">
              Study Abroad
              <ChevronDown className={cn("h-6 w-6 transition-transform", studyOpen && "rotate-180")} />
            </button>
            <AnimatePresence initial={false}>
              {studyOpen && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                  <Link href="/study-abroad" className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-brand-300">
                    All 20 destinations <ArrowRight className="h-4 w-4" />
                  </Link>
                  <ul className="grid grid-cols-2 gap-1 pb-4">
                    {countries.map((c) => (
                      <li key={c.slug}>
                        <Link href={`/study-abroad/${c.slug}`} className="flex items-center gap-2 rounded-lg py-2 text-sm text-white/75">
                          <FlagBadge country={c} className="h-4 w-4 ring-1" />
                          {c.short}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
          {links.map((l) => (
            <motion.li key={l.href} variants={mItem} className="border-b border-white/10">
              <Link href={l.href} className="block py-4 font-display text-3xl font-semibold text-white">
                {l.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
        <div className="mt-8 flex flex-col gap-3">
          <Link href="/contact" className="rounded-full bg-brand-500 px-6 py-4 text-center font-semibold text-white">
            Book Counselling
          </Link>
          <a href={site.phoneHref} className="rounded-full border border-white/15 px-6 py-4 text-center font-semibold text-white">
            Call {site.phone}
          </a>
        </div>
      </nav>
    </motion.div>
  );
}

const mItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};
