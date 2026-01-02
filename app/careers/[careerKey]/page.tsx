import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  CareerPath,
  careerPaths,
  careerLibrary,
} from "@/lib/quizData";
import { TextWithAcronyms } from "@/components/Acronym";
import { ResponsiveAd, InContentAd } from "@/components/AdPlaceholder";
import { Header } from "@/components/Header";

// Generate static params for all careers
export function generateStaticParams() {
  return Object.keys(careerPaths).map((careerKey) => ({
    careerKey,
  }));
}

// Generate metadata for each career page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ careerKey: string }>;
}): Promise<Metadata> {
  const { careerKey } = await params;
  const career = careerPaths[careerKey as CareerPath];

  if (!career) {
    return {
      title: "Career Not Found | Degree2Trade",
    };
  }

  return {
    title: `${career.title} Career Guide | Degree2Trade`,
    description: `Learn about becoming a ${career.title}. ${career.tagline} Salary: ${career.salary}, Training: ${career.training}, Growth: ${career.growth}`,
  };
}

export default async function CareerPage({
  params,
}: {
  params: Promise<{ careerKey: string }>;
}) {
  const { careerKey } = await params;

  // Validate career exists
  if (!Object.keys(careerPaths).includes(careerKey)) {
    notFound();
  }

  const career = careerPaths[careerKey as CareerPath];
  const library = careerLibrary[careerKey as CareerPath];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-primary/10 via-background to-background border-b border-surface-light">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-text-muted mb-6">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/library" className="hover:text-primary">Career Library</Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">{career.title}</span>
          </nav>

          <div className="flex items-start gap-6">
            <span className="text-6xl">{career.icon}</span>
            <div className="flex-1">
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
                {career.title}
              </h1>
              <p className="text-text-secondary text-lg mb-6">
                {career.tagline}
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap gap-4">
                <div className="bg-surface rounded-lg px-4 py-3">
                  <div className="text-primary font-bold text-lg">{career.salary}</div>
                  <div className="text-text-muted text-xs">National Salary Range</div>
                  {career.salaryHighCost && (
                    <div className="mt-2 pt-2 border-t border-surface-light">
                      <div className="text-primary font-bold">{career.salaryHighCost}</div>
                      <div className="text-text-muted text-xs">In CA, NY, WA, MA</div>
                    </div>
                  )}
                </div>
                <div className="bg-surface rounded-lg px-4 py-3">
                  <div className="text-text-primary font-bold text-lg">{career.training}</div>
                  <div className="text-text-muted text-xs">Training Time</div>
                </div>
                <div className="bg-surface rounded-lg px-4 py-3">
                  <div className="text-success font-bold text-lg">{career.growth}</div>
                  <div className="text-text-muted text-xs">Job Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad - Below Hero */}
      <div className="py-6 flex justify-center border-b border-surface-light">
        <ResponsiveAd desktopSize="leaderboard" mobileSize="mobile-banner" />
      </div>

      {/* Career Overview */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Career Overview</h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            <TextWithAcronyms text={career.description} />
          </p>
        </div>
      </section>

      {/* Day in the Life */}
      <section className="py-12 px-4 bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span>&#128197;</span> A Day in the Life
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {library.dayInLife.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-surface-light rounded-lg p-4">
                <span className="text-primary font-bold text-lg">{i + 1}</span>
                <span className="text-text-secondary">
                  <TextWithAcronyms text={item} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Certifications */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Key Skills */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span>&#128170;</span> Key Skills
              </h2>
              <ul className="space-y-3">
                {library.keySkills.map((skill, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-secondary">
                    <span className="text-green-400 mt-1">&#10003;</span>
                    <TextWithAcronyms text={skill} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span>&#128220;</span> Certifications
              </h2>
              <ul className="space-y-3">
                {library.certifications.map((cert, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-secondary">
                    <span className="text-yellow-400 mt-1">&#9733;</span>
                    <TextWithAcronyms text={cert} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ad - Mid Page */}
      <InContentAd />

      {/* Career Progression */}
      <section className="py-12 px-4 bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span>&#128200;</span> Career Progression
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            {library.careerPath.map((step, i) => (
              <div key={i} className="flex items-center">
                <span className="px-4 py-2 bg-surface-light rounded-full text-text-primary font-medium">
                  {step}
                </span>
                {i < library.careerPath.length - 1 && (
                  <span className="mx-3 text-primary text-xl">&rarr;</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Pros &amp; Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/20">
              <h3 className="text-xl font-bold text-green-400 mb-4">Pros</h3>
              <ul className="space-y-3">
                {library.prosAndCons.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-secondary">
                    <span className="text-green-400 text-lg">+</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
              <h3 className="text-xl font-bold text-red-400 mb-4">Cons</h3>
              <ul className="space-y-3">
                {library.prosAndCons.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-secondary">
                    <span className="text-red-400 text-lg">&minus;</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-12 px-4 bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span>&#128279;</span> Learn More
          </h2>
          <div className="flex flex-wrap gap-4">
            {library.resources.map((resource, i) => (
              <a
                key={i}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-surface-light hover:bg-primary/20 rounded-lg text-text-primary hover:text-primary transition-colors font-medium"
              >
                {resource.name} &rarr;
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Ad - Before CTA */}
      <InContentAd />

      {/* CTA Section */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-text-secondary mb-8">
            Find training programs near you or compare this career with others.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/programs?career=${careerKey}`}
              className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              View {career.title} Programs
            </Link>
            <Link
              href="/library"
              className="inline-block bg-surface hover:bg-surface-light text-text-primary font-semibold px-8 py-3 rounded-lg transition-colors border border-surface-light"
            >
              Compare Careers
            </Link>
          </div>
        </div>
      </section>

      {/* Related Careers */}
      <section className="py-12 px-4 bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">Explore Other Careers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(careerPaths)
              .filter(([key]) => key !== careerKey)
              .slice(0, 4)
              .map(([key, c]) => (
                <Link
                  key={key}
                  href={`/careers/${key}`}
                  className="bg-surface-light hover:bg-primary/10 rounded-lg p-4 text-center transition-colors group"
                >
                  <span className="text-3xl block mb-2">{c.icon}</span>
                  <span className="font-medium group-hover:text-primary transition-colors">
                    {c.title}
                  </span>
                </Link>
              ))}
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
