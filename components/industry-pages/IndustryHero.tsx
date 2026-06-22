"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Utensils, Coffee, Shirt, ShoppingBag, ShoppingCart,
  GraduationCap, HeartPulse, Building2, Store, Rocket,
  CalendarDays, Sparkles, ArrowUpRight, ArrowDown
} from "lucide-react";
import type { IndustryPageBlueprint } from "@/data/industries/industryPages";

// Lucide icon mapping matching the user's specification
const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number }>> = {
  Utensils,
  Coffee,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  GraduationCap,
  HeartPulse,
  Building2,
  Store,
  Rocket,
  CalendarDays,
};

interface Props {
  industry: IndustryPageBlueprint;
}

export const IndustryHero: React.FC<Props> = ({ industry }) => {
  const Icon = iconMap[industry.icon] ?? Sparkles;

  // Use the first 3 stages as the floating touchpoints on the right
  const floatingStages = industry.customerJourney.slice(0, 3);

  // Position coordinates for floating labels on a 420x420 canvas
  // 1: Top-Left, 2: Top-Right, 3: Bottom-Left
  const positions = [
    { x: 50, y: 70, align: "items-start" },
    { x: 370, y: 110, align: "items-end" },
    { x: 60, y: 350, align: "items-start" }
  ];

  return (
    <section className="relative w-full bg-[#F8F5EF] text-[#222222] pt-[96px] pb-0 overflow-visible">
      <div className="max-w-[1320px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[53%_47%] items-center gap-10 xl:gap-14 min-h-[calc(100vh-96px)] py-16 lg:py-20">

          {/* ── Left: Copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start text-left"
          >
            {/* Label */}
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C8922B]">
                {industry.label} INDUSTRY
              </span>
              <span className="text-[#C8922B] text-base leading-none">••</span>
            </div>

            {/* H1 */}
            <h1 className="display-heading text-[34px] sm:text-[44px] lg:text-[44px] xl:text-[54px] 2xl:text-[62px] font-bold text-[#014A36] tracking-tight leading-[1.05] mb-5 select-text">
              {industry.title}
            </h1>

            {/* Gold underline accent */}
            <div className="w-16 h-[3px] bg-[#C8922B] mb-5 rounded-full" />

            {/* Subtitle */}
            <p className="text-[17px] md:text-[19px] text-[#222222] font-semibold leading-[1.5] max-w-[540px] mb-4 select-text">
              {industry.subtitle}
            </p>

            {/* Description */}
            <p className="text-[15px] md:text-[16px] text-[#4F5A55] leading-[1.65] max-w-[520px] mb-8 font-medium select-text">
              {industry.description}
            </p>

            {/* Bangla local emotional quote tailored for industry pages */}
            <div className="flex items-start gap-3 mb-8 max-w-[480px]">
              <span className="text-[#C8922B] text-[42px] leading-[0.6] select-none font-serif">"</span>
              <div className="w-[1px] h-7 bg-[#C8922B]/40 self-stretch mt-1 flex-shrink-0" />
              <p className="bangla-heading text-[15px] text-[#014A36] font-semibold leading-relaxed">
                পণ্য বা সেবা সবাই দেয়, কিন্তু মানুষ মনে রাখে কেবল <span className="text-[#C8922B]">experience</span>-টা।
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                href="/experience-audit"
                className="inline-flex items-center justify-center gap-2 bg-[#014A36] text-[#FFFDF8] hover:bg-[#002B20] transition-all duration-300 font-bold rounded-xl px-6 py-3.5 text-[15px] shadow-sm"
              >
                Book an Experience Audit
                <ArrowUpRight size={16} className="text-[#C8922B]" />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-[#014A36]/30 bg-transparent text-[#014A36] hover:border-[#C8922B] hover:text-[#C8922B] transition-all duration-300 font-semibold rounded-xl px-6 py-3.5 text-[15px]"
              >
                See relevant services
                <ArrowDown size={15} />
              </a>
            </div>
          </motion.div>

          {/* ── Right: Journey Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center w-full"
          >
            <div className="group relative h-[340px] w-[340px] sm:h-[390px] sm:w-[390px] xl:h-[430px] xl:w-[430px] rounded-[44px] border border-[#C8922B]/20 bg-[#F8F5EF]/80 shadow-[0_30px_90px_rgba(1,74,54,0.1)] overflow-visible flex items-center justify-center">
              
              {/* Subtle bishorgo wing watermark in center */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] pointer-events-none select-none p-12">
                <svg viewBox="0 0 500 500" fill="#014A36" className="w-full h-full">
                  <path d="M 133 55 L 135 57 L 135 67 L 137 70 L 140 90 L 151 120 L 160 137 L 181 165 L 199 183 L 225 202 L 247 214 L 262 219 L 266 222 L 281 226 L 282 228 L 256 236 L 228 249 L 199 270 L 175 295 L 163 312 L 147 344 L 132 398 L 133 401 L 131 404 L 132 408 L 172 376 L 272 308 L 285 295 L 293 284 L 301 268 L 300 267 L 304 258 L 308 238 L 308 219 L 301 190 L 293 173 L 276 152 L 245 129 L 235 124 L 231 120 L 158 74 Z" />
                </svg>
              </div>

              {/* Vector connection lines on a 420x420 coordinate system */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 420 420" fill="none">
                {/* Connecting lines from center (210, 210) to positioning points */}
                <line x1="210" y1="210" x2="80" y2="100" stroke="#C8922B" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="3 3" />
                <line x1="210" y1="210" x2="330" y2="140" stroke="#C8922B" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="3 3" />
                <line x1="210" y1="210" x2="100" y2="330" stroke="#C8922B" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="3 3" />
                
                {/* Central orbit guides */}
                <circle cx="210" cy="210" r="85" stroke="#C8922B" strokeWidth="0.6" strokeOpacity="0.2" strokeDasharray="4 6" />
                <circle cx="210" cy="210" r="130" stroke="#014A36" strokeWidth="0.6" strokeOpacity="0.1" />
              </svg>

              {/* Floating touchpoint labels (dynamic from data stages) */}
              {floatingStages.map((stage, index) => {
                const pos = positions[index] ?? { x: 210, y: 210, align: "items-center" };
                return (
                  <motion.div
                    key={stage.stage}
                    className={`absolute flex flex-col ${pos.align} z-20`}
                    style={{
                      left: `${(pos.x / 420) * 100}%`,
                      top: `${(pos.y / 420) * 100}%`,
                      transform: "translate(-50%, -50%)"
                    }}
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 3.5 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="px-3.5 py-1.5 rounded-full bg-[#FFFDF8] border border-[#014A36]/15 shadow-sm text-xs font-bold text-[#014A36] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8922B]" />
                      {stage.stage}
                    </div>
                  </motion.div>
                );
              })}

              {/* Memory dots */}
              <div className="absolute top-[28%] right-[16%] w-2 h-2 rounded-full bg-[#C8922B] opacity-80" />
              <div className="absolute bottom-[24%] right-[22%] w-2.5 h-2.5 rounded-full bg-[#C8922B] opacity-60" />

              {/* Central Glowing Icon Box */}
              <div className="relative z-10 w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] rounded-3xl bg-[#FFFDF8] border border-[#C8922B]/35 flex items-center justify-center shadow-[0_12px_40px_rgba(1,74,54,0.08)] group-hover:scale-[1.03] transition-transform duration-500 ease-out">
                {/* Radial Glow */}
                <div className="absolute inset-0 rounded-3xl bg-radial-gradient pointer-events-none opacity-40" style={{ background: "radial-gradient(circle at center, rgba(200,146,43,0.3) 0%, transparent 70%)" }} />
                
                {/* Visual Icon */}
                <Icon
                  strokeWidth={0.85}
                  className="relative z-10 h-16 w-16 text-[#014A36] drop-shadow-[0_0_15px_rgba(200,146,43,0.25)]"
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
