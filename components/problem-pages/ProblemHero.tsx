"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Brain, TrendingDown, MousePointerClick, MessageCircleQuestion,
  Shuffle, RefreshCcw, Rocket, PackageOpen, UsersRound, BarChart3,
  RefreshCw, RouteOff, Sparkles, ArrowUpRight, ArrowDown
} from "lucide-react";
import type { ProblemPageBlueprint } from "@/data/solutions/problemPages";

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number }>> = {
  Brain,
  TrendingDown,
  MousePointerClick,
  MessageCircleQuestion,
  Shuffle,
  RefreshCcw,
  Rocket,
  PackageOpen,
  UsersRound,
  BarChart3,
  RefreshCw,
  RouteOff,
};

interface Props {
  problem: ProblemPageBlueprint;
}

export const ProblemHero: React.FC<Props> = ({ problem }) => {
  const Icon = iconMap[problem.icon] ?? Sparkles;

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
                DIAGNOSIS: {problem.label.toUpperCase()}
              </span>
              <span className="text-[#C8922B] text-base leading-none">••</span>
            </div>

            {/* H1 */}
            <h1 className="display-heading text-[34px] sm:text-[44px] lg:text-[44px] xl:text-[54px] 2xl:text-[62px] font-extrabold text-[#014A36] tracking-tight leading-[1.05] mb-5 select-text">
              {problem.title}
            </h1>

            {/* Gold underline accent */}
            <div className="w-16 h-[3px] bg-[#C8922B] mb-5 rounded-full" />

            {/* Subtitle */}
            <p className="text-[17px] md:text-[19px] text-[#222222] font-semibold leading-[1.5] max-w-[540px] mb-4 select-text">
              {problem.subtitle}
            </p>

            {/* Description */}
            <p className="text-[15px] md:text-[16px] text-[#4F5A55] leading-[1.65] max-w-[520px] mb-8 font-medium select-text">
              {problem.description}
            </p>

            {/* Bangla emotional quote tailored for problem/solution pages */}
            <div className="flex items-start gap-3 mb-8 max-w-[480px]">
              <span className="text-[#C8922B] text-[42px] leading-[0.6] select-none font-serif">"</span>
              <div className="w-[1px] h-7 bg-[#C8922B]/40 self-stretch mt-1 flex-shrink-0" />
              <p className="bangla-heading text-[15px] text-[#014A36] font-semibold leading-relaxed">
                আপনার content দেখা হচ্ছে, কিন্তু মনে থাকছে না। <br />
                ব্র্যান্ডিংয়ের সমস্যাটা বিজ্ঞাপনে নয়, <span className="text-[#C8922B]">experience</span>-এ।
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                href="/experience-audit"
                className="inline-flex items-center justify-center gap-2 bg-[#014A36] text-[#FFFDF8] hover:bg-[#002B20] transition-all duration-300 font-bold rounded-xl px-6 py-3.5 text-[15px] shadow-sm"
              >
                Find the experience gap
                <ArrowUpRight size={16} className="text-[#C8922B]" />
              </Link>
              <a
                href="#solution"
                className="inline-flex items-center justify-center gap-2 border border-[#014A36]/30 bg-transparent text-[#014A36] hover:border-[#C8922B] hover:text-[#C8922B] transition-all duration-300 font-semibold rounded-xl px-6 py-3.5 text-[15px]"
              >
                See how Bishorgo solves this
                <ArrowDown size={15} />
              </a>
            </div>
          </motion.div>

          {/* ── Right: Diagnostic Visual Field ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center w-full"
          >
            <div className="group relative h-[320px] w-[320px] md:h-[380px] md:w-[380px] xl:h-[420px] xl:w-[420px] rounded-[44px] border border-[#C8922B]/25 bg-[#F8F5EF]/75 shadow-[0_30px_90px_rgba(1,74,54,0.14)] overflow-hidden flex items-center justify-center">
              
              {/* Subtle bishorgo watermark in background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                <svg viewBox="0 0 500 500" fill="#014A36" className="w-full h-full p-12">
                  <path d="M 133 55 L 135 57 L 135 67 L 137 70 L 140 90 L 151 120 L 160 137 L 181 165 L 199 183 L 225 202 L 247 214 L 262 219 L 266 222 L 281 226 L 282 228 L 256 236 L 228 249 L 199 270 L 175 295 L 163 312 L 147 344 L 132 398 L 133 401 L 131 404 L 132 408 L 172 376 L 272 308 L 285 295 L 293 284 L 301 268 L 300 267 L 304 258 L 308 238 L 308 219 L 301 190 L 293 173 L 276 152 L 245 129 L 235 124 L 231 120 L 158 74 Z" />
                </svg>
              </div>

              {/* Vector broken connection lines (diagnostic representation) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 420 420" fill="none">
                {/* Broken/scattered path segments */}
                <path d="M 60 80 Q 150 160 210 210" stroke="#014A36" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="4 4" />
                <path d="M 360 80 Q 280 180 210 210" stroke="#014A36" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="4 4" />
                {/* Disconnected segment */}
                <path d="M 80 340 L 150 280" stroke="#C8922B" strokeWidth="0.8" strokeOpacity="0.3" />
                <path d="M 340 340 Q 290 290 210 210" stroke="#014A36" strokeWidth="0.8" strokeOpacity="0.2" strokeDasharray="3 6" />

                {/* Orbit bounds */}
                <circle cx="210" cy="210" r="100" stroke="#C8922B" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="4 8" />
                <circle cx="210" cy="210" r="150" stroke="#014A36" strokeWidth="0.5" strokeOpacity="0.08" />
              </svg>

              {/* Gold warning/memory dots (scattered touchpoints) */}
              <div className="absolute top-[20%] left-[22%] w-2.5 h-2.5 rounded-full bg-[#C8922B] opacity-75 shadow-[0_0_8px_rgba(200,146,43,0.5)]" />
              <div className="absolute bottom-[35%] left-[16%] w-2 h-2 rounded-full bg-[#C8922B] opacity-50" />
              <div className="absolute top-[35%] right-[25%] w-1.5 h-1.5 rounded-full bg-[#014A36] opacity-40 animate-pulse" />
              <div className="absolute bottom-[18%] right-[28%] w-2 h-2 rounded-full bg-[#C8922B] opacity-60" />

              {/* Central glowing icon layout */}
              <div className="relative z-10 w-28 h-28 md:w-36 md:h-36 rounded-3xl bg-[#FFFDF8] border border-[#C8922B]/35 flex items-center justify-center shadow-[0_15px_45px_rgba(1,74,54,0.08)] group-hover:scale-[1.03] transition-transform duration-500 ease-out">
                {/* Soft glow radial gradient */}
                <div className="absolute inset-0 rounded-3xl bg-radial-gradient pointer-events-none opacity-40" style={{ background: "radial-gradient(circle at center, rgba(200,146,43,0.25) 0%, transparent 70%)" }} />
                
                {/* lucide icon */}
                <Icon
                  strokeWidth={0.9}
                  className="relative z-10 h-[55%] w-[55%] text-[#014A36] drop-shadow-[0_0_15px_rgba(200,146,43,0.24)]"
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
export default ProblemHero;
