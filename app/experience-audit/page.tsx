import React from "react";
import { Metadata } from "next";
import { AuditForm } from "../../components/sections/AuditForm";
import { ServicesFAQ } from "../../components/sections/ServicesFAQ";
import { generalFAQs } from "../../data/faqs";
import { Check, ShieldAlert, Sparkles, Zap, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "Experience Audit — Bishorgo Experience",
  description:
    "আপনার brand experience কোথায় ভাঙছে, তা জানুন। Get a free, detailed Experience Audit from Bishorgo covering brand alignment, web speed, and unboxing loops.",
  alternates: {
    canonical: "/experience-audit",
  },
};

const auditChecks = [
  {
    title: "Brand Storytelling & Messaging",
    desc: "We check if your core brand story is clear and consistent across social media, ads, and landing pages.",
    icon: <Sparkles size={18} className="text-[#C8922B]" />,
  },
  {
    title: "Website Performance & Speed",
    desc: "We run deep audits on your website load speeds, layout shifts (CLS), and mobile checkout friction points.",
    icon: <Zap size={18} className="text-[#C8922B]" />,
  },
  {
    title: "Response & Chat Flow Experience",
    desc: "We audit how fast your team responds on Messenger/WhatsApp and if the automated bot scripts cause frustration.",
    icon: <Activity size={18} className="text-[#C8922B]" />,
  },
  {
    title: "Physical Unboxing Flow",
    desc: "We review the delivery package unboxing feel to find if it leaves a positive, shareable memory.",
    icon: <ShieldAlert size={18} className="text-[#C8922B]" />,
  },
];

export default function ExperienceAuditPage() {
  // Filter FAQs specific to the Audit page
  const auditFAQs = generalFAQs.filter((faq) => faq.category === "Audit" || faq.category === "General");

  return (
    <div className="bg-[#F8F5EF] text-[#222222] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-[#014A36] text-[#FFFDF8] pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
        
        {/* Background logo detail */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.03] pointer-events-none select-none">
          <svg className="w-full h-full fill-white" viewBox="0 0 600 600">
            <path d="M 133 55 L 135 57 L 135 67 L 137 70 L 140 90 L 151 120 L 160 137 L 181 165 L 199 183 L 225 202 L 247 214 L 262 219 L 266 222 L 281 226 L 282 228 L 256 236 L 228 249 L 199 270 L 175 295 L 163 312 L 147 344 L 132 398 L 133 401 L 131 404 L 132 408 L 172 376 L 272 308 L 285 295 L 293 284 L 301 268 L 300 267 L 304 258 L 308 238 L 308 219 L 301 190 L 293 173 L 276 152 L 245 129 L 235 124 L 231 120 L 158 74 Z" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C8922B]/8 blur-[90px] pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-5 md:px-10 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-[0.25em] text-[#C8922B] uppercase mb-5">
            FREE DIAGNOSTIC
          </span>
          <h1 className="text-4xl md:text-6.5xl lg:text-8xl font-extrabold tracking-tight max-w-5xl mx-auto leading-tight mb-8">
            আপনার brand experience কোথায় ভাঙছে, তা জানুন।
          </h1>
          <p className="text-base md:text-xl text-[#FFFDF8]/80 leading-relaxed font-medium max-w-3xl mx-auto">
            A free Experience Audit helps you see where your brand's digital presence, website speed, checkout flow, and physical unboxing is losing customers — and how to fix it.
          </p>
        </div>

      </section>

      {/* Main Info + Form Split Layout */}
      <section className="py-24 md:py-32 bg-[#F8F5EF] text-[#222222]">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: What gets audited */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#014A36] font-bold block mb-3 font-mono">
                  OUR EVALUATION SCOPE
                </span>
                <h2 className="text-2xl md:text-4xl font-extrabold text-[#014A36] tracking-tight leading-tight">
                  What we evaluate in your brand journey:
                </h2>
              </div>

              <div className="space-y-6">
                {auditChecks.map((check, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-[#014A36]/3 border border-[#014A36]/5 p-5 rounded-2xl">
                    <div className="w-10 h-10 rounded-full bg-[#014A36]/5 flex items-center justify-center flex-shrink-0">
                      {check.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#014A36] text-[16px] mb-1">
                        {check.title}
                      </h3>
                      <p className="text-xs md:text-sm text-[#222222]/75 font-medium leading-relaxed">
                        {check.desc}
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

      {/* FAQ block */}
      <ServicesFAQ faqs={auditFAQs} />

    </div>
  );
}
