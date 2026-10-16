import { Hero } from "@/components/home/Hero";
import { CountryMarquee } from "@/components/home/CountryMarquee";
import { Intro } from "@/components/home/Intro";
import { Pillars } from "@/components/home/Pillars";
import { KeyPrinciple } from "@/components/home/KeyPrinciple";
import { DestinationGrid } from "@/components/home/DestinationGrid";
import { ProcessScroller } from "@/components/home/ProcessScroller";
import { ServiceList } from "@/components/home/ServiceList";
import { Stats } from "@/components/home/Stats";
import { WhyChoose } from "@/components/home/WhyChoose";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Marquee } from "@/components/ui/Marquee";
import { otherServices } from "@/data/services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CountryMarquee />
      <Intro />
      <Pillars />
      <KeyPrinciple />
      <ProcessScroller />

      <section className="relative bg-paper py-24 text-ink-900 sm:py-32">
        <div className="container-x">
          <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              light
              eyebrow="Our 20 international study destinations"
              title="Choose your destination."
              accent="We'll map the route."
              description="Each destination has its own detailed guide covering study, admissions, student visas, work opportunities and immigration/PR."
            />
            <ButtonLink href="/study-abroad" variant="light" className="shrink-0">
              All country guides
            </ButtonLink>
          </div>
          <DestinationGrid withFilters={false} />
        </div>
      </section>

      <section className="relative py-24 sm:py-32">
        <div className="container-x">
          <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Complete list of GoAbroad Services" title="Everything you need," accent="under one roof." />
            <ButtonLink href="/services" variant="ghost" className="shrink-0">
              Explore all services
            </ButtonLink>
          </div>
          <ServiceList />
        </div>
        <div className="mt-16">
          <Marquee duration={70}>
            {otherServices.map((s) => (
              <span key={s} className="mx-6 flex items-center gap-6 whitespace-nowrap font-display text-2xl text-white/35 sm:text-3xl">
                {s.replace(/\.$/, "")}
                <span className="h-2 w-2 rounded-full bg-brand-500" />
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      <Stats />
      <WhyChoose />
      <FaqSection />
      <FinalCta />
    </>
  );
}
