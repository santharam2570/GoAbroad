"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { LogoMark } from "@/components/brand/Logo";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[80] flex items-center justify-center bg-brand-500"
        initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 100% 0%)" }}
        transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
      >
        <motion.span
          initial={{ opacity: 1, scale: 1, rotate: 0 }}
          animate={{ opacity: 0, scale: 0.6, rotate: 90 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <LogoMark className="h-16 w-16 text-white" />
        </motion.span>
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[79] bg-ink-900"
        initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 100% 0%)" }}
        transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1], delay: 0.28 }}
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
      >
        {children}
      </motion.div>
    </>
  );
}
