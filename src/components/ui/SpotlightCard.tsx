"use client";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function SpotlightCard({
  children,
  className,
  color = "rgba(0,163,230,0.18)",
}: {
  children: ReactNode;
  className?: string;
  color?: string;
}) {
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const bg = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, ${color}, transparent 65%)`;

  return (
    <div
      className={cn("group relative overflow-hidden rounded-3xl", className)}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
      onPointerLeave={() => {
        mx.set(-400);
        my.set(-400);
      }}
    >
      <motion.div aria-hidden className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300" style={{ background: bg }} />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
