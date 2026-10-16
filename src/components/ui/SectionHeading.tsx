import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

export function Eyebrow({ children, light = false, className }: { children: ReactNode; light?: boolean; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em]",
        light ? "border-ink-900/10 bg-white text-brand-700" : "border-white/10 bg-white/5 text-brand-300",
        className,
      )}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-500" />
      </span>
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  light = false,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  accent?: ReactNode;
  description?: ReactNode;
  light?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Reveal>
          <Eyebrow light={light}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "mt-5 font-display text-4xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-5xl lg:text-[3.6rem]",
            light ? "text-ink-900" : "text-white",
          )}
        >
          {title}{" "}
          {accent && <span className="font-serif font-normal italic text-brand-500">{accent}</span>}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p className={cn("mt-5 text-base leading-relaxed sm:text-lg text-pretty", light ? "text-ink-600" : "text-white/65")}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
