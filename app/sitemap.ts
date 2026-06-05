import { MetadataRoute } from "next";
import { careerNumbers } from "@/lib/careerNumbers";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://degree2trade.com";

  // Programmatic comparison pages (one canonical direction per pair).
  const compareKeys = careerNumbers.map((c) => c.key);
  const comparePages = [];
  for (let i = 0; i < compareKeys.length; i++) {
    for (let j = i + 1; j < compareKeys.length; j++) {
      comparePages.push({
        url: `${baseUrl}/compare/${compareKeys[i]}-vs-${compareKeys[j]}`,
        lastModified: new Date(),
        priority: 0.6,
      });
    }
  }

  const careerPaths = [
    "electrician",
    "nurse",
    "emt",
    "hvac",
    "plumber",
    "firefighter",
    "solar",
    "welder",
    "police",
    "medicalTech",
    "religiousVocations",
    "military",
    "mechanic",
  ];

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/quiz`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/programs`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/library`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/calculator`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/compare`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/financial-aid`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/for-parents`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/for-grads`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), priority: 0.3 },
  ];

  const careerPages = careerPaths.map((career) => ({
    url: `${baseUrl}/careers/${career}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  return [...staticPages, ...careerPages, ...comparePages];
}
