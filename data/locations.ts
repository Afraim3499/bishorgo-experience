export type LocationBlueprint = {
  slug: string;
  city: string;
  title: string;
  subtitle: string;
  description: string;
  retailHabits: string;
  psychologyProfile: string;
  gapHighlight: string;
  serviceFit: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  metadata: {
    title: string;
    description: string;
  };
};

export const locationsList: LocationBlueprint[] = [
  {
    slug: "dhaka",
    city: "Dhaka",
    title: "Dhaka Brand Experience Agency",
    subtitle: "Helping Dhaka's leading consumer brands command premium value through behavior-driven customer experiences.",
    description: "In Dhaka's hyper-competitive retail, cafe, and ecommerce space, standing out is difficult. We design experiences that make brands easier to remember and build repeat visits.",
    retailHabits: "High mobile usage, fast scrolls, reliance on Facebook Messenger conversations, and expectations of fast, door-step delivery.",
    psychologyProfile: "Dhaka consumers value convenience and speed. However, they are highly loyal to brands that treat them with respect, present clean visuals, and offer premium unboxings.",
    gapHighlight: "Late chat replies, generic plastic parcel bags, slow checkouts, and hard-to-navigate storefronts.",
    serviceFit: "Brand Strategy, Website Experience, Content pillars, and Custom packaging unboxings.",
    faqs: [
      { question: "How does Bishorgo serve Dhaka businesses?", answer: "We visit your store or audit your online channels manually, design custom playbooks, and build high-speed Next.js portals." },
      { question: "Where is your studio located?", answer: "Our design workshop is based in Banani, Dhaka. You can schedule a face-to-face meeting via our contact form." }
    ],
    metadata: {
      title: "Brand Experience Agency in Dhaka — Bishorgo",
      description: "Build a brand Dhaka shoppers remember. Discover experience audits, custom web design, and unboxing packaging strategies for Dhaka businesses."
    }
  },
  {
    slug: "gulshan-banani",
    city: "Gulshan & Banani",
    title: "Brand & Experience Design for Gulshan & Banani Businesses",
    subtitle: "Premium branding, sensory retail layout curation, and conversion web experiences for upscale local markets.",
    description: "Gulshan and Banani represent the premium retail heart of Bangladesh. Shoppers here expect global standards of design, service speed, and packaging care.",
    retailHabits: "Expectation of hospitality-level greetings, aesthetic store corners, scented packages, and fast premium online delivery cycles.",
    psychologyProfile: "High-income consumers who associate price with quality. They reject cheap visual layouts, generic templates, or slow automated responses.",
    gapHighlight: "Harsh lighting in trial rooms, generic receipt sheets, lack of personalized follow-up, and cluttered storefront layouts.",
    serviceFit: "Premium visual identity, in-store sensory design, custom unboxing chests, and high-end landing pages.",
    faqs: [
      { question: "Why do Gulshan/Banani brands need experience design?", answer: "To justify premium pricing. When design, packaging, and table greetings feel high-end, you move past price wars." }
    ],
    metadata: {
      title: "Upscale Brand & Retail Experience in Gulshan & Banani — Bishorgo",
      description: "Command premium values. Design sensory boutique trial rooms, custom unboxing packages, and fast portals for Gulshan & Banani shoppers."
    }
  },
  {
    slug: "bashundhara",
    city: "Bashundhara",
    title: "Brand & Web Experience for Bashundhara Businesses",
    subtitle: "High-performance website development, brand strategy, and social content systems for Bashundhara.",
    description: "Serving Bashundhara's tech startups, diagnostics, real estate developers, and local cafes needing sharp, modern brand presentation.",
    retailHabits: "High student and tech professional demographics seeking mobile-first reservation tools, online food delivery, and digital catalog menus.",
    psychologyProfile: "Value-focused but tech-savvy. They expect websites to load in under a second and registration forms to take less than 20 seconds.",
    gapHighlight: "Slow web apps, missing map parameters, lack of online schedules, and cluttered menus.",
    serviceFit: "Next.js website design, startup onboarding design, and local social media strategy.",
    faqs: [
      { question: "How can Bashundhara businesses improve local SEO?", answer: "Ensure maps listings are complete, link to a fast mobile-ready website, and capture neighborhood reviews." }
    ],
    metadata: {
      title: "Brand & Web Experience for Bashundhara Businesses — Bishorgo",
      description: "Build fast Next.js websites, mobile reservation checkouts, and local social content systems for Bashundhara brands."
    }
  },
  {
    slug: "chattogram",
    city: "Chattogram",
    title: "Chattogram Brand Experience Agency",
    subtitle: "Expanding regional retail and shipping brands through strategic positioning and touchpoint systems.",
    description: "Chattogram has strong trading, logistics, and retail brands. We help Chattogram businesses modernize their customer touchpoints for national and international expansion.",
    retailHabits: "Traditional trust-based buying coupled with growing expectations of fast modern digital e-commerce channels.",
    psychologyProfile: "Family-business legacy trust is high. Buyers respond to brands that honor relationships, offer clear guarantees, and present clean visual styles.",
    gapHighlight: "Vague value messaging, generic visual assets, and lack of automated SMS delivery notices.",
    serviceFit: "Corporate brand strategy, shipping notifications layout, wayfinding signage, and conversion-ready websites.",
    faqs: [
      { question: "Do you serve clients outside Dhaka?", answer: "Yes, we work with Chattogram businesses through structured remote audits and on-site workshop trips." }
    ],
    metadata: {
      title: "Brand Experience & Web Agency in Chattogram — Bishorgo",
      description: "Scale your trading or retail brand nationally. Map touchpoints, build fast portals, and coordinate campaigns for Chattogram businesses."
    }
  },
  {
    slug: "sylhet",
    city: "Sylhet",
    title: "Brand Experience Agency in Sylhet",
    subtitle: "Premium branding, real estate showcases, and hospitality activations for Sylhet's growing market.",
    description: "Sylhet has high demand for luxury housing, wedding events, dining cafes, and hospitality services. We design brand recall paths that stand out.",
    retailHabits: "Appreciation for premium aesthetics, luxury hospitality care, and digital booking routes.",
    psychologyProfile: "Sylhet consumers value luxury, clean presentation, and clear international design standards, often influenced by global travels.",
    gapHighlight: "Plain project brochures, cold site tour greetings, and generic ticket booking paths.",
    serviceFit: "Luxury brand strategy, property showcase portals, event activation photo spots, and premium packaging.",
    faqs: [
      { question: "Can you help with hotel or cafe design in Sylhet?", answer: "Yes. We design the visual branding, menu stories, staff greeting scripts, and unboxing parameters for hospitality brands." }
    ],
    metadata: {
      title: "Luxury Brand & Hospitality Experience in Sylhet — Bishorgo",
      description: "Design premium property mini-sites, event activations, and cafe greeting systems for Sylhet's growing premium market."
    }
  }
];

export function getAllLocationSlugs(): string[] {
  return locationsList.map((l) => l.slug);
}

export function getLocationPage(slug: string): LocationBlueprint | undefined {
  return locationsList.find((l) => l.slug === slug);
}
