export interface ServiceItem {
  id: string;
  title: string;
  problem: string;
  solution: string; // What Bishorgo does
  outcome: string;
  touchpoints: string[];
}

export const servicesPhilosophy = {
  headline: "Services built around memory, not noise.",
  subheadline: "From brand strategy to websites, content, campaigns, and field activation — Bishorgo connects every touchpoint into one experience system people can remember.",
  philosophyText: "We do not treat branding, websites, content, and activations as separate tasks. We connect them into one cohesive customer experience. When all touchpoints work together under a unified strategy, the brand becomes unforgettable.",
};

export const detailedServices: ServiceItem[] = [
  {
    id: "brand-strategy",
    title: "Brand Strategy",
    problem: "Most brands compete on price because they lack a distinct, clear position in the customer's mind.",
    solution: "We define your core brand belief, unique positioning framework, target customer persona, and verbal brand narrative.",
    outcome: "A clear, strategic guide that ensures all marketing and product choices support a premium brand position.",
    touchpoints: ["Positioning Framework", "Competitor Gap Analysis", "Brand Narrative Map"],
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    problem: "Visual assets are often generic templates, making the business look identical to ten competitors.",
    solution: "We build custom logo systems, unified typography scales, harmonious HSL palettes, and visual design guidelines.",
    outcome: "A distinct, premium visual system that is instantly recognizable and builds immediate trust.",
    touchpoints: ["Logo System", "Color System", "Brand Style Guide", "Visual Templates"],
  },
  {
    id: "website-experience",
    title: "Website Experience",
    problem: "Slow loading times, template look, and checkout friction cause visitors to bounce before buying.",
    solution: "We develop blazing-fast, custom Next.js websites and landing pages optimized for readability, conversions, and speed.",
    outcome: "A premium, responsive digital experience that turns casual search traffic into high-converting customers.",
    touchpoints: ["Next.js App", "Figma Design", "Page Speed Optimization", "SXO Tuning"],
  },
  {
    id: "content-strategy",
    title: "Content Strategy",
    problem: "Creating content calendars just to 'post daily' builds zero long-term memory or business value.",
    solution: "We build storytelling content structures, tone of voice guidelines, and structured message funnels.",
    outcome: "An editorial flow that establishes your brand's authority and keeps your audience actively engaged.",
    touchpoints: ["Storytelling Framework", "Content Calendars", "Tone of Voice Guide"],
  },
  {
    id: "social-media-strategy",
    title: "Social Media Strategy",
    problem: "Social media feeds look like catalogs, focused purely on direct selling and pushing ads.",
    solution: "We design social media ecosystems that blend community storytelling, helpful insights, and subtle conversion triggers.",
    outcome: "A social presence that generates active recall, trust, and organic word-of-mouth recommendations.",
    touchpoints: ["Social Grid Layouts", "Engagement Blueprints", "Social Copy Templates"],
  },
  {
    id: "campaign-strategy",
    title: "Campaign Strategy",
    problem: "Ad campaigns produce temporary clicks but fail to register any lasting brand memory or loyalty.",
    solution: "We structure memorable ad creatives, campaign stories, landing page paths, and retention strategies.",
    outcome: "Higher return on ad spend and a growing base of repeat customers rather than single-purchase clicks.",
    touchpoints: ["Ad Visual Guides", "Conversion Funnels", "Campaign Concept Books"],
  },
  {
    id: "field-marketing",
    title: "Field Marketing",
    problem: "Brands live purely on screens, failing to create tangible human relationships or local presence.",
    solution: "We plan localized street strategies, target community activations, and community activations.",
    outcome: "High-impact interactions that establish local relevance and earn organic shares.",
    touchpoints: ["Street Campaign Map", "Community Activation Guide", "Field Material Layouts"],
  },
  {
    id: "event-activation",
    title: "Event Activation",
    problem: "Corporate events or promotional booths feel boring, generic, and easily forgotten.",
    solution: "We design sensory physical spaces, unboxing corners, and interactive physical touchpoints.",
    outcome: "A memorable real-world event experience that sparks organic visual sharing on social platforms.",
    touchpoints: ["Physical Space Render", "Sensory Flow Charts", "Interaction Blueprints"],
  },
  {
    id: "customer-journey-design",
    title: "Customer Journey Design",
    problem: "Fragmented customer touchpoints cause friction post-purchase, breaking customer trust.",
    solution: "We map the entire lifecycle from discovery to delivery, support, and post-purchase follow-ups.",
    outcome: "A smooth end-to-end journey that builds strong brand loyalty and turns customers into brand advocates.",
    touchpoints: ["Journey Maps", "Touchpoint Audits", "Support Script Guidelines"],
  },
  {
    id: "experience-marketing",
    title: "Experience Marketing",
    problem: "Marketing focuses only on product features, ignoring the emotional feeling of the purchase.",
    solution: "We integrate packaging scent, customized unboxing boxes, handwritten notes, and post-purchase loops.",
    outcome: "An unboxing peak that customers share on Instagram, replacing a portion of the paid advertising budget.",
    touchpoints: ["Scent Customization", "Packaging Design Box", "Founder Note Layouts"],
  },
  {
    id: "landing-page-design",
    title: "Landing Page Design",
    problem: "Paid campaign traffic is sent to a generic homepage, causing visitors to bounce without converting.",
    solution: "We design and build high-converting, blazing-fast landing pages with focused messaging and optimized conversion actions.",
    outcome: "Higher conversion rates and better return on ad spend from your paid traffic campaigns.",
    touchpoints: ["Figma UI Design", "Page Structure Plan", "Responsive Build", "CRO Tuning"],
  },
  {
    id: "creative-direction",
    title: "Creative Direction",
    problem: "Content, campaigns, and brand materials are produced in isolation, making the brand look inconsistent and disjointed.",
    solution: "We define the creative vision, visual style guides, and quality benchmarks for all your brand outputs.",
    outcome: "A cohesive, premium brand presence that looks consistent across all formats and platforms.",
    touchpoints: ["Creative Concept Guide", "Photography Style Guide", "Moodboard Reference"],
  },
];
