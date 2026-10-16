import { MapPin, Navigation, Phone } from "lucide-react";
import type { Office } from "@/data/site";
import { cn } from "@/lib/cn";

export function OfficeCard({ office, withMap = false, className }: { office: Office; withMap?: boolean; className?: string }) {
  return (
    <article className={cn("group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-ink-800 to-ink-900", className)}>
      {withMap && (
        <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10 bg-ink-800">
          <iframe
            title={`Map of GoAbroad Services ${office.city} office`}
            src={office.embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full grayscale-[0.4] invert-[0.9] hue-rotate-180 transition-[filter] duration-700 group-hover:grayscale-0 group-hover:invert-0 group-hover:hue-rotate-0"
          />
          <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-ink-950/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            {office.label}
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-7">
        {!withMap && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sun-300">{office.label}</p>}
        <h3 className={cn("font-display text-2xl font-semibold text-white", !withMap && "mt-2")}>{office.city}</h3>
        <address className="mt-4 flex gap-3 not-italic leading-relaxed text-white/70">
          <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand-400" />
          <span>
            {office.lines.map((l) => (
              <span key={l} className="block">{l}</span>
            ))}
          </span>
        </address>
        <a href={office.phoneHref} className="mt-4 flex items-center gap-3 text-white/80 hover:text-white">
          <Phone className="h-4 w-4 text-brand-400" /> {office.phone}
        </a>
        <p className="mt-3 font-mono text-xs text-white/40">Plus Code: {office.plusCode}</p>
        <a
          href={office.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-400"
        >
          <Navigation className="h-4 w-4" /> Get directions
        </a>
      </div>
    </article>
  );
}
