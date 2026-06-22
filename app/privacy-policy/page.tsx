import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Bishorgo Experience",
  description: "How Bishorgo Experience collects, uses, and safeguards customer information and client data in compliance with best practices.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy — Bishorgo Experience",
    description: "How Bishorgo Experience collects, uses, and safeguards customer information and client data in compliance with best practices.",
    url: "https://bishorgoexperience.com/privacy-policy",
    images: [
      {
        url: "/images/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy — Bishorgo Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Bishorgo Experience",
    description: "How Bishorgo Experience collects, uses, and safeguards customer information and client data in compliance with best practices.",
    images: ["/images/brand/og-image.jpg"],
  },
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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
                <Shield size={20} className="text-[#C8922B]" />
                <h2>1. Introduction</h2>
              </div>
              <p>
                At Bishorgo Experience (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), we respect your privacy and are committed to protecting your personal data. This privacy policy informs you about how we look after your personal data when you visit our website (regardless of where you visit it from) and tells you about your privacy rights and how the law protects you.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-[#014A36] font-bold text-xl md:text-2xl font-display">2. Data We Collect</h2>
              <p>
                We may collect, use, store, and transfer different kinds of personal data about you, which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Identity Data</strong> includes first name, last name, username, or similar identifier.</li>
                <li><strong>Contact Data</strong> includes email address, telephone numbers, and company name.</li>
                <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li><strong>Usage Data</strong> includes information about how you use our website, services, and resources.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-[#014A36] font-bold text-xl md:text-2xl font-display">3. How We Use Your Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>To register you as a new client or contact.</li>
                <li>To deliver our free Experience Audits and checklists requested by you.</li>
                <li>To manage our relationship with you, including notifying you about changes to our terms or privacy policy.</li>
                <li>To use data analytics to improve our website, services, marketing, and customer relationships.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-[#014A36] font-bold text-xl md:text-2xl font-display">4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-[#014A36] font-bold text-xl md:text-2xl font-display">5. Your Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, or restriction of processing of your personal data.
              </p>
              <p>
                If you wish to exercise any of these rights, or have any questions about this privacy policy, please contact us at <a href="mailto:hello@bishorgoexperience.com" className="text-[#014A36] underline hover:text-[#C8922B]">hello@bishorgoexperience.com</a>.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
