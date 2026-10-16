import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/content";

export function FaqSection({ items = faqs, title = "Frequently asked", accent = "questions." }: { items?: { q: string; a: string }[]; title?: string; accent?: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <section className="relative bg-paper py-24 text-ink-900 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeading light eyebrow="FAQ" title={title} accent={accent} description="Straight answers about study, visas, work, funding and settlement." />
            <div className="mt-8">
              <ButtonLink href="/contact" variant="light">
                Ask a counsellor
              </ButtonLink>
            </div>
          </div>
        </div>
        <div className="lg:col-span-8">
          <Accordion items={items} light />
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}
