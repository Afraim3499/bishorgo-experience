import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolTemplateClient } from "@/app/tools/[slug]/ToolTemplateClient";

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
      openGraph: {
        title: "Customer Memory Score Tool — Bishorgo",
        description: "Interactive tool to calculate your brand recall score based on checkouts, replies, and unboxings.",
        url: `https://bishorgoexperience.com/tools/${slug}`,
        siteName: "Bishorgo Experience",
        type: "website",
        images: [
          {
            url: "/images/brand/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "Customer Memory Score Tool",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Customer Memory Score Tool — Bishorgo",
        description: "Interactive tool to calculate your brand recall score based on checkouts, replies, and unboxings.",
        images: ["/images/brand/og-image.jpg"],
      },
    };
  } else if (slug === "experience-gap-finder") {
    return {
      title: "Experience Gap Finder Tool — Bishorgo",
      description: "Diagnose where your customer journey breaks. Uncover messaging, conversion, and packaging leaks.",
      alternates: { canonical: `/tools/${slug}` },
      openGraph: {
        title: "Experience Gap Finder Tool — Bishorgo",
        description: "Diagnose where your customer journey breaks. Uncover messaging, conversion, and packaging leaks.",
        url: `https://bishorgoexperience.com/tools/${slug}`,
        siteName: "Bishorgo Experience",
        type: "website",
        images: [
          {
            url: "/images/brand/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "Experience Gap Finder Tool",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Experience Gap Finder Tool — Bishorgo",
        description: "Diagnose where your customer journey breaks. Uncover messaging, conversion, and packaging leaks.",
        images: ["/images/brand/og-image.jpg"],
      },
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

  const toolName = slug === "customer-memory-score" ? "Customer Memory Score Tool" : "Experience Gap Finder Tool";
  const toolDesc = slug === "customer-memory-score"
    ? "Interactive tool to calculate your brand recall score based on checkouts, replies, and unboxings."
    : "Diagnose where your customer journey breaks. Uncover messaging, conversion, and packaging leaks.";

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": `${toolName} — Bishorgo Experience`,
    "description": toolDesc,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript. Requires HTML5."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <ToolTemplateClient slug={slug} />
    </>
  );
}
