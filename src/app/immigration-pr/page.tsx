import type { Metadata } from "next";
import { PathwayTabs } from "@/components/flow/PathwayTabs";
import { FinalCta } from "@/components/home/FinalCta";
import { ButtonLink } from "@/components/ui/Button";
import { Notice } from "@/components/ui/Notice";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { immigrationProcess } from "@/data/process";

export const metadata: Metadata = {
  title: "Skilled Migration & PR Pathway Guidance | GoAbroad Services",
  description:
    "Understand skilled migration, employment-based residence, family sponsorship and permanent residence options with preliminary eligibility reviews and pathway-specific checklists.",
  alternates: { canonical: "/immigration-pr" },
};

const factors = ["Residence duration", "Employment", "Language proficiency", "Qualifications", "Salary", "Sponsorship", "Family circumstances", "Settlement eligibility"];

export default function ImmigrationPage() {
  return (
    <>
      <PageHero
        eyebrow="Immigration & Permanent Residency"
        title="Plan your long-term future"
        accent="with a clear understanding of the rules."
        crumbs={[{ label: "Immigration & PR" }]}
        description="GoAbroad Services helps candidates understand potential immigration routes, identify the requirements they may need to meet and prepare for the next stage of their international career."
      >
        <ButtonLink href="#enquire">Request an eligibility review</ButtonLink>
      </PageHero>

      <section className="bg-paper py-20 text-ink-900 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="font-display text-3xl font-medium leading-snug tracking-tight sm:text-4xl">
                Permanent residency is <span className="font-serif italic text-brand-600">not automatically granted</span> after studying or working abroad.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-ink-600">
                Each country has its own rules governing residence duration, employment, language proficiency, qualifications, salary, sponsorship, family circumstances and settlement eligibility.
              </p>
            </Reveal>
          </div>
          <Stagger as="ul" className="flex flex-wrap gap-3 lg:col-span-6">
            {factors.map((f) => (
              <StaggerItem as="li" key={f} className="rounded-full border border-ink-900/10 bg-white px-5 py-3 font-display text-lg font-medium shadow-sm">
                {f}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Common immigration pathways" title="Six routes" accent="worth understanding." className="mb-14" />
          <PathwayTabs />
        </div>
      </section>

      <section className="border-y border-white/10 bg-ink-900/50 py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Our immigration guidance process" title="A structured review," accent="step by step." className="mb-14" />
          <Stagger as="ol" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {immigrationProcess.map((s, i) => (
              <StaggerItem as="li" key={s} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-brand-400/40">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-400/40 font-mono text-sm text-brand-300 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  {i + 1}
                </span>
                <p className="mt-5 font-medium leading-snug text-white/85">{s}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <Notice className="mt-10" title="Regulated advice">
            Immigration laws are complex and can change. Where legal representation or regulated immigration advice is required, GoAbroad Services will direct clients to appropriately authorised professionals.
          </Notice>
        </div>
      </section>

      <FinalCta goal="Immigration or PR" />
    </>
  );
}
