import React from "react";
import { Metadata } from "next";
import { LabClient } from "../../components/sections/LabClient";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Experience Lab — Bishorgo Experience",
  description:
    "আমরা চিন্তা করি, পরীক্ষা করি, মানুষের অভিজ্ঞতা নতুনভাবে দেখি। Read our latest breakdowns, cognitive psychology analyses, and brand unboxing experience experiments.",
  alternates: {
    canonical: "/experience-lab",
  },
};

export default function ExperienceLabPage() {
  return (
    <div className="bg-[#F8F5EF] text-[#222222] min-h-screen">
      
      {/* Hero Section (Dark Green) */}
      <section className="relative bg-[#014A36] text-[#FFFDF8] pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
        
        {/* Background visual motif */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.03] pointer-events-none select-none">
          <svg className="w-full h-full fill-white" viewBox="0 0 600 600">
            <path d="M 133 55 L 135 57 L 135 67 L 137 70 L 140 90 L 151 120 L 160 137 L 181 165 L 199 183 L 225 202 L 247 214 L 262 219 L 266 222 L 281 226 L 282 228 L 256 236 L 228 249 L 199 270 L 175 295 L 163 312 L 147 344 L 132 398 L 133 401 L 131 404 L 132 408 L 172 376 L 272 308 L 285 295 L 293 284 L 301 268 L 300 267 L 304 258 L 308 238 L 308 219 L 301 190 L 293 173 L 276 152 L 245 129 L 235 124 L 231 120 L 158 74 Z" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C8922B]/8 blur-[90px] pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-5 md:px-10 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-[0.25em] text-[#C8922B] uppercase mb-5">
            <Star size={10} className="fill-[#C8922B]" /> BISHORGO EXPERIENCE LAB
          </span>
          <h1 className="text-4xl md:text-6.5xl lg:text-8xl font-extrabold tracking-tight max-w-5xl mx-auto leading-tight mb-8">
            আমরা চিন্তা করি, পরীক্ষা করি, মানুষের অভিজ্ঞতা নতুনভাবে দেখি।
          </h1>
          <p className="text-base md:text-xl text-[#FFFDF8]/80 leading-relaxed font-medium max-w-3xl mx-auto">
            The Experience Lab is our research hub. We study local customer psychology, analyze real-world activations, tear down digital checkout flows, and design actionable blueprints for Bangladeshi brands.
          </p>
        </div>

      </section>

      {/* Lab Article Client Section */}
      <section className="py-24 bg-[#F8F5EF] text-[#222222]">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10">
          <LabClient />
        </div>
      </section>

      {/* Lead Generation CTA Banner */}
      <section className="py-24 bg-[#014A36] text-[#FFFDF8] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute -bottom-10 -right-10 w-[300px] h-[300px] rounded-full bg-[#C8922B]/10 blur-[80px] pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-5 md:px-10 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            Apply these insights to your business.
          </h2>
          <p className="text-sm md:text-base text-[#FFFDF8]/70 font-medium max-w-xl mx-auto mb-10 leading-relaxed">
            Get a free Experience Audit of your digital channels and unboxing workflows. We will highlight the exact friction points currently breaking your customer journey.
          </p>
          <Link
            href="/experience-audit"
            className="inline-flex items-center justify-center bg-[#C8922B] hover:bg-[#A87318] text-[#014A36] hover:text-[#FFFDF8] px-8 py-4.5 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-[#C8922B]/10 text-[15px] group"
          >
            <span>Request My Experience Audit</span>
            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

    </div>
  );
}
