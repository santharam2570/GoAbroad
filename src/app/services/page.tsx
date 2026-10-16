import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { FinalCta } from "@/components/home/FinalCta";
import { PageHero } from "@/components/ui/PageHero";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { serviceIcons } from "@/components/ui/icons";
import { otherServices, services } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services | Study Abroad, Visas, Loans & Careers | GoAbroad Services",
  description:
    "Study abroad counselling, university admissions, IELTS & English test preparation, student visas, education loans, scholarships, overseas careers, immigration guidance and pre-departure support.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Complete list of GoAbroad Services"
        title="Every service your journey needs,"
        accent="in one place."
        crumbs={[{ label: "Our Services" }]}
        description="From selecting the right country and university to admission applications, visa documentation, education loan assistance, English test preparation and post-arrival guidance — each service has its own dedicated page with an enquiry form."
      />

      <section className="pb-24 sm:pb-32">
        <div className="container-x">
          <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = serviceIcons[s.icon];
              return (
                <StaggerItem key={s.slug} className="h-full">
                  <SpotlightCard className="h-full border border-white/10 bg-ink-800/60">
                    <Link href={`/services/${s.slug}`} className="flex h-full flex-col p-8">
                      <div className="flex items-start justify-between">
                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-300 transition-colors duration-500 group-hover:bg-brand-500 group-hover:text-white">
                          <Icon className="h-6 w-6" />
                        </span>
                        <span className="font-display text-5xl font-bold text-white/10">{s.letter}</span>
                      </div>
                      <h2 className="mt-8 font-display text-2xl font-semibold leading-tight tracking-tight text-white">{s.title}</h2>
                      <p className="mt-3 text-sm leading-relaxed text-white/60">{s.description}</p>
                      <ul className="mb-8 mt-6 space-y-2">
                        {s.includes.slice(0, 3).map((x) => (
                          <li key={x} className="flex gap-2 text-sm text-white/75">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                            {x}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand-300">
                        View service <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                      </span>
                    </Link>
                  </SpotlightCard>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink-900 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading light eyebrow="Other services" title="Specialist support," accent="when you need it." />
          </div>
          <Stagger as="ul" className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {otherServices.map((s, i) => (
              <StaggerItem as="li" key={s} className="flex items-start gap-4 rounded-2xl border border-ink-900/10 bg-white p-5">
                <span className="font-mono text-xs text-brand-600">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-ink-700">{s}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
