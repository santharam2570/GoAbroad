import Link from "next/link";
import { Marquee } from "@/components/ui/Marquee";
import { FlagBadge } from "@/components/ui/FlagBadge";
import { countries } from "@/data/countries";

export function CountryMarquee() {
  const half = Math.ceil(countries.length / 2);
  return (
    <section aria-label="Our 20 study destinations" className="relative border-y border-white/10 bg-ink-900/60 py-6">
      <Marquee duration={55}>
        {countries.slice(0, half).map((c) => (
          <Item key={c.slug} slug={c.slug} name={c.name} country={c} />
        ))}
      </Marquee>
      <Marquee duration={55} reverse className="mt-3">
        {countries.slice(half).map((c) => (
          <Item key={c.slug} slug={c.slug} name={c.name} country={c} />
        ))}
      </Marquee>
    </section>
  );
}

function Item({ slug, name, country }: { slug: string; name: string; country: (typeof countries)[number] }) {
  return (
    <Link href={`/study-abroad/${slug}`} className="group mx-2 flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] py-2 pl-2 pr-5 transition-colors hover:border-brand-400/50 hover:bg-brand-500/10">
      <FlagBadge country={country} className="h-7 w-7" />
      <span className="whitespace-nowrap font-display text-lg font-medium text-white/80 group-hover:text-white">{name}</span>
    </Link>
  );
}
