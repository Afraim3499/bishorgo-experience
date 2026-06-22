import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { detailedServices, servicesPhilosophy } from "../../data/services";
import { servicesFAQs } from "../../data/faqs";
import { ServicesList } from "../../components/sections/ServicesList";
import { ServicesFAQ } from "../../components/sections/ServicesFAQ";
import { Star, ArrowRight, Activity, BookOpen, Cpu, Sparkles, HelpCircle, Store } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Bishorgo Experience",
  description:
    "We design the touchpoints that make brands unforgettable. Explore our 10 core experience services spanning Brand Strategy, Web Experience, Content, and Activations.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-[#F8F5EF] text-[#222222] min-h-screen">
      
      {/* 1. Hero Section (Premium Dark Green) */}
      <section className="relative bg-[#014A36] text-[#FFFDF8] pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
        
        {/* Background visual graphics */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.03] pointer-events-none select-none">
          <svg className="w-full h-full fill-white" viewBox="0 0 600 600">
            <path d="M 133 55 L 135 57 L 135 67 L 137 70 L 140 90 L 151 120 L 160 137 L 181 165 L 199 183 L 225 202 L 247 214 L 262 219 L 266 222 L 281 226 L 282 228 L 256 236 L 228 249 L 199 270 L 175 295 L 163 312 L 147 344 L 132 398 L 133 401 L 131 404 L 132 408 L 172 376 L 272 308 L 285 295 L 293 284 L 301 268 L 300 267 L 304 258 L 308 238 L 308 219 L 301 190 L 293 173 L 276 152 L 245 129 L 235 124 L 231 120 L 158 74 Z" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C8922B]/10 blur-[90px] pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-5 md:px-10 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-[0.25em] text-[#C8922B] uppercase mb-5">
            <Star size={10} className="fill-[#C8922B]" /> WHAT WE DO
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-tight mb-8">
            {servicesPhilosophy.headline}
          </h1>
          <p className="text-base md:text-xl text-[#FFFDF8]/80 leading-relaxed font-medium max-w-3xl mx-auto mb-10">
            {servicesPhilosophy.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/experience-audit"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#C8922B] hover:bg-[#A87318] text-[#014A36] hover:text-[#FFFDF8] px-8 py-4.5 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-[#C8922B]/10 group text-[15px]"
            >
              <span>Book an Experience Audit</span>
              <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="#pillars"
              className="w-full sm:w-auto inline-flex items-center justify-center border border-white/20 hover:border-white/40 hover:bg-white/5 text-[#FFFDF8] px-8 py-4.5 rounded-full font-semibold transition-colors duration-300 text-[15px]"
            >
              Explore Services
            </a>
          </div>
        </div>

      </section>

      {/* 2. Core Pillars (Ivory Section) */}
      <section id="pillars" className="py-24 md:py-32 bg-[#F8F5EF] text-[#222222] scroll-mt-20">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.25em] text-[#014A36] font-bold block mb-3 font-mono">
                THE FOUNDATION
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#014A36] tracking-tight leading-tight">
                Four core systems, aligned for memory.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base text-[#222222]/80 leading-relaxed font-medium">
                {servicesPhilosophy.philosophyText}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pillar 1: Brand */}
            <div className="bg-[#014A36]/5 hover:bg-[#014A36]/8 transition-all duration-300 border border-[#014A36]/10 rounded-3xl p-6.5 flex flex-col justify-between min-h-[220px] group">
              <div className="w-10 h-10 rounded-full bg-[#014A36]/10 text-[#014A36] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen size={20} />
              </div>
              <div>
                <h3 className="text-[19px] font-bold text-[#014A36] mb-2">01 — Brand</h3>
                <p className="text-xs text-[#222222]/75 font-medium leading-relaxed">
                  Establish a clear belief and visual positioning that keeps your business distinct.
                </p>
              </div>
            </div>

            {/* Pillar 2: Content */}
            <div className="bg-[#014A36]/5 hover:bg-[#014A36]/8 transition-all duration-300 border border-[#014A36]/10 rounded-3xl p-6.5 flex flex-col justify-between min-h-[220px] group">
              <div className="w-10 h-10 rounded-full bg-[#014A36]/10 text-[#014A36] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Activity size={20} />
              </div>
              <div>
                <h3 className="text-[19px] font-bold text-[#014A36] mb-2">02 — Content</h3>
                <p className="text-xs text-[#222222]/75 font-medium leading-relaxed">
                  Design story funnels and visual direction instead of just posting content to fill calendars.
                </p>
              </div>
            </div>

            {/* Pillar 3: Technology */}
            <div className="bg-[#014A36]/5 hover:bg-[#014A36]/8 transition-all duration-300 border border-[#014A36]/10 rounded-3xl p-6.5 flex flex-col justify-between min-h-[220px] group">
              <div className="w-10 h-10 rounded-full bg-[#014A36]/10 text-[#014A36] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu size={20} />
              </div>
              <div>
                <h3 className="text-[19px] font-bold text-[#014A36] mb-2">03 — Technology</h3>
                <p className="text-xs text-[#222222]/75 font-medium leading-relaxed">
                  Develop custom high-performance Next.js code to ensure high conversion speeds.
                </p>
              </div>
            </div>

            {/* Pillar 4: Experience */}
            <div className="bg-[#014A36]/5 hover:bg-[#014A36]/8 transition-all duration-300 border border-[#014A36]/10 rounded-3xl p-6.5 flex flex-col justify-between min-h-[220px] group">
              <div className="w-10 h-10 rounded-full bg-[#014A36]/10 text-[#014A36] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles size={20} />
              </div>
              <div>
                <h3 className="text-[19px] font-bold text-[#014A36] mb-2">04 — Experience</h3>
                <p className="text-xs text-[#222222]/75 font-medium leading-relaxed">
                  Infuse physical events, unboxing details, and signature moments into the loop.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Detailed Services (Client Interactive Dashboard) */}
      <ServicesList services={detailedServices} />

      {/* 4. FAQs (Client Accordion list) */}
      <ServicesFAQ faqs={servicesFAQs} />

      {/* 4.5. Pain Point & Industry Interlinking Pathway */}
      <section className="py-20 md:py-28 bg-[#F8F5EF] text-[#222222] border-t border-[#014A36]/8">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Column 1: Solve by Pain Point */}
            <div className="flex flex-col space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#014A36]/5 text-[#014A36] flex items-center justify-center">
                  <HelpCircle size={16} />
                </div>
                <h3 className="display-heading text-[20px] sm:text-[22px] font-bold text-[#014A36]">
                  Solve by Pain Point
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#222222]/60 font-medium max-w-md">
                If you know what is broken in your operations or conversion flow, start directly with a diagnostic solution pathway:
              </p>
              <ul className="space-y-4">
                <li>
                  <Link href="/solutions/brand-not-memorable" className="inline-flex items-center gap-2 group text-sm sm:text-base font-bold text-[#014A36] hover:text-[#C8922B] transition-colors">
                    <span>My Brand Is Not Memorable</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/low-social-engagement" className="inline-flex items-center gap-2 group text-sm sm:text-base font-bold text-[#014A36] hover:text-[#C8922B] transition-colors">
                    <span>Low Social Media Engagement</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/website-not-converting" className="inline-flex items-center gap-2 group text-sm sm:text-base font-bold text-[#014A36] hover:text-[#C8922B] transition-colors">
                    <span>Website Is Not Converting</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/customer-journey-is-broken" className="inline-flex items-center gap-2 group text-sm sm:text-base font-bold text-[#014A36] hover:text-[#C8922B] transition-colors">
                    <span>Broken Customer Journey</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Explore by Industry */}
            <div className="flex flex-col space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#014A36]/5 text-[#014A36] flex items-center justify-center">
                  <Store size={16} />
                </div>
                <h3 className="display-heading text-[20px] sm:text-[22px] font-bold text-[#014A36]">
                  Explore by Industry
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#222222]/60 font-medium max-w-md">
                We apply our core systems directly to the unique buying behaviors, touchpoints, and loyalty loops of your specific business type:
              </p>
              <ul className="space-y-4">
                <li>
                  <Link href="/industries/restaurants" className="inline-flex items-center gap-2 group text-sm sm:text-base font-bold text-[#014A36] hover:text-[#C8922B] transition-colors">
                    <span>Restaurants & Dining</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
                <li>
                  <Link href="/industries/cafes" className="inline-flex items-center gap-2 group text-sm sm:text-base font-bold text-[#014A36] hover:text-[#C8922B] transition-colors">
                    <span>Cafes & Coffee Spaces</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
                <li>
                  <Link href="/industries/clothing-stores" className="inline-flex items-center gap-2 group text-sm sm:text-base font-bold text-[#014A36] hover:text-[#C8922B] transition-colors">
                    <span>Clothing & Apparel Stores</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
                <li>
                  <Link href="/industries/ecommerce" className="inline-flex items-center gap-2 group text-sm sm:text-base font-bold text-[#014A36] hover:text-[#C8922B] transition-colors">
                    <span>Ecommerce & Online Retail</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>


      {/* 5. Audit CTA Banner */}
      <section className="py-24 bg-[#014A36] text-[#FFFDF8] relative overflow-hidden">
        {/* Background motifs */}
        <div className="absolute -bottom-10 -right-10 w-[300px] h-[300px] rounded-full bg-[#C8922B]/10 blur-[80px] pointer-events-none" />
        
        <div className="max-w-[1320px] mx-auto px-5 md:px-10 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            Ready to evaluate your brand experience?
          </h2>
          <p className="text-sm md:text-base text-[#FFFDF8]/70 font-medium max-w-xl mx-auto mb-10 leading-relaxed">
            Get a free, detailed Experience Audit. We will analyze your digital presence, speed metrics, messaging traps, and physical delivery flow to find where your brand is being forgotten.
          </p>
          <Link
            href="/experience-audit"
            className="inline-flex items-center justify-center bg-[#C8922B] hover:bg-[#A87318] text-[#014A36] hover:text-[#FFFDF8] px-8 py-4.5 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-[#C8922B]/10 text-[15px] group"
          >
            <span>Book My Experience Audit</span>
            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

    </div>
  );
}
