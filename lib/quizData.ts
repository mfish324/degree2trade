// Career path types
export type CareerPath =
  | "electrician"
  | "nurse"
  | "emt"
  | "hvac"
  | "plumber"
  | "firefighter"
  | "solar"
  | "welder"
  | "police"
  | "medicalTech"
  | "religiousVocations"
  | "military"
  | "mechanic";

// Quiz question interface
export interface QuizOption {
  text: string;
  scores: Partial<Record<CareerPath, number>>;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

// Career path info interface
export interface CareerPathInfo {
  title: string;
  salary: string;
  training: string;
  growth: string;
  icon: string;
  tagline: string;
  description: string;
  degreeAdvantages: Record<string, string>;
}

// Quiz questions array
export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What type of work environment appeals to you most?",
    options: [
      {
        text: "Outdoors or on construction sites",
        scores: { electrician: 2, plumber: 2, solar: 3, hvac: 1, welder: 2 },
      },
      {
        text: "Hospitals or clinical settings",
        scores: { nurse: 3, medicalTech: 3, emt: 1 },
      },
      {
        text: "Emergency scenes and high-pressure situations",
        scores: { emt: 3, firefighter: 3, police: 2, military: 2 },
      },
      {
        text: "Workshop or technical facility",
        scores: { welder: 2, hvac: 2, electrician: 1, medicalTech: 1, mechanic: 3 },
      },
      {
        text: "Public safety and community settings",
        scores: { police: 2, firefighter: 2, emt: 1 },
      },
    ],
  },
  {
    id: 2,
    question: "How do you prefer to solve problems?",
    options: [
      {
        text: "Hands-on troubleshooting and fixing",
        scores: { electrician: 2, plumber: 2, hvac: 2, welder: 1, mechanic: 3 },
      },
      {
        text: "Following medical protocols and procedures",
        scores: { nurse: 2, emt: 2, medicalTech: 2 },
      },
      {
        text: "Making quick decisions in crisis situations",
        scores: { emt: 2, firefighter: 2, police: 2, military: 2 },
      },
      {
        text: "Through counseling, listening, and supporting others",
        scores: { religiousVocations: 3, nurse: 1 },
      },
      {
        text: "Technical analysis and systematic approaches",
        scores: { medicalTech: 2, electrician: 1, hvac: 1, solar: 2, mechanic: 2 },
      },
    ],
  },
  {
    id: 3,
    question: "What kind of physical work are you comfortable with?",
    options: [
      {
        text: "Heavy lifting and physically demanding work",
        scores: { firefighter: 2, plumber: 2, electrician: 1, welder: 2, military: 2, mechanic: 1 },
      },
      {
        text: "Moderate physical activity throughout the day",
        scores: { nurse: 2, emt: 1, hvac: 1, solar: 1, police: 1, mechanic: 2 },
      },
      {
        text: "Mix of physical and sedentary work",
        scores: { medicalTech: 2, religiousVocations: 1, police: 1 },
      },
      {
        text: "Mostly standing and walking",
        scores: { nurse: 1, medicalTech: 1, religiousVocations: 1 },
      },
      {
        text: "Varied - different every day",
        scores: { emt: 2, firefighter: 1, police: 2, electrician: 1, military: 1 },
      },
    ],
  },
  {
    id: 4,
    question: "What drives you most in your ideal career?",
    options: [
      {
        text: "Strong earning potential and financial stability",
        scores: { electrician: 2, plumber: 2, nurse: 1, hvac: 1 },
      },
      {
        text: "Hands-on problem solving and seeing tangible results",
        scores: { electrician: 1, plumber: 1, hvac: 2, welder: 2, solar: 1, mechanic: 3 },
      },
      {
        text: "Spiritual growth and helping others find meaning",
        scores: { religiousVocations: 4 },
      },
      {
        text: "Building and fixing essential infrastructure",
        scores: { electrician: 1, plumber: 2, hvac: 1, solar: 2, welder: 1 },
      },
      {
        text: "Running my own business someday",
        scores: { electrician: 1, plumber: 1, hvac: 1, welder: 1, mechanic: 2 },
      },
    ],
  },
  {
    id: 5,
    question: "How do you feel about being on-call or working irregular hours?",
    options: [
      {
        text: "I thrive on it - keeps things exciting",
        scores: { emt: 2, firefighter: 2, police: 1, military: 2 },
      },
      {
        text: "Acceptable as part of the job",
        scores: { nurse: 1, electrician: 1, plumber: 1, hvac: 1 },
      },
      {
        text: "Prefer regular hours with some flexibility",
        scores: { medicalTech: 2, solar: 1, welder: 1, mechanic: 2 },
      },
      {
        text: "Strong preference for predictable schedule",
        scores: { medicalTech: 1, welder: 1, religiousVocations: 1 },
      },
    ],
  },
  {
    id: 6,
    question: "What kind of training timeline works for you?",
    options: [
      {
        text: "Quick entry - 2-8 weeks to get started",
        scores: { emt: 2 },
      },
      {
        text: "Short-term - 3-6 months of focused training",
        scores: { firefighter: 2, police: 1, solar: 1, military: 2 },
      },
      {
        text: "Medium-term - 6-18 months",
        scores: { hvac: 2, welder: 2, police: 1, medicalTech: 1, mechanic: 2 },
      },
      {
        text: "Longer commitment - 2-4 years for full credentials",
        scores: { nurse: 2, medicalTech: 1, religiousVocations: 2 },
      },
      {
        text: "Apprenticeship model - earn while I learn",
        scores: { electrician: 3, plumber: 3 },
      },
    ],
  },
  {
    id: 7,
    question: "How important is entrepreneurship potential to you?",
    options: [
      {
        text: "Very important - I want to own my own business",
        scores: { electrician: 2, plumber: 2, hvac: 2, welder: 1, mechanic: 2 },
      },
      {
        text: "Somewhat important - nice to have the option",
        scores: { solar: 1, hvac: 1, electrician: 1, mechanic: 1 },
      },
      {
        text: "Not important - I prefer stable employment",
        scores: { nurse: 1, police: 1, firefighter: 1, medicalTech: 1, military: 2 },
      },
      {
        text: "I prefer mission-driven or nonprofit work",
        scores: { religiousVocations: 2, emt: 1, firefighter: 1 },
      },
    ],
  },
  {
    id: 8,
    question: "How comfortable are you working with technology and modern equipment?",
    options: [
      {
        text: "Very comfortable - I enjoy learning new systems and technology",
        scores: { electrician: 2, hvac: 1, medicalTech: 2 },
      },
      {
        text: "Comfortable with tech, but I prefer hands-on mechanical work",
        scores: { mechanic: 2, plumber: 1, hvac: 1, welder: 1 },
      },
      {
        text: "I prefer work that doesn't require much technology",
        scores: { plumber: 1, welder: 1, firefighter: 1 },
      },
      {
        text: "Technology is a tool, but people are my focus",
        scores: { nurse: 1, emt: 1, religiousVocations: 2 },
      },
    ],
  },
  {
    id: 9,
    question: "What kind of impact do you want to make?",
    options: [
      {
        text: "Solving technical problems that keep society running",
        scores: { electrician: 2, plumber: 2, hvac: 2, solar: 1, mechanic: 2 },
      },
      {
        text: "Saving lives through medical intervention",
        scores: { nurse: 2, emt: 3, medicalTech: 1 },
      },
      {
        text: "Protecting communities and keeping people safe",
        scores: { firefighter: 2, police: 3, military: 2 },
      },
      {
        text: "Supporting people through life's challenges and transitions",
        scores: { religiousVocations: 3, nurse: 1 },
      },
      {
        text: "Building and maintaining critical infrastructure",
        scores: { electrician: 1, plumber: 1, welder: 2, solar: 2 },
      },
      {
        text: "Providing essential healthcare services",
        scores: { nurse: 1, medicalTech: 2, emt: 1 },
      },
    ],
  },
  {
    id: 10,
    question: "How do you feel about continued education and licensing?",
    options: [
      {
        text: "Fine with ongoing education and certifications",
        scores: { nurse: 2, electrician: 1, hvac: 1, medicalTech: 1, mechanic: 1 },
      },
      {
        text: "Prefer clear licensing paths with defined endpoints",
        scores: { plumber: 1, electrician: 1, police: 1, firefighter: 1 },
      },
      {
        text: "Open to it if required for advancement",
        scores: { emt: 1, solar: 1, welder: 1, religiousVocations: 1 },
      },
      {
        text: "Prefer minimal ongoing requirements",
        scores: { welder: 1 },
      },
    ],
  },
  {
    id: 11,
    question: "What's your risk tolerance for physical danger?",
    options: [
      {
        text: "High - I'm comfortable with dangerous situations",
        scores: { firefighter: 3, police: 2, emt: 1, welder: 1, military: 3 },
      },
      {
        text: "Moderate - some risk is acceptable",
        scores: { electrician: 1, plumber: 1, emt: 1, police: 1 },
      },
      {
        text: "Low - I prefer safer work environments",
        scores: { medicalTech: 2, nurse: 1, hvac: 1, religiousVocations: 1 },
      },
      {
        text: "Very low - safety is a top priority",
        scores: { medicalTech: 1, religiousVocations: 1 },
      },
    ],
  },
  {
    id: 12,
    question: "How do you feel about working directly with people vs. systems?",
    options: [
      {
        text: "Strong preference for people-focused work",
        scores: { nurse: 2, religiousVocations: 2, emt: 1, police: 1 },
      },
      {
        text: "Balance of both - some interaction, some independent work",
        scores: { firefighter: 1, hvac: 1, electrician: 1, medicalTech: 1 },
      },
      {
        text: "Prefer working with systems and equipment",
        scores: { welder: 2, solar: 1, medicalTech: 1, plumber: 1, mechanic: 3 },
      },
      {
        text: "Like both equally depending on the task",
        scores: { emt: 1, electrician: 1, hvac: 1, police: 1 },
      },
    ],
  },
  {
    id: 13,
    question: "What type of workplace culture appeals to you?",
    options: [
      {
        text: "Tight-knit team with strong bonds",
        scores: { firefighter: 2, police: 1, emt: 1, military: 2 },
      },
      {
        text: "Collaborative but with independence",
        scores: { electrician: 1, plumber: 1, hvac: 1, nurse: 1, solar: 1 },
      },
      {
        text: "Mostly solo work with occasional teamwork",
        scores: { welder: 2, plumber: 1, hvac: 1, mechanic: 2 },
      },
      {
        text: "Faith community with shared mission",
        scores: { religiousVocations: 3 },
      },
      {
        text: "Clinical or professional healthcare environment",
        scores: { nurse: 1, medicalTech: 2, emt: 1 },
      },
    ],
  },
  {
    id: 14,
    question: "Which work schedule sounds most appealing?",
    options: [
      {
        text: "24-hour shifts with multiple days off",
        scores: { firefighter: 3, emt: 2 },
      },
      {
        text: "12-hour shifts (day or night)",
        scores: { nurse: 2, medicalTech: 1, police: 1 },
      },
      {
        text: "Standard business hours (8-5)",
        scores: { medicalTech: 1, welder: 1, solar: 1, mechanic: 1 },
      },
      {
        text: "Flexible hours based on community needs",
        scores: { religiousVocations: 2, electrician: 1, plumber: 1, hvac: 1 },
      },
      {
        text: "Rotating shifts or patrol-style work",
        scores: { police: 2, emt: 1 },
      },
    ],
  },
  {
    id: 15,
    question: "How do you feel about structure, discipline, and serving a larger mission?",
    options: [
      {
        text: "I thrive with clear structure and chain of command",
        scores: { military: 3, police: 2, firefighter: 1 },
      },
      {
        text: "I value serving my country and national defense",
        scores: { military: 4, police: 1, firefighter: 1 },
      },
      {
        text: "I prefer more independence in how I do my work",
        scores: { electrician: 1, plumber: 1, hvac: 1, welder: 1, mechanic: 2 },
      },
      {
        text: "I want to serve others but prefer civilian roles",
        scores: { nurse: 1, emt: 1, religiousVocations: 1, firefighter: 1 },
      },
      {
        text: "Benefits like healthcare, housing, and education assistance are important to me",
        scores: { military: 3, police: 1, firefighter: 1 },
      },
    ],
  },
];

