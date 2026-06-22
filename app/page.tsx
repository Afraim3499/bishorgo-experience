import React from "react";
import { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { BeliefSection } from "@/components/sections/BeliefSection";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};
import { TouchpointSystemSection } from "@/components/sections/TouchpointSystemSection";
import { Method } from "@/components/sections/Method";
import { AuditTeaser } from "@/components/sections/AuditTeaser";
import { LabTeaser } from "@/components/sections/LabTeaser";

export default function Home() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://bishorgoexperience.com/#organization",
    "name": "Bishorgo Experience",
    "url": "https://bishorgoexperience.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://bishorgoexperience.com/favicons/apple-touch-icon.png",
      "width": "180",
      "height": "180"
    },
    "description": "Bishorgo Experience helps businesses turn ordinary brand touchpoints into memorable customer journeys through strategy, branding, content, technology, and real-world activation.",
    "email": "hello@bishorgo.com",
    "telephone": "+8801711000000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "House 14, Road 8, Banani",
      "addressLocality": "Dhaka",
      "addressCountry": "BD"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://bishorgoexperience.com/#website",
    "name": "Bishorgo Experience",
    "url": "https://bishorgoexperience.com",
    "description": "We Build Experiences People Remember",
    "publisher": {
      "@id": "https://bishorgoexperience.com/#organization"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <HeroSection />
      <BeliefSection />
      <TouchpointSystemSection />
      <Method />
      <AuditTeaser />
      <LabTeaser />
    </>
  );
}
