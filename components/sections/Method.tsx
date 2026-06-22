"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Target, PenTool, Rocket, LineChart } from "lucide-react";

interface StepItem {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Method: React.FC = () => {
  const steps: StepItem[] = [
    {
      number: "01",
      title: "Discover",
      description: "Where the experience is breaking.",
      icon: <Search className="w-5 h-5 xl:w-6 xl:h-6" />,
    },
    {
      number: "02",
      title: "Define",
      description: "What the brand should make people feel.",
      icon: <Target className="w-5 h-5 xl:w-6 xl:h-6" />,
    },
    {
      number: "03",
      title: "Design",
      description: "The touchpoints, content, visuals, and journey.",
      icon: <PenTool className="w-5 h-5 xl:w-6 xl:h-6" />,
    },
    {
      number: "04",
      title: "Deliver",
      description: "The website, campaign, activation, or brand system.",
      icon: <Rocket className="w-5 h-5 xl:w-6 xl:h-6" />,
    },
    {
      number: "05",
      title: "Deepen",
      description: "Improve through feedback, behavior, and memory.",
      icon: <LineChart className="w-5 h-5 xl:w-6 xl:h-6" />,
    },
  ];

  return (
    <section id="method" className="relative w-full min-h-fit bg-warm-white text-charcoal py-24 md:py-32 lg:py-36 overflow-visible border-b border-[#014A36]/10 drafting-board">
      
      {/* Background Watermark logo (very low opacity gold) */}
      <div className="absolute top-12 right-0 w-[320px] h-[320px] lg:w-[480px] lg:h-[480px] pointer-events-none opacity-[0.04] z-0">
        <svg className="w-full h-full" viewBox="0 0 600 600" fill="none">
          <g transform="translate(100, 50) scale(1.15)">
            <path
              d="M 133 55 L 135 57 L 135 67 L 137 70 L 140 90 L 151 120 L 160 137 L 181 165 L 199 183 L 225 202 L 247 214 L 262 219 L 266 222 L 281 226 L 282 228 L 256 236 L 228 249 L 199 270 L 175 295 L 163 312 L 147 344 L 132 398 L 133 401 L 131 404 L 132 408 L 172 376 L 272 308 L 285 295 L 293 284 L 301 268 L 300 267 L 304 258 L 308 238 L 308 219 L 301 190 L 293 173 L 276 152 L 245 129 L 235 124 L 231 120 L 158 74 Z"
              fill="#C8922B"
              stroke="#C8922B"
              strokeWidth="2"
            />
            <path
              d="M 143 152 L 143 306 L 218 228 Z"
              fill="#C8922B"
              stroke="#C8922B"
              strokeWidth="2"
            />
            <circle cx="361.5" cy="177.5" r="30.5" fill="#C8922B" stroke="#C8922B" strokeWidth="2" />
            <circle cx="361.5" cy="285.5" r="30.5" fill="#C8922B" stroke="#C8922B" strokeWidth="2" />
          </g>
        </svg>
      </div>

      <div className="w-full max-w-[1320px] mx-auto px-5 lg:px-10 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20 text-left">
          <div className="flex items-center space-x-3 mb-3">
            <span className="memory-dot" />
            <span className="text-xs uppercase tracking-[0.25em] text-forest font-bold font-mono">
              OUR METHOD
            </span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] xl:text-[44px] font-extrabold tracking-tight leading-[1.1] font-serif italic text-forest select-text">
            Attention থেকে memory পর্যন্ত,<br />
            আমরা পুরো <span className="not-italic text-gold">journey design</span> করি।
          </h2>
          <p className="text-sm md:text-base text-charcoal/80 mt-4 font-medium max-w-2xl select-text leading-relaxed">
            Bishorgo Method helps find where your brand is being forgotten, then turns those weak moments into stronger customer experiences.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative w-full mb-16 lg:mb-20">
          
          {/* Connector Line (Desktop Only) */}
          <div className="absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-gold/15 hidden lg:block z-0">
            {/* Dots between steps */}
            <div className="absolute top-1/2 left-[25%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gold border border-warm-white" />
            <div className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gold border border-warm-white" />
            <div className="absolute top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gold border border-warm-white" />
          </div>

          {/* Grid Layout for Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-6 xl:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Circle Badge */}
                <div className="w-14 h-14 xl:w-16 xl:h-16 rounded-full bg-[#002f24] border-2 border-gold/45 text-gold flex items-center justify-center flex-shrink-0 mb-4 shadow-[0_4px_12px_rgba(1,74,54,0.12)] group-hover:scale-105 group-hover:border-gold transition-all duration-300 z-10 relative">
                  {step.icon}
                </div>

                {/* Number */}
                <span className="text-xs font-mono font-bold text-gold/60 tracking-widest uppercase mb-1">
                  {step.number}
                </span>

                {/* Title */}
                <h3 className="text-lg xl:text-xl font-bold text-forest font-serif italic mb-2 leading-none">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs xl:text-sm text-charcoal/70 leading-relaxed font-medium max-w-[200px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* CTA Button */}
        <div className="flex justify-center select-none">
          <Link
            href="/method"
            className="inline-flex items-center justify-center bg-transparent border-2 border-gold/30 hover:border-gold text-[#014A36] hover:bg-gold/5 transition-all duration-300 font-semibold rounded-full px-8 py-3.5 text-sm group"
          >
            <span>Explore the full method</span>
            <span className="ml-2 text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Method;
