import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { CareerPath, careerPaths } from "@/lib/quizData";
import { careerNumbers } from "@/lib/careerNumbers";
import { Header } from "@/components/Header";
import { CONTENT_LAST_UPDATED } from "@/lib/siteMeta";

// Comparison pages are built only for careers with clean numeric BLS data.
const keys = careerNumbers.map((c) => c.key as CareerPath);

// Canonical (single-direction) pairs so we don't ship duplicate a-vs-b / b-vs-a content.
function allPairs(): { comparison: string }[] {
  const out: { comparison: string }[] = [];
  for (let i = 0; i < keys.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      out.push({ comparison: `${keys[i]}-vs-${keys[j]}` });
    }
  }
  return out;
}

export function generateStaticParams() {
  return allPairs();
}

function parsePair(slug: string): [CareerPath, CareerPath] | null {
  const parts = slug.split("-vs-");
  if (parts.length !== 2) return null;
  const [a, b] = parts;
  if (!keys.includes(a as CareerPath) || !keys.includes(b as CareerPath)) return null;
  if (a === b) return null;
  return [a as CareerPath, b as CareerPath];
}

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export async function generateMetadata({
  params,
}: {
  params: Promise<{ comparison: string }>;
}): Promise<Metadata> {
  const { comparison } = await params;
  const pair = parsePair(comparison);
  if (!pair) return { title: "Career Comparison | Degree2Trade" };
  const [a, b] = pair;
  const A = careerPaths[a].title;
  const B = careerPaths[b].title;
  return {
    title: `${A} vs ${B}: Salary, Training & Outlook Compared | Degree2Trade`,
    description: `${A} vs ${B} — compare median salary, job growth, training time and cost side by side to find the skilled-trade career that fits your degree and goals.`,
  };
}

export default async function ComparePage({
  params,
}: {
  params: Promise<{ comparison: string }>;
}) {
  const { comparison } = await params;
  const pair = parsePair(comparison);
  if (!pair) notFound();
  const [aKey, bKey] = pair;

  const a = { ...careerPaths[aKey], ...careerNumbers.find((c) => c.key === aKey)! };
  const b = { ...careerPaths[bKey], ...careerNumbers.find((c) => c.key === bKey)! };

  const higherPay = a.medianSalary === b.medianSalary ? null : a.medianSalary > b.medianSalary ? a : b;
  const fasterStart = a.trainingMonths === b.trainingMonths ? null : a.trainingMonths < b.trainingMonths ? a : b;
  const fasterGrowth = a.growthPct === b.growthPct ? null : a.growthPct > b.growthPct ? a : b;

  const rows: { label: string; aVal: string; bVal: string }[] = [
    { label: "BLS median salary", aVal: fmt(a.medianSalary), bVal: fmt(b.medianSalary) },
    { label: "Typical salary range", aVal: a.salary, bVal: b.salary },
    { label: "Job growth (2024–34)", aVal: `${a.growthPct}%`, bVal: `${b.growthPct}%` },
    { label: "Time to job-ready", aVal: a.training, bVal: b.training },
    {
      label: "Typical training cost",
      aVal: a.paidTraining ? "Often paid (earn while you train)" : fmt(a.typicalTrainingCost),
      bVal: b.paidTraining ? "Often paid (earn while you train)" : fmt(b.typicalTrainingCost),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-12 px-4 bg-gradient-to-br from-primary/10 via-background to-background border-b border-surface-light">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-text-muted mb-4">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/compare" className="hover:text-primary">Compare Careers</Link>
          </nav>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary">
            {a.title} vs {b.title}
          </h1>
          <p className="text-text-secondary mt-3 max-w-2xl">
            A side-by-side comparison of salary, job growth, and training to help
            you choose between becoming {a.title === "Registered Nurse (ABSN)" ? "a nurse" : `a ${a.title.toLowerCase()}`} and {`a ${b.title.toLowerCase()}`}.
          </p>
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Comparison table */}
          <div className="overflow-hidden rounded-xl border border-surface-light">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface">
                  <th className="text-left p-4 text-text-muted font-medium"></th>
                  <th className="text-left p-4 text-text-primary font-bold">{a.title}</th>
                  <th className="text-left p-4 text-text-primary font-bold">{b.title}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.label} className={i % 2 ? "bg-surface/50" : ""}>
                    <td className="p-4 text-text-muted">{row.label}</td>
                    <td className="p-4 text-text-secondary">{row.aVal}</td>
                    <td className="p-4 text-text-secondary">{row.bVal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* At-a-glance verdict */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {higherPay && (
              <div className="bg-surface border border-surface-light rounded-xl p-4">
                <div className="text-xs text-text-muted">Higher pay</div>
                <div className="text-text-primary font-semibold">{higherPay.title}</div>
              </div>
            )}
            {fasterStart && (
              <div className="bg-surface border border-surface-light rounded-xl p-4">
                <div className="text-xs text-text-muted">Faster to start</div>
                <div className="text-text-primary font-semibold">{fasterStart.title}</div>
              </div>
            )}
            {fasterGrowth && (
              <div className="bg-surface border border-surface-light rounded-xl p-4">
                <div className="text-xs text-text-muted">Faster job growth</div>
                <div className="text-text-primary font-semibold">{fasterGrowth.title}</div>
              </div>
            )}
          </div>

          {/* Narrative */}
          <div className="mt-8 space-y-4 text-text-secondary">
            <h2 className="font-display text-xl font-bold text-text-primary">
              Which should you choose?
            </h2>
            <p>
              {higherPay
                ? `${higherPay.title} has the higher BLS median wage (${fmt(higherPay.medianSalary)}), while `
                : `Both careers report similar median pay, so `}
              {fasterStart
                ? `${fasterStart.title} gets you earning faster (${fasterStart.training}).`
                : `both reach job-ready on a similar timeline.`}{" "}
              {fasterGrowth
                ? `${fasterGrowth.title} has the stronger projected job growth (${fasterGrowth.growthPct}% through 2034).`
                : ""}{" "}
              Your degree is an advantage in either — use the quiz to see which
              fits your background, or run both through the ROI calculator against
              your student loans.
            </p>
          </div>

          {/* Per-career cards */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[a, b].map((c) => (
              <div key={c.key} className="bg-surface border border-surface-light rounded-xl p-5">
                <div className="text-2xl">{c.icon}</div>
                <h3 className="font-display text-lg font-bold text-text-primary mt-1">{c.title}</h3>
                <p className="text-sm text-text-muted mt-1">{c.tagline}</p>
                <div className="flex flex-col gap-2 mt-4">
                  <Link href={`/careers/${c.key}`} className="text-center bg-primary hover:bg-primary-hover text-white font-semibold px-4 py-2 rounded-lg transition-colors">
                    Explore {c.title}
                  </Link>
                  <Link href={`/programs?career=${c.key}`} className="text-center border border-surface-light hover:border-primary text-text-secondary px-4 py-2 rounded-lg transition-colors">
                    Find programs
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 text-center">
            <Link href="/quiz" className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              Take the 90-second career quiz
            </Link>
            <div className="mt-3">
              <Link href="/calculator" className="text-primary hover:underline text-sm">
                Or compare them in the ROI calculator →
              </Link>
            </div>
          </div>

          <p className="text-center text-xs text-text-muted mt-10">
            Median wages: U.S. Bureau of Labor Statistics (May 2024). Training
            costs and timelines are typical estimates. Data last updated {CONTENT_LAST_UPDATED}.
          </p>
        </div>
      </section>
    </div>
  );
}
