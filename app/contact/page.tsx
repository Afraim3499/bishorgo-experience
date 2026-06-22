import React from "react";
import { Metadata } from "next";
import { ContactForm } from "../../components/sections/ContactForm";
import { Mail, Phone, MapPin, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Bishorgo Experience",
  description:
    "Tell us what you are building. Start a conversation with Bishorgo Experience for brand systems, Next.js web design, campaigns, and retail activations.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact — Bishorgo Experience",
    description:
      "Tell us what you are building. Start a conversation with Bishorgo Experience for brand systems, Next.js web design, campaigns, and retail activations.",
    url: "https://bishorgoexperience.com/contact",
    images: [
      {
        url: "/images/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Bishorgo Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Bishorgo Experience",
    description:
      "Tell us what you are building. Start a conversation with Bishorgo Experience for brand systems, Next.js web design, campaigns, and retail activations.",
    images: ["/images/brand/og-image.jpg"],
  },
};

const studioDetails = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "hello@bishorgo.com",
    href: "mailto:hello@bishorgo.com",
  },
  {
    icon: <Phone size={18} />,
    label: "WhatsApp",
    value: "+880 1711 000000",
    href: "https://wa.me/8801711000000",
  },
  {
    icon: <MapPin size={18} />,
    label: "Studio Location",
    value: "House 14, Road 8, Banani, Dhaka",
    href: "https://maps.google.com",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-[#F8F5EF] text-[#222222] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-[#014A36] text-[#FFFDF8] pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
        
        {/* Background visual graphics */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.03] pointer-events-none select-none">
          <svg className="w-full h-full fill-white" viewBox="0 0 600 600">
            <path d="M 133 55 L 135 57 L 135 67 L 137 70 L 140 90 L 151 120 L 160 137 L 181 165 L 199 183 L 225 202 L 247 214 L 262 219 L 266 222 L 281 226 L 282 228 L 256 236 L 228 249 L 199 270 L 175 295 L 163 312 L 147 344 L 132 398 L 133 401 L 131 404 L 132 408 L 172 376 L 272 308 L 285 295 L 293 284 L 301 268 L 300 267 L 304 258 L 308 238 L 308 219 L 301 190 L 293 173 L 276 152 L 245 129 L 235 124 L 231 120 L 158 74 Z" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C8922B]/8 blur-[90px] pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-5 md:px-10 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-[0.25em] text-[#C8922B] uppercase mb-5">
            <Star size={10} className="fill-[#C8922B]" /> GET IN TOUCH
          </span>
          <h1 className="text-4xl md:text-6.5xl lg:text-8xl font-extrabold tracking-tight max-w-5xl mx-auto leading-tight mb-8">
            Tell us what you are building.
          </h1>
          <p className="text-base md:text-xl text-[#FFFDF8]/80 leading-relaxed font-medium max-w-3xl mx-auto">
            Whether you want to redesign your brand experience from scratch, develop a high-performance website, or brainstorm a field activation campaign — let's talk.
          </p>
        </div>

      </section>

      {/* Info + Form Section */}
      <section className="py-24 md:py-32 bg-[#F8F5EF] text-[#222222]">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Direct channels & studio details */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#014A36] font-bold block mb-3 font-mono">
                  STUDIO CHANNELS
                </span>
                <h2 className="text-2xl md:text-4xl font-extrabold text-[#014A36] tracking-tight leading-tight">
                  Reach our strategy and design team:
                </h2>
              </div>

              <div className="space-y-6">
                {studioDetails.map((detail, idx) => (
                  <a
                    key={idx}
                    href={detail.href}
                    target={detail.label === "Studio Location" ? "_blank" : undefined}
                    rel={detail.label === "Studio Location" ? "noopener noreferrer" : undefined}
                    className="flex gap-4 items-center bg-[#014A36]/3 border border-[#014A36]/5 p-5 rounded-2xl hover:border-[#C8922B]/30 hover:bg-[#014A36]/5 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#014A36]/5 text-[#014A36] group-hover:bg-[#014A36] group-hover:text-[#FFFDF8] flex items-center justify-center flex-shrink-0 transition-colors">
                      {detail.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#222222]/45 uppercase block mb-0.5">
                        {detail.label}
                      </span>
                      <span className="text-sm font-semibold text-[#014A36] group-hover:text-[#C8922B] transition-colors leading-tight block">
                        {detail.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="border-l-4 border-[#C8922B] pl-4 text-xs text-[#222222]/55 leading-relaxed font-medium">
                We respond to all email and form submissions within 24 hours. For active consulting inquiries or project audits, feel free to schedule a face-to-face meet at our Banani studio.
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
