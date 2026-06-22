import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { methodStepsData } from "../../data/method";
import { methodFAQs } from "../../data/faqs";
import { ServicesFAQ as MethodFAQ } from "../../components/sections/ServicesFAQ";
import { Compass, FileText, LayoutTemplate, Send, Eye, Star, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Bishorgo Method — Bishorgo Experience",
  description:
    "Attention থেকে memory পর্যন্ত, আমরা পুরো journey design করি। Learn about our 5-step method: Discover, Define, Design, Deliver, and Deepen.",
  alternates: {
    canonical: "/method",
  },
};

const getStepIcon = (id: string) => {
  switch (id) {
    case "discover":
      return <Compass size={24} className="text-[#C8922B]" />;
    case "define":
      return <FileText size={24} className="text-[#C8922B]" />;
    case "design":
      return <LayoutTemplate size={24} className="text-[#C8922B]" />;
    case "deliver":
      return <Send size={24} className="text-[#C8922B]" />;
    case "deepen":
      return <Eye size={24} className="text-[#C8922B]" />;
    default:
      return <Star size={24} className="text-[#C8922B]" />;
  }
};

export default function MethodPage() {
  return (
    <div className="bg-[#F8F5EF] text-[#222222] min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative bg-[#014A36] text-[#FFFDF8] pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
        
        {/* Background visual motif */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.03] pointer-events-none select-none">
          <svg className="w-full h-full fill-white" viewBox="0 0 600 600">
            <path d="M 133 55 L 135 57 L 135 67 L 137 70 L 140 90 L 151 120 L 160 137 L 181 165 L 199 183 L 225 202 L 247 214 L 262 219 L 266 222 L 281 226 L 282 228 L 256 236 L 228 249 L 199 270 L 175 295 L 163 312 L 147 344 L 132 398 L 133 401 L 131 404 L 132 408 L 172 376 L 272 308 L 285 295 L 293 284 L 301 268 L 300 267 L 304 258 L 308 238 L 308 219 L 301 190 L 293 173 L 276 152 L 245 129 L 235 124 L 231 120 L 158 74 Z" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-[#C8922B]/5 blur-[100px] pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-5 md:px-10 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-[0.25em] text-[#C8922B] uppercase mb-5">
            OUR PROPRIETARY FRAMEWORK
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7.5xl font-extrabold tracking-tight max-w-5xl mx-auto leading-tight mb-8 font-sans">
            Attention থেকে <span className="text-[#C8922B]">memory</span> পর্যন্ত,<br />
            আমরা পুরো journey design করি।
          </h1>
          
          <p className="text-base md:text-xl text-[#FFFDF8]/85 leading-relaxed font-medium max-w-3xl mx-auto mb-10">
            Bishorgo Method helps find where your brand is being forgotten, then turns those weak moments into stronger customer experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/experience-audit"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#C8922B] hover:bg-[#A87318] text-[#014A36] hover:text-[#FFFDF8] px-8 py-4.5 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-[#C8922B]/10 group text-[15px]"
            >
              <span>Audit Your Brand Journey</span>
              <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="#steps-timeline"
              className="w-full sm:w-auto inline-flex items-center justify-center border border-white/20 hover:border-white/40 hover:bg-white/5 text-[#FFFDF8] px-8 py-4.5 rounded-full font-semibold transition-colors duration-300 text-[15px]"
            >
              See the Steps
            </a>
          </div>
        </div>

      </section>

      {/* 2. Intro Statement Section */}
      <section className="py-20 bg-[#F8F5EF] text-[#222222]">
        <div className="max-w-[960px] mx-auto px-5 text-center">
          <blockquote className="text-xl md:text-3xl font-serif italic text-[#014A36] leading-relaxed mb-6">
            "A transaction takes ten seconds. A memory lasts for months. The Bishorgo Method is a design discipline built around peak brand recall."
          </blockquote>
          <div className="w-16 h-0.5 bg-[#C8922B] mx-auto" />
        </div>
      </section>

      {/* 3. Steps Breakdown (Timeline) */}
      <section id="steps-timeline" className="pb-24 md:pb-36 bg-[#F8F5EF] text-[#222222] scroll-mt-20">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10">
          
          <div className="space-y-16">
            {methodStepsData.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={step.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start py-12 border-t border-[#014A36]/10 first:border-t-0`}
                >
                  
                  {/* Left Column: Number & Icon */}
                  <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start justify-between lg:justify-start gap-4">
                    <span className="text-5xl md:text-7xl font-mono font-extrabold text-[#C8922B]/20 leading-none">
                      {step.number}
                    </span>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="w-10 h-10 rounded-full bg-[#014A36]/5 flex items-center justify-center">
                        {getStepIcon(step.id)}
                      </div>
                      <span className="text-xs font-mono font-bold tracking-widest text-[#014A36] uppercase">
                        PHASE {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Middle Column: Details & Why it matters */}
                  <div className="lg:col-span-6 space-y-6">
                    <h3 className="text-2xl md:text-4xl font-extrabold text-[#014A36]">
                      {step.title}
                    </h3>
                    
                    <div className="space-y-4 font-medium text-sm md:text-base text-[#222222]/85 leading-relaxed">
                      <p className="font-medium text-[#222222] text-base md:text-lg">
                        {step.whatHappens}
                      </p>
                      <p>
                        <span className="font-bold text-[#014A36] block text-xs font-mono tracking-widest uppercase mb-1">
                          WHY IT MATTERS
                        </span>
                        {step.whyItMatters}
                      </p>
                    </div>

                    {/* Local Example Box */}
                    <div className="bg-[#014A36]/3 rounded-2xl p-5 border border-[#014A36]/5">
                      <span className="text-[10px] font-mono font-bold text-[#C8922B] tracking-widest uppercase block mb-1">
                        REAL APPLICATION
                      </span>
                      <p className="text-xs md:text-sm text-[#222222]/80 leading-relaxed italic">
                        "{step.example}"
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Key Deliverable Card */}
                  <div className="lg:col-span-3 bg-white border border-[#014A36]/10 rounded-2xl p-6 shadow-sm">
                    <span className="text-[10px] font-mono font-bold text-[#014A36]/60 tracking-widest uppercase block mb-3">
                      KEY DELIVERABLE
                    </span>
                    <h4 className="text-lg font-bold text-[#014A36] mb-2 leading-tight">
                      {step.output}
                    </h4>
                    <p className="text-xs text-[#222222]/70 font-medium leading-relaxed mb-4">
                      The core analytical artifact or system handed over to your team in this phase.
                    </p>
                    <div className="inline-flex items-center gap-1 text-[#C8922B] text-xs font-bold font-mono">
                      <span>VERIFIED OUTPUT</span>
                      <Star size={10} className="fill-[#C8922B]" />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. FAQs Section */}
      <MethodFAQ faqs={methodFAQs} />

      {/* 5. CTA Section */}
      <section className="py-24 bg-[#014A36] text-[#FFFDF8] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.05] pointer-events-none">
          <svg className="w-full h-full fill-[#C8922B]" viewBox="0 0 600 600">
            <path d="M 133 55 L 135 57 L 135 67 L 137 70 L 140 90 L 151 120 L 160 137 L 181 165 L 199 183 L 225 202 L 247 214 L 262 219 L 266 222 L 281 226 L 282 228 L 256 236 L 228 249 L 199 270 L 175 295 L 163 312 L 147 344 L 132 398 L 133 401 L 131 404 L 132 408 L 172 376 L 272 308 L 285 295 L 293 284 L 301 268 L 300 267 L 304 258 L 308 238 L 308 219 L 301 190 L 293 173 L 276 152 L 245 129 L 235 124 L 231 120 L 158 74 Z" />
          </svg>
        </div>
        <div className="max-w-[1320px] mx-auto px-5 md:px-10 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            Find where your brand is being forgotten.
          </h2>
          <p className="text-sm md:text-base text-[#FFFDF8]/70 font-medium max-w-xl mx-auto mb-10 leading-relaxed">
            Let us put the Bishorgo Method to work for your business. We start with a comprehensive, free Experience Audit of your digital presence.
          </p>
          <Link
            href="/experience-audit"
            className="inline-flex items-center justify-center bg-[#C8922B] hover:bg-[#A87318] text-[#014A36] hover:text-[#FFFDF8] px-8 py-4.5 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-[#C8922B]/10 text-[15px] group"
          >
            <span>Get a Free Experience Audit</span>
            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

    </div>
  );
}
