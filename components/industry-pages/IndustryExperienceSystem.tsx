"use client";
import React from "react";
import { motion } from "framer-motion";
import { Layers, Workflow } from "lucide-react";
import type { IndustryPageBlueprint } from "@/data/industries/industryPages";

interface Props {
  system: IndustryPageBlueprint["bishorgoSystem"];
}

export const IndustryExperienceSystem: React.FC<Props> = ({ system }) => {
  const leftNodes = system.nodes.slice(0, 4);
  const rightNodes = system.nodes.slice(4, 8);

  return (
    <section className="relative w-full bg-[#FFFDF8] text-[#222222] py-20 lg:py-28 overflow-hidden border-t border-b border-[#014A36]/10">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-gradient pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, rgba(1,74,54,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        
        {/* ── Section Header ── */}
        <div className="flex flex-col items-center text-center max-w-[700px] mx-auto mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C8922B]">
              THE SOLUTION SYSTEM
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8922B]" />
          </div>
          <h2 className="display-heading text-[30px] sm:text-[38px] font-bold text-[#014A36] tracking-tight leading-[1.1] select-text">
            Bishorgo's Experience System.
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#4F5A55] mt-4 leading-relaxed select-text font-medium">
            We don't sell random marketing campaigns. We build a connected system of touchpoints that work together to capture attention and lock in memories.
          </p>
        </div>

        {/* ── Desktop Connections Diagram Layout (lg and up) ── */}
        <div className="hidden lg:grid grid-cols-[30%_40%_30%] items-center gap-6 relative py-10">
          
          {/* Connector overlay lines */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1140 380" fill="none">
              {/* Lines from Left side list points to center box */}
              <line x1="330" y1="50" x2="420" y2="150" stroke="#C8922B" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="3 3" />
              <line x1="330" y1="130" x2="420" y2="175" stroke="#C8922B" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="3 3" />
              <line x1="330" y1="210" x2="420" y2="205" stroke="#C8922B" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="3 3" />
              <line x1="330" y1="290" x2="420" y2="230" stroke="#C8922B" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="3 3" />

              {/* Lines from Right side list points to center box */}
              <line x1="810" y1="50" x2="720" y2="150" stroke="#C8922B" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="3 3" />
              <line x1="810" y1="130" x2="720" y2="175" stroke="#C8922B" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="3 3" />
              <line x1="810" y1="210" x2="720" y2="205" stroke="#C8922B" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="3 3" />
              <line x1="810" y1="290" x2="720" y2="230" stroke="#C8922B" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="3 3" />
            </svg>
          </div>

          {/* 1. Left Nodes Column */}
          <div className="flex flex-col gap-6 z-10">
            {leftNodes.map((node, index) => (
              <motion.div
                key={node}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FFFDF8] border border-[#014A36]/10 hover:border-[#C8922B]/35 shadow-sm rounded-xl p-4 flex items-center justify-between text-right group cursor-default transition-all duration-300"
              >
                <span className="text-xs font-mono font-bold text-[#C8922B] mr-2">0{index + 1}</span>
                <span className="text-[14.5px] font-bold text-[#014A36] tracking-tight select-text">{node}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#014A36]/30 group-hover:bg-[#C8922B] ml-3 flex-shrink-0 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>

          {/* 2. Middle Column: Central Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center z-10 px-4"
          >
            <div className="w-full max-w-[340px] bg-[#014A36] text-[#FFFDF8] border border-[#C8922B]/40 rounded-3xl p-8 text-center shadow-[0_15px_40px_rgba(1,74,54,0.12)] relative group">
              <div className="absolute inset-0 rounded-3xl bg-radial-gradient pointer-events-none opacity-30"
                style={{ background: "radial-gradient(circle at center, rgba(200,146,43,0.2) 0%, transparent 70%)" }}
              />
              
              <div className="w-12 h-12 rounded-2xl bg-[#FFFDF8]/10 border border-[#FFFDF8]/20 flex items-center justify-center mx-auto mb-6">
                <Workflow className="text-[#E7C77A] h-6 w-6 animate-pulse" />
              </div>

              <h3 className="display-heading text-[20px] font-bold text-[#FFFDF8] tracking-tight uppercase leading-snug mb-3 select-text">
                {system.center}
              </h3>
              
              <p className="text-[13px] text-[#F8F5EF]/75 leading-relaxed font-medium select-text">
                A closed-loop experience ecosystem mapping out strategy, content, conversion, and post-purchase loyalty.
              </p>
            </div>
          </motion.div>

          {/* 3. Right Nodes Column */}
          <div className="flex flex-col gap-6 z-10">
            {rightNodes.map((node, index) => (
              <motion.div
                key={node}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FFFDF8] border border-[#014A36]/10 hover:border-[#C8922B]/35 shadow-sm rounded-xl p-4 flex items-center group cursor-default transition-all duration-300"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#014A36]/30 group-hover:bg-[#C8922B] mr-3 flex-shrink-0 transition-colors duration-300" />
                <span className="text-[14.5px] font-bold text-[#014A36] tracking-tight flex-grow select-text">{node}</span>
                <span className="text-xs font-mono font-bold text-[#C8922B] ml-2">0{index + 5}</span>
              </motion.div>
            ))}
          </div>

        </div>

        {/* ── Mobile/Tablet Stacked Layout (below lg) ── */}
        <div className="block lg:hidden space-y-6">
          {/* Central Block */}
          <div className="bg-[#014A36] text-[#FFFDF8] border border-[#C8922B]/40 rounded-2xl p-6 text-center shadow-md">
            <h3 className="display-heading text-lg font-bold uppercase tracking-wider mb-2">
              {system.center}
            </h3>
            <p className="text-xs text-[#F8F5EF]/85">
              A closed-loop experience ecosystem linking multiple brand channels.
            </p>
          </div>

          {/* Surrounding Nodes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {system.nodes.map((node, index) => (
              <div
                key={node}
                className="bg-[#FFFDF8] border border-[#014A36]/10 rounded-xl p-4 flex items-center gap-3"
              >
                <span className="text-[11px] font-mono font-bold text-[#C8922B]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[14px] font-bold text-[#014A36]">
                  {node}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
