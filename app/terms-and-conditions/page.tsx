import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions — Bishorgo Experience",
  description: "Terms and conditions governing the use of Bishorgo Experience's website, audits, resources, and strategic consulting services.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions — Bishorgo Experience",
    description: "Terms and conditions governing the use of Bishorgo Experience's website, audits, resources, and strategic consulting services.",
    url: "https://bishorgoexperience.com/terms-and-conditions",
    images: [
      {
        url: "/images/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Terms & Conditions — Bishorgo Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions — Bishorgo Experience",
    description: "Terms and conditions governing the use of Bishorgo Experience's website, audits, resources, and strategic consulting services.",
    images: ["/images/brand/og-image.jpg"],
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-[#F8F5EF] text-[#222222] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-[#014A36] text-[#FFFDF8] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.03] pointer-events-none select-none">
          <svg className="w-full h-full fill-white" viewBox="0 0 600 600">
            <path d="M 133 55 L 135 57 L 135 67 L 137 70 L 140 90 L 151 120 L 160 137 L 181 165 L 199 183 L 225 202 L 247 214 L 262 219 L 266 222 L 281 226 L 282 228 L 256 236 L 228 249 L 199 270 L 175 295 L 163 312 L 147 344 L 132 398 L 133 401 L 131 404 L 132 408 L 172 376 L 272 308 L 285 295 L 293 284 L 301 268 L 300 267 L 304 258 L 308 238 L 308 219 L 301 190 L 293 173 L 276 152 L 245 129 L 235 124 L 231 120 L 158 74 Z" />
          </svg>
        </div>
        
        <div className="max-w-[1320px] mx-auto px-5 md:px-10 relative z-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] text-[#C8922B] uppercase hover:text-[#FFFDF8] transition-colors mb-6"
          >
            <ArrowLeft size={12} /> Return Home
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm md:text-base text-[#FFFDF8]/70 font-mono tracking-wider">
            Last Updated: June 22, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-[#F8F5EF]">
        <div className="max-w-[800px] mx-auto px-5">
          <div className="prose prose-forest text-[#222222]/85 font-medium leading-relaxed space-y-10">
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#014A36] font-bold text-xl md:text-2xl font-display">
                <Scale size={20} className="text-[#C8922B]" />
                <h2>1. Intellectual Property</h2>
              </div>
              <p>
                Unless otherwise stated, Bishorgo Experience and/or its licensors own the intellectual property rights for all material on this website, including but not limited to the brand strategies, frameworks, diagnostic tools, and resource checklists. All intellectual property rights are reserved. You may access this from Bishorgo Experience for your own personal or internal business use subjected to restrictions set in these terms and conditions.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-[#014A36] font-bold text-xl md:text-2xl font-display">2. Service Usage &amp; Free Audits</h2>
              <p>
                By requesting an Experience Audit or downloading any tool/checklist from this website, you agree to provide accurate business details and contact information. We reserve the right to decline audit services to any applicant at our sole discretion, without providing reasons.
              </p>
              <p>
                The audit reports and strategic insights provided represent professional advice based on the details shared. Implementations of recommendations are the sole responsibility of the business owner.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-[#014A36] font-bold text-xl md:text-2xl font-display">3. Disclaimer</h2>
              <p>
                To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will limit or exclude our or your liability for fraud or fraudulent misrepresentation, or any liabilities that may not be excluded under applicable law.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-[#014A36] font-bold text-xl md:text-2xl font-display">4. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of Bangladesh. Any dispute arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Dhaka, Bangladesh.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-[#014A36] font-bold text-xl md:text-2xl font-display">5. Contact Information</h2>
              <p>
                If you have any queries regarding any of our terms, please contact us at: <a href="mailto:hello@bishorgoexperience.com" className="text-[#014A36] underline hover:text-[#C8922B]">hello@bishorgoexperience.com</a>.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
