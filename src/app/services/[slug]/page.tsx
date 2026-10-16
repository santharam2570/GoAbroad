import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { FinalCta } from "@/components/home/FinalCta";
import { ButtonLink } from "@/components/ui/Button";
import { Notice } from "@/components/ui/Notice";
import { PageHero } from "@/components/ui/PageHero";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceIcons } from "@/components/ui/icons";
import { getService, otherServices, services } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: `${s.title} | GoAbroad Services`,
    description: s.description.slice(0, 158),
    alternates: { canonical: `/services/${s.slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const Icon = serviceIcons[s.icon];
  const i = services.indexOf(s);
  const prev = services[(i - 1 + services.length) % services.length];
  const next = services[(i + 1) % services.length];
  const goal = s.slug.includes("career") ? "Overseas employment" : s.slug.includes("immigration") ? "Immigration or PR" : "Study abroad";

  return (
    <>
      <PageHero
        eyebrow={`Service ${s.letter}`}
        title={s.title}
        crumbs={[{ label: "Our Services", href: "/services" }, { label: s.title }]}
        description={s.description}
        aside={
          <div className="glass relative overflow-hidden rounded-3xl p-8">
            <div aria-hidden className="absolute -right-6 -top-10 font-display text-[11rem] font-bold leading-none text-white/[0.04]">{s.letter}</div>
            <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-[0_0_40px_-6px_rgba(0,163,230,0.9)]">
              <Icon className="h-7 w-7" />
            </span>
            <p className="relative mt-6 font-display text-2xl font-semibold text-white">{s.summary}</p>
            <a href="#enquire" className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 hover:text-brand-200">
              Enquire about this service <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        }
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="#enquire">Enquire now</ButtonLink>
          {s.related && (
            <ButtonLink href={s.related.href} variant="ghost">
              {s.related.label}
            </ButtonLink>
          )}
        </div>
      </PageHero>

      <section className="bg-paper py-20 text-ink-900 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading light eyebrow="What's included" title="A clear scope," accent="no surprises." />
          </div>
          <div className="lg:col-span-8">
            <Stagger as="ul" className="grid gap-3 sm:grid-cols-2">
              {s.includes.map((x) => (
                <StaggerItem as="li" key={x} className="flex gap-3 rounded-2xl border border-ink-900/10 bg-white p-5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500"><Check className="h-3.5 w-3.5 text-white" /></span>
                  <span className="text-ink-700">{x}</span>
                </StaggerItem>
              ))}
            </Stagger>
            {s.note && (
              <Notice light className="mt-6">
                {s.note}
              </Notice>
            )}
            <div className="mt-12">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Also available</p>
              <ul className="flex flex-wrap gap-2">
                {otherServices.slice(0, 6).map((o) => (
                  <li key={o} className="rounded-full bg-mist px-4 py-2 text-sm text-ink-700">{o.replace(/\.$/, "")}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FinalCta goal={goal} />

      <nav aria-label="More services" className="border-t border-white/10">
        <div className="container-x grid sm:grid-cols-2">
          <Link href={`/services/${prev.slug}`} className="group flex items-center gap-4 border-white/10 py-10 sm:border-r sm:pr-8">
            <ArrowLeft className="h-5 w-5 text-white/60 transition-transform group-hover:-translate-x-1" />
            <span>
              <span className="block text-xs uppercase tracking-[0.2em] text-white/40">Previous service</span>
              <span className="font-display text-xl font-semibold text-white">{prev.title}</span>
            </span>
          </Link>
          <Link href={`/services/${next.slug}`} className="group flex items-center justify-end gap-4 py-10 text-right sm:pl-8">
            <span>
              <span className="block text-xs uppercase tracking-[0.2em] text-white/40">Next service</span>
              <span className="font-display text-xl font-semibold text-white">{next.title}</span>
            </span>
            <ArrowRight className="h-5 w-5 text-white/60 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </nav>
    </>
  );
}
