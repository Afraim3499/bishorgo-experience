import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProblemPage, getAllProblemSlugs } from "@/data/solutions/problemPages";
import { ProblemPageTemplate } from "@/components/problem-pages/ProblemPageTemplate";

// Static params for all 12 problem/solution pages
export function generateStaticParams() {
  return getAllProblemSlugs().map((slug) => ({ slug }));
}

// Generate dynamic page metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const problem = getProblemPage(slug);
  if (!problem) return { title: "Solution Not Found — Bishorgo Experience" };

  return {
    title: problem.metadata.title,
    description: problem.metadata.description,
    alternates: {
      canonical: `/solutions/${slug}`,
    },
    openGraph: {
      title: problem.metadata.title,
      description: problem.metadata.description,
      url: `https://bishorgoexperience.com/solutions/${slug}`,
      siteName: "Bishorgo Experience",
      type: "website",
      images: [
        {
          url: "/images/brand/og-image.jpg",
          width: 1200,
          height: 630,
          alt: problem.metadata.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: problem.metadata.title,
      description: problem.metadata.description,
      images: ["/images/brand/og-image.jpg"],
    },
  };
}

// Render dynamic slug page
export default async function ProblemSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const problem = getProblemPage(slug);
  if (!problem) notFound();

  return <ProblemPageTemplate problem={problem} />;
}
