"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ServiceItem } from "../../data/services";
import { ChevronRight, ShieldAlert, Zap, Layers, Award } from "lucide-react";

interface ServicesListProps {
  services: ServiceItem[];
}

export const ServicesList: React.FC<ServicesListProps> = ({ services }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [expandedMobileIdx, setExpandedMobileIdx] = useState<number | null>(0);

  const activeService = services[activeIdx];

  const handleMobileToggle = (idx: number) => {
    setExpandedMobileIdx(expandedMobileIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 md:py-32 bg-[#F8F5EF] text-[#222222] relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#014A36]/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] rounded-full bg-[#C8922B]/3 blur-[100px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-5 md:px-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-left max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-[#014A36] font-bold block mb-3 font-mono">
            OUR SPECIALIZATIONS
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#014A36] tracking-tight leading-tight mb-6">
            Ten touchpoints, one cohesive memory system.
          </h2>
          <p className="text-base md:text-lg text-[#222222]/80 leading-relaxed font-medium">
            We don't believe in isolated activities. Choose the areas where your brand's experience is currently breaking, or let us design the entire journey from scratch.
          </p>
        </div>

        {/* Desktop Dashboard (Hidden on Mobile) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-stretch min-h-[600px]">
          
          {/* Left: Navigation Menu (5 cols) */}
          <div className="col-span-5 flex flex-col justify-start border-r border-[#014A36]/10 pr-6">
            <div className="space-y-2">
              {services.map((service, idx) => {
                const isActive = activeIdx === idx;
                const paddedNum = String(idx + 1).padStart(2, "0");
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-full flex items-center justify-between text-left px-5 py-4.5 rounded-xl transition-all duration-300 group ${
                      isActive
                        ? "bg-[#014A36] text-[#FFFDF8] shadow-lg shadow-[#014A36]/10"
                        : "hover:bg-[#014A36]/5 text-[#222222]/85"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-xs font-mono font-bold tracking-wider ${
                          isActive ? "text-[#C8922B]" : "text-[#014A36]/55 group-hover:text-[#014A36]"
                        }`}
                      >
                        {paddedNum}
                      </span>
                      <span className="font-semibold text-[16px] tracking-wide">
                        {service.title}
                      </span>
                    </div>
                    <ChevronRight
                      size={16}
                      className={`transition-transform duration-300 ${
                        isActive ? "text-[#C8922B] translate-x-1" : "text-[#014A36]/30 group-hover:translate-x-1"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Interactive Detail Display (7 cols) */}
          <div className="col-span-7 pl-6 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#014A36] text-[#FFFDF8] rounded-3xl p-8 xl:p-10 shadow-xl border border-[#C8922B]/10 flex flex-col justify-between h-full relative overflow-hidden"
              >
                {/* Visual watermark logo inside the card */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] h-[350px] opacity-[0.02] pointer-events-none select-none">
                  <svg className="w-full h-full fill-white" viewBox="0 0 600 600">
                    <path d="M 133 55 L 135 57 L 135 67 L 137 70 L 140 90 L 151 120 L 160 137 L 181 165 L 199 183 L 225 202 L 247 214 L 262 219 L 266 222 L 281 226 L 282 228 L 256 236 L 228 249 L 199 270 L 175 295 L 163 312 L 147 344 L 132 398 L 133 401 L 131 404 L 132 408 L 172 376 L 272 308 L 285 295 L 293 284 L 301 268 L 300 267 L 304 258 L 308 238 L 308 219 L 301 190 L 293 173 L 276 152 L 245 129 L 235 124 L 231 120 L 158 74 Z" />
                  </svg>
                </div>

                <div className="space-y-8 relative z-10">
                  {/* Card Title Block */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-6">
                    <div>
                      <span className="text-xs font-mono font-semibold text-[#C8922B] tracking-wider uppercase block mb-1">
                        SERVICE SPECIFICATION
                      </span>
                      <h3 className="text-2xl xl:text-3xl font-extrabold tracking-tight">
                        {activeService.title}
                      </h3>
                    </div>
                    <span className="text-4xl xl:text-5xl font-mono font-bold text-[#C8922B]/20">
                      {String(activeIdx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Problem & Solution */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Problem */}
                    <div className="space-y-3 bg-white/5 rounded-2xl p-5 border border-white/5">
                      <div className="flex items-center gap-2 text-[#C8922B]">
                        <ShieldAlert size={16} />
                        <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
                          THE FRUSTRATION
                        </span>
                      </div>
                      <p className="text-sm text-[#FFFDF8]/75 leading-relaxed font-medium">
                        {activeService.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="space-y-3 bg-white/5 rounded-2xl p-5 border border-white/5">
                      <div className="flex items-center gap-2 text-white">
                        <Zap size={16} className="text-[#C8922B]" />
                        <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#C8922B]">
                          OUR SOLUTION
                        </span>
                      </div>
                      <p className="text-sm text-[#FFFDF8]/85 leading-relaxed font-medium">
                        {activeService.solution}
                      </p>
                    </div>
                  </div>

                  {/* Deliverables/Touchpoints */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-white/50">
                      <Layers size={14} />
                      <span className="text-[10px] font-mono font-bold tracking-widest uppercase">
                        PRIMARY DELIVERABLES
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {activeService.touchpoints.map((t) => (
                        <span
                          key={t}
                          className="bg-white/10 text-white hover:bg-white/15 transition-all text-xs font-semibold px-4 py-2 rounded-full border border-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Outcome footer */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-start gap-4 bg-[#C8922B]/10 rounded-2xl p-5 border border-[#C8922B]/20 relative z-10">
                  <Award className="text-[#C8922B] flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#C8922B] uppercase block mb-1">
                      BUSINESS IMPACT
                    </span>
                    <p className="text-sm font-semibold text-[#FFFDF8] leading-relaxed">
                      {activeService.outcome}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex justify-end relative z-10">
                  <Link
                    href={`/services/${activeService.id}`}
                    className="inline-flex items-center gap-1.5 bg-[#C8922B] hover:bg-[#A87318] text-[#014A36] hover:text-[#FFFDF8] px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm"
                  >
                    <span>View full capability details</span>
                    <span className="text-sm">↗</span>
                  </Link>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Mobile Accordion List (Hidden on Desktop) */}
        <div className="lg:hidden space-y-4">
          {services.map((service, idx) => {
            const isExpanded = expandedMobileIdx === idx;
            const paddedNum = String(idx + 1).padStart(2, "0");
            return (
              <div
                key={service.id}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isExpanded ? "border-[#014A36] bg-[#014A36] text-[#FFFDF8]" : "border-[#014A36]/12 bg-white text-[#222222]"
                }`}
              >
                {/* Header/Toggle */}
                <button
                  onClick={() => handleMobileToggle(idx)}
                  className="w-full flex items-center justify-between px-5 py-5 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isExpanded ? "text-[#C8922B]" : "text-[#014A36]"
                      }`}
                    >
                      {paddedNum}
                    </span>
                    <span className="font-semibold text-base tracking-wide">
                      {service.title}
                    </span>
                  </div>
                  <ChevronRight
                    size={16}
                    className={`transform transition-transform duration-300 ${
                      isExpanded ? "rotate-90 text-[#C8922B]" : "text-[#014A36]/50"
                    }`}
                  />
                </button>

                {/* Body Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 pt-2 space-y-6 border-t border-white/10 text-sm">
                        {/* Problem */}
                        <div className="space-y-1.5">
                          <span className="text-[10px] font-mono font-bold text-[#C8922B] tracking-widest uppercase block">
                            THE FRUSTRATION
                          </span>
                          <p className="text-white/80 font-medium leading-relaxed">
                            {service.problem}
                          </p>
                        </div>

                        {/* Solution */}
                        <div className="space-y-1.5">
                          <span className="text-[10px] font-mono font-bold text-[#C8922B] tracking-widest uppercase block">
                            OUR SOLUTION
                          </span>
                          <p className="text-white/90 font-medium leading-relaxed">
                            {service.solution}
                          </p>
                        </div>

                        {/* Deliverables */}
                        <div className="space-y-2">
                          <span className="text-[10px] font-mono font-bold text-white/50 tracking-widest uppercase block">
                            PRIMARY DELIVERABLES
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {service.touchpoints.map((t) => (
                              <span
                                key={t}
                                className="bg-white/10 text-white text-[11px] font-medium px-3 py-1 rounded-full border border-white/5"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Outcome */}
                        <div className="pt-4 border-t border-white/10 flex items-start gap-3 bg-[#C8922B]/10 rounded-xl p-4 border border-[#C8922B]/10">
                          <Award className="text-[#C8922B] flex-shrink-0 mt-0.5" size={16} />
                          <div>
                            <span className="text-[10px] font-mono font-bold text-[#C8922B] tracking-widest uppercase block mb-0.5">
                              BUSINESS IMPACT
                            </span>
                            <p className="text-xs font-semibold text-white leading-relaxed">
                              {service.outcome}
                            </p>
                          </div>
                        </div>

                        <div className="pt-4 flex justify-end">
                          <Link
                            href={`/services/${service.id}`}
                            className="inline-flex items-center gap-1.5 bg-[#C8922B] hover:bg-[#A87318] text-[#014A36] hover:text-[#FFFDF8] px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300"
                          >
                            <span>Explore Service Page</span>
                            <span className="text-xs">↗</span>
                          </Link>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default ServicesList;
