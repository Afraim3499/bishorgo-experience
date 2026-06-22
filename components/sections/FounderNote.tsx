"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const FounderNote: React.FC = () => {
  return (
    <section className="relative w-full lg:h-screen lg:max-h-screen bg-[#014A36] text-[#F8F5EF] pt-[76px] lg:pt-[96px] pb-10 lg:pb-0 overflow-hidden flex items-center border-t border-line/10 drafting-board">
      
      {/* Spotlight Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(1,74,54,0.85)_80%)] projector-flicker" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold/5 blur-[120px] pointer-events-none z-0 projector-flicker" />

      {/* Editorial grid lines background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="container-editorial h-full border-l border-r border-line/30 relative">
          <div className="absolute top-0 bottom-0 left-1/2 border-l border-line/30 -translate-x-1/2" />
        </div>
      </div>

      <div className="container-editorial flex justify-center relative z-20 w-full">
        {/* The Letter Card Frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="paper-texture text-[#002F24] border-2 border-gold/30 p-6 lg:p-6 xl:p-10 rounded-[28px] lg:rounded-[32px] max-w-2xl w-full relative shadow-2xl flex flex-col items-center select-text"
        >
          {/* Subtle textured paper styling */}
          <div className="absolute inset-0 bg-[radial-gradient(#002f24/1%_1px,transparent_0)] bg-[size:16px_16px] opacity-40 pointer-events-none rounded-[28px] lg:rounded-[32px]" />

          {/* Letterhead Logo watermark */}
          <div className="mb-4 lg:mb-2.5 xl:mb-5 relative w-28 lg:w-26 xl:w-28 h-8 lg:h-7 xl:h-8 select-none pointer-events-none opacity-85">
            <Image
              src="/images/brand/logo-website.png"
              alt="Bishorgo Logo Mark"
              fill
              className="object-contain"
            />
          </div>

          <div className="space-y-4 lg:space-y-2.5 xl:space-y-4 text-center relative z-10">
            <span className="text-[9px] uppercase tracking-[0.3em] text-gold font-bold block">
              THE DIRECTOR'S CUT
            </span>

            <p className="text-base lg:text-[15px] xl:text-lg 2xl:text-xl font-serif italic text-[#002F24] leading-relaxed max-w-xl mx-auto">
              &ldquo;Bishorgo Experience was built from a simple frustration: too many brands spend money to be seen, but very few work to be remembered.&rdquo;
            </p>

            <div className="h-[1px] bg-gold/30 w-12 mx-auto my-4 lg:my-2 xl:my-4" />

            <div className="space-y-3 lg:space-y-2 xl:space-y-3.5 text-xs lg:text-[11px] xl:text-xs text-[#002F24]/85 leading-relaxed font-medium max-w-md lg:max-w-lg mx-auto text-justify">
              <p>
                In Bangladesh, every business has a story. A restaurant has a smell. A shop has a rhythm. A founder has a reason. A customer has a feeling.
              </p>
              <p>
                Yet, most digital agencies dump standard graphic templates, run automated boosting budgets, and call it marketing. They chase temporary clicks while ignoring the permanent memory.
              </p>
              <p>
                Our work is to connect all these pieces &mdash; the design, the code, the message, and the real-world packaging &mdash; into one cohesive brand experience. An experience that makes your customers notice, trust, and return.
              </p>
            </div>

            {/* Signature Frame */}
            <div className="pt-4 border-t border-gold/15 w-full flex flex-col items-center space-y-1.5 mt-4 lg:mt-2.5 xl:mt-4 select-none">
              <h4 className="font-bold text-[#002F24] text-xs xl:text-sm tracking-wide">Md. Sakib Rahman</h4>
              <p className="text-[8px] lg:text-[7px] xl:text-[9px] text-[#002F24]/50 font-mono uppercase tracking-widest">Founder & Strategy Director</p>
              
              {/* Handwritten signature typeface */}
              <div className="font-serif italic text-gold text-lg lg:text-[16px] xl:text-xl tracking-wider pt-1 opacity-95">
                Sakib Rahman
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderNote;
