import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://degree2trade.com"),
  title: "Degree2Trade - Find Trade Careers That Match Your Degree",
  description:
    "Free 90-second career quiz helps college graduates discover high-paying careers in skilled trades. Match your degree to electrician, nursing, HVAC, and more.",
  keywords: ["trade careers", "college graduate jobs", "skilled trades", "career quiz", "degree to trade"],
  openGraph: {
    title: "Degree2Trade - Your Degree is Your Advantage",
    description: "Find high-paying trade careers that match your degree in 90 seconds.",
    type: "website",
    url: "https://degree2trade.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://degree2trade.com/#organization",
        name: "Degree2Trade",
        url: "https://degree2trade.com",
        description:
          "Helping college graduates discover high-paying careers in skilled trades.",
      },
      {
        "@type": "WebSite",
        "@id": "https://degree2trade.com/#website",
        url: "https://degree2trade.com",
        name: "Degree2Trade",
        publisher: { "@id": "https://degree2trade.com/#organization" },
      },
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${workSans.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
