"use client";

import React from "react";
import Link from "next/link";
import { ClipboardCheck } from "lucide-react";

export const AuditTeaser: React.FC = () => {
  return (
    <section className="relative w-full min-h-fit bg-warm-white py-12 md:py-16 overflow-visible border-b border-[#014A36]/10 drafting-board">
      <div className="w-full max-w-[1320px] mx-auto px-5 lg:px-10">
        
        {/* Horizontal CTA Banner */}
        <div className="relative w-full bg-[#014A36] text-[#F8F5EF] rounded-[24px] md:rounded-[32px] p-6 md:p-8 lg:p-10 shadow-2xl overflow-hidden border border-gold/20 flex flex-col md:flex-row md:items-center justify-between gap-6 lg:gap-8">
          
          {/* Inner gold border inside the banner for cinematic framing */}
          <div className="absolute inset-3 rounded-[16px] md:rounded-[24px] border border-dashed border-gold/15 pointer-events-none z-0" />
          
          {/* Background Watermark wing logo on the left */}
          <div className="absolute top-1/2 -left-12 -translate-y-1/2 w-44 h-44 opacity-[0.06] pointer-events-none select-none z-0">
            <svg className="w-full h-full" viewBox="0 0 600 600" fill="none">
              <path
                d="M 133 55 L 135 57 L 135 67 L 137 70 L 140 90 L 151 120 L 160 137 L 181 165 L 199 183 L 225 202 L 247 214 L 262 219 L 266 222 L 281 226 L 282 228 L 256 236 L 228 249 L 199 270 L 175 295 L 163 312 L 147 344 L 132 398 L 133 401 L 131 404 L 132 408 L 172 376 L 272 308 L 285 295 L 293 284 L 301 268 L 300 267 L 304 258 L 308 238 L 308 219 L 301 190 L 293 173 L 276 152 L 245 129 L 235 124 L 231 120 L 158 74 Z"
                fill="#C8922B"
              />
              <path
                d="M 143 152 L 143 306 L 218 228 Z"
                fill="#C8922B"
              />
            </svg>
          </div>

          {/* Left Column: Icon + Copy */}
          <div className="flex items-center gap-5 lg:gap-6 z-10 flex-grow max-w-4xl text-left">
            
            {/* Circular Checklist Icon */}
            <div className="hidden lg:flex w-16 h-16 rounded-full bg-[#FFFDF8] border-2 border-gold/45 text-[#014A36] items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
              <ClipboardCheck className="w-8 h-8" />
            </div>

            {/* Copy block */}
            <div className="space-y-2 md:space-y-3">
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold tracking-tight font-serif italic text-white select-text">
                Discover where your customer's journey is breaking.
              </h3>
              <p className="text-xs sm:text-sm text-[#F8F5EF]/80 font-medium max-w-2xl select-text leading-relaxed">
                A free Experience Audit helps you see where customers lose interest, where your brand feels unclear, and where the experience can become more memorable.
              </p>
            </div>

          </div>

          {/* Right Column: CTA Button */}
          <div className="flex-shrink-0 z-10 select-none">
            <Link
              href="/experience-audit"
              className="inline-flex items-center justify-center bg-[#C8922B] text-[#002f24] hover:bg-[#A87318] hover:text-[#FFFDF8] shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-300 font-bold rounded-full px-6 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm uppercase tracking-wider group"
            >
              <span>Your Brand, Our Plan</span>
              <span className="ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AuditTeaser;
