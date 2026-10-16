import type { Metadata } from "next";
import { DestinationGrid } from "@/components/home/DestinationGrid";
import { FinalCta } from "@/components/home/FinalCta";
import { ButtonLink } from "@/components/ui/Button";
import { Notice } from "@/components/ui/Notice";
import { PageHero } from "@/components/ui/PageHero";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { countryGuideSections } from "@/data/countries";
import { keyPrinciple } from "@/data/site";

export const metadata: Metadata = {
  title: "Study Abroad Consultants | Universities, Admissions & Visa Guidance",
  description:
    "Explore 20 study abroad destinations with GoAbroad Services: universities, courses, eligibility, admissions, scholarships, student visas, post-study work and immigration pathways.",
  alternates: { canonical: "/study-abroad" },
};

const five = ["Study", "Admissions", "Student Visa", "Work Opportunities", "Immigration/PR"];

export default function StudyAbroadPage() {
  return (
    <>
      <PageHero
        eyebrow="Study Abroad"
        title="20 destinations."
        accent="One clear plan."
        crumbs={[{ label: "Study Abroad" }]}
        description="20 country guides, universities, courses, eligibility, admissions and scholarships — each explaining education systems, admission requirements, visa procedures, scholarships, education loans, post-study work opportunities, work permits and immigration pathways."
        aside={
          <div className="glass rounded-3xl p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">Every country guide covers</p>
            <ol className="mt-5 space-y-3">
              {five.map((f, i) => (
                <li key={f} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <span className="font-mono text-xs text-sun-300">0{i + 1}</span>
                  <span className="font-display text-lg font-medium text-white">{f}</span>
                </li>
              ))}
            </ol>
          </div>
        }
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="#destinations">Browse destinations</ButtonLink>
          <ButtonLink href="/admission-process" variant="ghost">
            Admission process
          </ButtonLink>
        </div>
      </PageHero>

      <section id="destinations" className="scroll-mt-24 bg-paper py-20 text-ink-900 sm:py-28">
        <div className="container-x">
          <SectionHeading
            light
            eyebrow="Our 20 international study destinations"
            title="Filter by region, course area"
            accent="or search."
            className="mb-12"
          />
          <DestinationGrid />
          <Notice light className="mt-12" title="Introductory content">
            The country summaries are introductory website content, not a substitute for a case-specific immigration assessment. {keyPrinciple.body}
          </Notice>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Country-wise page structure"
            title="Fourteen sections."
            accent="Every destination."
            description="Each country guide uses the same comprehensive structure, giving a consistent experience and making it easier to compare countries."
          />
          <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {countryGuideSections.map((s) => (
              <StaggerItem key={s.id} className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-500 hover:border-brand-400/40 hover:bg-white/[0.05]">
                <span className="font-mono text-sm text-brand-300">{s.n}</span>
                <h3 className="mt-3 font-display text-xl font-semibold text-white">{s.id === "study" ? "Study in the Country" : s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{s.generic}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <FinalCta goal="Study abroad" />
    </>
  );
}
