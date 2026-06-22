import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Compass, FileText, LayoutTemplate, Send, Eye, Star } from "lucide-react";
import { ServicesFAQ } from "@/components/sections/ServicesFAQ";

type PhaseDetail = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  overview: string;
  whyItMatters: string;
  actions: string[];
  deliverable: {
    name: string;
    description: string;
  };
  localApplication: string;
  faqs: {
    question: string;
    answer: string;
  }[];
};

const phases: PhaseDetail[] = [
  {
    slug: "discover",
    number: "01",
    title: "Discover Phase",
    subtitle: "শুরুতেই আমরা কাস্টমার জার্নির ফাঁকফোকরগুলো খুঁজে বের করি।",
    overview: "In the Discover phase, we conduct deep operational and digital audits. We analyze target audience behaviors, measure web page speeds under local latency, examine chat scripts, and inspect delivery packaging.",
    whyItMatters: "Most brands spend budget on marketing campaigns without realizing that their conversion funnel is leaking leads. Discovering these friction points first prevents wasted ad spends.",
    actions: [
      "Running secret-shopper visits to check storefront greetings and wayfinding navigation.",
      "Auditing Facebook/Instagram messenger chat scripts and live response delays.",
      "Simulating checkout pathways under mobile connections to locate slow scripts.",
      "Checking courier parcel unboxing structures and unboxing feel."
    ],
    deliverable: {
      name: "Experience Gap Map",
      description: "A detailed visual map locating every friction point where customer trust, memory, or conversion drops."
    },
    localApplication: "We audited a premium Dhaka clothing shop and found they lost 30% of sales because trial room lights were harsh and automated messenger replies were cold.",
    faqs: [
      { question: "How long does the Discover phase take?", answer: "Usually 5 to 7 business days, depending on the number of online and physical channels audited." },
      { question: "Can we start with a free audit?", answer: "Yes, we offer a free diagnostic audit for qualified local businesses to start the discover process." }
    ]
  },
  {
    slug: "define",
    number: "02",
    title: "Define Phase",
    subtitle: "ব্র্যান্ডের মূল মেসেজ এবং কাস্টমারকে কী ফিলিং দেবো তা নির্ধারণ করি।",
    overview: "In the Define phase, we establish a unified brand position and message architecture. We define your brand promise, brand tone of voice, visual direction, and sensory goals.",
    whyItMatters: "Without defining strategic pillars, businesses post random templates, run disconnected campaigns, and compete only on price. Defining positioning builds instant recall.",
    actions: [
      "Defining the brand's core positioning statement and market differentiator.",
      "Writing tone of voice guidelines (how to sound in posts, support, and notifications).",
      "Designing the sensory recall plan (identifying packaging scents and visual cues).",
      "Drafting target customer profiles outlining pain points and emotional hooks."
    ],
    deliverable: {
      name: "Brand Experience Blueprint",
      description: "A master document defining visual, written, and sensory rules to guide all future touchpoint design."
    },
    localApplication: "We defined a signature 'Anticipation' tone for a startup, crafting their website copy and status SMS messages to feel exciting.",
    faqs: [
      { question: "What is a Brand Experience Blueprint?", answer: "A strategic playbook detailing tone guidelines, visual scaling rules, and unboxing plans to keep your team aligned." },
      { question: "Why is brand tone of voice important?", answer: "It ensures that whether a customer reads a post, talks to support, or gets an invoice email, they recognize your brand." }
    ]
  },
  {
    slug: "design",
    number: "03",
    title: "Design Phase",
    subtitle: "আমরা ওয়েবসাইট কোড, ভিজ্যুয়াল সিস্টেম এবং প্রিমিয়াম প্যাকেজিং ডিজাইন করি।",
    overview: "In the Design phase, we build the actual customer touchpoints. We code custom high-speed Next.js storefronts, design logo systems, plan content schedules, and layout premium packaging.",
    whyItMatters: "Design is where strategy becomes visible. Visual beauty must work hand-in-hand with fast, smooth digital performance to build customer trust.",
    actions: [
      "Coding custom, responsive React layouts with zero layout shift.",
      "Designing premium visual identity systems (logos, color palettes, fonts).",
      "Writing story-driven content pillars and campaign copywriting.",
      "Layout and rendering of rigid packaging boxes and receipt cards."
    ],
    deliverable: {
      name: "Experience Touchpoint System",
      description: "The complete visual, digital, and physical assets built and ready for staging deployment."
    },
    localApplication: "We designed a custom cardamom-scented unboxing box and tissue seals for an online brand, turning parcels into shareable gifts.",
    faqs: [
      { question: "Do you use generic page builders?", answer: "No, we custom-code high-performance websites in Next.js to ensure speed and 100/100 Lighthouse performance." },
      { question: "How do you test unboxing packaging?", answer: "We test multiple box weights and sizes to ensure items arrive safe and look premium." }
    ]
  },
  {
    slug: "deliver",
    number: "04",
    title: "Deliver Phase",
    subtitle: "লাইভ লঞ্চ, ক্যাম্পেইন রান এবং প্রিমিয়াম সলিউশন ডেলিভারি।",
    overview: "In the Deliver phase, we deploy your custom web systems, launch marketing campaigns, and print and distribute physical branding packaging.",
    whyItMatters: "Execution is everything. Seamless launch ensures that your first impression builds trust and commands immediate value.",
    actions: [
      "Pushing Next.js code to production hosting with server configurations.",
      "Executing campaign pushes across social, influencer, and web channels.",
      "Fulfilling print orders for rigid boxes, custom cards, and stickers.",
      "Deploying interactive tools and calculators on live sites."
    ],
    deliverable: {
      name: "Live Brand Launch",
      description: "Your fully functional digital and physical experience system deployed live to the public."
    },
    localApplication: "We launched an e-commerce brand's portal with dynamic SMS triggers, ensuring users received notifications instantly upon checkout.",
    faqs: [
      { question: "How do you ensure smooth deployment?", answer: "We run staging tests, verify database connections, check API speed, and test payment gateway paths." }
    ]
  },
  {
    slug: "deepen",
    number: "05",
    title: "Deepen Phase",
    subtitle: "গ্রাহকের ফিডব্যাক এবং কনভার্সন এনালাইসিস করে রিলেশন স্ট্রং করি।",
    overview: "In the Deepen phase, we monitor user metrics, track cart abandonment reasons, collect unboxing stories, and optimize workflows.",
    whyItMatters: "Growth isn't a one-time launch. Continuous testing and improvement build customer loyalty and drive repeat visits.",
    actions: [
      "Analyzing web checkout drop-off paths to simplify fields further.",
      "Tracking repeat-purchase metrics and stamp card rewards claims.",
      "Running post-purchase feedback surveys via SMS and email.",
      "Refining ad content pillars based on organic engagement metrics."
    ],
    deliverable: {
      name: "Experience Optimization Log",
      description: "Monthly analytics reports highlighting checkout speed gains, retention improvements, and fix schedules."
    },
    localApplication: "We tracked checkout abandonment on a cosmetics store, simplified their billing form to one page, and increased conversions by 22%.",
    faqs: [
      { question: "What is experience optimization?", answer: "Analyzing real customer purchase data and feedback to make small adjustments that grow loyalty." }
    ]
  }
];

