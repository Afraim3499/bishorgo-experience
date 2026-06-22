"use client";
import React from "react";
import { motion } from "framer-motion";
import { X, Star } from "lucide-react";
import type { ServicePageBlueprint } from "@/data/services/servicePages";

interface Props {
  philosophy: ServicePageBlueprint["philosophy"];
}

export const ServicePhilosophy: React.FC<Props> = ({ philosophy }) => {
  return (
    <section className="w-full bg-[#014A36] py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5 md:px-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C8922B]">
            Our Philosophy
          </span>
        </motion.div>

        {/* Two-panel comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2px_1fr] gap-0 items-stretch">

          {/* Normal panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#002B20]/60 rounded-2xl lg:rounded-none lg:rounded-l-2xl p-8 md:p-10 xl:p-12 border border-[#F8F5EF]/8 flex flex-col gap-5"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-full border border-[#F8F5EF]/20 flex items-center justify-center flex-shrink-0">
                <X size={16} className="text-[#F8F5EF]/40" strokeWidth={2} />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#F8F5EF]/40">
                Normal Approach
              </span>
            </div>
            <h3 className="display-heading text-[24px] md:text-[28px] xl:text-[32px] font-bold text-[#F8F5EF]/80 leading-[1.2] select-text">
              {philosophy.normal.title}
            </h3>
            <p className="text-[15px] md:text-[16px] text-[#F8F5EF]/55 leading-relaxed font-medium select-text">
              {philosophy.normal.text}
            </p>
          </motion.div>

          {/* Gold divider */}
          <div className="hidden lg:flex flex-col items-center justify-center">
            <div className="w-[2px] h-full bg-gradient-to-b from-transparent via-[#C8922B]/50 to-transparent" />
          </div>
          <div className="lg:hidden h-[1px] w-full bg-[#C8922B]/20 my-0" />

          {/* Bishorgo panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#002B20] rounded-2xl lg:rounded-none lg:rounded-r-2xl p-8 md:p-10 xl:p-12 border border-[#C8922B]/20 flex flex-col gap-5 relative overflow-hidden"
          >
            {/* Gold glow */}
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#C8922B]/10 blur-[60px] pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-2 relative z-10">
              <div className="w-9 h-9 rounded-full border border-[#C8922B]/40 bg-[#C8922B]/10 flex items-center justify-center flex-shrink-0">
                <Star size={14} className="text-[#C8922B] fill-[#C8922B]" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C8922B]">
                Bishorgo Approach
              </span>
            </div>
            <h3 className="display-heading text-[24px] md:text-[28px] xl:text-[32px] font-bold text-[#F8F5EF] leading-[1.2] select-text relative z-10">
              {philosophy.bishorgo.title}
            </h3>
            <p className="text-[15px] md:text-[16px] text-[#F8F5EF]/80 leading-relaxed font-medium select-text relative z-10">
              {philosophy.bishorgo.text}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
