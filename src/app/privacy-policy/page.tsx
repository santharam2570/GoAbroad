import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Privacy Policy | GoAbroad Services", alternates: { canonical: "/privacy-policy" } };

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="How GoAbroad Services collects, uses and protects the information you share with us."
      sections={[
        { h: "Information we collect", p: "When you submit an enquiry we collect your name, highest qualification, preferred destination, primary goal, preferred intake or timeline, funding requirement and your email address or telephone number." },
        { h: "How we use it", p: "We use your information to respond to your enquiry, arrange counselling, and provide the services you request. Application documents are handled only for the purposes of your application." },
        { h: "Cookies & analytics", p: "Essential cookies keep the site working. Analytics cookies are used only with your consent, which you can change at any time via Cookie Settings in the footer." },
        { h: "Sharing", p: "We share information with universities, lenders or other parties only where needed for services you have asked us to provide, or where required by law." },
        { h: "Your rights & contact", p: `To access, correct or delete your information, contact us at ${site.email}.` },
      ]}
    />
  );
}
