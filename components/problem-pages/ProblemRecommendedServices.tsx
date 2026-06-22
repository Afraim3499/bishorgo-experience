"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ProblemPageBlueprint } from "@/data/solutions/problemPages";

interface Props {
  services: ProblemPageBlueprint["recommendedServices"];
}

export const ProblemRecommendedServices: React.FC<Props> = ({ services }) => {
  return (
    <section className="relative w-full bg-[#F8F5EF] text-[#222222] py-20 lg:py-24 border-t border-[#014A36]/8 overflow-hidden">
      
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div className="max-w-[560px]">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C8922B]">
                RECOMMENDED SOLUTIONS
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8922B]" />
            </div>
            <h2 className="display-heading text-[30px] sm:text-[36px] font-bold text-[#014A36] tracking-tight leading-[1.1] select-text">
              Targeted capabilities.
            </h2>
          </div>
          <p className="text-[15px] text-[#4F5A55] max-w-[400px] leading-relaxed select-text font-medium">
            We deploy specific, interconnected services to directly target the diagnostic leaks and fix your customer journey.
          </p>
        </div>

        {/* ── Services Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {services.map((service, index) => {
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-[#014A36] text-[#FFFDF8] border border-[#C8922B]/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_8px_24px_rgba(1,74,54,0.06)] hover:border-[#C8922B] transition-all duration-300 group"
              >
                <div>
                  {/* Title */}
                  <h3 className="display-heading text-[17px] sm:text-[19px] font-bold text-[#FFFDF8] mb-3 tracking-tight select-text">
                    {service.title}
                  </h3>

                  {/* Why it helps */}
                  <p className="text-[13.5px] sm:text-[14.5px] text-[#F8F5EF]/80 leading-relaxed mb-6 font-medium select-text">
                    {service.description}
                  </p>
                </div>

                {/* Redirect Link */}
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wider text-[#E7C77A] group-hover:text-[#FFFDF8] transition-colors duration-300 mt-auto"
                >
                  Explore service
                  <ArrowUpRight size={14} className="text-[#C8922B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default ProblemRecommendedServices;
