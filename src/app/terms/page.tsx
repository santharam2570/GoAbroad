import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Terms of Service | GoAbroad Services", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="The terms that apply when you use this website and GoAbroad Services."
      sections={[
        { h: "Guidance, not guarantees", p: "GoAbroad Services provides guidance, application support and documentation assistance. Universities, lenders, employers and immigration authorities make their own decisions. We do not guarantee admission, visa approval, employment, work permits, education loans or permanent residence." },
        { h: "Accuracy of your information", p: "All information must be accurate and genuine. The student remains responsible for ensuring that submitted records are authentic." },
        { h: "Country information", p: "Country summaries on this website are introductory content, not a substitute for a case-specific immigration assessment. Eligibility, work rights, visa categories, fees and immigration rules can change." },
        { h: "Regulated services", p: "Regulated immigration advice and representation are provided only where legally authorised. Recruitment, immigration representation and placement services are offered only where permitted under applicable laws." },
        { h: "Education loans", p: "Approval, interest rates, collateral requirements, margins, repayment terms and disbursement are determined by the lender." },
      ]}
    />
  );
}
