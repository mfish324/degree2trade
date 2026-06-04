import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources for College Grads | Degree2Trade",
  description:
    "Guides, tools, and resources to help recent college graduates transition into high-paying skilled trade careers that build on their degree.",
};

export default function ForGradsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
