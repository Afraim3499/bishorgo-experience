"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Activity } from "lucide-react";
import type { ProblemPageBlueprint } from "@/data/solutions/problemPages";

interface Props {
  auditCTA: ProblemPageBlueprint["auditCTA"];
}

export const ProblemAuditCTA: React.FC<Props> = ({ auditCTA }) => {
  return (
    <section className="relative w-full bg-[#002B20] text-[#F8F5EF] py-16 lg:py-20 overflow-hidden border-t border-b border-[#C8922B]/20">
      
      {/* Viewfinder crosshairs */}
      <div className="absolute top-6 left-6 w-3 h-3 border-t border-l border-[#C8922B]/30" />
      <div className="absolute top-6 right-6 w-3 h-3 border-t border-r border-[#C8922B]/30" />
      <div className="absolute bottom-6 left-6 w-3 h-3 border-b border-l border-[#C8922B]/30" />
      <div className="absolute bottom-6 right-6 w-3 h-3 border-b border-r border-[#C8922B]/30" />

      {/* Decorative center background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-radial-gradient pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, rgba(200,146,43,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-[1040px] mx-auto px-5 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left column: Text */}
        <div className="max-w-[580px] text-left">
          {/* Label */}
          <div className="flex items-center gap-2 mb-3">
            <Activity size={14} className="text-[#C8922B] animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-[#E7C77A] font-bold uppercase">
              RECOMMENDED NEXT STEP
            </span>
          </div>

          {/* Headline */}
          <h3 className="display-heading text-[22px] sm:text-[28px] font-bold text-[#FFFDF8] tracking-tight leading-snug mb-3 select-text">
            {auditCTA.title}
          </h3>

          {/* Copy */}
          <p className="text-[14px] sm:text-[15px] text-[#F8F5EF]/80 leading-relaxed font-medium select-text">
            {auditCTA.description}
          </p>
        </div>

        {/* Right column: Gold Button */}
        <div className="flex-shrink-0 w-full md:w-auto">
          <Link
            href={auditCTA.href}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#C8922B] text-[#014A36] hover:bg-[#FFFDF8] hover:text-[#014A36] transition-all duration-300 font-bold rounded-xl px-8 py-4 text-[13.5px] shadow-sm uppercase tracking-wider"
          >
            {auditCTA.buttonLabel}
            <ArrowUpRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
};
export default ProblemAuditCTA;
