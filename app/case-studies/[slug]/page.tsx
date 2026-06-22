import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudy, getAllCaseStudySlugs } from "@/data/caseStudies";
import { CaseStudyTemplateClient } from "@/app/case-studies/[slug]/CaseStudyTemplateClient";

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) return { title: "Case Study Not Found — Bishorgo Experience" };

  return {
    title: caseStudy.metadata.title,
    description: caseStudy.metadata.description,
    alternates: {
      canonical: `/case-studies/${slug}`,
    },
    openGraph: {
      title: caseStudy.metadata.title,
      description: caseStudy.metadata.description,
      url: `https://bishorgoexperience.com/case-studies/${slug}`,
      siteName: "Bishorgo Experience",
      type: "website",
      images: [
        {
          url: "/images/brand/og-image.jpg",
          width: 1200,
          height: 630,
          alt: caseStudy.metadata.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: caseStudy.metadata.title,
      description: caseStudy.metadata.description,
      images: ["/images/brand/og-image.jpg"],
    },
  };
}

export default async function CaseStudySlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": caseStudy.title,
    "description": caseStudy.metadata.description,
    "image": "https://bishorgoexperience.com/images/brand/og-image.jpg",
    "author": {
      "@type": "Organization",
      "name": "Bishorgo Experience",
      "url": "https://bishorgoexperience.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bishorgo Experience",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bishorgoexperience.com/images/brand/logo-website.png"
      }
    },
    "mainEntityOfPage": `https://bishorgoexperience.com/case-studies/${slug}`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CaseStudyTemplateClient caseStudy={caseStudy} />
    </>
  );
}
