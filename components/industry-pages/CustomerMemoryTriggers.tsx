"use client";
import React from "react";
import { motion } from "framer-motion";
import type { IndustryPageBlueprint } from "@/data/industries/industryPages";

interface Props {
  triggers: IndustryPageBlueprint["memoryTriggers"];
}

export const CustomerMemoryTriggers: React.FC<Props> = ({ triggers }) => {
  return (
    <section className="relative w-full bg-[#F8F5EF] text-[#222222] py-20 lg:py-28 overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-radial-gradient pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, rgba(200,146,43,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        
        {/* ── Section Header ── */}
        <div className="max-w-[680px] mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C8922B]">
              BEHAVIOR & EMOTION
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8922B]" />
          </div>
          <h2 className="display-heading text-[30px] sm:text-[38px] font-bold text-[#014A36] tracking-tight leading-[1.1] select-text">
            What customers actually remember.
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#4F5A55] mt-4 leading-relaxed select-text font-medium">
            People forget lists of prices and terms. They remember how they felt, how they were treated, and the visual signature of the visit.
          </p>
        </div>

        {/* ── Grid of 4 Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {triggers.map((trigger, index) => {
            const stepNum = String(index + 1).padStart(2, "0");

            return (
              <motion.div
                key={trigger.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-[#FFFDF8] border border-[#014A36]/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(1,74,54,0.01)] hover:shadow-[0_12px_30px_rgba(1,74,54,0.04)] hover:border-[#C8922B]/30 transition-all duration-500 group"
              >
                {/* Visual grid sprocket pattern or small line at the top */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#C8922B]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Big Gold Number */}
                  <span className="block text-[28px] font-mono font-bold text-[#C8922B]/30 group-hover:text-[#C8922B] transition-colors duration-500 mb-6 leading-none">
                    {stepNum}
                  </span>

                  {/* Title */}
                  <h3 className="text-[17px] sm:text-[19px] font-bold text-[#014A36] mb-3 tracking-tight select-text">
                    {trigger.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[13.5px] sm:text-[14.5px] text-[#4F5A55] leading-relaxed font-medium select-text mt-2">
                  {trigger.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
