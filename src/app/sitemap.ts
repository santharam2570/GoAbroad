import type { MetadataRoute } from "next";
import { countries } from "@/data/countries";
import { posts } from "@/data/content";
import { services } from "@/data/services";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date(site.lastReviewedISO);
  const staticRoutes = [
    "",
    "/study-abroad",
    "/work-abroad",
    "/immigration-pr",
    "/english-test-preparation",
    "/education-loan",
    "/admission-process",
    "/services",
    "/about",
    "/success-stories",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];
  return [
    ...staticRoutes.map((r) => ({ url: `${site.url}${r}`, lastModified: now, changeFrequency: "weekly" as const, priority: r === "" ? 1 : 0.8 })),
    ...countries.map((c) => ({ url: `${site.url}/study-abroad/${c.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: new Date(p.date), changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
