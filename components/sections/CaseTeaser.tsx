"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";

interface Scene {
  id: string;
  number: string;
  setting: string;
  description: string;
  character: string;
  parenthetical: string;
  dialogue: string;
  action: string;
  insightTitle: string;
  insightDesc: string;
  insightType: "problem" | "missed" | "idea" | "outcome";
}

const scenes: Scene[] = [
  {
    id: "scene-1",
    number: "SCENE 01",
    setting: "INT. CLOTHING STORE - BANANI - NIGHT",
    description: "Row after row of identical clothing racks under sterile blue-light LEDs. A customer scrolls through their phone. Dozens of Banani Facebook/Instagram pages display the exact same grid.",
    character: "CUSTOMER",
    parenthetical: "sighs, looking at the feed",
    dialogue: "They all look the same. Same templates. Same captions. Why does it feel like shopping in a warehouse?",
    action: "CUT TO RED SIGNAL.",
    insightTitle: "01 / THE TEMPLATE TRAP",
    insightDesc: "Dozens of Banani pages post similar catalog clothing grids. Pricing pressure is intense, visual recall is zero, and customer acquisition costs keep rising.",
    insightType: "problem"
  },
  {
    id: "scene-2",
    number: "SCENE 02",
    setting: "INT. CUSTOMER'S APARTMENT - TWO DAYS LATER",
    description: "A delivery rider hands over a package. It is wrapped in a standard thin plastic courier bag, sealed with cheap adhesive tape. A generic thermal receipt is stapled to the side.",
    character: "CUSTOMER",
    parenthetical: "tearing open the plastic",
    dialogue: "Oh, it's here. I guess.",
    action: "The plastic wrapper is tossed straight into the bin. The excitement of purchase fades immediately.",
    insightTitle: "02 / THE MISSED MEMORY",
    insightDesc: "Packages arrive in standard plastic bags with generic printed receipts. The courier interaction feels cheap, wasting the emotional peak of the purchase.",
    insightType: "missed"
  },
  {
    id: "scene-3",
    number: "SCENE 03",
    setting: "INT. BISHORGO WORKSHOP - DAY",
    description: "A designer carefully places a rigid forest-green box on the cedar table. They spray a mist of custom-infused cardamom scent over the tissue paper. A handwritten welcome letter is placed on top.",
    character: "DESIGNER",
    parenthetical: "sealing the gold foil sticker",
    dialogue: "We don't sell fabric. We sell the anticipation of the festival.",
    action: "FADE IN GOLD SPOTLIGHT.",
    insightTitle: "03 / THE EXPERIENCE IDEA",
    insightDesc: "Replace flat grids with premium editorials. Redesign packaging into a rigid box infused with a signature scent, including a handwritten founder note.",
    insightType: "idea"
  },
  {
    id: "scene-4",
    number: "SCENE 04",
    setting: "EXT. BANANI STREET - MORNING",
    description: "A customer steps out of their building. They hold the premium box in their hands. They pause, take out their phone, and record an unboxing story for Instagram.",
    character: "VOICEOVER",
    parenthetical: "echoing over the soundtrack",
    dialogue: "A memory is a loop. Once it starts, it builds itself.",
    action: "FADE OUT.",
    insightTitle: "04 / EXPECTED OUTCOME",
    insightDesc: "A 40% increase in average order value. Organic unboxing stories shared on Instagram replace 50% of the brand's paid facebook marketing budget.",
    insightType: "outcome"
  }
];

