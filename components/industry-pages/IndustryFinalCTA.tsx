"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface Props {
  industryLabel: string;
}

export const IndustryFinalCTA: React.FC<Props> = ({ industryLabel }) => {
  return (
    <section className="relative w-full bg-[#002f24] text-[#F8F5EF] py-20 lg:py-28 overflow-hidden border-t border-[#FFFDF8]/10">
      
      {/* Background motif glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C8922B]/5 blur-[100px] pointer-events-none projector-flicker" />

      {/* Viewfinder corner lines */}
      <div className="absolute top-8 left-8 w-6 h-6 border-t border-l border-[#F8F5EF]/10" />
      <div className="absolute top-8 right-8 w-6 h-6 border-t border-r border-[#F8F5EF]/10" />
      <div className="absolute bottom-8 left-8 w-6 h-6 border-b border-l border-[#F8F5EF]/10" />
      <div className="absolute bottom-8 right-8 w-6 h-6 border-b border-r border-[#F8F5EF]/10" />

      <div className="max-w-[800px] mx-auto px-5 text-center relative z-10 flex flex-col items-center">
        
        {/* Cinematic Label */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-[10px] font-mono tracking-[0.4em] text-[#C8922B]/70 font-bold uppercase block">
            SCENE 09 / NEXT STEPS
          </span>
          <Sparkles size={11} className="text-[#C8922B] animate-pulse" />
        </div>

        {/* H2 Title */}
        <h2 className="display-heading text-[28px] sm:text-[36px] md:text-[44px] font-bold text-[#FFFDF8] tracking-tight leading-[1.1] mb-6 select-text max-w-2xl">
          Ready to make your {industryLabel.toLowerCase()} experience easier to remember?
        </h2>

        {/* Copy */}
        <p className="text-[15px] sm:text-[16px] text-[#F8F5EF]/75 leading-relaxed mb-10 max-w-xl font-medium select-text">
          Start with an Experience Audit and find the moments where your customers lose interest, lose trust, or forget to come back.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/experience-audit"
            className="inline-flex items-center justify-center gap-2 bg-[#C8922B] text-[#014A36] hover:bg-[#FFFDF8] hover:text-[#014A36] transition-all duration-300 font-bold rounded-xl px-8 py-4 text-[14px] shadow-sm tracking-wider uppercase"
          >
            Book an Experience Audit
            <ArrowUpRight size={15} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border border-[#F8F5EF]/20 bg-transparent text-[#F8F5EF] hover:border-[#C8922B] hover:text-[#C8922B] transition-all duration-300 font-semibold rounded-xl px-8 py-4 text-[14px] tracking-wider uppercase"
          >
            Contact Bishorgo
          </Link>
        </div>

      </div>
    </section>
  );
};
export default IndustryFinalCTA;
