"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { FlagBadge } from "@/components/ui/FlagBadge";
import { countries, regions, type Country, type Region } from "@/data/countries";
import { cn } from "@/lib/cn";

const fields = ["Engineering", "Business", "Technology", "Research", "Health", "Hospitality", "Design", "Finance", "IT"];

export function DestinationGrid({ withFilters = true, limit }: { withFilters?: boolean; limit?: number }) {
  const [region, setRegion] = useState<Region | "All">("All");
  const [field, setField] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return countries.filter((c) => {
      if (region !== "All" && c.region !== region) return false;
      const hay = `${c.name} ${c.short} ${c.focus.join(" ")} ${c.overview}`.toLowerCase();
      if (field && !new RegExp(`\\b${field.toLowerCase()}`).test(hay)) return false;
      if (q && !hay.includes(q)) return false;
      return true;
    });
  }, [region, field, query]);

  const list = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div>
      {withFilters && (
        <div className="mb-10 space-y-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div role="tablist" aria-label="Filter by region" className="flex flex-wrap gap-2">
              {(["All", ...regions] as const).map((r) => (
                <button
                  key={r}
                  role="tab"
                  aria-selected={region === r}
                  onClick={() => setRegion(r)}
                  className={cn(
                    "relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                    region === r ? "text-white" : "text-ink-700 hover:text-ink-900",
                  )}
                >
                  {region === r && <motion.span layoutId="region-pill" className="absolute inset-0 -z-0 rounded-full bg-ink-900" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
                  <span className="relative">{r}</span>
                </button>
              ))}
            </div>
            <label className="relative block w-full lg:w-80">
              <span className="sr-only">Search destinations or courses</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search country or course…"
                className="w-full rounded-full border border-ink-900/10 bg-white py-3 pl-11 pr-4 text-sm text-ink-900 placeholder:text-ink-500/60 focus:border-brand-500 focus:outline-none"
              />
            </label>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">Course area</span>
            {fields.map((f) => (
              <button
                key={f}
                onClick={() => setField(field === f ? null : f)}
                aria-pressed={field === f}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all",
                  field === f ? "border-brand-500 bg-brand-500 text-white" : "border-ink-900/10 bg-white text-ink-700 hover:border-brand-500/50",
                )}
              >
                {f}
              </button>
            ))}
            {(field || query || region !== "All") && (
              <button
                onClick={() => {
                  setField(null);
                  setQuery("");
                  setRegion("All");
                }}
                className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold text-ink-600 hover:text-ink-900"
              >
                <X className="h-3 w-3" /> Clear
              </button>
            )}
          </div>
          <p className="text-sm text-ink-500" aria-live="polite">
            Showing {list.length} of {countries.length} destinations
          </p>
        </div>
      )}

      <motion.ul layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {list.map((c, i) => (
            <motion.li
              key={c.slug}
              layout
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: Math.min(i, 12) * 0.03, ease: [0.22, 1, 0.36, 1] }}
            >
              <DestinationCard country={c} index={countries.indexOf(c)} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
      {list.length === 0 && (
        <p className="rounded-3xl border border-dashed border-ink-900/15 p-10 text-center text-ink-600">
          No destinations match those filters. Try another course area, or{" "}
          <Link href="/contact" className="font-semibold text-brand-600 underline">ask a counsellor</Link>.
        </p>
      )}
    </div>
  );
}

function DestinationCard({ country: c, index }: { country: Country; index: number }) {
  return (
    <Link
      href={`/study-abroad/${c.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink-900/10 bg-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-500/40 hover:shadow-[0_30px_60px_-30px_rgba(0,132,189,0.55)]"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
        style={{ background: `linear-gradient(90deg, ${c.flag.colors.join(",")})` }}
      />
      <div className="flex items-center justify-between">
        <FlagBadge country={c} className="h-10 w-10 ring-ink-900/5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
        <span className="font-mono text-xs text-ink-500/60">{String(index + 1).padStart(2, "0")} · {c.code}</span>
      </div>
      <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-ink-900">{c.name}</h3>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">{c.region}</p>
      <ul className="mb-6 mt-4 flex flex-wrap gap-1.5">
        {c.focus.map((f) => (
          <li key={f} className="rounded-full bg-mist px-2.5 py-1 text-[0.7rem] font-medium text-ink-700">
            {f}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex items-center justify-between border-t border-dashed border-ink-900/15 pt-4">
        <span className="text-xs text-ink-500">
          <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-ink-500/70">Visa</span>
          {c.visaLabel}
        </span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-900 text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-brand-500">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