export const CaseTeaser: React.FC = () => {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);

  const activeScene = scenes[activeSceneIndex];

  const typeStyles = {
    problem: {
      accent: "text-[#B94A48]",
      border: "border-[#B94A48]/30",
      bg: "bg-[#B94A48]/5",
      dot: "bg-[#B94A48]"
    },
    missed: {
      accent: "text-gold",
      border: "border-gold/30",
      bg: "bg-gold/5",
      dot: "bg-gold"
    },
    idea: {
      accent: "text-soft-gold",
      border: "border-gold/20",
      bg: "bg-forest/25",
      dot: "bg-gold"
    },
    outcome: {
      accent: "text-success",
      border: "border-success/30",
      bg: "bg-success/5",
      dot: "bg-success"
    }
  };

  const activeStyle = typeStyles[activeScene.insightType];

  return (
    <section className="relative w-full min-h-fit bg-[#014A36] text-[#FFFDF8] py-24 md:py-32 lg:py-36 overflow-visible flex items-center border-t border-white/10 drafting-board">
      {/* Editorial Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="container-editorial h-full border-l border-r border-line/30 relative">
          <div className="absolute top-0 bottom-0 left-1/3 border-l border-line/30" />
          <div className="absolute top-0 bottom-0 left-2/3 border-l border-line/30" />
        </div>
      </div>

      <div className="container-editorial relative z-10 space-y-8 lg:space-y-4 xl:space-y-6 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-line/10 pb-6 lg:pb-3 xl:pb-5 gap-4">
          <div className="space-y-2 lg:space-y-1">
            <div className="flex items-center space-x-2">
              <span className="memory-dot" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold">
                BISHORGO REIMAGINES™
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl xl:text-[44px] font-serif font-extrabold tracking-tight leading-tight">
              A Dhaka clothing store,<br />reimagined as an experience.
            </h2>
          </div>
          <div className="flex-shrink-0">
            <Button
              href="/experience-lab#dhaka-clothing-reimagined"
              variant="secondary"
              className="border-gold text-gold hover:bg-gold hover:text-forest h-11 lg:h-9 xl:h-10 text-xs uppercase tracking-wider px-6"
            >
              Read Full Reimagining
            </Button>
          </div>
        </div>

        {/* Cinematic Script Binder Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 xl:gap-8 items-start w-full">
          {/* Left Column: Scene Selector (Interactive Timeline) */}
          <div className="lg:col-span-4 space-y-3 lg:space-y-2 xl:space-y-4">
            <span className="text-[10px] uppercase tracking-widest text-ivory/40 font-mono block mb-1">
              SELECT SCENE CHAPTER
            </span>
            <div className="relative">
              <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 gap-2 scrollbar-none">
                {scenes.map((scene, index) => (
                  <button
                    key={scene.id}
                    onClick={() => setActiveSceneIndex(index)}
                    className={`flex-shrink-0 lg:w-full text-left px-4 py-3 lg:px-3 lg:py-2 xl:px-4 xl:py-3.5 rounded-xl border font-mono transition-bezier text-xs lg:text-[11px] xl:text-xs flex items-center justify-between gap-3 ${
                      activeSceneIndex === index
                        ? "bg-[#002f24] border-gold text-gold shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
                        : "bg-transparent border-line/10 text-ivory/50 hover:text-ivory/80 hover:border-line/35"
                    }`}
                  >
                    <span className="truncate">{scene.number}: {scene.insightTitle.split(" / ")[1]}</span>
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      activeSceneIndex === index ? "bg-gold animate-ping" : "bg-ivory/20"
                    }`} />
                  </button>
                ))}
              </div>
              {/* Fade overlay indicating more items on mobile */}
              <div className="absolute right-0 top-0 bottom-2 w-12 bg-gradient-to-l from-[#014A36] to-transparent pointer-events-none lg:hidden" />
            </div>

            {/* Bangla quote block */}
            <div className="bg-[#002f24] border border-line/10 p-5 lg:p-3.5 xl:p-5 rounded-2xl space-y-1.5 mt-4 hidden lg:block">
              <p className="text-xs xl:text-sm font-medium text-gold bangla-text italic leading-relaxed">
                “কাপড় তো সবাই বিক্রি করে। আমরা বিক্রি করতে চেয়েছিলাম উৎসবের আনন্দ আর আভিজাত্য।”
              </p>
              <span className="text-[9px] text-ivory/40 uppercase tracking-widest font-medium block font-mono">
                Bishorgo Case Study — Memory Loop Design
              </span>
            </div>
          </div>

          {/* Right Column: The Screenplay Page (Bound binder style) */}
          <div className="lg:col-span-8 relative">
            {/* The Binder Page */}
            <div className="paper-texture border-2 border-gold/30 rounded-2xl shadow-2xl p-6 lg:p-5 xl:p-10 relative overflow-hidden min-h-[460px] lg:min-h-[380px] xl:min-h-[420px] 2xl:min-h-[450px] text-[#014A36]">
              
              {/* Binder Brass Fasteners (Brads) on the Left Margin */}
              <div className="absolute left-3 top-8 flex flex-col space-y-16 lg:space-y-12 xl:space-y-16 pointer-events-none opacity-80">
                <div className="w-3 h-3 rounded-full bg-gradient-to-b from-[#E7C77A] to-[#A87318] border border-gold/40 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.5)] z-20" />
                <div className="w-3 h-3 rounded-full bg-gradient-to-b from-[#E7C77A] to-[#A87318] border border-gold/40 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.5)] z-20" />
                <div className="w-3 h-3 rounded-full bg-gradient-to-b from-[#E7C77A] to-[#A87318] border border-gold/40 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.5)] z-20" />
              </div>

              {/* Watermark Script Slate Header */}
              <div className="flex justify-between items-center border-b border-gold/15 pb-4 lg:pb-2 xl:pb-4 mb-6 lg:mb-3 xl:mb-5 text-[10px] lg:text-[9px] xl:text-[11px] font-mono text-[#014A36]/40">
                <span>DRAFT: REIMAGINING #01</span>
                <span>STATUS: FINAL SHOOTING SCRIPT</span>
                <span>{activeScene.number}</span>
              </div>

              {/* Animated Screenplay Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScene.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  className="font-mono text-xs xl:text-sm leading-relaxed text-[#014A36]/90 space-y-5 lg:space-y-3 xl:space-y-5 pl-4 sm:pl-8 border-l border-gold/15"
                >
                  {/* Setting heading */}
                  <h3 className="font-bold text-[#014A36] tracking-wide uppercase">
                    {activeScene.setting}
                  </h3>

                  {/* Scene Description (Action lines) */}
                  <p className="text-[#014A36]/75 font-medium leading-relaxed">
                    {activeScene.description}
                  </p>

                  {/* Dialogue Block */}
                  <div className="max-w-[420px] mx-auto text-center space-y-0.5 py-3 lg:py-1 xl:py-3">
                    <h4 className="font-bold text-[#014A36] uppercase tracking-wider text-xs lg:text-[11px] xl:text-xs">
                      {activeScene.character}
                    </h4>
                    <p className="text-[10px] text-[#014A36]/50 italic font-medium">
                      ({activeScene.parenthetical})
                    </p>
                    <p className="text-[#A87318] italic font-bold pt-1.5 text-xs lg:text-xs xl:text-sm leading-relaxed">
                      &ldquo;{activeScene.dialogue}&rdquo;
                    </p>
                  </div>

                  {/* Camera Cue Action */}
                  <p className="text-[#014A36] font-bold uppercase tracking-wider text-[10px] lg:text-[9px] xl:text-[10px]">
                    {activeScene.action}
                  </p>

                  {/* Diagnostic Insight Board */}
                  <div className={`mt-6 lg:mt-3 xl:mt-6 p-4 lg:p-3 xl:p-4 rounded-xl border ${activeStyle.bg} ${activeStyle.border} transition-colors duration-500`}>
                    <div className="flex items-center space-x-2 mb-2 lg:mb-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${activeStyle.dot}`} />
                      <span className={`text-[10px] lg:text-[9px] xl:text-[10px] uppercase tracking-widest font-bold ${activeStyle.accent}`}>
                        Insight: {activeScene.insightTitle}
                      </span>
                    </div>
                    <p className="text-xs lg:text-[11px] xl:text-xs text-[#014A36]/85 leading-relaxed font-medium font-sans">
                      {activeScene.insightDesc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Bangla quote block (mobile only) */}
            <div className="bg-[#002f24] border border-line/10 p-5 rounded-2xl space-y-2 mt-4 lg:hidden">
              <p className="text-xs font-medium text-gold bangla-text italic leading-relaxed text-center">
                “কাপড় তো সবাই বিক্রি করে। আমরা বিক্রি করতে চেয়েছিলাম উৎসবের আনন্দ আর আভিজাত্য।”
              </p>
              <span className="text-[9px] text-ivory/40 uppercase tracking-widest font-medium block text-center font-mono">
                Bishorgo Case Study — Memory Loop Design
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseTeaser;
