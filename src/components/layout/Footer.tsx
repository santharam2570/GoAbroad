import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Logo, LogoMark } from "@/components/brand/Logo";
import { countries } from "@/data/countries";
import { offices, primaryNav, secondaryNav, site } from "@/data/site";
export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-950 pt-20">
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] text-brand-500/[0.05]">
        <LogoMark className="h-full w-full" spin />
      </div>
      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              Your Global Education. Your International Career. Your Future. Personalised guidance for study abroad, work abroad, immigration and permanent residency.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              <li>
                <a href={site.phoneHref} className="flex items-center gap-3 text-white/75 hover:text-white">
                  <Phone className="h-4 w-4 text-brand-400" /> {site.phone}
                </a>
              </li>
              <li>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/75 hover:text-white">
                  <MessageCircle className="h-4 w-4 text-brand-400" /> WhatsApp enquiry
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-white/75 hover:text-white">
                  <Mail className="h-4 w-4 text-brand-400" /> {site.email}
                </a>
              </li>
            </ul>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {offices.map((o) => (
                <address key={o.id} className="not-italic">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                    {o.city} <span className="text-sun-300/80">· {o.label}</span>
                  </p>
                  <p className="mt-2 flex gap-2 text-sm leading-relaxed text-white/65">
                    <MapPin className="mt-1 h-3.5 w-3.5 shrink-0 text-brand-400" />
                    <span>{o.lines.join(", ")}</span>
                  </p>
                  <a href={o.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 pl-5 text-xs font-semibold text-brand-300 hover:text-brand-200">
                    Get directions <ArrowUpRight className="h-3 w-3" />
                  </a>
                </address>
              ))}
            </div>
          </div>

          <FooterCol title="Explore" links={primaryNav} />
          <FooterCol title="Company" links={secondaryNav} />
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">20 Destinations</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {countries.map((c) => (
                <li key={c.slug}>
                  <Link href={`/study-abroad/${c.slug}`} className="text-white/65 transition-colors hover:text-brand-300">
                    Study in {c.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-xs leading-relaxed text-white/50">
          GoAbroad Services provides guidance, application support and documentation assistance. We do not guarantee admission, visa approval, employment, work permits, education loans or permanent residence. Universities, lenders, employers and immigration authorities make their own decisions. Country information is introductory and is not a substitute for a case-specific immigration assessment; regulated immigration advice and representation are provided only where legally authorised.
        </div>

        <div aria-hidden className="mt-14 select-none font-display text-[18vw] font-bold leading-[0.8] tracking-tighter text-white/[0.04] lg:text-[13.5rem]">
          GoAbroad
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 py-6 text-xs text-white/45 sm:flex-row sm:items-center">
          <p>© <CopyrightYear /> {site.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <Link href="/sitemap.xml" className="inline-flex items-center gap-1 hover:text-white">
              Sitemap <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

async function CopyrightYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="lg:col-span-2">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">{title}</p>
      <ul className="mt-5 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-white/65 transition-colors hover:text-brand-300">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
