// Resource types and data for the "For Parents" and "For Grads" pages

export type ResourceType =
  | "video"
  | "article"
  | "essay"
  | "podcast"
  | "youtube-channel"
  | "tiktok"
  | "reddit";

export interface Resource {
  id: string;
  title: string;
  author: string;
  type: ResourceType;
  url: string;
  description: string;
  duration?: string; // For videos/podcasts
  category: string;
  featured?: boolean;
  thumbnail?: string;
}

// Categories for parent resources
export const parentCategories = [
  "Understanding the Shift",
  "Financial Reality",
  "Success Stories",
  "How to Talk About It",
  "Research & Data",
] as const;

// Categories for grad resources
export const gradCategories = [
  "Making the Case",
  "Day-in-the-Life",
  "Career Transitions",
  "Financial Freedom",
  "Community & Support",
  "Skill Building",
] as const;

// Parent-focused resources
export const parentResources: Resource[] = [
  // Featured Resources
  {
    id: "p1",
    title: "37% of College Grads Are Now Pursuing Trades - Here's Why",
    author: "Resume Builder",
    type: "article",
    url: "https://www.resumebuilder.com/37-of-college-graduates-now-pursuing-trade-careers/",
    description:
      "Groundbreaking 2025 survey revealing that over a third of college graduates are pivoting to skilled trades. Key stats: median starting salary of $60K, 78% report job satisfaction.",
    category: "Research & Data",
    featured: true,
  },
  {
    id: "p2",
    title: "Mike Rowe: The Myth of the 'Dream Job'",
    author: "Mike Rowe",
    type: "video",
    url: "https://www.youtube.com/watch?v=CVEuPmVAb8o",
    description:
      "Mike Rowe challenges the conventional wisdom about career success and explains why following your passion isn't always the best advice.",
    duration: "12 min",
    category: "Understanding the Shift",
    featured: true,
  },
  {
    id: "p3",
    title: "The Case Against College",
    author: "Bryan Caplan",
    type: "essay",
    url: "https://www.theatlantic.com/magazine/archive/2018/01/whats-college-good-for/546590/",
    description:
      "Georgetown economist makes the case that college is largely about signaling, not learning - and that many students would be better served by alternative paths.",
    category: "Financial Reality",
    featured: true,
  },
  {
    id: "p4",
    title: "Your Kid's Trade Career Will Outlast Most White-Collar Jobs",
    author: "Wall Street Journal",
    type: "article",
    url: "https://www.wsj.com/articles/blue-collar-work-white-collar-jobs-trade-school-11674828002",
    description:
      "WSJ analysis of how AI and automation are reshaping job security, with trades emerging as the most stable career paths.",
    category: "Understanding the Shift",
    featured: true,
  },

  // Understanding the Shift
  {
    id: "p5",
    title: "Why Gen Z Is Ditching College for the Trades",
    author: "NBC News",
    type: "video",
    url: "https://www.youtube.com/watch?v=yV3YYGxXB-U",
    description:
      "News segment exploring the growing trend of young people choosing apprenticeships over traditional four-year degrees.",
    duration: "8 min",
    category: "Understanding the Shift",
  },
  {
    id: "p6",
    title: "The Trades Are the New Prestigious Career Path",
    author: "Bloomberg",
    type: "article",
    url: "https://www.bloomberg.com/news/articles/2024-03-15/trade-school-enrollment-surges-as-college-loses-appeal",
    description:
      "Analysis of shifting cultural attitudes toward skilled work and why parents are increasingly supportive of trade careers.",
    category: "Understanding the Shift",
  },
  {
    id: "p7",
    title: "College Isn't for Everyone - And That's Okay",
    author: "NPR",
    type: "podcast",
    url: "https://www.npr.org/podcasts/510289/planet-money",
    description:
      "Planet Money episode examining the economics of higher education and alternative career paths.",
    duration: "25 min",
    category: "Understanding the Shift",
  },

  // Financial Reality
  {
    id: "p8",
    title: "The True Cost of a Four-Year Degree",
    author: "Federal Reserve Bank",
    type: "article",
    url: "https://www.federalreserve.gov/publications/education-debt.htm",
    description:
      "Federal Reserve analysis of student debt burden and long-term financial impact on graduates.",
    category: "Financial Reality",
  },
  {
    id: "p9",
    title: "Trades vs. College: A Financial Comparison",
    author: "NerdWallet",
    type: "article",
    url: "https://www.nerdwallet.com/article/loans/student-loans/trade-school-vs-college",
    description:
      "Side-by-side financial comparison showing lifetime earnings, debt levels, and ROI for different career paths.",
    category: "Financial Reality",
  },
  {
    id: "p10",
    title: "Why Electricians Out-Earn Many College Grads",
    author: "CNBC Make It",
    type: "video",
    url: "https://www.youtube.com/watch?v=0S97PV1kUns",
    description:
      "CNBC breaks down the math on trade careers vs. traditional degrees, including earning potential and debt comparison.",
    duration: "10 min",
    category: "Financial Reality",
  },

  // Success Stories
  {
    id: "p11",
    title: "From Philosophy Major to Master Plumber",
    author: "The Atlantic",
    type: "article",
    url: "https://www.theatlantic.com/ideas/archive/2023/07/college-grad-trades-career/674901/",
    description:
      "Profile of a liberal arts graduate who found fulfillment and financial success in the plumbing trade.",
    category: "Success Stories",
  },
  {
    id: "p12",
    title: "How My Daughter's 'Failure' Became Her Greatest Success",
    author: "Mike Rowe Works Foundation",
    type: "essay",
    url: "https://www.mikeroweworks.org/stories/",
    description:
      "Parent testimonial about supporting a child's transition from college to skilled trades.",
    category: "Success Stories",
  },
  {
    id: "p13",
    title: "The English Major Who Became a Wind Turbine Technician",
    author: "Fast Company",
    type: "article",
    url: "https://www.fastcompany.com/90847234/wind-turbine-technician-career-change",
    description:
      "How a humanities degree holder found purpose and profit in renewable energy trades.",
    category: "Success Stories",
  },

  // How to Talk About It
  {
    id: "p14",
    title: "How to Support Your Child's Non-Traditional Career Path",
    author: "Psychology Today",
    type: "article",
    url: "https://www.psychologytoday.com/us/blog/career-transitions",
    description:
      "Psychologist's guide to having supportive conversations about alternative career paths.",
    category: "How to Talk About It",
  },
  {
    id: "p15",
    title: "The Parent's Guide to Trade Careers",
    author: "SkillsUSA",
    type: "article",
    url: "https://www.skillsusa.org/parents/",
    description:
      "Comprehensive resource for parents wanting to understand modern trade careers and how to support their children.",
    category: "How to Talk About It",
  },
  {
    id: "p16",
    title: "Reframing Success: Beyond the College Degree",
    author: "Harvard Business Review",
    type: "essay",
    url: "https://hbr.org/2023/09/rethinking-what-makes-a-successful-career",
    description:
      "Research-backed article on how definitions of career success are evolving and why that matters for parents.",
    category: "How to Talk About It",
  },

  // Research & Data
  {
    id: "p17",
    title: "Bureau of Labor Statistics: Fastest Growing Occupations",
    author: "BLS",
    type: "article",
    url: "https://www.bls.gov/ooh/fastest-growing.htm",
    description:
      "Official government data on job growth projections, showing trades dominating the fastest-growing categories.",
    category: "Research & Data",
  },
  {
    id: "p18",
    title: "The Skilled Trades Workforce Gap",
    author: "Associated Builders and Contractors",
    type: "article",
    url: "https://www.abc.org/News-Media/News-Releases/construction-industry-faces-workforce-shortage",
    description:
      "Industry analysis of the massive labor shortage in skilled trades and what it means for job seekers.",
    category: "Research & Data",
  },
  {
    id: "p19",
    title: "College Enrollment Decline by the Numbers",
    author: "National Student Clearinghouse",
    type: "article",
    url: "https://nscresearchcenter.org/current-term-enrollment-estimates/",
    description:
      "Latest enrollment data showing the ongoing shift away from traditional four-year institutions.",
    category: "Research & Data",
  },
];

