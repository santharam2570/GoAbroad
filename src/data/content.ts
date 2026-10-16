export const faqs = [
  {
    q: "Can I study abroad after completing the 12th Standard?",
    a: "Yes, students can explore eligible undergraduate, foundation or pathway programmes. Requirements depend on the country, institution, subjects studied, marks, English proficiency and programme prerequisites.",
  },
  {
    q: "Can I study abroad with academic backlogs or a study gap?",
    a: "Some institutions may consider applicants with backlogs or study gaps. Eligibility depends on the institution, course and destination. Students should provide accurate academic records and explain their circumstances honestly.",
  },
  {
    q: "Is IELTS compulsory for every country?",
    a: "No. Accepted language tests and exemption policies vary by institution and immigration category. Some universities accept alternatives, but a university's admission policy does not automatically determine visa or professional registration requirements.",
  },
  {
    q: "Can I obtain a study visa without an education loan?",
    a: "Yes, if you can satisfy the applicable financial requirements through eligible sources of funding. An education loan is one possible funding method, not a universal requirement.",
  },
  {
    q: "Can I work while studying abroad?",
    a: "Some countries permit eligible international students to work subject to limits and conditions. Others impose stricter requirements. Students must verify their own immigration conditions before starting work.",
  },
  {
    q: "Can I get permanent residency after studying abroad?",
    a: "Possibly, depending on the destination and the applicant's circumstances. Completing a degree does not guarantee permanent residence. Additional requirements may include qualifying employment, language proficiency, residence duration, sponsorship or points-based selection.",
  },
  {
    q: "Does GoAbroad Services guarantee admission or visa approval?",
    a: "No. We provide guidance, application support and documentation assistance. Universities, lenders and immigration authorities make their own decisions.",
  },
  {
    q: "Does GoAbroad Services help with education loans?",
    a: "Yes. We help eligible applicants understand financing options, prepare documents and coordinate applications. Loan approval and disbursement remain subject to lender requirements.",
  },
  {
    q: "Can GoAbroad Services help me find overseas employment?",
    a: "We can support career preparation and explain relevant work authorisation routes. Actual recruitment or placement depends on legitimate vacancies, employer requirements, applicable licensing and work permit eligibility.",
  },
];

export const about = {
  vision:
    "To empower students and professionals to access international education, career opportunities and informed migration pathways.",
  mission:
    "To provide personalised, transparent and responsible guidance throughout the international journey, from choosing a destination and securing admission to preparing for travel, employment and future opportunities.",
  whyChoose: [
    "Personalised counselling based on individual goals.",
    "Country-wise admission and visa guidance.",
    "Support with SOPs, applications and documentation.",
    "English proficiency test preparation.",
    "Scholarship searches and education loan assistance.",
    "Guidance on post-study work and skilled employment routes.",
    "Pre-departure preparation and continued support.",
    "Clear communication about requirements, risks and realistic outcomes.",
  ],
  commitment:
    "The right course, the right destination, a properly prepared application and a clear understanding of your next steps.",
};

export const homeIntro = {
  title: "Welcome to GoAbroad Services",
  lead: "GoAbroad Services helps students and professionals turn international ambitions into achievable plans.",
  body: [
    "Whether you are looking to pursue an undergraduate degree, advance your qualifications through a master's programme, gain international work experience or explore long-term immigration opportunities, our team helps you understand your options and prepare a suitable pathway.",
    "We provide personalised counselling based on your academic background, work experience, career goals, English proficiency, financial capacity and preferred destination.",
  ],
  services:
    "Our services include university and course selection, application processing, admission assistance, scholarship guidance, education loan support, English proficiency test preparation, visa application guidance, work and career preparation, and pre-departure support.",
  counsellingFactors: [
    "Academic background",
    "Work experience",
    "Career goals",
    "English proficiency",
    "Financial capacity",
    "Preferred destination",
  ],
};

export const finalCta = {
  title: "Your International Journey Starts Here",
  body: "Whether you want to study at a world-class university, build your career overseas or explore a suitable immigration pathway, GoAbroad Services can help you understand your options and plan your next step.",
  sub: "Book a personalised counselling session to discuss your qualifications, preferred country, budget and future goals.",
};

