// lib/resourcesData.ts
// Easy to update - just add new resources to the arrays below
// Last updated: December 2025

export type ResourceType = 'video' | 'article' | 'essay' | 'guide' | 'data' | 'youtube-channel' | 'website' | 'podcast' | 'tiktok' | 'reddit';

export interface Resource {
  id: string;
  title: string;
  author: string;
  type: ResourceType;
  url: string;
  description: string;
  duration?: string; // For videos/podcasts
  category: string;
  featured?: boolean; // Highlight top resources
  thumbnail?: string;
}

// ============================================
// FOR PARENTS - "Help Your Graduate Make a Smart Career Move"
// ============================================

export const parentResources: Resource[] = [
  // The Big Picture
  {
    id: 'npr-toolbelt-generation',
    title: "Many in Gen Z ditch colleges for trade schools. Meet the 'toolbelt generation'",
    author: 'NPR',
    type: 'article',
    url: 'https://www.npr.org/2024/04/22/1245858737/gen-z-trade-vocational-schools-jobs-college',
    description: 'Comprehensive NPR report on why Gen Z is choosing trades over college. Features real stories including Sy Kirby who started a construction company at 19.',
    category: 'The Big Picture',
    featured: true
  },
  {
    id: 'pbs-gen-z-trades',
    title: 'Why many in Gen Z are ditching college for training in skilled trades',
    author: 'PBS NewsHour',
    type: 'video',
    url: 'https://www.pbs.org/newshour/show/why-many-in-gen-z-are-ditching-college-for-training-in-skilled-trades',
    description: 'March 2025 video report on the "toolbelt generation." Professional journalism parents will respect.',
    duration: '8 min',
    category: 'The Big Picture',
    featured: true
  },
  {
    id: 'cnbc-gen-z-trades',
    title: "Gen Z workers increasingly opt out of college and into the trades",
    author: 'CNBC',
    type: 'article',
    url: 'https://www.cnbc.com/2025/04/24/gen-z-workers-opt-out-of-college-and-go-into-trades.html',
    description: 'Features Morgan Bradbury who got a $57K welding job before finishing her certification, and Chase Gallagher who earned $500K in 2024.',
    category: 'The Big Picture'
  },
  {
    id: 'fortune-trade-schools',
    title: 'More Gen Z are choosing trade schools over college',
    author: 'Fortune',
    type: 'article',
    url: 'https://fortune.com/2024/04/04/gen-z-choosing-trade-schools-college-welders-carpenters-six-figure-job/',
    description: "Business-focused perspective on why trades are becoming the 'smart money' choice.",
    category: 'The Big Picture'
  },
  {
    id: 'newsweek-college-regret',
    title: 'One in Four Gen Z Workers Regret Going to College',
    author: 'Newsweek',
    type: 'article',
    url: 'https://www.newsweek.com/one-four-gen-z-workers-regret-going-college-2101852',
    description: 'July 2025 article. Quote: "Electricians out-earn lawyers and plumbers retire at 50 while college grads move back in with mom and dad."',
    category: 'The Big Picture'
  },

  // Data & Statistics
  {
    id: 'ny-fed-labor-market',
    title: 'College Labor Market Data',
    author: 'Federal Reserve Bank of New York',
    type: 'data',
    url: 'https://www.newyorkfed.org/research/college-labor-market',
    description: 'Official Fed data showing 41%+ underemployment rate for recent graduates in 2025. Authoritative source parents can\'t dismiss.',
    category: 'Data & Statistics',
    featured: true
  },
  {
    id: 'inside-higher-ed-underemployed',
    title: 'More than half of recent four-year college grads underemployed',
    author: 'Inside Higher Ed',
    type: 'article',
    url: 'https://www.insidehighered.com/news/students/academics/2024/02/22/more-half-recent-four-year-college-grads-underemployed',
    description: 'Coverage of the "Talent Disrupted" report. Key stat: 52% of grads underemployed one year out, 45% still underemployed a decade later.',
    category: 'Data & Statistics'
  },
  {
    id: 'stl-fed-underemployed',
    title: 'The Jobs and Degrees Underemployed College Graduates Have',
    author: 'St. Louis Fed',
    type: 'data',
    url: 'https://www.stlouisfed.org/open-vault/2025/aug/jobs-degrees-underemployed-college-graduates-have',
    description: 'August 2025 analysis. Key insight: "If you\'re a college grad and underemployed, you\'re basically making the same money as a college dropout."',
    category: 'Data & Statistics'
  },
  {
    id: 'higher-ed-dive-edge',
    title: 'Are young college graduates losing an edge in the job market?',
    author: 'Higher Ed Dive',
    type: 'article',
    url: 'https://www.highereddive.com/news/are-young-college-graduates-losing-an-edge-in-the-job-market/806426/',
    description: 'December 2025 analysis showing the college degree job-finding advantage has shrunk to its smallest gap since records began.',
    category: 'Data & Statistics'
  },

  // AI & Job Security
  {
    id: 'axios-ai-white-collar',
    title: 'AI jobs danger: Sleepwalking into a white-collar bloodbath',
    author: 'Axios',
    type: 'article',
    url: 'https://www.axios.com/2025/05/28/ai-jobs-white-collar-unemployment-anthropic',
    description: 'May 2025 deep dive. Quotes Anthropic CEO warning AI could eliminate "half of all entry-level white-collar jobs."',
    category: 'AI & Job Security',
    featured: true
  },
  {
    id: 'cnbc-ai-white-collar',
    title: "AI is already taking white-collar jobs. Economists warn there's 'much more in the tank'",
    author: 'CNBC',
    type: 'article',
    url: 'https://www.cnbc.com/2025/10/22/ai-taking-white-collar-jobs-economists-warn-much-more-in-the-tank.html',
    description: 'October 2025 report. Stanford researcher notes "physical jobs such as construction workers are so far shielded from AI disruption."',
    category: 'AI & Job Security'
  },
  {
    id: 'final-round-ai-risk',
    title: '12 White-Collar Jobs Most at Risk from AI in 2025',
    author: 'Final Round AI',
    type: 'article',
    url: 'https://www.finalroundai.com/blog/white-collar-jobs-most-at-risk-from-ai-in-2025',
    description: 'Detailed breakdown of which jobs are disappearing. Key stat: "Office jobs are disappearing while blue-collar jobs keep growing."',
    category: 'AI & Job Security'
  },

  // Trade Worker Shortage
  {
    id: 'manpower-boomers',
    title: 'Will baby boomers Break the Workforce?',
    author: 'Manpower',
    type: 'article',
    url: 'https://www.manpower.com/en/insights/blogs/2025/03/11/mp-will-baby-boomers-break-the-workforce',
    description: 'March 2025 analysis of 11,000 boomers reaching retirement age daily through 2027. Massive opportunity for young workers.',
    category: 'Trade Worker Shortage'
  },
  {
    id: 'wapo-boomers-retiring',
    title: "The boomers are retiring. See why that's bad news for workers.",
    author: 'Washington Post',
    type: 'article',
    url: 'https://www.washingtonpost.com/technology/interactive/2023/aging-america-retirees-workforce-economy/',
    description: 'Visual explanation of the demographic shift. Construction expected to lose 1.249 million workers to retirement.',
    category: 'Trade Worker Shortage'
  },
  {
    id: 'protected-income-trades',
    title: 'Peak Boomer Retirements Hit Trades Hardest',
    author: 'Protected Income',
    type: 'data',
    url: 'https://www.protectedincome.org/news/labor-day-peak-65-trades-hit-hardest/',
    description: 'Industries losing the most workers: Healthcare (2.135M), Manufacturing (1.841M), Construction (1.249M).',
    category: 'Trade Worker Shortage'
  },

  // Parent Guides
  {
    id: 'nahb-parent-advocacy',
    title: '10 Reasons Why Parents Should Advocate For Skilled Trades Careers',
    author: 'NAHB',
    type: 'guide',
    url: 'https://www.nahb.org/blog/2021/10/10-reasons-why-parents-should-advocate-for-skilled-trades-careers',
    description: 'From the National Association of Home Builders. Point-by-point case for trades.',
    category: 'Parent Guides'
  },
  {
    id: 'midwest-tech-parent-guide',
    title: 'The Ultimate Guide to Trade School for Parents',
    author: 'Midwest Technical Institute',
    type: 'guide',
    url: 'https://www.midwesttech.edu/admissions/the-ultimate-guide-to-trade-school-for-parents/',
    description: 'Comprehensive parent guide covering what trade school is, how to talk to your teen, and what to expect.',
    category: 'Parent Guides'
  },
  {
    id: 'mikeroweworks',
    title: 'mikeroweWORKS Foundation',
    author: 'Mike Rowe',
    type: 'website',
    url: 'https://mikeroweworks.org/',
    description: "Mike Rowe's foundation offering $1M+ in annual scholarships for trade programs.",
    category: 'Parent Guides',
    featured: true
  },
  {
    id: 'family-handyman-mike-rowe',
    title: 'Mike Rowe on Skilled Trades',
    author: 'Family Handyman',
    type: 'article',
    url: 'https://www.familyhandyman.com/article/mike-rowe-skilled-trades/',
    description: 'March 2025 interview. Quote: "There\'s never been a better time to find a good, high-paying career in the trades."',
    category: 'Parent Guides'
  },
  {
    id: 'career-school-now-parents',
    title: "A Parent's Guide to Trade School",
    author: 'Career School Now',
    type: 'guide',
    url: 'https://careerschoolnow.org/careers/a-parents-guide-to-trade-school',
    description: 'Addresses cost comparison ($30K total vs $127K for 4-year), career stability, income potential.',
    category: 'Parent Guides'
  }
];

