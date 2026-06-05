"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { careerNumbers } from "@/lib/careerNumbers";
import { CONTENT_LAST_UPDATED } from "@/lib/siteMeta";

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

function describeDuration(years: number): string {
  if (years <= 0) return "—";
  if (years < 1) return `${Math.max(1, Math.round(years * 12))} months`;
  const whole = Math.floor(years);
  const months = Math.round((years - whole) * 12);
  if (months === 0) return `${whole} ${whole === 1 ? "year" : "years"}`;
  return `${whole} yr ${months} mo`;
}

export default function CalculatorPage() {
  const [careerKey, setCareerKey] = useState("electrician");
  const [currentIncome, setCurrentIncome] = useState(40000);
  const [loanBalance, setLoanBalance] = useState(30000);

  const career = useMemo(
    () => careerNumbers.find((c) => c.key === careerKey) ?? careerNumbers[0],
    [careerKey]
  );

  // Training cost defaults to the trade's typical estimate but is user-editable.
  const [trainingCost, setTrainingCost] = useState(career.typicalTrainingCost);
  // Track the last career we synced training cost for, so changing the trade
  // refreshes the default without clobbering a user's manual edit mid-session.
  const [syncedKey, setSyncedKey] = useState(career.key);
  if (syncedKey !== career.key) {
    setSyncedKey(career.key);
    setTrainingCost(career.typicalTrainingCost);
  }

  const r = useMemo(() => {
    const annualIncrease = career.medianSalary - currentIncome;
    const monthlyIncrease = annualIncrease / 12;
    const trainingPayoffMonths =
      trainingCost > 0 && monthlyIncrease > 0 ? trainingCost / monthlyIncrease : 0;
    const loanPayoffYears =
      loanBalance > 0 && annualIncrease > 0 ? loanBalance / annualIncrease : 0;
    const tenYearExtra = annualIncrease * 10 - trainingCost;
    return { annualIncrease, trainingPayoffMonths, loanPayoffYears, tenYearExtra };
  }, [career, currentIncome, loanBalance, trainingCost]);

  const positive = r.annualIncrease > 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-12 px-4 bg-gradient-to-br from-primary/10 via-background to-background border-b border-surface-light">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-3">
            Trade Career ROI Calculator
          </h1>
          <p className="text-text-secondary">
            Carrying student debt? See how quickly a skilled trade could pay it
            off. Salaries are BLS median annual wages — your results are an
            estimate, not a promise.
          </p>
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="max-w-3xl mx-auto grid gap-8 md:grid-cols-2">
          {/* Inputs */}
          <div className="bg-surface border border-surface-light rounded-xl p-6 space-y-5">
            <h2 className="font-display text-lg font-bold text-text-primary">
              Your numbers
            </h2>

            <label className="block">
              <span className="text-sm text-text-secondary">Trade career</span>
              <select
                value={careerKey}
                onChange={(e) => setCareerKey(e.target.value)}
                className="mt-1 w-full bg-surface-light border border-surface-light rounded-lg px-3 py-2 text-text-primary focus:border-primary outline-none"
              >
                {careerNumbers.map((c) => (
                  <option key={c.key} value={c.key}>
                    {c.label} — {fmt(c.medianSalary)} median
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-sm text-text-secondary">
                Your current annual income
              </span>
              <input
                type="number"
                min={0}
                step={1000}
                value={currentIncome}
                onChange={(e) => setCurrentIncome(Number(e.target.value) || 0)}
                className="mt-1 w-full bg-surface-light border border-surface-light rounded-lg px-3 py-2 text-text-primary focus:border-primary outline-none"
              />
            </label>

            <label className="block">
              <span className="text-sm text-text-secondary">
                Student loan balance
              </span>
              <input
                type="number"
                min={0}
                step={1000}
                value={loanBalance}
                onChange={(e) => setLoanBalance(Number(e.target.value) || 0)}
                className="mt-1 w-full bg-surface-light border border-surface-light rounded-lg px-3 py-2 text-text-primary focus:border-primary outline-none"
              />
            </label>

            <label className="block">
              <span className="text-sm text-text-secondary">
                Est. training cost{" "}
                {career.paidTraining && (
                  <span className="text-success">(often paid — earn while you train)</span>
                )}
              </span>
              <input
                type="number"
                min={0}
                step={500}
                value={trainingCost}
                onChange={(e) => setTrainingCost(Number(e.target.value) || 0)}
                className="mt-1 w-full bg-surface-light border border-surface-light rounded-lg px-3 py-2 text-text-primary focus:border-primary outline-none"
              />
              <span className="text-xs text-text-muted">
                Typical ~{career.trainingMonths} months to job-ready. Adjust to your situation.
              </span>
            </label>
          </div>

          {/* Results */}
          <div className="bg-surface border border-surface-light rounded-xl p-6 space-y-5">
            <h2 className="font-display text-lg font-bold text-text-primary">
              Your estimate
            </h2>

            {positive ? (
              <>
                <div>
                  <div className="text-sm text-text-muted">Annual pay increase</div>
                  <div className="text-3xl font-bold text-success">
                    +{fmt(r.annualIncrease)}/yr
                  </div>
                </div>

                <div className="border-t border-surface-light pt-4 space-y-3">
                  {trainingCost > 0 && (
                    <div className="flex justify-between">
                      <span className="text-text-secondary text-sm">Training pays for itself in</span>
                      <span className="text-text-primary font-semibold">
                        {describeDuration(r.trainingPayoffMonths / 12)}
                      </span>
                    </div>
                  )}
                  {loanBalance > 0 && (
                    <div className="flex justify-between">
                      <span className="text-text-secondary text-sm">
                        Clear your {fmt(loanBalance)} loan in
                      </span>
                      <span className="text-text-primary font-semibold">
                        {describeDuration(r.loanPayoffYears)}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-text-secondary text-sm">Extra earnings over 10 years</span>
                    <span className="text-success font-semibold">{fmt(r.tenYearExtra)}</span>
                  </div>
                </div>

                <p className="text-xs text-text-muted">
                  Loan payoff assumes you put the full raise toward the balance and
                  excludes interest and taxes. A real-world budget will differ — treat
                  this as a directional estimate.
                </p>
              </>
            ) : (
              <p className="text-text-secondary">
                This trade&apos;s median ({fmt(career.medianSalary)}) is at or below
                your current income. That doesn&apos;t mean it&apos;s wrong for you —
                trades offer security, low debt, and growth — but if pay is your goal,{" "}
                <Link href="/quiz" className="text-primary hover:underline">
                  take the quiz
                </Link>{" "}
                to find higher-earning matches for your degree.
              </p>
            )}

            <div className="flex flex-col gap-2 pt-2">
              <Link
                href={`/programs?career=${career.key}`}
                className="text-center bg-primary hover:bg-primary-hover text-white font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Find {career.label} programs
              </Link>
              <Link
                href={`/careers/${career.key}`}
                className="text-center border border-surface-light hover:border-primary text-text-secondary px-4 py-2 rounded-lg transition-colors"
              >
                Learn about this career
              </Link>
            </div>
          </div>
        </div>

        <p className="max-w-3xl mx-auto text-center text-xs text-text-muted mt-8">
          Median wages: U.S. Bureau of Labor Statistics (May 2024). Training costs
          and timelines are typical estimates and vary by program and location.
          Data last updated {CONTENT_LAST_UPDATED}.
        </p>
      </section>
    </div>
  );
}
