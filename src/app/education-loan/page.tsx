import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Flowchart } from "@/components/flow/Flowchart";
import { FinalCta } from "@/components/home/FinalCta";
import { ButtonLink } from "@/components/ui/Button";
import { Notice } from "@/components/ui/Notice";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { loanIncludes, loanSteps } from "@/data/process";

export const metadata: Metadata = {
  title: "Overseas Education Loan Assistance | GoAbroad Services",
  description:
    "Education loan assistance for all eligible candidates: lender comparison, co-applicant documentation, application coordination, sanction letters and disbursement guidance.",
  alternates: { canonical: "/education-loan" },
};

const understand = [
  { t: "Loans are not identical", b: "Education loans can differ in interest rates, processing charges, repayment periods, moratorium conditions, collateral requirements, margin money and eligible expenses." },
  { t: "A moratorium is not interest-free", b: "A moratorium does not necessarily mean that interest will not accrue during the period." },
  { t: "Approval is not automatic", b: "Loan approval is not automatic, and a university offer or visa application does not guarantee financing. Students should read the lender's final sanction letter and understand their repayment obligations before accepting the loan." },
];

export default function LoanPage() {
  return (
    <>
      <PageHero
        eyebrow="Education loan assistance for all eligible candidates"
        title="Your international education"
        accent="should have a financial plan."
        crumbs={[{ label: "Education Loan Assistance" }]}
        description={
          <>
            <p>GoAbroad Services understands that tuition fees, accommodation and living expenses can be major considerations when planning an overseas education. Our education loan assistance service helps students and families explore suitable financing options and prepare their applications.</p>
            <p className="mt-4 text-white/55">We assist applicants in understanding lender requirements, comparing available options and organising the documentation required for education financing.</p>
          </>
        }
        aside={
          <div className="glass relative overflow-hidden rounded-3xl p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">Expenses to plan for</p>
            {[
              ["Tuition fees", 78],
              ["Accommodation", 52],
              ["Living expenses", 40],
              ["Insurance & travel", 22],
            ].map(([label, w], i) => (
              <div key={label} className="mt-5">
                <div className="flex justify-between text-sm text-white/80">
                  <span>{label}</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full origin-left rounded-full bg-gradient-to-r from-brand-400 to-sun-400 animate-[grow_1.4s_cubic-bezier(.22,1,.36,1)_both]" style={{ width: `${w}%`, animationDelay: `${1 + i * 0.15}s` }} />
                </div>
              </div>
            ))}
            <p className="mt-6 text-xs text-white/40">Illustrative only — your plan depends on course, destination and lender.</p>
          </div>
        }
      >
        <ButtonLink href="#enquire" variant="sun">Check Your Education Loan Options</ButtonLink>
      </PageHero>

      <section className="bg-paper py-20 text-ink-900 sm:py-28">
        <div className="container-x">
          <SectionHeading light eyebrow="What our loan support includes" title="Ten ways we" accent="support your application." className="mb-12" />
          <Stagger as="ul" className="grid gap-3 sm:grid-cols-2">
            {loanIncludes.map((x, i) => (
              <StaggerItem as="li" key={x} className="flex gap-4 rounded-2xl border border-ink-900/10 bg-white p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500 font-mono text-xs font-semibold text-white">{i + 1}</span>
                <span className="text-ink-700">{x}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionHeading eyebrow="Education loan application flowchart" title="From assessment" accent="to disbursement." description="Seven stages, from understanding your requirement to funds being released according to lender and university requirements." />
            </div>
          </div>
          <div className="lg:col-span-7">
            <Flowchart steps={loanSteps} />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-ink-900/50 py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Information students should understand" title="Read the fine print" accent="before you sign." className="mb-14" />
          <div className="grid gap-4 lg:grid-cols-3">
            {understand.map((u, i) => (
              <Reveal key={u.t} delay={i * 0.1} className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <Check className="h-6 w-6 text-sun-400" />
                <h3 className="mt-6 font-display text-2xl font-semibold text-white">{u.t}</h3>
                <p className="mt-3 leading-relaxed text-white/65">{u.b}</p>
              </Reveal>
            ))}
          </div>
          <Notice className="mt-10" title="Who decides">
            GoAbroad Services supports the application process; the lender retains full authority over credit assessment, sanction and disbursement. Approval, interest rates, collateral requirements, margins, repayment terms and disbursement are determined by the lender.
          </Notice>
        </div>
      </section>

      <FinalCta goal="Study abroad" />
    </>
  );
}
