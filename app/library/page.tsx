"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CareerPath,
  careerPaths,
  careerLibrary,
} from "@/lib/quizData";

export default function LibraryPage() {
  const [expandedCareer, setExpandedCareer] = useState<CareerPath | null>(null);

  const allCareers = Object.keys(careerPaths) as CareerPath[];

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
            <Link href="/library" className="text-primary">
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
      <section className="py-12 px-4 border-b border-surface-light">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Career Library
          </h1>
          <p className="text-text-secondary text-lg">
            Explore all career paths and learn what each one involves
          </p>
        </div>
      </section>

      {/* Career Cards */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {allCareers.map((careerKey) => {
              const career = careerPaths[careerKey];
              const library = careerLibrary[careerKey];
              const isExpanded = expandedCareer === careerKey;

              return (
                <div
                  key={careerKey}
                  className="bg-surface rounded-xl border border-surface-light overflow-hidden"
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => setExpandedCareer(isExpanded ? null : careerKey)}
                    className="w-full flex items-center justify-between p-4 hover:bg-surface-light/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{career.icon}</span>
                      <div className="text-left">
                        <span className="font-semibold text-lg block">{career.title}</span>
                        <span className="text-text-secondary text-sm">{career.salary} &bull; {career.training}</span>
                      </div>
                    </div>
                    <span className={`text-2xl transition-transform ${isExpanded ? "rotate-180" : ""}`}>
                      &#9660;
                    </span>
                  </button>

                  {/* Accordion Content */}
                  {isExpanded && (
                    <div className="px-4 pb-6 border-t border-surface-light">
                      {/* Career Overview */}
                      <div className="mt-6 mb-6">
                        <p className="text-text-secondary">{career.description}</p>
                        <div className="grid grid-cols-3 gap-4 mt-4">
                          <div className="text-center p-3 bg-surface-light rounded-lg">
                            <div className="text-primary font-semibold">{career.salary}</div>
                            <div className="text-text-muted text-xs">Salary Range</div>
                          </div>
                          <div className="text-center p-3 bg-surface-light rounded-lg">
                            <div className="text-primary font-semibold">{career.training}</div>
                            <div className="text-text-muted text-xs">Training Time</div>
                          </div>
                          <div className="text-center p-3 bg-surface-light rounded-lg">
                            <div className="text-success font-semibold">{career.growth}</div>
                            <div className="text-text-muted text-xs">Job Growth</div>
                          </div>
                        </div>
                      </div>

                      {/* Day in the Life */}
                      <div className="mt-6">
                        <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                          <span>&#128197;</span> A Day in the Life
                        </h4>
                        <ul className="space-y-2">
                          {library.dayInLife.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                              <span className="text-primary mt-1">&bull;</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Skills & Certifications */}
                      <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                          <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                            <span>&#128170;</span> Key Skills
                          </h4>
                          <ul className="space-y-2">
                            {library.keySkills.map((skill, i) => (
                              <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                                <span className="text-green-400 mt-1">&#10003;</span>
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                            <span>&#128220;</span> Certifications
                          </h4>
                          <ul className="space-y-2">
                            {library.certifications.map((cert, i) => (
                              <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                                <span className="text-yellow-400 mt-1">&#9733;</span>
                                {cert}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Career Path */}
                      <div className="mt-6">
                        <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                          <span>&#128200;</span> Career Progression
                        </h4>
                        <div className="flex flex-wrap items-center gap-2">
                          {library.careerPath.map((step, i) => (
                            <div key={i} className="flex items-center">
                              <span className="px-3 py-1 bg-surface-light rounded-full text-sm text-text-primary">
                                {step}
                              </span>
                              {i < library.careerPath.length - 1 && (
                                <span className="mx-2 text-text-muted">&rarr;</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pros and Cons */}
                      <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-green-500/10 rounded-lg p-4">
                          <h4 className="font-semibold text-green-400 mb-3">Pros</h4>
                          <ul className="space-y-2">
                            {library.prosAndCons.pros.map((pro, i) => (
                              <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                                <span className="text-green-400">+</span>
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-red-500/10 rounded-lg p-4">
                          <h4 className="font-semibold text-red-400 mb-3">Cons</h4>
                          <ul className="space-y-2">
                            {library.prosAndCons.cons.map((con, i) => (
                              <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                                <span className="text-red-400">&minus;</span>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Resources */}
                      <div className="mt-6">
                        <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                          <span>&#128279;</span> Learn More
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {library.resources.map((resource, i) => (
                            <a
                              key={i}
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 bg-surface-light hover:bg-primary/20 rounded-lg text-sm text-text-primary hover:text-primary transition-colors"
                            >
                              {resource.name} &rarr;
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* View Programs CTA */}
                      <div className="mt-6 pt-4 border-t border-surface-light">
                        <Link
                          href={`/programs?career=${careerKey}`}
                          className="inline-block bg-primary hover:bg-primary-hover text-white font-medium px-6 py-2 rounded-lg transition-colors text-sm"
                        >
                          View {career.title} Training Programs &rarr;
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-surface">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Not Sure Which Career Fits You?</h2>
          <p className="text-text-secondary mb-6">
            Take our quick quiz to discover careers that match your interests and skills.
          </p>
          <Link
            href="/quiz"
            className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Take the Career Quiz
          </Link>
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
