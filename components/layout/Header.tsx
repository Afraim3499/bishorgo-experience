"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { headerNavLinks as navigationLinks } from "../../data/navigation";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#F8F5EF] border-b border-[#014A36]/12 h-[76px] lg:h-[96px] flex items-center transition-all duration-300">
        <div className="w-full max-w-[1320px] mx-auto px-5 lg:px-10 flex items-center justify-between">
          
          {/* Left: Logo block using inline SVG and colored text */}
          <div className="flex items-center select-none">
            <Link href="/" className="flex items-center gap-3.5 group select-none">
              {/* SVG Logo mark (Wing, Triangle, Circles) */}
              <svg className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 group-hover:scale-105 transition-transform duration-300" viewBox="0 0 600 600" fill="none">
                {/* Wing (Green) */}
                <path
                  d="M 133 55 L 135 57 L 135 67 L 137 70 L 140 90 L 151 120 L 160 137 L 181 165 L 199 183 L 225 202 L 247 214 L 262 219 L 266 222 L 281 226 L 282 228 L 256 236 L 228 249 L 199 270 L 175 295 L 163 312 L 147 344 L 132 398 L 133 401 L 131 404 L 132 408 L 172 376 L 272 308 L 285 295 L 293 284 L 301 268 L 300 267 L 304 258 L 308 238 L 308 219 L 301 190 L 293 173 L 276 152 L 245 129 L 235 124 L 231 120 L 158 74 Z"
                  fill="#014A36"
                />
                {/* Triangle Arrow (Gold) */}
                <path
                  d="M 143 152 L 143 306 L 218 228 Z"
                  fill="#C8922B"
                />
                {/* Circle 1 (Gold) */}
                <circle
                  cx="361.5"
                  cy="177.5"
                  r="30.5"
                  fill="#C8922B"
                />
                {/* Circle 2 (Gold) */}
                <circle
                  cx="361.5"
                  cy="285.5"
                  r="30.5"
                  fill="#C8922B"
                />
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[#014A36] font-extrabold text-[18px] sm:text-[20px] tracking-[0.08em] font-sans leading-none">BISHORGO</span>
                <span className="text-[#C8922B] text-[8.5px] sm:text-[9.5px] uppercase tracking-[0.22em] mt-1 font-mono leading-none">EXPERIENCE</span>
              </div>
            </Link>
          </div>

          {/* Center: Navigation links */}
          <nav className="hidden lg:flex items-center gap-[48px]">
            {navigationLinks.map((link) => {
              // Exact hash match or path prefix match
              const isActive = pathname === link.href || (link.href !== "/#" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-[15px] lg:text-[16px] font-semibold tracking-[0.01em] transition-colors duration-200 py-1 hover:text-[#014A36] ${
                    isActive ? "text-[#014A36]" : "text-[#222222]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Pill CTA button */}
          <div className="hidden lg:block">
            <Link
              href="/experience-audit"
              className="inline-flex items-center justify-center bg-[#014A36] text-[#FFFDF8] hover:bg-[#002f24] transition-all duration-300 font-semibold rounded-full px-[28px] py-[16px] text-[15px] group border border-transparent hover:border-[#C8922B]/20"
            >
              <span>Book Audit</span>
              <span className="ml-1.5 text-[#C8922B] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-[#014A36] hover:text-[#C8922B] transition-colors focus:outline-none z-50 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-20px" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-20px" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[76px] z-40 bg-[#F8F5EF] border-b border-[#014A36]/12 shadow-xl lg:hidden max-h-[calc(100vh-76px)] overflow-y-auto"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              <nav className="flex flex-col space-y-4">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-[18px] font-semibold text-[#222222] hover:text-[#014A36] py-2 border-b border-[#014A36]/5 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="pt-4">
                <Link
                  href="/experience-audit"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center bg-[#014A36] text-[#FFFDF8] hover:bg-[#002f24] py-4 rounded-full font-semibold transition-colors"
                >
                  <span>Book Audit ↗</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
