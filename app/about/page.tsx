import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Degree2Trade",
  description: "Learn about Degree2Trade - helping college graduates discover rewarding careers in skilled trades.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-surface-light bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="font-display text-xl font-bold text-primary">
            Degree2Trade
          </Link>
          <nav className="flex items-center gap-6 text-text-secondary text-sm">
            <Link href="/programs" className="hover:text-primary transition-colors hidden md:block">
              Programs
            </Link>
            <Link href="/library" className="hover:text-primary transition-colors hidden md:block">
              Career Library
            </Link>
            <Link href="/quiz" className="px-4 py-1.5 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors">
              Take Quiz
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
            About Degree2Trade
          </h1>
          <p className="text-text-secondary text-lg">
            Helping college graduates discover that their degree isn&apos;t a dead end&mdash;it&apos;s a competitive advantage.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Mission */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-text-secondary mb-4">
              Degree2Trade was created to bridge the gap between college education and skilled trade careers. We believe that the narrative around career success needs to change. A four-year degree doesn&apos;t have to lead to a cubicle, and pivoting to the trades isn&apos;t &quot;giving up&quot;&mdash;it&apos;s upgrading.
            </p>
            <p className="text-text-secondary">
              Our mission is to provide college graduates with the information, resources, and confidence they need to explore skilled trade careers. We connect you with training programs, show you the financial reality, and help you have productive conversations with family members who may not understand your decision.
            </p>
          </section>

          {/* The Problem */}
          <section>
            <h2 className="text-2xl font-bold mb-4">The Problem We&apos;re Solving</h2>
            <div className="bg-surface rounded-xl p-6 border border-surface-light">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">40.5%</div>
                  <p className="text-text-muted text-sm">of recent graduates are underemployed</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">$1.8T</div>
                  <p className="text-text-muted text-sm">in collective student loan debt</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">11M+</div>
                  <p className="text-text-muted text-sm">unfilled skilled trade positions</p>
                </div>
              </div>
            </div>
            <p className="text-text-secondary mt-4">
              There&apos;s a massive disconnect: millions of college graduates are struggling to find fulfilling work, while industries across America are desperate for skilled workers. We&apos;re here to connect those dots.
            </p>
          </section>

          {/* What We Offer */}
          <section>
            <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
            <div className="space-y-4">
              <div className="bg-surface rounded-lg p-5 border border-surface-light">
                <h3 className="font-semibold mb-2">Career Matching Quiz</h3>
                <p className="text-text-secondary text-sm">
                  Our 90-second quiz matches your interests, personality, and preferences to skilled trade careers. No email required, instant results.
                </p>
              </div>
              <div className="bg-surface rounded-lg p-5 border border-surface-light">
                <h3 className="font-semibold mb-2">Training Program Directory</h3>
                <p className="text-text-secondary text-sm">
                  Browse hundreds of accredited training programs, apprenticeships, and certifications across the country. Filter by career, location, and program type.
                </p>
              </div>
              <div className="bg-surface rounded-lg p-5 border border-surface-light">
                <h3 className="font-semibold mb-2">Career Library</h3>
                <p className="text-text-secondary text-sm">
                  In-depth guides for each career path including salary data, day-in-the-life descriptions, required certifications, and career progression paths.
                </p>
              </div>
              <div className="bg-surface rounded-lg p-5 border border-surface-light">
                <h3 className="font-semibold mb-2">Resources for Families</h3>
                <p className="text-text-secondary text-sm">
                  Dedicated pages for parents and graduates with conversation guides, financial calculators, and research to help families navigate career transitions together.
                </p>
              </div>
            </div>
          </section>

          {/* Your Degree Advantage */}
          <section>
            <h2 className="text-2xl font-bold mb-4">The Degree Advantage</h2>
            <p className="text-text-secondary mb-4">
              Here&apos;s what most people don&apos;t realize: your college education gives you a real advantage in the trades. You&apos;ve developed:
            </p>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">&#10003;</span>
                <span><strong className="text-text-primary">Critical thinking skills</strong> that help you troubleshoot complex problems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">&#10003;</span>
                <span><strong className="text-text-primary">Communication abilities</strong> that make you effective with clients and teams</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">&#10003;</span>
                <span><strong className="text-text-primary">Project management experience</strong> from juggling coursework, jobs, and life</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">&#10003;</span>
                <span><strong className="text-text-primary">Learning capacity</strong> that helps you master new technical skills faster</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">&#10003;</span>
                <span><strong className="text-text-primary">Business acumen</strong> that positions you for leadership and entrepreneurship</span>
              </li>
            </ul>
            <p className="text-text-secondary mt-4">
              Many trade employers actively seek college graduates because they bring a unique combination of soft skills and adaptability that&apos;s hard to find.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-surface rounded-xl p-8 border border-surface-light">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-text-secondary mb-6">
              Have questions, feedback, or want to partner with us? We&apos;d love to hear from you.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a href="mailto:contact@degree2jobs.com" className="text-primary hover:underline">
                  contact@degree2jobs.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold mb-1">For Training Programs</h3>
                <p className="text-text-secondary text-sm">
                  If you run a training program and would like to be listed on our site, please reach out. We&apos;re always looking to connect graduates with quality programs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">For Media Inquiries</h3>
                <p className="text-text-secondary text-sm">
                  Members of the press can contact us at the email above for interviews, data, or expert commentary on the college-to-trades pipeline.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-xl font-bold mb-4">Ready to Explore Your Options?</h2>
            <p className="text-text-secondary mb-6">
              Take our quick career quiz to discover which skilled trades match your interests and abilities.
            </p>
            <Link
              href="/quiz"
              className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Take the Career Quiz
            </Link>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface py-8 px-4 border-t border-surface-light">
        <div className="max-w-6xl mx-auto text-center text-text-muted text-sm">
          &copy; 2025 Degree2Trade. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
