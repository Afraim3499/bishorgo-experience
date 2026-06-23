import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { FounderNote } from "../../components/sections/FounderNote";
import { Star, Shield, ArrowRight, Heart, Sparkles, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Bishorgo Experience",
  description:
    "We do not build brands only to be seen. We build them to be remembered. Meet Bishorgo Experience, a brand experience design studio based in Dhaka.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About — Bishorgo Experience",
    description:
      "We do not build brands only to be seen. We build them to be remembered. Meet Bishorgo Experience, a brand experience design studio based in Dhaka.",
    url: "https://bishorgoexperience.com/about",
    images: [
      {
        url: "/images/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Bishorgo Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Bishorgo Experience",
    description:
      "We do not build brands only to be seen. We build them to be remembered. Meet Bishorgo Experience, a brand experience design studio based in Dhaka.",
    images: ["/images/brand/og-image.jpg"],
  },
};

const companyValues = [
  {
    icon: <Heart size={20} className="text-[#C8922B]" />,
    title: "Human-First Experience",
    desc: "We design for human emotions, habits, and sensory memories. Clicks are temporary; how you make a customer feel is permanent.",
  },
  {
    icon: <Compass size={20} className="text-[#C8922B]" />,
    title: "Recall Over Attention",
    desc: "Attention is cheap and easily bought. Memory is earned. We build unified systems that keep your brand relevant for months, not seconds.",
  },
  {
    icon: <Shield size={20} className="text-[#C8922B]" />,
    title: "Strategy-Led Design",
    desc: "We never design in a vacuum. Every layout, copy flow, and activation must solve a distinct business problem and improve retention.",
  },
  {
    icon: <Sparkles size={20} className="text-[#C8922B]" />,
    title: "Bangladesh-Rooted",
    desc: "We live and design in Dhaka. We understand local commerce habits, logistics friction, and how to build trust with local customers.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#F8F5EF] text-[#222222] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-[#014A36] text-[#FFFDF8] pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
        
        {/* Background logo shape */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.03] pointer-events-none select-none">
          <svg className="w-full h-full fill-white" viewBox="0 0 600 600">
            <path d="M 133 55 L 135 57 L 135 67 L 137 70 L 140 90 L 151 120 L 160 137 L 181 165 L 199 183 L 225 202 L 247 214 L 262 219 L 266 222 L 281 226 L 282 228 L 256 236 L 228 249 L 199 270 L 175 295 L 163 312 L 147 344 L 132 398 L 133 401 L 131 404 L 132 408 L 172 376 L 272 308 L 285 295 L 293 284 L 301 268 L 300 267 L 304 258 L 308 238 L 308 219 L 301 190 L 293 173 L 276 152 L 245 129 L 235 124 L 231 120 L 158 74 Z" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C8922B]/8 blur-[90px] pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-5 md:px-10 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-[0.25em] text-[#C8922B] uppercase mb-5">
            OUR STORY
          </span>
          <h1 className="text-4xl md:text-6.5xl lg:text-8xl font-extrabold tracking-tight max-w-5xl mx-auto leading-tight mb-8">
            We do not build brands only to be seen. We build them to be remembered.
          </h1>
          <p className="text-base md:text-xl text-[#FFFDF8]/80 leading-relaxed font-medium max-w-3xl mx-auto">
            Bishorgo is a brand experience studio based in Dhaka. We partner with founders who want to transform temporary transactions into lifelong customer connections.
          </p>
        </div>

      </section>

      {/* Founder Statement Block (Imports client visual card) */}
      <section className="bg-[#014A36] py-16 md:py-24 border-t border-white/5">
        <FounderNote />
      </section>

      {/* Core Values Section */}
      <section className="py-24 md:py-32 bg-[#F8F5EF] text-[#222222]">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10">
          
          <div className="mb-16 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#014A36] font-bold block mb-3 font-mono">
              THE BISHORGO CODE
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#014A36] tracking-tight leading-tight">
              Beliefs that guide our strategy and designs.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#014A36]/10 p-8 rounded-3xl flex gap-5 hover:border-[#C8922B]/40 transition-all duration-300 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-[#014A36]/5 flex items-center justify-center flex-shrink-0">
                  {val.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#014A36] mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#222222]/70 leading-relaxed font-medium">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Audit CTA Banner */}
      <section className="py-24 bg-[#014A36] text-[#FFFDF8] relative overflow-hidden border-t border-white/5">
        {/* Background glow */}
        <div className="absolute -bottom-10 -right-10 w-[300px] h-[300px] rounded-full bg-[#C8922B]/10 blur-[80px] pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-5 md:px-10 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            Make your brand experience unforgettable.
          </h2>
          <p className="text-sm md:text-base text-[#FFFDF8]/70 font-medium max-w-xl mx-auto mb-10 leading-relaxed">
            Get a manual, custom Experience Audit of your brand's digital presence, website checkout flow, response patterns, and unboxing logistics.
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