// Grad-focused resources
export const gradResources: Resource[] = [
  // Featured Resources
  {
    id: "g1",
    title: "How I Told My Parents I Was Leaving Law School for Welding",
    author: "Reddit r/BlueCollarWomen",
    type: "reddit",
    url: "https://www.reddit.com/r/BlueCollarWomen/",
    description:
      "Real stories from people who had the conversation with their families about pivoting to trades.",
    category: "Making the Case",
    featured: true,
  },
  {
    id: "g2",
    title: "I Make More Than My College Friends - Here's My Story",
    author: "Mike Rowe Works",
    type: "video",
    url: "https://www.youtube.com/watch?v=qzKzu86Agg0",
    description:
      "First-person account of a college grad who transitioned to HVAC and now earns six figures.",
    duration: "15 min",
    category: "Career Transitions",
    featured: true,
  },
  {
    id: "g3",
    title: "The Trades Saved Me from $80K in Debt",
    author: "Freakonomics",
    type: "podcast",
    url: "https://freakonomics.com/podcast/",
    description:
      "Economics podcast episode featuring graduates who escaped the debt trap through skilled trades.",
    duration: "45 min",
    category: "Financial Freedom",
    featured: true,
  },
  {
    id: "g4",
    title: "A Day in the Life: Union Electrician",
    author: "Electrician U",
    type: "youtube-channel",
    url: "https://www.youtube.com/@ElectricianU",
    description:
      "Popular YouTube channel showing the real day-to-day of electrical work, from apprentice to journeyman.",
    category: "Day-in-the-Life",
    featured: true,
    thumbnail:
      "https://yt3.googleusercontent.com/ytc/AIdro_kQHVNNXq-K_FQX1aXEBxNqKKJM1_ZbJHgKsYKt=s176-c-k-c0x00ffffff-no-rj",
  },

  // Making the Case
  {
    id: "g5",
    title: "Scripts for Talking to Your Parents About Trade School",
    author: "Career Karma",
    type: "article",
    url: "https://careerkarma.com/blog/trade-school-conversation/",
    description:
      "Practical conversation templates for discussing your career pivot with family.",
    category: "Making the Case",
  },
  {
    id: "g6",
    title: "The Data Behind Your Trade Career Decision",
    author: "Georgetown CEW",
    type: "article",
    url: "https://cew.georgetown.edu/cew-reports/good-jobs-that-pay/",
    description:
      "Academic research you can share with parents about earnings potential in skilled trades.",
    category: "Making the Case",
  },
  {
    id: "g7",
    title: "Why Your Degree Actually Helps in Trades",
    author: "Degree2Trade",
    type: "essay",
    url: "/library",
    description:
      "How college-trained skills like critical thinking, communication, and project management accelerate trade careers.",
    category: "Making the Case",
  },

  // Day-in-the-Life
  {
    id: "g8",
    title: "HVAC Reality",
    author: "@hvacreality",
    type: "tiktok",
    url: "https://www.tiktok.com/@hvacreality",
    description:
      "Daily vlogs from an HVAC technician showing the real work, pay stubs, and lifestyle.",
    category: "Day-in-the-Life",
  },
  {
    id: "g9",
    title: "Plumber Life",
    author: "Roger Wakefield",
    type: "youtube-channel",
    url: "https://www.youtube.com/@RogerWakefield",
    description:
      "Master plumber shares daily work life, business tips, and industry insights.",
    category: "Day-in-the-Life",
    thumbnail:
      "https://yt3.googleusercontent.com/ytc/AIdro_lGRvPqQHsEJYNvyGS_7qHLSNj2f7pMFj7m_Q=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "g10",
    title: "Sparky Channel",
    author: "@sparkychannel",
    type: "youtube-channel",
    url: "https://www.youtube.com/@SparkyCHANNEL",
    description:
      "Electrician content creator showing apprentice to journeyman journey with real pay breakdowns.",
    category: "Day-in-the-Life",
    thumbnail:
      "https://yt3.googleusercontent.com/ytc/AIdro_nZHSkLqDhF3SoHuDMWQ9YxQ=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "g11",
    title: "Welder Life TikTok",
    author: "@weldingwithlove",
    type: "tiktok",
    url: "https://www.tiktok.com/@weldingwithlove",
    description:
      "Female welder sharing daily work, challenges, and wins in the welding trade.",
    category: "Day-in-the-Life",
  },
  {
    id: "g12",
    title: "Construction Career Day",
    author: "Build Your Future",
    type: "video",
    url: "https://byf.org/",
    description:
      "Virtual career day videos showing various construction trades in action.",
    duration: "20 min",
    category: "Day-in-the-Life",
  },

  // Career Transitions
  {
    id: "g13",
    title: "From Cubicle to Jobsite: A Transition Guide",
    author: "Skilled Trades Partners",
    type: "article",
    url: "https://www.skilledtradespartners.com/career-change/",
    description:
      "Step-by-step guide for white-collar workers transitioning to skilled trades.",
    category: "Career Transitions",
  },
  {
    id: "g14",
    title: "r/CareerChange - Trade Transition Stories",
    author: "Reddit Community",
    type: "reddit",
    url: "https://www.reddit.com/r/careerguidance/",
    description:
      "Active community of people sharing their career pivot experiences and advice.",
    category: "Career Transitions",
  },
  {
    id: "g15",
    title: "How to Get Started in the Trades with No Experience",
    author: "This Old House",
    type: "article",
    url: "https://www.thisoldhouse.com/careers/",
    description:
      "Practical guide to entering skilled trades, including apprenticeship programs and pre-apprenticeship options.",
    category: "Career Transitions",
  },

  // Financial Freedom
  {
    id: "g16",
    title: "Trade Worker Net Worth Journey",
    author: "Financial Independence Reddit",
    type: "reddit",
    url: "https://www.reddit.com/r/financialindependence/",
    description:
      "Stories from trade workers who achieved financial independence through skilled careers.",
    category: "Financial Freedom",
  },
  {
    id: "g17",
    title: "How I Paid Off $60K Student Debt in 3 Years as a Lineman",
    author: "CNBC Make It",
    type: "video",
    url: "https://www.youtube.com/watch?v=millennial-debt-payoff",
    description:
      "Video profile of a college grad who paid off student loans rapidly after switching to line work.",
    duration: "8 min",
    category: "Financial Freedom",
  },
  {
    id: "g18",
    title: "The True Earnings Potential in Skilled Trades",
    author: "ConstructionDive",
    type: "article",
    url: "https://www.constructiondive.com/wages/",
    description:
      "Comprehensive salary guide for trades, including overtime, union rates, and regional variations.",
    category: "Financial Freedom",
  },

  // Community & Support
  {
    id: "g19",
    title: "r/BlueCollarWomen",
    author: "Reddit Community",
    type: "reddit",
    url: "https://www.reddit.com/r/BlueCollarWomen/",
    description:
      "Supportive community for women in trades, with advice on everything from tools to handling discrimination.",
    category: "Community & Support",
  },
  {
    id: "g20",
    title: "Tradeswomen Inc.",
    author: "Tradeswomen Inc.",
    type: "article",
    url: "https://tradeswomen.org/",
    description:
      "Organization supporting women entering and succeeding in skilled trades.",
    category: "Community & Support",
  },
  {
    id: "g21",
    title: "Mike Rowe Works Foundation Scholarships",
    author: "Mike Rowe Works",
    type: "article",
    url: "https://www.mikeroweworks.org/scholarship/",
    description:
      "Scholarship program for people pursuing trade education - Work Ethic Scholarship Program.",
    category: "Community & Support",
  },

  // Skill Building
  {
    id: "g22",
    title: "Khan Academy - Electrical Basics",
    author: "Khan Academy",
    type: "video",
    url: "https://www.khanacademy.org/science/physics/circuits-topic",
    description:
      "Free courses to build foundational knowledge before starting an apprenticeship.",
    category: "Skill Building",
  },
  {
    id: "g23",
    title: "Pre-Apprenticeship Programs Near You",
    author: "Apprenticeship.gov",
    type: "article",
    url: "https://www.apprenticeship.gov/",
    description:
      "Official government resource for finding pre-apprenticeship and apprenticeship programs.",
    category: "Skill Building",
  },
  {
    id: "g24",
    title: "Trade School Search Tool",
    author: "Trade Schools Directory",
    type: "article",
    url: "https://www.trade-schools.net/",
    description:
      "Comprehensive directory of accredited trade programs by location and specialty.",
    category: "Skill Building",
  },
];

