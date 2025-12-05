// Worker Shortage Statistics with Citations
// All statistics are from 2024-2025 sources

export interface ShortageStatistic {
  career: string;
  icon: string;
  shortage: string;
  shortageNumber?: number;
  projection: string;
  keyFact: string;
  source: string;
  sourceUrl: string;
  year: string;
}

export const shortageStatistics: ShortageStatistic[] = [
  {
    career: "Electricians",
    icon: "&#9889;",
    shortage: "73,500 openings/year",
    shortageNumber: 73500,
    projection: "30% of union electricians retiring in next decade",
    keyFact: "70% of supervisors are baby boomers",
    source: "Bureau of Labor Statistics / McKinsey",
    sourceUrl: "https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/tradespeople-wanted-the-need-for-critical-trade-skills-in-the-us",
    year: "2024",
  },
  {
    career: "Plumbers",
    icon: "&#128679;",
    shortage: "550,000 shortage by 2027",
    shortageNumber: 550000,
    projection: "Critical shortage in residential and commercial sectors",
    keyFact: "Training takes 4-5 years via apprenticeship",
    source: "The Hill / Industry Analysis",
    sourceUrl: "https://thehill.com/changing-america/enrichment/education/4583268-labor-crisis-why-is-there-a-shortage-of-plumbers-and-electricians/",
    year: "2024",
  },
  {
    career: "HVAC Technicians",
    icon: "&#10052;",
    shortage: "110,000 current shortage",
    shortageNumber: 110000,
    projection: "37,700 openings projected each year",
    keyFact: "Data center boom driving unprecedented demand",
    source: "Bureau of Labor Statistics",
    sourceUrl: "https://www.bls.gov/ooh/construction-and-extraction/",
    year: "2024",
  },
  {
    career: "Registered Nurses",
    icon: "&#129658;",
    shortage: "350,540 shortage by 2026",
    shortageNumber: 350540,
    projection: "1.2 million new RNs needed by 2030",
    keyFact: "1 million nurses retiring by 2030",
    source: "AACN Nursing Shortage Fact Sheet",
    sourceUrl: "https://www.aacnnursing.org/news-data/fact-sheets/nursing-shortage",
    year: "2024",
  },
  {
    career: "EMTs & Paramedics",
    icon: "&#128657;",
    shortage: "36% annual turnover for EMTs",
    projection: "40,000 more personnel needed by 2030",
    keyFact: "1/3 of new hires leave within first year",
    source: "American Ambulance Association",
    sourceUrl: "https://www.jems.com/ems-management/ems-recruitment-retention/unveiling-the-national-ems-workforce-crisis/",
    year: "2024",
  },
  {
    career: "Police Officers",
    icon: "&#128110;",
    shortage: "10% average staffing deficit nationwide",
    projection: "47% increase in resignations since 2019",
    keyFact: "Major cities short 400-3,000+ officers each",
    source: "IACP 2024 Survey / PERF",
    sourceUrl: "https://www.policeforum.org/staffing2024",
    year: "2024",
  },
  {
    career: "Firefighters",
    icon: "&#128293;",
    shortage: "40,000 fewer volunteers in NY alone",
    projection: "Volunteer ranks down 40,000 in 20 years",
    keyFact: "Would cost $4.7B to replace with paid staff",
    source: "NYSenate.gov",
    sourceUrl: "https://www.nysenate.gov/newsroom/press-releases/2024/monica-r-martinez/raising-alarm-first-responder-shortages",
    year: "2024",
  },
  {
    career: "Welders",
    icon: "&#128293;",
    shortage: "330,000 needed by 2028",
    shortageNumber: 330000,
    projection: "30% of workforce retiring by 2026",
    keyFact: "6-month training, $100K+ salaries possible",
    source: "American Welding Society",
    sourceUrl: "https://weldingworkforcedata.com/",
    year: "2024",
  },
  {
    career: "Construction Workers",
    icon: "&#127959;",
    shortage: "439,000 new workers needed in 2025",
    shortageNumber: 439000,
    projection: "649,300 openings projected annually",
    keyFact: "1 in 4 workers over age 55",
    source: "Bureau of Labor Statistics / ABC",
    sourceUrl: "https://www.bls.gov/ooh/construction-and-extraction/",
    year: "2025",
  },
  {
    career: "Solar Installers",
    icon: "&#9728;",
    shortage: "Fastest growing occupation",
    projection: "22% growth rate through 2032",
    keyFact: "Data centers driving massive electricity demand",
    source: "Bureau of Labor Statistics",
    sourceUrl: "https://www.bls.gov/emp/",
    year: "2024",
  },
];

export interface NewsItem {
  title: string;
  summary: string;
  source: string;
  sourceUrl: string;
  date: string;
  category: "construction" | "healthcare" | "emergency" | "manufacturing" | "general";
}

