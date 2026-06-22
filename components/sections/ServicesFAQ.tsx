"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQItem } from "../../data/faqs";
import { Plus, Minus } from "lucide-react";

interface ServicesFAQProps {
  faqs: FAQItem[];
}

export const ServicesFAQ: React.FC<ServicesFAQProps> = ({ faqs }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 md:py-32 bg-[#F8F5EF] text-[#222222] border-t border-[#014A36]/10 relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute top-10 right-0 w-[300px] h-[300px] rounded-full bg-[#014A36]/3 blur-[80px] pointer-events-none" />

      <div className="max-w-[860px] mx-auto px-5 md:px-10 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#014A36] font-bold block mb-3 font-mono">
            QUESTIONS & ANSWERS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#014A36] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-[#014A36]/30 bg-white shadow-md shadow-[#014A36]/2" : "border-[#014A36]/10 bg-transparent"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                >
                  <span className="font-semibold text-[15px] sm:text-[16px] text-[#222222] pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isOpen ? "bg-[#014A36] text-[#FFFDF8]" : "bg-[#014A36]/5 text-[#014A36]"
                    }`}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm md:text-[15px] text-[#222222]/80 leading-relaxed font-medium border-t border-[#014A36]/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default ServicesFAQ;