// Helper functions
export function getFeaturedResources(
  resources: Resource[]
): Resource[] {
  return resources.filter((r) => r.featured);
}

export function getResourcesByCategory(
  resources: Resource[],
  category: string
): Resource[] {
  if (category === "All") return resources;
  return resources.filter((r) => r.category === category);
}

export function getResourcesByType(
  resources: Resource[],
  type: string
): Resource[] {
  if (type === "All") return resources;
  return resources.filter((r) => r.type === type);
}

export function filterResources(
  resources: Resource[],
  category: string,
  type: string
): Resource[] {
  return resources.filter((r) => {
    const categoryMatch = category === "All" || r.category === category;
    const typeMatch = type === "All" || r.type === type;
    return categoryMatch && typeMatch;
  });
}

// Type badges config for styling
export const typeBadgeStyles: Record<ResourceType, { bg: string; text: string }> = {
  video: { bg: "bg-blue-500/20", text: "text-blue-400" },
  article: { bg: "bg-green-500/20", text: "text-green-400" },
  essay: { bg: "bg-purple-500/20", text: "text-purple-400" },
  podcast: { bg: "bg-orange-500/20", text: "text-orange-400" },
  "youtube-channel": { bg: "bg-red-500/20", text: "text-red-400" },
  tiktok: { bg: "bg-pink-500/20", text: "text-pink-400" },
  reddit: { bg: "bg-orange-600/20", text: "text-orange-500" },
};

