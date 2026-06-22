"use client";
import React from "react";
import { motion } from "framer-motion";
import { HelpCircle, Sparkles, AlertCircle, Ban } from "lucide-react";
import type { ProblemPageBlueprint } from "@/data/solutions/problemPages";

interface Props {
  mistakes: ProblemPageBlueprint["commonMistakes"];
}

export const CommonMistakesSection: React.FC<Props> = ({ mistakes }) => {
  return (
    <section className="relative w-full bg-[#E8DDCB]/60 text-[#014A36] py-20 lg:py-24 overflow-hidden border-t border-b border-[#014A36]/8">
      
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        
        {/* ── Section Header ── */}
        <div className="max-w-[620px] mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C8922B]">
              THE MISSED APPROACH
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8922B]" />
          </div>
          <h2 className="display-heading text-[30px] sm:text-[36px] font-bold text-[#014A36] tracking-tight leading-[1.1] select-text">
            What most businesses try.
          </h2>
          <p className="text-[15px] text-[#4F5A55] mt-4 leading-relaxed select-text font-medium">
            It is natural to look for quick fixes. But addressing symptoms with isolated actions rarely builds a return-worthy brand.
          </p>
        </div>

        {/* ── Mistakes Table Grid ── */}
        <div className="space-y-6">
          {/* Header Row (Hidden on mobile) */}
          <div className="hidden lg:grid grid-cols-2 gap-12 pb-4 border-b border-[#014A36]/15 text-xs font-bold uppercase tracking-wider text-[#014A36]/70">
            <div>What most businesses try</div>
            <div>Why it doesn't fully solve the problem</div>
          </div>

          {/* Comparison Rows */}
          <div className="space-y-6 lg:space-y-0 lg:divide-y lg:divide-[#014A36]/10">
            {mistakes.map((item, index) => {
              return (
                <div 
                  key={item.mistake} 
                  className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 py-6 first:pt-0 last:pb-0"
                >
                  {/* Left: The Mistake */}
                  <motion.div
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex items-start gap-3 bg-[#FFFDF8]/45 lg:bg-transparent p-4 lg:p-0 rounded-xl border border-[#014A36]/5 lg:border-none"
                  >
                    <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#014A36]/5 border border-[#014A36]/15 flex items-center justify-center text-[#014A36]/60">
                      <Ban size={11} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="text-[15px] sm:text-[16px] font-bold text-[#014A36] select-text">
                        {item.mistake}
                      </h4>
                      {/* Mobile helper header */}
                      <span className="lg:hidden block mt-2 text-[9px] font-mono tracking-wider text-[#C8922B] uppercase">
                        Why it fails
                      </span>
                    </div>
                  </motion.div>

                  {/* Right: Why it Fails */}
                  <motion.div
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex items-start gap-3 pl-4 lg:pl-0 border-l-2 border-[#C8922B]/20 lg:border-none"
                  >
                    <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#C8922B]/10 border border-[#C8922B]/30 flex items-center justify-center text-[#C8922B]">
                      <AlertCircle size={11} strokeWidth={2.5} />
                    </div>
                    <p className="text-[14.5px] text-[#4F5A55] leading-relaxed font-medium select-text">
                      {item.whyItFails}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
export default CommonMistakesSection;
