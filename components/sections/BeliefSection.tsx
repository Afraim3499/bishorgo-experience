"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Fingerprint, Sparkles } from "lucide-react";

export const BeliefSection: React.FC = () => {
  return (
    <section className="relative w-full lg:h-screen lg:max-h-screen bg-[#002B20] text-[#F8F5EF] pt-[96px] lg:pt-[96px] pb-10 lg:pb-0 overflow-hidden select-text flex items-center">
      
      {/* Decorative Gold Memory Dots */}
      <div className="absolute top-[25%] left-[45%] w-2 h-2 rounded-full bg-[#C8922B] opacity-60 hidden lg:block" />
      <div className="absolute bottom-[20%] left-[42%] w-2 h-2 rounded-full bg-[#C8922B] opacity-60 hidden lg:block" />

      {/* SVG Background Logo Wing Watermark (Subtle left-center backdrop) */}
      <div className="absolute top-[10%] left-[-10%] md:left-[-5%] w-[500px] h-[500px] pointer-events-none opacity-[0.05] z-0 select-none">
        <svg className="w-full h-full text-[#C8922B]" viewBox="0 0 500 500" fill="currentColor">
          <path d="M 133 55 L 135 57 L 135 67 L 137 70 L 140 90 L 151 120 L 160 137 L 181 165 L 199 183 L 225 202 L 247 214 L 262 219 L 266 222 L 281 226 L 282 228 L 256 236 L 228 249 L 199 270 L 175 295 L 163 312 L 147 344 L 132 398 L 133 401 L 131 404 L 132 408 L 172 376 L 272 308 L 285 295 L 293 284 L 301 268 L 300 267 L 304 258 L 308 238 L 308 219 L 301 190 L 293 173 L 276 152 L 245 129 L 235 124 L 231 120 L 158 74 Z" />
        </svg>
      </div>

      <div className="w-full max-w-[1320px] mx-auto px-5 md:px-[32px] lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] items-center gap-[40px] md:gap-[50px] lg:gap-[60px] xl:gap-[80px] w-full">
          
          {/* Left Column Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start text-left"
          >
            {/* Small Label */}
            <div className="flex flex-col items-start mb-3 lg:mb-4">
              <span className="text-[15px] lg:text-[16px] font-medium tracking-[0.08em] text-[#C8922B] font-bangla">
                আমাদের বিশ্বাস
              </span>
              <div className="w-[40px] lg:w-[48px] h-[2.5px] bg-[#C8922B] mt-1" />
            </div>

            {/* Bangla Headline */}
            <h2 className="bangla-heading text-[34px] sm:text-[40px] lg:text-[36px] xl:text-[44px] 2xl:text-[52px] font-bold tracking-tight leading-[1.1] text-[#F8F5EF] select-text">
              আমরা শুধু<br />
              নজরে আনতে চাই না,<br />
              আমরা <span className="text-[#C8922B]">মনে থাকার</span><br />
              মতো <span className="text-[#C8922B]">অভিজ্ঞতা</span><br />
              তৈরি করি।
            </h2>

            {/* Supporting Line */}
            <p className="bangla-text text-[17px] sm:text-[19px] lg:text-[17px] xl:text-[19px] text-ivory/80 leading-[1.55] max-w-[500px] mt-4 lg:mt-5 select-text">
              বিজ্ঞাপন মনোযোগ পেতে পারে,<br />
              কিন্তু অভিজ্ঞতাই মানুষের মনে জায়গা করে নেয়।
            </p>

            {/* Quote Block */}
            <div className="flex items-start gap-3 mt-4 lg:mt-5 max-w-[500px] select-text">
              {/* Quote Mark */}
              <span className="text-[#C8922B] text-[44px] lg:text-[48px] font-serif leading-[0.6] select-none">“</span>
              
              {/* Vertical line divider */}
              <div className="w-[1px] h-9 bg-[#C8922B]/40 self-stretch mt-1" />
              
              {/* Quote Text */}
              <p className="bangla-text text-[15px] lg:text-[16px] xl:text-[17px] leading-relaxed text-[#F8F5EF] font-medium tracking-wide">
                মানুষ সব বিজ্ঞাপন মনে রাখে না।<br />
                কিন্তু একটা ভালো <span className="text-[#C8922B] font-semibold">experience</span> মনে থেকে যায়।
              </p>
            </div>
          </motion.div>

          {/* Right Column Belief Points */}
          <div className="flex flex-col w-full">
            
            {/* Point 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-start gap-4 lg:gap-5 pb-4 lg:pb-5"
            >
              {/* Icon Circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-14 h-14 rounded-full border border-[#C8922B]/45 flex items-center justify-center flex-shrink-0"
              >
                <User className="w-6 h-6 text-[#C8922B] stroke-[1.5]" />
              </motion.div>
              
              {/* Content */}
              <div className="flex flex-col text-left">
                <h3 className="bangla-heading text-[20px] sm:text-[22px] lg:text-[20px] xl:text-[24px] font-bold text-[#F8F5EF] leading-[1.25] select-text">
                  মানুষ <span className="text-[#C8922B]">যুক্তি</span> দিয়ে কেনে,<br />
                  কিন্তু <span className="text-[#C8922B]">অনুভূতি</span> দিয়ে <span className="text-[#C8922B]">মনে রাখে</span>।
                </h3>
                <p className="bangla-text text-[14px] sm:text-[15px] lg:text-[14px] xl:text-[15px] text-ivory/75 leading-[1.6] mt-2 select-text">
                  ফিচার, অফার, ডিসকাউন্ট—সবকিছু একসময় ভুলে যায়।<br />
                  কিন্তু কেমন অনুভব করেছিল, সেটা মানুষ সহজে ভুলে না।
                </p>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-[#C8922B]/35" />

            {/* Point 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-start gap-4 lg:gap-5 py-4 lg:py-5"
            >
              {/* Icon Circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-14 h-14 rounded-full border border-[#C8922B]/45 flex items-center justify-center flex-shrink-0"
              >
                <Fingerprint className="w-6 h-6 text-[#C8922B] stroke-[1.5]" />
              </motion.div>
              
              {/* Content */}
              <div className="flex flex-col text-left">
                <h3 className="bangla-heading text-[20px] sm:text-[22px] lg:text-[20px] xl:text-[24px] font-bold text-[#F8F5EF] leading-[1.25] select-text">
                  ব্র্যান্ডের আসল <span className="text-[#C8922B]">পরিচয়</span><br />
                  তার <span className="text-[#C8922B]">অভিজ্ঞতায়</span>।
                </h3>
                <p className="bangla-text text-[14px] sm:text-[15px] lg:text-[14px] xl:text-[15px] text-ivory/75 leading-[1.6] mt-2 select-text">
                  লোগো, কালার, পোস্ট—এসব পরিচয় তৈরি করে।<br />
                  কিন্তু অভিজ্ঞতাই সেই পরিচয়কে স্মৃতিতে পরিণত করে।
                </p>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-[#C8922B]/35" />

            {/* Point 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-start gap-4 lg:gap-5 pt-4 lg:pt-5"
            >
              {/* Icon Circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-14 h-14 rounded-full border border-[#C8922B]/45 flex items-center justify-center flex-shrink-0"
              >
                <Sparkles className="w-6 h-6 text-[#C8922B] stroke-[1.5]" />
              </motion.div>
              
              {/* Content */}
              <div className="flex flex-col text-left">
                <h3 className="bangla-heading text-[20px] sm:text-[22px] lg:text-[20px] xl:text-[24px] font-bold text-[#F8F5EF] leading-[1.25] select-text">
                  প্রতিটি <span className="text-[#C8922B]">সংযোগই</span><br />
                  <span className="text-[#C8922B]">স্মৃতি</span> তৈরির <span className="text-[#C8922B]">সুযোগ</span>।
                </h3>
                <p className="bangla-text text-[14px] sm:text-[15px] lg:text-[14px] xl:text-[15px] text-ivory/75 leading-[1.6] mt-2 select-text">
                  আপনার গ্রাহক যতবার আপনার সাথে ইন্টারঅ্যাক্ট করে,<br />
                  ততবার আপনার ব্র্যান্ড মনে থাকার একটি নতুন সুযোগ তৈরি হয়।
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default BeliefSection;
