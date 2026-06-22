"use client";
import React from "react";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import type { IndustryPageBlueprint } from "@/data/industries/industryPages";

interface Props {
  gaps: IndustryPageBlueprint["experienceGaps"];
  industryLabel: string;
}

export const IndustryExperienceGaps: React.FC<Props> = ({ gaps, industryLabel }) => {
  return (
    <section className="relative w-full bg-[#002F24] text-[#F8F5EF] py-20 lg:py-28 overflow-hidden">
      
      {/* Viewfinder borders or dashed indicators to fit cinematic theme */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8922B]/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8922B]/20 to-transparent" />

      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-16 items-start">
          
          {/* ── Left Column: Heading ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start lg:sticky lg:top-[120px]"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E7C77A]">
                EXPERIENCE ANALYSIS
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8922B]" />
            </div>

            <h2 className="display-heading text-[32px] sm:text-[40px] font-bold text-[#FFFDF8] tracking-tight leading-[1.08] mb-6 select-text">
              Where {industryLabel.toLowerCase()} lose memory.
            </h2>
            
            <p className="text-[15px] text-[#F8F5EF]/75 leading-relaxed mb-6 font-medium select-text">
              Great products and beautiful interiors can still result in a forgettable brand if you fail to connect the full journey. Here are the most common leaks.
            </p>

            <div className="flex items-center gap-2.5 text-[#E7C77A] text-xs font-semibold uppercase tracking-wider bg-[#014A36] px-4 py-2.5 rounded-xl border border-[#E7C77A]/10">
              <AlertCircle size={14} />
              Identify Your Gaps Below
            </div>
          </motion.div>

          {/* ── Right Column: Gaps List ── */}
          <div className="space-y-0 divide-y divide-[#F8F5EF]/10">
            {gaps.map((gap, index) => {
              // Parse title and description using the colon separator
              const colonIndex = gap.indexOf(":");
              let title = gap;
              let description = "";

              if (colonIndex !== -1) {
                title = gap.substring(0, colonIndex).trim();
                description = gap.substring(colonIndex + 1).trim();
              }

              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="py-6 first:pt-0 last:pb-0 flex items-start gap-4 sm:gap-6 group"
                >
                  {/* Step counter / Gap number */}
                  <span className="text-[14px] font-mono font-bold text-[#C8922B]/60 group-hover:text-[#C8922B] transition-colors duration-300 mt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Title & Description */}
                  <div className="flex-grow">
                    <h3 className="text-[16px] sm:text-[18px] font-bold text-[#FFFDF8] mb-1.5 tracking-tight select-text">
                      {title}
                    </h3>
                    {description && (
                      <p className="text-[14px] sm:text-[15px] text-[#F8F5EF]/70 leading-relaxed font-medium select-text">
                        {description}
                      </p>
                    )}
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
