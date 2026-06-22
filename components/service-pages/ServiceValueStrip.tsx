"use client";
import React from "react";
import { motion } from "framer-motion";
import type { ServicePageBlueprint } from "@/data/services/servicePages";

interface Props {
  valueStrip: ServicePageBlueprint["valueStrip"];
}

export const ServiceValueStrip: React.FC<Props> = ({ valueStrip }) => {
  return (
    <section className="w-full bg-[#002B20] border-t-2 border-[#C8922B]/60">
      <div className="max-w-[1320px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#C8922B]/15">
          {valueStrip.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col px-6 py-8 md:py-10 gap-2 first:pl-0 last:pr-0"
            >
              <span className="text-[#C8922B] text-[11px] font-bold uppercase tracking-[0.22em] mb-1">
                0{i + 1}
              </span>
              <span className="display-heading text-[22px] md:text-[26px] font-bold text-[#F8F5EF] leading-tight">
                {item.title}
              </span>
              <span className="text-[13px] md:text-[14px] text-[#F8F5EF]/60 font-medium leading-relaxed">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
