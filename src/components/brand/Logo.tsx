import { cn } from "@/lib/cn";

export function LogoMark({ className, spin = false }: { className?: string; spin?: boolean }) {
  return (
    <svg viewBox="0 0 100 100" className={cn("shrink-0", className)} aria-hidden="true">
      <g className={spin ? "origin-center animate-spin-slow [transform-box:fill-box]" : undefined}>
        <path
          d="M88 50 A38 38 0 1 1 72.5 19.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="16"
        />
        <path d="M60.6 31.2 L82.4 7.6 L86.4 34.6 Z" fill="currentColor" />
      </g>
      <path d="M53 43 H96 V52 Q93 63 86 63 H53 Z" fill="currentColor" />
    </svg>
  );
}

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-9 w-9 text-brand-500" />
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-[1.2rem] font-bold tracking-tight", light ? "text-ink-900" : "text-white")}>
          Go<span className="text-brand-500">Abroad</span>
        </span>
        <span className={cn("mt-1 text-[0.58rem] font-semibold tracking-[0.42em]", light ? "text-ink-500" : "text-white/50")}>
          SERVICES
        </span>
      </span>
    </span>
  );
}
