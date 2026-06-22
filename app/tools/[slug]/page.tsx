import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolTemplateClient } from "./ToolTemplateClient";

export function generateStaticParams() {
  return [
    { slug: "customer-memory-score" },
    { slug: "experience-gap-finder" }
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  
  if (slug === "customer-memory-score") {
    return {
      title: "Customer Memory Score Tool — Bishorgo",
      description: "Interactive tool to calculate your brand recall score based on checkouts, replies, and unboxings.",
      alternates: { canonical: `/tools/${slug}` },
    };
  } else if (slug === "experience-gap-finder") {
    return {
      title: "Experience Gap Finder Tool — Bishorgo",
      description: "Diagnose where your customer journey breaks. Uncover messaging, conversion, and packaging leaks.",
      alternates: { canonical: `/tools/${slug}` },
    };
  }
  
  return { title: "Tool Not Found — Bishorgo Experience" };
}

export default async function ToolSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug !== "customer-memory-score" && slug !== "experience-gap-finder") {
    notFound();
  }

  return <ToolTemplateClient slug={slug} />;
}
