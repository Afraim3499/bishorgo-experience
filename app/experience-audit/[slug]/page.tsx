import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAuditPage, getAllAuditSlugs } from "@/data/audits";
import { AuditForm } from "@/components/sections/AuditForm";
import { ServicesFAQ } from "@/components/sections/ServicesFAQ";
import * as Icons from "lucide-react";

export function generateStaticParams() {
  return getAllAuditSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const audit = getAuditPage(slug);
  if (!audit) return { title: "Audit Not Found — Bishorgo Experience" };

  return {
    title: audit.metadata.title,
    description: audit.metadata.description,
    alternates: {
      canonical: `/experience-audit/${slug}`,
    },
    openGraph: {
      title: audit.metadata.title,
      description: audit.metadata.description,
      url: `https://bishorgoexperience.com/experience-audit/${slug}`,
      siteName: "Bishorgo Experience",
      type: "website",
    },
  };
}

const getLucideIcon = (name: string) => {
  // @ts-ignore
  const IconComponent = Icons[name];
  if (!IconComponent) return <Icons.Sparkles size={18} className="text-[#C8922B]" />;
  return <IconComponent size={18} className="text-[#C8922B]" />;
};

export default async function AuditSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const audit = getAuditPage(slug);
  if (!audit) notFound();

  // Create FAQ schema
  const faqSchema = audit.faqs && audit.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": audit.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <div className="bg-[#F8F5EF] text-[#222222] min-h-screen">
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero Section */}
      <section className="relative bg-[#014A36] text-[#FFFDF8] pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.03] pointer-events-none select-none">
          <svg className="w-full h-full fill-white" viewBox="0 0 600 600">
            <path d="M 133 55 L 135 57 L 135 67 L 137 70 L 140 90 L 151 120 L 160 137 L 181 165 L 199 183 L 225 202 L 247 214 L 262 219 L 266 222 L 281 226 L 282 228 L 256 236 L 228 249 L 199 270 L 175 295 L 163 312 L 147 344 L 132 398 L 133 401 L 131 404 L 132 408 L 172 376 L 272 308 L 285 295 L 293 284 L 301 268 L 300 267 L 304 258 L 308 238 L 308 219 L 301 190 L 293 173 L 276 152 L 245 129 L 235 124 L 231 120 L 158 74 Z" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C8922B]/8 blur-[90px] pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-5 md:px-10 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-[0.25em] text-[#C8922B] uppercase mb-5">
            {audit.label}
          </span>
          <h1 className="text-4xl md:text-6.5xl lg:text-7.5xl font-extrabold tracking-tight max-w-5xl mx-auto leading-tight mb-8">
            {audit.title}
          </h1>
          <p className="text-base md:text-xl text-[#FFFDF8]/80 leading-relaxed font-medium max-w-3xl mx-auto">
            {audit.subtitle}
          </p>
        </div>
      </section>

      {/* Main Form + Info Split Layout */}
      <section className="py-24 md:py-32 bg-[#F8F5EF] text-[#222222]">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Scope details */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#014A36] font-bold block mb-3 font-mono">
                  OUR EVALUATION SCOPE
                </span>
                <h2 className="text-2xl md:text-4xl font-extrabold text-[#014A36] tracking-tight leading-tight">
                  What we analyze:
                </h2>
              </div>

              <div className="space-y-6">
                {audit.scope.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-[#014A36]/3 border border-[#014A36]/5 p-5 rounded-2xl">
                    <div className="w-10 h-10 rounded-full bg-[#014A36]/5 flex items-center justify-center flex-shrink-0">
                      {getLucideIcon(item.icon)}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#014A36] text-[16px] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs md:text-sm text-[#222222]/75 font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-l-4 border-[#C8922B] pl-4 text-xs text-[#222222]/55 leading-relaxed font-medium font-sans">
                * Note: We audit manually, and only accept a limited number of audits per week to maintain detailed analysis quality. Business owners typically receive their report via PDF within 3-5 working days.
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7">
              <AuditForm />
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Block */}
      <ServicesFAQ faqs={audit.faqs} />
    </div>
  );
}
