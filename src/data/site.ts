export const site = {
  name: "GoAbroad Services",
  shortName: "GoAbroad",
  url: "https://www.goabroadservices.com",
  tagline: "Study Abroad | Work Abroad | Immigration & Permanent Residency",
  description:
    "Plan your journey to international education, overseas employment and long-term settlement with personalised guidance from GoAbroad Services.",
  phone: "+91 99527 73417",
  phoneHref: "tel:+919952773417",
  whatsapp: "https://wa.me/919952773417",
  email: "info@goabroadservices.com",
  address: "Tiruchirappalli (Head Office) · Coimbatore",
  hours: "Mon – Sat · 10:00 AM – 7:00 PM IST",
  lastReviewed: "16 October 2026",
  lastReviewedISO: "2026-10-16",
  nextReview: "16 November 2026",
};

export type Office = {
  id: string;
  city: string;
  label: string;
  lines: string[];
  street: string;
  locality: string;
  region: string;
  postalCode: string;
  phone: string;
  phoneHref: string;
  plusCode: string;
  mapsUrl: string;
  embedUrl: string;
};

function mapLinks(query: string) {
  const q = encodeURIComponent(query);
  return {
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${q}`,
    embedUrl: `https://maps.google.com/maps?q=${q}&z=16&output=embed`,
  };
}

export const offices: Office[] = [
  {
    id: "trichy",
    city: "Tiruchirappalli",
    label: "Head Office",
    lines: ["New Street, 6/75E, Williams Rd", "Othakadai, Cantonment", "Tiruchirappalli, Tamil Nadu 620001"],
    street: "New Street, 6/75E, Williams Rd, Othakadai, Cantonment",
    locality: "Tiruchirappalli",
    region: "Tamil Nadu",
    postalCode: "620001",
    phone: "+91 99527 73417",
    phoneHref: "tel:+919952773417",
    plusCode: "RM3P+JJ Tiruchirappalli, Tamil Nadu",
    ...mapLinks("RM3P+JJ Tiruchirappalli, Tamil Nadu"),
  },
  {
    id: "coimbatore",
    city: "Coimbatore",
    label: "Branch Office",
    lines: [
      "Door No 385/A6, Jayem Arcade, Kamarajar Rd",
      "Opposite RHR Hotel, Peelamedu",
      "Lakshmi Ammal Layout, Lakshmipuram",
      "Coimbatore, Tamil Nadu 641004",
    ],
    street: "Door No 385/A6, Jayem Arcade, Kamarajar Rd, opposite RHR Hotel, Peelamedu, Lakshmi Ammal Layout, Lakshmipuram",
    locality: "Coimbatore",
    region: "Tamil Nadu",
    postalCode: "641004",
    phone: "+91 99527 73417",
    phoneHref: "tel:+919952773417",
    plusCode: "22CC+6V Coimbatore, Tamil Nadu",
    ...mapLinks("22CC+6V Coimbatore, Tamil Nadu"),
  },
];

export type NavLink = { label: string; href: string; description?: string };

export const primaryNav: NavLink[] = [
  {
    label: "Home",
    href: "/",
    description:
      "Explore international education, career opportunities and global migration pathways.",
  },
  {
    label: "Study Abroad",
    href: "/study-abroad",
    description:
      "20 country guides, universities, courses, eligibility, admissions and scholarships.",
  },
  {
    label: "Work Abroad",
    href: "/work-abroad",
    description:
      "Employer-sponsored jobs, skilled worker visas, graduate work permits and job preparation.",
  },
  {
    label: "Immigration & PR",
    href: "/immigration-pr",
    description:
      "Skilled migration, permanent residence, family routes and eligibility assessments.",
  },
  {
    label: "English Test Preparation",
    href: "/english-test-preparation",
    description:
      "IELTS, PTE Academic, TOEFL iBT, Duolingo English Test and other accepted examinations.",
  },
  {
    label: "Education Loan Assistance",
    href: "/education-loan",
    description:
      "Loan eligibility, lender comparison, documentation and application support.",
  },
];

export const secondaryNav: NavLink[] = [
  { label: "Our Services", href: "/services", description: "Every service, from counselling to post-arrival support." },
  { label: "Admission Process", href: "/admission-process", description: "Our 11-step journey from counselling to departure." },
  { label: "About Us", href: "/about", description: "Our vision, mission and commitment." },
  { label: "Success Stories", href: "/success-stories", description: "Journeys from our students and professionals." },
  { label: "Blog", href: "/blog", description: "Admissions, visa updates, scholarships and careers." },
  { label: "Contact", href: "/contact", description: "Book a personalised counselling session." },
];

export const heroBadges = [
  "Personalised guidance",
  "Country-wise pathways",
  "Transparent documentation",
  "Education loan support",
];

export const keyPrinciple = {
  title: "Four journeys. Four separate processes.",
  body: "Admission, student visas, work authorisation and permanent residency are separate processes. Eligibility, permitted work hours, visa categories, fees and immigration rules can change, so each country's page is reviewed and updated regularly.",
  stages: ["Admission", "Student Visa", "Work Authorisation", "Permanent Residency"],
};
