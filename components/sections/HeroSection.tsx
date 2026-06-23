"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full lg:h-screen lg:max-h-screen bg-[#F8F5EF] text-[#222222] pt-[96px] lg:pt-[96px] pb-10 lg:pb-0 overflow-visible flex items-center">
      <div className="w-full max-w-[1320px] mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[46%_54%] items-center gap-6 xl:gap-8 w-full">
          
          {/* Hero Left Content */}
          <div className="flex flex-col items-start text-left z-10 py-4 lg:py-0">
            {/* Small Label */}
            <div className="flex flex-col items-start mb-3">
              <span className="text-[12px] lg:text-[13px] uppercase tracking-[0.28em] font-semibold text-[#C8922B] select-none">
                Bishorgo Experience
              </span>
              <div className="w-12 h-[1px] bg-[#C8922B] mt-1" />
            </div>
 
            {/* Main Editorial Headline */}
            <h1 className="display-heading text-[36px] sm:text-[42px] md:text-[50px] lg:text-[38px] xl:text-[48px] 2xl:text-[58px] font-bold text-[#222222] tracking-tight leading-[1.05] select-text">
              People forget<br />
              <span className="text-[#014A36]">advertisements.</span><br />
              People remember<br />
              <span className="text-[#014A36] relative inline-block">
                experiences.
                {/* Gold imperfect underline */}
                <svg className="absolute left-0 -bottom-2 w-full h-[8px] text-[#C8922B]" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                  <path d="M5 9C60 4 150 2 295 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
 
            {/* Subheadline */}
            <p className="text-[15px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] text-[#4F5A55] leading-[1.6] max-w-[460px] mt-3 lg:mt-4 font-medium select-text">
              Bishorgo Experience helps businesses turn ordinary brand touchpoints into memorable customer journeys through strategy, branding, content, technology, and real-world activation.
            </p>
 
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-4 lg:mt-4.5">
              <Link
                href="/experience-audit"
                className="bg-[#014A36] text-[#FFFDF8] hover:bg-[#002f24] hover:shadow-lg transition-all duration-300 font-semibold rounded-xl px-5.5 py-3 lg:px-6.5 lg:py-3.5 text-[14px] lg:text-[15px] flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Your Brand, Our Plan</span>
                <span className="text-[#C8922B] font-bold">↗</span>
              </Link>
              <Link
                href="/experience-lab"
                className="border border-[#C8922B] bg-transparent text-[#C8922B] hover:bg-[#C8922B]/5 transition-all duration-300 font-semibold rounded-xl px-5.5 py-3 lg:px-6.5 lg:py-3.5 text-[14px] lg:text-[15px] flex items-center justify-center gap-1.5"
              >
                <span>Explore the Lab</span>
                <span className="font-bold">↗</span>
              </Link>
            </div>
 
            {/* Bangla Quote with vertical divider */}
            <div className="flex items-start gap-3 mt-4 lg:mt-5 max-w-lg select-text">
              {/* Quote Mark */}
              <span className="text-[#C8922B] text-[44px] lg:text-[48px] font-serif leading-[0.6] select-none">“</span>
              
              {/* Thin vertical gold divider */}
              <div className="w-[1px] h-7 bg-[#C8922B]/40 self-stretch mt-1" />
              
              {/* Quote text */}
              <p className="text-[15px] lg:text-[15px] xl:text-[17px] leading-relaxed text-[#222222] font-semibold tracking-wide">
                People forget ads they see every day.<br />
                But they never forget a moment that made them feel special.
              </p>
            </div>
          </div>
 
          {/* Hero Right Visual System */}
          <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[360px] xl:h-[420px] 2xl:h-[460px] flex items-center justify-center select-none mt-6 lg:mt-0 overflow-visible">
            
            {/* SVG Background Elements */}
            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
              <svg className="w-full h-full max-w-[360px] sm:max-w-[420px] lg:max-w-[420px] xl:max-w-[480px] 2xl:max-w-[500px] max-h-[360px] sm:max-h-[420px] lg:max-h-[420px] xl:max-h-[480px] 2xl:max-h-[500px]" viewBox="0 0 600 600" fill="none">
                
                {/* Definitions & Gradients */}
                <defs>
                  <linearGradient id="logoWingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#014A36" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#C8922B" stopOpacity="0.06" />
                  </linearGradient>
                  <linearGradient id="goldArrowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C8922B" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#FFFDF8" stopOpacity="0.02" />
                  </linearGradient>
                  <linearGradient id="goldCircleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C8922B" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#FFFDF8" stopOpacity="0.02" />
                  </linearGradient>
                </defs>

                {/* Unified logo icon group centered at (300, 300) with scale 1.35 */}
                <g transform="translate(-54, -12) scale(1.35)">
                  {/* Green Wing crescent */}
                  <path
                    d="M 133 55 L 135 57 L 135 67 L 137 70 L 140 90 L 151 120 L 160 137 L 181 165 L 199 183 L 225 202 L 247 214 L 262 219 L 266 222 L 281 226 L 282 228 L 256 236 L 228 249 L 199 270 L 175 295 L 163 312 L 147 344 L 132 398 L 133 401 L 131 404 L 132 408 L 172 376 L 272 308 L 285 295 L 293 284 L 301 268 L 300 267 L 304 258 L 308 238 L 308 219 L 301 190 L 293 173 L 276 152 L 245 129 L 235 124 L 231 120 L 158 74 Z"
                    fill="url(#logoWingGrad)"
                    stroke="#014A36"
                    strokeWidth="1.2"
                    strokeOpacity="0.22"
                  />
                  
                  {/* Gold inner pointer arrow */}
                  <path
                    d="M 143 152 L 143 306 L 218 228 Z"
                    fill="url(#goldArrowGrad)"
                    stroke="#C8922B"
                    strokeWidth="1.2"
                    strokeOpacity="0.35"
                  />

                  {/* Gold Circles */}
                  <circle
                    cx="361.5"
                    cy="177.5"
                    r="30.5"
                    fill="url(#goldCircleGrad)"
                    stroke="#C8922B"
                    strokeWidth="1"
                    strokeOpacity="0.35"
                  />
                  <circle
                    cx="361.5"
                    cy="285.5"
                    r="30.5"
                    fill="url(#goldCircleGrad)"
                    stroke="#C8922B"
                    strokeWidth="1"
                    strokeOpacity="0.35"
                  />
                </g>

                {/* Concentric dashed primary orbit loop centered around (300, 300) */}
                <circle cx="300" cy="300" r="220" stroke="#C8922B" strokeWidth="1" strokeDasharray="4 8" opacity="0.35" />

                {/* Curved Connector Lines connecting cards (secondary lines, lighter opacity) */}
                {/* Touchpoint (130, 140) to Memory (520, 300) - Pushed further out */}
                <path d="M 130,140 Q 320,110 520,300" stroke="#C8922B" strokeWidth="1" strokeOpacity="0.25" fill="none" />
                
                {/* Touchpoint (130, 140) to Experience (150, 420) - Pushed further out */}
                <path d="M 130,140 Q 80,280 150,420" stroke="#C8922B" strokeWidth="1" strokeOpacity="0.25" fill="none" />
                
                {/* Experience (150, 420) to Memory (520, 300) - Pushed further out */}
                <path d="M 150,420 Q 330,440 520,300" stroke="#C8922B" strokeWidth="1" strokeOpacity="0.25" fill="none" />

                {/* Gold Connector Dots on paths */}
                <circle cx="325" cy="150" r="4.5" fill="#C8922B" />
                <circle cx="101" cy="280" r="4.5" fill="#C8922B" />
                <circle cx="335" cy="402" r="4.5" fill="#C8922B" />
              </svg>
            </div>

            {/* Floating Visual Cards - Placed further out to avoid overlap with logo watermark */}
            {/* Card 1: Connect (Upper-Left) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[8%] left-[2%] bg-[#F8F5EF]/90 border border-[#C8922B]/20 rounded-[16px] px-4 py-2.5 lg:px-4 lg:py-2.5 shadow-[0_16px_40px_rgba(1,74,54,0.06)] backdrop-blur-md flex items-center gap-3 z-20 min-w-[130px] sm:min-w-[150px]"
            >
              <div className="w-9 h-9 rounded-full bg-[#FFFDF8] flex items-center justify-center border border-[#C8922B]/15 flex-shrink-0">
                <svg className="w-4.5 h-4.5 text-[#C8922B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <span className="text-[15px] lg:text-[15px] xl:text-[16px] font-semibold text-[#222222] tracking-wide">Connect</span>
            </motion.div>

            {/* Card 2: Remember (Mid-Right) */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-[42%] right-[-2%] lg:right-[-6%] bg-[#F8F5EF]/90 border border-[#C8922B]/20 rounded-[16px] px-4 py-2.5 lg:px-4 lg:py-2.5 shadow-[0_16px_40px_rgba(1,74,54,0.06)] backdrop-blur-md flex items-center gap-3 z-20 min-w-[130px] sm:min-w-[150px]"
            >
              <div className="w-9 h-9 rounded-full bg-[#FFFDF8] flex items-center justify-center border border-[#C8922B]/15 flex-shrink-0">
                <svg className="w-4.5 h-4.5 text-[#C8922B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.5a6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 1 2 2M12 18.5a6 6 0 0 0 6-6 4 4 0 0 0-4-4 2 2 0 0 0-2 2M12 18.5V8.5" />
                </svg>
              </div>
              <span className="text-[15px] lg:text-[15px] xl:text-[16px] font-semibold text-[#222222] tracking-wide">Remember</span>
            </motion.div>

            {/* Card 3: Feel (Lower-Left/Mid - Moved further out and down-left) */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[18%] left-[8%] bg-[#F8F5EF]/90 border border-[#C8922B]/20 rounded-[16px] px-4 py-2.5 lg:px-4 lg:py-2.5 shadow-[0_16px_40px_rgba(1,74,54,0.06)] backdrop-blur-md flex items-center gap-3 z-20 min-w-[130px] sm:min-w-[150px]"
            >
              <div className="w-9 h-9 rounded-full bg-[#FFFDF8] flex items-center justify-center border border-[#C8922B]/15 flex-shrink-0">
                <svg className="w-4.5 h-4.5 text-[#C8922B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <span className="text-[15px] lg:text-[15px] xl:text-[16px] font-semibold text-[#222222] tracking-wide">Feel</span>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
