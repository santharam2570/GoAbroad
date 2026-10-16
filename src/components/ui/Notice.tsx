import { Info } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Notice({ children, light = false, title = "Important", className }: { children: ReactNode; light?: boolean; title?: string; className?: string }) {
  return (
    <div
      role="note"
      className={cn(
        "flex gap-4 rounded-2xl border p-5 text-sm leading-relaxed",
        light ? "border-sun-500/30 bg-sun-300/20 text-ink-700" : "border-sun-400/25 bg-sun-400/[0.06] text-white/75",
        className,
      )}
    >
      <Info className={cn("mt-0.5 h-5 w-5 shrink-0", light ? "text-sun-500" : "text-sun-400")} />
      <div>
        <p className={cn("font-semibold", light ? "text-ink-900" : "text-white")}>{title}</p>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}
