export type Service = {
  slug: string;
  letter: string;
  title: string;
  icon: string;
  summary: string;
  description: string;
  includes: string[];
  note?: string;
  related?: { label: string; href: string };
};

export const services: Service[] = [
  {
    slug: "study-abroad-counselling",
    letter: "A",
    title: "Study Abroad Counselling",
    icon: "compass",
    summary: "Select the right country, course, university and intake.",
    description:
      "Personalised guidance to help students select a suitable country, course, university and intake based on their academic qualifications, financial situation and career goals. We compare course structures, eligibility, estimated costs and available funding options.",
    includes: [
      "Country, course, university and intake selection",
      "Review of academic qualifications and career goals",
      "Financial situation and budget planning",
      "Course structure comparisons",
      "Eligibility and estimated cost comparisons",
      "Available funding options",
    ],
    related: { label: "Explore 20 study destinations", href: "/study-abroad" },
  },
  {
    slug: "university-admission-assistance",
    letter: "B",
    title: "University Admission Assistance",
    icon: "graduation",
    summary: "End-to-end application support from shortlist to acceptance.",
    description:
      "End-to-end application support, including institution shortlisting, application form preparation, academic document checks, SOP guidance, LOR coordination, offer follow-up and acceptance guidance. We also help students understand conditional offers and outstanding requirements.",
    includes: [
      "Institution shortlisting",
      "Application form preparation",
      "Academic document checks",
      "SOP guidance and LOR coordination",
      "Offer follow-up and acceptance guidance",
      "Conditional offers and outstanding requirements explained",
    ],
    related: { label: "See our 11-step admission process", href: "/admission-process" },
  },
  {
    slug: "english-test-preparation",
    letter: "C",
    title: "IELTS & English Proficiency Test Preparation",
    icon: "languages",
    summary: "IELTS, PTE Academic, TOEFL iBT, Duolingo and more.",
    description:
      "Structured preparation for IELTS Academic, IELTS General Training, PTE Academic, TOEFL iBT, Duolingo English Test and other accepted assessments. Training may include diagnostic testing, reading, writing, listening, speaking, mock tests and score-improvement strategies.",
    includes: [
      "Diagnostic testing",
      "Reading and writing practice",
      "Listening and speaking practice",
      "Timed mock tests",
      "Score-improvement strategies",
      "Verification of accepted examinations before recommending a test",
    ],
    note: "Test acceptance varies by university, programme, visa category and immigration route. We verify which examinations are accepted before recommending a test.",
    related: { label: "View English test preparation", href: "/english-test-preparation" },
  },
  {
    slug: "student-visa-assistance",
    letter: "D",
    title: "Student Visa Assistance",
    icon: "stamp",
    summary: "Country-specific checklists, document review and interview prep.",
    description:
      "Country-specific application guidance, supporting document checklists, financial evidence review, application-form assistance and interview preparation where applicable. We help students understand common documentation errors and the importance of consistent, truthful information.",
    includes: [
      "Country-specific application guidance",
      "Supporting document checklists",
      "Financial evidence review",
      "Application-form assistance",
      "Interview preparation where applicable",
      "Guidance on common documentation errors",
    ],
    note: "Visa decisions, processing times and approvals are controlled by the relevant authorities.",
  },
  {
    slug: "education-loan-assistance",
    letter: "E",
    title: "Education Loan Assistance",
    icon: "wallet",
    summary: "Lender comparisons, documentation and application coordination.",
    description:
      "We support eligible students in exploring suitable education financing for tuition, living costs and other eligible expenses. Our assistance includes lender comparisons, documentation checklists, co-applicant preparation, application coordination and guidance on loan sanction and disbursement requirements.",
    includes: [
      "Financing for tuition, living costs and other eligible expenses",
      "Lender comparisons",
      "Documentation checklists",
      "Co-applicant preparation",
      "Application coordination",
      "Loan sanction and disbursement guidance",
    ],
    note: "Approval, interest rates, collateral requirements, margins, repayment terms and disbursement are determined by the lender.",
    related: { label: "Check your education loan options", href: "/education-loan" },
  },
  {
    slug: "scholarships-funding-guidance",
    letter: "F",
    title: "Scholarships & Funding Guidance",
    icon: "award",
    summary: "University, merit, need-based and external funding opportunities.",
    description:
      "We identify potentially relevant university scholarships, merit awards, need-based assistance and eligible government or external funding opportunities. Students receive guidance on eligibility, deadlines, supporting documents and scholarship applications. Funding is not guaranteed.",
    includes: [
      "University scholarships",
      "Merit awards",
      "Need-based assistance",
      "Government or external funding opportunities",
      "Eligibility, deadlines and supporting documents",
      "Scholarship application guidance",
    ],
    note: "Funding is not guaranteed.",
  },
  {
    slug: "overseas-career-work-permit-guidance",
    letter: "G",
    title: "Overseas Career & Work Permit Guidance",
    icon: "briefcase",
    summary: "Work authorisation, sponsorship and international job preparation.",
    description:
      "We explain applicable work authorisation categories, employer sponsorship, graduate employment routes, occupation requirements and professional registration. We can assist with international CV preparation, interview coaching and job-search planning.",
    includes: [
      "Work authorisation categories explained",
      "Employer sponsorship and graduate employment routes",
      "Occupation requirements and professional registration",
      "International CV preparation",
      "Interview coaching",
      "Job-search planning",
    ],
    note: "Any recruitment or placement service must operate within the applicable laws and licensing requirements.",
    related: { label: "Explore Work Abroad", href: "/work-abroad" },
  },
  {
    slug: "immigration-pr-guidance",
    letter: "H",
    title: "Immigration & Permanent Residency Guidance",
    icon: "home",
    summary: "Skilled migration, employment residence and family routes.",
    description:
      "We help clients understand relevant skilled migration, employment-based residence, family sponsorship and qualifying permanent residence options. Support may include preliminary eligibility reviews, qualification recognition guidance, English-test planning and documentation checklists.",
    includes: [
      "Skilled migration options",
      "Employment-based residence and family sponsorship",
      "Qualifying permanent residence options",
      "Preliminary eligibility reviews",
      "Qualification recognition guidance",
      "English-test planning and documentation checklists",
    ],
    note: "Regulated immigration advice and representation will be provided only where legally authorised.",
    related: { label: "Explore Immigration & PR", href: "/immigration-pr" },
  },
  {
    slug: "pre-departure-post-arrival-support",
    letter: "I",
    title: "Pre-Departure & Post-Arrival Support",
    icon: "plane",
    summary: "Accommodation, travel, insurance and arrival guidance.",
    description:
      "Practical guidance covering accommodation, budgeting, travel preparation, insurance, local registration, campus orientation and understanding student responsibilities in the destination country.",
    includes: [
      "Accommodation guidance",
      "Budgeting and travel preparation",
      "Insurance",
      "Local registration",
      "Campus orientation",
      "Understanding student responsibilities",
    ],
  },
];

export const otherServices = [
  "SOP, personal statement, motivation letter and CV assistance.",
  "Academic document verification and application review.",
  "Research degree and PhD application support.",
  "Study gap and academic progression counselling.",
  "University scholarship and fee-deposit guidance.",
  "Accommodation and airport-transfer assistance where available.",
  "Dependant and family visa information, where eligible.",
  "Qualification evaluation and credential recognition guidance.",
  "International interview and career preparation.",
  "Student application tracking and deadline reminders.",
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