export const newsItems: NewsItem[] = [
  {
    title: "92% of Construction Firms Can't Find Workers, Causing Project Delays",
    summary: "New AGC survey shows workforce shortages are the leading cause of project delays, with immigration enforcement impacting nearly 1/3 of firms.",
    source: "AGC of America",
    sourceUrl: "https://www.agc.org/news/2025/08/28/construction-workforce-shortages-are-leading-cause-project-delays-immigration-enforcement-affects",
    date: "Aug 2025",
    category: "construction",
  },
  {
    title: "Nvidia CEO: 'We Need Hundreds of Thousands of Electricians and Plumbers'",
    summary: "Jensen Huang says data center boom will drive unprecedented demand for skilled trades workers, with six-figure salaries becoming common.",
    source: "Fortune",
    sourceUrl: "https://fortune.com/2025/09/30/nvidia-ceo-jensen-huang-demand-for-gen-z-skilled-trade-workers-electricans-plumbers-carpenters-data-center-growth-six-figure-salaries/",
    date: "Sep 2025",
    category: "construction",
  },
  {
    title: "U.S. Short 295,800 Nurses as Healthcare Demand Outpaces Supply",
    summary: "Federal data shows 1% increase in RN supply but 3% increase in demand. One in five hospitals now reports critical nursing shortages.",
    source: "Vivian Health",
    sourceUrl: "https://www.vivian.com/community/industry-trends/nursing-shortage-by-state/",
    date: "2025",
    category: "healthcare",
  },
  {
    title: "Police Agencies Lowering Education Standards Amid Staffing Crisis",
    summary: "NYPD and Dallas PD cut college requirements as departments nationwide operate at only 91% staffing levels.",
    source: "Stateline",
    sourceUrl: "https://stateline.org/2025/09/03/police-agencies-lower-education-standards-as-staffing-shortages-persist/",
    date: "Sep 2025",
    category: "emergency",
  },
  {
    title: "California Police Staffing Hits 30-Year Low",
    summary: "PORAC report shows rural counties face the greatest challenges as response times for serious crimes exceed 36 minutes.",
    source: "PORAC",
    sourceUrl: "https://porac.org/wp-content/uploads/PORAC-2025-Police-Staffing-Issue-Brief-11.11.25.pdf",
    date: "Nov 2025",
    category: "emergency",
  },
  {
    title: "Trump Immigration Crackdown Worsening Construction Worker Shortage",
    summary: "One in three construction workers is foreign-born. ICE enforcement creating unease on building sites across the U.S.",
    source: "NPR",
    sourceUrl: "https://www.npr.org/2025/11/06/nx-s1-5575539/ice-immigration-construction-latino-workers",
    date: "Nov 2025",
    category: "construction",
  },
  {
    title: "610,000 More Nurses Planning to Leave Profession by 2027",
    summary: "After 100,000 nurses exited during pandemic, burnout continues driving workforce exodus. 56% report experiencing burnout.",
    source: "NCSBN",
    sourceUrl: "https://www.ncsbn.org/news/ncsbn-research-highlights-small-steps-toward-nursing-workforce-recovery-burnout-and-staffing-challenges-persist",
    date: "2025",
    category: "healthcare",
  },
  {
    title: "Business Roundtable Launches Major Skilled Trades Initiative",
    summary: "Major corporations collaborate to close talent gap with 20 job openings for every new skilled trades worker entering the field.",
    source: "Business Roundtable",
    sourceUrl: "https://www.businessroundtable.org/business-roundtable-launches-new-workforce-initiative-to-strengthen-talent-pipelines-for-skilled-trades",
    date: "2025",
    category: "manufacturing",
  },
];

// Headline statistics for home page
export const headlineStats = {
  totalShortage: "2+ Million",
  totalShortageDesc: "skilled workers needed by 2030",
  avgSalary: "$60-90K",
  avgSalaryDesc: "median trade salary with benefits",
  trainingTime: "6mo-2yr",
  trainingTimeDesc: "to start earning in most trades",
  jobGrowth: "6-22%",
  jobGrowthDesc: "projected growth (vs 4% average)",
};

// Career comparison data for self-directed filtering
export interface CareerComparison {
  id: string;
  name: string;
  icon: string;
  avgSalary: number;
  salaryRange: string;
  trainingMonths: number;
  trainingDesc: string;
  trainingCost: "free" | "low" | "medium" | "high";
  trainingCostDesc: string;
  workEnvironment: "indoor" | "outdoor" | "mixed";
  physicalDemand: "low" | "medium" | "high";
  jobGrowth: number;
  shortage: string;
  workSchedule: "regular" | "shifts" | "flexible" | "oncall";
}

