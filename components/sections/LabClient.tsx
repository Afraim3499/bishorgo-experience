"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { labArticles, labCategories, LabArticle } from "../../data/lab";
import { Clock, Calendar, X, Bookmark, ArrowRight } from "lucide-react";
import Link from "next/link";

export const LabClient: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);

  // Handle direct hash navigation to article if present on load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      if (labArticles.some((art) => art.id === id)) {
        setActiveArticleId(id);
      }
    }
  }, []);

  const filteredArticles =
    selectedCategory === "All"
      ? labArticles
      : labArticles.filter((art) => art.category === selectedCategory);

  const activeArticle = labArticles.find((art) => art.id === activeArticleId) || null;

  const handleOpenArticle = (id: string) => {
    setActiveArticleId(id);
    window.location.hash = id;
  };

  const handleCloseArticle = () => {
    setActiveArticleId(null);
    // Clear hash without scroll jump
    window.history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search
    );
  };

  return (
    <>
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2.5 mb-16 pb-6 border-b border-[#014A36]/10">
        {labCategories.map((cat) => {
          const isActive = cat === selectedCategory;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-full text-xs uppercase tracking-wider font-bold border transition-all duration-300 ${
                isActive
                  ? "bg-[#014A36] text-[#FFFDF8] border-[#014A36] shadow-md shadow-[#014A36]/10"
                  : "bg-white text-[#222222]/80 border-[#014A36]/10 hover:border-[#C8922B] hover:text-[#014A36]"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredArticles.map((art) => (
            <motion.div
              key={art.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => handleOpenArticle(art.id)}
              className="bg-white border border-[#014A36]/10 hover:border-[#C8922B]/40 p-8 rounded-[28px] cursor-pointer flex flex-col justify-between transition-all duration-300 hover:shadow-lg group h-full relative"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] mb-6 font-mono">
                  <span className="font-bold text-[#C8922B] uppercase tracking-widest">
                    {art.category}
                  </span>
                  <span className="text-[#222222]/45 flex items-center gap-1 font-medium">
                    <Clock size={12} /> {art.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#014A36] mb-3 group-hover:text-[#C8922B] transition-colors leading-snug">
                  {art.title}
                </h3>

                {art.banglaTitle && (
                  <p className="text-sm font-semibold text-[#C8922B]/80 mb-4 italic font-sans">
                    {art.banglaTitle}
                  </p>
                )}

                <p className="text-xs md:text-sm text-[#222222]/70 leading-relaxed font-medium mb-8">
                  {art.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-[#014A36]/5 flex items-center justify-between">
                <span className="text-xs text-[#222222]/40 font-medium flex items-center gap-1 font-mono">
                  <Calendar size={12} /> {art.date}
                </span>
                <span className="text-xs uppercase tracking-widest font-bold text-[#014A36] group-hover:text-[#C8922B] transition-colors flex items-center gap-1">
                  <span>Read</span>
                  <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Detailed Article Reader Overlay (Modal) */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#222222]/65 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={handleCloseArticle}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#F8F5EF] border border-[#014A36]/15 w-full max-w-3xl rounded-[32px] overflow-hidden shadow-2xl relative max-h-[85vh] flex flex-col text-[#222222]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseArticle}
                className="absolute top-6 right-6 p-2 rounded-full bg-[#014A36]/5 hover:bg-[#014A36] hover:text-[#FFFDF8] text-[#014A36] transition-all z-10"
                aria-label="Close article"
              >
                <X size={20} />
              </button>

              {/* Content Container (Scrollable) */}
              <div className="overflow-y-auto p-8 md:p-12 space-y-6">
                {/* Category, Date & Read Time */}
                <div className="flex flex-wrap gap-4 items-center text-xs tracking-wider border-b border-[#014A36]/10 pb-4 font-mono">
                  <span className="font-bold text-[#C8922B] uppercase bg-[#014A36]/5 px-3.5 py-1.5 rounded-full border border-[#014A36]/5">
                    {activeArticle.category}
                  </span>
                  <span className="text-[#222222]/45 flex items-center gap-1.5">
                    <Calendar size={14} /> {activeArticle.date}
                  </span>
                  <span className="text-[#222222]/45 flex items-center gap-1.5">
                    <Clock size={14} /> {activeArticle.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-4xl font-extrabold text-[#014A36] leading-tight">
                  {activeArticle.title}
                </h2>

                {activeArticle.banglaTitle && (
                  <p className="text-lg font-bold text-[#C8922B]/85">
                    {activeArticle.banglaTitle}
                  </p>
                )}

                {/* Bangla Hook if any */}
                {activeArticle.banglaHook && (
                  <div className="bg-[#014A36]/3 border-l-4 border-[#C8922B] p-6 rounded-r-2xl">
                    <p className="text-sm md:text-base font-semibold text-[#014A36] leading-relaxed italic">
                      “{activeArticle.banglaHook}”
                    </p>
                  </div>
                )}

                {/* Body copy */}
                <div className="text-sm md:text-base text-[#222222]/80 leading-relaxed font-medium space-y-4 pt-4">
                  <p>{activeArticle.content}</p>
                  <p className="pt-6 border-t border-[#014A36]/10 text-xs text-[#222222]/40 uppercase tracking-widest font-bold flex items-center gap-2 font-mono">
                    <Bookmark size={14} className="text-[#C8922B]" />
                    Observation from Bishorgo Experience Lab
                  </p>
                </div>
              </div>

              {/* Footer action inside Modal */}
              <div className="bg-white border-t border-[#014A36]/10 p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="text-xs text-[#222222]/55 font-medium text-center sm:text-left">
                  Want to run a similar experience experiment for your brand?
                </span>
                <Link
                  href="/experience-audit"
                  onClick={handleCloseArticle}
                  className="inline-flex items-center justify-center bg-[#014A36] hover:bg-[#002f24] text-[#FFFDF8] px-6 py-3 rounded-full font-semibold text-xs transition-colors"
                >
                  Your Brand, Our Plan
                </Link>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default LabClient;
