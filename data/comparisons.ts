export type ComparisonBlueprint = {
  slug: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  comparisonTable: {
    feature: string;
    standardAgency: string;
    bishorgoStudio: string;
  }[];
  whyChooseUs: string;
  ctaText: string;
  metadata: {
    title: string;
    description: string;
  };
};

export const comparisonsList: ComparisonBlueprint[] = [
  {
    slug: "marketing-agency-vs-experience-agency",
    label: "Marketing vs Experience",
    title: "Marketing Agency vs Experience Design Agency",
    subtitle: "Why buying temporary attention is a waste of capital compared to designing long-term memory loops.",
    description: "Standard marketing agencies focus on top-of-funnel boosting and campaign reach. Bishorgo Experience designs the full journey to ensure that once a customer lands, they convert, buy, and return.",
    comparisonTable: [
      { feature: "Primary Metric", standardAgency: "Impressions, Clicks, and Reach", bishorgoStudio: "Recall Rate, Return Visits, and LTV" },
      { feature: "Budget Focus", standardAgency: "Boosting posts, paid ads, and print distribution", bishorgoStudio: "Journey design, web conversion, and unboxings" },
      { feature: "Customer End", standardAgency: "The checkout payment clicks clear", bishorgoStudio: "SMS care follow-up and package unboxing moments" },
      { feature: "Pricing Pressure", standardAgency: "Compete on discount campaigns", bishorgoStudio: "Command premium values via experience quality" }
    ],
    whyChooseUs: "Choose an experience agency if you want organic customer recommendations and repeat purchase loops to naturally replace paid facebook ad spends.",
    ctaText: "Map your experience gaps with an audit.",
    metadata: {
      title: "Marketing Agency vs Experience Studio Comparison — Bishorgo",
      description: "Why pay for clicks when you leak customer recall? Compare standard reach marketing with Bishorgo's memory experience design."
    }
  },
  {
    slug: "branding-agency-vs-experience-agency",
    label: "Branding vs Experience",
    title: "Branding Agency vs Experience Design Agency",
    subtitle: "A beautiful logo is just a cosmetic asset. An experience system determines how it is remembered.",
    description: "Traditional design agencies focus on visual elements like logos, color palettes, and brochures. Bishorgo connects visual identity to human behaviors, greetings, speeds, and unboxing rituals.",
    comparisonTable: [
      { feature: "Core Deliverable", standardAgency: "Visual brand assets (Logo, colors, type guidelines)", bishorgoStudio: "Unified Touchpoint Blueprint™ (Visuals + Behavior)" },
      { feature: "Operational Scope", standardAgency: "Stops at exporting visual files", bishorgoStudio: "Audits site speeds, unboxing boxes, and scripts" },
      { feature: "Customer Context", standardAgency: "How the logo looks on paper/screens", bishorgoStudio: "How the customer feels at the peak and end of visits" },
      { feature: "Differentiator", standardAgency: "Artistic style and layout aesthetics", bishorgoStudio: "Cognitive psychology and return behavior loops" }
    ],
    whyChooseUs: "Choose us if you want your visual identity to carry deep meaning across checkouts, staff scripts, and physical unboxings, creating instant brand recognition.",
    ctaText: "Align your visual branding across channels.",
    metadata: {
      title: "Branding Agency vs Experience Studio Comparison — Bishorgo",
      description: "A logo alone cannot fix a confusing checkout or late replies. Compare traditional visual design with complete experience systems."
    }
  },
  {
    slug: "website-agency-vs-website-experience",
    label: "Web Agency vs Web Experience",
    title: "Web Development Agency vs Website Experience (UX/SXO)",
    subtitle: "Code templates display text. Optimized web experiences convert visitors into leads.",
    description: "Standard web developers build sites using generic templates or heavy frameworks. We build custom Next.js web systems focused on speed, zero layout shift, semantic hierarchy, and mobile checkouts.",
    comparisonTable: [
      { feature: "Performance Goal", standardAgency: "Site runs without compile errors", bishorgoStudio: "100/100 Lighthouse speed, zero layout shift (CLS)" },
      { feature: "Checkout Flow", standardAgency: "Standard multi-page templates", bishorgoStudio: "Single-page, zero-friction local checkout lanes" },
      { feature: "SEO & AI Indexing", standardAgency: "Basic meta title tags only", bishorgoStudio: "JSON-LD schemas, alternate canonicals, and structure" },
      { feature: "Customization", standardAgency: "generic page templates", bishorgoStudio: "Custom interactive tools and product walkthroughs" }
    ],
    whyChooseUs: "Choose website experience design if you want your portal to load instantly on local mobile networks, present clear value statements, and convert visitors at double the standard rate.",
    ctaText: "Audit your website conversion friction.",
    metadata: {
      title: "Web Agency vs Website Experience Comparison — Bishorgo",
      description: "Generic portals drive mobile visitors away. Compare standard web coding with Bishorgo's conversion-ready Next.js experiences."
    }
  },
  {
    slug: "social-media-agency-vs-brand-memory-system",
    label: "Social Agency vs Memory System",
    title: "Social Media Agency vs Brand Recall System",
    subtitle: "Stop posting daily catalog grids. Build content pillars that drive active recall.",
    description: "Standard social agencies focus on post counts, copy captions, and basic graphics. Bishorgo creates unified message architectures, community dialogue prompts, and response scripts.",
    comparisonTable: [
      { feature: "Content Focus", standardAgency: "Daily catalog posts and updates", bishorgoStudio: "Value pillars, story narratives, and prompts" },
      { feature: "Design System", standardAgency: "Random templates changing weekly", bishorgoStudio: "Cohesive visual guidelines that build recognition" },
      { feature: "Dialogue Handling", standardAgency: "Letting bots spam 'inbox please'", bishorgoStudio: "Auditing response speed and script politeness" },
      { feature: "Primary Metric", standardAgency: "Follower counts and passive reach", bishorgoStudio: "Organic shares, comments count, and active recall" }
    ],
    whyChooseUs: "Choose a brand recall system if you want your social profiles to build real community trust and drive active inquiries instead of generic 'price?' scroll comments.",
    ctaText: "Rebuild your social content pillars.",
    metadata: {
      title: "Social Agency vs Brand Recall System Comparison — Bishorgo",
      description: "Posting more catalog grids does not build customer relationships. Compare daily posting with Bishorgo's social recall systems."
    }
  }
];

export function getAllComparisonSlugs(): string[] {
  return comparisonsList.map((c) => c.slug);
}

export function getComparisonPage(slug: string): ComparisonBlueprint | undefined {
  return comparisonsList.find((c) => c.slug === slug);
}