// Career paths data
export const careerPaths: Record<CareerPath, CareerPathInfo> = {
  electrician: {
    title: "Electrician",
    salary: "$60,000-$90,000",
    training: "4-5 years apprenticeship",
    growth: "7%",
    icon: "⚡",
    tagline: "Power the world with skilled electrical work",
    description:
      "Electricians install, maintain, and repair electrical systems in homes, businesses, and industrial facilities. With growing demand for electrical infrastructure and smart technology, this trade offers excellent job security and earning potential.",
    degreeAdvantages: {
      Engineering:
        "Your engineering background gives you advanced understanding of electrical systems, circuits, and technical documentation that accelerates your apprenticeship.",
      Business:
        "Your business degree prepares you to run your own electrical contracting company, manage projects, and handle client relationships professionally.",
      Physics:
        "Your physics education provides deep understanding of electrical theory, making complex troubleshooting and system design second nature.",
      Any: "Your degree demonstrates analytical thinking and commitment to learning - skills that help you master electrical codes and advance quickly in the trade.",
    },
  },
  nurse: {
    title: "Registered Nurse",
    salary: "$77,000-$95,000",
    training: "16-24 months ABSN",
    growth: "6%",
    icon: "🏥",
    tagline: "Provide compassionate care that saves lives",
    description:
      "Registered nurses provide patient care, educate patients about health conditions, and provide advice and emotional support. Accelerated BSN programs allow degree holders to become nurses in as little as 16 months.",
    degreeAdvantages: {
      Biology:
        "Your biology background gives you a strong foundation in anatomy, physiology, and medical sciences - you'll excel in nursing school.",
      Psychology:
        "Your psychology training enhances patient communication, mental health assessment, and therapeutic relationships - critical nursing skills.",
      Any: "Your bachelor's degree qualifies you for accelerated BSN programs, cutting years off the traditional nursing path while your college experience aids patient education.",
    },
  },
  emt: {
    title: "EMT / Paramedic",
    salary: "$38,000-$55,000 (EMT) / $50,000-$75,000 (Paramedic)",
    training: "2-6 months (EMT) / 1-2 years (Paramedic)",
    growth: "5%",
    icon: "🚑",
    tagline: "Be first on scene when seconds count",
    description:
      "EMTs and Paramedics respond to emergency calls, performing medical services and transporting patients to medical facilities. This is often a stepping stone to other healthcare or emergency services careers.",
    degreeAdvantages: {
      Biology:
        "Your biology education gives you strong foundations in anatomy and physiology, helping you excel in emergency medical training.",
      Psychology:
        "Your psychology background helps you manage patients in crisis, communicate with distressed families, and handle the emotional demands of emergency work.",
      Any: "Your degree demonstrates learning ability and critical thinking - essential for making split-second medical decisions under pressure.",
    },
  },
  hvac: {
    title: "HVAC Technician",
    salary: "$55,000-$80,000",
    training: "6 months-2 years",
    growth: "6%",
    icon: "❄️",
    tagline: "Keep the world comfortable year-round",
    description:
      "HVAC technicians install, maintain, and repair heating, ventilation, air conditioning, and refrigeration systems. Growing demand for energy-efficient systems creates excellent opportunities.",
    degreeAdvantages: {
      Engineering:
        "Your engineering background helps you understand thermodynamics, system design, and energy efficiency at a deeper level.",
      Business:
        "Your business training prepares you to run an HVAC company, manage service contracts, and build customer relationships.",
      Any: "Your analytical skills from college help you diagnose complex system issues and understand technical documentation quickly.",
    },
  },
  plumber: {
    title: "Plumber",
    salary: "$60,000-$95,000",
    training: "4-5 years apprenticeship",
    growth: "3%",
    icon: "🔧",
    tagline: "Build the systems that make modern life possible",
    description:
      "Plumbers install and repair pipes that carry water, gas, and waste. With aging infrastructure nationwide, demand remains strong. Many plumbers eventually start their own businesses.",
    degreeAdvantages: {
      Engineering:
        "Your engineering education helps you understand fluid dynamics, system design, and complex commercial plumbing layouts.",
      Business:
        "Your business degree is invaluable for running a plumbing company - from estimating jobs to managing employees and finances.",
      Any: "Your degree shows you can master complex material - plumbing codes and system design will come more easily with your academic background.",
    },
  },
  firefighter: {
    title: "Firefighter",
    salary: "$52,000-$75,000",
    training: "3-6 months academy",
    growth: "4%",
    icon: "🚒",
    tagline: "Run toward danger to protect your community",
    description:
      "Firefighters respond to fires, accidents, and medical emergencies. Beyond firefighting, many departments provide EMT services, hazmat response, and community education.",
    degreeAdvantages: {
      Chemistry:
        "Your chemistry background helps you understand fire behavior, hazardous materials, and the science behind suppression techniques.",
      Psychology:
        "Your psychology training aids in crisis communication, supporting trauma victims, and managing team dynamics under pressure.",
      Any: "Your degree gives you an edge in promotions - many fire departments prefer or require degrees for leadership positions.",
    },
  },
  solar: {
    title: "Solar Technician",
    salary: "$45,000-$65,000",
    training: "2-6 months",
    growth: "22% - Much faster than average",
    icon: "☀️",
    tagline: "Install the future of clean energy",
    description:
      "Solar technicians install, maintain, and repair solar panel systems. This is one of the fastest-growing occupations, driven by the expansion of renewable energy.",
    degreeAdvantages: {
      "Environmental Science":
        "Your environmental background gives you deep understanding of renewable energy systems and sustainability principles.",
      Engineering:
        "Your engineering education helps you understand electrical systems, structural considerations, and system optimization.",
      Any: "Your degree demonstrates technical aptitude and learning ability - valuable as solar technology continues to evolve rapidly.",
    },
  },
  welder: {
    title: "Welder",
    salary: "$45,000-$70,000",
    training: "7 months-2 years",
    growth: "2%",
    icon: "🔥",
    tagline: "Join metal and build the structures of tomorrow",
    description:
      "Welders use high heat to join metal parts in manufacturing, construction, and repair. Specialized welding (underwater, pipeline, aerospace) can command significantly higher pay.",
    degreeAdvantages: {
      Engineering:
        "Your engineering background helps you read technical blueprints, understand metallurgy, and excel in specialized welding fields.",
      Art: "Your artistic training gives you excellent spatial awareness, attention to detail, and the ability to create precise, aesthetically pleasing welds.",
      Any: "Your degree demonstrates focus and precision - qualities that translate directly to quality welding work.",
    },
  },
  police: {
    title: "Police Officer",
    salary: "$55,000-$85,000",
    training: "6 months academy",
    growth: "3%",
    icon: "👮",
    tagline: "Serve and protect your community",
    description:
      "Police officers maintain public safety, enforce laws, and respond to emergencies. Many departments offer tuition reimbursement and your degree may qualify you for higher starting pay.",
    degreeAdvantages: {
      "Criminal Justice":
        "Your criminal justice education gives you understanding of the legal system, criminology, and law enforcement procedures.",
      Psychology:
        "Your psychology background helps with de-escalation, understanding human behavior, and building community relationships.",
      Any: "Many departments offer higher starting salaries for degree holders, and your education accelerates promotion to detective or leadership roles.",
    },
  },
  medicalTech: {
    title: "Medical Laboratory Technician",
    salary: "$50,000-$70,000",
    training: "2 years (associate) or 4 years (bachelor)",
    growth: "5%",
    icon: "🔬",
    tagline: "Discover the answers that guide patient care",
    description:
      "Medical laboratory technicians perform tests on body fluids and tissues to help diagnose diseases. This behind-the-scenes role is crucial to healthcare delivery.",
    degreeAdvantages: {
      Biology:
        "Your biology degree may qualify you for accelerated programs or direct entry into clinical laboratory positions.",
      Chemistry:
        "Your chemistry background gives you strong foundations in the analytical techniques used in medical laboratories.",
      Any: "Your science coursework and lab experience from college prepare you well for the technical demands of medical laboratory work.",
    },
  },
  religiousVocations: {
    title: "Religious Ministry & Service",
    salary: "$40,000-$65,000 (varies widely)",
    training: "1-4 years (depending on path)",
    growth: "1%",
    icon: "🙏",
    tagline: "Answer the call to serve something greater",
    description:
      "Religious ministry includes roles as pastors, priests, chaplains, youth ministers, missionaries, and faith-based nonprofit leaders. Many paths exist across different traditions and denominations.",
    degreeAdvantages: {
      Psychology:
        "Your psychology training prepares you for pastoral counseling, understanding human development, and supporting people through life transitions.",
      Business:
        "Your business background helps you manage church operations, lead nonprofits, and handle the organizational side of ministry.",
      Communications:
        "Your communications skills enhance preaching, teaching, writing, and building community through effective messaging.",
      Healthcare:
        "Your healthcare background prepares you for chaplaincy, hospital ministry, or serving in faith-based healthcare organizations.",
      Any: "Seminary isn't wasting your degree - it's building on your education for deeper impact. Your academic foundation enriches theological study and ministry preparation.",
    },
  },
  military: {
    title: "Military Service",
    salary: "$45,000-$100,000+ (with benefits)",
    training: "8-13 weeks basic + specialty training",
    growth: "Stable",
    icon: "🎖️",
    tagline: "Serve your country while building valuable skills",
    description:
      "Military service offers structured career paths across Army, Navy, Air Force, Marines, Coast Guard, and Space Force. Enlisted and officer tracks provide training, benefits, and skills transferable to civilian careers.",
    degreeAdvantages: {
      Engineering:
        "Your engineering degree qualifies you for officer programs and technical specialties in aviation, cyber, nuclear, and weapons systems.",
      Business:
        "Your business background prepares you for logistics, supply chain, finance, and leadership roles across all branches.",
      Healthcare:
        "Your healthcare education opens paths to military medical corps, nursing, or becoming a military physician with student loan repayment.",
      "Computer Science":
        "Your CS degree is highly valued for cyber warfare, intelligence, communications, and technology specialist roles.",
      Any: "College graduates can enter as officers with higher pay and leadership responsibilities. Your degree demonstrates the discipline and learning ability the military values.",
    },
  },
  mechanic: {
    title: "Mechanic / Technician",
    salary: "$45,000-$75,000",
    training: "6 months-2 years",
    growth: "4%",
    icon: "🔧",
    tagline: "Keep machines running and industries moving",
    description:
      "Mechanics and technicians diagnose, repair, and maintain vehicles, aircraft, heavy equipment, and industrial machinery. Specializations include automotive, diesel, aerospace, marine, and industrial maintenance—all offering strong job security in essential industries.",
    degreeAdvantages: {
      Engineering:
        "Your engineering background gives you deep understanding of mechanical systems, diagnostics, and the technical principles behind vehicle and equipment design.",
      Business:
        "Your business degree prepares you to run your own auto shop, fleet maintenance operation, or dealership service department.",
      Physics:
        "Your physics education provides strong foundations in thermodynamics, fluid dynamics, and mechanical principles used in engine and system diagnostics.",
      Any: "Your degree demonstrates problem-solving ability and commitment to learning—skills that help you master complex diagnostic systems and advance to senior technician or management roles.",
    },
  },
};

