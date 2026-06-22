import { MetadataRoute } from "next";
import { getAllServiceSlugs } from "@/data/services/servicePages";
import { getAllIndustrySlugs } from "@/data/industries/industryPages";
import { getAllProblemSlugs } from "@/data/solutions/problemPages";
import { getAllAuditSlugs } from "@/data/audits";
import { getAllFrameworkSlugs } from "@/data/frameworks";
import { getAllCaseStudySlugs } from "@/data/caseStudies";
import { getAllLabSlugs } from "@/data/lab";
import { getAllGlossarySlugs } from "@/data/glossary";
import { getAllChecklistSlugs } from "@/data/checklists";
import { getAllLocationSlugs } from "@/data/locations";
import { getAllComparisonSlugs } from "@/data/comparisons";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bishorgoexperience.com";

  // 1. Static base pages
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/experience-audit",
    "/experience-lab",
    "/method",
    "/services",
    "/case-studies",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  const staticPages = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Dynamic services
  const servicePages = getAllServiceSlugs().map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // 3. Dynamic industries
  const industryPages = getAllIndustrySlugs().map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // 4. Dynamic solutions
  const solutionPages = getAllProblemSlugs().map((slug) => ({
    url: `${baseUrl}/solutions/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // 5. Audit Subpages
  const auditPages = getAllAuditSlugs().map((slug) => ({
    url: `${baseUrl}/experience-audit/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // 6. Method subpages
  const methodSubpages = ["discover", "define", "design", "deliver", "deepen"].map((slug) => ({
    url: `${baseUrl}/method/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // 7. Frameworks
  const frameworkPages = getAllFrameworkSlugs().map((slug) => ({
    url: `${baseUrl}/frameworks/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // 8. Case Studies
  const caseStudyPages = getAllCaseStudySlugs().map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // 9. Experience Lab articles
  const labPages = getAllLabSlugs().map((slug) => ({
    url: `${baseUrl}/experience-lab/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // 10. Glossary terms
  const glossaryPages = getAllGlossarySlugs().map((slug) => ({
    url: `${baseUrl}/glossary/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // 11. Resource checklists
  const checklistPages = getAllChecklistSlugs().map((slug) => ({
    url: `${baseUrl}/resources/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // 12. Tools
  const toolPages = ["customer-memory-score", "experience-gap-finder"].map((slug) => ({
    url: `${baseUrl}/tools/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // 13. Locations
  const locationPages = getAllLocationSlugs().map((slug) => ({
    url: `${baseUrl}/locations/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // 14. Comparisons
  const comparisonPages = getAllComparisonSlugs().map((slug) => ({
    url: `${baseUrl}/compare/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...industryPages,
    ...solutionPages,
    ...auditPages,
    ...methodSubpages,
    ...frameworkPages,
    ...caseStudyPages,
    ...labPages,
    ...glossaryPages,
    ...checklistPages,
    ...toolPages,
    ...locationPages,
    ...comparisonPages,
  ];
}
