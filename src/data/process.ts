export type FlowStep = { title: string; short: string; detail?: string; list?: string[]; note?: string };

export const admissionSteps: FlowStep[] = [
  {
    title: "Initial Enquiry & Registration",
    short: "Understand academic background, budget, preferred country and career goals.",
    detail:
      "Students provide their basic information, including qualification, year of graduation, marks, preferred course, intended intake, budget and destination. Our team records the enquiry and arranges a counselling session.",
  },
  {
    title: "Personalised Counselling",
    short: "Discuss suitable destinations, courses, intake dates and future career plans.",
    detail:
      "We discuss the student's career ambitions, available academic options and preferred lifestyle. We explain the differences between countries, education systems, programme duration, potential employment pathways and financial requirements.",
  },
  {
    title: "Eligibility Assessment",
    short: "Review marks, backlogs, study gaps, language proficiency, finances and entry criteria.",
    detail:
      "We evaluate academic qualifications, subject prerequisites, English proficiency, relevant work experience, study gaps and any programme-specific requirements. For professional courses, we also consider whether licensing or recognition is required.",
  },
  {
    title: "Country, Course & University Selection",
    short: "Shortlist suitable institutions and compare tuition, living costs and career outcomes.",
    detail:
      "We develop a shortlist based on academic suitability, tuition fees, scholarships, location, course content, accreditation and realistic financial planning. Where suitable, we present alternative options across different countries and institutions.",
  },
  {
    title: "Document Preparation",
    short: "Prepare transcripts, passport, CV, SOP, references, language scores and financial records.",
    detail:
      "We help students organise and review their documents. Depending on the application, these may include:",
    list: [
      "Valid passport and identity documents.",
      "Academic transcripts, certificates and consolidated mark sheets.",
      "English language proficiency results.",
      "Statement of Purpose (SOP), personal statement or motivation letter.",
      "Letters of Recommendation (LORs).",
      "CV or résumé and relevant employment evidence.",
      "Portfolio, entrance examination results or research proposal, where applicable.",
      "Financial evidence, sponsorship documents and loan records where required.",
    ],
    note: "All information must be accurate and genuine. The student remains responsible for ensuring that submitted records are authentic.",
  },
  {
    title: "University Applications",
    short: "Submit applications, track progress and respond to additional document requests.",
    detail:
      "We assist with completing university forms, uploading the required documents, paying applicable application fees and responding to university requests. Applications are tracked by institution, intake, deadline and current status.",
  },
  {
    title: "Admission Offer & Acceptance",
    short: "Review offer conditions, scholarships, deposits and acceptance deadlines.",
    detail:
      "When an offer arrives, we explain the course conditions, tuition deposit, scholarship terms, outstanding academic requirements and acceptance deadlines. The student decides whether to accept the offer.",
  },
  {
    title: "Education Loan & Financial Planning",
    short: "Explore eligible lenders, prepare loan applications and organise proof of funds.",
    detail:
      "We help eligible applicants explore education financing and organise the financial documents needed for university and visa processes. Loan approval, disbursement and lender terms remain subject to the lender's independent assessment.",
  },
  {
    title: "Student Visa Application",
    short: "Prepare country-specific documents, submit the application and complete biometrics or interviews where required.",
    detail:
      "We prepare a destination-specific checklist, review supporting documents, help the student understand the application form and explain the relevant appointment, biometrics, medical examination or interview requirements. The immigration authority makes the final decision.",
  },
  {
    title: "Pre-Departure & Travel",
    short: "Arrange accommodation, insurance, travel planning and the pre-departure briefing.",
    detail:
      "Before travel, students receive guidance on accommodation, budgeting, insurance, travel documents, baggage, arrival procedures, local transport and emergency contacts.",
  },
  {
    title: "Arrival & Ongoing Guidance",
    short: "Understand arrival formalities, registration obligations, student support and permitted work conditions.",
    detail:
      "We explain the importance of attending the institution, maintaining valid immigration status, following work conditions and completing any required local registration. Further assistance can be provided with career preparation and future study or work options.",
  },
];

export const crmStages = [
  "Enquiry received",
  "Counselling scheduled",
  "Profile assessed",
  "Documents pending",
  "University shortlisted",
  "Application submitted",
  "Offer received",
  "Offer accepted",
  "Loan/financial process",
  "Visa preparation",
  "Visa decision",
  "Pre-departure",
  "Joined institution",
];

export const loanSteps: FlowStep[] = [
  { title: "Student Assessment", short: "Course, destination, university, budget and loan requirement" },
  { title: "Admission Documentation", short: "Offer letter, fee structure and eligible expenses" },
  { title: "Lender & Product Shortlisting", short: "Compare eligibility, interest, security, fees and repayment" },
  { title: "Loan Application", short: "Submit lender-required forms and supporting documents" },
  { title: "Credit & Document Assessment", short: "Lender evaluates applicant and co-applicant" },
  { title: "Sanction Decision", short: "Lender communicates approval, conditions or rejection" },
  { title: "Disbursement", short: "Funds released according to lender and university requirements" },
];