// Career library data - detailed information for each career path
export interface CareerLibraryInfo {
  dayInLife: string[];
  keySkills: string[];
  certifications: string[];
  careerPath: string[];
  resources: { name: string; url: string }[];
  prosAndCons: { pros: string[]; cons: string[] };
}

export const careerLibrary: Record<CareerPath, CareerLibraryInfo> = {
  electrician: {
    dayInLife: [
      "Read blueprints and technical diagrams to plan wiring layouts",
      "Install and repair electrical systems in residential or commercial buildings",
      "Test electrical systems using multimeters and other diagnostic tools",
      "Ensure all work meets local and national electrical codes",
      "Collaborate with contractors, architects, and other tradespeople",
    ],
    keySkills: [
      "Technical aptitude and problem-solving",
      "Physical stamina and manual dexterity",
      "Attention to detail and safety awareness",
      "Math skills for calculations and measurements",
      "Customer service and communication",
    ],
    certifications: [
      "Journeyman Electrician License (state-specific)",
      "Master Electrician License",
      "OSHA Safety Certification",
      "EPA 608 Certification (for HVAC-related work)",
    ],
    careerPath: [
      "Apprentice Electrician (4-5 years)",
      "Journeyman Electrician",
      "Master Electrician",
      "Electrical Contractor / Business Owner",
      "Electrical Inspector or Estimator",
    ],
    resources: [
      { name: "Bureau of Labor Statistics - Electricians", url: "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm" },
      { name: "National Electrical Contractors Association", url: "https://www.necanet.org" },
      { name: "Independent Electrical Contractors", url: "https://www.ieci.org" },
    ],
    prosAndCons: {
      pros: ["High earning potential", "Job security", "No student debt with apprenticeship", "Can start own business"],
      cons: ["Physically demanding", "Risk of electrical hazards", "Irregular hours possible", "4-5 year apprenticeship required"],
    },
  },
  nurse: {
    dayInLife: [
      "Assess patient health and record vital signs",
      "Administer medications and treatments",
      "Collaborate with doctors on patient care plans",
      "Educate patients and families about health conditions",
      "Document patient progress in electronic health records",
    ],
    keySkills: [
      "Compassion and emotional resilience",
      "Critical thinking and clinical judgment",
      "Communication with patients and medical teams",
      "Attention to detail in medication administration",
      "Physical stamina for long shifts",
    ],
    certifications: [
      "NCLEX-RN (Required for licensure)",
      "BLS/ACLS Certification",
      "Specialty certifications (CCRN, CEN, etc.)",
      "State nursing license",
    ],
    careerPath: [
      "Staff Nurse / Bedside RN",
      "Charge Nurse",
      "Clinical Nurse Specialist",
      "Nurse Practitioner (with MSN)",
      "Nurse Manager / Director of Nursing",
    ],
    resources: [
      { name: "American Nurses Association", url: "https://www.nursingworld.org" },
      { name: "Bureau of Labor Statistics - RNs", url: "https://www.bls.gov/ooh/healthcare/registered-nurses.htm" },
      { name: "ABSN Programs Directory", url: "https://www.absnprograms.org" },
    ],
    prosAndCons: {
      pros: ["High demand and job security", "Meaningful work helping others", "Many specialization options", "Flexible scheduling"],
      cons: ["Emotionally demanding", "Long shifts (often 12 hours)", "Physical strain", "Exposure to illness"],
    },
  },
  emt: {
    dayInLife: [
      "Respond to 911 emergency calls",
      "Assess patient conditions and provide immediate care",
      "Perform CPR, wound care, and splinting",
      "Transport patients safely to medical facilities",
      "Document patient encounters and hand off to hospital staff",
    ],
    keySkills: [
      "Calm under pressure",
      "Quick decision-making",
      "Physical fitness and strength",
      "Compassion and patient communication",
      "Teamwork with partner and dispatch",
    ],
    certifications: [
      "National Registry EMT (NREMT)",
      "State EMT License",
      "CPR/BLS Certification",
      "Paramedic Certification (advanced)",
      "PHTLS/ITLS (trauma certifications)",
    ],
    careerPath: [
      "EMT-Basic",
      "Advanced EMT (AEMT)",
      "Paramedic",
      "Flight Paramedic / Critical Care",
      "EMS Supervisor / Director",
    ],
    resources: [
      { name: "National Registry of EMTs", url: "https://www.nremt.org" },
      { name: "NAEMT", url: "https://www.naemt.org" },
      { name: "Bureau of Labor Statistics - EMTs", url: "https://www.bls.gov/ooh/healthcare/emts-and-paramedics.htm" },
    ],
    prosAndCons: {
      pros: ["Fast entry into healthcare", "Exciting and varied work", "Make immediate impact", "Stepping stone to other careers"],
      cons: ["Lower pay than other healthcare roles", "High stress and trauma exposure", "Irregular hours and shifts", "Physical demands"],
    },
  },
  hvac: {
    dayInLife: [
      "Install heating and cooling systems in buildings",
      "Diagnose and repair malfunctioning HVAC equipment",
      "Perform routine maintenance and inspections",
      "Work with refrigerants and electrical components",
      "Provide estimates and explain repairs to customers",
    ],
    keySkills: [
      "Mechanical aptitude",
      "Troubleshooting and diagnostics",
      "Customer service skills",
      "Physical fitness (lifting, climbing)",
      "Understanding of electrical systems",
    ],
    certifications: [
      "EPA 608 Certification (required for refrigerants)",
      "NATE Certification",
      "HVAC Excellence Certification",
      "State contractor license (varies)",
    ],
    careerPath: [
      "HVAC Apprentice/Helper",
      "HVAC Technician",
      "Senior Technician / Lead",
      "Service Manager",
      "HVAC Contractor / Business Owner",
    ],
    resources: [
      { name: "Bureau of Labor Statistics - HVAC", url: "https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm" },
      { name: "HVAC Excellence", url: "https://www.hvacexcellence.org" },
      { name: "ACCA", url: "https://www.acca.org" },
    ],
    prosAndCons: {
      pros: ["Strong demand year-round", "Good pay with growth potential", "Shorter training than some trades", "Indoor and outdoor variety"],
      cons: ["Working in extreme temperatures", "Physical demands", "Emergency calls possible", "Seasonal workload variation"],
    },
  },
  plumber: {
    dayInLife: [
      "Install and repair pipes for water, gas, and drainage",
      "Read blueprints and building codes",
      "Troubleshoot plumbing issues using cameras and diagnostic tools",
      "Install fixtures like sinks, toilets, and water heaters",
      "Respond to emergency service calls",
    ],
    keySkills: [
      "Problem-solving abilities",
      "Physical strength and endurance",
      "Attention to detail",
      "Math skills for measurements",
      "Customer communication",
    ],
    certifications: [
      "Journeyman Plumber License",
      "Master Plumber License",
      "Backflow Prevention Certification",
      "Gas fitting certification (where applicable)",
    ],
    careerPath: [
      "Plumbing Apprentice (4-5 years)",
      "Journeyman Plumber",
      "Master Plumber",
      "Plumbing Contractor",
      "Plumbing Inspector or Estimator",
    ],
    resources: [
      { name: "United Association (UA)", url: "https://www.ua.org" },
      { name: "Bureau of Labor Statistics - Plumbers", url: "https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm" },
      { name: "PHCC", url: "https://www.phccweb.org" },
    ],
    prosAndCons: {
      pros: ["Excellent earning potential", "Always in demand", "Can own your own business", "Recession-resistant"],
      cons: ["Physically demanding work", "Working in tight spaces", "Exposure to unpleasant conditions", "Long apprenticeship"],
    },
  },
  firefighter: {
    dayInLife: [
      "Respond to fires, accidents, and medical emergencies",
      "Operate firefighting equipment and apparatus",
      "Conduct fire safety inspections and education",
      "Maintain equipment and stations",
      "Train and drill with team members",
    ],
    keySkills: [
      "Physical fitness and strength",
      "Teamwork and communication",
      "Problem-solving under pressure",
      "Mechanical aptitude",
      "Compassion and community service mindset",
    ],
    certifications: [
      "Firefighter I & II Certification",
      "EMT-Basic (often required)",
      "Hazmat Operations",
      "Driver/Operator Certification",
      "Fire Inspector certification (advancement)",
    ],
    careerPath: [
      "Probationary Firefighter",
      "Firefighter",
      "Engineer/Driver",
      "Lieutenant / Captain",
      "Battalion Chief / Fire Chief",
    ],
    resources: [
      { name: "International Association of Fire Fighters", url: "https://www.iaff.org" },
      { name: "Bureau of Labor Statistics - Firefighters", url: "https://www.bls.gov/ooh/protective-service/firefighters.htm" },
      { name: "NFPA", url: "https://www.nfpa.org" },
    ],
    prosAndCons: {
      pros: ["Meaningful public service work", "Strong camaraderie", "Good benefits and pension", "24/48 schedule gives days off"],
      cons: ["Dangerous work environment", "Exposure to trauma", "Competitive hiring process", "Physical demands throughout career"],
    },
  },
  solar: {
    dayInLife: [
      "Install solar panels on rooftops and ground mounts",
      "Connect electrical wiring and inverters",
      "Perform system testing and commissioning",
      "Troubleshoot and repair existing systems",
      "Work with customers on system monitoring",
    ],
    keySkills: [
      "Electrical knowledge",
      "Comfort working at heights",
      "Physical fitness",
      "Attention to detail",
      "Understanding of renewable energy systems",
    ],
    certifications: [
      "NABCEP PV Associate",
      "NABCEP PV Installation Professional",
      "OSHA 10/30 Safety",
      "State electrical license (varies)",
    ],
    careerPath: [
      "Solar Installer / Laborer",
      "Lead Installer",
      "System Designer",
      "Project Manager",
      "Solar Sales or Business Development",
    ],
    resources: [
      { name: "NABCEP", url: "https://www.nabcep.org" },
      { name: "Solar Energy Industries Association", url: "https://www.seia.org" },
      { name: "Bureau of Labor Statistics - Solar Installers", url: "https://www.bls.gov/ooh/construction-and-extraction/solar-photovoltaic-installers.htm" },
    ],
    prosAndCons: {
      pros: ["Fastest-growing occupation", "Contributing to clean energy", "Quick training entry", "Outdoor work"],
      cons: ["Physical work in heat", "Working at heights", "Weather-dependent scheduling", "Evolving technology requires learning"],
    },
  },
  welder: {
    dayInLife: [
      "Read blueprints and welding symbols",
      "Set up and operate welding equipment",
      "Join metal parts using various welding techniques",
      "Inspect welds for quality and defects",
      "Maintain and troubleshoot welding equipment",
    ],
    keySkills: [
      "Steady hands and precision",
      "Understanding of metallurgy",
      "Blueprint reading",
      "Safety awareness",
      "Physical stamina",
    ],
    certifications: [
      "AWS Certified Welder",
      "API certifications (pipeline)",
      "ASME certifications (pressure vessels)",
      "CWI - Certified Welding Inspector",
    ],
    careerPath: [
      "Welder Helper / Apprentice",
      "Welder",
      "Certified Welder (specialized)",
      "Welding Inspector",
      "Welding Engineer or Supervisor",
    ],
    resources: [
      { name: "American Welding Society", url: "https://www.aws.org" },
      { name: "Bureau of Labor Statistics - Welders", url: "https://www.bls.gov/ooh/production/welders-cutters-solderers-and-brazers.htm" },
      { name: "Hobart Institute", url: "https://www.hobartinstitute.com" },
    ],
    prosAndCons: {
      pros: ["Specialized skills command premium pay", "Creative and hands-on work", "Opportunities in many industries", "Travel opportunities"],
      cons: ["Exposure to fumes and UV light", "Physical demands", "Hot working conditions", "Repetitive motion risks"],
    },
  },
  police: {
    dayInLife: [
      "Patrol assigned areas and respond to calls",
      "Investigate crimes and interview witnesses",
      "Make arrests and process suspects",
      "Write detailed reports and testify in court",
      "Engage with community members",
    ],
    keySkills: [
      "Communication and de-escalation",
      "Physical fitness",
      "Critical thinking and judgment",
      "Report writing",
      "Cultural awareness and empathy",
    ],
    certifications: [
      "Police Academy Certificate (state POST)",
      "CPR/First Aid",
      "Firearms qualification",
      "Field Training Program completion",
      "Specialized certifications (detective, K9, etc.)",
    ],
    careerPath: [
      "Police Academy Recruit",
      "Patrol Officer",
      "Detective / Investigator",
      "Sergeant",
      "Lieutenant / Captain / Chief",
    ],
    resources: [
      { name: "Bureau of Labor Statistics - Police", url: "https://www.bls.gov/ooh/protective-service/police-and-detectives.htm" },
      { name: "DiscoverPolicing.org", url: "https://www.discoverpolicing.org" },
      { name: "IACP", url: "https://www.theiacp.org" },
    ],
    prosAndCons: {
      pros: ["Serve and protect community", "Good benefits and retirement", "Variety of assignments", "Career advancement opportunities"],
      cons: ["Dangerous situations", "Shift work and overtime", "High stress and scrutiny", "Emotional toll of the job"],
    },
  },
  medicalTech: {
    dayInLife: [
      "Collect and process patient samples",
      "Perform laboratory tests on blood, tissue, and fluids",
      "Operate and maintain lab equipment",
      "Analyze results and report findings to physicians",
      "Follow strict quality control procedures",
    ],
    keySkills: [
      "Attention to detail",
      "Analytical thinking",
      "Technical proficiency",
      "Time management",
      "Understanding of lab safety protocols",
    ],
    certifications: [
      "ASCP Certification (MLS/MLT)",
      "AMT Certification",
      "State licensure (where required)",
      "Specialty certifications (blood bank, microbiology, etc.)",
    ],
    careerPath: [
      "Medical Laboratory Technician (MLT)",
      "Medical Laboratory Scientist (MLS)",
      "Specialist (blood bank, microbiology)",
      "Lead Technologist / Supervisor",
      "Laboratory Manager / Director",
    ],
    resources: [
      { name: "ASCP", url: "https://www.ascp.org" },
      { name: "Bureau of Labor Statistics - Clinical Lab", url: "https://www.bls.gov/ooh/healthcare/clinical-laboratory-technologists-and-technicians.htm" },
      { name: "ASCLS", url: "https://www.ascls.org" },
    ],
    prosAndCons: {
      pros: ["Critical role in healthcare", "Regular hours (typically)", "Less direct patient contact", "Growing demand"],
      cons: ["Repetitive work possible", "Exposure to biological hazards", "Limited public recognition", "Continuing education required"],
    },
  },
  religiousVocations: {
    dayInLife: [
      "Lead worship services and prepare sermons",
      "Provide pastoral counseling to congregants",
      "Visit sick and homebound members",
      "Teach classes and lead study groups",
      "Manage church administration and staff",
    ],
    keySkills: [
      "Public speaking and preaching",
      "Pastoral counseling",
      "Leadership and administration",
      "Theological knowledge",
      "Compassion and emotional intelligence",
    ],
    certifications: [
      "Master of Divinity (M.Div.) - most denominations",
      "Ordination by denomination",
      "Clinical Pastoral Education (CPE) for chaplaincy",
      "Denominational-specific requirements",
    ],
    careerPath: [
      "Seminary Student / Intern",
      "Associate Pastor / Youth Minister",
      "Senior Pastor / Priest",
      "Chaplain (hospital, military, prison)",
      "Denominational Leadership / Bishop",
    ],
    resources: [
      { name: "Association of Theological Schools", url: "https://www.ats.edu" },
      { name: "Bureau of Labor Statistics - Clergy", url: "https://www.bls.gov/ooh/community-and-social-service/clergy.htm" },
      { name: "Association of Professional Chaplains", url: "https://www.professionalchaplains.org" },
    ],
    prosAndCons: {
      pros: ["Deeply meaningful work", "Serving a faith community", "Variety of ministry settings", "Lifelong learning"],
      cons: ["Often lower pay", "Always 'on call' for congregation", "Emotional demands of pastoral care", "Navigating church politics"],
    },
  },
  military: {
    dayInLife: [
      "Physical training and maintaining combat readiness",
      "Specialized job duties based on Military Occupational Specialty (MOS)",
      "Training exercises and skill development",
      "Equipment maintenance and inspections",
      "Leadership duties and team coordination",
    ],
    keySkills: [
      "Physical fitness and endurance",
      "Discipline and attention to detail",
      "Leadership and teamwork",
      "Technical skills (varies by specialty)",
      "Adaptability and problem-solving under pressure",
    ],
    certifications: [
      "Basic Training Completion",
      "Advanced Individual Training (AIT) or specialty school",
      "Security Clearance (many roles)",
      "MOS-specific certifications",
      "Officer Candidate School (OCS) for officers",
    ],
    careerPath: [
      "Recruit / Basic Training",
      "Junior Enlisted (E1-E4)",
      "Non-Commissioned Officer (E5-E9)",
      "Warrant Officer / Officer (O1-O10)",
      "Senior Leadership / Command",
    ],
    resources: [
      { name: "GoArmy.com", url: "https://www.goarmy.com" },
      { name: "Navy.com", url: "https://www.navy.com" },
      { name: "AirForce.com", url: "https://www.airforce.com" },
      { name: "Marines.com", url: "https://www.marines.com" },
      { name: "GoCoastGuard.com", url: "https://www.gocoastguard.com" },
    ],
    prosAndCons: {
      pros: ["Full benefits (healthcare, housing, education)", "Job security and steady pay", "Valuable skills training", "GI Bill for education", "Sense of purpose and camaraderie"],
      cons: ["Risk of deployment to conflict zones", "Frequent relocations", "Time away from family", "Strict hierarchy and rules", "Physical demands"],
    },
  },
  mechanic: {
    dayInLife: [
      "Diagnose mechanical issues using computerized diagnostic equipment",
      "Repair and replace defective parts in engines, transmissions, and other systems",
      "Perform routine maintenance like oil changes, brake inspections, and tune-ups",
      "Test vehicles and equipment to ensure proper operation after repairs",
      "Communicate with customers or fleet managers about needed repairs and costs",
    ],
    keySkills: [
      "Mechanical aptitude and problem-solving",
      "Computer diagnostic proficiency",
      "Attention to detail and precision",
      "Physical stamina (lifting, bending, standing)",
      "Customer service and communication",
    ],
    certifications: [
      "ASE Certifications (Automotive Service Excellence)",
      "Manufacturer-specific certifications (Ford, GM, Toyota, etc.)",
      "EPA 609 Certification (A/C refrigerants)",
      "FAA Airframe & Powerplant (A&P) License (aerospace)",
      "CDL (for heavy equipment/diesel mechanics)",
    ],
    careerPath: [
      "Entry-level Technician / Lube Tech",
      "General Service Technician",
      "Certified Mechanic / Specialist",
      "Master Technician",
      "Shop Foreman / Service Manager / Business Owner",
    ],
    resources: [
      { name: "Bureau of Labor Statistics - Auto Mechanics", url: "https://www.bls.gov/ooh/installation-maintenance-and-repair/automotive-service-technicians-and-mechanics.htm" },
      { name: "ASE - Automotive Service Excellence", url: "https://www.ase.com" },
      { name: "Bureau of Labor Statistics - Diesel Mechanics", url: "https://www.bls.gov/ooh/installation-maintenance-and-repair/diesel-service-technicians-and-mechanics.htm" },
      { name: "FAA - Aircraft Mechanics", url: "https://www.faa.gov/mechanics" },
    ],
    prosAndCons: {
      pros: ["Strong job demand across specialties", "Multiple career paths (auto, diesel, aerospace, marine)", "Can work independently or for dealerships/fleets", "Tangible problem-solving satisfaction", "Potential to own your own shop"],
      cons: ["Physical demands (standing, lifting, cramped positions)", "Exposure to chemicals and fumes", "Keeping up with rapidly changing technology", "Tool investment can be expensive", "Some weekend/evening hours"],
    },
  },
};

