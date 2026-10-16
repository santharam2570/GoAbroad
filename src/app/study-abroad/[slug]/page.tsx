import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ExternalLink } from "lucide-react";
import { CountryHero } from "@/components/country/CountryHero";
import { Toc } from "@/components/country/Toc";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Accordion } from "@/components/ui/Accordion";
import { FlagBadge } from "@/components/ui/FlagBadge";
import { Notice } from "@/components/ui/Notice";
import { Reveal } from "@/components/ui/Reveal";
import { countries, countryGuideSections, getCountry, maintainedRecord, type Country } from "@/data/countries";
import { faqs } from "@/data/content";
import { admissionSteps } from "@/data/process";

export function generateStaticParams() {
  return countries.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCountry(slug);
  if (!c) return {};
  return {
    title: c.seoTitle,
    description: c.seoDescription,
    alternates: { canonical: `/study-abroad/${c.slug}` },
    openGraph: { title: c.seoTitle, description: c.seoDescription },
  };
}

function countryFaqs(c: Country) {
  return [
    { q: `Can I work while studying in ${c.name}?`, a: `${c.work} Students must verify their own immigration conditions before starting work.` },
    { q: `What are the post-study options in ${c.name}?`, a: c.postStudy },
    { q: `Can I get permanent residency after studying in ${c.name}?`, a: `${c.immigration} ${faqs[5].a}` },
    { q: "Is IELTS compulsory?", a: faqs[2].a },
    { q: "Can I obtain a study visa without an education loan?", a: faqs[3].a },
    { q: "Does GoAbroad Services guarantee admission or visa approval?", a: faqs[6].a },
  ];
}

