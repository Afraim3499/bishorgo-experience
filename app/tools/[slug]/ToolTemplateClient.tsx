"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, CheckSquare, Star, Sparkles, RefreshCcw, ShieldAlert, Award } from "lucide-react";

interface Props {
  slug: string;
}

export const ToolTemplateClient: React.FC<Props> = ({ slug }) => {
  // Quiz states
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showScoreResult, setShowScoreResult] = useState(false);

  // Finder states
  const [symptoms, setSymptoms] = useState<Record<string, boolean>>({});
  const [showFinderResult, setShowFinderResult] = useState(false);

  // Questions for memory score
  const questions = [
    {
      id: 1,
      q: "What is your typical response time to customer inquiries?",
      options: [
        { label: "Under 5 minutes with friendly, customized answers", score: 25 },
        { label: "10 to 30 minutes with automated template bots", score: 15 },
        { label: "Over 30 minutes or inconsistent support timings", score: 5 }
      ]
    },
    {
      id: 2,
      q: "How do you deliver physical products to your customers?",
      options: [
        { label: "Rigid customized boxes infused with a signature brand scent", score: 25 },
        { label: "Standard brown cardboard boxes with generic logo tape", score: 15 },
        { label: "Plain plastic courier bags wrapped in shipping adhesive", score: 5 }
      ]
    },
    {
      id: 3,
      q: "How many form fields does a buyer fill on your website checkout?",
      options: [
        { label: "Fewer than 4 fields with one-click payment gateways", score: 25 },
        { label: "5 to 8 fields requiring manual registration prompts", score: 15 },
        { label: "More than 8 fields with unexpected delivery fees displayed", score: 5 }
      ]
    },
    {
      id: 4,
      q: "Is your visual branding (colors, fonts, grids) consistent?",
      options: [
        { label: "Absolutely. Guided by a strict visual design playbook", score: 25 },
        { label: "Moderately. Colors match but template layout layouts change", score: 15 },
        { label: "Weakly. Design elements change with every designer", score: 5 }
      ]
    }
  ];

  const handleSelectOption = (qId: number, score: number) => {
    setAnswers({ ...answers, [qId]: score });
  };

  const calculateScore = () => {
    const total = Object.values(answers).reduce((a, b) => a + b, 0);
    return total;
  };

  // Symptoms list for gap finder
  const symptomList = [
    { id: "pricing", label: "Customers complain that our prices are too high", gap: "Brand Positioning & Value Strategy Leak" },
    { id: "cart", label: "High website traffic but high checkout abandonment", gap: "Mobile Speed & Form Field Friction Leak" },
    { id: "repeat", label: "Buyers purchase once but rarely return to shop again", gap: "Post-Purchase Loop & Packaging Scent Leak" },
    { id: "engagement", label: "Social posts get scrolls but zero comments or shares", gap: "Content Strategy & Message Pillar Leak" }
  ];

  const toggleSymptom = (id: string) => {
    setSymptoms({ ...symptoms, [id]: !symptoms[id] });
  };

  const getDignoses = () => {
    return symptomList.filter((sym) => symptoms[sym.id]);
  };

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
          <div className="inline-flex items-center gap-2 justify-center">
            <Calculator size={16} className="text-[#C8922B]" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#C8922B] uppercase">
              BISHORGO INTERACTIVE TOOLS
            </span>
          </div>
          <h1 className="text-4xl md:text-6.5xl lg:text-7.5xl font-extrabold tracking-tight max-w-5xl mx-auto leading-tight">
            {slug === "customer-memory-score" ? "Customer Memory Score Tool" : "Experience Gap Finder"}
          </h1>
          <p className="text-base md:text-xl text-[#FFFDF8]/85 max-w-3xl mx-auto leading-relaxed">
            {slug === "customer-memory-score"
              ? "Calculate exactly how memorable your brand touchpoints are to local consumers."
              : "Locate and diagnose the exact conversion leaks currently breaking your customer journey."}
          </p>
        </div>
      </section>

      {/* Main Tool Workshop Section */}
      <section className="py-24 bg-[#F8F5EF] text-[#222222]">
        <div className="max-w-[800px] mx-auto px-5">
          
          {slug === "customer-memory-score" ? (
            /* CMS Quiz */
            <div className="bg-white border border-[#014A36]/10 p-8 md:p-12 rounded-[32px] shadow-sm space-y-8">
              {!showScoreResult ? (
                <>
                  <div className="space-y-6">
                    {questions.map((item) => (
                      <div key={item.id} className="space-y-3.5">
                        <h3 className="text-[15px] font-bold text-[#014A36]">
                          {item.id}. {item.q}
                        </h3>
                        <div className="grid grid-cols-1 gap-2.5">
                          {item.options.map((opt, oIdx) => {
                            const isSelected = answers[item.id] === opt.score;
                            return (
                              <button
                                key={oIdx}
                                type="button"
                                onClick={() => handleSelectOption(item.id, opt.score)}
                                className={`text-left p-4 rounded-2xl border text-xs sm:text-sm font-semibold transition-all duration-200 ${
                                  isSelected
                                    ? "bg-[#014A36]/5 border-[#C8922B] text-[#014A36]"
                                    : "bg-white border-[#014A36]/8 text-[#222222]/80 hover:border-[#C8922B]"
                                }`}
                              >
                                {opt.label}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setShowScoreResult(true)}
                    disabled={Object.keys(answers).length < questions.length}
                    className="w-full bg-[#014A36] text-[#FFFDF8] hover:bg-[#002f24] py-4 rounded-2xl font-bold text-xs uppercase tracking-wider transition-colors disabled:opacity-50"
                  >
                    Calculate My Memory Score
                  </button>
                </>
              ) : (
                /* Result CMS Card */
                <div className="space-y-8 text-center">
                  <div className="space-y-2">
                    <span className="text-sm font-mono font-bold text-[#C8922B] uppercase tracking-widest block">
                      YOUR BRAND RECALL SCORE
                    </span>
                    <div className="text-6xl md:text-8xl font-extrabold text-[#014A36] tracking-tight">
                      {calculateScore()} <span className="text-xl md:text-2xl text-[#222222]/45">/ 100</span>
                    </div>
                  </div>

                  <div className="p-6 bg-[#014A36]/3 border border-[#014A36]/5 rounded-2xl text-left space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#C8922B] uppercase">
                      <Star size={14} className="fill-[#C8922B]" />
                      <span>Bishorgo Strategy Diagnosis</span>
                    </div>
                    <p className="text-sm font-semibold text-[#222222]/85 leading-relaxed">
                      {calculateScore() >= 80
                        ? "Excellent Brand Memory! Your touchpoints are highly unified, carrying strong sensory cues and fast checkout lanes. Keep maintaining consistency."
                        : calculateScore() >= 50
                        ? "Moderate Memory. You have basic branding but suffer from touchpoint leakage (such as courier packaging wrap defaults or response timing gaps)."
                        : "Low Memory. Your brand behaves transactionally, losing recall speed. Clicks are bought but customer name association is weak."}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      onClick={() => {
                        setAnswers({});
                        setShowScoreResult(false);
                      }}
                      className="flex-1 border border-[#014A36]/15 hover:border-[#014A36] hover:bg-[#014A36]/3 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                    >
                      <RefreshCcw size={14} />
                      <span>Retake Score Tool</span>
                    </button>
                    <Link
                      href="/experience-audit"
                      className="flex-1 bg-[#C8922B] text-[#014A36] hover:bg-[#A87318] hover:text-[#FFFDF8] py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1"
                    >
                      <span>Book Detailed Audit</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Gap Finder Checker */
            <div className="bg-white border border-[#014A36]/10 p-8 md:p-12 rounded-[32px] shadow-sm space-y-8">
              {!showFinderResult ? (
                <>
                  <div className="space-y-4">
                    <span className="text-[10px] font-mono font-bold text-[#C8922B] tracking-widest uppercase block">
                      SYMPTOM CHECKLIST
                    </span>
                    <div className="space-y-3">
                      {symptomList.map((item) => {
                        const isChecked = !!symptoms[item.id];
                        return (
                          <label
                            key={item.id}
                            className={`flex gap-3.5 items-start p-4 rounded-2xl border cursor-pointer transition-all duration-200 select-none ${
                              isChecked
                                ? "bg-[#014A36]/5 border-[#C8922B] text-[#014A36]"
                                : "bg-white border-[#014A36]/8 text-[#222222]/80 hover:border-[#C8922B]"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => toggleSymptom(item.id)}
                              className="mt-1 w-4 h-4 text-[#014A36] border-[#014A36]/20 rounded focus:ring-[#C8922B]"
                            />
                            <span className="text-xs md:text-sm font-semibold leading-relaxed">
                              {item.label}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  <button
                    onClick={() => setShowFinderResult(true)}
                    disabled={getDignoses().length === 0}
                    className="w-full bg-[#014A36] text-[#FFFDF8] hover:bg-[#002f24] py-4 rounded-2xl font-bold text-xs uppercase tracking-wider transition-colors disabled:opacity-50"
                  >
                    Find My Experience Gaps
                  </button>
                </>
              ) : (
                /* Gap Finder Result */
                <div className="space-y-8">
                  <div className="text-center space-y-1">
                    <span className="text-sm font-mono font-bold text-[#C8922B] uppercase tracking-widest block">
                      DIAGNOSIS REPORT
                    </span>
                    <h3 className="text-2xl font-extrabold text-[#014A36]">
                      We detected {getDignoses().length} active experience leaks:
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {getDignoses().map((sym) => (
                      <div key={sym.id} className="p-5 bg-[#B94A48]/5 border border-[#B94A48]/10 rounded-xl flex gap-3 items-start">
                        <ShieldAlert size={18} className="text-[#B94A48] mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-[#B94A48] text-xs font-mono tracking-wider uppercase mb-1">
                            {sym.gap}
                          </h4>
                          <p className="text-xs md:text-sm font-semibold text-[#222222]/85 leading-relaxed">
                            Your checkout path, content flow, or packaging details are failing to validate customer trust. Fix this gap before spending on booster marketing.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      onClick={() => {
                        setSymptoms({});
                        setShowFinderResult(false);
                      }}
                      className="flex-1 border border-[#014A36]/15 hover:border-[#014A36] hover:bg-[#014A36]/3 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                    >
                      <RefreshCcw size={14} />
                      <span>Reset Symptoms</span>
                    </button>
                    <Link
                      href="/experience-audit"
                      className="flex-1 bg-[#C8922B] text-[#014A36] hover:bg-[#A87318] hover:text-[#FFFDF8] py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1"
                    >
                      <span>Get Detailed Audit Report</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      </section>
    </div>
  );
};
