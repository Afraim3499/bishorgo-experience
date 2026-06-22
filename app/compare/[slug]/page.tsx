import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, HelpCircle, Star, ShieldCheck, XCircle } from "lucide-react";
import { getComparisonPage, getAllComparisonSlugs } from "@/data/comparisons";

export function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const comp = getComparisonPage(slug);
  if (!comp) return { title: "Comparison Not Found — Bishorgo Experience" };

  return {
    title: comp.metadata.title,
    description: comp.metadata.description,
    alternates: {
      canonical: `/compare/${slug}`,
    },
  };
}

export default async function ComparisonSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comp = getComparisonPage(slug);
  if (!comp) notFound();

  return (
    <div className="bg-[#F8F5EF] text-[#222222] min-h-screen">
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
            BISHORGO COMPARES
          </span>
          <h1 className="text-4xl md:text-6.5xl lg:text-7.5xl font-extrabold tracking-tight max-w-5xl mx-auto leading-tight">
            {comp.title}
          </h1>
          <p className="text-base md:text-xl text-[#FFFDF8]/85 max-w-3xl mx-auto leading-relaxed">
            {comp.subtitle}
          </p>
        </div>
      </section>

      {/* Comparison Grid Section */}
      <section className="py-24 bg-[#F8F5EF] text-[#222222]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10 space-y-16">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-[10px] font-mono font-bold text-[#014A36]/65 tracking-widest uppercase block">
              DIFFERENTIATION COMPARISON
            </span>
            <p className="text-base md:text-lg text-[#222222]/85 font-medium leading-relaxed">
              {comp.description}
            </p>
          </div>

          {/* Table Container */}
          <div className="relative">
            <div className="overflow-x-auto bg-white border border-[#014A36]/10 rounded-3xl shadow-sm">
              <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#014A36] text-[#FFFDF8] text-xs font-mono font-bold uppercase tracking-wider">
                  <th className="p-6 md:p-8">Comparison Variable</th>
                  <th className="p-6 md:p-8">Standard Agency Approach</th>
                  <th className="p-6 md:p-8 text-[#C8922B]">Bishorgo Experience Studio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#014A36]/10 text-xs md:text-sm font-semibold text-[#222222]/85 leading-relaxed">
                {comp.comparisonTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#014A36]/3 transition-colors">
                    <td className="p-6 md:p-8 font-bold text-[#014A36]">{row.feature}</td>
                    <td className="p-6 md:p-8">
                      <div className="flex gap-2 items-start">
                        <XCircle size={16} className="text-[#B94A48] mt-0.5 flex-shrink-0" />
                        <span>{row.standardAgency}</span>
                      </div>
                    </td>
                    <td className="p-6 md:p-8 font-bold text-[#014A36] bg-[#014A36]/2">
                      <div className="flex gap-2 items-start">
                        <ShieldCheck size={16} className="text-[#C8922B] mt-0.5 flex-shrink-0" />
                        <span>{row.bishorgoStudio}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            {/* Table horizontal scroll indicator fade overlay on mobile */}
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden rounded-r-3xl" />
          </div>

          {/* Differentiator Statement Card */}
          <div className="bg-[#014A36]/3 border border-[#014A36]/5 p-8 md:p-12 rounded-[32px] space-y-4">
            <span className="text-[10px] font-mono font-bold text-[#C8922B] tracking-widest uppercase block">
              WHY THE DIFFERENCE MATTERS
            </span>
            <p className="text-base md:text-xl text-[#014A36] font-bold leading-relaxed">
              {comp.whyChooseUs}
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#014A36] text-[#FFFDF8] relative overflow-hidden border-t border-white/5">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            Ready to transition to an experience model?
          </h2>
          <p className="text-sm md:text-base text-[#FFFDF8]/70 font-medium max-w-xl mx-auto mb-10 leading-relaxed">
            Let us evaluate your current buyer path. Request a free Experience Audit of your digital channels and unboxing workflows.
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
