import Link from "next/link";
import { careerPaths, CareerPath } from "@/lib/quizData";

export default function Home() {
  const featuredCareers: CareerPath[] = [
    "electrician",
    "nurse",
    "emt",
    "hvac",
    "plumber",
    "firefighter",
    "solar",
    "welder",
    "police",
    "medicalTech",
    "religiousVocations",
  ];

  return (
    <main className="min-h-screen">
      {/* Header Navigation */}
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
            <Link href="/financial-aid" className="hover:text-primary transition-colors">
              Financial Aid
            </Link>
            <Link href="/quiz" className="px-4 py-1.5 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors">
              Take Quiz
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Your Degree is Your{" "}
            <span className="text-primary">Advantage</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Turn that &quot;useless&quot; degree into a competitive edge in
            skilled trades, emergency services, and ministry.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-surface rounded-lg p-6">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                40.5%
              </div>
              <div className="text-text-secondary">
                of recent grads are underemployed
              </div>
            </div>
            <div className="bg-surface rounded-lg p-6">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                $1.8T
              </div>
              <div className="text-text-secondary">in student loan debt</div>
            </div>
            <div className="bg-surface rounded-lg p-6">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                500K+
              </div>
              <div className="text-text-secondary">
                unfilled trade jobs nationwide
              </div>
            </div>
          </div>

          <Link
            href="/quiz"
            className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold text-lg px-8 py-4 rounded-lg transition-colors mb-4"
          >
            Take the 90-Second Career Quiz
          </Link>
          <p className="text-text-muted text-sm">
            No email required &bull; Get instant results
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-surface py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            You Were Told a Degree Was the Path to Success
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-light rounded-lg p-8">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-xl font-semibold mb-3">The Broken Promise</h3>
              <p className="text-text-secondary">
                You did everything right - good grades, the &quot;right&quot;
                degree, internships. Yet you&apos;re making less than a plumber
                with half your debt.
              </p>
            </div>
            <div className="bg-surface-light rounded-lg p-8">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3">
                The Psychological Trap
              </h3>
              <p className="text-text-secondary">
                Society told you trade work is &quot;less than.&quot; But
                electricians aren&apos;t competing with AI, and they&apos;re not
                drowning in debt.
              </p>
            </div>
            <div className="bg-surface-light rounded-lg p-8">
              <div className="text-4xl mb-4">❓</div>
              <h3 className="text-xl font-semibold mb-3">The Information Gap</h3>
              <p className="text-text-secondary">
                No one told you about accelerated nursing programs, trade
                apprenticeships, or how your degree actually helps in these
                fields.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Why Skilled Work? Why Now?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface rounded-lg p-6 border border-surface-light hover:border-primary/30 transition-colors">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-semibold mb-2">
                AI Can&apos;t Replace a Plumber
              </h3>
              <p className="text-text-secondary text-sm">
                Physical skilled work is automation-proof. Someone has to fix
                the pipes, wire the buildings, and respond to emergencies.
              </p>
            </div>
            <div className="bg-surface rounded-lg p-6 border border-surface-light hover:border-primary/30 transition-colors">
              <div className="text-3xl mb-3">👴</div>
              <h3 className="text-lg font-semibold mb-2">
                Massive Retirement Wave
              </h3>
              <p className="text-text-secondary text-sm">
                Baby boomers are retiring. The trades need 500,000+ new workers
                just to maintain current capacity.
              </p>
            </div>
            <div className="bg-surface rounded-lg p-6 border border-surface-light hover:border-primary/30 transition-colors">
              <div className="text-3xl mb-3">🏗️</div>
              <h3 className="text-lg font-semibold mb-2">Infrastructure Boom</h3>
              <p className="text-text-secondary text-sm">
                Billions in infrastructure spending means unprecedented demand
                for skilled workers in construction and energy.
              </p>
            </div>
            <div className="bg-surface rounded-lg p-6 border border-surface-light hover:border-primary/30 transition-colors">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-semibold mb-2">Better Pay, Less Debt</h3>
              <p className="text-text-secondary text-sm">
                Many trades pay $60-90K with minimal training costs.
                Apprentices often earn while they learn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-surface py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Find Your Path in 3 Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Take the Quiz</h3>
              <p className="text-text-secondary">
                Answer 15 questions about your interests, skills, and
                preferences. Takes about 90 seconds.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">See Your Matches</h3>
              <p className="text-text-secondary">
                Get personalized career recommendations based on your answers
                and learn how your degree gives you an edge.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Find Programs</h3>
              <p className="text-text-secondary">
                Discover training programs, apprenticeships, and accelerated
                paths near you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Paths Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Explore Career Paths
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {featuredCareers.map((careerKey) => {
              const career = careerPaths[careerKey];
              return (
                <div
                  key={careerKey}
                  className="bg-surface rounded-lg p-5 border border-surface-light hover:border-primary/50 transition-colors"
                >
                  <div className="text-3xl mb-2">{career.icon}</div>
                  <h3 className="font-semibold mb-1">{career.title}</h3>
                  <p className="text-primary text-sm font-medium mb-1">
                    {career.salary}
                  </p>
                  <p className="text-text-muted text-xs">{career.training}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-primary to-orange-600 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            This Isn&apos;t Giving Up. This is Upgrading.
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Your degree taught you how to learn. Now learn something that pays.
          </p>
          <Link
            href="/quiz"
            className="inline-block bg-white text-primary hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-lg transition-colors"
          >
            Take the 90-Second Career Quiz
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="font-display text-xl font-bold text-primary">
                Degree2Trade
              </div>
              <p className="text-text-muted text-sm mt-1">
                Your degree is your advantage
              </p>
            </div>
            <div className="flex flex-wrap gap-6 text-text-secondary text-sm">
              <Link href="/about" className="hover:text-primary transition-colors">
                About
              </Link>
              <Link
                href="/programs"
                className="hover:text-primary transition-colors"
              >
                Programs
              </Link>
              <Link
                href="/library"
                className="hover:text-primary transition-colors"
              >
                Career Library
              </Link>
              <Link
                href="/financial-aid"
                className="hover:text-primary transition-colors"
              >
                Financial Aid
              </Link>
              <Link
                href="/contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="hover:text-primary transition-colors"
              >
                Privacy
              </Link>
            </div>
          </div>
          <div className="border-t border-surface-light mt-8 pt-8 text-center text-text-muted text-sm">
            &copy; 2025 Degree2Trade. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
