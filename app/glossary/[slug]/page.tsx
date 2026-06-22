import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, BookOpen, ShieldAlert, CheckCircle, Star } from "lucide-react";
import { getGlossaryTerm, getAllGlossarySlugs } from "@/data/glossary";

export function generateStaticParams() {
  return getAllGlossarySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getGlossaryTerm(slug);
  if (!item) return { title: "Term Not Found — Bishorgo Glossary" };

  return {
    title: `${item.metadata.title} — Bishorgo Glossary`,
    description: item.metadata.description,
    alternates: {
      canonical: `/glossary/${slug}`,
    },
    openGraph: {
      title: `${item.metadata.title} — Bishorgo Glossary`,
      description: item.metadata.description,
      url: `https://bishorgoexperience.com/glossary/${slug}`,
      siteName: "Bishorgo Experience",
      type: "website",
      images: [
        {
          url: "/images/brand/og-image.jpg",
          width: 1200,
          height: 630,
          alt: item.term,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${item.metadata.title} — Bishorgo Glossary`,
      description: item.metadata.description,
      images: ["/images/brand/og-image.jpg"],
    },
  };
}

export default async function GlossarySlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getGlossaryTerm(slug);
  if (!item) notFound();

  // Create Definition Schema
  const termSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": item.term,
    "description": item.definition,
    "inDefinedTermSet": "https://bishorgoexperience.com/glossary"
  };

  return (
    <div className="bg-[#F8F5EF] text-[#222222] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-[#014A36] text-[#FFFDF8] pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.03] pointer-events-none select-none">
          <svg className="w-full h-full fill-white" viewBox="0 0 600 600">
            <path d="M 133 55 L 135 57 L 135 67 L 137 70 L 140 90 L 151 120 L 160 137 L 181 165 L 199 183 L 225 202 L 247 214 L 262 219 L 266 222 L 281 226 L 282 228 L 256 236 L 228 249 L 199 270 L 175 295 L 163 312 L 147 344 L 132 398 L 133 401 L 131 404 L 132 408 L 172 376 L 272 308 L 285 295 L 293 284 L 301 268 L 300 267 L 304 258 L 308 238 L 308 219 L 301 190 L 293 173 L 276 152 L 245 129 L 235 124 L 231 120 L 158 74 Z" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C8922B]/8 blur-[90px] pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-5 md:px-10 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 justify-center">
            <BookOpen size={16} className="text-[#C8922B]" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#C8922B] uppercase">
              BISHORGO GLOSSARY / DEFINITIONS
            </span>
          </div>
          <h1 className="text-4xl md:text-6.5xl lg:text-7.5xl font-extrabold tracking-tight max-w-5xl mx-auto leading-tight">
            {item.term}
          </h1>
          <p className="text-base md:text-xl text-[#FFFDF8]/85 max-w-3xl mx-auto leading-relaxed">
            What is {item.term}? Read definition, why it matters, mistakes, and solutions.
          </p>
        </div>
      </section>

      {/* Main Definition Layout */}
      <section className="py-24 md:py-32 bg-[#F8F5EF] text-[#222222]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block: Definition & Details */}
          <div className="lg:col-span-8 space-y-12">
            {/* Definition Box */}
            <div className="bg-white border-2 border-[#014A36]/10 p-8 md:p-10 rounded-[32px] shadow-sm space-y-4">
              <span className="text-[10px] font-mono font-bold text-[#C8922B] tracking-widest uppercase block">
                TERM DEFINITION
              </span>
              <p className="text-lg md:text-2xl font-bold text-[#014A36] leading-relaxed">
                {item.definition}
              </p>
            </div>

            {/* Why It Matters */}
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-[#014A36]">
                Why It Matters to Your Business
              </h3>
              <p className="text-sm md:text-base text-[#222222]/80 leading-relaxed font-medium">
                {item.whyItMatters}
              </p>
            </div>

            {/* Local Example */}
            <div className="bg-[#014A36]/3 border border-[#014A36]/5 p-8 rounded-3xl space-y-4">
              <span className="text-[10px] font-mono font-bold text-[#C8922B] tracking-widest uppercase block">
                EXAMPLE IN BANGLADESH
              </span>
              <p className="text-sm md:text-base text-[#222222]/85 font-semibold leading-relaxed">
                {item.localExample}
              </p>
            </div>
          </div>

          {/* Right Block: Mistakes & How we help */}
          <div className="lg:col-span-4 space-y-8">
            {/* Common Mistake */}
            <div className="bg-[#B94A48]/5 border border-[#B94A48]/10 p-8 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-[#B94A48] font-mono text-[10px] font-bold tracking-widest uppercase">
                <ShieldAlert size={14} />
                <span>COMMON MISTAKE</span>
              </div>
              <p className="text-xs md:text-sm text-[#222222]/80 leading-relaxed font-medium">
                {item.commonMistake}
              </p>
            </div>

            {/* How we help */}
            <div className="bg-white border border-[#014A36]/10 p-8 rounded-2xl space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-[#014A36] font-mono text-[10px] font-bold tracking-widest uppercase">
                <CheckCircle size={14} className="text-[#C8922B]" />
                <span>HOW BISHORGO HELPS</span>
              </div>
              <p className="text-xs md:text-sm text-[#222222]/80 leading-relaxed font-medium">
                {item.howBishorgoHelps}
              </p>
            </div>

            {/* Related Pages */}
            {item.relatedPages && item.relatedPages.length > 0 && (
              <div className="p-6 border-t border-[#014A36]/10 space-y-3">
                <span className="text-[10px] font-mono font-bold text-[#222222]/45 tracking-widest uppercase block">
                  RELATED PAGES
                </span>
                <div className="flex flex-col gap-2.5">
                  {item.relatedPages.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      className="text-xs font-bold text-[#014A36] hover:text-[#C8922B] flex items-center gap-1 transition-colors"
                    >
                      <span>{link.label}</span>
                      <ArrowRight size={10} />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Audit CTA */}
      <section className="py-24 bg-[#014A36] text-[#FFFDF8] relative overflow-hidden border-t border-white/5">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            Apply this concept to your business.
          </h2>
          <p className="text-sm md:text-base text-[#FFFDF8]/70 font-medium max-w-xl mx-auto mb-10 leading-relaxed">
            Get a manual, custom Experience Audit of your brand's digital channels and unboxing workflows to check for recall parameters.
          </p>
          <Link
            href="/experience-audit"
            className="inline-flex items-center justify-center bg-[#C8922B] hover:bg-[#A87318] text-[#014A36] hover:text-[#FFFDF8] px-8 py-4.5 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-[#C8922B]/10 text-[15px] group"
          >
            <span>Book an Experience Audit</span>
            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