export const loanIncludes = [
  "Preliminary assessment of education financing requirements.",
  "Guidance on eligible banks and non-bank lenders.",
  "Assistance identifying expenses that may qualify for financing.",
  "Guidance on co-applicant and guarantor documentation, where required.",
  "Support organising admission letters and fee schedules.",
  "Assistance preparing income, bank statement and financial records.",
  "Guidance on collateral or security documents where applicable.",
  "Coordination of loan applications and lender queries.",
  "Explanation of sanction letters, repayment terms and disbursement procedures.",
  "Guidance on arranging tuition deposits and other expenses in line with the lender's conditions.",
];

export const workSteps: FlowStep[] = [
  { title: "Candidate Registration", short: "Collect qualifications, experience, skills, language ability and preferred destination." },
  { title: "Profile Assessment", short: "Review occupation suitability, qualification recognition and potential work routes." },
  { title: "Career Preparation", short: "Prepare a country-appropriate CV, interview strategy and professional profile." },
  { title: "Job Search or Employer Matching", short: "Explore legitimate vacancies or suitable employers, where recruitment services are available." },
  { title: "Job Offer & Employer Verification", short: "Review the offer, employer details and applicable sponsorship requirements." },
  { title: "Work Authorisation Application", short: "Prepare documents and follow the relevant employer and government process." },
  { title: "Approval & Relocation", short: "Proceed with travel and employment only after satisfying applicable legal requirements." },
];

export const workAuthorisations = [
  { title: "Employer-sponsored work visa or permit", body: "Employment based on an eligible job offer and sponsorship or employer participation." },
  { title: "Skilled worker route", body: "A pathway for qualifying professionals who meet occupation, qualification, salary and other requirements." },
  { title: "Graduate work authorisation", body: "Permission available to eligible graduates following qualifying studies." },
  { title: "Job-seeker residence permit", body: "Permission for eligible people to look for employment for a defined period; it does not necessarily authorise employment." },
  { title: "Intra-company transfer", body: "Transfer of eligible employees within a qualifying international business group." },
  { title: "Seasonal or temporary work permit", body: "Permission for certain temporary, seasonal or time-limited occupations." },
  { title: "Highly skilled professional route", body: "A specialised route for people meeting defined education, salary, experience or other criteria." },
  { title: "Self-employment or business route", body: "Authorisation for eligible entrepreneurs or self-employed professionals under the applicable country's rules." },
];

export const workSupport = [
  "International CV and résumé preparation.",
  "Interview preparation and career counselling.",
  "Guidance on qualification recognition and professional licensing.",
  "Work visa category and eligibility information.",
  "Employer sponsorship and document checklists.",
  "Guidance on job offers, employment contracts and application stages.",
  "Relocation and pre-departure preparation.",
  "Post-study career pathway planning.",
];

export const immigrationPathways = [
  {
    title: "Study-to-work pathway",
    body: "Complete an eligible qualification, meet the requirements for any applicable graduate work permission, secure suitable employment and explore longer-term residence options if eligible.",
  },
  {
    title: "Skilled employment pathway",
    body: "Obtain a qualifying job offer where required, satisfy occupational and salary criteria, secure the relevant work authorisation and assess any subsequent residence or settlement options.",
  },
  {
    title: "Points-tested skilled migration",
    body: "Where available, review age, education, language ability, work experience, occupation, qualifications and other applicable factors. Meeting minimum criteria does not necessarily guarantee selection.",
  },
  {
    title: "State, regional or provincial nomination",
    body: "Certain countries offer nomination or regional routes for eligible applicants who meet the relevant programme requirements.",
  },
  {
    title: "Family-based immigration",
    body: "Certain countries allow eligible family members to sponsor relatives, spouses or partners subject to relationship, sponsorship and other conditions.",
  },
  {
    title: "Highly skilled or specialist routes",
    body: "Certain countries offer specialised pathways for people meeting criteria related to advanced skills, qualifications, research, professional achievements or salary.",
  },
];

export const immigrationProcess = [
  "Initial profile assessment.",
  "Review of the destination country's current immigration rules.",
  "Preliminary eligibility and pathway assessment.",
  "Qualification recognition and English proficiency planning.",
  "Identification of required employment, financial and personal documents.",
  "Preparation of a pathway-specific application checklist.",
  "Application coordination and response to document requests, where included in the service.",
  "Guidance on next steps following the authority's decision.",
];

export const englishTests = [
  { test: "IELTS Academic", purpose: "Higher education and selected professional purposes", areas: "Academic reading, writing, listening, speaking" },
  { test: "IELTS General Training", purpose: "Certain migration and non-academic purposes", areas: "Everyday and workplace English, reading, writing, listening, speaking" },
  { test: "PTE Academic", purpose: "Accepted university and selected visa pathways", areas: "Computer-based speaking, writing, reading and listening" },
  { test: "TOEFL iBT", purpose: "Academic admissions and other accepted uses", areas: "Academic English and integrated language skills" },
  { test: "Duolingo English Test", purpose: "Universities that accept the test", areas: "Adaptive reading, writing, listening and speaking" },
  { test: "OET", purpose: "Selected healthcare and professional registration purposes", areas: "Healthcare-related English" },
  { test: "Cambridge English qualifications", purpose: "Institutions and professional uses that accept them", areas: "Language proficiency and communication" },
];

export const englishMethodology = [
  "Initial English proficiency assessment.",
  "Personalised study plan and target score.",
  "Module-wise coaching and practice.",
  "Writing correction and speaking feedback.",
  "Timed mock tests and performance analysis.",
  "Final readiness review and test booking guidance.",
];
