"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import type { IndustryPageBlueprint } from "@/data/industries/industryPages";

interface Props {
  faqs: IndustryPageBlueprint["faqs"];
  industryLabel: string;
}

export const IndustryFAQ: React.FC<Props> = ({ faqs, industryLabel }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#F8F5EF] py-20 md:py-28 border-t border-[#014A36]/8">
      <div className="max-w-[1320px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[36%_64%] gap-12 lg:gap-20 items-start">

          {/* Left heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:sticky lg:top-32"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#C8922B] block mb-4">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="display-heading text-[28px] md:text-[34px] font-bold text-[#014A36] leading-tight tracking-tight mb-5">
              {industryLabel} FAQ
            </h2>
            <div className="w-12 h-[3px] bg-[#C8922B] rounded-full" />
            <p className="text-[14px] text-[#222222]/60 font-medium leading-relaxed mt-5 max-w-xs select-text">
              Still have questions about how we optimize {industryLabel.toLowerCase()} experiences? Book an Experience Audit and we'll analyze your touchpoints in detail.
            </p>
            <a
              href="/experience-audit"
              className="inline-flex items-center gap-2 text-[#014A36] font-bold text-[14px] mt-5 hover:text-[#C8922B] transition-colors duration-200"
            >
              Your Brand, Our Plan ↗
            </a>
          </motion.div>

          {/* Right accordion */}
          <div className="flex flex-col gap-0">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className={`border-b transition-colors duration-200 ${
                    isOpen ? "border-[#C8922B]/40" : "border-[#014A36]/10"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-4 py-5 md:py-6 text-left group"
                  >
                    <span className={`display-heading text-[16px] md:text-[18px] font-bold leading-snug transition-colors duration-200 ${
                      isOpen ? "text-[#C8922B]" : "text-[#014A36] group-hover:text-[#C8922B]"
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 ${
                      isOpen
                        ? "border-[#C8922B] bg-[#C8922B]/10 text-[#C8922B]"
                        : "border-[#014A36]/20 text-[#014A36]/50 group-hover:border-[#C8922B]/40 group-hover:text-[#C8922B]"
                    }`}>
                      {isOpen
                        ? <Minus size={14} strokeWidth={2.5} />
                        : <Plus size={14} strokeWidth={2.5} />
                      }
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-[15px] text-[#222222]/75 font-medium leading-relaxed pb-6 max-w-xl select-text">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
export default IndustryFAQ;
