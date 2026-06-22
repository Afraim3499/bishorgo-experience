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
        <div className="w-full max-w-[1320px] mx-auto px-5 md:px-10 flex items-center justify-between">
          
          {/* Left: Logo block using bishorgo-logo-website.png */}
          <div className="flex items-center select-none">
            <Link href="/" className="block">
              <img
                src="/images/brand/logo-website.png"
                alt="Bishorgo Experience Logo"
                className="w-[180px] sm:w-[220px] lg:w-[290px] h-auto object-contain flex items-center"
                style={{ maxHeight: "48px" }}
              />
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
