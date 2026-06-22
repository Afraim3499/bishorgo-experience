"use client";
import React from "react";
import { motion } from "framer-motion";
import type { ServicePageBlueprint } from "@/data/services/servicePages";

interface Props {
  builds: ServicePageBlueprint["builds"];
  serviceLabel: string;
}

export const ServiceBuilds: React.FC<Props> = ({ builds, serviceLabel }) => {
  return (
    <section className="w-full bg-[#F8F5EF] py-20 md:py-28">
      <div className="max-w-[1320px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-12 lg:gap-20 items-start">

          {/* Left: Editorial heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-32"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#C8922B] block mb-4">
              What This Service Builds
            </span>
            <h2 className="display-heading text-[28px] md:text-[34px] xl:text-[40px] font-bold text-[#014A36] leading-[1.15] tracking-tight select-text">
              What you get from<br />
              <span className="text-[#C8922B]">{serviceLabel}</span>
            </h2>
            <div className="w-12 h-[3px] bg-[#C8922B] mt-5 rounded-full" />
            <p className="text-[15px] text-[#222222]/70 font-medium leading-relaxed mt-5 max-w-sm select-text">
              Everything delivered is designed to carry your brand strategy into your customer&apos;s memory.
            </p>
          </motion.div>

          {/* Right: Numbered build items */}
          <div className="flex flex-col">
            {builds.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-5 py-4 border-b border-[#C8922B]/15 group"
              >
                <span className="text-[11px] font-bold text-[#C8922B] font-mono w-6 flex-shrink-0 opacity-70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[16px] md:text-[18px] font-semibold text-[#222222] group-hover:text-[#014A36] transition-colors duration-200 select-text">
                  {item}
                </span>
                <div className="ml-auto w-6 h-[1px] bg-[#C8922B]/30 group-hover:bg-[#C8922B] transition-colors duration-200 hidden md:block" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
