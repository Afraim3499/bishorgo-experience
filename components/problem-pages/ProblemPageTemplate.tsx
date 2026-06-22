import React from "react";
import type { ProblemPageBlueprint } from "@/data/solutions/problemPages";
import { ProblemHero } from "./ProblemHero";
import { SymptomScan } from "./SymptomScan";
import { WhyThisHappens } from "./WhyThisHappens";
import { BusinessCostSection } from "./BusinessCostSection";
import { CommonMistakesSection } from "./CommonMistakesSection";
import { BishorgoSolutionPath } from "./BishorgoSolutionPath";
import { ProblemRecommendedServices } from "./ProblemRecommendedServices";
import { ProblemAuditCTA } from "./ProblemAuditCTA";
import { ProblemFAQ } from "./ProblemFAQ";
import { ProblemFinalCTA } from "./ProblemFinalCTA";

interface Props {
  problem: ProblemPageBlueprint;
}

export const ProblemPageTemplate: React.FC<Props> = ({ problem }) => {
  const faqSchema = problem.faqs && problem.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": problem.faqs.map((faq) => ({
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
      {/* 1. Problem Hero */}
      <ProblemHero problem={problem} />

      {/* 2. Symptom Scan Checklist */}
      <SymptomScan symptoms={problem.symptoms} />

      {/* 3. Why This Happens */}
      <WhyThisHappens causes={problem.causes} />

      {/* 4. Business Costs */}
      <BusinessCostSection costs={problem.businessCosts} />

      {/* 5. What Most Businesses Try (Mistakes vs Fails) */}
      <CommonMistakesSection mistakes={problem.commonMistakes} />

      {/* 6. Bishorgo Solution Path Timeline */}
      <BishorgoSolutionPath path={problem.solutionPath} />

      {/* 7. Recommended Services Grid */}
      <ProblemRecommendedServices services={problem.recommendedServices} />

      {/* 8. Audit CTA Banner */}
      <ProblemAuditCTA auditCTA={problem.auditCTA} />

      {/* 9. Pain FAQ Accordion */}
      <ProblemFAQ faqs={problem.faqs} problemLabel={problem.label} />

      {/* 10. Concluding CTA */}
      <ProblemFinalCTA problemLabel={problem.label} />
    </div>
  );
};
export default ProblemPageTemplate;
