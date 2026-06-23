import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Star, ShieldAlert, Award } from "lucide-react";
import { getFrameworkPage, getAllFrameworkSlugs } from "@/data/frameworks";
import { ServicesFAQ } from "@/components/sections/ServicesFAQ";

export function generateStaticParams() {
  return getAllFrameworkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const framework = getFrameworkPage(slug);
  if (!framework) return { title: "Framework Not Found — Bishorgo Experience" };

  return {
    title: framework.metadata.title,
    description: framework.metadata.description,
    alternates: {
      canonical: `/frameworks/${slug}`,
    },
    openGraph: {
      title: framework.metadata.title,
      description: framework.metadata.description,
      url: `https://bishorgoexperience.com/frameworks/${slug}`,
      siteName: "Bishorgo Experience",
      type: "website",
      images: [
        {
          url: "/images/brand/og-image.jpg",
          width: 1200,
          height: 630,
          alt: framework.metadata.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: framework.metadata.title,
      description: framework.metadata.description,
      images: ["/images/brand/og-image.jpg"],
    },
  };
}

export default async function FrameworkSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const framework = getFrameworkPage(slug);
  if (!framework) notFound();

  const faqSchema = framework.faqs && framework.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": framework.faqs.map((faq) => ({
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

        <div className="max-w-[1320px] mx-auto px-5 md:px-10 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-[0.25em] text-[#C8922B] uppercase">
            BISHORGO INTELLECTUAL PROPERTY
          </span>
          <h1 className="text-4xl md:text-6.5xl lg:text-7.5xl font-extrabold tracking-tight max-w-5xl mx-auto leading-tight">
            {framework.title}
          </h1>
          <p className="text-base md:text-xl text-[#FFFDF8]/85 max-w-3xl mx-auto leading-relaxed">
            {framework.subtitle}
          </p>
        </div>
      </section>

      {/* Main Breakdown Section */}
      <section className="py-24 md:py-32 bg-[#F8F5EF] text-[#222222]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10 space-y-16">
          
          {/* Overview text */}
          <div className="max-w-3xl space-y-3">
            <span className="text-[10px] font-mono font-bold text-[#014A36]/65 tracking-widest uppercase block">
              FRAMEWORK PURPOSE
            </span>
            <p className="text-base md:text-lg text-[#222222]/85 font-medium leading-relaxed">
              {framework.description}
            </p>
          </div>

          {/* Pillars/Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {framework.steps.map((st, i) => (
              <div key={i} className="bg-white border border-[#014A36]/10 p-8 rounded-[28px] shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#C8922B] uppercase tracking-widest bg-[#014A36]/5 px-3 py-1 rounded-full">
                    PILLAR 0{i + 1}
                  </span>
                  <Award size={20} className="text-[#C8922B]" />
                </div>
                <h3 className="text-xl font-bold text-[#014A36]">
                  {st.title}
                </h3>
                <p className="text-xs md:text-sm text-[#222222]/70 leading-relaxed font-medium">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Application and Mistakes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Application */}
            <div className="bg-[#014A36]/3 border border-[#014A36]/5 p-8 rounded-3xl space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#C8922B] tracking-widest uppercase block mb-2">
                  PRACTICAL APPLICATION
                </span>
                <p className="text-sm md:text-base text-[#222222]/85 font-semibold leading-relaxed">
                  {framework.application}
                </p>
              </div>
              <div className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#014A36]/60">
                <span>VERIFIED FRAMEWORK SYSTEM</span>
                <Star size={12} className="fill-[#014A36]/60" />
              </div>
            </div>

            {/* Mistakes */}
            <div className="bg-[#B94A48]/5 border border-[#B94A48]/10 p-8 rounded-3xl space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#B94A48] tracking-widest uppercase block mb-2">
                  COMMON BUSINESS MISTAKE
                </span>
                <p className="text-sm md:text-base text-[#222222]/85 font-semibold leading-relaxed">
                  {framework.commonMistake}
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#B94A48]">
                <ShieldAlert size={14} />
                <span>INDEX LEAK POINT</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Block */}
      {framework.faqs && framework.faqs.length > 0 && <ServicesFAQ faqs={framework.faqs} />}

      {/* CTA Section */}
      <section className="py-24 bg-[#014A36] text-[#FFFDF8] relative overflow-hidden border-t border-white/5">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            Identify your experience gaps.
          </h2>
          <p className="text-sm md:text-base text-[#FFFDF8]/70 font-medium max-w-xl mx-auto mb-10 leading-relaxed">
            Get a manual, custom Experience Audit of your digital portals and unboxing loops based on our proprietary frameworks.
          </p>
          <Link
            href="/experience-audit"
            className="inline-flex items-center justify-center bg-[#C8922B] hover:bg-[#A87318] text-[#014A36] hover:text-[#FFFDF8] px-8 py-4.5 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-[#C8922B]/10 text-[15px] group"
          >
            <span>Your Brand, Our Plan</span>
            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
