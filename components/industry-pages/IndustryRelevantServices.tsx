"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Compass } from "lucide-react";
import type { IndustryPageBlueprint } from "@/data/industries/industryPages";

interface Props {
  services: IndustryPageBlueprint["relevantServices"];
  industryLabel: string;
}

export const IndustryRelevantServices: React.FC<Props> = ({ services, industryLabel }) => {
  return (
    <section id="services" className="relative w-full bg-[#F8F5EF] text-[#222222] py-20 lg:py-28 overflow-hidden">
      
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div className="max-w-[560px]">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C8922B]">
                RELEVANT CAPABILITIES
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8922B]" />
            </div>
            <h2 className="display-heading text-[30px] sm:text-[38px] font-bold text-[#014A36] tracking-tight leading-[1.1] select-text">
              How we support {industryLabel.toLowerCase()}.
            </h2>
          </div>
          <p className="text-[15px] text-[#4F5A55] max-w-[400px] leading-relaxed select-text font-medium">
            We apply our core capabilities directly to your business model, focusing on the specific touchpoints where memory is made.
          </p>
        </div>

        {/* ── Services Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {services.map((service, index) => {
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-[#FFFDF8] border border-[#014A36]/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_16px_rgba(1,74,54,0.01)] hover:border-[#C8922B]/35 hover:shadow-[0_12px_24px_rgba(1,74,54,0.03)] transition-all duration-300 group"
              >
                <div>
                  {/* Service Title */}
                  <h3 className="text-[17px] sm:text-[19px] font-bold text-[#014A36] mb-3 tracking-tight select-text flex items-center justify-between">
                    {service.title}
                    <Compass size={16} className="text-[#C8922B] opacity-40 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-500" />
                  </h3>

                  {/* Industry-specific utility copy */}
                  <p className="text-[14px] text-[#4F5A55] leading-relaxed mb-6 font-medium select-text">
                    {service.description}
                  </p>
                </div>

                {/* Redirect Link */}
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-bold uppercase tracking-wider text-[#014A36] group-hover:text-[#C8922B] transition-colors duration-300 mt-auto"
                >
                  Explore service
                  <ArrowUpRight size={14} className="text-[#C8922B]" />
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