export function generateStaticParams() {
  return phases.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const phase = phases.find((p) => p.slug === slug);
  if (!phase) return { title: "Phase Not Found — Bishorgo Method" };

  return {
    title: `${phase.title} — The Bishorgo Method`,
    description: `${phase.title} details discover, define, design, deliver, and deepen steps for customer journey optimization.`,
    alternates: {
      canonical: `/method/${slug}`,
    },
  };
}

const getPhaseIcon = (slug: string) => {
  switch (slug) {
    case "discover":
      return <Compass size={24} className="text-[#C8922B]" />;
    case "define":
      return <FileText size={24} className="text-[#C8922B]" />;
    case "design":
      return <LayoutTemplate size={24} className="text-[#C8922B]" />;
    case "deliver":
      return <Send size={24} className="text-[#C8922B]" />;
    case "deepen":
      return <Eye size={24} className="text-[#C8922B]" />;
    default:
      return <Star size={24} className="text-[#C8922B]" />;
  }
};

export default async function MethodSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const phase = phases.find((p) => p.slug === slug);
  if (!phase) notFound();

  const faqSchema = phase.faqs && phase.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": phase.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <div className="bg-[#F8F5EF] text-[#222222] min-h-screen">
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero Section */}
      <section className="relative bg-[#014A36] text-[#FFFDF8] pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.03] pointer-events-none select-none">
          <svg className="w-full h-full fill-white" viewBox="0 0 600 600">
            <path d="M 133 55 L 135 57 L 135 67 L 137 70 L 140 90 L 151 120 L 160 137 L 181 165 L 199 183 L 225 202 L 247 214 L 262 219 L 266 222 L 281 226 L 282 228 L 256 236 L 228 249 L 199 270 L 175 295 L 163 312 L 147 344 L 132 398 L 133 401 L 131 404 L 132 408 L 172 376 L 272 308 L 285 295 L 293 284 L 301 268 L 300 267 L 304 258 L 308 238 L 308 219 L 301 190 L 293 173 L 276 152 L 245 129 L 235 124 L 231 120 L 158 74 Z" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C8922B]/8 blur-[90px] pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-5 md:px-10 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-3 justify-center">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              {getPhaseIcon(slug)}
            </div>
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#C8922B] uppercase">
              PHASE {phase.number}
            </span>
          </div>
          <h1 className="text-4xl md:text-6.5xl lg:text-7.5xl font-extrabold tracking-tight max-w-5xl mx-auto leading-tight">
            {phase.title}
          </h1>
          <p className="text-base md:text-xl text-[#FFFDF8]/85 max-w-3xl mx-auto leading-relaxed">
            {phase.subtitle}
          </p>
        </div>
      </section>

      {/* Main Breakdown Section */}
      <section className="py-24 md:py-32 bg-[#F8F5EF] text-[#222222]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Block: Overview & Actions */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] font-mono font-bold text-[#014A36]/65 tracking-widest uppercase block">
                PHASE OVERVIEW
              </span>
              <p className="text-base md:text-lg text-[#222222]/85 font-medium leading-relaxed">
                {phase.overview}
              </p>
              <p className="text-sm md:text-base text-[#222222]/75 leading-relaxed">
                {phase.whyItMatters}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-bold text-[#014A36] font-mono uppercase tracking-widest">
                CORE ACTIONS IN THIS PHASE
              </h3>
              <ul className="space-y-4">
                {phase.actions.map((act, i) => (
                  <li key={i} className="flex gap-3.5 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8922B] mt-2.5 flex-shrink-0" />
                    <span className="text-sm md:text-base font-semibold text-[#222222]/80 leading-relaxed">
                      {act}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Block: Deliverables Card & Local Application */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white border border-[#014A36]/10 p-8 rounded-3xl shadow-sm space-y-4">
              <span className="text-[10px] font-mono font-bold text-[#014A36]/60 tracking-widest uppercase block">
                PHASE KEY DELIVERABLE
              </span>
              <h4 className="text-xl font-bold text-[#014A36] leading-tight">
                {phase.deliverable.name}
              </h4>
              <p className="text-xs md:text-sm text-[#222222]/70 leading-relaxed font-medium">
                {phase.deliverable.description}
              </p>
              <div className="pt-4 border-t border-[#014A36]/5 flex items-center gap-1.5 text-xs font-mono font-bold text-[#C8922B]">
                <span>VERIFIED WORKFLOW</span>
                <Star size={12} className="fill-[#C8922B]" />
              </div>
            </div>

            <div className="bg-[#014A36]/3 border border-[#014A36]/5 p-6 rounded-2xl space-y-2">
              <span className="text-[10px] font-mono font-bold text-[#C8922B] tracking-widest uppercase block">
                REAL APPLICATION
              </span>
              <p className="text-xs md:text-sm text-[#222222]/85 font-medium leading-relaxed italic">
                “{phase.localApplication}”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs if any */}
      {phase.faqs && phase.faqs.length > 0 && <ServicesFAQ faqs={phase.faqs} />}

      {/* Audit CTA */}
      <section className="py-24 bg-[#014A36] text-[#FFFDF8] relative overflow-hidden border-t border-white/5">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            Apply the Method to your business.
          </h2>
          <p className="text-sm md:text-base text-[#FFFDF8]/70 font-medium max-w-xl mx-auto mb-10 leading-relaxed">
            Let us evaluate your customer touchpoints. We start with a comprehensive, free Experience Audit of your digital channels and unboxing loops.
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
}
