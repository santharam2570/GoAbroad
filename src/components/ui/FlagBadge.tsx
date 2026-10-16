import type { Country } from "@/data/countries";
import { cn } from "@/lib/cn";

export function FlagBadge({ country, className }: { country: Pick<Country, "flag" | "code" | "name">; className?: string }) {
  const { colors, dir } = country.flag;
  const step = 100 / colors.length;
  const stops = colors.map((c, i) => `${c} ${i * step}% ${(i + 1) * step}%`).join(", ");
  return (
    <span
      role="img"
      aria-label={`${country.name} colours`}
      className={cn("inline-block shrink-0 rounded-full ring-2 ring-white/20 shadow-md", className ?? "h-6 w-6")}
      style={{
        background:
          dir === "c"
            ? `radial-gradient(circle, ${colors[1]} 0 30%, ${colors[0]} 31%)`
            : `linear-gradient(${dir === "v" ? "90deg" : "180deg"}, ${stops})`,
      }}
    />
  );
}
