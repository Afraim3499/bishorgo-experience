import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, MapPin, Users, HelpCircle, ShieldAlert, Star } from "lucide-react";
import { getLocationPage, getAllLocationSlugs } from "@/data/locations";
import { ServicesFAQ } from "@/components/sections/ServicesFAQ";

export function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocationPage(slug);
  if (!loc) return { title: "Location Not Found — Bishorgo Experience" };

  return {
    title: loc.metadata.title,
    description: loc.metadata.description,
    alternates: {
      canonical: `/locations/${slug}`,
    },
  };
}

export default async function LocationSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = getLocationPage(slug);
  if (!loc) notFound();

  const faqSchema = loc.faqs && loc.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": loc.faqs.map((faq) => ({
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
          <div className="inline-flex items-center gap-2 justify-center">
            <MapPin size={16} className="text-[#C8922B]" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#C8922B] uppercase">
              LOCALIZED EXPERIENCE STRATEGY
            </span>
          </div>
          <h1 className="text-4xl md:text-6.5xl lg:text-7.5xl font-extrabold tracking-tight max-w-5xl mx-auto leading-tight">
            {loc.title}
          </h1>
          <p className="text-base md:text-xl text-[#FFFDF8]/85 max-w-3xl mx-auto leading-relaxed">
            {loc.subtitle}
          </p>
        </div>
      </section>

      {/* Main Analysis Section */}
      <section className="py-24 md:py-32 bg-[#F8F5EF] text-[#222222]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10 space-y-16">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-[10px] font-mono font-bold text-[#014A36]/65 tracking-widest uppercase block">
              LOCAL MARKET INTRO
            </span>
            <p className="text-base md:text-lg text-[#222222]/85 font-medium leading-relaxed">
              {loc.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-[#014A36]/10 p-8 rounded-3xl space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#014A36]/5 flex items-center justify-center">
                <MapPin size={18} className="text-[#C8922B]" />
              </div>
              <h3 className="text-lg font-bold text-[#014A36]">Retail Shopping Habits</h3>
              <p className="text-xs md:text-sm text-[#222222]/70 leading-relaxed font-medium">
                {loc.retailHabits}
              </p>
            </div>

            <div className="bg-white border border-[#014A36]/10 p-8 rounded-3xl space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#014A36]/5 flex items-center justify-center">
                <Users size={18} className="text-[#C8922B]" />
              </div>
              <h3 className="text-lg font-bold text-[#014A36]">Customer Psychology Profile</h3>
              <p className="text-xs md:text-sm text-[#222222]/70 leading-relaxed font-medium">
                {loc.psychologyProfile}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Experience Gaps */}
            <div className="bg-[#B94A48]/5 border border-[#B94A48]/10 p-8 rounded-3xl space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#B94A48] tracking-widest uppercase block mb-2">
                  LOCAL EXPERIENCE LEAKS
                </span>
                <p className="text-sm md:text-base text-[#222222]/85 font-semibold leading-relaxed">
                  {loc.gapHighlight}
                </p>
              </div>
              <div className="flex items-center gap-1 text-xs font-mono font-bold text-[#B94A48]">
                <ShieldAlert size={14} />
                <span>CUSTOMER DROPOFF POINTS</span>
              </div>
            </div>

            {/* Service Fit */}
            <div className="bg-[#014A36]/3 border border-[#014A36]/5 p-8 rounded-3xl space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#C8922B] tracking-widest uppercase block mb-2">
                  RECOMMENDED SERVICES
                </span>
                <p className="text-sm md:text-base text-[#222222]/85 font-semibold leading-relaxed">
                  {loc.serviceFit}
                </p>
              </div>
              <div className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#014A36]/60">
                <span>STRATEGIC FOCUS</span>
                <Star size={12} className="fill-[#014A36]/60" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Block */}
      {loc.faqs && loc.faqs.length > 0 && <ServicesFAQ faqs={loc.faqs} />}

      {/* CTA Section */}
      <section className="py-24 bg-[#014A36] text-[#FFFDF8] relative overflow-hidden border-t border-white/5">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            Grow your local brand recall.
          </h2>
          <p className="text-sm md:text-base text-[#FFFDF8]/70 font-medium max-w-xl mx-auto mb-10 leading-relaxed">
            Let us shadow your retail channels or audit your digital storefronts in {loc.city}. Request a free Experience Audit to get started.
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
