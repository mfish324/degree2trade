import Link from "next/link";

const financialAidResources = [
  {
    category: "Federal Student Aid",
    icon: "&#127963;",
    items: [
      {
        name: "FAFSA (Free Application for Federal Student Aid)",
        description: "The gateway to all federal financial aid including grants, loans, and work-study. Required for most financial aid programs.",
        url: "https://studentaid.gov/h/apply-for-aid/fafsa",
        highlight: "Deadline: June 30 each year",
      },
      {
        name: "Federal Pell Grant",
        description: "Free money for students with financial need. Up to $7,395 for 2024-25. Does not need to be repaid.",
        url: "https://studentaid.gov/understand-aid/types/grants/pell",
        highlight: "Up to $7,395/year",
      },
      {
        name: "Federal Work-Study",
        description: "Part-time jobs for students with financial need. Earn money while gaining work experience.",
        url: "https://studentaid.gov/understand-aid/types/work-study",
        highlight: "Earn while you learn",
      },
    ],
  },
  {
    category: "Apprenticeship Benefits",
    icon: "&#128736;",
    items: [
      {
        name: "Registered Apprenticeship Programs",
        description: "Get paid while you train! Apprentices earn wages from day one, with pay increasing as skills develop. No tuition costs - employers cover training.",
        url: "https://www.apprenticeship.gov/",
        highlight: "Earn $15-30+/hour while training",
      },
      {
        name: "Joint Apprenticeship Training Committee (JATC)",
        description: "Union-sponsored programs that provide free training, healthcare benefits, and competitive wages from the start.",
        url: "https://www.apprenticeship.gov/apprenticeship-job-finder",
        highlight: "Free training + benefits",
      },
      {
        name: "Apprenticeship.gov Job Finder",
        description: "Search for registered apprenticeship opportunities in your area across all industries.",
        url: "https://www.apprenticeship.gov/apprenticeship-job-finder",
        highlight: "10,000+ opportunities",
      },
    ],
  },
  {
    category: "Veteran Benefits",
    icon: "&#127894;",
    items: [
      {
        name: "Post-9/11 GI Bill",
        description: "Covers full tuition and fees, monthly housing allowance, and books/supplies stipend for veterans.",
        url: "https://www.va.gov/education/about-gi-bill-benefits/post-9-11/",
        highlight: "100% tuition covered",
      },
      {
        name: "VET TEC Program",
        description: "Training for high-tech careers at no cost. Covers tuition and provides housing allowance.",
        url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/",
        highlight: "Tech training at no cost",
      },
      {
        name: "Veteran Readiness & Employment",
        description: "Career counseling, training, and job placement services for veterans with service-connected disabilities.",
        url: "https://www.va.gov/careers-employment/vocational-rehabilitation/",
        highlight: "Free career services",
      },
    ],
  },
  {
    category: "Workforce Development",
    icon: "&#128188;",
    items: [
      {
        name: "WIOA (Workforce Innovation & Opportunity Act)",
        description: "Federal funding for job training through local American Job Centers. Can cover training costs, certifications, and support services.",
        url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx",
        highlight: "Free local job training",
      },
      {
        name: "Trade Adjustment Assistance (TAA)",
        description: "Training and support for workers who lost jobs due to foreign trade. Covers training costs and provides income support.",
        url: "https://www.dol.gov/agencies/eta/tradeact",
        highlight: "For displaced workers",
      },
      {
        name: "CareerOneStop",
        description: "Find local training programs, scholarships, and career resources sponsored by the U.S. Department of Labor.",
        url: "https://www.careeronestop.org/",
        highlight: "Comprehensive career resource",
      },
    ],
  },
  {
    category: "Healthcare-Specific Aid",
    icon: "&#9764;",
    items: [
      {
        name: "HRSA Nurse Corps",
        description: "Scholarship pays tuition, fees, and monthly stipend for nursing students who commit to working in underserved areas.",
        url: "https://bhw.hrsa.gov/funding/apply-scholarship/nurse-corps",
        highlight: "Full scholarship + stipend",
      },
      {
        name: "Nurse Corps Loan Repayment",
        description: "Pays up to 85% of unpaid nursing education loans for RNs working at Critical Shortage Facilities.",
        url: "https://bhw.hrsa.gov/funding/apply-loan-repayment/nurse-corps",
        highlight: "Up to 85% loan repayment",
      },
      {
        name: "EMT/Paramedic Scholarships",
        description: "Many fire departments and EMS agencies offer paid training or tuition reimbursement for EMT certification.",
        url: "https://www.naemt.org/initiatives/ems-scholarships",
        highlight: "Employer-sponsored options",
      },
    ],
  },
  {
    category: "Trade & Skilled Labor Scholarships",
    icon: "&#128295;",
    items: [
      {
        name: "Mike Rowe Works Foundation",
        description: "Work ethic scholarships for students pursuing skilled trades. Awards based on work ethic, not GPA.",
        url: "https://www.mikeroweworks.org/scholarship/",
        highlight: "Up to $10,000",
      },
      {
        name: "SkillsUSA Scholarships",
        description: "Scholarships for students in trade, technical, and skilled service programs.",
        url: "https://www.skillsusa.org/membership-resources/scholarships/",
        highlight: "Multiple awards available",
      },
      {
        name: "PHCC Educational Foundation",
        description: "Scholarships for plumbing and HVAC students pursuing careers in the trades.",
        url: "https://www.phccfoundation.org/scholarships",
        highlight: "For plumbing/HVAC students",
      },
    ],
  },
  {
    category: "State Programs",
    icon: "&#127967;",
    items: [
      {
        name: "State Workforce Agencies",
        description: "Each state has unique programs for training assistance. Search for your state's workforce development agency.",
        url: "https://www.careeronestop.org/LocalHelp/service-locator.aspx",
        highlight: "State-specific resources",
      },
      {
        name: "State Financial Aid Programs",
        description: "Many states offer grants and scholarships beyond federal aid. Requirements and amounts vary by state.",
        url: "https://www.nasfaa.org/State_Financial_Aid_Programs",
        highlight: "Additional state grants",
      },
      {
        name: "Community College Promise Programs",
        description: "Many states offer free community college tuition through 'Promise' or 'Last Dollar' programs.",
        url: "https://www.urban.org/policy-centers/cross-center-initiatives/state-and-local-finance-initiative/projects/state-and-local-backgrounders/promise-programs",
        highlight: "Free community college",
      },
    ],
  },
];

