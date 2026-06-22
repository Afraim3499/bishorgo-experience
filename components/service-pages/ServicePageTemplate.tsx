import React from "react";
import type { ServicePageBlueprint } from "@/data/services/servicePages";
import { ServiceHero } from "./ServiceHero";
import { ServiceValueStrip } from "./ServiceValueStrip";
import { ServiceBuilds } from "./ServiceBuilds";
import { ServicePhilosophy } from "./ServicePhilosophy";
import { ServiceDeliverables } from "./ServiceDeliverables";
import { ServiceProcess } from "./ServiceProcess";
import { ServiceTouchpointMap } from "./ServiceTouchpointMap";
import { ServiceUseCases } from "./ServiceUseCases";
import { ServiceRelated } from "./ServiceRelated";
import { ServiceFAQ } from "./ServiceFAQ";
import { ServiceFinalCTA } from "./ServiceFinalCTA";

interface Props {
  service: ServicePageBlueprint;
}

export const ServicePageTemplate: React.FC<Props> = ({ service }) => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.label,
    "description": service.description || service.metadata.description,
    "provider": {
      "@type": "Organization",
      "name": "Bishorgo Experience",
      "url": "https://bishorgoexperience.com",
      "logo": "https://bishorgoexperience.com/favicons/apple-touch-icon.png"
    },
    "serviceType": service.label,
    "areaServed": {
      "@type": "Country",
      "name": "Bangladesh"
    }
  };

  const faqSchema = service.faqs && service.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((faq) => ({
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {/* 1. Hero */}
      <ServiceHero service={service} />

      {/* 2. Value Strip */}
      <ServiceValueStrip valueStrip={service.valueStrip} />

      {/* 3. What This Service Builds */}
      <ServiceBuilds builds={service.builds} serviceLabel={service.label} />

      {/* 4. Philosophy */}
      <ServicePhilosophy philosophy={service.philosophy} />

      {/* 5. Deliverables */}
      <ServiceDeliverables deliverables={service.deliverables} serviceLabel={service.label} />

      {/* 6. Process */}
      <ServiceProcess process={service.process} />

      {/* 7. Touchpoint Map */}
      <ServiceTouchpointMap touchpoints={service.touchpoints} serviceLabel={service.label} />

      {/* 8. Use Cases */}
      <ServiceUseCases useCases={service.useCases} />

      {/* 9. Related Services */}
      <ServiceRelated relatedServices={service.relatedServices} />

      {/* 10. FAQ */}
      <ServiceFAQ faqs={service.faqs} />

      {/* 11. Final CTA */}
      <ServiceFinalCTA serviceLabel={service.label} />
    </div>
  );
};
