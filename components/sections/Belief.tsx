"use client";

import React from "react";
import { motion } from "framer-motion";

export const Belief: React.FC = () => {
  const easeTransition = [0.16, 1, 0.3, 1] as [number, number, number, number];

  return (
    <section id="belief" className="py-24 md:py-32 bg-[#002f24] text-ivory relative overflow-hidden border-b border-ivory/10">
      {/* Background motif */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-gold/5 blur-[120px] pointer-events-none projector-flicker" />

      <div className="container-editorial relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Widescreen Statement */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
          <div className="flex items-center space-x-3 mb-2">
            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold font-mono">
              Manifesto // Scene 02
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] font-serif italic text-ivory">
            We do not make people notice.<br />
            We make people <span className="text-gold font-serif italic underline decoration-gold/30 underline-offset-4">remember</span>.
          </h2>
          <p className="text-xs md:text-sm text-ivory/50 leading-relaxed font-medium tracking-wide">
            In a digital market saturated with daily Facebook posts and automated Messenger answers, we build the visual and emotional loops that drive compound customer retention.
          </p>
        </div>

        {/* Right Column: Stacked Credit Cards & Subtitle Frame */}
        <div className="lg:col-span-7 space-y-6 overflow-hidden p-2">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: easeTransition }}
            className="bg-[#014A36]/30 border border-ivory/10 p-6 md:p-8 rounded-2xl relative overflow-hidden rotate-[-0.6deg] hover:rotate-0 hover:scale-[1.01] hover:border-gold/30 transition-all duration-300 shadow-lg"
          >
            {/* Viewfinder borders inside card */}
            <span className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-gold/30" />
            <span className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-gold/30" />
            <span className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-gold/30" />
            <span className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-gold/30" />

            <div className="absolute top-3 right-8 text-[7px] font-mono text-ivory/20 uppercase tracking-widest">
              FRAME 01 // CAM 1
            </div>

            <span className="text-[9px] uppercase tracking-widest text-gold font-bold font-mono block mb-1">Concept // 01</span>
            <h3 className="text-base font-bold mb-2">Attention is bought. Memory is earned.</h3>
            <p className="text-xs text-ivory/60 leading-relaxed font-medium">
              You can boost posts to reach screens. But if your replies are late and packaging is standard, the attention is wasted. We build loops that bring customers back organically.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeTransition }}
            className="bg-[#014A36]/30 border border-ivory/10 p-6 md:p-8 rounded-2xl relative overflow-hidden rotate-[0.5deg] hover:rotate-0 hover:scale-[1.01] hover:border-gold/30 transition-all duration-300 shadow-lg md:ml-4"
          >
            {/* Viewfinder borders inside card */}
            <span className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-gold/30" />
            <span className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-gold/30" />
            <span className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-gold/30" />
            <span className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-gold/30" />

            <div className="absolute top-3 right-8 text-[7px] font-mono text-ivory/20 uppercase tracking-widest">
              FRAME 02 // CAM 1
            </div>

            <span className="text-[9px] uppercase tracking-widest text-gold font-bold font-mono block mb-1">Concept // 02</span>
            <h3 className="text-base font-bold mb-2">A brand lives in customer memory.</h3>
            <p className="text-xs text-ivory/60 leading-relaxed font-medium">
              A business does not live in software folders. It lives in what a customer describes to their friends when unboxing your product. We shape that exact conversation.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeTransition }}
            className="bg-[#014A36]/30 border border-ivory/10 p-6 md:p-8 rounded-2xl relative overflow-hidden rotate-[-0.4deg] hover:rotate-0 hover:scale-[1.01] hover:border-gold/30 transition-all duration-300 shadow-lg md:ml-8"
          >
            {/* Viewfinder borders inside card */}
            <span className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-gold/30" />
            <span className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-gold/30" />
            <span className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-gold/30" />
            <span className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-gold/30" />

            <div className="absolute top-3 right-8 text-[7px] font-mono text-ivory/20 uppercase tracking-widest">
              FRAME 03 // CAM 1
            </div>

            <span className="text-[9px] uppercase tracking-widest text-gold font-bold font-mono block mb-1">Concept // 03</span>
            <h3 className="text-base font-bold mb-2">Connected experiences build brands.</h3>
            <p className="text-xs text-ivory/60 leading-relaxed font-medium">
              Your website checkout speed, social story, package scent, and customer support must form one seamless circle. If any link breaks, the memory breaks.
            </p>
          </motion.div>

          {/* Subtitled film frame quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: easeTransition }}
            className="bg-[#014A36]/50 border border-gold/20 p-8 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between text-ivory gap-6 relative overflow-hidden rotate-[0.3deg] hover:rotate-0 transition-all duration-300 shadow-xl"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-full pointer-events-none" />
            <div className="space-y-2">
              <span className="text-[8px] uppercase tracking-widest text-gold font-bold block font-mono">Dialogue // Subtitle</span>
              <h3 className="text-xl md:text-2xl font-extrabold bangla-text leading-tight tracking-wide text-ivory">
                মনে থাকাটাই আসল জায়গা।
              </h3>
              <p className="text-xs text-ivory/70 leading-relaxed font-medium max-w-md">
                In Dhaka, you don't grow by shouting louder. You grow by staying inside their minds.
              </p>
            </div>
            <span className="text-xl font-serif hidden md:block text-gold">“</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
export default Belief;
