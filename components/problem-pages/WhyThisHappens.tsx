"use client";
import React from "react";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import type { ProblemPageBlueprint } from "@/data/solutions/problemPages";

interface Props {
  causes: ProblemPageBlueprint["causes"];
}

export const WhyThisHappens: React.FC<Props> = ({ causes }) => {
  return (
    <section className="relative w-full bg-[#002B20] text-[#F8F5EF] py-20 lg:py-28 overflow-hidden">
      
      {/* Top and bottom decorative borders */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8922B]/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8922B]/25 to-transparent" />

      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-20 items-start">
          
          {/* ── Left Column: Thesis Statement ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start lg:sticky lg:top-[120px]"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E7C77A]">
                THE HIDDEN CAUSE
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8922B]" />
            </div>

            <h2 className="display-heading text-[30px] sm:text-[38px] font-bold text-[#FFFDF8] tracking-tight leading-[1.08] mb-6 select-text">
              The problem is rarely one post, one logo, or one website section.
            </h2>
            
            <p className="text-[15px] text-[#F8F5EF]/75 leading-relaxed font-medium select-text">
              Most businesses look for isolated explanations like "the algorithm changed" or "the copy is bad." In reality, memory leaks happen because touchpoints don't speak to each other.
            </p>
          </motion.div>

          {/* ── Right Column: Cause Blocks ── */}
          <div className="space-y-0 divide-y divide-[#C8922B]/15">
            {causes.map((cause, index) => {
              return (
                <motion.div
                  key={cause.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="py-6 first:pt-0 last:pb-0 flex items-start gap-4 sm:gap-6 group"
                >
                  {/* Number Label */}
                  <span className="text-[14px] font-mono font-bold text-[#C8922B]/50 group-hover:text-[#E7C77A] transition-colors duration-300 mt-1">
                    [0{index + 1}]
                  </span>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-[16px] sm:text-[18px] font-bold text-[#E7C77A] mb-2 tracking-tight select-text">
                      {cause.title}
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-[#F8F5EF]/70 leading-relaxed font-medium select-text">
                      {cause.description}
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
export default WhyThisHappens;
