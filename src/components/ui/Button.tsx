"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "light" | "sun";

const styles: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white shadow-[0_10px_40px_-10px_rgba(0,163,230,0.8)] hover:bg-brand-400",
  ghost: "border border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10",
  light: "bg-ink-900 text-white hover:bg-ink-700",
  sun: "bg-sun-400 text-ink-950 shadow-[0_10px_40px_-12px_rgba(255,192,97,0.8)] hover:bg-sun-300",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  icon = true,
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: boolean;
  external?: boolean;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18 });
  const sy = useSpring(y, { stiffness: 250, damping: 18 });

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.18);
    y.set((e.clientY - r.top - r.height / 2) * 0.3);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-tight transition-colors duration-300",
    styles[variant],
    className,
  );

  const inner = (
    <>
      <span>{children}</span>
      {icon && (
        <span className="relative inline-flex h-5 w-5 items-center justify-center overflow-hidden">
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-5 group-hover:translate-x-5" />
          <ArrowUpRight className="absolute h-4 w-4 -translate-x-5 translate-y-5 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
        </span>
      )}
    </>
  );

  return (
    <motion.span style={{ x: sx, y: sy }} className="inline-flex" onPointerMove={onMove} onPointerLeave={reset}>
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {inner}
        </a>
      ) : (
        <Link href={href} className={classes}>
          {inner}
        </Link>
      )}
    </motion.span>
  );
}
