import type { Metadata } from "next";
import { Eye, Target } from "lucide-react";
import { FinalCta } from "@/components/home/FinalCta";
import { KeyPrinciple } from "@/components/home/KeyPrinciple";
import { Stats } from "@/components/home/Stats";
import { WhyChoose } from "@/components/home/WhyChoose";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { about, homeIntro } from "@/data/content";

export const metadata: Metadata = {
  title: "About Us | GoAbroad Services",
  description:
    "GoAbroad Services helps students and professionals turn international ambitions into achievable plans with personalised, transparent and responsible guidance.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About GoAbroad Services"
        title="Turning international ambitions"
        accent="into achievable plans."
        crumbs={[{ label: "About Us" }]}
        description={homeIntro.body[0]}
      />

      <section className="pb-24">
        <div className="container-x grid gap-4 lg:grid-cols-2">
          <Reveal className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-brand-600/40 via-ink-800 to-ink-900 p-10 sm:p-14">
            <Eye className="h-8 w-8 text-brand-300" />
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-brand-300">Our vision</p>
            <p className="mt-4 font-display text-3xl font-medium leading-snug text-white sm:text-4xl">{about.vision}</p>
          </Reveal>
          <Reveal delay={0.1} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-sun-500/25 via-ink-800 to-ink-900 p-10 sm:p-14">
            <Target className="h-8 w-8 text-sun-300" />
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-sun-300">Our mission</p>
            <p className="mt-4 font-display text-3xl font-medium leading-snug text-white sm:text-4xl">{about.mission}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink-900 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">Our commitment</p>
            <blockquote className="mt-5 font-serif text-4xl italic leading-tight sm:text-5xl">“{about.commitment}”</blockquote>
          </Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-ink-600 lg:col-span-7">
            <Reveal><p>{homeIntro.body[1]}</p></Reveal>
            <Reveal delay={0.05}><p>{homeIntro.services}</p></Reveal>
            <Reveal delay={0.1}>
              <p>
                GoAbroad Services is more than a traditional study-abroad consultancy. It is a comprehensive international education and career guidance platform, helping students, graduates, skilled professionals and families explore opportunities across the world.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <WhyChoose showVision={false} />
      <Stats />
      <KeyPrinciple />
      <FinalCta />
    </>
  );
}
