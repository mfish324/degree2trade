import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Trade Programs Near You | Degree2Trade",
  description:
    "Search accredited trade and apprenticeship programs by career and location. Compare training options near you to launch a skilled trade career.",
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