export const formOptions = {
  qualification: ["12th Standard", "Diploma", "Bachelor's degree", "Master's degree", "Working professional"],
  goal: ["Study abroad", "Overseas employment", "Immigration or PR", "Study, work and long-term options"],
  intake: ["Next available intake", "Within 3 months", "Within 6 months", "Within 12 months", "Flexible"],
  funding: ["Self-funded", "Scholarship required", "Education loan required", "Need financial counselling"],
};

export type Post = {
  slug: string;
  title: string;
  category: "Admissions" | "Visa Updates" | "Scholarships & Loans" | "Career Planning";
  excerpt: string;
  date: string;
  read: string;
  body: { h?: string; p: string }[];
};

export const posts: Post[] = [
  {
    slug: "admission-visa-work-pr-are-separate-processes",
    title: "Admission, student visas, work rights and PR are four separate processes",
    category: "Visa Updates",
    excerpt:
      "A university offer does not guarantee a visa, a visa does not guarantee work rights, and a degree does not guarantee permanent residence. Here's why planning each stage separately matters.",
    date: "2026-10-02",
    read: "4 min read",
    body: [
      { p: "Admission, student visas, work authorisation and permanent residency are separate processes. Eligibility, permitted work hours, visa categories, fees and immigration rules can change, so each destination should be reviewed regularly." },
      { h: "Admission is decided by the institution", p: "Universities assess academic records, English proficiency, programme prerequisites and supporting documents such as SOPs, references and portfolios. A university's admission policy does not automatically determine visa or professional registration requirements." },
      { h: "The visa is decided by the immigration authority", p: "Each country has its own visa or residence category, financial evidence rules and procedures such as biometrics, medical examinations or interviews. The immigration authority makes the final decision." },
      { h: "Work rights depend on your conditions", p: "Some countries permit eligible international students to work subject to limits and conditions. Others impose stricter requirements. Students must verify their own immigration conditions before starting work." },
      { h: "PR is never automatic", p: "Permanent residency is not automatically granted after studying or working abroad. Additional requirements may include qualifying employment, language proficiency, residence duration, sponsorship or points-based selection." },
    ],
  },
  {
    slug: "understanding-education-loans-moratorium-sanction",
    title: "Education loans explained: moratorium, margin money and your sanction letter",
    category: "Scholarships & Loans",
    excerpt:
      "Education loans can differ in interest rates, processing charges, repayment periods, moratorium conditions, collateral requirements, margin money and eligible expenses.",
    date: "2026-09-18",
    read: "5 min read",
    body: [
      { p: "Your international education should have a financial plan. Tuition fees, accommodation and living expenses can be major considerations when planning an overseas education." },
      { h: "Loans are not all the same", p: "Education loans can differ in interest rates, processing charges, repayment periods, moratorium conditions, collateral requirements, margin money and eligible expenses." },
      { h: "A moratorium is not interest-free", p: "A moratorium does not necessarily mean that interest will not accrue during the period. Always check how interest is calculated during your course." },
      { h: "Approval is not automatic", p: "Loan approval is not automatic, and a university offer or visa application does not guarantee financing. Read the lender's final sanction letter and understand your repayment obligations before accepting the loan." },
      { h: "Who decides?", p: "GoAbroad Services supports the application process; the lender retains full authority over credit assessment, sanction and disbursement." },
    ],
  },
  {
    slug: "is-ielts-compulsory-choosing-the-right-english-test",
    title: "Is IELTS compulsory? Choosing the right English test for your goal",
    category: "Admissions",
    excerpt:
      "IELTS, PTE Academic, TOEFL iBT, Duolingo, OET and Cambridge English all serve different purposes. Not every test is accepted for every country, university, visa or professional registration.",
    date: "2026-09-04",
    read: "4 min read",
    body: [
      { p: "No — IELTS is not compulsory for every country. Accepted language tests and exemption policies vary by institution and immigration category." },
      { h: "Match the test to the purpose", p: "IELTS Academic is commonly used for higher education, IELTS General Training for certain migration and non-academic purposes, PTE Academic for accepted university and selected visa pathways, and OET for selected healthcare and professional registration purposes." },
      { h: "University acceptance is not visa acceptance", p: "Some universities accept alternatives, but a university's admission policy does not automatically determine visa or professional registration requirements. Requirements must be checked for the specific purpose and application date." },
      { h: "How we prepare you", p: "Our approach combines diagnostic assessment, focused practice, individual feedback and timed mock examinations, followed by a final readiness review and test booking guidance." },
    ],
  },
  {
    slug: "finding-a-job-vs-permission-to-work-abroad",
    title: "Finding a job abroad vs. getting permission to work",
    category: "Career Planning",
    excerpt:
      "Finding a job, receiving an employment offer and obtaining legal permission to work are three different things. Understanding the difference protects your career.",
    date: "2026-08-21",
    read: "5 min read",
    body: [
      { p: "Build your international career with the right preparation. Our focus is on helping candidates understand the difference between finding a job, receiving an employment offer and obtaining legal permission to work." },
      { h: "Work authorisation types are not interchangeable", p: "Employer-sponsored permits, skilled worker routes, graduate work authorisation, job-seeker permits, intra-company transfers, seasonal permits, highly skilled routes and self-employment routes are general categories. Every destination has its own eligibility requirements, restrictions and application procedures." },
      { h: "A job-seeker permit is not a work permit", p: "A job-seeker residence permit allows eligible people to look for employment for a defined period; it does not necessarily authorise employment." },
      { h: "Verify before you travel", p: "Proceed with travel and employment only after satisfying applicable legal requirements. GoAbroad Services does not promise a job, work permit or visa approval." },
    ],
  },
  {
    slug: "study-abroad-with-backlogs-or-study-gap",
    title: "Can you study abroad with backlogs or a study gap?",
    category: "Admissions",
    excerpt:
      "Some institutions may consider applicants with backlogs or study gaps. Here's how eligibility is assessed — and why honesty matters.",
    date: "2026-08-07",
    read: "3 min read",
    body: [
      { p: "Some institutions may consider applicants with backlogs or study gaps. Eligibility depends on the institution, course and destination." },
      { h: "How we assess eligibility", p: "We evaluate academic qualifications, subject prerequisites, English proficiency, relevant work experience, study gaps and any programme-specific requirements. For professional courses, we also consider whether licensing or recognition is required." },
      { h: "Honesty is essential", p: "Students should provide accurate academic records and explain their circumstances honestly. All information must be accurate and genuine; the student remains responsible for ensuring that submitted records are authentic." },
    ],
  },
  {
    slug: "post-study-work-no-universal-rule",
    title: "Post-study work: why there is no universal rule",
    category: "Visa Updates",
    excerpt:
      "From the UK Graduate route to Canada's PGWP and Australia's subclass 485, post-study options differ substantially — and change over time.",
    date: "2026-07-24",
    read: "4 min read",
    body: [
      { p: "Do not use one universal work-hour limit, post-study duration or PR timeline for every country. These conditions differ substantially and may change even within the same country." },
      { h: "Every country is different", p: "The UK Student route has defined study and work conditions, Canada's study permit and PGWP eligibility depend on specific criteria, and Australia's graduate visa depends on qualification and other requirements." },
      { h: "Use official sources", p: "Official pages such as the UK Student and Graduate route pages, Canada's study permit and PGWP pages, and Australia's Temporary Graduate visa page should be used as primary references rather than relying solely on third-party blogs." },
    ],
  },
];

