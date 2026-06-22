"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, EyeOff, CheckCircle2 } from "lucide-react";
import type { IndustryPageBlueprint } from "@/data/industries/industryPages";

interface Props {
  example: IndustryPageBlueprint["reimaginedExample"];
}

export const IndustryReimaginedExample: React.FC<Props> = ({ example }) => {
  return (
    <section className="relative w-full bg-[#002F24] text-[#F8F5EF] py-20 lg:py-28 overflow-hidden">
      
      {/* Cinematic lens flare graphics */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-radial-gradient pointer-events-none opacity-20 select-none" 
        style={{ background: "radial-gradient(circle, rgba(200,146,43,0.05) 0%, transparent 70%)" }} 
      />

      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
          
          {/* ── Left Column: Storyboard ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E7C77A]">
                REIMAGINED EXAMPLE
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8922B]" />
            </div>

            <h2 className="display-heading text-[32px] sm:text-[40px] font-bold text-[#FFFDF8] tracking-tight leading-[1.1] mb-8 select-text">
              {example.title}
            </h2>

            {/* Screenplay layout structure */}
            <div className="space-y-6 w-full">
              {/* 1. Situation */}
              <div className="border-l-2 border-[#C8922B]/30 pl-4 py-1">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#E7C77A] block mb-1">
                  [ 01 / CURRENT SITUATION ]
                </span>
                <p className="text-[14.5px] sm:text-[15.5px] text-[#F8F5EF]/85 leading-relaxed select-text font-medium">
                  {example.currentSituation}
                </p>
              </div>

              {/* 2. Missed Memory */}
              <div className="border-l-2 border-[#C8922B]/30 pl-4 py-1">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#C8922B] block mb-1">
                  [ 02 / MISSED MEMORY ]
                </span>
                <p className="text-[14.5px] sm:text-[15.5px] text-[#F8F5EF]/85 leading-relaxed select-text font-medium">
                  {example.missedMemory}
                </p>
              </div>

              {/* 3. Bishorgo Idea */}
              <div className="border-l-2 border-[#C8922B]/30 pl-4 py-1">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#E7C77A] block mb-1">
                  [ 03 / THE BISHORGO IDEA ]
                </span>
                <p className="text-[14.5px] sm:text-[15.5px] text-[#FFFDF8] leading-relaxed select-text font-semibold">
                  {example.bishorgoIdea}
                </p>
              </div>

              {/* 4. Outcome */}
              <div className="border-l-2 border-[#C8922B]/30 pl-4 py-1">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#E7C77A] block mb-1">
                  [ 04 / EXPECTED OUTCOME ]
                </span>
                <p className="text-[14.5px] sm:text-[15.5px] text-[#E7C77A] leading-relaxed select-text font-bold">
                  {example.expectedOutcome}
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Right Column: Vector Transformation Card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center w-full"
          >
            <div className="viewfinder-card w-full max-w-[420px] rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden select-none">
              
              {/* Subtle grid pattern background */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(216,205,187,0.03)_1px,transparent_0)] bg-[size:16px_16px] pointer-events-none" />

              {/* Viewfinder crosshairs in corners */}
              <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-[#C8922B]/30" />
              <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-[#C8922B]/30" />
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-[#C8922B]/30" />
              <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-[#C8922B]/30" />

              {/* Before Card */}
              <div className="w-full bg-[#014A36]/40 border border-[#F8F5EF]/10 rounded-2xl p-5 mb-5 text-center relative group">
                <span className="absolute top-3 left-4 text-[9px] font-mono tracking-widest text-[#F8F5EF]/50 uppercase">
                  BEFORE STATE
                </span>
                <div className="w-8 h-8 rounded-full bg-[#F8F5EF]/5 flex items-center justify-center mx-auto mb-3 text-[#F8F5EF]/40">
                  <EyeOff size={16} />
                </div>
                <h4 className="text-[15px] font-bold text-[#FFFDF8]/70 line-through tracking-tight">
                  Transaction-Led Setup
                </h4>
                <p className="text-[12px] text-[#F8F5EF]/50 mt-1">
                  Competing on price • Forgotten name • Weak retention
                </p>
              </div>

              {/* Reimagination Arrow */}
              <div className="flex flex-col items-center mb-5 relative">
                <div className="h-6 w-[1.5px] bg-[#C8922B]/40 border-dashed" />
                <div className="px-3 py-1 bg-[#C8922B] text-[#014A36] text-[10px] font-mono font-bold uppercase rounded-md tracking-wider flex items-center gap-1 my-1">
                  Bishorgo Reimagines
                  <ArrowRight size={10} className="rotate-90" />
                </div>
                <div className="h-6 w-[1.5px] bg-[#C8922B]/40 border-dashed" />
              </div>

              {/* After Card */}
              <div className="w-full bg-[#014A36] border border-[#C8922B]/45 rounded-2xl p-5 text-center relative shadow-[0_8px_20px_rgba(1,74,54,0.2)]">
                <span className="absolute top-3 left-4 text-[9px] font-mono tracking-widest text-[#E7C77A] uppercase flex items-center gap-1">
                  AFTER STATE
                  <Sparkles size={8} className="text-[#E7C77A] animate-pulse" />
                </span>
                <div className="w-8 h-8 rounded-full bg-[#C8922B]/10 border border-[#C8922B]/30 flex items-center justify-center mx-auto mb-3 text-[#E7C77A]">
                  <CheckCircle2 size={16} className="animate-bounce" />
                </div>
                <h4 className="text-[15px] font-bold text-[#E7C77A] tracking-tight">
                  Experience-Led Loop
                </h4>
                <p className="text-[12px] text-[#FFFDF8]/80 mt-1">
                  Curated touchpoints • High name recall • Loyal repeat visits
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
