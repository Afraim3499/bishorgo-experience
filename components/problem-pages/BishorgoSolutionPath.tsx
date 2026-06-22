"use client";
import React from "react";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import type { ProblemPageBlueprint } from "@/data/solutions/problemPages";

interface Props {
  path: ProblemPageBlueprint["solutionPath"];
}

export const BishorgoSolutionPath: React.FC<Props> = ({ path }) => {
  return (
    <section id="solution" className="relative w-full bg-[#FFFDF8] text-[#222222] py-20 lg:py-28 overflow-hidden">
      
      {/* Background spotlights */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-radial-gradient pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, rgba(200,146,43,0.06) 0%, transparent 70%)" }}
      />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-radial-gradient pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, rgba(1,74,54,0.03) 0%, transparent 70%)" }}
      />

      <div className="max-w-[1140px] mx-auto px-5 md:px-10">
        
        {/* ── Section Header ── */}
        <div className="flex flex-col items-center text-center max-w-[680px] mx-auto mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C8922B]">
              THE SOLUTION METHOD
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8922B]" />
          </div>
          <h2 className="display-heading text-[30px] sm:text-[38px] font-bold text-[#014A36] tracking-tight leading-[1.1] select-text">
            The Bishorgo Solution Path.
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#4F5A55] mt-4 leading-relaxed select-text font-medium">
            We guide your business through a structured diagnostic and design path to transform forgettable touchpoints into a unified, memorable journey.
          </p>
        </div>

        {/* ── Vertical Timeline ── */}
        <div className="relative w-full">
          {/* Vertical gold line (Center on desktop, left on mobile) */}
          <div className="absolute top-4 bottom-4 left-4 lg:left-1/2 w-[2px] bg-gradient-to-b from-[#C8922B]/20 via-[#C8922B] to-[#C8922B]/20 -translate-x-1/2 pointer-events-none" />

          <div className="space-y-12 lg:space-y-16">
            {path.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={step.step} 
                  className={`flex flex-col lg:flex-row items-start lg:items-center relative w-full ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Left / Right Card Container */}
                  <div className="w-full lg:w-[46%] pl-10 lg:pl-0">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -24 : 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                      className="bg-[#014A36] text-[#FFFDF8] border border-[#C8922B]/35 rounded-2xl p-6 sm:p-8 shadow-[0_12px_30px_rgba(1,74,54,0.1)] relative group"
                    >
                      {/* Step Stage/Number */}
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#E7C77A] block mb-2">
                        STAGE 0{index + 1}
                      </span>
                      {/* Title */}
                      <h3 className="display-heading text-[18px] sm:text-[20px] font-bold text-[#FFFDF8] mb-3 tracking-tight select-text">
                        {step.step}
                      </h3>
                      {/* Short Description */}
                      <p className="text-[13.5px] sm:text-[14.5px] text-[#F8F5EF]/85 leading-relaxed font-medium select-text">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Central Node Indicator */}
                  <div className="absolute left-4 lg:left-1/2 top-6 lg:top-auto w-8 h-8 rounded-full border-2 border-[#C8922B] bg-[#FFFDF8] flex items-center justify-center -translate-x-1/2 z-10 shadow-sm">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#014A36] flex items-center justify-center text-[7px] text-[#FFFDF8] font-bold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Spacer for opposite column (desktop only) */}
                  <div className="hidden lg:block w-[46%]" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
export default BishorgoSolutionPath;
