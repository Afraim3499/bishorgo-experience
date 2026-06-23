"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { labArticles } from "@/data/siteData";
import { Calendar, Video, Clock } from "lucide-react";

export const LabTeaser: React.FC = () => {
  const featured = labArticles[0]; // Tea Stall
  const subArticles = labArticles.slice(1, 5); // 4 smaller cards

  return (
    <section className="relative w-full min-h-fit bg-ivory text-charcoal py-24 md:py-32 lg:py-36 overflow-visible border-b border-line/20 drafting-board">
      <div className="container-editorial w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-10 items-start w-full">
          
          {/* Left Column: Copy Block (Takes 3 columns on desktop) */}
          <div className="lg:col-span-3 flex flex-col items-start text-left space-y-5">
            <div className="flex items-center space-x-3">
              <span className="memory-dot" />
              <span className="text-xs uppercase tracking-[0.25em] text-forest font-bold font-mono">
                EXPERIENCE LAB
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl xl:text-4xl font-extrabold tracking-tight leading-[1.1] font-serif italic text-forest select-text">
              We think, we test,<br />
              and we reshape how<br />
              people feel.
            </h2>
            
            <p className="text-xs xl:text-sm text-charcoal/70 leading-relaxed font-medium select-text">
              Our lab is where we study local businesses, customer behavior, brand memory, and the small details that make people come back.
            </p>

            <div className="pt-2 select-none">
              <Link
                href="/experience-lab"
                className="inline-flex items-center justify-center bg-transparent border-b-2 border-forest/30 hover:border-forest text-forest hover:text-[#C8922B] hover:border-[#C8922B]/50 transition-all duration-200 pb-1 font-semibold text-xs tracking-wider uppercase group"
              >
                <span>Explore the Lab</span>
                <span className="ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Three Cards (Takes 9 columns on desktop) */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-5 xl:gap-6">
            
            {/* Card 1: INSIGHT */}
            <Link href="/experience-lab#tea-stall-brand-experience" className="block group">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#FFFDF8] border border-gold/15 rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl hover:border-gold transition-all duration-300 flex flex-col min-h-[360px]"
              >
                {/* Visual Header: Glowing wavy horizontal lines */}
                <div className="h-[140px] xl:h-[160px] bg-[#002F24] relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,146,43,0.1)_0%,transparent_80%)]" />
                  <svg className="w-full h-full opacity-80" viewBox="0 0 300 150" fill="none">
                    <path
                      d="M -20 110 Q 75 40 150 75 T 320 40"
                      stroke="url(#wave-grad-1)"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M -20 90 Q 60 120 160 55 T 320 80"
                      stroke="url(#wave-grad-2)"
                      strokeWidth="1.2"
                      strokeDasharray="4 4"
                      opacity="0.6"
                    />
                    <defs>
                      <linearGradient id="wave-grad-1" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#014A36" />
                        <stop offset="50%" stopColor="#C8922B" />
                        <stop offset="100%" stopColor="#014A36" />
                      </linearGradient>
                      <linearGradient id="wave-grad-2" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#C8922B" stopOpacity="0.1" />
                        <stop offset="50%" stopColor="#C8922B" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#C8922B" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-grow text-left">
                  <div className="space-y-3">
                    <span className="inline-block px-3 py-1 rounded-full border border-gold/20 text-[9px] font-mono font-bold text-gold uppercase tracking-wider bg-white">
                      INSIGHT
                    </span>
                    <h3 className="text-base xl:text-lg font-bold text-forest leading-snug group-hover:text-gold transition-colors font-serif italic">
                      Why experience makes a brand harder to forget
                    </h3>
                  </div>
                  
                  <div className="pt-4 border-t border-line/10 flex items-center justify-between text-xs text-gold font-bold">
                    <span />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Card 2: CASE NOTE */}
            <Link href="/experience-lab#ignored-customer-journey" className="block group">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#FFFDF8] border border-gold/15 rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl hover:border-gold transition-all duration-300 flex flex-col min-h-[360px]"
              >
                {/* Visual Header: Connected nodes constellation */}
                <div className="h-[140px] xl:h-[160px] bg-[#002F24] relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,146,43,0.1)_0%,transparent_80%)]" />
                  <svg className="w-full h-full opacity-75" viewBox="0 0 300 150" fill="none" stroke="#C8922B">
                    {/* Connections */}
                    <line x1="50" y1="40" x2="150" y2="75" strokeWidth="1" strokeOpacity="0.2" />
                    <line x1="150" y1="75" x2="250" y2="40" strokeWidth="1" strokeOpacity="0.2" />
                    <line x1="50" y1="40" x2="90" y2="110" strokeWidth="1" strokeOpacity="0.2" />
                    <line x1="150" y1="75" x2="90" y2="110" strokeWidth="1" strokeOpacity="0.2" />
                    <line x1="150" y1="75" x2="210" y2="110" strokeWidth="1" strokeOpacity="0.2" />
                    <line x1="250" y1="40" x2="210" y2="110" strokeWidth="1" strokeOpacity="0.2" />
                    <line x1="90" y1="110" x2="210" y2="110" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="3 3" />
                    
                    {/* Glowing Nodes */}
                    <circle cx="50" cy="40" r="4.5" fill="#014A36" strokeWidth="2.5" />
                    <circle cx="250" cy="40" r="4.5" fill="#014A36" strokeWidth="2.5" />
                    <circle cx="150" cy="75" r="7.5" fill="#002F24" strokeWidth="3" />
                    <circle cx="90" cy="110" r="4.5" fill="#014A36" strokeWidth="2.5" />
                    <circle cx="210" cy="110" r="4.5" fill="#014A36" strokeWidth="2.5" />
                  </svg>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-grow text-left">
                  <div className="space-y-3">
                    <span className="inline-block px-3 py-1 rounded-full border border-gold/20 text-[9px] font-mono font-bold text-gold uppercase tracking-wider bg-white">
                      CASE NOTE
                    </span>
                    <h3 className="text-base xl:text-lg font-bold text-forest leading-snug group-hover:text-gold transition-colors font-serif italic">
                      How touchpoints create real impact
                    </h3>
                  </div>
                  
                  <div className="pt-4 border-t border-line/10 flex items-center justify-between text-xs text-gold font-bold">
                    <span />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Card 3: LAB NOTE */}
            <Link href="/experience-lab#why-customers-forget" className="block group">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#FFFDF8] border border-gold/15 rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl hover:border-gold transition-all duration-300 flex flex-col min-h-[360px]"
              >
                {/* Visual Header: Sketchbook drawing on grid lines */}
                <div className="h-[140px] xl:h-[160px] bg-[#002F24] relative overflow-hidden flex items-center justify-center">
                  {/* Grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(216,205,187,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(216,205,187,0.04)_1px,transparent_1px)] bg-[size:12px_12px]" />
                  <svg className="w-full h-full opacity-65" viewBox="0 0 300 150" fill="none" stroke="#C8922B" strokeWidth="1.2">
                    {/* Sketch graphics */}
                    <circle cx="150" cy="75" r="40" strokeOpacity="0.2" strokeDasharray="3 3" />
                    <circle cx="150" cy="75" r="24" strokeOpacity="0.4" />
                    <polygon points="150,51 171,87 129,87" strokeWidth="1.2" strokeOpacity="0.5" />
                    <line x1="100" y1="75" x2="200" y2="75" strokeOpacity="0.2" />
                    <line x1="150" y1="25" x2="150" y2="125" strokeOpacity="0.2" />
                    
                    {/* Math markings */}
                    <path d="M 175 75 A 25 25 0 0 1 168 93" strokeWidth="1" strokeOpacity="0.6" />
                    <text x="178" y="93" fill="#C8922B" fontSize="8" fontFamily="Courier" opacity="0.6">θ</text>
                  </svg>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-grow text-left">
                  <div className="space-y-3">
                    <span className="inline-block px-3 py-1 rounded-full border border-gold/20 text-[9px] font-mono font-bold text-gold uppercase tracking-wider bg-white">
                      LAB NOTE
                    </span>
                    <h3 className="text-base xl:text-lg font-bold text-forest leading-snug group-hover:text-gold transition-colors font-serif italic">
                      Designing moments people remember
                    </h3>
                  </div>
                  
                  <div className="pt-4 border-t border-line/10 flex items-center justify-between text-xs text-gold font-bold">
                    <span />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
                  </div>
                </div>
              </motion.div>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};
export default LabTeaser;
