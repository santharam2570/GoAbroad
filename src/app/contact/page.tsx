import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { finalCta } from "@/data/content";
import { admissionSteps, crmStages } from "@/data/process";
import { offices, site } from "@/data/site";
import { OfficeCard } from "@/components/ui/OfficeCard";

export const metadata: Metadata = {
  title: "Contact & Counselling | GoAbroad Services",
  description: "Book a personalised counselling session with GoAbroad Services to discuss your qualifications, preferred country, budget and future goals.",
  alternates: { canonical: "/contact" },
};

const channels = [
  { icon: Phone, label: "Call us", value: site.phone, href: site.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with a counsellor", href: site.whatsapp, external: true },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Visit our offices", value: site.address, href: "#offices" },
  { icon: Clock, label: "Hours", value: site.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & Counselling"
        title="Your International Journey"
        accent="Starts Here."
        crumbs={[{ label: "Contact" }]}
        description={
          <>
            <p>{finalCta.body}</p>
            <p className="mt-4 text-white/80">{finalCta.sub}</p>
          </>
        }
      />

      <section id="enquire" className="pb-24 sm:pb-32">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <Stagger as="ul" className="space-y-3 lg:col-span-5">
            {channels.map((c) => {
              const inner = (
                <>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-300 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-white/40">{c.label}</span>
                    <span className="mt-1 block font-display text-lg text-white">{c.value}</span>
                  </span>
                </>
              );
              return (
                <StaggerItem as="li" key={c.label}>
                  {c.href ? (
                    <a href={c.href} {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-brand-400/40">
                      {inner}
                    </a>
                  ) : (
                    <div className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5">{inner}</div>
                  )}
                </StaggerItem>
              );
            })}
          </Stagger>
          <Reveal className="lg:col-span-7" delay={0.1}>
            <EnquiryForm />
          </Reveal>
        </div>
      </section>

      <section id="offices" className="scroll-mt-24 border-t border-white/10 py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our offices"
            title="Meet us in person,"
            accent="in Trichy or Coimbatore."
            description="Walk in for a personalised counselling session at our Head Office in Tiruchirappalli or our Coimbatore branch."
            className="mb-12"
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {offices.map((o, i) => (
              <Reveal key={o.id} delay={i * 0.1} className="h-full">
                <OfficeCard office={o} withMap />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink-900 sm:py-28">
        <div className="container-x">
          <SectionHeading light eyebrow="What happens next" title="After you enquire," accent="here's the plan." className="mb-12" />
          <div className="grid gap-4 md:grid-cols-3">
            {admissionSteps.slice(0, 3).map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1} className="rounded-3xl border border-ink-900/10 bg-white p-8">
                <span className="font-mono text-sm text-brand-600">Step {i + 1} · {crmStages[i]}</span>
                <h3 className="mt-3 font-display text-2xl font-semibold">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-600">{s.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
