import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Aid & Grants for Trade School | Degree2Trade",
  description:
    "FAFSA, Pell Grants, scholarships, and funding options to pay for trade school and apprenticeships. Find financial aid for your skilled trade training.",
};

export default function FinancialAidLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