// ============================================
// FOR GRADS - "Having THE Conversation with Your Parents"
// ============================================

export const gradResources: Resource[] = [
  // First-Person Stories

  {
    id: 'career-whispers-pivot',
    title: 'How to avoid the sunk cost fallacy and make a career pivot',
    author: 'The Career Whispers',
    type: 'essay',
    url: 'https://thecareerwhispers.substack.com/p/avoid-the-sunk-cost-fallacy-and-make',
    description: 'November 2024 practical guide on pivoting careers. Includes concrete steps for overcoming psychological barriers.',
    category: 'First-Person Stories'
  },
  {
    id: 'medium-degree-sunk-cost',
    title: "Don't let your Degree Hold You Back — Overcoming the Sunk Cost Fallacy",
    author: 'Monika Pejic',
    type: 'essay',
    url: 'https://medium.com/@monika.pejic/dont-let-your-degree-hold-you-back-overcoming-the-sunk-cost-fallacy-a5111eb0cb6a',
    description: 'First-person account of switching from psychology career. Key insight: "Learning new things is never a waste of time."',
    category: 'First-Person Stories'
  },
  {
    id: 'crooked-calligraphy-career',
    title: "CAREER CHANGE: Why your old career isn't a 'waste'",
    author: 'Crooked Calligraphy',
    type: 'essay',
    url: 'https://www.crookedcalligraphy.com/blog/sunk-cost-fallacy',
    description: "From someone who left corporate law. Breaks down why pivoting isn't 'wasting' your degree.",
    category: 'First-Person Stories'
  },

  // Psychology & Mindset
  {
    id: 'nih-sunk-cost',
    title: 'Sunk Cost Fallacy – How It Affects Career Decision-Making',
    author: 'NIH',
    type: 'article',
    url: 'https://www.training.nih.gov/oite-careers-blog/sunk-cost-fallacy-how-it-affects-career-decision-making/',
    description: 'Official NIH career blog. Key message: "It is okay to make a new decision based on new data."',
    category: 'Psychology & Mindset',
    featured: true
  },

  // Conversation Guides
  {
    id: 'uti-parent-conversation',
    title: 'How To Talk to Your Parents About Going to Trade School',
    author: 'UTI',
    type: 'guide',
    url: 'https://www.uti.edu/blog/education/talk-to-parents-about-trade-school',
    description: 'Step-by-step conversation guide. Covers addressing parent concerns about prestige, income, and job stability.',
    category: 'Conversation Guides',
    featured: true
  },
  {
    id: 'freedom-sprout-trade-schools',
    title: "We Shouldn't Discourage Our Kids From Trade Schools",
    author: 'Freedom Sprout',
    type: 'article',
    url: 'https://freedomsprout.com/trade-schools/',
    description: "Parent's perspective that grads can share. Includes Mike Rowe insights.",
    category: 'Conversation Guides'
  },

  // Day-in-the-Life Videos
  {
    id: 'electrician-u',
    title: 'Electrician U',
    author: 'Dustin Stelzer',
    type: 'youtube-channel',
    url: 'https://www.youtube.com/@ElectricianU',
    description: '522K+ subscribers. Austin, TX master electrician. Deep electrical theory plus real job content.',
    category: 'Day-in-the-Life Videos',
    featured: true
  },
  {
    id: 'roger-wakefield',
    title: 'Roger Wakefield (The Expert Plumber)',
    author: 'Roger Wakefield',
    type: 'youtube-channel',
    url: 'https://www.youtube.com/@RogerWakefield',
    description: '650K+ subscribers, 137M+ views. Master plumber with 40 years experience. Also created The Trades Academy.',
    category: 'Day-in-the-Life Videos'
  },
  {
    id: 'starving-electrician',
    title: 'Starving Electrician',
    author: 'Starving Electrician',
    type: 'youtube-channel',
    url: 'https://www.youtube.com/@StarvingElectrician',
    description: 'Honest, "keeps it real" content about daily electrician life. Shows both challenges and rewards.',
    category: 'Day-in-the-Life Videos'
  },

  // The AI Argument
  {
    id: 'final-round-ai-displacement',
    title: 'AI Job Displacement 2025: Which Jobs Are At Risk?',
    author: 'Final Round AI',
    type: 'article',
    url: 'https://www.finalroundai.com/blog/ai-replacing-jobs-2025',
    description: 'Research shows trades are among the LEAST threatened by AI. "94% of construction companies report difficulty sourcing workers."',
    category: 'The AI Argument',
    featured: true
  },
  {
    id: 'demandsage-ai-stats',
    title: '73 AI Job Replacement Statistics (2025)',
    author: 'DemandSage',
    type: 'data',
    url: 'https://www.demandsage.com/ai-job-replacement-stats/',
    description: 'Comprehensive stats showing AI affects white-collar more than blue-collar. "Skilled trades remain in high demand."',
    category: 'The AI Argument'
  },
  {
    id: 'medium-ai-job-losses',
    title: 'I Analyzed 76,000 AI Job Losses in 2025',
    author: 'Mattlar Jari',
    type: 'essay',
    url: 'https://medium.com/@mattlar.jari/i-analyzed-76-000-ai-job-losses-in-2025-your-entry-level-job-is-disappearing-faster-than-you-b801a71d50dd',
    description: '"Construction and skilled trades are among the least threatened by AI automation."',
    category: 'The AI Argument'
  },

  // Success Stories
  {
    id: 'rsi-college-grads-trades',
    title: 'What Should I Go Back to School for? 3 Top Trades for College Grads',
    author: 'RSI',
    type: 'article',
    url: 'https://www.rsi.edu/blog/skilled-trades/what-should-i-go-back-to-school-for-3-top-trades-for-college-grads-to-consider/',
    description: 'Specifically addresses college grads returning to trade school. Covers why degree holders are choosing trades.',
    category: 'Success Stories'
  },
  {
    id: 'shrm-gen-z-trades',
    title: "Skilled Trades Drawing Gen Z's Interest",
    author: 'SHRM',
    type: 'article',
    url: 'https://www.shrm.org/topics-tools/news/organizational-employee-development/vocational-training-gen-z-blue-collar-trades',
    description: 'From the Society for Human Resource Management. Professional perspective on the Gen Z trades shift.',
    category: 'Success Stories'
  }
];