export const stories = [
  { name: "Student A.", from: "Hyderabad", to: "Canada", path: "Study → Post-Graduation Work Permit", programme: "Postgraduate diploma, Supply Chain", quote: "Our counsellor explained the difference between the study permit and the PGWP from day one, so we planned the programme choice around it." },
  { name: "Student B.", from: "Pune", to: "Germany", path: "Study → Skilled employment", programme: "MSc, Mechanical Engineering", quote: "Qualification recognition, the blocked account and the national visa felt overwhelming until it was broken into a simple checklist." },
  { name: "Student C.", from: "Chennai", to: "United Kingdom", path: "Study → Graduate route", programme: "MSc, Data Science", quote: "The CAS and financial documents were reviewed line by line. Everything was consistent before we submitted." },
  { name: "Professional D.", from: "Bengaluru", to: "Ireland", path: "Work → Critical Skills Employment Permit", programme: "Software engineer", quote: "I understood the difference between a job offer and actual permission to work before I resigned from my job." },
  { name: "Student E.", from: "Kochi", to: "Australia", path: "Study → Temporary Graduate visa", programme: "Master of Nursing", quote: "The education loan process was coordinated alongside my CoE, so the funds were ready in time for the visa." },
  { name: "Student F.", from: "Ahmedabad", to: "United States", path: "Study → OPT", programme: "MS, Computer Science", quote: "Mock F-1 interviews and the I-20 checks made the visa appointment far less stressful." },
];
