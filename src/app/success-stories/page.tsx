import type { Metadata } from "next";
import { Plane, Quote } from "lucide-react";
import { FinalCta } from "@/components/home/FinalCta";
import { FlagBadge } from "@/components/ui/FlagBadge";
import { Notice } from "@/components/ui/Notice";
import { PageHero } from "@/components/ui/PageHero";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { countries } from "@/data/countries";
import { stories } from "@/data/content";

export const metadata: Metadata = {
  title: "Success Stories | GoAbroad Services",
  description: "Journeys from students and professionals who planned their international education and careers with GoAbroad Services.",
  alternates: { canonical: "/success-stories" },
};

export default function StoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Success Stories"
        title="Every journey"
        accent="starts with a plan."
        crumbs={[{ label: "Success Stories" }]}
        description="Real journeys from students and professionals — the destinations they chose, the pathways they followed and what made the difference."
      />

      <section className="pb-24 sm:pb-32">
        <div className="container-x">
          <Notice className="mb-10" title="Sample stories">
            The stories below are illustrative placeholders that show the page layout. Replace them with verified student testimonials, published only with written consent.
          </Notice>
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((s) => {
              const c = countries.find((x) => x.name === s.to)!;
              return (
                <StaggerItem key={s.name} className="h-full">
                  <article className="ticket-notch flex h-full flex-col overflow-hidden rounded-3xl bg-white text-ink-900 transition-transform duration-500 hover:-translate-y-2" style={{ ["--notch-y" as string]: "38%" }}>
                    <div className="flex items-center justify-between bg-ink-900 px-6 py-4 text-white">
                      <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]">
                        <FlagBadge country={c} className="h-5 w-5" /> {c.short}
                      </span>
                      <Plane className="h-4 w-4 rotate-45 text-brand-400" />
                    </div>
                    <div className="flex items-end justify-between border-b border-dashed border-ink-900/15 px-6 py-5">
                      <div>
                        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ink-500">From</p>
                        <p className="font-display text-xl font-bold">{s.from}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ink-500">To</p>
                        <p className="font-display text-xl font-bold">{c.code}</p>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col px-6 py-6">
                      <Quote className="h-6 w-6 text-brand-500" />
                      <p className="mt-3 flex-1 font-serif text-xl italic leading-snug">{s.quote}</p>
                      <div className="mt-6">
                        <p className="font-semibold">{s.name}</p>
                        <p className="text-sm text-ink-600">{s.programme}</p>
                        <p className="mt-3 inline-flex rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-700">{s.path}</p>
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