// ============================================
// CATEGORIES
// ============================================

export const parentCategories = [
  'The Big Picture',
  'Data & Statistics',
  'AI & Job Security',
  'Trade Worker Shortage',
  'Parent Guides'
];

export const gradCategories = [
  'First-Person Stories',
  'Psychology & Mindset',
  'Conversation Guides',
  'Day-in-the-Life Videos',
  'The AI Argument',
  'Success Stories'
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getFeaturedResources(resources: Resource[]): Resource[] {
  return resources.filter(r => r.featured);
}

export function getResourcesByCategory(resources: Resource[], category: string): Resource[] {
  if (category === "All") return resources;
  return resources.filter(r => r.category === category);
}

export function getResourcesByType(resources: Resource[], type: string): Resource[] {
  if (type === "All") return resources;
  return resources.filter(r => r.type === type);
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

// ============================================
// TYPE STYLING
// ============================================

// Type badge styles for UI (used by pages)
export const typeBadgeStyles: Record<ResourceType, { bg: string; text: string }> = {
  video: { bg: "bg-blue-500/20", text: "text-blue-400" },
  article: { bg: "bg-green-500/20", text: "text-green-400" },
  essay: { bg: "bg-purple-500/20", text: "text-purple-400" },
  guide: { bg: "bg-yellow-500/20", text: "text-yellow-400" },
  data: { bg: "bg-cyan-500/20", text: "text-cyan-400" },
  "youtube-channel": { bg: "bg-red-500/20", text: "text-red-400" },
  website: { bg: "bg-pink-500/20", text: "text-pink-400" },
  podcast: { bg: "bg-orange-500/20", text: "text-orange-400" },
  tiktok: { bg: "bg-pink-500/20", text: "text-pink-400" },
  reddit: { bg: "bg-orange-600/20", text: "text-orange-500" },
};

// Display names for resource types
export const typeDisplayNames: Record<ResourceType, string> = {
  video: "Video",
  article: "Article",
  essay: "Essay",
  guide: "Guide",
  data: "Data",
  "youtube-channel": "YouTube",
  website: "Website",
  podcast: "Podcast",
  tiktok: "TikTok",
  reddit: "Reddit",
};

// ============================================
// KEY STATS (for parents page)
// ============================================

export const keyStats = [
  {
    number: "41%",
    label: "of college grads underemployed",
    source: "NY Fed 2025",
    description:
      "Over 4 in 10 recent college graduates are working in jobs that don't require their degree.",
  },
  {
    number: "$57K",
    label: "starting welder salary",
    source: "CNBC 2025",
    description:
      "Morgan Bradbury got a $57K welding job before even finishing her certification.",
  },
  {
    number: "11,000",
    label: "boomers retiring daily",
    source: "Manpower 2025",
    description:
      "Massive wave of retirements creating unprecedented opportunity in skilled trades.",
  },
  {
    number: "52%",
    label: "grads underemployed year one",
    source: "Talent Disrupted",
    description:
      "More than half of four-year college graduates are underemployed within their first year.",
  },
];

// ============================================
// CONVERSATION STARTERS (for parents page)
// ============================================

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

// ============================================
// CONVERSATION SCRIPTS (for grads page)
// ============================================

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

3. 'What will people think?' - The cultural perception of trades is changing rapidly. Gen Z is choosing trades in record numbers - this is becoming the smart choice, not the backup plan."`,
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
