"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  parentResources,
  parentCategories,
  getFeaturedResources,
  filterResources,
  typeBadgeStyles,
  typeDisplayNames,
  keyStats,
  conversationStartersParents,
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
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-surface rounded-xl border border-surface-light hover:border-primary/50 transition-all p-5 group block h-full"
    >
      <div className="flex items-center gap-2 mb-3">
        <ResourceTypeBadge type={resource.type} />
        {resource.duration && (
          <span className="text-text-muted text-xs">{resource.duration}</span>
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
        {resource.type === "video" || resource.type === "podcast"
          ? "Watch"
          : "Read"}{" "}
        &rarr;
      </span>
    </a>
  );
}

function FeaturedCarousel({ resources }: { resources: Resource[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

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
      <div ref={carouselRef} className="overflow-hidden rounded-xl">
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
                  {resource.type === "video" || resource.type === "podcast"
                    ? "Watch Now"
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

export default function ForParentsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedType, setSelectedType] = useState<string>("All");

  const featuredResources = getFeaturedResources(parentResources);
  const filteredResources = filterResources(
    parentResources,
    selectedCategory,
    selectedType
  );

  const resourceTypes = ["All", "video", "article", "essay", "podcast"];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-surface-light bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="font-display text-xl font-bold text-primary"
          >
            Degree2Trade
          </Link>
          <nav className="flex items-center gap-6 text-text-secondary text-sm">
            <Link
              href="/programs"
              className="hover:text-primary transition-colors hidden sm:block"
            >
              Programs
            </Link>
            <Link
              href="/library"
              className="hover:text-primary transition-colors hidden sm:block"
            >
              Career Library
            </Link>
            <Link
              href="/for-grads"
              className="hover:text-primary transition-colors"
            >
              For Grads
            </Link>
            <Link
              href="/quiz"
              className="px-4 py-1.5 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors"
            >
              Take Quiz
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
            For Parents
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Your Kid&apos;s Degree Isn&apos;t Wasted&mdash;
            <br />
            <span className="text-primary">
              It&apos;s Their Competitive Advantage
            </span>
          </h1>
          <p className="text-xl text-text-secondary mb-6 max-w-2xl mx-auto">
            Help your graduate make a smart career move backed by data, not
            desperation.
          </p>
          <p className="text-text-muted max-w-xl mx-auto">
            The conversation you&apos;re about to have could change your
            child&apos;s life. Here are the resources that show why pivoting to
            skilled trades isn&apos;t giving up&mdash;it&apos;s strategic
            upgrading.
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
            Start Here: Must-Read Resources
          </h2>
          <FeaturedCarousel resources={featuredResources} />
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-16 px-4 bg-surface">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-4">
            The Numbers You Need to Know
          </h2>
          <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            These aren&apos;t opinions&mdash;they&apos;re facts from respected
            sources that show the real opportunity in skilled trades.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyStats.map((stat, index) => (
              <div
                key={index}
                className="bg-surface-light rounded-xl p-6 border border-surface-light hover:border-primary/30 transition-colors"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-text-primary font-medium mb-2">
                  {stat.label}
                </div>
                <p className="text-text-secondary text-sm mb-3">
                  {stat.description}
                </p>
                <div className="text-text-muted text-xs">
                  Source: {stat.source}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad - Mid Page */}
      <InContentAd />

      {/* Filterable Resource Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-4">
            All Resources for Parents
          </h2>
          <p className="text-text-secondary text-center mb-8">
            Curated articles, videos, and essays to help you understand and
            support your graduate&apos;s decision.
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
                    : "bg-surface border border-surface-light hover:border-primary/50 text-text-secondary"
                }`}
              >
                All Topics
              </button>
              {parentCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-surface border border-surface-light hover:border-primary/50 text-text-secondary"
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
                      ? "bg-surface-light text-primary border border-primary/50"
                      : "bg-surface border border-surface-light hover:border-surface-light text-text-muted"
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

      {/* Ad - Before Conversation Starters */}
      <InContentAd />

      {/* Conversation Starters Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-4">
            What to Say to Your Graduate
          </h2>
          <p className="text-text-secondary text-center mb-12">
            Starting the conversation is often the hardest part. Here are some
            ways to begin.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {conversationStartersParents.map((item, index) => (
              <div
                key={index}
                className="bg-surface rounded-xl border border-surface-light p-6"
              >
                <div className="text-4xl text-primary mb-4">
                  &ldquo;
                </div>
                <p className="text-lg font-medium mb-4 italic">
                  {item.starter}
                </p>
                <p className="text-text-secondary text-sm">
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-surface">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold mb-4">
            Ready to Explore Together?
          </h2>
          <p className="text-text-secondary mb-8">
            Take the career quiz with your graduate to discover which skilled
            trades match their interests and abilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiz"
              className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Take the Career Quiz
            </Link>
            <Link
              href="/for-grads"
              className="inline-block bg-surface-light hover:bg-surface border border-surface-light text-text-primary font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Resources for Grads &rarr;
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
