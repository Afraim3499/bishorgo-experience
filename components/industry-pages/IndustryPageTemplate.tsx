import React from "react";
import type { IndustryPageBlueprint } from "@/data/industries/industryPages";
import { IndustryHero } from "./IndustryHero";
import { CustomerMemoryMap } from "./CustomerMemoryMap";
import { IndustryExperienceGaps } from "./IndustryExperienceGaps";
import { CustomerMemoryTriggers } from "./CustomerMemoryTriggers";
import { IndustryExperienceSystem } from "./IndustryExperienceSystem";
import { IndustryRelevantServices } from "./IndustryRelevantServices";
import { IndustryReimaginedExample } from "./IndustryReimaginedExample";
import { IndustryFAQ } from "./IndustryFAQ";
import { IndustryFinalCTA } from "./IndustryFinalCTA";

interface Props {
  industry: IndustryPageBlueprint;
}

export const IndustryPageTemplate: React.FC<Props> = ({ industry }) => {
  const faqSchema = industry.faqs && industry.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": industry.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <div className="w-full">
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {/* 1. Industry Hero */}
      <IndustryHero industry={industry} />

      {/* 2. Customer Memory Map */}
      <CustomerMemoryMap journey={industry.customerJourney} industryLabel={industry.label} />

      {/* 3. Experience Gaps In This Industry */}
      <IndustryExperienceGaps gaps={industry.experienceGaps} industryLabel={industry.label} />

      {/* 4. What Customers Actually Remember */}
      <CustomerMemoryTriggers triggers={industry.memoryTriggers} />

      {/* 5. Bishorgo Experience System For This Industry */}
      <IndustryExperienceSystem system={industry.bishorgoSystem} />

      {/* 6. Relevant Services */}
      <IndustryRelevantServices services={industry.relevantServices} industryLabel={industry.label} />

      {/* 7. Reimagined Example */}
      <IndustryReimaginedExample example={industry.reimaginedExample} />

      {/* 8. Industry FAQ */}
      <IndustryFAQ faqs={industry.faqs} industryLabel={industry.label} />

      {/* 9. Final CTA */}
      <IndustryFinalCTA industryLabel={industry.label} />
    </div>
  );
};
export default IndustryPageTemplate;