export const careerComparisons: CareerComparison[] = [
  {
    id: "electrician",
    name: "Electrician",
    icon: "&#9889;",
    avgSalary: 65000,
    salaryRange: "$50K-$100K+",
    trainingMonths: 48,
    trainingDesc: "4-5 year apprenticeship",
    trainingCost: "free",
    trainingCostDesc: "Paid apprenticeship",
    workEnvironment: "mixed",
    physicalDemand: "medium",
    jobGrowth: 6,
    shortage: "73,500 openings/year",
    workSchedule: "regular",
  },
  {
    id: "nurse",
    name: "Registered Nurse",
    icon: "&#129658;",
    avgSalary: 86000,
    salaryRange: "$60K-$120K+",
    trainingMonths: 18,
    trainingDesc: "ABSN: 12-18 months",
    trainingCost: "medium",
    trainingCostDesc: "$30-60K for ABSN",
    workEnvironment: "indoor",
    physicalDemand: "medium",
    jobGrowth: 6,
    shortage: "350,540 by 2026",
    workSchedule: "shifts",
  },
  {
    id: "emt",
    name: "EMT/Paramedic",
    icon: "&#128657;",
    avgSalary: 42000,
    salaryRange: "$35K-$70K",
    trainingMonths: 6,
    trainingDesc: "EMT: 3-6 months",
    trainingCost: "low",
    trainingCostDesc: "$1-5K typically",
    workEnvironment: "mixed",
    physicalDemand: "high",
    jobGrowth: 5,
    shortage: "40,000 needed by 2030",
    workSchedule: "shifts",
  },
  {
    id: "hvac",
    name: "HVAC Technician",
    icon: "&#10052;",
    avgSalary: 57000,
    salaryRange: "$45K-$85K",
    trainingMonths: 36,
    trainingDesc: "3-5 year apprenticeship",
    trainingCost: "free",
    trainingCostDesc: "Paid apprenticeship",
    workEnvironment: "mixed",
    physicalDemand: "medium",
    jobGrowth: 6,
    shortage: "110,000 current",
    workSchedule: "regular",
  },
  {
    id: "plumber",
    name: "Plumber",
    icon: "&#128679;",
    avgSalary: 63000,
    salaryRange: "$45K-$100K+",
    trainingMonths: 48,
    trainingDesc: "4-5 year apprenticeship",
    trainingCost: "free",
    trainingCostDesc: "Paid apprenticeship",
    workEnvironment: "mixed",
    physicalDemand: "high",
    jobGrowth: 2,
    shortage: "550,000 by 2027",
    workSchedule: "regular",
  },
  {
    id: "firefighter",
    name: "Firefighter",
    icon: "&#128293;",
    avgSalary: 57000,
    salaryRange: "$40K-$90K",
    trainingMonths: 6,
    trainingDesc: "Academy: 3-6 months",
    trainingCost: "free",
    trainingCostDesc: "Paid by department",
    workEnvironment: "mixed",
    physicalDemand: "high",
    jobGrowth: 4,
    shortage: "Severe volunteer decline",
    workSchedule: "shifts",
  },
  {
    id: "solar",
    name: "Solar Installer",
    icon: "&#9728;",
    avgSalary: 48000,
    salaryRange: "$35K-$65K",
    trainingMonths: 3,
    trainingDesc: "1-3 months training",
    trainingCost: "low",
    trainingCostDesc: "$2-5K certification",
    workEnvironment: "outdoor",
    physicalDemand: "high",
    jobGrowth: 22,
    shortage: "Fastest growing career",
    workSchedule: "regular",
  },
  {
    id: "welder",
    name: "Welder",
    icon: "&#128293;",
    avgSalary: 55000,
    salaryRange: "$40K-$100K+",
    trainingMonths: 6,
    trainingDesc: "6-18 months training",
    trainingCost: "low",
    trainingCostDesc: "$5-15K trade school",
    workEnvironment: "indoor",
    physicalDemand: "high",
    jobGrowth: 2,
    shortage: "330,000 by 2028",
    workSchedule: "regular",
  },
  {
    id: "police",
    name: "Police Officer",
    icon: "&#128110;",
    avgSalary: 74000,
    salaryRange: "$50K-$110K",
    trainingMonths: 6,
    trainingDesc: "Academy: 4-6 months",
    trainingCost: "free",
    trainingCostDesc: "Paid by department",
    workEnvironment: "outdoor",
    physicalDemand: "high",
    jobGrowth: 3,
    shortage: "10% staffing deficit",
    workSchedule: "shifts",
  },
  {
    id: "medicalTech",
    name: "Medical Technician",
    icon: "&#129656;",
    avgSalary: 45000,
    salaryRange: "$35K-$60K",
    trainingMonths: 12,
    trainingDesc: "Certificate: 6-12 months",
    trainingCost: "low",
    trainingCostDesc: "$5-15K program",
    workEnvironment: "indoor",
    physicalDemand: "low",
    jobGrowth: 5,
    shortage: "Growing demand",
    workSchedule: "shifts",
  },
  {
    id: "religiousVocations",
    name: "Ministry/Chaplaincy",
    icon: "&#9963;",
    avgSalary: 55000,
    salaryRange: "$35K-$80K",
    trainingMonths: 24,
    trainingDesc: "M.Div: 2-3 years",
    trainingCost: "medium",
    trainingCostDesc: "Often subsidized",
    workEnvironment: "indoor",
    physicalDemand: "low",
    jobGrowth: 4,
    shortage: "Clergy shortage",
    workSchedule: "flexible",
  },
];
