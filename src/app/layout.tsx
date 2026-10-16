import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { offices, site } from "@/data/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", display: "swap" });
const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-instrument", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "GoAbroad Services | Study Abroad, Work Abroad & Immigration",
    template: "%s",
  },
  description: site.description,
  keywords: [
    "study abroad consultants",
    "overseas education",
    "student visa",
    "work abroad",
    "immigration",
    "permanent residency",
    "IELTS coaching",
    "education loan",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "GoAbroad Services | Study Abroad, Work Abroad & Immigration",
    description: site.description,
    images: [{ url: "/brand/go-logo.png", width: 1024, height: 1024, alt: "GoAbroad Services" }],
  },
  twitter: { card: "summary", title: site.name, description: site.description, images: ["/brand/go-logo.png"] },
};

export const viewport: Viewport = {
  themeColor: "#03060d",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/brand/go-logo.png`,
  description: site.description,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: offices[0].street,
    addressLocality: offices[0].locality,
    addressRegion: offices[0].region,
    postalCode: offices[0].postalCode,
    addressCountry: "IN",
  },
  department: offices.map((o) => ({
    "@type": "EducationalOrganization",
    name: `${site.name} – ${o.city} ${o.label}`,
    telephone: o.phone,
    hasMap: o.mapsUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: o.street,
      addressLocality: o.locality,
      addressRegion: o.region,
      postalCode: o.postalCode,
      addressCountry: "IN",
    },
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${bricolage.variable} ${instrument.variable}`}>
      <body className="min-h-screen overflow-x-clip">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-500 focus:px-5 focus:py-3 focus:text-white">
          Skip to content
        </a>
        <SmoothScroll>
          <ScrollProgress />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <FloatingActions />
          <CookieConsent />
        </SmoothScroll>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}
