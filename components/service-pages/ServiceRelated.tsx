"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ServicePageBlueprint } from "@/data/services/servicePages";

interface Props {
  relatedServices: ServicePageBlueprint["relatedServices"];
}

export const ServiceRelated: React.FC<Props> = ({ relatedServices }) => {
  return (
    <section className="w-full bg-[#F8F5EF] py-20 md:py-28 border-t border-[#014A36]/8">
      <div className="max-w-[1320px] mx-auto px-5 md:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-12"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#C8922B] block mb-3">
            Related Services
          </span>
          <h2 className="display-heading text-[26px] md:text-[32px] font-bold text-[#014A36] leading-tight tracking-tight">
            Explore Related Services
          </h2>
        </motion.div>

        {/* Related cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {relatedServices.map((related, i) => (
            <motion.div
              key={related.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={related.href}
                className="group flex flex-col justify-between bg-[#014A36] text-[#F8F5EF] rounded-2xl p-7 md:p-8 border border-[#C8922B]/15 hover:border-[#C8922B]/50 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(1,74,54,0.20)] min-h-[180px]"
              >
                <div>
                  <h3 className="display-heading text-[18px] md:text-[20px] font-bold text-[#F8F5EF] leading-snug mb-3 group-hover:text-[#C8922B] transition-colors duration-200">
                    {related.title}
                  </h3>
                  <p className="text-[14px] text-[#F8F5EF]/65 font-medium leading-relaxed">
                    {related.description}
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-2 text-[#C8922B] text-[13px] font-bold">
                  <span>Explore</span>
                  <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
