"use client";
import React from "react";
import { motion } from "framer-motion";
import type { ServicePageBlueprint } from "@/data/services/servicePages";

interface Props {
  touchpoints: ServicePageBlueprint["touchpoints"];
  serviceLabel: string;
}

export const ServiceTouchpointMap: React.FC<Props> = ({ touchpoints, serviceLabel }) => {
  // Build positions around center for up to 8 touchpoints
  const positions = [
    { angle: -90, radius: 1 }, // top
    { angle: -45, radius: 1 }, // top-right
    { angle: 0,  radius: 1 }, // right
    { angle: 45, radius: 1 }, // bottom-right
    { angle: 90, radius: 1 }, // bottom
    { angle: 135, radius: 1 }, // bottom-left
    { angle: 180, radius: 1 }, // left
    { angle: -135, radius: 1 }, // top-left
  ];

  const SVG_SIZE = 480;
  const CX = SVG_SIZE / 2;
  const CY = SVG_SIZE / 2;
  const ORBIT_R = 175;

  const nodes = touchpoints.slice(0, 8).map((tp, i) => {
    const angleRad = (positions[i].angle * Math.PI) / 180;
    return {
      label: tp,
      x: CX + ORBIT_R * Math.cos(angleRad),
      y: CY + ORBIT_R * Math.sin(angleRad),
    };
  });

  return (
    <section className="w-full bg-[#002B20] py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5 md:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-12 md:mb-16 text-center"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#C8922B] block mb-3">
            Where This Service Works
          </span>
          <h2 className="display-heading text-[28px] md:text-[36px] font-bold text-[#F8F5EF] leading-tight tracking-tight">
            Touchpoints We Cover
          </h2>
          <p className="text-[15px] text-[#F8F5EF]/60 font-medium mt-4 max-w-lg mx-auto">
            This service creates memory across these key brand touchpoints.
          </p>
        </motion.div>

        {/* Map container */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* SVG Map — desktop only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex items-center justify-center flex-shrink-0 w-[380px] xl:w-[440px]"
          >
            <svg
              viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
              className="w-full h-full"
              style={{ maxWidth: 440 }}
            >
              {/* Orbit ring */}
              <circle cx={CX} cy={CY} r={ORBIT_R} stroke="#C8922B" strokeWidth="0.5" strokeOpacity="0.18" strokeDasharray="4 8" fill="none" />
              <circle cx={CX} cy={CY} r={ORBIT_R * 0.55} stroke="#F8F5EF" strokeWidth="0.4" strokeOpacity="0.06" fill="none" />

              {/* Connector lines */}
              {nodes.map((node) => (
                <line
                  key={node.label}
                  x1={CX} y1={CY}
                  x2={node.x} y2={node.y}
                  stroke="#C8922B"
                  strokeWidth="0.8"
                  strokeOpacity="0.25"
                />
              ))}

              {/* Center node */}
              <circle cx={CX} cy={CY} r={52} fill="#014A36" stroke="#C8922B" strokeWidth="1.5" strokeOpacity="0.5" />
              <foreignObject x={CX - 44} y={CY - 18} width={88} height={36}>
                <div className="flex items-center justify-center w-full h-full">
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#C8922B", textAlign: "center", lineHeight: 1.2, display: "block" }}>
                    {serviceLabel}
                  </span>
                </div>
              </foreignObject>

              {/* Touchpoint nodes */}
              {nodes.map((node) => (
                <g key={node.label}>
                  <circle cx={node.x} cy={node.y} r={36} fill="#002B20" stroke="#C8922B" strokeWidth="0.8" strokeOpacity="0.35" />
                  <foreignObject x={node.x - 30} y={node.y - 16} width={60} height={32}>
                    <div className="flex items-center justify-center w-full h-full">
                      <span style={{ fontSize: 9, fontWeight: 600, color: "#F8F5EF", textAlign: "center", lineHeight: 1.3, display: "block", opacity: 0.85 }}>
                        {node.label}
                      </span>
                    </div>
                  </foreignObject>
                </g>
              ))}
            </svg>
          </motion.div>

          {/* Touchpoint list — always visible */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 w-full lg:max-w-sm">
            {touchpoints.map((tp, i) => (
              <motion.div
                key={tp}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="flex items-center gap-2.5 bg-[#014A36]/40 border border-[#C8922B]/15 rounded-xl px-4 py-3"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#C8922B] flex-shrink-0" />
                <span className="text-[13px] font-semibold text-[#F8F5EF]/85 select-text leading-snug">
                  {tp}
                </span>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
