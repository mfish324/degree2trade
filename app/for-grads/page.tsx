"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import {
  gradResources,
  gradCategories,
  getFeaturedResources,
  filterResources,
  typeBadgeStyles,
  typeDisplayNames,
  conversationScripts,
  type Resource,
  type ResourceType,
} from "@/lib/resourcesData";
import { ResponsiveAd, InContentAd } from "@/components/AdPlaceholder";

function ResourceTypeBadge({ type }: { type: ResourceType }) {
  const style = typeBadgeStyles[type];
  const displayName = typeDisplayNames[type];
  return (
    <span
      className={`px-2 py-0.5 rounded text-xs font-medium ${style.bg} ${style.text}`}
    >
      {displayName}
    </span>
  );
}

function ResourceCard({ resource }: { resource: Resource }) {
  const isDayInLife = resource.category === "Day-in-the-Life";

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-surface rounded-xl border transition-all p-5 group block h-full ${
        isDayInLife
          ? "border-yellow-500/30 hover:border-yellow-500/50"
          : "border-surface-light hover:border-primary/50"
      }`}
    >
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <ResourceTypeBadge type={resource.type} />
        {resource.duration && (
          <span className="text-text-muted text-xs">{resource.duration}</span>
        )}
        {isDayInLife && (
          <span className="px-2 py-0.5 rounded text-xs font-medium bg-yellow-500/20 text-yellow-400">
            Day-in-the-Life
          </span>
        )}
      </div>
      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
        {resource.title}
      </h3>
      <p className="text-text-muted text-sm mb-2">{resource.author}</p>
      <p className="text-text-secondary text-sm line-clamp-3 mb-4">
        {resource.description}
      </p>
      <span className="text-primary text-sm font-medium">
        {resource.type === "video" ||
        resource.type === "podcast" ||
        resource.type === "youtube-channel" ||
        resource.type === "tiktok"
          ? "Watch"
          : resource.type === "reddit"
          ? "Visit"
          : "Read"}{" "}
        &rarr;
      </span>
    </a>
  );
}

function FeaturedCarousel({ resources }: { resources: Resource[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % resources.length);
  }, [resources.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + resources.length) % resources.length);
  };

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {resources.map((resource) => (
            <div key={resource.id} className="w-full flex-shrink-0 px-2">
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-primary/20 via-surface to-surface rounded-xl border border-primary/30 p-8 block hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <ResourceTypeBadge type={resource.type} />
                  {resource.duration && (
                    <span className="text-text-muted text-sm">
                      {resource.duration}
                    </span>
                  )}
                  <span className="px-2 py-0.5 rounded text-xs font-medium bg-primary/20 text-primary">
                    Featured
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">
                  {resource.title}
                </h3>
                <p className="text-text-muted mb-4">{resource.author}</p>
                <p className="text-text-secondary text-lg mb-6">
                  {resource.description}
                </p>
                <span className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                  {resource.type === "video" ||
                  resource.type === "podcast" ||
                  resource.type === "youtube-channel"
                    ? "Watch Now"
                    : resource.type === "reddit"
                    ? "Join Community"
                    : "Read Now"}{" "}
                  &rarr;
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-surface border border-surface-light rounded-full p-2 hover:bg-surface-light transition-colors"
        aria-label="Previous"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-surface border border-surface-light rounded-full p-2 hover:bg-surface-light transition-colors"
        aria-label="Next"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {resources.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-primary" : "bg-surface-light"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function FinancialCalculator() {
  const [currentSalary, setCurrentSalary] = useState(45000);
  const [studentDebt, setStudentDebt] = useState(35000);
  const [tradeProgramCost, setTradeProgramCost] = useState(15000);
  const [tradeProgramMonths, setTradeProgramMonths] = useState(12);
  const [tradeStartingSalary, setTradeStartingSalary] = useState(55000);
  const [tradeGrowthRate] = useState(0.05); // 5% annual growth
  const [currentGrowthRate] = useState(0.02); // 2% annual growth

  // Calculate 5-year and 10-year projections
  const calculateProjection = (years: number) => {
    let currentPathTotal = 0;
    let tradePathTotal = 0;

    // Current path: salary minus debt payments (assume 10-year repayment)
    const monthlyDebtPayment = studentDebt / 120; // 10-year repayment
    let currentSal = currentSalary;
    for (let i = 0; i < years; i++) {
      const annualDebtPayment = i < 10 ? monthlyDebtPayment * 12 : 0;
      currentPathTotal += currentSal - annualDebtPayment;
      currentSal *= 1 + currentGrowthRate;
    }

    // Trade path: program cost + lost income during training, then higher salary
    const trainingYears = tradeProgramMonths / 12;
    tradePathTotal -= tradeProgramCost; // Program cost
    tradePathTotal -= currentSalary * trainingYears * 0.5; // Assume 50% income during training

    let tradeSal = tradeStartingSalary;
    for (let i = 0; i < years - trainingYears; i++) {
      tradePathTotal += tradeSal;
      tradeSal *= 1 + tradeGrowthRate;
    }

    return {
      currentPath: Math.round(currentPathTotal),
      tradePath: Math.round(tradePathTotal),
      difference: Math.round(tradePathTotal - currentPathTotal),
    };
  };

  const fiveYear = calculateProjection(5);
  const tenYear = calculateProjection(10);

  // Calculate break-even point (simplified)
  const breakEvenYears = Math.ceil(
    (tradeProgramCost + currentSalary * (tradeProgramMonths / 12) * 0.5) /
      (tradeStartingSalary - currentSalary)
  );

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <div className="bg-surface rounded-xl border border-surface-light p-6 md:p-8">
      <h3 className="font-display text-xl font-bold mb-6">
        The Financial Case for Pivoting
      </h3>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Inputs */}
        <div className="space-y-5">
          <div>
            <label className="block text-text-secondary text-sm mb-2">
              Current Annual Salary
            </label>
            <input
              type="range"
              min={25000}
              max={100000}
              step={1000}
              value={currentSalary}
              onChange={(e) => setCurrentSalary(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <div className="text-primary font-bold text-lg">
              {formatCurrency(currentSalary)}
            </div>
          </div>

          <div>
            <label className="block text-text-secondary text-sm mb-2">
              Student Debt Remaining
            </label>
            <input
              type="range"
              min={0}
              max={150000}
              step={1000}
              value={studentDebt}
              onChange={(e) => setStudentDebt(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <div className="text-red-400 font-bold text-lg">
              {formatCurrency(studentDebt)}
            </div>
          </div>

          <div>
            <label className="block text-text-secondary text-sm mb-2">
              Trade Program Cost
            </label>
            <input
              type="range"
              min={0}
              max={50000}
              step={1000}
              value={tradeProgramCost}
              onChange={(e) => setTradeProgramCost(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <div className="text-text-primary font-bold text-lg">
              {formatCurrency(tradeProgramCost)}
            </div>
          </div>

          <div>
            <label className="block text-text-secondary text-sm mb-2">
              Training Duration (months)
            </label>
            <input
              type="range"
              min={3}
              max={48}
              step={1}
              value={tradeProgramMonths}
              onChange={(e) => setTradeProgramMonths(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <div className="text-text-primary font-bold text-lg">
              {tradeProgramMonths} months
            </div>
          </div>

          <div>
            <label className="block text-text-secondary text-sm mb-2">
              Trade Starting Salary
            </label>
            <input
              type="range"
              min={35000}
              max={100000}
              step={1000}
              value={tradeStartingSalary}
              onChange={(e) => setTradeStartingSalary(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <div className="text-green-400 font-bold text-lg">
              {formatCurrency(tradeStartingSalary)}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {/* Break-even */}
          <div className="bg-surface-light rounded-lg p-4">
            <div className="text-text-muted text-sm mb-1">Break-even Point</div>
            <div className="text-3xl font-bold text-primary">
              ~{breakEvenYears > 0 ? breakEvenYears : 1} year
              {breakEvenYears !== 1 ? "s" : ""}
            </div>
            <div className="text-text-secondary text-sm">
              after completing training
            </div>
          </div>

          {/* 5-Year Comparison */}
          <div className="bg-surface-light rounded-lg p-4">
            <div className="text-text-muted text-sm mb-3">
              5-Year Net Earnings
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Current Path:</span>
                <span className="font-semibold">
                  {formatCurrency(fiveYear.currentPath)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Trade Path:</span>
                <span className="font-semibold text-green-400">
                  {formatCurrency(fiveYear.tradePath)}
                </span>
              </div>
              <div className="border-t border-surface pt-2 mt-2">
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Difference:</span>
                  <span
                    className={`font-bold ${
                      fiveYear.difference >= 0
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {fiveYear.difference >= 0 ? "+" : ""}
                    {formatCurrency(fiveYear.difference)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 10-Year Comparison */}
          <div className="bg-surface-light rounded-lg p-4">
            <div className="text-text-muted text-sm mb-3">
              10-Year Net Earnings
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Current Path:</span>
                <span className="font-semibold">
                  {formatCurrency(tenYear.currentPath)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Trade Path:</span>
                <span className="font-semibold text-green-400">
                  {formatCurrency(tenYear.tradePath)}
                </span>
              </div>
              <div className="border-t border-surface pt-2 mt-2">
                <div className="flex justify-between items-center">
                  <span className="text-text-muted">Difference:</span>
                  <span
                    className={`font-bold text-lg ${
                      tenYear.difference >= 0
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {tenYear.difference >= 0 ? "+" : ""}
                    {formatCurrency(tenYear.difference)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-text-muted text-xs text-center">
        * Estimates assume 5% annual raises in trades vs 2% in current role.
        Actual results vary by location, trade, and individual circumstances.
      </p>
    </div>
  );
}

function ConversationScriptsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {conversationScripts.map((script, index) => (
        <div
          key={index}
          className="bg-surface rounded-xl border border-surface-light overflow-hidden"
        >
          <button
            onClick={() =>
              setExpandedIndex(expandedIndex === index ? null : index)
            }
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-surface-light/50 transition-colors"
          >
            <span className="font-semibold text-left">{script.title}</span>
            <svg
              className={`w-5 h-5 text-text-muted transition-transform ${
                expandedIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {expandedIndex === index && (
            <div className="px-6 pb-6">
              <div className="bg-surface-light rounded-lg p-4">
                <pre className="whitespace-pre-wrap font-sans text-text-secondary text-sm leading-relaxed">
                  {script.content}
                </pre>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ForGradsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedType, setSelectedType] = useState<string>("All");

  const featuredResources = getFeaturedResources(gradResources);
  const filteredResources = filterResources(
    gradResources,
    selectedCategory,
    selectedType
  );

  const resourceTypes = [
    "All",
    "video",
    "article",
    "essay",
    "podcast",
    "youtube-channel",
    "tiktok",
    "reddit",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
            For Graduates
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            How to Tell Your Parents
            <br />
            <span className="text-primary">You&apos;re Pivoting</span>
          </h1>
          <p className="text-xl text-text-secondary mb-6 max-w-2xl mx-auto">
            (Without breaking their hearts or yours)
          </p>
          <p className="text-text-muted max-w-xl mx-auto">
            This conversation is hard. Your parents invested in your education,
            you feel like you&apos;re letting them down. These resources will
            help you show them&mdash;and yourself&mdash;that this isn&apos;t
            failure. It&apos;s strategic career planning.
          </p>
        </div>
      </section>

      {/* Ad - Below Hero */}
      <div className="py-6 flex justify-center border-b border-surface-light">
        <ResponsiveAd desktopSize="leaderboard" mobileSize="mobile-banner" />
      </div>

      {/* Featured Resources Carousel */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-8 text-center">
            Start Here: Resources That Get It
          </h2>
          <FeaturedCarousel resources={featuredResources} />
        </div>
      </section>

      {/* Financial Calculator */}
      <section className="py-16 px-4 bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-4">
            Show Them the Math
          </h2>
          <p className="text-text-secondary text-center mb-8 max-w-2xl mx-auto">
            Numbers don&apos;t lie. Use this calculator to build your financial
            case.
          </p>
          <FinancialCalculator />
        </div>
      </section>

      {/* Ad - Mid Page */}
      <InContentAd />

      {/* Conversation Scripts */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-4">
            Scripts That Work
          </h2>
          <p className="text-text-secondary text-center mb-8">
            Expand each section for conversation templates you can customize.
          </p>
          <ConversationScriptsSection />
        </div>
      </section>

      {/* Ad - Before Resource Grid */}
      <InContentAd />

      {/* Filterable Resource Grid */}
      <section className="py-16 px-4 bg-surface">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-4">
            All Resources for Graduates
          </h2>
          <p className="text-text-secondary text-center mb-8">
            Videos, articles, communities, and real stories to help you make
            your case.
          </p>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === "All"
                    ? "bg-primary text-white"
                    : "bg-surface-light border border-surface-light hover:border-primary/50 text-text-secondary"
                }`}
              >
                All Topics
              </button>
              {gradCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-surface-light border border-surface-light hover:border-primary/50 text-text-secondary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Type Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {resourceTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    selectedType === type
                      ? "bg-surface text-primary border border-primary/50"
                      : "bg-surface-light border border-surface-light hover:border-surface text-text-muted"
                  }`}
                >
                  {type === "All"
                    ? "All Types"
                    : typeDisplayNames[type as ResourceType] || type}
                </button>
              ))}
            </div>
          </div>

          {/* Resource Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-muted">
                No resources found for this filter combination.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedType("All");
                }}
                className="mt-4 text-primary hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold mb-4">
            Ready to Take the Quiz?
          </h2>
          <p className="text-text-secondary mb-8">
            Find out which trade careers match your interests and degree. Get
            personalized recommendations and talking points for your
            conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiz"
              className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Take the Career Quiz
            </Link>
            <Link
              href="/for-parents"
              className="inline-block bg-surface hover:bg-surface-light border border-surface-light text-text-primary font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Share with Parents &rarr;
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
