import type { Metadata } from "next";
import { BlogList } from "@/components/forms/BlogList";
import { FinalCta } from "@/components/home/FinalCta";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Blog | Admissions, Visa Updates, Scholarships & Careers | GoAbroad Services",
  description: "Guides on admissions, student visa updates, scholarships, education loans and international career planning from GoAbroad Services.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights for"
        accent="your journey abroad."
        crumbs={[{ label: "Blog" }]}
        description="Admissions, visa updates, scholarships and career planning — explained clearly, with official sources first."
      />
      <section className="pb-24 sm:pb-32">
        <div className="container-x">
          <BlogList />
        </div>
      </section>
      <FinalCta />
    </>
  );
}
