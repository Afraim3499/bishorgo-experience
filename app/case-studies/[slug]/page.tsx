import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudy, getAllCaseStudySlugs } from "@/data/caseStudies";
import { CaseStudyTemplateClient } from "./CaseStudyTemplateClient";

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

  return <CaseStudyTemplateClient caseStudy={caseStudy} />;
}
