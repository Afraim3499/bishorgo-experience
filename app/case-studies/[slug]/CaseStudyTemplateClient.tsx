"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, ShieldAlert, CheckCircle, Lightbulb, Compass, Layout, HelpCircle } from "lucide-react";
import type { CaseStudyBlueprint } from "@/data/caseStudies";

interface Props {
  caseStudy: CaseStudyBlueprint;
}

export const CaseStudyTemplateClient: React.FC<Props> = ({ caseStudy }) => {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);

  const activeScene = caseStudy.scenes[activeSceneIndex] || caseStudy.scenes[0];

  const typeStyles = {
    problem: {
      accent: "text-[#B94A48]",
      border: "border-[#B94A48]/30",
      bg: "bg-[#B94A48]/5",
      dot: "bg-[#B94A48]"
    },
    missed: {
      accent: "text-[#C8922B]",
      border: "border-[#C8922B]/30",
      bg: "bg-[#C8922B]/5",
      dot: "bg-[#C8922B]"
    },
    idea: {
      accent: "text-[#C8922B]",
      border: "border-white/10",
      bg: "bg-[#014A36]/10",
      dot: "bg-[#C8922B]"
    },
    outcome: {
      accent: "text-emerald-600",
      border: "border-emerald-600/35",
      bg: "bg-emerald-600/5",
      dot: "bg-emerald-600"
    }
  };

  const activeStyle = typeStyles[activeScene?.insightType || "idea"];

  return (
    <div className="bg-[#F8F5EF] text-[#222222] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-[#014A36] text-[#FFFDF8] pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.03] pointer-events-none select-none">
          <svg className="w-full h-full fill-white" viewBox="0 0 600 600">
            <path d="M 133 55 L 135 57 L 135 67 L 137 70 L 140 90 L 151 120 L 160 137 L 181 165 L 199 183 L 225 202 L 247 214 L 262 219 L 266 222 L 281 226 L 282 228 L 256 236 L 228 249 L 199 270 L 175 295 L 163 312 L 147 344 L 132 398 L 133 401 L 131 404 L 132 408 L 172 376 L 272 308 L 285 295 L 293 284 L 301 268 L 300 267 L 304 258 L 308 238 L 308 219 L 301 190 L 293 173 L 276 152 L 245 129 L 235 124 L 231 120 L 158 74 Z" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C8922B]/8 blur-[90px] pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-5 md:px-10 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-[0.25em] text-[#C8922B] uppercase">
            BISHORGO CASE STUDY
          </span>
          <h1 className="text-4xl md:text-6.5xl lg:text-7.5xl font-extrabold tracking-tight max-w-5xl mx-auto leading-tight">
            {caseStudy.title}
          </h1>
          <p className="text-base md:text-xl text-[#FFFDF8]/80 leading-relaxed font-medium max-w-3xl mx-auto">
            {caseStudy.subtitle}
          </p>
        </div>
      </section>

      {/* Screenplay Stage */}
      {activeScene && (
        <section className="relative w-full py-20 bg-[#014A36] text-[#FFFDF8] border-t border-white/5 overflow-hidden">
          <div className="max-w-[1180px] mx-auto px-5 md:px-10 space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 gap-4">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#C8922B] font-bold block mb-1">
                  INTERACTIVE SCREENPLAY
                </span>
                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">
                  Step into the customer journey
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Selector */}
              <div className="lg:col-span-4 space-y-4">
                <span className="text-[10px] uppercase tracking-widest text-[#FFFDF8]/45 font-mono block">
                  SCENE INDEX
                </span>
                <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 gap-2 scrollbar-none">
                  {caseStudy.scenes.map((scene, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSceneIndex(index)}
                      className={`flex-shrink-0 lg:w-full text-left px-4 py-3 rounded-xl border font-mono transition-all text-xs flex items-center justify-between gap-3 ${
                        activeSceneIndex === index
                          ? "bg-[#002f24] border-[#C8922B] text-[#C8922B] shadow-lg"
                          : "bg-transparent border-white/10 text-white/50 hover:text-white/80 hover:border-white/30"
                      }`}
                    >
                      <span className="truncate">{scene.number}: {scene.insightTitle}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Binder Screenplay Sheet */}
              <div className="lg:col-span-8 relative">
                <div className="bg-[#FFFDF8] border-2 border-[#C8922B]/35 rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden min-h-[380px] text-[#014A36] font-mono">
                  {/* binder fasteners */}
                  <div className="absolute left-3 top-8 flex flex-col space-y-16 pointer-events-none opacity-80">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-b from-[#E7C77A] to-[#A87318] border border-gold/40 shadow-md" />
                    <div className="w-3 h-3 rounded-full bg-gradient-to-b from-[#E7C77A] to-[#A87318] border border-gold/40 shadow-md" />
                    <div className="w-3 h-3 rounded-full bg-gradient-to-b from-[#E7C77A] to-[#A87318] border border-gold/40 shadow-md" />
                  </div>

                  <div className="flex justify-between items-center border-b border-[#014A36]/10 pb-4 mb-6 text-[10px] text-[#014A36]/40">
                    <span>CASE STUDY SCRIPT</span>
                    <span>{activeScene.number}</span>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSceneIndex}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-5 pl-4 sm:pl-8 border-l border-[#C8922B]/20"
                    >
                      <h3 className="font-bold uppercase tracking-wider text-[13px]">
                        {activeScene.setting}
                      </h3>
                      <p className="text-[#014A36]/75 font-medium leading-relaxed">
                        {activeScene.description}
                      </p>
                      
                      <div className="max-w-[420px] mx-auto text-center space-y-0.5 py-4">
                        <h4 className="font-bold uppercase tracking-wider text-xs">
                          {activeScene.character}
                        </h4>
                        <p className="text-[10px] text-[#014A36]/50 italic">
                          ({activeScene.parenthetical})
                        </p>
                        <p className="text-[#A87318] italic font-bold pt-2 text-sm leading-relaxed">
                          &ldquo;{activeScene.dialogue}&rdquo;
                        </p>
                      </div>

                      <p className="text-[#014A36] font-bold uppercase tracking-wider text-[10px]">
                        {activeScene.action}
                      </p>

                      <div className={`mt-6 p-4 rounded-xl border ${activeStyle.bg} ${activeStyle.border}`}>
                        <span className={`text-[10px] uppercase tracking-widest font-bold block mb-1 ${activeStyle.accent}`}>
                          Insight: {activeScene.insightTitle}
                        </span>
                        <p className="text-xs text-[#014A36]/85 leading-relaxed font-sans font-medium">
                          {activeScene.insightDesc}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Structured Details Matrix */}
      <section className="py-24 md:py-32 bg-[#F8F5EF] text-[#222222]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10 space-y-16">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#014A36] font-bold block mb-2 font-mono">
              CASE PARAMETERS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#014A36]">
              Operational & Strategic Diagnosis
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-[#014A36]/10 p-8 rounded-3xl space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#014A36]/5 flex items-center justify-center">
                <Compass size={18} className="text-[#C8922B]" />
              </div>
              <h3 className="text-lg font-bold text-[#014A36]">Business Context</h3>
              <p className="text-sm text-[#222222]/70 leading-relaxed font-medium">{caseStudy.context}</p>
            </div>

            <div className="bg-white border border-[#014A36]/10 p-8 rounded-3xl space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#B94A48]/5 flex items-center justify-center">
                <ShieldAlert size={18} className="text-[#B94A48]" />
              </div>
              <h3 className="text-lg font-bold text-[#014A36]">Active Problem</h3>
              <p className="text-sm text-[#222222]/70 leading-relaxed font-medium">{caseStudy.problem}</p>
            </div>

            <div className="bg-white border border-[#014A36]/10 p-8 rounded-3xl space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#C8922B]/5 flex items-center justify-center">
                <Star size={18} className="text-[#C8922B]" />
              </div>
              <h3 className="text-lg font-bold text-[#014A36]">Missed Memory</h3>
              <p className="text-sm text-[#222222]/70 leading-relaxed font-medium">{caseStudy.missedMemory}</p>
            </div>

            <div className="bg-white border border-[#014A36]/10 p-8 rounded-3xl space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#014A36]/5 flex items-center justify-center">
                <Layout size={18} className="text-[#C8922B]" />
              </div>
              <h3 className="text-lg font-bold text-[#014A36]">Experience Idea</h3>
              <p className="text-sm text-[#222222]/70 leading-relaxed font-medium">{caseStudy.experienceIdea}</p>
            </div>
          </div>

          <div className="bg-[#014A36] text-[#FFFDF8] p-8 md:p-12 rounded-[32px] space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-[#C8922B]/5 blur-[60px]" />
            <div>
              <span className="text-[10px] font-mono font-bold text-[#C8922B] tracking-widest uppercase block mb-1">
                KEY OUTCOME
              </span>
              <h3 className="text-2xl md:text-4xl font-extrabold text-[#FFFDF8]">
                {caseStudy.outcome}
              </h3>
            </div>
            <div className="pt-6 border-t border-white/10 text-xs text-[#FFFDF8]/70 leading-relaxed max-w-2xl font-medium">
              <strong>Visual & Technical Direction:</strong> {caseStudy.direction}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#014A36] text-[#FFFDF8] relative overflow-hidden border-t border-white/5">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            Ready to design your memory loop?
          </h2>
          <p className="text-sm md:text-base text-[#FFFDF8]/70 font-medium max-w-xl mx-auto mb-10 leading-relaxed">
            Get a manual, custom Experience Audit of your digital channels and unboxing loops to start building stronger customer relationships.
          </p>
          <Link
            href="/experience-audit"
            className="inline-flex items-center justify-center bg-[#C8922B] hover:bg-[#A87318] text-[#014A36] hover:text-[#FFFDF8] px-8 py-4.5 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-[#C8922B]/10 text-[15px] group"
          >
            <span>Book an Experience Audit</span>
            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
};
