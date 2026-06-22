"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LogoLoaderProps {
  onComplete: () => void;
  mode?: "full" | "short";
}

export const LogoLoader: React.FC<LogoLoaderProps> = ({ onComplete, mode = "full" }) => {
  const [stage, setStage] = useState<number>(0); // 0: Bird, 1: Face, 2: Final Logo, 3: Completed
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);
  const [isSkipped, setIsSkipped] = useState<boolean>(true); // Start true, set false once client-side check runs

  const isShort = mode === "short";

  useEffect(() => {
    // Reduced motion check
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      onComplete();
    } else {
      setIsSkipped(false);
      setShouldAnimate(true);
      
      // Step through stages:
      // Bird: 0s to 2.5s (Full) vs 0s to 0.25s (Short)
      // Face: 2.5s to 5.2s (Full) vs 0.25s to 0.6s (Short)
      // Final logo: 5.2s to 8.0s (Full) vs 0.6s to 0.9s (Short)
      // Complete: 8.0s (Full) vs 0.9s (Short)
      const timer1 = setTimeout(() => setStage(1), isShort ? 250 : 2500);
      const timer2 = setTimeout(() => setStage(2), isShort ? 600 : 5200);
      const timer3 = setTimeout(() => {
        setStage(3);
        // Let the wrapper fade-out complete before calling onComplete
        setTimeout(() => onComplete(), isShort ? 300 : 1000);
      }, isShort ? 900 : 8000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [onComplete, isShort]);

  if (isSkipped || !shouldAnimate) {
    return null;
  }

  // Easing curve from design constitution: cubic-bezier(0.65, 0, 0.35, 1)
  const premiumEasing: [number, number, number, number] = [0.65, 0, 0.35, 1];

  const duration = isShort ? 0.25 : 1.4;
  const arrowDuration = isShort ? 0.3 : 1.6;
  const arrowDelay = isShort ? 0.05 : 0.2;
  const winkDelay = isShort ? 0.1 : 1.0;
  const winkDuration = isShort ? 0.18 : 0.5;

  // Animation values for the Wing Crescent
  const getWingAnimation = () => {
    if (stage === 0) {
      return {
        x: 40,
        y: isShort ? -11.5 : [-11.5, -19.5, -7.5, -11.5],
        rotate: isShort ? 90 : [90, 86, 94, 90],
        scale: 1.05,
        filter: "url(#glow-emerald-pulse)",
        fill: "url(#logoWingGradBird)",
        stroke: "#E7C77A",
        strokeOpacity: 0.6,
        transition: isShort 
          ? { duration: 0.25, ease: premiumEasing }
          : {
              y: { repeat: Infinity, duration: 3.0, ease: "easeInOut" },
              rotate: { repeat: Infinity, duration: 3.2, ease: "easeInOut" },
              scale: { duration: 1.0 },
              filter: { duration: 1.0 }
            }
      };
    } else if (stage === 1) {
      return {
        x: 40,
        y: 8.5,
        rotate: -90,
        scale: 1.0,
        filter: "url(#glow-soft)",
        fill: "#014A36",
        stroke: "#C8922B",
        strokeOpacity: 0.8,
        transition: { duration, ease: premiumEasing }
      };
    } else {
      return {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1.0,
        filter: "none",
        fill: "url(#logoWingGradFinal)",
        stroke: "#014A36",
        strokeOpacity: 0.3,
        transition: { duration, ease: premiumEasing }
      };
    }
  };

  // Animation values for the top eye / Circle 1
  const getCircle1Animation = () => {
    if (stage === 0) {
      return {
        x: -151.5,
        y: isShort ? 182.5 : [182.5, 174.5, 190.5, 182.5],
        scale: 0.75,
        opacity: 0.8,
        scaleY: 1,
        transition: isShort
          ? { duration: 0.25, ease: premiumEasing }
          : {
              y: { repeat: Infinity, duration: 3.0, ease: "easeInOut" },
              opacity: { duration: 1.0 },
              scale: { duration: 1.0 }
            }
      };
    } else if (stage === 1) {
      return {
        x: -151.5,
        y: -77.5,
        scale: 1.0,
        opacity: 1,
        // Wink animation: triggers after winkDelay in stage 1
        scaleY: [1, 1, 0.1, 1, 1],
        transition: {
          x: { duration, ease: premiumEasing },
          y: { duration, ease: premiumEasing },
          scale: { duration, ease: premiumEasing },
          scaleY: {
            delay: winkDelay,
            times: [0, 0.4, 0.6, 0.8, 1],
            duration: winkDuration,
            ease: "easeInOut"
          }
        }
      };
    } else {
      return {
        x: 0,
        y: 0,
        scale: 1.0,
        opacity: 1,
        scaleY: 1,
        transition: { duration, ease: premiumEasing }
      };
    }
  };

  // Animation values for the bottom eye / Circle 2
  const getCircle2Animation = () => {
    if (stage === 0) {
      return {
        x: -51.5,
        y: isShort ? 74.5 : [74.5, 66.5, 82.5, 74.5],
        scale: 0.75,
        opacity: 0.8,
        transition: isShort
          ? { duration: 0.25, ease: premiumEasing }
          : {
              y: { repeat: Infinity, duration: 3.0, ease: "easeInOut" },
              opacity: { duration: 1.0 },
              scale: { duration: 1.0 }
            }
      };
    } else if (stage === 1) {
      return {
        x: -51.5,
        y: -185.5,
        scale: 1.0,
        opacity: 1,
        transition: {
          x: { duration, ease: premiumEasing },
          y: { duration, ease: premiumEasing },
          scale: { duration, ease: premiumEasing }
        }
      };
    } else {
      return {
        x: 0,
        y: 0,
        scale: 1.0,
        opacity: 1,
        transition: { duration, ease: premiumEasing }
      };
    }
  };

  // Animation values for the Gold Pointer Arrow
  const getArrowAnimation = () => {
    if (stage === 0) {
      return {
        x: 79.5,
        y: isShort ? -89 : [-89, -97, -81, -89],
        rotate: 90,
        scale: 0.9,
        opacity: 1,
        transition: isShort
          ? { duration: 0.25, ease: premiumEasing }
          : {
              y: { repeat: Infinity, duration: 3.0, ease: "easeInOut" },
              opacity: { duration: 1.0 },
              scale: { duration: 1.0 }
            }
      };
    } else if (stage === 1) {
      return {
        x: 79.5,
        y: 91,
        rotate: -90,
        scale: 0.9,
        opacity: 1,
        transition: { duration, ease: premiumEasing }
      };
    } else {
      return {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1.0,
        opacity: 1,
        transition: { duration, ease: premiumEasing }
      };
    }
  };

  return (
    <AnimatePresence>
      {stage < 3 && (
        <motion.div
          key="loader-wrapper"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: isShort ? 0.3 : 1.0, ease: premiumEasing } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center select-none"
          style={{
            background: "radial-gradient(circle at center, #002B20 0%, #00120B 100%)"
          }}
        >
          {/* Subtle film grain & background light flicker */}
          <div className="absolute inset-0 bg-transparent pointer-events-none opacity-20 projector-flicker">
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(200,146,43,0.03)_0%,transparent_70%)]" />
          </div>

          <div className="relative w-[84vw] h-[84vw] sm:w-96 sm:h-96 flex items-center justify-center">
            <svg
              viewBox="0 0 600 600"
              className="w-full h-full text-forest select-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            >
              <defs>
                {/* SVG glowing filters */}
                <filter id="glow-emerald-pulse" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="12" result="blur1" />
                  <feGaussianBlur stdDeviation="6" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur1" />
                    <feMergeNode in="blur2" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                
                <filter id="glow-soft" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Bird Stage Wing Gradient */}
                <linearGradient id="logoWingGradBird" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#014A36" />
                  <stop offset="50%" stopColor="#00664B" />
                  <stop offset="100%" stopColor="#C8922B" />
                </linearGradient>

                {/* Final Stage Wing Gradient */}
                <linearGradient id="logoWingGradFinal" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#014A36" />
                  <stop offset="100%" stopColor="#C8922B" />
                </linearGradient>

                {/* Gold Element Gradient */}
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFDF8" />
                  <stop offset="30%" stopColor="#E7C77A" />
                  <stop offset="100%" stopColor="#C8922B" />
                </linearGradient>

                {/* Arrow Gradient */}
                <linearGradient id="goldArrowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C8922B" />
                  <stop offset="100%" stopColor="#FFFDF8" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* Group representing centered logo (translate & scale matches HeroSection) */}
              <g transform="translate(-54, -12) scale(1.35)">
                {/* 1. Wing Crescent (Mouth/Wings/Main Wing) */}
                <motion.path
                  d="M 133 55 L 135 57 L 135 67 L 137 70 L 140 90 L 151 120 L 160 137 L 181 165 L 199 183 L 225 202 L 247 214 L 262 219 L 266 222 L 281 226 L 282 228 L 256 236 L 228 249 L 199 270 L 175 295 L 163 312 L 147 344 L 132 398 L 133 401 L 131 404 L 132 408 L 172 376 L 272 308 L 285 295 L 293 284 L 301 268 L 300 267 L 304 258 L 308 238 L 308 219 L 301 190 L 293 173 L 276 152 L 245 129 L 235 124 L 231 120 L 158 74 Z"
                  style={{ transformOrigin: "220px 231.5px" }}
                  animate={getWingAnimation()}
                  strokeWidth="1.5"
                />

                {/* 2. Gold Inner Pointer Arrow */}
                <motion.path
                  d="M 143 152 L 143 306 L 218 228 Z"
                  style={{ transformOrigin: "180.5px 229px" }}
                  fill="url(#goldArrowGrad)"
                  stroke="#C8922B"
                  strokeWidth="1.2"
                  animate={getArrowAnimation()}
                />

                {/* 3. Gold Circles / Eyes */}
                {/* Top Eye (Circle 1) */}
                <motion.circle
                  cx="361.5"
                  cy="177.5"
                  r="30.5"
                  style={{ transformOrigin: "361.5px 177.5px" }}
                  fill="url(#goldGrad)"
                  stroke="#C8922B"
                  strokeWidth="1"
                  animate={getCircle1Animation()}
                />

                {/* Bottom Eye (Circle 2) */}
                <motion.circle
                  cx="361.5"
                  cy="285.5"
                  r="30.5"
                  style={{ transformOrigin: "361.5px 285.5px" }}
                  fill="url(#goldGrad)"
                  stroke="#C8922B"
                  strokeWidth="1"
                  animate={getCircle2Animation()}
                />
              </g>
            </svg>
          </div>

          {/* Subtitles Fading Sequence */}
          <div className="absolute bottom-20 h-28 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={stage}
                initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                animate={{ opacity: 0.95, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                transition={{ duration: isShort ? 0.25 : 0.7, ease: premiumEasing }}
                className="flex flex-col items-center text-center px-4"
              >
                <span className="text-[20px] sm:text-[26px] md:text-[32px] uppercase tracking-[0.5em] text-[#E7C77A] font-extrabold mb-2 font-sans">
                  {stage === 0 ? "Imagine" : stage === 1 ? "Watch and Believe" : "Experience"}
                </span>
                <span className="text-[16px] sm:text-[19px] md:text-[22px] italic text-[#FFFDF8]/85 font-medium font-bangla mt-1.5">
                  {stage === 0 ? "ভাবুন" : stage === 1 ? "দেখুন ও বিশ্বাস করুন" : "মনে থাকাটাই আসল জায়গা।"}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={() => {
              onComplete();
            }}
            className="absolute bottom-6 right-6 text-xs text-ivory/30 hover:text-ivory tracking-wider uppercase transition-colors duration-300 font-semibold"
          >
            Skip Intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LogoLoader;
