"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  problem: string;
  experience: string;
  delivers: string;
}

export const Services: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const easeTransition = [0.16, 1, 0.3, 1] as [number, number, number, number];

  const servicesList: ServiceItem[] = [
    {
      id: "brand-strategy",
      title: "Brand Strategy",
      problem: "Competing solely on price because your brand lacks a unique position in Dhaka's crowded market.",
      experience: "Creating a singular brand story that makes you immediately recognizable and trusted by customers.",
      delivers: "Competitive memory mapping, target persona research, brand positioning frameworks, and core messaging guidelines."
    },
    {
      id: "brand-identity",
      title: "Brand Identity",
      problem: "A generic logo and inconsistent graphics that make your brand look unprofessional and easily forgettable.",
      experience: "A premium, unified visual presence that signals high status and commands immediate trust.",
      delivers: "Logo systems, typography guidelines, brand color palettes, packaging box design, and stationery assets."
    },
    {
      id: "website-experience",
      title: "Website Experience",
      problem: "Slow load times, clunky navigation, and complex checkouts that cause users to abandon their shopping cart.",
      experience: "A blazing fast, premium digital portal that turns organic search traffic into active brand leads.",
      delivers: "Custom Next.js design, mobile checkout optimization, landing page design, and technical SEO structure."
    },
    {
      id: "content-strategy",
      title: "Content Strategy",
      problem: "Posting generic status updates without any central narrative, leading to zero visual recall.",
      experience: "Story-led campaigns that educate your customers and build long-term brand authority.",
      delivers: "Editorial calendars, brand voice frameworks, copy guidelines, and storytelling campaign blueprints."
    },
    {
      id: "social-media-strategy",
      title: "Social Media Strategy",
      problem: "Wasting boosting budgets on random posts that fail to build an organic community or return customers.",
      experience: "A connected social channel system that keeps your brand top-of-mind for repeat purchase cycles.",
      delivers: "Grid visual layouts, video content direction templates, community engagement guides, and tracking metrics."
    },
    {
      id: "campaign-strategy",
      title: "Campaign Strategy",
      problem: "Seasonal campaigns that generate temporary noise but leave no trace in customer memory once they end.",
      experience: "Integrated campaigns that turn temporary attention into permanent brand recall.",
      delivers: "Integrated marketing layouts, message maps, promotional timelines, and response guidelines."
    },
    {
      id: "field-marketing",
      title: "Field Marketing",
      problem: "In a crowded digital space, screen-only relationships lack physical connection and real trust.",
      experience: "Physical touchpoint activations that build authentic, real-world connections with customers.",
      delivers: "Pop-up campaigns, campus activations, interactive setups, and retail experience plans."
    },
    {
      id: "event-activation",
      title: "Event Activation",
      problem: "Sponsoring events with basic banner displays that get ignored by active participants.",
      experience: "Engaging, sensory event booths that generate organic sharing on social media.",
      delivers: "Booth experience blueprint maps, activation flows, event schedule coordination, and giveaways guides."
    },
    {
      id: "customer-journey-design",
      title: "Customer Journey Design",
      problem: "Losing customers post-purchase due to poor delivery communication, cheap packaging, and late responses.",
      experience: "A seamless purchase-to-delivery loop that converts one-time buyers into lifetime advocates.",
      delivers: "Unboxing packaging designs, post-purchase email flows, customer support guidelines, and referral loops."
    },
    {
      id: "experience-marketing",
      title: "Experience Marketing",
      problem: "Generic advertising campaigns that build no emotional connection with local customer realities.",
      experience: "Designing micro-experiences at every interaction point that make the customer smile and share.",
      delivers: "Friction point audits, sensory touchpoint lists, and word-of-mouth referral blueprints."
    }
  ];

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative w-full lg:h-screen lg:max-h-screen bg-[#002f24] text-ivory pt-[96px] lg:pt-[96px] pb-10 lg:pb-0 border-b border-ivory/10 flex items-center overflow-hidden">
      {/* Spotlight blur vignette */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[130px] pointer-events-none projector-flicker" />

      <div className="container-editorial relative z-10 w-full">
        {/* Header */}
        <div className="max-w-2xl mb-6 lg:mb-8">
          <div className="flex items-center space-x-3 mb-2.5">
            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold font-mono">
              Capabilities // Scene 05
            </span>
          </div>
          <h2 className="text-[28px] md:text-[38px] xl:text-[44px] font-extrabold tracking-tight leading-tight font-serif italic text-ivory">
            The experiences we script.
          </h2>
          <p className="text-xs text-ivory/50 mt-3 font-medium tracking-wide">
            We do not sell disjointed deliverables. We design connected systems that address your business problems and create lasting memory loops.
          </p>
        </div>

        {/* Theatrical Playbill Accordion List with custom scrollable box on desktop */}
        <div className="divide-y divide-ivory/15 max-w-4xl lg:max-h-[360px] xl:max-h-[420px] 2xl:max-h-[480px] lg:overflow-y-auto lg:pr-4 custom-scrollbar">
          {servicesList.map((service, idx) => {
            const isOpen = idx === openIndex;
            const isAnyOpen = openIndex !== null;

            return (
              <div
                key={service.id}
                className={`py-4 lg:py-3 transition-opacity duration-300 relative ${
                  isAnyOpen && !isOpen ? "opacity-30 hover:opacity-75" : "opacity-100"
                }`}
              >
                {/* Spotlight background behind open item */}
                {isOpen && (
                  <div className="absolute inset-0 bg-gold/[0.02] border-x border-gold/10 rounded-3xl pointer-events-none projector-flicker">
                    {/* Viewfinder corner crop marks inside playbill */}
                    <span className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-gold/30" />
                    <span className="absolute top-2 right-2 w-3.5 h-3.5 border-t border-r border-gold/30" />
                    <span className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b border-l border-gold/30" />
                    <span className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-gold/30" />
                  </div>
                )}

                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-1 flex items-center justify-between text-left group focus:outline-none relative z-10 px-4"
                  aria-expanded={isOpen}
                >
                  <span className={`text-lg md:text-xl font-serif italic transition-all duration-300 ${isOpen ? "text-gold tracking-wide pl-2" : "text-ivory group-hover:text-gold"}`}>
                    {service.title}
                  </span>
                  <span className="text-gold p-1 rounded-full bg-ivory/5 group-hover:bg-ivory/10 transition-colors">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: easeTransition }}
                      className="overflow-hidden relative z-10 px-4"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 pb-2 text-xs md:text-sm">
                        {/* Column 1: Problem */}
                        <div className="space-y-1 bg-[#001913] p-4 rounded-xl border border-ivory/5">
                          <span className="text-[9px] uppercase tracking-widest text-danger font-mono font-bold block">
                            // The Problem
                          </span>
                          <p className="text-[11px] text-ivory/70 leading-relaxed font-medium">
                            {service.problem}
                          </p>
                        </div>

                        {/* Column 2: Experience */}
                        <div className="space-y-1 bg-[#001913] p-4 rounded-xl border border-ivory/5">
                          <span className="text-[9px] uppercase tracking-widest text-gold font-mono font-bold block">
                            // The Experience
                          </span>
                          <p className="text-[11px] text-ivory/70 leading-relaxed font-medium">
                            {service.experience}
                          </p>
                        </div>

                        {/* Column 3: Deliverables */}
                        <div className="space-y-1 bg-[#001913] p-4 rounded-xl border border-ivory/5">
                          <span className="text-[9px] uppercase tracking-widest text-success font-mono font-bold block">
                            // We Deliver
                          </span>
                          <p className="text-[11px] text-ivory/70 leading-relaxed font-medium">
                            {service.delivers}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default Services;
