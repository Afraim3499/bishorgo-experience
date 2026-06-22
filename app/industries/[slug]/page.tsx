import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getIndustryPage, getAllIndustrySlugs } from "@/data/industries/industryPages";
import { IndustryPageTemplate } from "@/components/industry-pages/IndustryPageTemplate";

// Static params for all 11 industry pages
export function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }));
}

// Generate meta dynamically
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryPage(slug);
  if (!industry) return { title: "Industry Not Found — Bishorgo Experience" };

  return {
    title: industry.metadata.title,
    description: industry.metadata.description,
    alternates: {
      canonical: `/industries/${slug}`,
    },
    openGraph: {
      title: industry.metadata.title,
      description: industry.metadata.description,
      url: `https://bishorgoexperience.com/industries/${slug}`,
      siteName: "Bishorgo Experience",
      type: "website",
      images: [
        {
          url: "/images/brand/og-image.jpg",
          width: 1200,
          height: 630,
          alt: industry.metadata.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: industry.metadata.title,
      description: industry.metadata.description,
      images: ["/images/brand/og-image.jpg"],
    },
  };
}

// Render dynamic slug industry page
export default async function IndustrySlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryPage(slug);
  if (!industry) notFound();

  return <IndustryPageTemplate industry={industry} />;
}
