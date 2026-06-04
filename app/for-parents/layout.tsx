import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Parent's Guide to Trade Careers | Degree2Trade",
  description:
    "Help your college graduate explore rewarding, high-paying skilled trade careers. Stats, conversation starters, and resources for parents.",
};

export default function ForParentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
