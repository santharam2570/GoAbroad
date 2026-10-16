import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { FinalCta } from "@/components/home/FinalCta";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { posts } from "@/data/content";
import { site } from "@/data/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.title} | GoAbroad Services`,
    description: p.excerpt,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { type: "article", title: p.title, description: p.excerpt, publishedTime: p.date },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) notFound();
  const more = posts.filter((x) => x.slug !== p.slug).slice(0, 3);
  const ld = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.excerpt,
    datePublished: p.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
  };

  return (
    <>
      <PageHero
        eyebrow={`${p.category} · ${p.read}`}
        title={p.title}
        crumbs={[{ label: "Blog", href: "/blog" }, { label: p.category }]}
        description={p.excerpt}
      />
      <article className="bg-paper py-20 text-ink-900 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="prose-ga space-y-8 text-lg text-ink-700 lg:col-span-8">
            <p className="text-sm text-ink-500">
              Published {new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </p>
            {p.body.map((b, i) => (
              <Reveal key={i} y={16}>
                {b.h && <h2 className="mb-3 font-display text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">{b.h}</h2>}
                <p className={i === 0 ? "first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-brand-600" : undefined}>{b.p}</p>
              </Reveal>
            ))}
          </div>
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Keep reading</p>
              {more.map((m) => (
                <Link key={m.slug} href={`/blog/${m.slug}`} className="group block rounded-2xl border border-ink-900/10 bg-white p-5 transition-all hover:-translate-y-1 hover:border-brand-500/40">
                  <p className="text-xs font-semibold text-brand-600">{m.category}</p>
                  <p className="mt-1 font-display text-lg font-semibold leading-snug">{m.title}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-ink-600 group-hover:text-brand-600">
                    Read <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </aside>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      </article>
      <FinalCta />
    </>
  );
}
