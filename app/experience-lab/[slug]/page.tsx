import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Bookmark } from "lucide-react";
import { getLabArticle, getAllLabSlugs } from "@/data/lab";

export function generateStaticParams() {
  return getAllLabSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getLabArticle(slug);
  if (!article) return { title: "Article Not Found — Experience Lab" };

  return {
    title: `${article.title} — Experience Lab`,
    description: article.summary,
    alternates: {
      canonical: `/experience-lab/${slug}`,
    },
    openGraph: {
      title: `${article.title} — Experience Lab`,
      description: article.summary,
      url: `https://bishorgoexperience.com/experience-lab/${slug}`,
      siteName: "Bishorgo Experience",
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function LabSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getLabArticle(slug);
  if (!article) notFound();

  // Create FAQ or Article schema if relevant
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.summary,
    "datePublished": article.date,
    "author": {
      "@type": "Organization",
      "name": "Bishorgo Experience",
      "url": "https://bishorgoexperience.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bishorgo Experience",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bishorgoexperience.com/favicons/apple-touch-icon.png"
      }
    }
  };

  // Determine internal links dynamically to avoid thin content
  const relatedLinks = [
    { label: "Customer Journey Design", href: "/services/customer-journey-design" },
    { label: "Brand Strategy Help", href: "/services/brand-strategy" },
    { label: "Free Experience Audit", href: "/experience-audit" }
  ];

  return (
    <div className="bg-[#F8F5EF] text-[#222222] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-[#014A36] text-[#FFFDF8] pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.03] pointer-events-none select-none">
          <svg className="w-full h-full fill-white" viewBox="0 0 600 600">
            <path d="M 133 55 L 135 57 L 135 67 L 137 70 L 140 90 L 151 120 L 160 137 L 181 165 L 199 183 L 225 202 L 247 214 L 262 219 L 266 222 L 281 226 L 282 228 L 256 236 L 228 249 L 199 270 L 175 295 L 163 312 L 147 344 L 132 398 L 133 401 L 131 404 L 132 408 L 172 376 L 272 308 L 285 295 L 293 284 L 301 268 L 300 267 L 304 258 L 308 238 L 308 219 L 301 190 L 293 173 L 276 152 L 245 129 L 235 124 L 231 120 L 158 74 Z" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C8922B]/8 blur-[90px] pointer-events-none" />

        <div className="max-w-[1180px] mx-auto px-5 md:px-10 relative z-10 space-y-6 text-center">
          <div className="flex flex-wrap gap-4 items-center justify-center text-xs tracking-wider font-mono">
            <span className="font-bold text-[#C8922B] uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/5">
              {article.category}
            </span>
            <span className="text-[#FFFDF8]/70 flex items-center gap-1.5">
              <Calendar size={14} /> {article.date}
            </span>
            <span className="text-[#FFFDF8]/70 flex items-center gap-1.5">
              <Clock size={14} /> {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-5.5xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
            {article.title}
          </h1>

          {article.banglaTitle && (
            <p className="text-lg md:text-2xl font-bold text-[#C8922B]">
              {article.banglaTitle}
            </p>
          )}
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-[#F8F5EF] text-[#222222]">
        <div className="max-w-[840px] mx-auto px-5 space-y-10">
          
          {/* Bangla hook block if present */}
          {article.banglaHook && (
            <div className="bg-[#014A36]/3 border-l-4 border-[#C8922B] p-6 rounded-r-2xl">
              <p className="text-base md:text-lg font-semibold text-[#014A36] leading-relaxed italic">
                “{article.banglaHook}”
              </p>
            </div>
          )}

          {/* Article Body */}
          <div className="text-base md:text-lg text-[#222222]/80 leading-relaxed font-medium space-y-6">
            <p>{article.content}</p>
            
            <p className="text-sm text-[#222222]/70">
              When scaling your business, paid ads are only one way to get attention. Attention must convert into memory, or you are leaking budget. By designing structured customer touchpoints—such as single-page web checkouts, custom delivery tags, card postcards, and staff scripts—you turn transactional buyers into loyal regular advocates.
            </p>
          </div>

          {/* Bookmark signature */}
          <div className="pt-8 border-t border-[#014A36]/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <p className="text-xs text-[#222222]/55 font-mono font-bold uppercase tracking-widest flex items-center gap-2">
              <Bookmark size={14} className="text-[#C8922B]" />
              Observation from Bishorgo Experience Lab
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono font-bold uppercase">
              {relatedLinks.map((link, idx) => (
                <Link key={idx} href={link.href} className="text-[#014A36] hover:text-[#C8922B] flex items-center gap-1 transition-colors">
                  <span>{link.label}</span>
                  <ArrowRight size={10} />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Audit CTA Banner */}
      <section className="py-24 bg-[#014A36] text-[#FFFDF8] relative overflow-hidden border-t border-white/5">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            Apply these insights to your business.
          </h2>
          <p className="text-sm md:text-base text-[#FFFDF8]/70 font-medium max-w-xl mx-auto mb-10 leading-relaxed">
            Get a manual, custom Experience Audit of your digital channels and unboxing workflows to map where you are losing customer memory and conversion.
          </p>
          <Link
            href="/experience-audit"
            className="inline-flex items-center justify-center bg-[#C8922B] hover:bg-[#A87318] text-[#014A36] hover:text-[#FFFDF8] px-8 py-4.5 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-[#C8922B]/10 text-[15px] group"
          >
            <span>Request My Experience Audit</span>
            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
