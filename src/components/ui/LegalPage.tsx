import type { ReactNode } from "react";
import { PageHero } from "./PageHero";
import { Notice } from "./Notice";

export function LegalPage({ title, intro, sections }: { title: string; intro: string; sections: { h: string; p: ReactNode }[] }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} crumbs={[{ label: title }]} description={intro} />
      <section className="bg-paper py-20 text-ink-900">
        <div className="container-x max-w-4xl space-y-10">
          <Notice light title="Draft for review">
            This page is a starting template. It must be reviewed and finalised by GoAbroad Services and its legal advisers before the website collects applicant data.
          </Notice>
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-display text-2xl font-semibold">{s.h}</h2>
              <div className="mt-3 leading-relaxed text-ink-700">{s.p}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
