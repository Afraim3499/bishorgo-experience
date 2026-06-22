"use client";
import React from "react";
import { motion } from "framer-motion";
import type { ServicePageBlueprint } from "@/data/services/servicePages";

interface Props {
  deliverables: ServicePageBlueprint["deliverables"];
  serviceLabel: string;
}

export const ServiceDeliverables: React.FC<Props> = ({ deliverables, serviceLabel }) => {
  return (
    <section className="w-full bg-[#E8DDCB] py-20 md:py-28">
      <div className="max-w-[1320px] mx-auto px-5 md:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#C8922B] block mb-3">
            What You Receive
          </span>
          <h2 className="display-heading text-[28px] md:text-[36px] font-bold text-[#014A36] leading-tight tracking-tight">
            What you get from {serviceLabel}
          </h2>
        </motion.div>

        {/* Deliverable grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {deliverables.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-[#F8F5EF] border border-[#C8922B]/20 rounded-2xl p-6 md:p-7 hover:border-[#C8922B] transition-all duration-300 hover:shadow-[0_4px_24px_rgba(1,74,54,0.10)]"
            >
              {/* Tag */}
              <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.22em] text-[#C8922B] bg-[#C8922B]/10 rounded-full px-3 py-1 mb-4">
                {item.tag}
              </span>

              {/* Title */}
              <h3 className="display-heading text-[17px] md:text-[19px] font-bold text-[#014A36] leading-snug mb-2 select-text">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] text-[#222222]/70 font-medium leading-relaxed select-text">
                {item.description}
              </p>

              {/* Hover accent */}
              <div className="mt-4 w-0 group-hover:w-8 h-[2px] bg-[#C8922B] transition-all duration-300 rounded-full" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
