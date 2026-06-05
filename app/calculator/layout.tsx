import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trade Career ROI Calculator — Pay Off Your Student Loans | Degree2Trade",
  description:
    "See how fast a skilled-trade career could pay off your student loans. Compare your current income to BLS median trade salaries and estimate your break-even and 10-year earnings.",
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
