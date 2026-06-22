"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ServicePageBlueprint } from "@/data/services/servicePages";

interface Props {
  serviceLabel: string;
}

export const ServiceFinalCTA: React.FC<Props> = ({ serviceLabel }) => {
  return (
    <section className="w-full bg-[#014A36] py-20 md:py-28 overflow-hidden relative">
      {/* Gold glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#C8922B]/8 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#C8922B]/5 blur-[80px] pointer-events-none" />

      {/* Two memory dots */}
      <div className="absolute top-8 left-8 w-2 h-2 rounded-full bg-[#C8922B] opacity-60" />
      <div className="absolute bottom-8 right-12 w-1.5 h-1.5 rounded-full bg-[#C8922B] opacity-40" />

      <div className="max-w-[1320px] mx-auto px-5 md:px-10 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C8922B] block mb-6">
              Ready to Start?
            </span>

            <h2 className="display-heading text-[32px] md:text-[44px] xl:text-[52px] font-bold text-[#F8F5EF] leading-[1.1] tracking-tight mb-6 select-text">
              Ready to make {serviceLabel} part of a stronger brand experience?
            </h2>

            <p className="text-[16px] md:text-[18px] text-[#F8F5EF]/70 font-medium leading-relaxed mb-10 max-w-xl mx-auto select-text">
              Start with an Experience Audit and find where {serviceLabel.toLowerCase()} can create the most impact for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link
                href="/experience-audit"
                className="inline-flex items-center justify-center gap-2 bg-[#C8922B] text-[#002B20] hover:bg-[#E7C77A] transition-all duration-300 font-bold rounded-xl px-7 py-4 text-[16px] shadow-[0_4px_20px_rgba(200,146,43,0.30)]"
              >
                Book an Experience Audit
                <ArrowUpRight size={17} strokeWidth={2.5} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-[#F8F5EF]/25 text-[#F8F5EF] hover:border-[#C8922B] hover:text-[#C8922B] transition-all duration-300 font-semibold rounded-xl px-7 py-4 text-[16px]"
              >
                Contact Bishorgo
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
