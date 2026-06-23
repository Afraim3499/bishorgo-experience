"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const tagHrefMap: Record<string, string> = {
  Positioning: "/services/brand-strategy",
  Identity: "/services/brand-identity",
  Tone: "/services/content-strategy",
  Story: "/services/content-strategy",
  Campaign: "/services/campaign-strategy",
  Social: "/services/social-media-strategy",
  Website: "/services/website-experience",
  "Landing Page": "/services/landing-page-design",
  "UI/UX": "/services/creative-direction",
  Activation: "/services/event-activation",
  Journey: "/services/customer-journey-design",
  Field: "/services/field-marketing",
};

export const TouchpointSystemSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-fit bg-[#F8F5EF] text-[#222222] py-24 md:py-32 lg:py-36 overflow-visible flex items-center border-b border-[#014A36]/10">
      <div className="w-full max-w-[1320px] mx-auto px-5 lg:px-10">
        
        {/* Top Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] items-center gap-6 xl:gap-8 mb-5 lg:mb-6 w-full">
          
          {/* Top Left: Copy */}
          <div className="flex flex-col items-start text-left z-10">
            {/* Small Label */}
            <div className="flex flex-col items-start mb-2.5">
              <span className="text-[12px] lg:text-[13px] font-semibold text-[#C8922B] select-none">
                What We Do
              </span>
              <div className="w-8 h-[1px] bg-[#C8922B] mt-1" />
            </div>

            {/* Headline */}
            <h2 className="text-[30px] sm:text-[34px] lg:text-[28px] xl:text-[36px] 2xl:text-[42px] font-bold tracking-tight leading-[1.1] text-[#222222] select-text">
              We connect every <span className="text-[#014A36]">customer touchpoint</span><br />
              into one unified, memorable <span className="text-[#014A36]">brand system</span>.
            </h2>

            {/* Subheadline */}
            <p className="text-[14px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] text-[#4F5A55] leading-[1.55] max-w-[520px] mt-3 lg:mt-4 select-text">
              When brand, content, technology, and real-world experience work together as one, people do not just notice you — they remember you.
            </p>
          </div>

          {/* Top Right: Mini-Logo visual (Cleaner, no text labels) */}
          <div className="relative w-full h-[120px] lg:h-[130px] xl:h-[150px] flex items-center justify-center select-none overflow-visible hidden sm:flex">
            <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-40">
              <svg className="w-full h-full max-w-[140px] max-h-[140px] lg:max-w-[150px] lg:max-h-[150px]" viewBox="0 0 600 600" fill="none">
                {/* Concentric dashed loop */}
                <circle cx="300" cy="300" r="220" stroke="#C8922B" strokeWidth="1.2" strokeDasharray="4 8" opacity="0.35" />
                
                {/* Logo Wing (opacity 0.08) */}
                <g transform="translate(-54, -12) scale(1.35)">
                  <path
                    d="M 133 55 L 135 57 L 135 67 L 137 70 L 140 90 L 151 120 L 160 137 L 181 165 L 199 183 L 225 202 L 247 214 L 262 219 L 266 222 L 281 226 L 282 228 L 256 236 L 228 249 L 199 270 L 175 295 L 163 312 L 147 344 L 132 398 L 133 401 L 131 404 L 132 408 L 172 376 L 272 308 L 285 295 L 293 284 L 301 268 L 300 267 L 304 258 L 308 238 L 308 219 L 301 190 L 293 173 L 276 152 L 245 129 L 235 124 L 231 120 L 158 74 Z"
                    fill="#014A36"
                    fillOpacity="0.08"
                    stroke="#014A36"
                    strokeWidth="1.2"
                    strokeOpacity="0.15"
                  />
                  {/* Gold Triangle */}
                  <path
                    d="M 143 152 L 143 306 L 218 228 Z"
                    fill="#C8922B"
                    fillOpacity="0.15"
                    stroke="#C8922B"
                    strokeWidth="1.2"
                    strokeOpacity="0.25"
                  />
                  {/* Gold Circles */}
                  <circle cx="361.5" cy="177.5" r="30.5" fill="#C8922B" fillOpacity="0.15" stroke="#C8922B" strokeWidth="1" strokeOpacity="0.2" />
                  <circle cx="361.5" cy="285.5" r="30.5" fill="#C8922B" fillOpacity="0.15" stroke="#C8922B" strokeWidth="1" strokeOpacity="0.2" />
                </g>

                {/* Curved Connection Lines */}
                <path d="M 130,140 Q 320,110 520,300" stroke="#C8922B" strokeWidth="1.2" strokeOpacity="0.2" fill="none" />
                <path d="M 130,140 Q 80,280 150,420" stroke="#C8922B" strokeWidth="1.2" strokeOpacity="0.2" fill="none" />
                <path d="M 150,420 Q 330,440 520,300" stroke="#C8922B" strokeWidth="1.2" strokeOpacity="0.2" fill="none" />
                <circle cx="325" cy="150" r="4.5" fill="#C8922B" fillOpacity="0.5" />
                <circle cx="101" cy="280" r="4.5" fill="#C8922B" fillOpacity="0.5" />
                <circle cx="335" cy="402" r="4.5" fill="#C8922B" fillOpacity="0.5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Main Content Layout - 2x2 Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 mb-5 lg:mb-6 w-full">
          
          {/* Card 1 - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/55 border border-[#014A36]/12 rounded-[20px] p-5 lg:p-4 xl:p-5 min-h-[180px] lg:min-h-[155px] xl:min-h-[175px] flex flex-col justify-between text-left hover:-translate-y-0.5 hover:border-[#C8922B]/50 hover:shadow-[0_16px_40px_rgba(1,74,54,0.04)] transition-all duration-300 group overflow-hidden"
          >
            {/* Serif Background Index Number */}
            <span className="absolute top-4 right-6 text-[44px] lg:text-[40px] xl:text-[48px] font-serif font-bold text-[#014A36]/5 select-none leading-none z-0">
              01
            </span>

            <div className="relative z-10 flex items-start gap-4">
              {/* Icon Box */}
              <div className="w-10 h-10 lg:w-9 lg:h-9 rounded-[12px] bg-[#014A36] text-[#C8922B] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-5 h-5 lg:w-4.5 lg:h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M12 2L22 12L12 22L2 12Z" />
                  <path d="M12 6L18 12L12 18L6 12Z" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
              </div>

              {/* Title & Short Line */}
              <div className="flex flex-col">
                <h3 className="text-[22px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-bold text-[#014A36] leading-none">Brand</h3>
                <p className="text-[15px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] text-[#222222] font-bangla leading-[1.4] mt-2">
                  Creating an identity that people remember.
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="relative z-10 flex flex-wrap gap-2 mt-4 lg:mt-4.5">
              {["Positioning", "Identity", "Tone"].map((tag) => (
                <Link
                  key={tag}
                  href={tagHrefMap[tag] || "/services"}
                  className="border border-[#C8922B]/35 text-[#014A36] hover:bg-[#C8922B]/10 hover:text-[#C8922B] hover:border-[#C8922B] text-[11px] lg:text-[11px] xl:text-[12px] font-medium px-2.5 py-0.5 rounded-full bg-white/30 transition-all duration-300"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Card 2 - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-white/55 border border-[#014A36]/12 rounded-[20px] p-5 lg:p-4 xl:p-5 min-h-[180px] lg:min-h-[155px] xl:min-h-[175px] flex flex-col justify-between text-left hover:-translate-y-0.5 hover:border-[#C8922B]/50 hover:shadow-[0_16px_40px_rgba(1,74,54,0.04)] transition-all duration-300 group overflow-hidden"
          >
            {/* Serif Background Index Number */}
            <span className="absolute top-4 right-6 text-[44px] lg:text-[40px] xl:text-[48px] font-serif font-bold text-[#014A36]/5 select-none leading-none z-0">
              02
            </span>

            <div className="relative z-10 flex items-start gap-4">
              {/* Icon Box */}
              <div className="w-10 h-10 lg:w-9 lg:h-9 rounded-[12px] bg-[#014A36] text-[#C8922B] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-5 h-5 lg:w-4.5 lg:h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25-9 3.694-9 8.25c0 2.162.9 4.135 2.375 5.61l-1.375 2.89c-.19.4.15.85.58.74l3.15-.81c1.24.47 2.6.73 4.27.73Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 9.75h8M8 13.5h5" />
                </svg>
              </div>

              {/* Title & Short Line */}
              <div className="flex flex-col">
                <h3 className="text-[22px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-bold text-[#014A36] leading-none">Content</h3>
                <p className="text-[15px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] text-[#222222] font-bangla leading-[1.4] mt-2">
                  Telling stories that people connect with.
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="relative z-10 flex flex-wrap gap-2 mt-4 lg:mt-4.5">
              {["Story", "Campaign", "Social"].map((tag) => (
                <Link
                  key={tag}
                  href={tagHrefMap[tag] || "/services"}
                  className="border border-[#C8922B]/35 text-[#014A36] hover:bg-[#C8922B]/10 hover:text-[#C8922B] hover:border-[#C8922B] text-[11px] lg:text-[11px] xl:text-[12px] font-medium px-2.5 py-0.5 rounded-full bg-white/30 transition-all duration-300"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Card 3 - Technology */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-white/55 border border-[#014A36]/12 rounded-[20px] p-5 lg:p-4 xl:p-5 min-h-[180px] lg:min-h-[155px] xl:min-h-[175px] flex flex-col justify-between text-left hover:-translate-y-0.5 hover:border-[#C8922B]/50 hover:shadow-[0_16px_40px_rgba(1,74,54,0.04)] transition-all duration-300 group overflow-hidden"
          >
            {/* Serif Background Index Number */}
            <span className="absolute top-4 right-6 text-[44px] lg:text-[40px] xl:text-[48px] font-serif font-bold text-[#014A36]/5 select-none leading-none z-0">
              03
            </span>

            <div className="relative z-10 flex items-start gap-4">
              {/* Icon Box */}
              <div className="w-10 h-10 lg:w-9 lg:h-9 rounded-[12px] bg-[#014A36] text-[#C8922B] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-5 h-5 lg:w-4.5 lg:h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <rect x="2" y="3" width="20" height="13" rx="2" />
                  <path d="M12 16v4M8 20h8" />
                  <path d="M9 7l-3 3 3 3M15 7l3 3-3 3" />
                </svg>
              </div>

              {/* Title & Short Line */}
              <div className="flex flex-col">
                <h3 className="text-[22px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-bold text-[#014A36] leading-none">Technology</h3>
                <p className="text-[15px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] text-[#222222] font-bangla leading-[1.4] mt-2">
                  Building digital paths that feel smooth.
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="relative z-10 flex flex-wrap gap-2 mt-4 lg:mt-4.5">
              {["Website", "Landing Page", "UI/UX"].map((tag) => (
                <Link
                  key={tag}
                  href={tagHrefMap[tag] || "/services"}
                  className="border border-[#C8922B]/35 text-[#014A36] hover:bg-[#C8922B]/10 hover:text-[#C8922B] hover:border-[#C8922B] text-[11px] lg:text-[11px] xl:text-[12px] font-medium px-2.5 py-0.5 rounded-full bg-white/30 transition-all duration-300"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Card 4 - Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative bg-white/55 border border-[#014A36]/12 rounded-[20px] p-5 lg:p-4 xl:p-5 min-h-[180px] lg:min-h-[155px] xl:min-h-[175px] flex flex-col justify-between text-left hover:-translate-y-0.5 hover:border-[#C8922B]/50 hover:shadow-[0_16px_40px_rgba(1,74,54,0.04)] transition-all duration-300 group overflow-hidden"
          >
            {/* Serif Background Index Number */}
            <span className="absolute top-4 right-6 text-[44px] lg:text-[40px] xl:text-[48px] font-serif font-bold text-[#014A36]/5 select-none leading-none z-0">
              04
            </span>

            <div className="relative z-10 flex items-start gap-4">
              {/* Icon Box */}
              <div className="w-10 h-10 lg:w-9 lg:h-9 rounded-[12px] bg-[#014A36] text-[#C8922B] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-5 h-5 lg:w-4.5 lg:h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.172-.435.789-.435.961 0l2.368 5.968a.5.5 0 0 0 .42.342l6.452.483c.47.035.659.621.312.923l-4.94 4.304a.5.5 0 0 0-.161.495l1.455 6.305c.106.46-.38.814-.783.568l-5.61-3.435a.5.5 0 0 0-.5 0l-5.61 3.435c-.403.246-.889-.108-.783-.568l1.455-6.305a.5.5 0 0 0-.161-.495l-4.94-4.304c-.347-.302-.158-.888.312-.923l6.452-.483a.5.5 0 0 0 .42-.342l2.368-5.968Z" />
                </svg>
              </div>

              {/* Title & Short Line */}
              <div className="flex flex-col">
                <h3 className="text-[22px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-bold text-[#014A36] leading-none">Experience</h3>
                <p className="text-[15px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] text-[#222222] font-bangla leading-[1.4] mt-2">
                  Crafting moments that become memories.
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="relative z-10 flex flex-wrap gap-2 mt-4 lg:mt-4.5">
              {["Activation", "Journey", "Field"].map((tag) => (
                <Link
                  key={tag}
                  href={tagHrefMap[tag] || "/services"}
                  className="border border-[#C8922B]/35 text-[#014A36] hover:bg-[#C8922B]/10 hover:text-[#C8922B] hover:border-[#C8922B] text-[11px] lg:text-[11px] xl:text-[12px] font-medium px-2.5 py-0.5 rounded-full bg-white/30 transition-all duration-300"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom Line */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-3 border-t border-[#014A36]/12 w-full">
          {/* Left Text */}
          <div className="flex items-start gap-2.5 select-text text-left max-w-xl">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8922B] mt-2 flex-shrink-0" />
            <p className="text-[15px] lg:text-[14px] xl:text-[16px] text-[#222222] leading-relaxed">
              We do not just do random, piece-by-piece tasks.<br />
              We design the entire <span className="text-[#014A36] font-bold">customer journey</span> from start to finish.
            </p>
          </div>

          {/* Right CTA Button */}
          <div className="flex select-none">
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-[#014A36] text-[#FFFDF8] hover:bg-[#002f24] hover:shadow-lg transition-all duration-300 font-semibold rounded-full px-5 py-2.5 text-[13px] lg:text-[14px] group border border-transparent hover:border-[#C8922B]/20"
            >
              <span>Explore all our services</span>
              <span className="ml-1.5 text-[#C8922B] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TouchpointSystemSection;
