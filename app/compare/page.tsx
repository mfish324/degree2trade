import Link from "next/link";
import { Metadata } from "next";
import { CareerPath, careerPaths } from "@/lib/quizData";
import { careerNumbers } from "@/lib/careerNumbers";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Compare Skilled Trade Careers Side by Side | Degree2Trade",
  description:
    "Compare skilled-trade careers head to head — salary, job growth, and training. Find the trade that best fits your degree and goals.",
};

const keys = careerNumbers.map((c) => c.key as CareerPath);

export default function CompareIndexPage() {
  const pairs: [CareerPath, CareerPath][] = [];
  for (let i = 0; i < keys.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      pairs.push([keys[i], keys[j]]);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-12 px-4 bg-gradient-to-br from-primary/10 via-background to-background border-b border-surface-light">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-3">
            Compare Trade Careers
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Weighing two paths? See salary, job growth, and training side by side.
          </p>
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto grid gap-2 sm:grid-cols-2">
          {pairs.map(([a, b]) => (
            <Link
              key={`${a}-vs-${b}`}
              href={`/compare/${a}-vs-${b}`}
              className="flex items-center justify-between bg-surface border border-surface-light hover:border-primary rounded-lg px-4 py-3 text-text-secondary hover:text-text-primary transition-colors"
            >
              <span>
                {careerPaths[a].title} <span className="text-text-muted">vs</span>{" "}
                {careerPaths[b].title}
              </span>
              <span className="text-primary">→</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
