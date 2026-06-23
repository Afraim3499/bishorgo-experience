"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { ServicePageBlueprint } from "@/data/services/servicePages";

interface Props {
  useCases: ServicePageBlueprint["useCases"];
}

export const ServiceUseCases: React.FC<Props> = ({ useCases }) => {
  return (
    <section className="w-full bg-[#F8F5EF] py-20 md:py-28">
      <div className="max-w-[1320px] mx-auto px-5 md:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-12 md:mb-14"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#C8922B] block mb-3">
            Best For
          </span>
          <h2 className="display-heading text-[28px] md:text-[36px] font-bold text-[#014A36] leading-tight tracking-tight">
            This service is for businesses that…
          </h2>
        </motion.div>

        {/* Use case cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases.map((useCase, i) => (
            <motion.div
              key={useCase}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-4 bg-white border border-[#014A36]/8 rounded-2xl px-5 py-5 hover:border-[#C8922B]/40 hover:shadow-[0_2px_16px_rgba(1,74,54,0.07)] transition-all duration-300 group"
            >
              <CheckCircle2 size={20} className="text-[#C8922B] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" strokeWidth={2} />
              <p className="text-[15px] font-semibold text-[#222222] leading-snug select-text">
                {useCase}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-[#014A36]/8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <p className="text-[15px] text-[#222222]/60 font-medium max-w-lg">
            Not sure if this is right for your business? An Experience Audit will show exactly where this service can create the most impact.
          </p>
          <a
            href="/experience-audit"
            className="inline-flex items-center gap-2 bg-[#014A36] text-[#FFFDF8] hover:bg-[#002B20] transition-colors duration-300 font-bold rounded-xl px-5 py-3 text-[14px] flex-shrink-0"
          >
            Your Brand, Our Plan ↗
          </a>
        </motion.div>

      </div>
    </section>
  );
};
