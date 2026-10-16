"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export function Toc({ items }: { items: { id: string; n: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">On this page</p>
      <ol className="space-y-0.5 border-l border-ink-900/10">
        {items.map((i) => (
          <li key={i.id} className="relative">
            {active === i.id && <motion.span layoutId="toc-active" className="absolute -left-px top-0 h-full w-0.5 bg-brand-500" />}
            <a
              href={`#${i.id}`}
              className={cn(
                "flex gap-3 py-1.5 pl-4 text-sm transition-colors",
                active === i.id ? "font-semibold text-ink-900" : "text-ink-500 hover:text-ink-900",
              )}
            >
              <span className="font-mono text-xs opacity-60">{i.n}</span>
              {i.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
