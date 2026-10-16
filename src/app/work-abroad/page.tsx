import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Flowchart } from "@/components/flow/Flowchart";
import { FinalCta } from "@/components/home/FinalCta";
import { ButtonLink } from "@/components/ui/Button";
import { Notice } from "@/components/ui/Notice";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { workAuthorisations, workSteps, workSupport } from "@/data/process";

export const metadata: Metadata = {
  title: "Overseas Job & Work Permit Guidance | GoAbroad Services",
  description:
    "Understand overseas employment opportunities and the work authorisation you need: employer-sponsored permits, skilled worker routes, graduate work permits and career preparation.",
  alternates: { canonical: "/work-abroad" },
};

const distinction = [
  { k: "Finding a job", v: "Identifying legitimate vacancies and suitable employers." },
  { k: "Receiving an offer", v: "An employment offer reviewed alongside employer and sponsorship details." },
  { k: "Permission to work", v: "Legal authorisation from the relevant employer and government process." },
];

export default function WorkAbroadPage() {
  return (
    <>
      <PageHero
        eyebrow="Work Abroad"
        title="Build your international career"
        accent="with the right preparation."
        crumbs={[{ label: "Work Abroad" }]}
        description="GoAbroad Services helps graduates, experienced professionals and skilled candidates understand overseas employment opportunities and the authorisation required to work legally in their destination country."
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="#enquire">Get a profile assessment</ButtonLink>
          <ButtonLink href="#authorisation" variant="ghost">Work authorisation types</ButtonLink>
        </div>
      </PageHero>

      <section className="bg-paper py-20 text-ink-900 sm:py-28">
        <div className="container-x">
          <SectionHeading
            light
            eyebrow="Our focus"
            title="Three different things."
            accent="Never confuse them."
            description="Our focus is on helping candidates understand the difference between finding a job, receiving an employment offer and obtaining legal permission to work."
          />
          <div className="mt-14 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {distinction.map((d, i) => (
              <div key={d.k} className="contents">
                <Reveal delay={i * 0.12} className="rounded-3xl border border-ink-900/10 bg-white p-8 shadow-[0_20px_50px_-35px_rgba(6,11,23,0.4)]">
                  <span className="font-mono text-sm text-brand-600">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight">{d.k}</h3>
                  <p className="mt-3 text-ink-600">{d.v}</p>
                </Reveal>
                {i < distinction.length - 1 && (
                  <Reveal delay={i * 0.12 + 0.06} className="flex items-center justify-center font-serif text-5xl italic text-brand-500 lg:px-2">
                    ≠
                  </Reveal>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="authorisation" className="scroll-mt-24 py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Common types of work authorisation" title="What each route" accent="generally means." />
          <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workAuthorisations.map((w, i) => (
              <StaggerItem key={w.title} className="h-full">
                <SpotlightCard className="h-full border border-white/10 bg-ink-800/60">
                  <div className="flex h-full flex-col p-7">
                    <span className="font-display text-5xl font-bold text-white/10">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-6 font-display text-xl font-semibold leading-snug text-white">{w.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">{w.body}</p>
                  </div>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </Stagger>
          <Notice className="mt-10" title="Not interchangeable">
            These are general categories, not interchangeable visa types. Every destination has its own eligibility requirements, restrictions and application procedures.
          </Notice>
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-ink-900/50 py-24 sm:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionHeading eyebrow="Our overseas work assistance process" title="Seven steps to" accent="a lawful start." description="Proceed with travel and employment only after satisfying applicable legal requirements." />
            </div>
          </div>
          <div className="lg:col-span-7">
            <Flowchart steps={workSteps} />
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Work permit support services" title="Practical support," accent="end to end." />
          </div>
          <Stagger as="ul" className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {workSupport.map((s) => (
              <StaggerItem as="li" key={s} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white/80">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                {s}
              </StaggerItem>
            ))}
          </Stagger>
          <Notice className="lg:col-span-12">
            GoAbroad Services does not promise a job, work permit or visa approval. Recruitment, immigration representation and placement services are offered only where permitted under applicable laws.
          </Notice>
        </div>
      </section>

      <FinalCta goal="Overseas employment" />
    </>
  );
}
