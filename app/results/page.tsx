"use client";

import { Suspense, useState, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  CareerPath,
  careerPaths,
  careerLibrary,
  getDegreeAdvantage,
} from "@/lib/quizData";
import { careerComparisons } from "@/lib/shortageData";

type CareerScores = Record<CareerPath, number>;

function ResultsContent() {
  const searchParams = useSearchParams();
  const [userMajor, setUserMajor] = useState<string | null>(null);
  const [majorInput, setMajorInput] = useState("");
  const [showMajorPrompt, setShowMajorPrompt] = useState(true);
  const [expandedLibrary, setExpandedLibrary] = useState<CareerPath | null>(null);

  // Self-directed career filters
  const [minSalary, setMinSalary] = useState<number>(0);
  const [maxTrainingMonths, setMaxTrainingMonths] = useState<number>(60);
  const [trainingCost, setTrainingCost] = useState<string>("all");
  const [physicalDemand, setPhysicalDemand] = useState<string>("all");
  const [workSchedule, setWorkSchedule] = useState<string>("all");
  const [showExplorer, setShowExplorer] = useState(false);

  // Filter careers based on user preferences
  const filteredCareers = useMemo(() => {
    return careerComparisons.filter(career => {
      if (career.avgSalary < minSalary) return false;
      if (career.trainingMonths > maxTrainingMonths) return false;
      if (trainingCost !== "all" && career.trainingCost !== trainingCost) return false;
      if (physicalDemand !== "all" && career.physicalDemand !== physicalDemand) return false;
      if (workSchedule !== "all" && career.workSchedule !== workSchedule) return false;
      return true;
    }).sort((a, b) => b.avgSalary - a.avgSalary);
  }, [minSalary, maxTrainingMonths, trainingCost, physicalDemand, workSchedule]);

  // Parse scores from URL
  const scoresParam = searchParams.get("scores");
  let scores: CareerScores | null = null;

  try {
    if (scoresParam) {
      scores = JSON.parse(decodeURIComponent(scoresParam)) as CareerScores;
    }
  } catch {
    scores = null;
  }

  if (!scores) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">No Results Found</h1>
          <p className="text-text-secondary mb-6">
            It looks like you haven&apos;t taken the quiz yet.
          </p>
          <Link
            href="/quiz"
            className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Take the Quiz
          </Link>
        </div>
      </div>
    );
  }

  // Sort careers by score
  const sortedCareers = (Object.entries(scores) as [CareerPath, number][])
    .sort(([, a], [, b]) => b - a);

  const topThree = sortedCareers.slice(0, 3);
  const otherMatches = sortedCareers.slice(3, 7);

  // Calculate percentage (max theoretical score is around 30)
  const calculatePercentage = (score: number) => {
    const percentage = (score / 30) * 100;
    return Math.min(Math.round(percentage), 100);
  };

  const handleMajorSubmit = () => {
    if (majorInput.trim()) {
      setUserMajor(majorInput.trim());
    }
    setShowMajorPrompt(false);
  };

  const handleSkip = () => {
    setShowMajorPrompt(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-surface-light bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="font-display text-xl font-bold text-primary">
            Degree2Trade
          </Link>
          <nav className="flex items-center gap-6 text-text-secondary text-sm">
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

      {/* Results Hero */}
      <section className="py-12 px-4 border-b border-surface-light">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Your Career Matches
          </h1>
          <p className="text-text-secondary text-lg">
            Based on your answers, here are the careers that best match your
            interests and preferences.
          </p>
        </div>
      </section>

      {/* Major Input Prompt */}
      {showMajorPrompt && (
        <section className="py-8 px-4 bg-surface">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-xl font-semibold mb-4">
              What was your college major?
            </h2>
            <p className="text-text-secondary text-sm mb-4">
              We&apos;ll show you how your degree gives you an advantage in each
              career.
            </p>
            <input
              type="text"
              value={majorInput}
              onChange={(e) => setMajorInput(e.target.value)}
              placeholder="e.g., Psychology, Biology, Business"
              className="w-full px-4 py-3 bg-surface-light border border-surface-light rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary mb-4"
            />
            <div className="flex gap-3 justify-center">
              <button
                onClick={handleMajorSubmit}
                className="px-6 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors"
              >
                Continue
              </button>
              <button
                onClick={handleSkip}
                className="px-6 py-2 bg-surface-light hover:bg-surface text-text-secondary rounded-lg transition-colors"
              >
                Skip
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Top 3 Matches */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Your Top Matches
          </h2>
          <div className="space-y-6">
            {topThree.map(([careerKey, score], index) => {
              const career = careerPaths[careerKey];
              const percentage = calculatePercentage(score);
              const degreeAdvantage = getDegreeAdvantage(careerKey, userMajor);

              return (
                <div
                  key={careerKey}
                  className="bg-surface rounded-xl p-6 border border-surface-light"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-4xl">
                      {index === 0 ? "🏆" : career.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold">{career.title}</h3>
                        <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                          {percentage}% Match
                        </span>
                      </div>
                      <p className="text-text-secondary">{career.tagline}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Left Column - Career Info */}
                    <div>
                      <p className="text-text-secondary text-sm mb-4">
                        {career.description}
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-text-muted">Salary Range:</span>
                          <span className="text-primary font-medium">
                            {career.salary}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-muted">Training Time:</span>
                          <span className="text-text-primary">
                            {career.training}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-muted">Job Growth:</span>
                          <span className="text-success">{career.growth}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Degree Advantage */}
                    <div className="bg-surface-light rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-primary mb-2">
                        Your Degree Advantage
                      </h4>
                      <p className="text-text-secondary text-sm">
                        {degreeAdvantage}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-surface-light">
                    <Link
                      href={`/programs?career=${careerKey}`}
                      className="inline-block bg-primary hover:bg-primary-hover text-white font-medium px-6 py-2 rounded-lg transition-colors text-sm"
                    >
                      View {career.title} Programs
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other Matches */}
      {otherMatches.length > 0 && (
        <section className="py-12 px-4 bg-surface">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-6">Other Matches</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {otherMatches.map(([careerKey, score]) => {
                const career = careerPaths[careerKey];
                const percentage = calculatePercentage(score);

                return (
                  <div
                    key={careerKey}
                    className="bg-surface-light rounded-lg p-4 border border-surface-light"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{career.icon}</span>
                      <div>
                        <h3 className="font-semibold">{career.title}</h3>
                        <span className="text-text-muted text-sm">
                          {percentage}% Match
                        </span>
                      </div>
                    </div>
                    <p className="text-text-secondary text-sm mb-2">
                      {career.salary}
                    </p>
                    <p className="text-text-muted text-xs">{career.training}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Self-Directed Career Explorer */}
      <section className="py-12 px-4 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Find Your Perfect Fit</h2>
            <p className="text-text-secondary">
              Not sure about your quiz results? Explore careers based on what matters most to you.
            </p>
            <button
              onClick={() => setShowExplorer(!showExplorer)}
              className="mt-4 px-6 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors"
            >
              {showExplorer ? "Hide Explorer" : "Open Career Explorer"}
            </button>
          </div>

          {showExplorer && (
            <div className="bg-surface rounded-xl border border-surface-light p-6">
              {/* Filter Controls */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Salary Filter */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Minimum Salary: ${minSalary.toLocaleString()}+
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="80000"
                    step="5000"
                    value={minSalary}
                    onChange={(e) => setMinSalary(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                  <div className="flex justify-between text-xs text-text-muted mt-1">
                    <span>Any</span>
                    <span>$80K+</span>
                  </div>
                </div>

                {/* Training Time Filter */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Max Training Time: {maxTrainingMonths < 60 ? `${maxTrainingMonths} months` : "Any"}
                  </label>
                  <input
                    type="range"
                    min="3"
                    max="60"
                    step="3"
                    value={maxTrainingMonths}
                    onChange={(e) => setMaxTrainingMonths(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                  <div className="flex justify-between text-xs text-text-muted mt-1">
                    <span>3 months</span>
                    <span>5 years</span>
                  </div>
                </div>

                {/* Training Cost Filter */}
                <div>
                  <label className="block text-sm font-medium mb-2">Training Cost</label>
                  <select
                    value={trainingCost}
                    onChange={(e) => setTrainingCost(e.target.value)}
                    className="w-full px-3 py-2 bg-surface-light border border-surface-light rounded-lg text-text-primary"
                  >
                    <option value="all">Any Cost</option>
                    <option value="free">Free (Paid Apprenticeship)</option>
                    <option value="low">Low (Under $15K)</option>
                    <option value="medium">Medium ($15-60K)</option>
                  </select>
                </div>

                {/* Physical Demand Filter */}
                <div>
                  <label className="block text-sm font-medium mb-2">Physical Demand</label>
                  <select
                    value={physicalDemand}
                    onChange={(e) => setPhysicalDemand(e.target.value)}
                    className="w-full px-3 py-2 bg-surface-light border border-surface-light rounded-lg text-text-primary"
                  >
                    <option value="all">Any Level</option>
                    <option value="low">Low (Desk/Lab work)</option>
                    <option value="medium">Medium (Some physical activity)</option>
                    <option value="high">High (Physically demanding)</option>
                  </select>
                </div>

                {/* Work Schedule Filter */}
                <div>
                  <label className="block text-sm font-medium mb-2">Work Schedule</label>
                  <select
                    value={workSchedule}
                    onChange={(e) => setWorkSchedule(e.target.value)}
                    className="w-full px-3 py-2 bg-surface-light border border-surface-light rounded-lg text-text-primary"
                  >
                    <option value="all">Any Schedule</option>
                    <option value="regular">Regular Hours (M-F)</option>
                    <option value="shifts">Shift Work</option>
                    <option value="flexible">Flexible</option>
                    <option value="oncall">On-Call</option>
                  </select>
                </div>

                {/* Reset Button */}
                <div className="flex items-end">
                  <button
                    onClick={() => {
                      setMinSalary(0);
                      setMaxTrainingMonths(60);
                      setTrainingCost("all");
                      setPhysicalDemand("all");
                      setWorkSchedule("all");
                    }}
                    className="px-4 py-2 bg-surface-light hover:bg-surface text-text-secondary rounded-lg transition-colors text-sm"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>

              {/* Results Count */}
              <div className="mb-4 text-text-secondary text-sm">
                Showing {filteredCareers.length} of {careerComparisons.length} careers
              </div>

              {/* Filtered Career Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCareers.map((career) => (
                  <div
                    key={career.id}
                    className="bg-surface-light rounded-lg p-4 border border-surface-light hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl" dangerouslySetInnerHTML={{ __html: career.icon }} />
                      <div>
                        <h3 className="font-semibold">{career.name}</h3>
                        <span className="text-primary font-medium text-sm">
                          {career.salaryRange}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-text-muted">Training:</span>
                        <span className="text-text-primary">{career.trainingDesc}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-muted">Cost:</span>
                        <span className={`${career.trainingCost === "free" ? "text-green-400" : "text-text-primary"}`}>
                          {career.trainingCostDesc}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-muted">Job Growth:</span>
                        <span className="text-success">+{career.jobGrowth}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-muted">Shortage:</span>
                        <span className="text-red-400 text-right">{career.shortage}</span>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-3 pt-3 border-t border-surface">
                      <span className={`px-2 py-0.5 rounded text-xs ${
                        career.physicalDemand === "low" ? "bg-blue-500/20 text-blue-400" :
                        career.physicalDemand === "medium" ? "bg-yellow-500/20 text-yellow-400" :
                        "bg-orange-500/20 text-orange-400"
                      }`}>
                        {career.physicalDemand} physical
                      </span>
                      <span className="px-2 py-0.5 rounded text-xs bg-surface text-text-muted">
                        {career.workSchedule === "regular" ? "M-F" :
                         career.workSchedule === "shifts" ? "Shifts" :
                         career.workSchedule === "flexible" ? "Flexible" : "On-call"}
                      </span>
                    </div>

                    <Link
                      href={`/programs?career=${career.id}`}
                      className="block mt-3 text-center text-primary hover:underline text-sm"
                    >
                      View Programs &rarr;
                    </Link>
                  </div>
                ))}
              </div>

              {filteredCareers.length === 0 && (
                <div className="text-center py-8 text-text-secondary">
                  No careers match your current filters. Try adjusting your preferences.
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Career Library */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center">Career Library</h2>
          <p className="text-text-secondary text-center mb-8">
            Learn more about your top career matches
          </p>

          <div className="space-y-4">
            {topThree.map(([careerKey]) => {
              const career = careerPaths[careerKey];
              const library = careerLibrary[careerKey];
              const isExpanded = expandedLibrary === careerKey;

              return (
                <div
                  key={`library-${careerKey}`}
                  className="bg-surface rounded-xl border border-surface-light overflow-hidden"
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => setExpandedLibrary(isExpanded ? null : careerKey)}
                    className="w-full flex items-center justify-between p-4 hover:bg-surface-light/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{career.icon}</span>
                      <span className="font-semibold text-lg">{career.title}</span>
                    </div>
                    <span className={`text-2xl transition-transform ${isExpanded ? "rotate-180" : ""}`}>
                      ▼
                    </span>
                  </button>

                  {/* Accordion Content */}
                  {isExpanded && (
                    <div className="px-4 pb-6 border-t border-surface-light">
                      {/* Day in the Life */}
                      <div className="mt-6">
                        <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                          <span>📅</span> A Day in the Life
                        </h4>
                        <ul className="space-y-2">
                          {library.dayInLife.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                              <span className="text-primary mt-1">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Skills & Certifications */}
                      <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                          <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                            <span>💪</span> Key Skills
                          </h4>
                          <ul className="space-y-2">
                            {library.keySkills.map((skill, i) => (
                              <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                                <span className="text-green-400 mt-1">✓</span>
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                            <span>📜</span> Certifications
                          </h4>
                          <ul className="space-y-2">
                            {library.certifications.map((cert, i) => (
                              <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                                <span className="text-yellow-400 mt-1">★</span>
                                {cert}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Career Path */}
                      <div className="mt-6">
                        <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                          <span>📈</span> Career Progression
                        </h4>
                        <div className="flex flex-wrap items-center gap-2">
                          {library.careerPath.map((step, i) => (
                            <div key={i} className="flex items-center">
                              <span className="px-3 py-1 bg-surface-light rounded-full text-sm text-text-primary">
                                {step}
                              </span>
                              {i < library.careerPath.length - 1 && (
                                <span className="mx-2 text-text-muted">→</span>
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
                                <span className="text-red-400">−</span>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Resources */}
                      <div className="mt-6">
                        <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                          <span>🔗</span> Learn More
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
                              {resource.name} →
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
                          View {career.title} Training Programs →
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

      {/* Final CTA */}
      <section className="py-12 px-4 bg-surface">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Take the Next Step?</h2>
          <p className="text-text-secondary mb-6">
            Explore training programs in your area or retake the quiz to explore
            different options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/programs"
              className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Browse All Programs
            </Link>
            <Link
              href="/quiz"
              className="inline-block bg-surface hover:bg-surface-light text-text-primary font-semibold px-8 py-3 rounded-lg transition-colors border border-surface-light"
            >
              Retake Quiz
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

export default function ResultsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-text-secondary">Loading your results...</p>
          </div>
        </div>
      }
    >
      <ResultsContent />
    </Suspense>
  );
}
