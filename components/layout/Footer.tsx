"use client";

import React from "react";
import Link from "next/link";
import { footerExploreLinks, footerIndustryLinks, footerSolutionLinks } from "../../data/navigation";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#002f24] text-ivory/80 border-t border-forest/40 pt-16 pb-8 relative overflow-hidden select-text">
      
      {/* Background motif glow */}
      <div className="absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full bg-gold/5 blur-[80px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-5 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16 relative z-10">
        
        {/* Branding & Logo Block (Takes 4 columns on desktop) */}
        <div className="lg:col-span-4 flex flex-col space-y-5">
          {/* Logo Mark + Title */}
          <Link href="/" className="flex items-center gap-3 group select-none">
            {/* SVG Logo mark in gold */}
            <svg className="w-9 h-9 flex-shrink-0 group-hover:scale-105 transition-transform duration-300" viewBox="0 0 600 600" fill="none">
              <path
                d="M 133 55 L 135 57 L 135 67 L 137 70 L 140 90 L 151 120 L 160 137 L 181 165 L 199 183 L 225 202 L 247 214 L 262 219 L 266 222 L 281 226 L 282 228 L 256 236 L 228 249 L 199 270 L 175 295 L 163 312 L 147 344 L 132 398 L 133 401 L 131 404 L 132 408 L 172 376 L 272 308 L 285 295 L 293 284 L 301 268 L 300 267 L 304 258 L 308 238 L 308 219 L 301 190 L 293 173 L 276 152 L 245 129 L 235 124 L 231 120 L 158 74 Z"
                fill="#C8922B"
              />
              <path
                d="M 143 152 L 143 306 L 218 228 Z"
                fill="#C8922B"
              />
              <circle
                cx="361.5"
                cy="177.5"
                r="30.5"
                fill="#C8922B"
              />
              <circle
                cx="361.5"
                cy="285.5"
                r="30.5"
                fill="#C8922B"
              />
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-white font-extrabold text-[20px] tracking-[0.08em] font-sans leading-none">BISHORGO</span>
              <span className="text-ivory/60 text-[9px] uppercase tracking-[0.2em] mt-1 font-mono leading-none">EXPERIENCE</span>
            </div>
          </Link>

          <p className="text-xs xl:text-sm leading-relaxed max-w-sm text-ivory/60 select-text text-left font-medium">
            Bishorgo Experience — We build experiences people remember.
          </p>
        </div>

        {/* Column 2: EXPLORE (Takes 2 columns on desktop) */}
        <div className="lg:col-span-2 flex flex-col space-y-4 text-left">
          <h4 className="text-[11px] xl:text-xs uppercase tracking-[0.2em] text-gold font-bold font-mono">Explore</h4>
          <ul className="space-y-2.5 text-xs xl:text-sm font-medium text-ivory/70">
            {footerExploreLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: INDUSTRIES (Takes 2 columns on desktop) */}
        <div className="lg:col-span-2 flex flex-col space-y-4 text-left">
          <h4 className="text-[11px] xl:text-xs uppercase tracking-[0.2em] text-gold font-bold font-mono">Industries</h4>
          <ul className="space-y-2.5 text-xs xl:text-sm font-medium text-ivory/70">
            {footerIndustryLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: SOLUTIONS (Takes 2 columns on desktop) */}
        <div className="lg:col-span-2 flex flex-col space-y-4 text-left">
          <h4 className="text-[11px] xl:text-xs uppercase tracking-[0.2em] text-gold font-bold font-mono">Solutions</h4>
          <ul className="space-y-2.5 text-xs xl:text-sm font-medium text-ivory/70">
            {footerSolutionLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        {/* Column 5: Newsletter / Stay Updated (Takes 2 columns on desktop) */}
        <div className="lg:col-span-2 flex flex-col space-y-4 text-left">
          <h4 className="text-[11px] xl:text-xs uppercase tracking-[0.2em] text-gold font-bold font-mono">STAY IN THE LOOP</h4>
          <p className="text-xs text-ivory/60 leading-relaxed font-medium">
            Thoughts on experience, brand memory, and business growth.
          </p>

          {/* Email input field */}
          <form onSubmit={(e) => e.preventDefault()} className="flex items-center w-full max-w-sm overflow-hidden bg-white/5 border border-gold/15 rounded-xl h-10 select-none">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-white placeholder-ivory/30 px-3 flex-grow text-xs focus:outline-none h-full font-medium"
            />
            <button
              type="submit"
              className="bg-[#C8922B] hover:bg-[#A87318] text-[#002f24] hover:text-white px-3.5 h-full flex items-center justify-center transition-all duration-300 flex-shrink-0"
              aria-label="Submit newsletter"
            >
              <span className="font-bold text-sm">→</span>
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex space-x-2.5 pt-1 select-none">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full border border-gold/20 hover:border-gold flex items-center justify-center text-ivory/60 hover:text-gold transition-all duration-300 text-[10px] font-mono"
            >
              FB
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full border border-gold/20 hover:border-gold flex items-center justify-center text-ivory/60 hover:text-gold transition-all duration-300 text-[10px] font-mono"
            >
              IN
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full border border-gold/20 hover:border-gold flex items-center justify-center text-ivory/60 hover:text-gold transition-all duration-300 text-[10px] font-mono"
            >
              IG
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full border border-gold/20 hover:border-gold flex items-center justify-center text-ivory/60 hover:text-gold transition-all duration-300 text-[10px] font-mono"
            >
              YT
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1320px] mx-auto px-5 lg:px-10 pt-6 border-t border-forest/20 flex flex-col md:flex-row justify-between items-center text-xs text-ivory/45 relative z-10 gap-3">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1">
          <p>&copy; {currentYear} Bishorgo. All rights reserved.</p>
          <span className="hidden md:inline opacity-30">|</span>
          <Link href="/privacy-policy" className="hover:text-gold transition-colors">
            Privacy Policy
          </Link>
          <span className="opacity-30">|</span>
          <Link href="/terms-and-conditions" className="hover:text-gold transition-colors">
            Terms of Service
          </Link>
        </div>
        
        <p className="font-mono tracking-wider text-[10px] text-gold/60 uppercase">
          Crafting experiences. Creating memories.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
