import Link from "next/link";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { finalCta } from "@/data/content";
import { offices, site } from "@/data/site";

export function FinalCta({ destination, goal }: { destination?: string; goal?: string }) {
  return (
    <section id="enquire" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand-500/15 blur-[160px]" />
      </div>
      <div className="container-x relative grid gap-14 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>Book a counselling session</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl">
              Your International Journey <span className="font-serif font-normal italic text-gradient">Starts Here</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-white/65">{finalCta.body}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 leading-relaxed text-white/80">{finalCta.sub}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-10 space-y-3 text-sm">
              <li>
                <a href={site.phoneHref} className="flex items-center gap-3 text-white/80 hover:text-white">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10"><Phone className="h-4 w-4 text-brand-400" /></span>
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-white">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10"><MessageCircle className="h-4 w-4 text-brand-400" /></span>
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-white/80 hover:text-white">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10"><Mail className="h-4 w-4 text-brand-400" /></span>
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10"><Clock className="h-4 w-4 text-brand-400" /></span>
                {site.hours}
              </li>
              <li>
                <Link href="/contact#offices" className="flex items-center gap-3 text-white/80 hover:text-white">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10"><MapPin className="h-4 w-4 text-brand-400" /></span>
                  <span>
                    {offices.map((o) => `${o.city}${o.label === "Head Office" ? " (Head Office)" : ""}`).join(" · ")}
                  </span>
                </Link>
              </li>
            </ul>
          </Reveal>
        </div>
        <Reveal className="lg:col-span-7" delay={0.1}>
          <EnquiryForm defaultDestination={destination} defaultGoal={goal} />
        </Reveal>
      </div>
    </section>
  );
}