// Helper function to get degree advantage
export function getDegreeAdvantage(
  careerPath: CareerPath,
  major: string | null
): string {
  if (!major) {
    return careerPaths[careerPath].degreeAdvantages["Any"];
  }

  const normalizedMajor = major.toLowerCase().trim();
  const advantages = careerPaths[careerPath].degreeAdvantages;

  // Check for partial matches in degree advantage keys
  for (const key of Object.keys(advantages)) {
    if (key === "Any") continue;
    if (
      normalizedMajor.includes(key.toLowerCase()) ||
      key.toLowerCase().includes(normalizedMajor)
    ) {
      return advantages[key];
    }
  }

  // Check for common major variations
  const majorMappings: Record<string, string[]> = {
    Engineering: [
      "engineer",
      "mechanical",
      "civil",
      "electrical",
      "computer",
      "industrial",
    ],
    Biology: ["bio", "life science", "biochem", "microbio", "molecular"],
    Psychology: ["psych", "behavioral", "counseling"],
    Business: [
      "mba",
      "management",
      "marketing",
      "finance",
      "accounting",
      "economics",
    ],
    Chemistry: ["chem", "biochem"],
    Physics: ["physics", "physical science"],
    "Criminal Justice": ["criminology", "law enforcement", "justice"],
    Communications: ["comm", "journalism", "media", "public relations"],
    "Environmental Science": ["environmental", "ecology", "sustainability"],
    Art: ["art", "design", "fine arts", "visual"],
    Healthcare: ["health", "nursing", "pre-med", "medical", "public health"],
  };

  for (const [advantageKey, variations] of Object.entries(majorMappings)) {
    if (advantages[advantageKey]) {
      for (const variation of variations) {
        if (normalizedMajor.includes(variation)) {
          return advantages[advantageKey];
        }
      }
    }
  }

  // Default to "Any" advantage
  return advantages["Any"];
}
