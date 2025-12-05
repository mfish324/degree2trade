import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Degree2Trade - Your Degree is Your Advantage",
  description:
    "Turn your college degree into a competitive edge in skilled trades, emergency services, and ministry. Discover high-paying careers that value your education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${workSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
