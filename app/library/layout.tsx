import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Library | Degree2Trade",
  description:
    "Explore high-paying skilled trade careers — electrician, nurse, HVAC, welder, plumber and more. Salaries, training paths, and growth outlook for college grads.",
};

export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
