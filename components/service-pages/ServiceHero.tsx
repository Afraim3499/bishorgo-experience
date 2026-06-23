"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Compass, Fingerprint, MonitorSmartphone, NotebookPen,
  MessagesSquare, Megaphone, Route, Sparkles,
  LayoutTemplate, Brush, MapPin, Ticket, ArrowUpRight,
} from "lucide-react";
import type { ServicePageBlueprint } from "@/data/services/servicePages";

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number }>> = {
  Compass, Fingerprint, MonitorSmartphone, NotebookPen,
  MessagesSquare, Megaphone, Route, Sparkles,
  LayoutTemplate, Brush, MapPin, Ticket,
};

interface Props {
  service: ServicePageBlueprint;
}

export const ServiceHero: React.FC<Props> = ({ service }) => {
  const Icon = iconMap[service.icon] ?? Sparkles;

  return (
    <section className="relative w-full bg-[#F8F5EF] text-[#222222] pt-[96px] pb-0 overflow-visible">
      <div className="max-w-[1320px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[52%_48%] items-center gap-8 xl:gap-12 min-h-[calc(100vh-96px)] py-16 lg:py-20">

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
                SERVICE
              </span>
              <span className="text-[#C8922B] text-base leading-none">••</span>
            </div>

            {/* H1 */}
            <h1 className="display-heading text-[34px] sm:text-[40px] lg:text-[40px] xl:text-[50px] 2xl:text-[58px] font-bold text-[#014A36] tracking-tight leading-[1.05] mb-5 select-text">
              {service.title}
            </h1>

            {/* Gold underline accent */}
            <div className="w-16 h-[3px] bg-[#C8922B] mb-5 rounded-full" />

            {/* Subtitle */}
            <p className="text-[17px] md:text-[19px] text-[#222222] font-semibold leading-[1.5] max-w-[520px] mb-4 select-text">
              {service.subtitle}
            </p>

            {/* Description */}
            <p className="text-[15px] md:text-[16px] text-[#4F5A55] leading-[1.65] max-w-[500px] mb-8 font-medium select-text">
              {service.description}
            </p>

            {/* Bangla memory quote */}
            <div className="flex items-start gap-3 mb-8 max-w-[480px]">
              <span className="text-[#C8922B] text-[42px] leading-[0.6] select-none font-serif">"</span>
              <div className="w-[1px] h-7 bg-[#C8922B]/40 self-stretch mt-1 flex-shrink-0" />
              <p className="text-[15px] text-[#014A36] font-semibold leading-relaxed">
                People forget ads they see every day.<br />
                But they never forget a moment that made them feel special.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/experience-audit"
                className="inline-flex items-center justify-center gap-2 bg-[#014A36] text-[#FFFDF8] hover:bg-[#002B20] transition-all duration-300 font-bold rounded-xl px-6 py-3.5 text-[15px] shadow-sm"
              >
                Your Brand, Our Plan
                <ArrowUpRight size={16} className="text-[#C8922B]" />
              </Link>
              <Link
                href="/method"
                className="inline-flex items-center justify-center gap-2 border border-[#014A36]/30 bg-transparent text-[#014A36] hover:border-[#C8922B] hover:text-[#C8922B] transition-all duration-300 font-semibold rounded-xl px-6 py-3.5 text-[15px]"
              >
                See the method
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* ── Right: Icon Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center"
          >
            <div className="group relative h-[320px] w-[320px] md:h-[380px] md:w-[380px] xl:h-[420px] xl:w-[420px] rounded-[44px] border border-[#C8922B]/25 bg-[#F8F5EF]/75 shadow-[0_30px_90px_rgba(1,74,54,0.12)] overflow-hidden flex items-center justify-center">
              
              {/* Subtle bishorgo wing watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none">
                <svg viewBox="0 0 500 500" fill="#014A36" className="w-full h-full">
                  <path d="M 133 55 L 135 57 L 135 67 L 137 70 L 140 90 L 151 120 L 160 137 L 181 165 L 199 183 L 225 202 L 247 214 L 262 219 L 266 222 L 281 226 L 282 228 L 256 236 L 228 249 L 199 270 L 175 295 L 163 312 L 147 344 L 132 398 L 133 401 L 131 404 L 132 408 L 172 376 L 272 308 L 285 295 L 293 284 L 301 268 L 300 267 L 304 258 L 308 238 L 308 219 L 301 190 L 293 173 L 276 152 L 245 129 L 235 124 L 231 120 L 158 74 Z" />
                </svg>
              </div>

              {/* Gold connector lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 420 420" fill="none">
                <line x1="60" y1="60" x2="200" y2="200" stroke="#C8922B" strokeWidth="0.6" strokeOpacity="0.35" />
                <line x1="360" y1="60" x2="220" y2="200" stroke="#C8922B" strokeWidth="0.6" strokeOpacity="0.35" />
                <line x1="60" y1="360" x2="200" y2="220" stroke="#C8922B" strokeWidth="0.6" strokeOpacity="0.35" />
                <line x1="360" y1="360" x2="220" y2="220" stroke="#C8922B" strokeWidth="0.6" strokeOpacity="0.35" />
                <circle cx="210" cy="210" r="90" stroke="#C8922B" strokeWidth="0.5" strokeOpacity="0.18" strokeDasharray="4 8" />
                <circle cx="210" cy="210" r="140" stroke="#014A36" strokeWidth="0.5" strokeOpacity="0.1" strokeDasharray="3 12" />
              </svg>

              {/* Gold memory dots */}
              <div className="absolute top-8 right-8 w-2.5 h-2.5 rounded-full bg-[#C8922B] opacity-70" />
              <div className="absolute bottom-8 left-8 w-2 h-2 rounded-full bg-[#C8922B] opacity-50" />
              <div className="absolute top-[45%] left-6 w-1.5 h-1.5 rounded-full bg-[#C8922B] opacity-40" />

              {/* Subtle gold glow */}
              <div className="absolute inset-0 bg-radial-gradient pointer-events-none" style={{ background: "radial-gradient(circle at 60% 40%, rgba(200,146,43,0.07) 0%, transparent 65%)" }} />

              {/* Icon */}
              <Icon
                strokeWidth={0.9}
                className="relative z-10 h-[48%] w-[48%] text-[#014A36] drop-shadow-[0_0_18px_rgba(200,146,43,0.24)] transition-transform duration-700 ease-out group-hover:-translate-x-2 group-hover:-translate-y-2"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
