export type FrameworkBlueprint = {
  slug: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  steps: {
    title: string;
    desc: string;
  }[];
  application: string;
  commonMistake: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  metadata: {
    title: string;
    description: string;
  };
};

export const frameworksList: FrameworkBlueprint[] = [
  {
    slug: "customer-memory-score",
    label: "Customer Memory Score",
    title: "Customer Memory Score (CMS) Framework",
    subtitle: "A metrics-driven framework to calculate exactly how memorable your brand touchpoints are to local consumers.",
    description: "The Customer Memory Score helps businesses evaluate brand recall based on four variables: sensory footprint, checkout ease, dialogue responses, and post-purchase loops.",
    steps: [
      { title: "Sensory Impact (SI)", desc: "Evaluates visual consistency, signature brand cues, package styling, and scent tags." },
      { title: "Checkout Velocity (CV)", desc: "Measures checkout speed, payment integrations comfort, and form parameters friction." },
      { title: "Dialogue Care (DC)", desc: "Audits comment and messenger response speeds, live agent scripts, and automated bot loops." },
      { title: "Retention Magnet (RM)", desc: "Evaluates post-purchase check-ins, product care documentation, warranty access, and loyalty stamp rewards." }
    ],
    application: "Used to score a brand out of 100 before and after implementing Bishorgo's experience systems, proving operational improvements mathematically.",
    commonMistake: "Measuring clicks and impressions instead of return visits and name mentions in reviews. A brand can be seen a million times but forgotten in 5 minutes.",
    faqs: [
      { question: "How is the CMS calculated?", answer: "We run structured audits across 25 specific touchpoints, scoring each out of 4 to compute your total score." },
      { question: "Can we score our own brand?", answer: "Yes, we provide a simplified version of the finder tool on our resources page." }
    ],
    metadata: {
      title: "Customer Memory Score Framework — Bishorgo",
      description: "Measure your brand's recall. The Customer Memory Score calculates sensory impact, checkout ease, response speed, and customer retention."
    }
  },
  {
    slug: "experience-gap-map",
    label: "Experience Gap Map",
    title: "Experience Gap Map (EGM) Methodology",
    subtitle: "A diagnostic blueprint mapping where customer interest, trust, and brand memory drops along the purchasing path.",
    description: "The Experience Gap Map connects digital marketing ads directly to back-end order fulfillment and packaging receipt to isolate memory leaks.",
    steps: [
      { title: "Channel Inspection", desc: "Verifying if active social ads look premium or look like cheap stock catalog templates." },
      { title: "Portal Check", desc: "Locating layout speed issues and layout shifts causing visitor drops." },
      { title: "Transaction Review", desc: "Checking checkout gateway dropoffs and automated response friction." },
      { title: "Receipt Evaluation", desc: "Auditing delivery rider scripts, package unboxing wrappers, and thank you notes." }
    ],
    application: "Helps business owners visualize their operations as one continuous story rather than siloed tasks.",
    commonMistake: "Treating ads, websites, and shipping as disconnected departments. A customer sees your brand as one single relationship.",
    faqs: [
      { question: "What is an experience gap?", answer: "Any touchpoint (like a slow reply or cheap delivery bag) where your customer's brand perception drops." },
      { question: "How does the Gap Map help scaling?", answer: "By fixing conversion leaks in your funnel before you increase ad budgets, doubling return on ad spend." }
    ],
    metadata: {
      title: "Experience Gap Map Methodology — Bishorgo",
      description: "Find where your brand experience breaks. Map channel inspection, landing portals, checkouts, and unboxing packages."
    }
  },
  {
    slug: "touchpoint-blueprint",
    label: "Touchpoint Blueprint",
    title: "Unified Touchpoint Blueprint™",
    subtitle: "An operations layout specifying visual, written, and sensory rules for every customer interaction point.",
    description: "The Touchpoint Blueprint acts as an experience design guide, detailing colors, fonts, response scripts, packaging structures, and return procedures.",
    steps: [
      { title: "Digital Blueprint", desc: "Declaring exact visual layout grids, typography scales, page loading limits, and sitemap canonical structures." },
      { title: "Dialogue Playbook", desc: "Specifying receptionist greetings, messenger scripts, email notifications copy, and support paths." },
      { title: "Physical Cues Guide", desc: "Defining box cardboard weights, unboxing wraps, custom invoice notes, and scent spray rules." }
    ],
    application: "Serves as the master execution guide handed over to client operations, design, and shipping teams.",
    commonMistake: "Failing to document experience rules. Without a guide, staff behave inconsistently, diluting brand trust.",
    faqs: [
      { question: "How does it compare to brand guidelines?", answer: "Brand guidelines list logos and colors. The Touchpoint Blueprint details behavior, scripts, loading speeds, and unboxing packaging too." },
      { question: "Who maintains the blueprint?", answer: "Your operations team follows it, and we help review and optimize it quarterly." }
    ],
    metadata: {
      title: "Unified Touchpoint Blueprint Guide — Bishorgo",
      description: "Control every brand moment. Establish visual, written, and sensory rules across digital layout, chat scripts, and physical parcels."
    }
  },
  {
    slug: "brand-recall-system",
    label: "Brand Recall System",
    title: "Proprietary Brand Recall System (BRS)",
    subtitle: "A design system built to transform temporary transactions into lifelong customer memory loops.",
    description: "The Brand Recall System uses cognitive psychology guidelines to design sensory peak and end moments, boosting retention natural rate.",
    steps: [
      { title: "Peak Curation", desc: "Designing a memorable peak in the transaction, like an interactive product demo or signature table ritual." },
      { title: "Peak-End Optimisation", desc: "Optimizing the final transaction step (custom exit card, premium unboxing) to secure a lasting memory." },
      { title: "Dialogue Continuity", desc: "Maintaining a friendly, consistent tone across updates, notifications, and post-visit guides." }
    ],
    application: "The core framework used to design Bishorgo's client campaigns, websites, and unboxings, ensuring peak customer retention.",
    commonMistake: "Assuming customer satisfaction equals loyalty. A satisfied buyer forgets you; a customer who remembers you returns.",
    faqs: [
      { question: "What is the Peak-End Rule?", answer: "A psychological heuristic stating that people judge experiences mostly based on how they felt at the peak and the end of the journey." },
      { question: "How does the BRS replace ads?", answer: "By doubling repeat purchases and organic stories, reducing your need to acquire cold traffic repeatedly." }
    ],
    metadata: {
      title: "Brand Recall System & Retention Design — Bishorgo",
      description: "Turn transactions into memories. Discover Bishorgo's Brand Recall System, built on cognitive psychology, peak triggers, and ending design."
    }
  }
];

export function getAllFrameworkSlugs(): string[] {
  return frameworksList.map((f) => f.slug);
}

export function getFrameworkPage(slug: string): FrameworkBlueprint | undefined {
  return frameworksList.find((f) => f.slug === slug);
}
