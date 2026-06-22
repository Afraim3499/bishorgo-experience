export interface ServicePillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  deliverable: string;
  outcome: string;
  features: string[];
}

export interface MethodStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
}

export interface LabCard {
  id: string;
  title: string;
  banglaTitle?: string;
  category: "Experience Breakdown" | "Brand Psychology" | "Experience Insights" | "Bishorgo Reimagines" | "Toolkits" | "Founder Notes";
  summary: string;
  readTime: string;
  date: string;
  slug: string;
  content: string;
  banglaHook?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const navLinks = [
  { label: "Belief", href: "/#belief" },
  { label: "Method", href: "/#method" },
  { label: "Services", href: "/services" },
  { label: "Experience Lab", href: "/experience-lab" },
  { label: "Audit", href: "/experience-audit" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const servicesPillars: ServicePillar[] = [
  {
    id: "brand",
    title: "Brand Strategy & Identity",
    subtitle: "Notice. Trust. Remember.",
    description: "We help your business find its place in the customer's mind. From positioning to visual identity, we build the foundation that makes your brand easier to recognize, understand, and remember.",
    problem: "Your business is seen as identical to ten others. You compete on price because you haven't built a distinct memory in the market.",
    deliverable: "Positioning framework, brand narrative, logo systems, guidelines, type systems, and tone of voice guidelines.",
    outcome: "A brand that stands out clearly, commands a premium, and creates immediate emotional trust with its audience.",
    features: [
      "Brand Positioning & Story",
      "Logo System & Visual Identity",
      "Tone of Voice & Messaging",
      "Brand Guidelines"
    ]
  },
  {
    id: "digital",
    title: "Web Development & Digital Experience",
    subtitle: "Clear. Fast. Purposeful.",
    description: "Your website is not just an online address. It is often the first serious experience a customer has with your brand. We design and develop websites that feel premium, fast, and intuitive.",
    problem: "Slow loading, cluttered layouts, and confusing messaging that cause visitors to bounce before understanding your value.",
    deliverable: "Custom high-speed Next.js websites, landing pages, responsive e-commerce interfaces, and clean interactive user flows.",
    outcome: "A blazing fast, responsive digital experience that turns casual search traffic into qualified brand leads.",
    features: [
      "Next.js App Development",
      "UI/UX Experience Design",
      "Landing Page Optimization",
      "SEO, SXO & Performance Tuning"
    ]
  },
  {
    id: "content",
    title: "Content Strategy & Social Media",
    subtitle: "Direction over Noise.",
    description: "We create content with direction. Every post, caption, visual, and campaign is designed to build memory and authority, rather than just fill a calendar.",
    problem: "Posting content daily that gets scrolled past, leaving no trace in the customer's memory.",
    deliverable: "Content strategy plans, editorial guidelines, visual templates, copy direction, and storytelling campaign outlines.",
    outcome: "Social and digital channels that generate active recall, build a loyal community, and support business goals.",
    features: [
      "Content Strategy Planning",
      "Campaign Storytelling",
      "Visual Narrative & Copywriting",
      "Social Ecosystem Design"
    ]
  },
  {
    id: "activation",
    title: "Field Marketing & Brand Activation",
    subtitle: "Physical Touchpoints.",
    description: "Some of the strongest brand memories happen outside the screen. We design real-world activations that let people see, touch, feel, and remember your brand.",
    problem: "Digital noise makes it hard to stand out. Customers lack a physical connection to your brand's presence.",
    deliverable: "Real-world activation strategies, event experience flow charts, campaign planning, and pop-up store customer flows.",
    outcome: "High-impact physical interactions that generate word-of-mouth, visual sharing, and lasting brand recall.",
    features: [
      "Event Experience Design",
      "Retail & Pop-up Activations",
      "Campus & Community Roadshows",
      "Physical Touchpoint Campaigns"
    ]
  },
  {
    id: "journey",
    title: "Customer Journey Design",
    subtitle: "The Full Memory Loop.",
    description: "We map how customers discover, judge, interact with, and remember your business — then improve the experience at each step to build loyalty.",
    problem: "Post-purchase neglect or friction points during delivery and support that break customer trust.",
    deliverable: "Complete customer journey maps, touchpoint audits, and service delivery improvement strategies.",
    outcome: "A seamless end-to-end customer cycle that drives recurring purchases, advocacy, and organic recommendations.",
    features: [
      "End-to-End Journey Mapping",
      "Touchpoint Friction Audits",
      "Unboxing & Service Experience Design",
      "Retention & Referral Architecture"
    ]
  }
];

export const methodSteps: MethodStep[] = [
  {
    number: "01",
    title: "Discover",
    tagline: "Uncover the Reality",
    description: "We immerse ourselves in your business, audit your current customer touchpoints, study competitor memory traps, and interview real customers to find where the experience is breaking."
  },
  {
    number: "02",
    title: "Define",
    tagline: "Formulate the Strategy",
    description: "We align on a singular brand belief and strategy. We define how your brand should look, talk, and behave to turn ordinary transactions into memorable experience loops."
  },
  {
    number: "03",
    title: "Design",
    tagline: "Craft the Touchpoints",
    description: "We design the actual assets — whether it's a high-performance Next.js site, a premium brand identity system, a real-world activation, or a targeted content campaign."
  },
  {
    number: "04",
    title: "Deliver",
    tagline: "Execute with Impact",
    description: "We launch the experience. We ensure pixel-perfect development, premium motion, clear typography, and flawless execution so the brand promise is delivered on every screen."
  },
  {
    number: "05",
    title: "Deepen",
    tagline: "Evaluate and Scale",
    description: "We monitor customer reactions, track brand recall metrics, analyze user flow, and continuously refine the experience to turn one-time buyers into lifetime advocates."
  }
];

export const labArticles: LabCard[] = [
  {
    id: "tea-stall",
    title: "How a tea stall becomes a brand people remember",
    banglaTitle: "একটি চায়ের দোকান যেভাবে ব্র্যান্ড হয়ে ওঠে",
    category: "Experience Breakdown",
    summary: "A customer experience breakdown of a small Bangladeshi tea stall that succeeded through sensory branding, rhythm, and local relationship design.",
    readTime: "4 min read",
    date: "June 15, 2026",
    slug: "tea-stall-brand-experience",
    banglaHook: "চা বিক্রেতা আসলে চা বিক্রি করে না, সে বিক্রি করে একটু আড্ডা আর ক্লান্তি দূর করার অনুভূতি।",
    content: "If you look at the tea stalls of Dhaka, they all sell the same tea, biscuits, and cigarettes. Yet, one specific stall is always crowded, while the one next to it stands empty. The difference isn't in the tea leaves. It's in the experience design: the warm greeting of the 'Mama', the consistency of the rhythm, the ambient lighting under a large tree, and the sense of belonging. The stall owner unconsciously designed a memory loop."
  },
  {
    id: "forget-customer",
    title: "Why your customer forgets your business after one visit",
    banglaTitle: "প্রথমবারের পর কাস্টমার কেন ভুলে যায়?",
    category: "Brand Psychology",
    summary: "Understanding the psychological gap between generic transactions and memorable brand interactions in the local retail market.",
    readTime: "6 min read",
    date: "June 10, 2026",
    slug: "why-customers-forget",
    banglaHook: "কাস্টমার আপনার লোগো মনে রাখে না, সে মনে রাখে আপনি তাকে কেমন অনুভব করিয়েছিলেন।",
    content: "Most retail pages and small stores focus 100% on the sale. But once the payment is made, the experience goes cold. Unboxing is generic, follow-up is absent, and the product is delivered in a standard plastic bag. In psychology, the Peak-End Rule states that people judge an experience largely based on how they felt at its peak and at its end. If your ending is forgettable, your brand is forgotten."
  },
  {
    id: "marketing-vs-memory",
    title: "The difference between marketing and memory",
    category: "Experience Insights",
    summary: "Why spending money to be noticed once is a waste of capital compared to designing loops that bring customers back naturally.",
    readTime: "5 min read",
    date: "June 02, 2026",
    slug: "marketing-vs-memory",
    content: "Marketing buys attention. Experience earns memory. If you spend 50,000 BDT boosting a post on Facebook, you might get 1,000 visitors. If your website is slow, your replies are late, and your packaging is cheap, those 1,000 visitors leave with a poor impression. You bought attention only to register a negative memory. True growth happens when your experience is so strong that memory replaces marketing."
  },
  {
    id: "clothing-reimagined",
    title: "A Dhaka clothing store reimagined as an experience",
    banglaTitle: "ঢাকার একটি ক্লথিং স্টোরকে নতুনভাবে সাজানো",
    category: "Bishorgo Reimagines",
    summary: "A conceptual redesign of a local fashion brand's customer journey, from social ad layout to delivery box unboxing.",
    readTime: "8 min read",
    date: "May 25, 2026",
    slug: "dhaka-clothing-reimagined",
    banglaHook: "কাপড় তো সবাই বিক্রি করে। আমরা বিক্রি করতে চেয়েছিলাম উৎসবের আনন্দ আর আভিজাত্য।",
    content: "We took a typical Facebook-centric clothing page based in Dhaka and reimagined their touchpoints. We replaced generic stock product grids with localized cultural narratives. We designed a web interface that feels like walking through an upscale Banani boutique. Finally, we turned the packaging into a story-box, complete with a handwritten founder note and a signature scent. The result? Customers share the packaging on Instagram, generating free word-of-mouth."
  },
  {
    id: "customer-journey-neglected",
    title: "The customer journey most small businesses ignore",
    category: "Toolkits",
    summary: "A checklist for Bangladeshi business owners to audit their touchpoints before running paid ad campaigns.",
    readTime: "7 min read",
    date: "May 18, 2026",
    slug: "ignored-customer-journey",
    content: "Before you run your next ad campaign, audit these five points: 1) Response speed on Messenger: is it a generic automated bot? 2) Mobile checkout speed: does the customer have to fill out 15 fields? 3) Delivery communication: do they get a SMS notification? 4) Unboxing feel: does it feel like a gift or trash? 5) Post-purchase feedback: did you ask how the product performed? If any of these are weak, you are losing money."
  }
];

export const faqs: FAQItem[] = [
  {
    question: "What is Bishorgo Experience?",
    answer: "Bishorgo Experience is a brand experience company that builds memorable customer journeys. We go beyond traditional advertising to connect strategy, branding, website development, content, and real-world activation into one memorable experience system."
  },
  {
    question: "How is it different from a digital marketing agency?",
    answer: "A digital marketing agency focuses on buying traffic and posting daily content. We focus on customer memory. We design how your brand looks, talks, and behaves at every single touchpoint, ensuring that your marketing spend turns into long-term recall and repeat customers."
  },
  {
    question: "What is an Experience Audit?",
    answer: "An Experience Audit is our proprietary evaluation process. We inspect your brand's digital footprint, website performance, checkout flow, social media presence, and real-world interactions. We identify where the experience breaks, where customers lose interest, and where you can become unforgettable."
  },
  {
    question: "Who works with Bishorgo Experience?",
    answer: "We work with passionate founders, retail brands, restaurants, startups, and service companies in Bangladesh and globally who realize that advertisements are temporary, but a premium customer experience is permanent."
  }
];
