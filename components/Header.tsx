"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/programs", label: "Programs" },
    { href: "/library", label: "Career Library" },
    { href: "/financial-aid", label: "Financial Aid" },
    { href: "/for-parents", label: "For Parents" },
    { href: "/for-grads", label: "For Grads" },
  ];

  return (
    <header className="border-b border-surface-light bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-display text-xl font-bold text-primary">
          Degree2Trade
        </Link>
        <nav className="flex items-center gap-4 md:gap-6 text-text-secondary text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-primary transition-colors hidden md:block ${
                pathname === link.href ? "text-primary" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/quiz"
            className={`px-4 py-1.5 rounded-lg transition-colors ${
              pathname === "/quiz"
                ? "bg-primary-hover text-white"
                : "bg-primary hover:bg-primary-hover text-white"
            }`}
          >
            Take Quiz
          </Link>
        </nav>
      </div>
    </header>
  );
}
