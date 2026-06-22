import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServicePage, getAllServiceSlugs } from "@/data/services/servicePages";
import { ServicePageTemplate } from "@/components/service-pages/ServicePageTemplate";

// ─── Static params for all 12 service slugs ───────────────────────────────────
export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

// ─── Per-page metadata ────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) return { title: "Service Not Found — Bishorgo Experience" };
  return {
    title: service.metadata.title,
    description: service.metadata.description,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: service.metadata.title,
      description: service.metadata.description,
      url: `https://bishorgoexperience.com/services/${slug}`,
      siteName: "Bishorgo Experience",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.metadata.title,
      description: service.metadata.description,
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function ServiceSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) notFound();

  return <ServicePageTemplate service={service} />;
}