export default async function CountryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCountry(slug);
  if (!c) notFound();

  const index = countries.indexOf(c);
  const prev = countries[(index - 1 + countries.length) % countries.length];
  const next = countries[(index + 1) % countries.length];
  const toc = countryGuideSections.map((s) => ({ id: s.id, n: s.n, label: s.id === "study" ? `Study in ${c.short}` : s.title }));
  const g = Object.fromEntries(countryGuideSections.map((s) => [s.id, s])) as Record<string, (typeof countryGuideSections)[number]>;
  const qa = countryFaqs(c);
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <CountryHero country={c} index={index} total={countries.length} />

      <div className="bg-paper text-ink-900">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28">
              <Toc items={toc} />
            </div>
          </aside>

          <div className="space-y-6 lg:col-span-9">
            <Block id="study" n="01" title={`Study in ${c.name}`} generic={g.study.generic}>
              <p className="text-lg leading-relaxed text-ink-700">{c.overview}</p>
            </Block>

            <Block id="courses" n="02" title={g.courses.title} generic={g.courses.generic}>
              <p className="mb-3 text-sm font-semibold text-ink-900">Popular focus areas in {c.name}</p>
              <ul className="flex flex-wrap gap-2">
                {c.focus.map((f) => (
                  <li key={f} className="rounded-full bg-ink-900 px-4 py-2 text-sm font-medium text-white">{f}</li>
                ))}
              </ul>
            </Block>

            <Block id="admission-requirements" n="03" title={g["admission-requirements"].title} generic={g["admission-requirements"].generic}>
              <Highlight label="Admissions">{c.admissions}</Highlight>
              <Checklist items={["Academic qualifications", "English language scores", "Statement of Purpose (SOP)", "Letters of Recommendation (LOR)", "CV or résumé", "Portfolio, where applicable"]} />
            </Block>

            <Block id="application-process" n="04" title={g["application-process"].title} generic={g["application-process"].generic}>
              <ol className="grid gap-3 sm:grid-cols-3">
                {admissionSteps.slice(4, 7).map((s, i) => (
                  <li key={s.title} className="rounded-2xl border border-ink-900/10 bg-paper p-4">
                    <span className="font-mono text-xs text-brand-600">Step {i + 5}</span>
                    <p className="mt-1 font-semibold">{s.title}</p>
                    <p className="mt-1 text-sm text-ink-600">{s.short}</p>
                  </li>
                ))}
              </ol>
              <InlineLink href="/admission-process">See all 11 admission steps</InlineLink>
            </Block>

            <Block id="costs" n="05" title={g.costs.title} generic={g.costs.generic}>
              <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {["Tuition fees", "Living expenses", "Accommodation", "Insurance", "Travel", "Personal budgeting"].map((x) => (
                  <li key={x} className="rounded-2xl bg-paper p-4 text-sm font-semibold">{x}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-ink-600">
                Indicative figures for {c.name} are shared during counselling and verified against current institution and official sources.
              </p>
            </Block>

            <Block id="funding" n="06" title={g.funding.title} generic={g.funding.generic}>
              <div className="grid gap-3 sm:grid-cols-2">
                <CardLink href="/services/scholarships-funding-guidance" title="Scholarships & Funding Guidance" body="University scholarships, merit awards, need-based assistance and external funding. Funding is not guaranteed." />
                <CardLink href="/education-loan" title="Education Loan Assistance" body="Lender comparison, documentation and application support for eligible candidates." />
              </div>
            </Block>

            <Block id="student-visa" n="07" title={g["student-visa"].title} generic={g["student-visa"].generic}>
              <Highlight label={c.visaLabel}>{c.visa}</Highlight>
              <p className="mt-4 text-sm text-ink-600">We prepare a destination-specific checklist and review your supporting documents. The immigration authority makes the final decision.</p>
            </Block>

            <Block id="work-while-studying" n="08" title={g["work-while-studying"].title} generic={g["work-while-studying"].generic}>
              <Highlight label="Work">{c.work}</Highlight>
              <Notice light className="mt-4" title="Check your own conditions">
                There is no universal work-hour limit across countries. Conditions differ substantially and may change even within the same country — verify your own immigration conditions before starting work.
              </Notice>
            </Block>

            <Block id="post-study" n="09" title={g["post-study"].title} generic={g["post-study"].generic}>
              <Highlight label="Graduate routes">{c.postStudy}</Highlight>
            </Block>

            <Block id="work-permits" n="10" title={g["work-permits"].title} generic={g["work-permits"].generic}>
              <p className="text-ink-700">
                Finding a job, receiving an employment offer and obtaining legal permission to work are different steps. We help you understand the employer and government process that applies in {c.name}.
              </p>
              <InlineLink href="/work-abroad">Explore Work Abroad</InlineLink>
            </Block>

            <Block id="immigration" n="11" title={g.immigration.title} generic={g.immigration.generic}>
              <Highlight label="Immigration">{c.immigration}</Highlight>
              <div className="mt-5">
                <p className="mb-2 text-sm font-semibold">Official resources</p>
                <ul className="flex flex-wrap gap-2">
                  {c.resources.map((r) => (
                    <li key={r.url}>
                      <a href={r.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 bg-white px-4 py-2 text-sm font-medium text-ink-800 transition-colors hover:border-brand-500 hover:text-brand-600">
                        {r.label} <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <InlineLink href="/immigration-pr">Explore Immigration & PR pathways</InlineLink>
            </Block>

            <Block id="family" n="12" title={g.family.title} generic={g.family.generic}>
              <p className="text-ink-700">Dependant and family visa information is provided where eligible, based on the rules applicable to your programme and permit in {c.name}.</p>
            </Block>

            <Block id="faq" n="13" title={g.faq.title} generic={g.faq.generic}>
              <Accordion items={qa} light defaultOpen={null} />
              <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
            </Block>

            <section id="apply" className="scroll-mt-28 overflow-hidden rounded-[2rem] bg-ink-950 p-6 text-white sm:p-10">
              <div className="grid gap-10 xl:grid-cols-5">
                <div className="xl:col-span-2">
                  <span className="font-mono text-sm text-brand-300">14</span>
                  <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">Apply with GoAbroad Services</h2>
                  <p className="mt-3 text-white/60">{g.apply.generic}</p>
                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sun-300">GoAbroad support for {c.short}</p>
                    <p className="mt-2 leading-relaxed text-white/80">{c.support}</p>
                  </div>
                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Information we keep current</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-white/60">
                      {maintainedRecord.map((m) => (
                        <li key={m} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />{m}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="xl:col-span-3">
                  <EnquiryForm defaultDestination={c.name} defaultGoal="Study abroad" title={`Start your ${c.short} journey`} />
                </div>
              </div>
            </section>

            <Notice light title="Introductory content">
              This guide is introductory website content, not a substitute for a case-specific immigration assessment. Admission, student visas, work authorisation and permanent residency are separate processes, and rules can change.
            </Notice>
          </div>
        </div>

        <nav aria-label="More destinations" className="border-t border-ink-900/10">
          <div className="container-x grid sm:grid-cols-2">
            <Link href={`/study-abroad/${prev.slug}`} className="group flex items-center gap-4 border-ink-900/10 py-10 sm:border-r sm:pr-8">
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              <FlagBadge country={prev} className="h-10 w-10" />
              <span>
                <span className="block text-xs uppercase tracking-[0.2em] text-ink-500">Previous</span>
                <span className="font-display text-2xl font-semibold">{prev.name}</span>
              </span>
            </Link>
            <Link href={`/study-abroad/${next.slug}`} className="group flex items-center justify-end gap-4 py-10 text-right sm:pl-8">
              <span>
                <span className="block text-xs uppercase tracking-[0.2em] text-ink-500">Next</span>
                <span className="font-display text-2xl font-semibold">{next.name}</span>
              </span>
              <FlagBadge country={next} className="h-10 w-10" />
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

function Block({ id, n, title, generic, children }: { id: string; n: string; title: string; generic: string; children: ReactNode }) {
  return (
    <Reveal as="section" y={20}>
      <div id={id} className="scroll-mt-28 rounded-[2rem] border border-ink-900/10 bg-white p-6 shadow-[0_20px_50px_-40px_rgba(6,11,23,0.4)] sm:p-9">
        <div className="flex items-start gap-5">
          <span className="font-mono text-sm text-brand-600">{n}</span>
          <div className="min-w-0 flex-1">
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
            <p className="mt-2 text-sm text-ink-500">{generic}</p>
            <div className="mt-6">{children}</div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function Highlight({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border-l-4 border-brand-500 bg-gradient-to-r from-brand-500/[0.08] to-transparent p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">{label}</p>
      <p className="mt-2 text-lg leading-relaxed text-ink-800">{children}</p>
    </div>
  );
}

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
      {items.map((i) => (
        <li key={i} className="flex items-center gap-2.5 text-sm text-ink-700">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-500/15"><Check className="h-3 w-3 text-brand-600" /></span>
          {i}
        </li>
      ))}
    </ul>
  );
}

function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

function CardLink({ href, title, body }: { href: string; title: string; body: string }) {
  return (
    <Link href={href} className="group rounded-2xl border border-ink-900/10 p-5 transition-all hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-lg">
      <p className="flex items-center justify-between font-semibold">
        {title}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
      </p>
      <p className="mt-2 text-sm text-ink-600">{body}</p>
    </Link>
  );
}
