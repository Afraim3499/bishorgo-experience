export type AuditPageBlueprint = {
  slug: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  scope: {
    title: string;
    desc: string;
    icon: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  metadata: {
    title: string;
    description: string;
  };
};

export const auditSubpages: AuditPageBlueprint[] = [
  {
    slug: "brand-audit",
    label: "Brand Experience Audit",
    title: "আপনার ব্র্যান্ডের গল্প এবং রিকল ভ্যালু পরীক্ষা করুন।",
    subtitle: "Verify if your core brand message is memorable, or if you are getting lost in social media noise.",
    description: "We audit your brand story, tone of voice, visual templates, and differentiator clarity to find why customers ask about prices but forget your name.",
    scope: [
      { title: "Story Consistency", desc: "We check if your brand story is explained similarly across social channels, websites, and booklets.", icon: "Sparkles" },
      { title: "Visual Recall Assets", desc: "We review color schemes, template systems, logo placements, and typography consistency.", icon: "Fingerprint" },
      { title: "Differentiator Integrity", desc: "We evaluate whether your core differentiator is immediately clear or if it sounds like competitor spam.", icon: "Compass" },
      { title: "Tone of Voice Fit", desc: "We analyze your written tone: in captions, responses, ads, and emails.", icon: "MessageCircle" }
    ],
    faqs: [
      { question: "What is a Brand Experience Audit?", answer: "It is a manual, strategic check of how your brand presents itself. We look at consistency, visual cohesion, messaging clarity, and memory triggers." },
      { question: "How does it help my business?", answer: "It identifies exactly where your messaging confuses buyers, helping you build trust and command higher value without competing on price." }
    ],
    metadata: {
      title: "Brand Experience Audit — Bishorgo",
      description: "Is your brand messaging confusing your audience? Get a manual Brand Experience Audit to review story, tone, and visual cohesion."
    }
  },
  {
    slug: "website-audit",
    label: "Website Experience Audit",
    title: "আপনার ওয়েবসাইটের কনভার্সন এবং স্পিড অডিট করুন।",
    subtitle: "Identify why your website has traffic but checkout carts and lead forms remain empty.",
    description: "We perform deep checks on mobile loading times, layout shifts, form fields friction, checkout gates, and navigation layout clarity.",
    scope: [
      { title: "Mobile Performance Check", desc: "We run speed audits simulating local 3G/4G connections to locate slow scripts and asset blockages.", icon: "Zap" },
      { title: "Checkout Path Audit", desc: "We trace form fields, gateway errors, and shipping cost displays causing cart abandonment.", icon: "ShoppingCart" },
      { title: "SXO & Navigation Mapping", desc: "We analyze menu structures, buttons placement, and value copy positioning to ensure clear visitor direction.", icon: "MousePointerClick" },
      { title: "SEO Semantic Checks", desc: "We audit heading hierarchies, alt tags, metadata structure, and JSON-LD schema validity.", icon: "Search" }
    ],
    faqs: [
      { question: "Why are website checkouts abandoned?", answer: "Usually because of forced registration paths, slow loading speeds, unexpected fees at checkout, or complex multi-step forms." },
      { question: "How do you test speed locally?", answer: "We audit performance on mobile devices under local network latency to simulate real customer checkout experiences." }
    ],
    metadata: {
      title: "Website Experience & UX Audit — Bishorgo",
      description: "Find why your website visitors leave without buying. Get a detailed speed, layout shift, and checkout flow audit from Bishorgo."
    }
  },
  {
    slug: "social-media-audit",
    label: "Social Media Experience Audit",
    title: "সোশ্যাল মিডিয়া পেজের কন্টেন্ট এবং এনগেজমেন্ট অডিট।",
    subtitle: "Audit why your social media page updates fail to capture attention and build active recall.",
    description: "We review your content pillars, visual templates, comment reply scripts, and campaign consistency to help you stop boosting generic posts.",
    scope: [
      { title: "Pillar Integrity Review", desc: "We check if your content communicates value, customer stories, or just flat catalog products.", icon: "Activity" },
      { title: "Comment Response Tuning", desc: "We review how fast your team responds and if auto-replies cause buyer frustration.", icon: "MessageSquare" },
      { title: "Visual Style Analysis", desc: "We check if post layouts, colors, and fonts maintain a consistent brand character.", icon: "Layout" },
      { title: "Campaign Structure Check", desc: "We evaluate whether campaigns drive brand memory or just temporary discounted clicks.", icon: "Calendar" }
    ],
    faqs: [
      { question: "Why is our page engagement low?", answer: "Often because content behaves like a flat product list. Engagement grows when posts offer utility, story, and invite dialogue." },
      { question: "How do you audit chat scripts?", answer: "We review automated bots and live agent answers for speed, politeness, and brand tone alignment." }
    ],
    metadata: {
      title: "Social Media Experience Audit — Bishorgo",
      description: "Stop boosting posts that get scrolled past. Rebuild your content pillars, templates, and chat scripts with a Social Media Audit."
    }
  },
  {
    slug: "customer-journey-audit",
    label: "Customer Journey Audit",
    title: "পুরো কাস্টমার জার্নির টাচপয়েন্ট এবং কানেকশন চেক।",
    subtitle: "Locate the exact friction points currently breaking trust between discovery, checkout, and unboxing.",
    description: "We map out every single customer interaction point — online ads, websites, chat boxes, delivery rider calls, packaging details, and follow-ups.",
    scope: [
      { title: "Friction Point Mapping", desc: "We locate where buyers drop off or lose interest between digital channels and receipt.", icon: "Route" },
      { title: "Delivery & Rider Cues", desc: "We audit how delivery agents interact and if timing updates reduce buyer waiting anxiety.", icon: "Truck" },
      { title: "Physical Unboxing Flow", desc: "We review parcel structures, wrappers, thank you notes, and scent cues for sensory recall.", icon: "Package" },
      { title: "Post-Purchase Loop", desc: "We audit product care follow-ups, warranty registration portals, and return loops.", icon: "RefreshCcw" }
    ],
    faqs: [
      { question: "What is customer journey mapping?", answer: "It is reviewing every single physical and digital touchpoint a buyer interacts with from first view to repeat visits." },
      { question: "Why does unboxing matter so much?", answer: "It is your only physical connection with the customer in online commerce. A premium unboxing secures recall and drives free stories." }
    ],
    metadata: {
      title: "Customer Journey & Touchpoint Audit — Bishorgo",
      description: "Map and fix the weak moments breaking your customer path. Audit digital ads, checkout gates, delivery, and unboxing details."
    }
  },
  {
    slug: "local-business-audit",
    label: "Local Business Experience Audit",
    title: "লোকাল শপ বা রেস্টুরেন্টের কাস্টমার এক্সপেরিয়েন্স অডিট।",
    subtitle: "Identify where your local retail shop, cafe, or restaurant loses repeat customer visits.",
    description: "We evaluate neighborhood maps profile, storefront signs, layout navigation, table greetings, menu clarity, and cashier checkout comfort.",
    scope: [
      { title: "Storefront & Maps Check", desc: "We review physical signs visibility and Google Maps reviews/hours completeness.", icon: "Store" },
      { title: "Lobby Wayfinding Cues", desc: "We audit how easily guests navigate layouts and check product categories.", icon: "Compass" },
      { title: "Staff Service Rituals", desc: "We analyze greetings, menu explanations, service delays, and order hospitality.", icon: "Users" },
      { title: "Checkout Comfort Review", desc: "We check cashier queues, receipt notes, payment speed, and exit goodbye scripts.", icon: "DollarSign" }
    ],
    faqs: [
      { question: "How does this audit work for physical shops?", answer: "We visit your store as secret shoppers, review physical wayfinding and service behaviors, and map digital maps presence." },
      { question: "Why do local shops struggle with returns?", answer: "Usually because the experience feels transactional. Table greetings, signature cues, and exit postcard loyalty loops solve this." }
    ],
    metadata: {
      title: "Local Business & Retail Experience Audit — Bishorgo",
      description: "Increase foot traffic and repeat visits. Audit your storefront signs, Google Maps, staff greetings, and checkout lanes."
    }
  },
  {
    slug: "startup-audit",
    label: "Startup Brand Experience Audit",
    title: "স্টার্টআপ লঞ্চ এবং কাস্টমার অনবোর্ডিং অডিট।",
    subtitle: "Verify if your new startup is validated clearly, or if landing and onboarding paths confuse users.",
    description: "We review MVP landing pages, registration forms, onboarding cycles, product visual kits, and value propositions.",
    scope: [
      { title: "Value Statement Check", desc: "We verify if your homepage tagline explains what you do and who you serve in 5 seconds.", icon: "Rocket" },
      { title: "Onboarding Flow Review", desc: "We trace registration fields, onboarding checklists, and dashboard guides to remove signup drops.", icon: "ArrowRight" },
      { title: "Product Style Cohesion", desc: "We audit visual design assets, fonts, buttons, and app interfaces to build authority.", icon: "Laptop" },
      { title: "Validation Feedback Gates", desc: "We review feedback surveys, analytics tracking setup, and welcome emails.", icon: "Mail" }
    ],
    faqs: [
      { question: "When should a startup audit its experience?", answer: "Immediately before launching or directly after launching when user metrics show high traffic but low signups." },
      { question: "What is onboarding friction?", answer: "Any step (forced phone verification, 10-field forms, complex setup screens) that makes users close your app." }
    ],
    metadata: {
      title: "Startup Launch & Onboarding Audit — Bishorgo",
      description: "Ensure your new SaaS or startup validated cleanly. Get a detailed landing copy, registration, and onboarding flow audit."
    }
  }
];

export function getAllAuditSlugs(): string[] {
  return auditSubpages.map((p) => p.slug);
}

export function getAuditPage(slug: string): AuditPageBlueprint | undefined {
  return auditSubpages.find((p) => p.slug === slug);
}
