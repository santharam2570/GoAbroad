import type { Metadata } from "next";
import { CrmPipeline } from "@/components/flow/CrmPipeline";
import { Flowchart } from "@/components/flow/Flowchart";
import { FinalCta } from "@/components/home/FinalCta";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { admissionSteps } from "@/data/process";

export const metadata: Metadata = {
  title: "Admission Process | From Counselling to Departure | GoAbroad Services",
  description:
    "Our 11-step admission process explained: enquiry, counselling, eligibility, university selection, documents, applications, offers, education loans, student visas, pre-departure and arrival.",
  alternates: { canonical: "/admission-process" },
};

export default function AdmissionProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Detailed admission process"
        title="From counselling"
        accent="to departure."
        crumbs={[{ label: "Admission Process" }]}
        description="Every step explained, so that students and parents understand exactly how GoAbroad Services supports them."
        aside={
          <div className="glass rounded-3xl p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">Our admission flowchart</p>
            <ol className="mt-4 space-y-1.5">
              {admissionSteps.map((s, i) => (
                <li key={s.title}>
                  <a href={`#step-${i + 1}`} className="flex items-center gap-3 rounded-lg px-2 py-1 text-sm text-white/75 transition-colors hover:bg-white/5 hover:text-white">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 font-mono text-[0.65rem] text-brand-200">{i + 1}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        }
      >
        <ButtonLink href="#enquire">Start with Step 1</ButtonLink>
      </PageHero>

      <section className="bg-paper py-20 text-ink-900 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading light eyebrow="Step-by-step explanation" title="Eleven steps." accent="Zero guesswork." description="The student decides at every key stage. Universities, lenders and immigration authorities make their own decisions — we make sure you are properly prepared for each one." />
            </div>
          </div>
          <div className="lg:col-span-8">
            <Flowchart steps={admissionSteps} light detailed idPrefix="step-" />
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Student application tracking"
            title="Every application,"
            accent="tracked to the finish line."
            description="From first contact to departure, each application moves through clear stages — filtered by destination, intake, course, counsellor, funding status and application stage, with deadline reminders along the way."
            className="mb-12"
          />
          <CrmPipeline />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