// Display names for resource types
export const typeDisplayNames: Record<ResourceType, string> = {
  video: "Video",
  article: "Article",
  essay: "Essay",
  podcast: "Podcast",
  "youtube-channel": "YouTube",
  tiktok: "TikTok",
  reddit: "Reddit",
};

// Stats for the key stats section
export const keyStats = [
  {
    number: "37%",
    label: "of college grads pursuing trades",
    source: "Resume Builder 2025",
    description:
      "Over a third of college graduates are now actively pursuing skilled trade careers.",
  },
  {
    number: "$60K",
    label: "median starting salary",
    source: "Resume Builder 2025",
    description:
      "Gen Z trade workers start at competitive salaries with rapid growth potential.",
  },
  {
    number: "23%",
    label: "trade enrollment increase",
    source: "National Student Clearinghouse",
    description:
      "Trade school enrollment has surged since 2020 while college enrollment declined.",
  },
  {
    number: "11M",
    label: "unfilled trade jobs",
    source: "Bureau of Labor Statistics",
    description:
      "Massive labor shortage means unprecedented job security and negotiating power.",
  },
];

// Conversation starters for parents
export const conversationStartersParents = [
  {
    starter: "I've been reading about the skilled trades market...",
    explanation:
      "Lead with curiosity, not judgment. Show you've done research and are open to learning.",
  },
  {
    starter: "Can we talk about your career without me judging?",
    explanation:
      "Create a safe space. Your child may have been avoiding this conversation out of fear of disappointing you.",
  },
  {
    starter: "I want to support you - let's look at this together.",
    explanation:
      "Position yourself as an ally, not an obstacle. Your support is the most valuable thing you can offer.",
  },
];

