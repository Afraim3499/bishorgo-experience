"use client";
import React from "react";
import { motion } from "framer-motion";
import { HelpCircle, Activity } from "lucide-react";

interface Props {
  symptoms: string[];
}

export const SymptomScan: React.FC<Props> = ({ symptoms }) => {
  return (
    <section className="relative w-full bg-[#FFFDF8] text-[#222222] py-20 lg:py-24 overflow-hidden border-t border-[#014A36]/8">
      
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div className="max-w-[560px]">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C8922B]">
                SYMPTOM CHECKLIST
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8922B]" />
            </div>
            <h2 className="display-heading text-[30px] sm:text-[36px] font-bold text-[#014A36] tracking-tight leading-[1.1] select-text">
              You may be facing this if...
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#C8922B] bg-[#F8F5EF] px-3.5 py-2 rounded-xl border border-[#014A36]/5">
            <Activity size={14} className="text-[#C8922B]" />
            Diagnostic Check
          </div>
        </div>

        {/* ── 2-Column Checklist (Desktop) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-8 mt-10">
          {symptoms.map((symptom, index) => {
            return (
              <motion.div
                key={symptom}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#F8F5EF]/60 transition-colors duration-300 group"
              >
                {/* Gold diagnostic marker */}
                <div className="flex-shrink-0 mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-[#C8922B]/10 border border-[#C8922B]/30 text-[#C8922B] group-hover:bg-[#C8922B] group-hover:text-[#FFFDF8] transition-all duration-300">
                  <span className="text-[9px] font-mono font-bold">{index + 1}</span>
                </div>

                {/* Symptom string */}
                <p className="text-[15px] sm:text-[16px] text-[#4F5A55] font-semibold leading-relaxed select-text group-hover:text-[#014A36] transition-colors duration-300">
                  {symptom}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default SymptomScan;
