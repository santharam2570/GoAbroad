export type Region = "Europe" | "North America" | "Asia-Pacific" | "Middle East";

export type Country = {
  slug: string;
  name: string;
  short: string;
  code: string;
  region: Region;
  focus: string[];
  overview: string;
  admissions: string;
  visaLabel: string;
  visa: string;
  work: string;
  postStudy: string;
  immigration: string;
  support: string;
  resources: { label: string; url: string }[];
  seoTitle: string;
  seoDescription: string;
  coords: [number, number];
  flag: { colors: string[]; dir: "h" | "v" | "c" };
};

export const countries: Country[] = [
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    short: "UK",
    code: "GB",
    region: "Europe",
    focus: ["Study", "Skilled employment", "Settlement pathways"],
    overview:
      "Popular fields include business, management, computer science, healthcare, engineering, finance and law. Students commonly apply for bachelor's, master's and doctoral programmes. Applications may be made directly to universities or through UCAS for many undergraduate courses.",
    admissions:
      "Academic transcripts, English proficiency evidence where required, references, personal statement or course-specific documents.",
    visaLabel: "Student visa",
    visa: "Usually the Student route, supported by a Confirmation of Acceptance for Studies (CAS), financial evidence and other applicable requirements.",
    work: "Eligible students may work within their visa conditions. Skilled Worker sponsorship and the Graduate route are separate pathways.",
    postStudy:
      "The Graduate route and Skilled Worker sponsorship are separate pathways from the Student route, each with its own conditions.",
    immigration:
      "Potential routes include Skilled Worker and qualifying settlement routes, subject to their specific conditions.",
    support:
      "Course selection, applications, CAS preparation, financial-document checks, visa guidance, scholarship and loan assistance.",
    resources: [
      { label: "UK Student visa", url: "https://www.gov.uk/student-visa" },
      { label: "Skilled Worker visa", url: "https://www.gov.uk/skilled-worker-visa" },
      { label: "Graduate visa", url: "https://www.gov.uk/graduate-visa" },
    ],
    seoTitle: "Study in UK from India | Admissions, Student Visa & Work Options",
    seoDescription:
      "Study in the United Kingdom with GoAbroad Services: UCAS and direct applications, CAS preparation, Student route visa guidance, Graduate route and Skilled Worker pathways.",
    coords: [51.5072, -0.1276],
    flag: { colors: ["#012169", "#FFFFFF", "#C8102E"], dir: "v" },
  },
  {
    slug: "united-states",
    name: "United States",
    short: "USA",
    code: "US",
    region: "North America",
    focus: ["Universities", "STEM", "Research", "Career development"],
    overview:
      "Suitable for students seeking bachelor's, master's, doctoral and research programmes in technology, business, medicine-related fields, engineering and sciences.",
    admissions:
      "Academic records, English tests where required, essays, recommendations and programme-specific tests or prerequisites.",
    visaLabel: "Student visa",
    visa: "F-1 is a common academic student classification. The process generally involves admission to an authorised institution, an I-20, SEVIS requirements, the DS-160, a visa interview where applicable and financial evidence.",
    work: "Eligible F-1 students may qualify for on-campus employment, CPT or OPT. STEM OPT extensions require eligibility under the applicable rules.",
    postStudy:
      "Eligible F-1 students may qualify for OPT. STEM OPT extensions require eligibility under the applicable rules.",
    immigration:
      "Possible employment-based routes include H-1B and certain employment-based immigrant categories. Qualification and sponsorship do not guarantee a visa or green card.",
    support:
      "University shortlisting, application essays, financial planning, I-20 documentation guidance and interview preparation.",
    resources: [
      { label: "Study in the States", url: "https://studyinthestates.dhs.gov/" },
      { label: "USCIS – Working in the US", url: "https://www.uscis.gov/working-in-the-united-states" },
    ],
    seoTitle: "Study in USA from India | University Applications & F-1 Visa Guidance",
    seoDescription:
      "Study in the United States: university shortlisting, application essays, I-20 documentation, F-1 visa interview preparation, CPT, OPT and STEM OPT guidance.",
    coords: [40.7128, -74.006],
    flag: { colors: ["#3C3B6E", "#FFFFFF", "#B22234"], dir: "h" },
  },
  {
    slug: "canada",
    name: "Canada",
    short: "Canada",
    code: "CA",
    region: "North America",
    focus: ["Public colleges", "Universities", "Skilled migration"],
    overview:
      "Popular options include computer science, business analytics, engineering, healthcare, supply chain and research programmes. Programme and institution eligibility are especially important when evaluating post-study work options.",
    admissions:
      "Academic records, language proficiency, programme prerequisites and a letter of acceptance.",
    visaLabel: "Student permit",
    visa: "Apply under the applicable study permit rules. A Provincial or Territorial Attestation Letter may be required unless an exemption applies.",
    work: "Eligible students can work under the applicable study permit conditions. Certain graduates may qualify for a Post-Graduation Work Permit (PGWP).",
    postStudy:
      "Certain graduates may qualify for a Post-Graduation Work Permit (PGWP). Programme and institution eligibility are especially important when evaluating post-study work options.",
    immigration:
      "Potential pathways include Express Entry programmes and Provincial Nominee Programmes, depending on eligibility and selection rules.",
    support:
      "DLI and programme checks, admission applications, permit documentation, funding and post-study pathway guidance.",
    resources: [
      { label: "Study in Canada (IRCC)", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html" },
      { label: "Immigrate to Canada", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada.html" },
    ],
    seoTitle: "Study in Canada from India | Admissions, Study Permits & Work Options",
    seoDescription:
      "Study in Canada: DLI and programme checks, study permit documentation, Provincial Attestation Letters, PGWP eligibility, Express Entry and PNP pathway guidance.",
    coords: [43.6532, -79.3832],
    flag: { colors: ["#D80621", "#FFFFFF", "#D80621"], dir: "v" },
  },
  {
    slug: "australia",
    name: "Australia",
    short: "Australia",
    code: "AU",
    region: "Asia-Pacific",
    focus: ["Professional degrees", "Research", "Skilled work"],
    overview:
      "Students can explore business, IT, engineering, health sciences, education, hospitality and research.",
    admissions:
      "Academic eligibility, English proficiency, Genuine Student assessment where applicable and financial planning.",
    visaLabel: "Student visa",
    visa: "Subclass 500 is the main student visa. Applicants generally need a Confirmation of Enrolment (CoE), evidence of funds and Overseas Student Health Cover, alongside other applicable criteria.",
    work: "Student work rights depend on visa conditions. Eligible graduates may qualify for a Temporary Graduate visa (subclass 485).",
    postStudy:
      "Eligible graduates may qualify for a Temporary Graduate visa (subclass 485), which depends on qualification and other requirements.",
    immigration:
      "Potential routes include points-tested skilled migration, state or territory nomination and employer-sponsored visas.",
    support:
      "Course and institution selection, CoE guidance, financial documents, visa preparation and skilled pathway assessment.",
    resources: [
      { label: "Department of Home Affairs", url: "https://immi.homeaffairs.gov.au/" },
      { label: "Study Australia", url: "https://www.studyaustralia.gov.au/" },
    ],
    seoTitle: "Study in Australia from India | Universities & Student Visa Assistance",
    seoDescription:
      "Study in Australia: course and institution selection, CoE guidance, Subclass 500 student visa preparation, Temporary Graduate visa and skilled migration pathways.",
    coords: [-33.8688, 151.2093],
    flag: { colors: ["#012169", "#FFFFFF", "#E4002B"], dir: "v" },
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    short: "New Zealand",
    code: "NZ",
    region: "Asia-Pacific",
    focus: ["Education", "Research", "Skilled employment"],
    overview:
      "Popular fields include IT, engineering, agriculture, business, environmental sciences and health-related programmes.",
    admissions: "Academic eligibility, English requirements and programme-specific documents.",
    visaLabel: "Student visa",
    visa: "Apply for the appropriate student visa with an eligible offer of place, funds and health or character evidence as applicable.",
    work: "Eligible students may have limited work rights. Qualifying graduates may apply for a Post Study Work Visa.",
    postStudy: "Qualifying graduates may apply for a Post Study Work Visa.",
    immigration:
      "Skilled Migrant Category and eligible occupation-based work-to-residence routes may be relevant.",
    support:
      "University selection, student visa documentation, financial planning and post-study options.",
    resources: [
      { label: "Immigration New Zealand", url: "https://www.immigration.govt.nz/" },
      { label: "Study with New Zealand", url: "https://www.studywithnewzealand.govt.nz/" },
    ],
    seoTitle: "Study in New Zealand | Admissions & Post-Study Options",
    seoDescription:
      "Study in New Zealand: university selection, student visa documentation, Post Study Work Visa and Skilled Migrant Category pathway guidance.",
    coords: [-36.8485, 174.7633],
    flag: { colors: ["#012169", "#FFFFFF", "#C8102E"], dir: "h" },
  },
  {
    slug: "ireland",
    name: "Ireland",
    short: "Ireland",
    code: "IE",
    region: "Europe",
    focus: ["Technology", "Pharmaceuticals", "Finance", "Business"],
    overview:
      "Ireland offers opportunities in computing, data analytics, business, life sciences, engineering and finance.",
    admissions:
      "Academic qualifications, English evidence and programme-specific requirements.",
    visaLabel: "Student immigration",
    visa: "Eligible non-EEA students normally need the relevant study permission; long-term study often involves a qualifying programme and the applicable immigration registration.",
    work: "Eligible students may work under Stamp 2 conditions. Qualifying graduates may be eligible for the Third Level Graduate Programme under Stamp 1G.",
    postStudy:
      "Qualifying graduates may be eligible for the Third Level Graduate Programme under Stamp 1G.",
    immigration:
      "Employment Permit routes, including Critical Skills and General Employment Permits, may lead to longer-term residence if conditions are met.",
    support:
      "Applications, English preparation, financial planning and graduate employment pathway guidance.",
    resources: [
      { label: "Irish Immigration Service", url: "https://www.irishimmigration.ie/" },
      { label: "Employment Permits", url: "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/" },
    ],
    seoTitle: "Study in Ireland | University Admissions & Graduate Opportunities",
    seoDescription:
      "Study in Ireland: university applications, Stamp 2 student conditions, Stamp 1G Third Level Graduate Programme and Critical Skills Employment Permit guidance.",
    coords: [53.3498, -6.2603],
    flag: { colors: ["#169B62", "#FFFFFF", "#FF883E"], dir: "v" },
  },
  {
    slug: "germany",
    name: "Germany",
    short: "Germany",
    code: "DE",
    region: "Europe",
    focus: ["Engineering", "Research", "Manufacturing", "Technology"],
    overview:
      "Germany is an important destination for technical education, research and selected programmes taught in English or German. Some public institutions offer low or no general tuition fees, but exceptions and semester charges apply.",
    admissions:
      "Qualification recognition, programme prerequisites, language requirements and, where necessary, preparatory studies.",
    visaLabel: "Student visa",
    visa: "The process can include university admission, proof of financing, health insurance and a national visa or applicable residence procedure.",
    work: "International students can work within the statutory conditions applicable to their residence status.",
    postStudy: "Eligible graduates may obtain time to seek qualified employment.",
    immigration:
      "Eligible graduates may obtain time to seek qualified employment. The EU Blue Card or other skilled-worker residence permits may be available when their criteria are met.",
    support:
      "University and language-pathway selection, qualification checks, blocked-account guidance and visa preparation.",
    resources: [
      { label: "Study in Germany", url: "https://www.study-in-germany.de/" },
      { label: "Make it in Germany", url: "https://www.make-it-in-germany.com/" },
    ],
    seoTitle: "Study in Germany | University Applications & Visa Guidance",
    seoDescription:
      "Study in Germany: university and language-pathway selection, qualification checks, blocked-account guidance, national visa preparation and EU Blue Card pathways.",
    coords: [52.52, 13.405],
    flag: { colors: ["#111111", "#DD0000", "#FFCE00"], dir: "h" },
  },
  {
    slug: "france",
    name: "France",
    short: "France",
    code: "FR",
    region: "Europe",
    focus: ["Business schools", "Hospitality", "Fashion", "Engineering"],
    overview:
      "France offers university degrees, grandes écoles, business programmes, art and design courses, and research opportunities.",
    admissions:
      "Direct university or school applications, academic credentials, portfolio or entrance requirements and French or English proficiency.",
    visaLabel: "Student visa",
    visa: "Depending on the programme and duration, applicants may need a long-stay student visa, Campus France procedures and financial evidence.",
    work: "Eligible students can work within the legal limits. Certain graduates may qualify for job-search or business-creation residence options.",
    postStudy:
      "Certain graduates may qualify for job-search or business-creation residence options.",
    immigration:
      "Skilled employment permits, including eligible Talent Passport categories, may be relevant. French language ability can be important for employment and long-term integration.",
    support:
      "Course applications, Campus France preparation, language planning, funding and visa assistance.",
    resources: [
      { label: "Campus France", url: "https://www.campusfrance.org/en" },
      { label: "France-Visas", url: "https://france-visas.gouv.fr/en/" },
    ],
    seoTitle: "Study in France from India | Admissions, Campus France & Student Visa",
    seoDescription:
      "Study in France: grandes écoles and university applications, Campus France preparation, long-stay student visa guidance and Talent Passport pathways.",
    coords: [48.8566, 2.3522],
    flag: { colors: ["#0055A4", "#FFFFFF", "#EF4135"], dir: "v" },
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    short: "Netherlands",
    code: "NL",
    region: "Europe",
    focus: ["Business", "Engineering", "Data", "International education"],
    overview:
      "The Netherlands offers research universities and universities of applied sciences, with many English-taught programmes.",
    admissions:
      "Diploma equivalence, subject prerequisites, English proficiency and programme-specific criteria.",
    visaLabel: "Student residence",
    visa: "The institution generally plays a key role in applying for the appropriate student residence permit.",
    work: "Student employment has specific rules, including requirements that may apply to the employer. Eligible graduates can explore the orientation-year permit.",
    postStudy: "Eligible graduates can explore the orientation-year permit.",
    immigration:
      "Skilled employment may be possible through recognised-sponsor routes, including the highly skilled migrant scheme.",
    support:
      "Institution selection, application documents, residence permit guidance and career pathway planning.",
    resources: [
      { label: "Study in NL", url: "https://www.studyinnl.org/" },
      { label: "IND", url: "https://ind.nl/en" },
    ],
    seoTitle: "Study in the Netherlands | English-Taught Degrees & Residence Permits",
    seoDescription:
      "Study in the Netherlands: research universities and universities of applied sciences, student residence permit guidance, orientation-year permit and highly skilled migrant routes.",
    coords: [52.3676, 4.9041],
    flag: { colors: ["#AE1C28", "#FFFFFF", "#21468B"], dir: "h" },
  },
  {
    slug: "sweden",
    name: "Sweden",
    short: "Sweden",
    code: "SE",
    region: "Europe",
    focus: ["Sustainability", "Engineering", "Technology", "Research"],
    overview:
      "Sweden is suited to students interested in innovation, sustainability, engineering, life sciences and advanced research.",
    admissions:
      "University application, academic credentials, English proficiency and any programme-specific prerequisites.",
    visaLabel: "Student residence",
    visa: "Non-EU/EEA students usually need a residence permit for qualifying longer-term studies and must satisfy maintenance and other requirements.",
    work: "Work rights depend on the applicable residence status and rules.",
    postStudy:
      "Eligible graduates may be able to obtain a residence permit to seek work or explore business opportunities.",
    immigration:
      "Eligible graduates may be able to obtain a residence permit to seek work or explore business opportunities. Qualifying employment may support a work-permit route.",
    support:
      "Programme shortlisting, application management, funding plans and residence documentation.",
    resources: [
      { label: "Study in Sweden", url: "https://studyinsweden.se/" },
      { label: "Swedish Migration Agency", url: "https://www.migrationsverket.se/" },
    ],
    seoTitle: "Study in Sweden | Sustainability, Engineering & Residence Permit Guidance",
    seoDescription:
      "Study in Sweden: programme shortlisting, university applications, residence permit documentation, post-study job-search permits and work-permit routes.",
    coords: [59.3293, 18.0686],
    flag: { colors: ["#006AA7", "#FECC00", "#006AA7"], dir: "h" },
  },
  {
    slug: "italy",
    name: "Italy",
    short: "Italy",
    code: "IT",
    region: "Europe",
    focus: ["Architecture", "Design", "Business", "Engineering"],
    overview:
      "Italy provides public and private university options, arts and design education, and scholarship opportunities that vary by institution and region.",
    admissions:
      "Academic eligibility, programme prerequisites and Italian or English language evidence.",
    visaLabel: "Student visa",
    visa: "Eligible non-EU students typically need the relevant study visa, documentation of admission, finances, accommodation and applicable health coverage.",
    work: "Student residence holders may work within the permitted limits.",
    postStudy:
      "Eligible graduates may be able to change to an appropriate employment status when legal conditions are satisfied.",
    immigration:
      "Eligible graduates may be able to change to an appropriate employment status when legal conditions are satisfied.",
    support:
      "University applications, scholarship searches, visa checklists and accommodation planning.",
    resources: [
      { label: "Study in Italy", url: "https://studyinitaly.esteri.it/" },
      { label: "Visto per l'Italia", url: "https://vistoperitalia.esteri.it/" },
    ],
    seoTitle: "Study in Italy | Design, Architecture & Student Visa Guidance",
    seoDescription:
      "Study in Italy: public and private university applications, scholarship searches, study visa checklists, accommodation planning and post-study employment status guidance.",
    coords: [41.9028, 12.4964],
    flag: { colors: ["#009246", "#FFFFFF", "#CE2B37"], dir: "v" },
  },
  {
    slug: "spain",
    name: "Spain",
    short: "Spain",
    code: "ES",
    region: "Europe",
    focus: ["Business", "Tourism", "Renewable energy", "Design"],
    overview:
      "Spain offers undergraduate, postgraduate and research programmes in Spanish and English, depending on the institution.",
    admissions:
      "Qualification recognition, academic transcripts, language evidence and programme-specific requirements.",
    visaLabel: "Student visa",
    visa: "Longer courses generally require the applicable study authorisation or visa, proof of resources and other supporting documents.",
    work: "Eligible students can work subject to the conditions of their authorisation and applicable rules.",
    postStudy:
      "Eligible graduates may explore job-search or entrepreneurship residence options.",
    immigration:
      "Eligible graduates may explore job-search or entrepreneurship residence options, while qualifying employment may provide another route.",
    support:
      "University applications, document preparation, language planning, funding and immigration pathway guidance.",
    resources: [
      { label: "Ministry of Education", url: "https://www.educacionfpydeportes.gob.es/" },
      { label: "Migrations Portal", url: "https://www.inclusion.gob.es/web/migraciones/" },
    ],
    seoTitle: "Study in Spain | University Admissions & Study Visa Guidance",
    seoDescription:
      "Study in Spain: Spanish and English-taught programmes, qualification recognition, study authorisation and visa guidance, job-search and entrepreneurship residence options.",
    coords: [40.4168, -3.7038],
    flag: { colors: ["#AA151B", "#F1BF00", "#AA151B"], dir: "h" },
  },
  {
    slug: "singapore",
    name: "Singapore",
    short: "Singapore",
    code: "SG",
    region: "Asia-Pacific",
    focus: ["Technology", "Finance", "Logistics", "Business"],
    overview:
      "Singapore is a regional education and business hub, particularly for technology, finance, logistics, engineering and management.",
    admissions:
      "Academic results, English proficiency and institution-specific selection requirements.",
    visaLabel: "Student's Pass",
    visa: "International students generally need admission to an eligible institution and the relevant Student's Pass procedure.",
    work: "Work during study is limited to eligible students and approved circumstances. Graduates generally need the relevant work authorisation to take employment.",
    postStudy: "Graduates generally need the relevant work authorisation to take employment.",
    immigration:
      "Work passes may include Employment Pass or S Pass routes, subject to eligibility and employer requirements. Permanent residence is a separate application.",
    support:
      "Institution selection, application documents, Student's Pass guidance and employment pathway counselling.",
    resources: [
      { label: "ICA Singapore", url: "https://www.ica.gov.sg/" },
      { label: "Ministry of Manpower", url: "https://www.mom.gov.sg/" },
    ],
    seoTitle: "Study in Singapore | Admissions & Student's Pass Guidance",
    seoDescription:
      "Study in Singapore: institution selection, application documents, Student's Pass guidance, Employment Pass and S Pass pathway counselling.",
    coords: [1.3521, 103.8198],
    flag: { colors: ["#EF3340", "#FFFFFF"], dir: "h" },
  },
  {
    slug: "united-arab-emirates",
    name: "United Arab Emirates",
    short: "UAE",
    code: "AE",
    region: "Middle East",
    focus: ["Business", "Aviation", "Logistics", "Hospitality", "Technology"],
    overview:
      "The UAE offers international branch campuses, private universities, professional courses and industry-focused programmes in cities such as Dubai and Abu Dhabi.",
    admissions:
      "Academic records, English proficiency and institution-specific entry criteria.",
    visaLabel: "Student residence",
    visa: "Sponsorship and residence procedures depend on the institution, emirate and applicable immigration arrangements.",
    work: "A student residence status does not automatically authorise unrestricted employment. The relevant work permit and employer approvals must be checked.",
    postStudy:
      "Employment residence and eligible long-term residence categories may be available under separate criteria.",
    immigration:
      "Employment residence, eligible long-term residence categories and family sponsorship may be available under separate criteria. There is no single universal PR route equivalent to Canada's.",
    support:
      "University selection, student residence guidance, financial planning and career-oriented course counselling.",
    resources: [
      { label: "UAE Government – Education", url: "https://u.ae/en/information-and-services/education" },
      { label: "MOHRE", url: "https://www.mohre.gov.ae/" },
    ],
    seoTitle: "Study in the UAE | Dubai & Abu Dhabi Admissions and Residence Guidance",
    seoDescription:
      "Study in the UAE: international branch campuses and private universities in Dubai and Abu Dhabi, student residence guidance and career-oriented course counselling.",
    coords: [25.2048, 55.2708],
    flag: { colors: ["#00732F", "#FFFFFF", "#111111"], dir: "h" },
  },
  {
    slug: "japan",
    name: "Japan",
    short: "Japan",
    code: "JP",
    region: "Asia-Pacific",
    focus: ["Robotics", "Engineering", "Technology", "Research"],
    overview:
      "Japan offers programmes in engineering, robotics, business, science and technology, with instruction in Japanese or English depending on the course.",
    admissions:
      "Academic qualifications, language proficiency and possible entrance examinations.",
    visaLabel: "Student visa",
    visa: "A qualifying institution commonly supports the Certificate of Eligibility process before the student applies for a visa.",
    work: "Students generally need permission for activities outside their permitted status before undertaking part-time work, subject to applicable conditions and limits.",
    postStudy:
      "Graduates may change to an appropriate work residence status if they secure qualifying employment.",
    immigration:
      "Graduates may change to an appropriate work residence status if they secure qualifying employment. Certain highly skilled professionals may qualify for preferential residence or PR rules.",
    support:
      "University applications, language pathway advice, visa documents and career planning.",
    resources: [
      { label: "Study in Japan", url: "https://www.studyinjapan.go.jp/en/" },
      { label: "Immigration Services Agency", url: "https://www.moj.go.jp/isa/" },
    ],
    seoTitle: "Study in Japan | University Admissions & Certificate of Eligibility Guidance",
    seoDescription:
      "Study in Japan: engineering, robotics and technology programmes, Certificate of Eligibility and student visa guidance, and work residence pathways.",
    coords: [35.6762, 139.6503],
    flag: { colors: ["#FFFFFF", "#BC002D"], dir: "c" },
  },
  {
    slug: "south-korea",
    name: "South Korea",
    short: "South Korea",
    code: "KR",
    region: "Asia-Pacific",
    focus: ["Technology", "Electronics", "Engineering", "Business"],
    overview:
      "South Korea offers university and graduate programmes, including technology, manufacturing, business and Korean-language pathways.",
    admissions:
      "Academic records, financial evidence and Korean or English language qualifications as required.",
    visaLabel: "Student visa",
    visa: "D-2 is commonly used for degree studies; D-4 is used for certain language and training programmes. The correct category depends on the course.",
    work: "Part-time work requires compliance with the applicable immigration permissions and conditions.",
    postStudy: "Graduates may explore job-seeking status and eligible employment visas.",
    immigration:
      "Graduates may explore job-seeking status and eligible employment visas. Longer-term residence depends on the relevant route.",
    support:
      "University shortlisting, language-test guidance, documentation and career pathway counselling.",
    resources: [
      { label: "Study in Korea", url: "https://www.studyinkorea.go.kr/" },
      { label: "HiKorea", url: "https://www.hikorea.go.kr/" },
    ],
    seoTitle: "Study in South Korea | D-2 & D-4 Student Visa and Admission Guidance",
    seoDescription:
      "Study in South Korea: university and Korean-language pathways, D-2 and D-4 student visa guidance, job-seeking status and employment visa counselling.",
    coords: [37.5665, 126.978],
    flag: { colors: ["#FFFFFF", "#CD2E3A", "#0047A0"], dir: "h" },
  },
  {
    slug: "finland",
    name: "Finland",
    short: "Finland",
    code: "FI",
    region: "Europe",
    focus: ["Education", "Clean technology", "IT", "Research"],
    overview:
      "Finland offers research universities and universities of applied sciences, including English-taught programmes in technology, business and selected professional fields.",
    admissions: "Academic eligibility, programme-specific tests and English evidence.",
    visaLabel: "Student residence",
    visa: "Non-EU students usually need a residence permit for qualifying degree studies, along with required financial and insurance evidence.",
    work: "Student work rights depend on the applicable permit conditions.",
    postStudy:
      "Eligible graduates may apply for an appropriate job-search or business-starting permit.",
    immigration:
      "Eligible graduates may apply for an appropriate job-search or business-starting permit. Employment-based residence may be possible after securing qualifying work.",
    support:
      "Application assistance, scholarship searches, financial planning and residence documentation.",
    resources: [
      { label: "Study in Finland", url: "https://www.studyinfinland.fi/" },
      { label: "Finnish Immigration Service", url: "https://migri.fi/en/home" },
    ],
    seoTitle: "Study in Finland | English-Taught Degrees & Residence Permit Guidance",
    seoDescription:
      "Study in Finland: research universities and universities of applied sciences, residence permit documentation, scholarship searches and job-search permit guidance.",
    coords: [60.1699, 24.9384],
    flag: { colors: ["#FFFFFF", "#002F6C", "#FFFFFF"], dir: "h" },
  },
  {
    slug: "denmark",
    name: "Denmark",
    short: "Denmark",
    code: "DK",
    region: "Europe",
    focus: ["Engineering", "Renewable energy", "Life sciences", "Business"],
    overview:
      "Denmark provides research and professional education programmes, including selected English-taught degrees.",
    admissions: "Qualification recognition, subject requirements and language proficiency.",
    visaLabel: "Student residence",
    visa: "Non-EU students generally need the appropriate residence and work permit for an eligible programme.",
    work: "Student work rights and limits depend on the permit.",
    postStudy:
      "Eligible graduates may qualify for a job-seeking period or other residence option under the rules applicable to their programme and permit.",
    immigration:
      "Eligible graduates may qualify for a job-seeking period or other residence option under the rules applicable to their programme and permit. Skilled employment requires the appropriate authorisation.",
    support:
      "Course selection, application preparation, financial documentation and post-study planning.",
    resources: [
      { label: "Study in Denmark", url: "https://studyindenmark.dk/" },
      { label: "New to Denmark", url: "https://www.nyidanmark.dk/en-GB" },
    ],
    seoTitle: "Study in Denmark | Admissions, Residence Permits & Post-Study Planning",
    seoDescription:
      "Study in Denmark: research and professional education programmes, residence and work permit guidance, job-seeking period and skilled employment planning.",
    coords: [55.6761, 12.5683],
    flag: { colors: ["#C8102E", "#FFFFFF", "#C8102E"], dir: "v" },
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    short: "Switzerland",
    code: "CH",
    region: "Europe",
    focus: ["Finance", "Hospitality", "Research", "Engineering"],
    overview:
      "Switzerland offers academic and applied education programmes, including specialist schools for hospitality and business.",
    admissions: "Academic qualifications, programme requirements and language evidence.",
    visaLabel: "Student residence",
    visa: "Non-EU students normally need the relevant visa and cantonal residence authorisation for long-term study.",
    work: "Student employment is restricted by specific conditions; applicable waiting periods and cantonal approvals should be checked.",
    postStudy:
      "Employment permits are subject to strict rules, especially for non-EU/EFTA nationals.",
    immigration:
      "Employment permits are subject to strict rules, especially for non-EU/EFTA nationals. Permanent residence is governed by separate eligibility and residence requirements.",
    support:
      "Institution selection, language planning, visa documentation and realistic employment pathway assessment.",
    resources: [
      { label: "Study in Switzerland", url: "https://www.studyinswitzerland.plus/" },
      { label: "State Secretariat for Migration", url: "https://www.sem.admin.ch/sem/en/home.html" },
    ],
    seoTitle: "Study in Switzerland | Hospitality, Finance & Student Visa Guidance",
    seoDescription:
      "Study in Switzerland: academic and applied programmes, hospitality and business schools, cantonal residence and visa documentation, realistic employment pathway assessment.",
    coords: [47.3769, 8.5417],
    flag: { colors: ["#DA291C", "#FFFFFF", "#DA291C"], dir: "v" },
  },
  {
    slug: "poland",
    name: "Poland",
    short: "Poland",
    code: "PL",
    region: "Europe",
    focus: ["Engineering", "IT", "Business", "Health sciences"],
    overview:
      "Poland offers public and private universities, with English-taught programmes in selected academic and professional disciplines.",
    admissions:
      "Academic certificates, qualification recognition, language evidence and programme-specific requirements.",
    visaLabel: "Student visa",
    visa: "Applicants generally need the relevant national visa and, for longer stays, the applicable residence process.",
    work: "Work rights depend on the student's status and applicable rules; some full-time students may benefit from exemptions.",
    postStudy:
      "Graduates may qualify for specific job-search or employment-related residence options.",
    immigration:
      "Graduates may qualify for specific job-search or employment-related residence options. EU long-term residence and other settlement routes have separate requirements.",
    support:
      "University selection, admission applications, visa documentation, scholarship searches and post-study planning.",
    resources: [
      { label: "Study in Poland", url: "https://study.gov.pl/" },
      { label: "Office for Foreigners", url: "https://www.gov.pl/web/udsc-en" },
    ],
    seoTitle: "Study in Poland | English-Taught Programmes & National Visa Guidance",
    seoDescription:
      "Study in Poland: public and private universities, English-taught programmes, national visa and residence process guidance, scholarship searches and post-study planning.",
    coords: [52.2297, 21.0122],
    flag: { colors: ["#FFFFFF", "#DC143C"], dir: "h" },
  },
];

export const regions: Region[] = ["Europe", "North America", "Asia-Pacific", "Middle East"];

export const origin = { name: "India", coords: [28.6139, 77.209] as [number, number] };

export function getCountry(slug: string) {
  return countries.find((c) => c.slug === slug);
}

export const countryGuideSections = [
  { id: "study", n: "01", title: "Study in", generic: "Education system, qualification levels, undergraduate and postgraduate study, research degrees and available intakes." },
  { id: "courses", n: "02", title: "Courses & Universities", generic: "Popular fields, university selection criteria, entry requirements, accreditation and course comparisons." },
  { id: "admission-requirements", n: "03", title: "Admission Requirements", generic: "Academic qualifications, English language scores, SOP, LOR, CV, portfolio and other programme-specific criteria." },
  { id: "application-process", n: "04", title: "Admission Application Process", generic: "Application portals, deadlines, documents, application fees, offers, deposits and acceptance." },
  { id: "costs", n: "05", title: "Tuition Fees & Living Costs", generic: "Indicative tuition and living expenses, accommodation, insurance, travel and personal budgeting." },
  { id: "funding", n: "06", title: "Scholarships & Education Loans", generic: "Eligible funding opportunities, university awards, lender requirements and financial documentation." },
  { id: "student-visa", n: "07", title: "Student Visa Process", generic: "Visa category, application stages, funds, supporting documents, biometrics and interview requirements." },
  { id: "work-while-studying", n: "08", title: "Work While Studying", generic: "Student work conditions, restrictions, permitted activities and official guidance." },
  { id: "post-study", n: "09", title: "Post-Study Work Options", generic: "Graduate routes, eligibility, duration, application timing and limitations." },
  { id: "work-permits", n: "10", title: "Work Permits & Employment", generic: "Employer sponsorship, skilled worker categories, occupation requirements and job preparation." },
  { id: "immigration", n: "11", title: "Immigration & Permanent Residency", generic: "Potential qualifying pathways, requirements, settlement rules and relevant official resources." },
  { id: "family", n: "12", title: "Dependants & Family", generic: "Family eligibility, application procedures, financial requirements and work rights where applicable." },
  { id: "faq", n: "13", title: "Frequently Asked Questions", generic: "Answers to common questions about study, visas, work, funding and settlement." },
  { id: "apply", n: "14", title: "Apply with GoAbroad Services", generic: "Country-specific enquiry form, appointment booking and next steps." },
];

export const maintainedRecord = [
  "Student visa or residence permit category.",
  "Official government application link.",
  "Current work rights during study.",
  "Current graduate work route and eligibility.",
  "Main employment visa categories.",
  "Immigration and settlement routes.",
  "Language test acceptance requirements.",
  "Financial evidence and insurance requirements.",
  "Dependant rules.",
  "Application fees and government processing-time links.",
  "Date of last review and next review date.",
];