// Conversation scripts for grads
export const conversationScripts = [
  {
    title: "Opening: How to start the conversation",
    content: `"Mom/Dad, I want to talk to you about something important. I've been doing a lot of thinking and research about my career, and I want to share what I've learned with you. This isn't a snap decision - it's something I've been considering carefully."

Key points to hit:
- Acknowledge their investment in your education
- Show you've done your homework
- Express that you value their input`,
  },
  {
    title: "The defense: Addressing their concerns",
    content: `"I know this might not be what you expected, and I understand why you might have concerns. Let me address them:

1. 'What about your degree?' - My degree taught me how to learn, communicate, and solve problems. These skills make me MORE valuable in the trades, not less.

2. 'Isn't that a step down?' - Actually, [trade] workers earn [salary] on average, and I can reach six figures within [timeframe]. Plus, I'll have job security that many white-collar workers don't.

3. 'What will people think?' - The cultural perception of trades is changing rapidly. 37% of college grads are now pursuing trades - this is becoming the smart choice, not the backup plan."`,
  },
  {
    title: "The vision: Painting your future",
    content: `"Here's what I'm excited about:

- In [timeframe], I can complete my training and start earning [salary]
- Within [years], I could be making [salary] with opportunities for [advancement]
- I'll have [specific benefit: flexible schedule, entrepreneurship opportunity, job security, etc.]
- My student loans can be paid off in [timeframe] instead of [longer timeframe]
- I'll be doing work that [personal motivation: helps people, creates tangible results, offers variety, etc.]"`,
  },
  {
    title: "The ask: What you need from them",
    content: `"What I need from you right now:

1. Your support - not necessarily your approval yet, but your willingness to support me while I pursue this
2. Time - give me [specific timeframe] to show you this is the right decision
3. An open mind - be willing to update your views as you see the results

I'm not asking you to understand everything immediately. I'm asking you to trust that I've thought this through and that I'm making a smart decision for my future."`,
  },
  {
    title: "Handling pushback",
    content: `If they push back, try:

"I hear your concerns, and I've thought about them too. Can we look at the data together? Here's what I've found..."

"I understand this isn't the path you imagined for me. But I've realized the path you imagined isn't leading to the life either of us wants for me."

"I'm not giving up - I'm pivoting. This is what successful people do when they realize their current path isn't working."

"I'd rather make this change now, at [age], than wait until I'm deeper in debt and further from where I want to be."`,
  },
];
