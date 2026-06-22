"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Milestone } from "lucide-react";
import type { IndustryPageBlueprint } from "@/data/industries/industryPages";

interface Props {
  journey: IndustryPageBlueprint["customerJourney"];
  industryLabel: string;
}

export const CustomerMemoryMap: React.FC<Props> = ({ journey, industryLabel }) => {
  return (
    <section className="relative w-full bg-[#FFFDF8] text-[#222222] py-20 lg:py-28 overflow-hidden border-t border-[#014A36]/10">
      
      {/* Background Spotlight Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-radial-gradient pointer-events-none opacity-30 select-none" 
        style={{ background: "radial-gradient(circle, rgba(200,146,43,0.06) 0%, transparent 70%)" }} 
      />

      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div className="max-w-[560px]">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C8922B]">
                THE CUSTOMER JOURNEY
              </span>
              <span className="text-[#C8922B] text-base leading-none">•</span>
            </div>
            <h2 className="display-heading text-[30px] sm:text-[38px] font-bold text-[#014A36] tracking-tight leading-[1.1] select-text">
              The {industryLabel} Memory Map.
            </h2>
          </div>
          <p className="text-[15px] text-[#4F5A55] max-w-[400px] leading-relaxed select-text font-medium">
            Every business has touchpoints, but only one or two moments truly define what a customer remembers. This is the path they walk.
          </p>
        </div>

        {/* ── Journey Timeline Container ── */}
        <div className="relative w-full mt-10">

          {/* 1. Desktop Horizontal Layout (Visible on lg screens and up) */}
          <div className="hidden lg:block relative w-full py-8">
            {/* The Connecting Vector Line */}
            <div className="absolute top-[75px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-[#014A36]/10 via-[#C8922B]/40 to-[#014A36]/10 pointer-events-none" />

            <div className="grid" style={{ gridTemplateColumns: `repeat(${journey.length}, minmax(0, 1fr))` }}>
              {journey.map((item, index) => {
                const stepNum = String(index + 1).padStart(2, "0");
                const isMemory = item.isMemoryMoment;

                return (
                  <motion.div
                    key={item.stage}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center text-center px-2 group relative"
                  >
                    {/* Top Section: Step Indicator & Title */}
                    <span className={`text-[10px] font-mono tracking-widest uppercase mb-1 font-bold ${isMemory ? "text-[#C8922B]" : "text-[#4F5A55]/70"}`}>
                      {isMemory ? "Peak Moment" : `Step ${stepNum}`}
                    </span>
                    <h3 className={`text-sm font-bold tracking-tight mb-6 ${isMemory ? "text-[#C8922B]" : "text-[#014A36]"}`}>
                      {item.stage}
                    </h3>

                    {/* Timeline Node */}
                    <div className="relative mb-6 flex items-center justify-center">
                      {isMemory ? (
                        <>
                          {/* Pulsing ring */}
                          <div className="absolute w-10 h-10 rounded-full border-2 border-[#C8922B] animate-ping opacity-25" />
                          {/* Inner glowing circle */}
                          <div className="w-6 h-6 rounded-full bg-[#C8922B] border-4 border-[#FFFDF8] shadow-[0_0_12px_rgba(200,146,43,0.6)] flex items-center justify-center text-white z-10">
                            <Sparkles size={8} className="text-[#FFFDF8]" />
                          </div>
                        </>
                      ) : (
                        <div className="w-4 h-4 rounded-full bg-[#FFFDF8] border-2 border-[#014A36]/40 group-hover:border-[#C8922B] transition-colors duration-300 z-10" />
                      )}
                    </div>

                    {/* Description Card */}
                    <div className={`p-4 rounded-xl border text-left transition-all duration-300 h-full ${
                      isMemory 
                        ? "bg-[#014A36] text-[#FFFDF8] border-[#C8922B]/55 shadow-md shadow-forest/10" 
                        : "bg-[#FFFDF8] text-[#4F5A55] border-[#014A36]/10 group-hover:border-[#014A36]/30 group-hover:shadow-sm"
                    }`}>
                      <p className={`text-[13px] leading-relaxed font-medium ${isMemory ? "text-[#F8F5EF]" : "text-[#4F5A55]"}`}>
                        {item.description}
                      </p>
                      {isMemory && (
                        <div className="mt-3 inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-[#E7C77A]">
                          <Milestone size={10} />
                          Memory Trigger
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* 2. Mobile/Tablet Vertical Layout (Visible on md screens and down) */}
          <div className="block lg:hidden relative pl-8 border-l border-dashed border-[#014A36]/20 py-2 space-y-10">
            {journey.map((item, index) => {
              const stepNum = String(index + 1).padStart(2, "0");
              const isMemory = item.isMemoryMoment;

              return (
                <motion.div
                  key={item.stage}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative group"
                >
                  {/* Vertical Node Indicator */}
                  <div className="absolute -left-[41px] top-1.5 flex items-center justify-center z-10">
                    {isMemory ? (
                      <div className="w-6 h-6 rounded-full bg-[#C8922B] border-[3px] border-[#FFFDF8] shadow-[0_0_10px_rgba(200,146,43,0.5)] flex items-center justify-center">
                        <Sparkles size={8} className="text-[#FFFDF8]" />
                      </div>
                    ) : (
                      <div className="w-3.5 h-3.5 rounded-full bg-[#FFFDF8] border-2 border-[#014A36]/40" />
                    )}
                  </div>

                  {/* Mobile Node Card */}
                  <div className={`p-5 rounded-2xl border transition-all duration-300 ${
                    isMemory 
                      ? "bg-[#014A36] text-[#FFFDF8] border-[#C8922B]/50 shadow-md" 
                      : "bg-[#FFFDF8] text-[#222222] border-[#014A36]/10"
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-[10px] font-mono tracking-wider font-bold ${isMemory ? "text-[#E7C77A]" : "text-[#C8922B]"}`}>
                        {isMemory ? "MEMORY MOMENT" : `STEP ${stepNum}`}
                      </span>
                      {isMemory && <Sparkles size={11} className="text-[#E7C77A]" />}
                    </div>

                    <h3 className={`text-base font-bold tracking-tight mb-2 ${isMemory ? "text-[#FFFDF8]" : "text-[#014A36]"}`}>
                      {item.stage}
                    </h3>
                    <p className={`text-[14px] leading-relaxed font-medium ${isMemory ? "text-[#F8F5EF]/90" : "text-[#4F5A55]"}`}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
