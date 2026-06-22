export type GlossaryBlueprint = {
  slug: string;
  term: string;
  definition: string;
  whyItMatters: string;
  localExample: string;
  commonMistake: string;
  howBishorgoHelps: string;
  relatedPages: { label: string; href: string }[];
  metadata: {
    title: string;
    description: string;
  };
};

export const glossaryTerms: GlossaryBlueprint[] = [
  {
    slug: "brand-experience",
    term: "Brand Experience",
    definition: "The overall sensory, emotional, and cognitive response a customer registers when interacting with any brand touchpoint — from social ads, website speed, support scripts, physical storefronts, and unboxing packaging.",
    whyItMatters: "Attention is a commodity. Perceptions are built on how you make customers feel during their interactions. A premium experience commands value and secures returns.",
    localExample: "A Banani fashion store dressing its trial rooms with soft studio spotlights, offering water, and printing helpful style quotes on receipt boxes.",
    commonMistake: "Assuming branding is only a logo or billboard. A beautiful logo cannot save a slow, confusing website or a late messenger response.",
    howBishorgoHelps: "We design complete experience systems, aligning all visual layout, copy messaging, digital speed, and physical unboxings.",
    relatedPages: [
      { label: "Services", href: "/services" },
      { label: "Customer Journey Design", href: "/services/customer-journey-design" }
    ],
    metadata: {
      title: "What is Brand Experience? — Glossary Definition",
      description: "Learn what Brand Experience actually means. Read definitions, Bangladeshi business examples, common mistakes, and how to optimize touchpoints."
    }
  },
  {
    slug: "customer-journey",
    term: "Customer Journey",
    definition: "The complete timeline of physical and digital steps a customer walks through to discover, check, book, purchase, unbox, and recommend your brand.",
    whyItMatters: "Mapping the journey locates the exact operational and technical friction points causing user drop-offs and lost sales.",
    localExample: "An online cosmetics store sending WhatsApp delivery notifications and packing items with scented wrapping paper and thank you cards.",
    commonMistake: "Ignoring post-purchase. Most businesses drop contact after payment clears, losing the lifetime repeat customer value.",
    howBishorgoHelps: "We audit, map, and design clean customer journey lines with clear peak moments and retention loops.",
    relatedPages: [
      { label: "Method", href: "/method" },
      { label: "Experience Audit", href: "/experience-audit" }
    ],
    metadata: {
      title: "What is a Customer Journey? — Glossary Definition",
      description: "Discover what a Customer Journey is, how to map client touchpoints, and how to identify conversion leaks in your operational flow."
    }
  },
  {
    slug: "touchpoint",
    term: "Brand Touchpoint",
    definition: "Any individual moment of interaction between a buyer and a business. This includes social media posts, mobile checkout inputs, packaging text, and staff greetings.",
    whyItMatters: "A customer's brand perception is only as strong as your weakest touchpoint. One slow reply or cheap bag can wash away premium trust.",
    localExample: "A local cafe printing custom roast origins card inserts to place under coffee cups rather than serving blank saucers.",
    commonMistake: "Managing touchpoints in siloes. Having separate teams run social, web, and shipping with no unified experience playbook.",
    howBishorgoHelps: "We establish a Touchpoint Blueprint specifying visual, verbal, and sensory guidelines for every interaction channel.",
    relatedPages: [
      { label: "Frameworks", href: "/frameworks/touchpoint-blueprint" },
      { label: "Brand Strategy", href: "/services/brand-strategy" }
    ],
    metadata: {
      title: "What is a Brand Touchpoint? — Glossary Definition",
      description: "Define brand touchpoints. Learn why minor customer interaction points like receipts and SMS notifications make or break brand recall."
    }
  },
  {
    slug: "brand-recall",
    term: "Brand Recall",
    definition: "The cognitive ability of a consumer to remember your brand name and core promise naturally when thinking of a product category, without seeing an active ad.",
    whyItMatters: "Paid ad CAC is constantly increasing. Natural recall ensures customers return to you naturally, lowering acquisition costs.",
    localExample: "A consumer search thinking 'Bishorgo' when wanting experience strategy rather than searching generic marketing terms.",
    commonMistake: "Boosting posts for passive reach, assuming impressions equal memory. If content is generic, reach does not build name association.",
    howBishorgoHelps: "We design signature sensory cues, memorable slogans, and exit rituals that boost retention rates.",
    relatedPages: [
      { label: "Brand Recall System", href: "/frameworks/brand-recall-system" },
      { label: "Experience Lab", href: "/experience-lab" }
    ],
    metadata: {
      title: "What is Brand Recall? — Glossary Definition",
      description: "Learn the definition of Brand Recall and cognitive retention. Discover how to build natural brand name memory without ad boosting."
    }
  },
  {
    slug: "experience-marketing",
    term: "Experience Marketing",
    definition: "A marketing discipline focusing on creating memorable, interactive physical and digital engagements that turn buyers into active advocates.",
    whyItMatters: "Standard campaigns are ignored. Experiential activations create emotional connections and generate free word-of-mouth.",
    localExample: "A gourmet bakery sending out fresh sample scent tags with pre-order invitations in premium custom envelopes.",
    commonMistake: "Relying entirely on digital discount codes, which drives transactional buyers who leave once prices change.",
    howBishorgoHelps: "We craft activations, physical unboxings, and interactive web elements that drive user-generated content.",
    relatedPages: [
      { label: "Experience Marketing Service", href: "/services/experience-marketing" },
      { label: "Case Studies", href: "/case-studies" }
    ],
    metadata: {
      title: "What is Experience Marketing? — Glossary Definition",
      description: "Discover Experience Marketing principles, interactive activations, unboxing designs, and customer engagement blueprints."
    }
  },
  {
    slug: "field-marketing",
    term: "Field Marketing",
    definition: "Direct, face-to-face brand activations and promotions carried out in public spaces, retail stores, or events to showcase product utility physically.",
    whyItMatters: "Allows customers to see, touch, and sample products, bypassing online skepticism and building immediate trust.",
    localExample: "A local organic beverage brand placing beautifully themed tasting booths in Banani superstores with friendly guides.",
    commonMistake: "Using aggressive sales promoters who annoy passersby, creating a negative brand association.",
    howBishorgoHelps: "We plan friendly campaigns, design interactive booths, and script supportive promoter playbooks.",
    relatedPages: [
      { label: "Field Marketing Service", href: "/services/field-marketing" },
      { label: "Event Activation", href: "/services/event-activation" }
    ],
    metadata: {
      title: "What is Field Marketing? — Glossary Definition",
      description: "Define Field Marketing. Learn how to plan face-to-face product sample campaigns, local store booths, and script guides."
    }
  },
  {
    slug: "event-activation",
    term: "Event Activation",
    definition: "Creating dedicated, immersive event setups or experiential booths at festivals and launches to drive direct audience relationships.",
    whyItMatters: "Events provide concentrated attention. Redesigning checkins, signage, and photo zones ensures guests share visual memories.",
    localExample: "An arts festival setting up custom aesthetic mirror installations and offering instant digital photo links.",
    commonMistake: "Treating check-ins as a chore. Long entry lines and gate confusion wash away the event's excitement before it starts.",
    howBishorgoHelps: "We optimize check-in paths, design photo spots, coordinate digital ticket pages, and wayfinding signage.",
    relatedPages: [
      { label: "Event Activation Service", href: "/services/event-activation" },
      { label: "Campaign Strategy", href: "/services/campaign-strategy" }
    ],
    metadata: {
      title: "What is Event Activation? — Glossary Definition",
      description: "Define Event Activation. Learn to design check-in lines, photo zones, ticket checkouts, and custom event signage."
    }
  },
  {
    slug: "brand-positioning",
    term: "Brand Positioning",
    definition: "The strategic act of designing a brand's offering and character to occupy a distinct, valued place in the target audience's mind.",
    whyItMatters: "Positioning clarifies why you are the unique choice, letting you charge premium pricing without competing with low-cost rivals.",
    localExample: "A software agency positioning itself as an 'Experience Studio' rather than a generic 'Software Developer'.",
    commonMistake: "Trying to stand for everything, resulting in vague value statements that fail to connect with anyone.",
    howBishorgoHelps: "We define message pillars, core promises, differentiator statements, and prioritize customer segments.",
    relatedPages: [
      { label: "Brand Strategy Service", href: "/services/brand-strategy" },
      { label: "About Us", href: "/about" }
    ],
    metadata: {
      title: "What is Brand Positioning? — Glossary Definition",
      description: "Define Brand Positioning. Learn how to craft differentiator statements, value copy, and command premium pricing."
    }
  }
];

export function getAllGlossarySlugs(): string[] {
  return glossaryTerms.map((g) => g.slug);
}

export function getGlossaryTerm(slug: string): GlossaryBlueprint | undefined {
  return glossaryTerms.find((g) => g.slug === slug);
}
