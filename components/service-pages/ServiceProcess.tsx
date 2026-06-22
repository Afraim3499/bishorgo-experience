"use client";
import React from "react";
import { motion } from "framer-motion";
import type { ServicePageBlueprint } from "@/data/services/servicePages";

interface Props {
  process: ServicePageBlueprint["process"];
}

const STEP_COLORS: Record<string, string> = {
  Discover: "#C8922B",
  Define: "#C8922B",
  Design: "#C8922B",
  Deliver: "#C8922B",
  Deepen: "#C8922B",
};

export const ServiceProcess: React.FC<Props> = ({ process }) => {
  return (
    <section className="w-full bg-[#F8F5EF] py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5 md:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-14 md:mb-20"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#C8922B] block mb-3">
            Our Service Process
          </span>
          <h2 className="display-heading text-[28px] md:text-[36px] font-bold text-[#014A36] leading-tight tracking-tight max-w-xl">
            How Bishorgo delivers this service.
          </h2>
        </motion.div>

        {/* Horizontal stepper desktop / vertical mobile */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 relative">

          {/* Connecting line desktop */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-[#C8922B]/20 z-0" />

          {process.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-start md:items-center text-left md:text-center px-0 md:px-4 pb-8 md:pb-0"
            >
              {/* Mobile connector line */}
              {i < process.length - 1 && (
                <div className="md:hidden absolute left-[19px] top-[40px] bottom-0 w-[1px] bg-[#C8922B]/20 z-0" />
              )}

              {/* Number marker */}
              <div
                className="relative z-10 w-10 h-10 rounded-full border-2 border-[#C8922B] bg-[#F8F5EF] flex items-center justify-center flex-shrink-0 mb-4"
                style={{ boxShadow: "0 0 0 4px rgba(200,146,43,0.08)" }}
              >
                <span className="text-[13px] font-bold text-[#C8922B] font-mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Step content */}
              <div className="pl-14 md:pl-0">
                <h3 className="display-heading text-[16px] md:text-[18px] font-bold text-[#014A36] mb-2 select-text">
                  {item.step}
                </h3>
                <p className="text-[13px] md:text-[14px] text-[#222222]/70 font-medium leading-relaxed select-text">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
