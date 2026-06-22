"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

interface CreditItem {
  role: string;
  name: string;
}

const creditsList: CreditItem[] = [
  { role: "PRODUCTION STUDIO", name: "BISHORGO EXPERIENCE" },
  { role: "STRATEGY DIRECTOR", name: "MD. SAKIB RAHMAN" },
  { role: "CINEMATOGRAPHY DESIGN", name: "EXPERIENTIAL BRANDING" },
  { role: "SCREENPLAY INTERACTIVE", name: "TAILWIND & REACT ENGINE" },
  { role: "DIALOGUE & WRITING", name: "EMOTIONAL COPYWRITING" },
  { role: "EXPERIENCE ARCHITECT", name: "TOUCHPOINT SYSTEM" },
  { role: "PRODUCTION DIAGNOSTIC", name: "EXPERIENCE AUDIT v2.0" },
  { role: "FILMING LOCATION", name: "DHAKA, BANGLADESH" }
];

export const FinalCTA: React.FC = () => {
  // Duplicate list to ensure seamless infinite looping scroll
  const scrollingCredits = [...creditsList, ...creditsList];

  return (
    <section className="relative w-full lg:h-screen lg:max-h-screen bg-[#002f24] text-ivory pt-[76px] lg:pt-[96px] pb-10 lg:pb-0 overflow-hidden flex items-center border-t border-line/10 drafting-board">
      
      {/* Cinematic Widescreen Letterbox Bars */}
      <div className="absolute top-0 left-0 right-0 h-8 lg:h-6 xl:h-8 bg-[#014A36] z-20 border-b-2 border-dashed border-gold/15" />
      <div className="absolute bottom-0 left-0 right-0 h-8 lg:h-6 xl:h-8 bg-[#014A36] z-20 border-t-2 border-dashed border-gold/15" />

      {/* Background motif glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold/5 blur-[120px] pointer-events-none projector-flicker" />

      <div className="container-editorial relative z-10 flex flex-col items-center justify-center space-y-10 lg:space-y-4 xl:space-y-8 w-full">
        
        {/* Cinematic "THE END" Label */}
        <div className="text-center space-y-1">
          <span className="text-[9px] uppercase tracking-[0.4em] text-gold/60 font-bold block">
            SCENE 12 / THE END
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-gold mx-auto animate-pulse" />
        </div>

        {/* Rolling Credits Viewport */}
        <div 
          className="w-full max-w-lg h-36 lg:h-26 xl:h-32 overflow-hidden relative"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)"
          }}
        >
          <motion.div
            animate={{ y: [0, -280] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 18
            }}
            className="space-y-4 lg:space-y-2.5 xl:space-y-4 pt-4"
          >
            {scrollingCredits.map((item, index) => (
              <div 
                key={`${item.role}-${index}`}
                className="grid grid-cols-2 gap-4 font-mono text-[10px] lg:text-[9px] xl:text-[10px] leading-none tracking-wider text-ivory/60"
              >
                <div className="text-right text-gold/80 font-bold pr-2">{item.role}</div>
                <div className="text-left font-medium border-l border-line/10 pl-4 uppercase">{item.name}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Headline & Spotlight Cast-Call */}
        <div className="max-w-3xl text-center space-y-6 lg:space-y-3.5 xl:space-y-6 flex flex-col items-center pt-6 lg:pt-3 xl:pt-6 border-t border-line/10 w-full">
          <h2 className="text-2xl lg:text-2xl xl:text-3.5xl 2xl:text-[40px] font-serif font-extrabold tracking-tight leading-tight max-w-2xl text-white">
            Show us your business. We will show you where the experience can grow.
          </h2>

          <p className="text-xs xl:text-sm text-ivory/60 max-w-xl font-medium">
            Whether you need a new digital platform, a brand redesign, or a complete customer journey overhaul, we begin with a diagnostic audit.
          </p>

          {/* Action Buttons styled like cinematic tickets / cards */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-4 lg:pt-2 xl:pt-4">
            <Button
              href="/experience-audit"
              variant="primary"
              className="bg-gold border-gold text-charcoal hover:bg-transparent hover:text-gold hover:border-gold transition-bezier h-11 lg:h-9 xl:h-10 text-xs uppercase tracking-wider px-6 lg:px-5 xl:px-8"
            >
              Book an Experience Audit
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              className="border-line/40 text-ivory hover:border-gold hover:text-gold transition-bezier h-11 lg:h-9 xl:h-10 text-xs uppercase tracking-wider px-6 lg:px-5 xl:px-8"
            >
              Start a Conversation
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