const tips = [
  {
    title: "Apply for FAFSA First",
    description: "Even if you think you won't qualify, complete the FAFSA. Many programs require it, and you might be surprised by what you're eligible for.",
  },
  {
    title: "Consider Apprenticeships",
    description: "Unlike college, apprenticeships pay YOU while you learn. No debt, real-world experience, and often leads to higher-paying jobs.",
  },
  {
    title: "Check Employer Tuition Benefits",
    description: "Many employers offer tuition reimbursement or will pay for certifications. Ask HR about education benefits.",
  },
  {
    title: "Look for Scholarship Stacking",
    description: "You can often combine multiple scholarships, grants, and employer benefits to cover all training costs.",
  },
  {
    title: "Avoid Private Student Loans",
    description: "If possible, stick to grants, scholarships, and federal loans. Private loans typically have higher rates and fewer protections.",
  },
];

export default function FinancialAidPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-surface-light bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="font-display text-xl font-bold text-primary">
            Degree2Trade
          </Link>
          <nav className="flex gap-6 text-text-secondary text-sm">
            <Link href="/programs" className="hover:text-primary transition-colors">
              Programs
            </Link>
            <Link href="/library" className="hover:text-primary transition-colors">
              Career Library
            </Link>
            <Link href="/financial-aid" className="text-primary">
              Financial Aid
            </Link>
            <Link href="/quiz" className="px-4 py-1.5 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors">
              Take Quiz
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-primary/10 via-background to-background border-b border-surface-light">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Financial Aid Resources
          </h1>
          <p className="text-text-secondary text-lg mb-6">
            Don&apos;t let cost hold you back. Discover grants, scholarships, and programs that can pay for your training.
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">$0</div>
              <div className="text-text-muted text-sm">Apprenticeship tuition</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">$7,395</div>
              <div className="text-text-muted text-sm">Max Pell Grant 2024-25</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-text-muted text-sm">GI Bill tuition coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-8 px-4 bg-surface">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold mb-6 text-center">Quick Tips for Funding Your Training</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {tips.map((tip, index) => (
              <div key={index} className="bg-surface-light rounded-lg p-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold mb-3">
                  {index + 1}
                </div>
                <h3 className="font-semibold mb-2 text-sm">{tip.title}</h3>
                <p className="text-text-secondary text-xs">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources by Category */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {financialAidResources.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span dangerouslySetInnerHTML={{ __html: category.icon }} />
                {category.category}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-surface rounded-xl border border-surface-light p-6 hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-text-primary">{item.name}</h3>
                    </div>
                    {item.highlight && (
                      <div className="text-primary text-xs font-medium mb-3">
                        {item.highlight}
                      </div>
                    )}
                    <p className="text-text-secondary text-sm mb-4">{item.description}</p>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium"
                    >
                      Learn More &rarr;
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-12 px-4 bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Traditional College vs. Trade Training</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
              <h3 className="text-xl font-bold text-red-400 mb-4">4-Year College</h3>
              <ul className="space-y-3">
                <li className="flex items-baseline gap-2 text-text-secondary">
                  <span className="text-red-400 font-bold text-lg leading-none">&minus;</span>
                  <span>Average debt: $37,000+</span>
                </li>
                <li className="flex items-baseline gap-2 text-text-secondary">
                  <span className="text-red-400 font-bold text-lg leading-none">&minus;</span>
                  <span>4+ years before earning potential</span>
                </li>
                <li className="flex items-baseline gap-2 text-text-secondary">
                  <span className="text-red-400 font-bold text-lg leading-none">&minus;</span>
                  <span>40% of grads are underemployed</span>
                </li>
                <li className="flex items-baseline gap-2 text-text-secondary">
                  <span className="text-red-400 font-bold text-lg leading-none">&minus;</span>
                  <span>No guarantee of job placement</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/20">
              <h3 className="text-xl font-bold text-green-400 mb-4">Trade Training</h3>
              <ul className="space-y-3">
                <li className="flex items-baseline gap-2 text-text-secondary">
                  <span className="text-green-400 font-bold text-lg leading-none">+</span>
                  <span>Often free or employer-paid</span>
                </li>
                <li className="flex items-baseline gap-2 text-text-secondary">
                  <span className="text-green-400 font-bold text-lg leading-none">+</span>
                  <span>Earn $15-30/hr from day one</span>
                </li>
                <li className="flex items-baseline gap-2 text-text-secondary">
                  <span className="text-green-400 font-bold text-lg leading-none">+</span>
                  <span>High demand = job security</span>
                </li>
                <li className="flex items-baseline gap-2 text-text-secondary">
                  <span className="text-green-400 font-bold text-lg leading-none">+</span>
                  <span>Clear path to $60-100k+ salaries</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Find Your Path?</h2>
          <p className="text-text-secondary mb-6">
            Take our career quiz to discover which trades match your interests, then explore programs in your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiz"
              className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Take the Career Quiz
            </Link>
            <Link
              href="/programs"
              className="inline-block bg-surface hover:bg-surface-light text-text-primary font-semibold px-8 py-3 rounded-lg transition-colors border border-surface-light"
            >
              Browse Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface py-8 px-4 border-t border-surface-light">
        <div className="max-w-6xl mx-auto text-center text-text-muted text-sm">
          &copy; 2025 Degree2Trade. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
