"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { posts, type Post } from "@/data/content";
import { cn } from "@/lib/cn";

const cats = ["All", "Admissions", "Visa Updates", "Scholarships & Loans", "Career Planning"] as const;
const tone: Record<Post["category"], string> = {
  Admissions: "from-brand-500 to-brand-700",
  "Visa Updates": "from-violet-500 to-indigo-700",
  "Scholarships & Loans": "from-sun-400 to-orange-600",
  "Career Planning": "from-emerald-400 to-teal-700",
};

export function BlogList() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const list = cat === "All" ? posts : posts.filter((p) => p.category === cat);

  return (
    <div>
      <div role="tablist" aria-label="Filter articles" className="mb-10 flex flex-wrap gap-2">
        {cats.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={cat === c}
            onClick={() => setCat(c)}
            className={cn("relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors", cat === c ? "text-ink-950" : "text-white/65 hover:text-white")}
          >
            {cat === c && <motion.span layoutId="blog-pill" className="absolute inset-0 rounded-full bg-white" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
            <span className="relative">{c}</span>
          </button>
        ))}
      </div>
      <motion.ul layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <motion.li
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={i === 0 && cat === "All" ? "md:col-span-2" : undefined}
            >
              <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-800/60 transition-colors hover:border-brand-400/40">
                <div className={cn("relative h-44 overflow-hidden bg-gradient-to-br", tone[p.category], i === 0 && cat === "All" && "md:h-60")}>
                  <div className="absolute inset-0 grid-lines opacity-40 transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute bottom-4 left-5 rounded-full bg-black/25 px-3 py-1 text-xs font-semibold text-white backdrop-blur">{p.category}</span>
                  <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink-900 transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs text-white/45">
                    {new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })} · {p.read}
                  </p>
                  <h2 className="mt-3 font-display text-xl font-semibold leading-snug text-white transition-colors group-hover:text-brand-200 sm:text-2xl">{p.title}</h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/60">{p.excerpt}</p>
                </div>
              </Link>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
