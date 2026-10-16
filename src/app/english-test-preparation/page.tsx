import type { Metadata } from "next";
import { BookOpen, Headphones, Mic, PenLine } from "lucide-react";
import { FinalCta } from "@/components/home/FinalCta";
import { ButtonLink } from "@/components/ui/Button";
import { Notice } from "@/components/ui/Notice";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { englishMethodology, englishTests } from "@/data/process";

export const metadata: Metadata = {
  title: "IELTS, PTE & TOEFL Coaching | GoAbroad Services",
  description:
    "Structured English test preparation for IELTS Academic, IELTS General Training, PTE Academic, TOEFL iBT, Duolingo English Test, OET and Cambridge English qualifications.",
  alternates: { canonical: "/english-test-preparation" },
};

const skills = [
  { icon: BookOpen, label: "Reading" },
  { icon: PenLine, label: "Writing" },
  { icon: Headphones, label: "Listening" },
  { icon: Mic, label: "Speaking" },
];

export default function EnglishPage() {
  return (
    <>
      <PageHero
        eyebrow="English Test Preparation"
        title="Improve your English."
        accent="Strengthen your international opportunities."
        crumbs={[{ label: "English Test Preparation" }]}
        description={
          <>
            <p>GoAbroad Services provides structured English test preparation to help students work towards the language requirements of their chosen university, professional registration or immigration pathway.</p>
            <p className="mt-4 text-white/55">Our approach combines diagnostic assessment, focused practice, individual feedback and mock examinations to help students understand their strengths and areas for improvement.</p>
          </>
        }
        aside={
          <div className="grid grid-cols-2 gap-3">
            {skills.map((s, i) => (
              <div key={s.label} className="glass flex aspect-square flex-col justify-between rounded-3xl p-6 animate-float" style={{ animationDelay: `${i * 0.6}s` }}>
                <s.icon className="h-7 w-7 text-brand-300" />
                <span className="font-display text-2xl font-semibold text-white">{s.label}</span>
              </div>
            ))}
          </div>
        }
      >
        <ButtonLink href="#enquire" variant="sun">Book Your English Proficiency Assessment</ButtonLink>
      </PageHero>

      <section className="bg-paper py-20 text-ink-900 sm:py-28">
        <div className="container-x">
          <SectionHeading light eyebrow="Tests we prepare you for" title="Seven tests." accent="The right one for your purpose." className="mb-12" />
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-ink-900/10 bg-white shadow-[0_30px_60px_-40px_rgba(6,11,23,0.4)]">
              <div className="overflow-x-auto" data-lenis-prevent>
                <table className="w-full min-w-[44rem] text-left">
                  <caption className="sr-only">English proficiency tests, their common purpose and preparation areas</caption>
                  <thead className="bg-ink-900 text-white">
                    <tr>
                      <th scope="col" className="px-6 py-5 text-xs font-semibold uppercase tracking-[0.18em]">Test</th>
                      <th scope="col" className="px-6 py-5 text-xs font-semibold uppercase tracking-[0.18em]">Common purpose</th>
                      <th scope="col" className="px-6 py-5 text-xs font-semibold uppercase tracking-[0.18em]">Preparation areas</th>
                    </tr>
                  </thead>
                  <tbody>
                    {englishTests.map((t, i) => (
                      <tr key={t.test} className="group border-t border-ink-900/10 transition-colors hover:bg-brand-500/[0.06]">
                        <th scope="row" className="px-6 py-5">
                          <span className="flex items-center gap-3">
                            <span className="font-mono text-xs text-ink-500/60">{String(i + 1).padStart(2, "0")}</span>
                            <span className="font-display text-lg font-semibold transition-colors group-hover:text-brand-600">{t.test}</span>
                          </span>
                        </th>
                        <td className="px-6 py-5 text-ink-700">{t.purpose}</td>
                        <td className="px-6 py-5 text-ink-600">{t.areas}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
          <Notice light className="mt-8">
            Not every test is accepted for every country, university, visa or professional registration. Requirements must be checked for the specific purpose and application date. Test acceptance varies by university, programme, visa category and immigration route — we verify which examinations are accepted before recommending a test.
          </Notice>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Our training methodology" title="From diagnostic" accent="to test day." className="mb-14" />
          <Stagger as="ol" className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {englishMethodology.map((m, i) => (
              <StaggerItem as="li" key={m} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800 to-ink-900 p-8">
                <span aria-hidden className="absolute right-6 top-4 font-display text-7xl font-bold text-white/[0.05] transition-colors duration-500 group-hover:text-sun-400/20">
                  {i + 1}
                </span>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-gradient-to-r from-brand-400 to-sun-400" style={{ width: `${((i + 1) / englishMethodology.length) * 100}%` }} />
                </div>
                <p className="mt-8 font-display text-xl font-medium leading-snug text-white">{m}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-12">
            <ButtonLink href="#enquire" variant="sun">Book Your English Proficiency Assessment</ButtonLink>
          </div>
        </div>
      </section>

      <FinalCta goal="Study abroad" />
    </>
  );
}
