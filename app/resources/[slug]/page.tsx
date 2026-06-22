import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, FileText, CheckSquare, Star, Mail } from "lucide-react";
import { getChecklistPage, getAllChecklistSlugs } from "@/data/checklists";
import { ResourceForm } from "./ResourceForm";

export function generateStaticParams() {
  return getAllChecklistSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getChecklistPage(slug);
  if (!item) return { title: "Checklist Not Found — Bishorgo Resources" };

  return {
    title: item.metadata.title,
    description: item.metadata.description,
    alternates: {
      canonical: `/resources/${slug}`,
    },
  };
}

export default async function ChecklistSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getChecklistPage(slug);
  if (!item) notFound();

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
          <div className="inline-flex items-center gap-2 justify-center">
            <FileText size={16} className="text-[#C8922B]" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#C8922B] uppercase">
              BISHORGO PRACTICAL RESOURCES
            </span>
          </div>
          <h1 className="text-4xl md:text-6.5xl lg:text-7.5xl font-extrabold tracking-tight max-w-5xl mx-auto leading-tight">
            {item.title}
          </h1>
          <p className="text-base md:text-xl text-[#FFFDF8]/85 max-w-3xl mx-auto leading-relaxed">
            {item.subtitle}
          </p>
        </div>
      </section>

      {/* Main Checklist Split Layout */}
      <section className="py-24 md:py-32 bg-[#F8F5EF] text-[#222222]">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: The Interactive Checklist Sheet */}
            <div className="lg:col-span-7 space-y-8 bg-white border border-[#014A36]/10 p-8 md:p-10 rounded-[32px] shadow-sm">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#014A36]/60 tracking-widest uppercase block mb-1">
                  INTERACTIVE PREVIEW
                </span>
                <h2 className="text-2xl font-extrabold text-[#014A36] tracking-tight">
                  Check your parameters:
                </h2>
              </div>

              <div className="space-y-8">
                {item.items.map((sec, idx) => (
                  <div key={idx} className="space-y-4">
                    <h3 className="text-sm font-mono font-bold text-[#C8922B] uppercase tracking-wider border-b border-[#014A36]/10 pb-2">
                      {sec.section}
                    </h3>
                    <div className="space-y-3">
                      {sec.tasks.map((task, tidx) => (
                        <label
                          key={tidx}
                          className="flex gap-3.5 items-start p-3 hover:bg-[#014A36]/3 rounded-xl transition-all cursor-pointer select-none"
                        >
                          <input
                            type="checkbox"
                            className="mt-1 w-4 h-4 text-[#014A36] border-[#014A36]/20 rounded focus:ring-[#C8922B]"
                          />
                          <span className="text-xs md:text-sm font-semibold text-[#222222]/85 leading-relaxed">
                            {task}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Local Tip */}
              <div className="bg-[#014A36]/3 border-l-4 border-[#C8922B] p-6 rounded-r-2xl space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-[#C8922B] tracking-widest uppercase block">
                  LOCAL APPLICATION TIP
                </span>
                <p className="text-xs md:text-sm text-[#014A36] font-semibold leading-relaxed italic">
                  “{item.localTip}”
                </p>
              </div>
            </div>

            {/* Right Column: Lead Form */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
              <div className="bg-white border border-[#014A36]/10 p-8 rounded-[32px] shadow-sm space-y-6">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#014A36]/5 flex items-center justify-center">
                    <Mail size={18} className="text-[#C8922B]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#014A36]">Download Full PDF Version</h3>
                  <p className="text-xs text-[#222222]/70 leading-relaxed font-medium">
                    Enter your email to receive the fully formatted print-ready PDF version of this checklist, including extra tools and scoring guidelines.
                  </p>
                </div>

                <ResourceForm resourceName={item.label} />
              </div>

              <div className="bg-[#014A36] text-[#FFFDF8] p-6 rounded-2xl space-y-3 relative overflow-hidden">
                <h4 className="text-sm font-bold tracking-tight">Need a custom evaluation?</h4>
                <p className="text-xs text-[#FFFDF8]/70 leading-relaxed font-medium">
                  Skip the manual checklist and request a complete manual Experience Audit from our strategy team.
                </p>
                <Link
                  href="/experience-audit"
                  className="text-xs font-mono font-bold uppercase text-[#C8922B] hover:text-[#FFFDF8] flex items-center gap-1 transition-colors"
                >
                  <span>Book Experience Audit</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
