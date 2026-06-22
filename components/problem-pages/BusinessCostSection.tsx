"use client";
import React from "react";
import { motion } from "framer-motion";
import type { ProblemPageBlueprint } from "@/data/solutions/problemPages";

interface Props {
  costs: ProblemPageBlueprint["businessCosts"];
}

export const BusinessCostSection: React.FC<Props> = ({ costs }) => {
  return (
    <section className="relative w-full bg-[#F8F5EF] text-[#222222] py-20 lg:py-24 border-b border-[#014A36]/8 overflow-hidden">
      
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        
        {/* ── Section Header ── */}
        <div className="max-w-[620px] mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C8922B]">
              THE BUSINESS COST
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8922B]" />
          </div>
          <h2 className="display-heading text-[30px] sm:text-[36px] font-bold text-[#014A36] tracking-tight leading-[1.1] select-text">
            What this costs your business.
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#4F5A55] mt-4 leading-relaxed select-text font-medium">
            Failing to establish a memorable experience isn't just a design problem — it has concrete, measurable impacts on your daily operations and profits.
          </p>
        </div>

        {/* ── 4 Costs Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {costs.map((cost, index) => {
            const stepNum = String(index + 1).padStart(2, "0");

            return (
              <motion.div
                key={cost.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-[#FFFDF8] border border-[#014A36]/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(1,74,54,0.01)] hover:border-[#C8922B]/35 hover:shadow-[0_12px_24px_rgba(1,74,54,0.03)] transition-all duration-300 group"
              >
                <div>
                  {/* Step Num indicator */}
                  <span className="block text-xs font-mono font-bold text-[#C8922B]/75 mb-6">
                    COST {stepNum}
                  </span>

                  {/* Title */}
                  <h3 className="text-[16px] sm:text-[18px] font-extrabold text-[#014A36] mb-3 tracking-tight select-text">
                    {cost.title}
                  </h3>
                </div>

                {/* One-line explanation */}
                <p className="text-[13.5px] sm:text-[14.5px] text-[#4F5A55] leading-relaxed font-medium select-text mt-2">
                  {cost.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default BusinessCostSection;
