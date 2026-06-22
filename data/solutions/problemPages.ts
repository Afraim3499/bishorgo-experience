// ============================================================
// data/solutions/problemPages.ts
// Bishorgo Experience — Problem / Solution Pages Data
// ============================================================

export type ProblemPageBlueprint = {
  slug: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string; // Lucide icon name
  symptoms: string[];
  causes: {
    title: string;
    description: string;
  }[];
  businessCosts: {
    title: string;
    description: string;
  }[];
  commonMistakes: {
    mistake: string;
    whyItFails: string;
  }[];
  solutionPath: {
    step: string;
    description: string;
  }[];
  recommendedServices: {
    title: string;
    href: string;
    description: string;
  }[];
  auditCTA: {
    title: string;
    description: string;
    buttonLabel: string;
    href: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  metadata: {
    title: string;
    description: string;
  };
};

export const problemPages: ProblemPageBlueprint[] = [
  // ─────────────────────────────────────────────
  // 1. BRAND NOT MEMORABLE
  // ─────────────────────────────────────────────
  {
    slug: "brand-not-memorable",
    label: "Brand Recall",
    title: "People see your brand, but they do not remember it.",
    subtitle: "Visibility is not the same as memory.",
    description: "If customers notice your posts, visit your page, ask your price, and still forget you later, the problem is not only marketing. The experience is not creating recall.",
    icon: "Brain",
    symptoms: [
      "People ask about you once, then disappear.",
      "Your posts get seen but not remembered.",
      "Your offer sounds similar to everyone else.",
      "Customers cannot clearly explain what makes you different.",
      "Your brand looks active but feels forgettable.",
    ],
    causes: [
      { title: "Unclear Core Message", description: "You are saying too many things at once, leaving the customer with zero key takeaways." },
      { title: "Inconsistent Visual Presentation", description: "Your logos, fonts, templates, and photos change constantly, breaking visual association." },
      { title: "Journey Lacks Memory Cues", description: "There are no sensory, conversational, or post-purchase triggers that anchor your brand in their mind." },
      { title: "Disconnected Channels", description: "Your social pages, website, delivery packaging, and support speak in completely different voices." },
    ],
    businessCosts: [
      { title: "Lower Recall", description: "Customers who are ready to buy forget your name and end up searching for and choosing a competitor." },
      { title: "Weaker Trust", description: "Inconsistent branding makes your business look disorganized or low-quality, reducing conversion." },
      { title: "More Repeated Explanation", description: "You spend energy explaining the same value again and again because it didn't sink in the first time." },
      { title: "Lost Repeat Customers", description: "People buy once but don't establish an emotional relationship, treating your business as a one-time utility." },
    ],
    commonMistakes: [
      { mistake: "More Posts & Boosting", whyItFails: "More visibility does not create memory if the underlying content stays generic. You're just boosting noise." },
      { mistake: "Running Discounts", whyItFails: "Discounts bring transactional shoppers who buy on price, not people who value and remember your brand name." },
      { mistake: "Redesigning the Logo", whyItFails: "A new logo is a cosmetic fix. It cannot solve a broken customer journey or an unclear brand message." },
    ],
    solutionPath: [
      { step: "Diagnose", description: "Find where people lose interest, trust, or memory in your current touchpoints." },
      { step: "Clarify", description: "Define what your brand stands for, how it sounds, and how it should be remembered." },
      { step: "Connect", description: "Align your social media content, website copy, visual style, campaigns, and customer moments." },
      { step: "Design", description: "Turn weak customer touchpoints into meaningful, repeatable experience cues." },
      { step: "Improve", description: "Refine your system continuously based on customer behavior, feedback, and return visits." },
    ],
    recommendedServices: [
      { title: "Brand Strategy", href: "/services/brand-strategy", description: "Define your unique positioning, brand promise, and message architecture." },
      { title: "Brand Identity", href: "/services/brand-identity", description: "Build a cohesive visual system (logo, typography, colors) that creates recognition." },
      { title: "Content Strategy", href: "/services/content-strategy", description: "Plan story-driven content pillars that communicate your value consistently." },
      { title: "Customer Journey Design", href: "/services/customer-journey-design", description: "Optimize all customer interaction points to remove friction and build memory." },
      { title: "Experience Marketing", href: "/services/experience-marketing", description: "Design physical unboxings, custom receipt codes, and sensory triggers." },
    ],
    auditCTA: {
      title: "Start by finding where the experience is breaking.",
      description: "The Experience Audit helps identify the weak touchpoints causing this problem before you spend more on disconnected fixes.",
      buttonLabel: "Book an Experience Audit",
      href: "/experience-audit",
    },
    faqs: [
      { question: "Why do people forget a brand even after seeing it?", answer: "Because seeing is passive. If your content looks like everyone else's or fails to connect with their personal buying journey, their brain filters it out as background noise." },
      { question: "Is this a branding problem or a marketing problem?", answer: "It is an experience problem. Marketing gets attention, but branding and experience determine whether that attention turns into a lasting memory and a repeat customer." },
      { question: "Can more social media posts fix this?", answer: "No. Posting more generic content just increases noise. It is far more effective to clarify your message first, then post with consistent story pillars." },
      { question: "How does Bishorgo improve brand memory?", answer: "We map out your customer's full journey, define the exact memory cue for your business, and align all copy, design, campaigns, and interactions to reinforce that single memory." },
      { question: "Should I start with an Experience Audit?", answer: "Yes. An audit is the fastest way to diagnose your specific brand memory leaks. We review all your active touchpoints and tell you exactly where you're losing customers." },
    ],
    metadata: {
      title: "Brand Memory Diagnosis — Bishorgo Experience",
      description: "Is your brand active but forgettable? Discover why visibility doesn't equal recall, and how Bishorgo designs experience systems that make brands rememberable.",
    },
  },

  // ─────────────────────────────────────────────
  // 2. LOW SOCIAL ENGAGEMENT
  // ─────────────────────────────────────────────
  {
    slug: "low-social-engagement",
    label: "Social Engagement",
    title: "Your posts get scrolls, but no one stops to talk.",
    subtitle: "Algorithm reach is not the same as dialogue.",
    description: "If your metrics show thousands of impressions but comments and shares are empty, you are broadcasting instead of connecting. Let's fix your social presence.",
    icon: "TrendingDown",
    symptoms: [
      "Follower count increases but post interactions stay flat.",
      "Comments consist of generic queries like 'price?' or 'details?'.",
      "Almost zero organic post shares or user-generated content.",
      "Boosted posts generate views but fail to create brand advocates.",
    ],
    causes: [
      { title: "Product-only cataloging", description: "Treating your feed like an inventory sheet instead of telling brand or customer stories." },
      { title: "One-way broadcasting", description: "Talking at your audience instead of creating prompts, questions, and replies." },
    ],
    businessCosts: [
      { title: "Wasted Advertising Spend", description: "Boosting posts that generate passive views but convert zero long-term brand recall." },
      { title: "Zero Community Trust", description: "Looking like a ghost town where customers hesitate to buy because they see no community conversation." },
    ],
    commonMistakes: [
      { mistake: "Posting more frequently", whyItFails: "Posting three times a day instead of once will just fill feeds with more generic noise." },
      { mistake: "Doing generic giveaways", whyItFails: "Brings freebie seekers who don't care about your brand and unfollow once the raffle ends." },
    ],
    solutionPath: [
      { step: "Audit", description: "Review current content themes, comment response scripts, and competitor feeds." },
      { step: "Design Pillars", description: "Establish 3 core content pillars combining value, story, and community interaction." },
      { step: "Launch Rituals", description: "Design weekly or monthly social prompts that invite customer dialogue." },
    ],
    recommendedServices: [
      { title: "Social Media Strategy", href: "/services/social-media-strategy", description: "Build a community-first social presence designed to engage." },
      { title: "Content Strategy", href: "/services/content-strategy", description: "Map out stories and pillars that capture attention." },
    ],
    auditCTA: {
      title: "Diagnose your social media engagement leaks.",
      description: "Book an Experience Audit and let us evaluate your social media pillars to find why people are scrolling past.",
      buttonLabel: "Get a Social Audit",
      href: "/experience-audit",
    },
    faqs: [
      { question: "Can we fix social engagement without boosting?", answer: "Yes. Organic reach grows when you build content that people actually want to save, tag friends in, or share." },
      { question: "Why do people only comment 'price'?", answer: "Because your post treated the item as a commodity. When content focuses on fit, utility, or story, comments focus on value." },
    ],
    metadata: {
      title: "Social Media Engagement Diagnosis — Bishorgo",
      description: "Are you posting but getting ignored? Let's analyze why your social engagement is low and how to build a community-first brand presence.",
    },
  },

  // ─────────────────────────────────────────────
  // 3. WEBSITE NOT CONVERTING
  // ─────────────────────────────────────────────
  {
    slug: "website-not-converting",
    label: "Web Conversion",
    title: "You get website visitors, but they leave without buying.",
    subtitle: "Traffic is useless without conversion.",
    description: "If your analytics dashboard shows active visitors landing but checkout pages remain empty, visitors are losing trust, getting confused, or hitting tech friction.",
    icon: "MousePointerClick",
    symptoms: [
      "High bounce rate on landing pages.",
      "High cart abandonment rate during checkout.",
      "Visitors stay on site for less than 10 seconds.",
      "Lead generation forms get zero submissions.",
    ],
    causes: [
      { title: "Slow mobile loading", description: "Heavy pages that delay opening on local mobile connections." },
      { title: "Confusing navigation", description: "Hiding program details or payment buttons behind complex menus." },
    ],
    businessCosts: [
      { title: "High Acquisition Cost", description: "Paying Google or Facebook for clicks that yield zero revenue." },
      { title: "Damaged Brand Authority", description: "An amateur web layout that makes visitors think your service is untrustworthy." },
    ],
    commonMistakes: [
      { mistake: "Changing buttons color", whyItFails: "Minor cosmetic tweaks can't fix a confusing checkout path or unclear value copy." },
      { mistake: "Buying cheaper hosting", whyItFails: "Reduces cost but slows loading times further, driving away mobile users." },
    ],
    solutionPath: [
      { step: "Map Path", description: "Trace the exact visitor click-path to see where they drop off." },
      { step: "Accelerate", description: "Optimize images, scripts, and layout for instant loading." },
      { step: "Simplify", description: "Reduce forms to single-page checkout lanes." },
    ],
    recommendedServices: [
      { title: "Website Experience", href: "/services/website-experience", description: "Build custom Next.js websites optimized for conversion." },
      { title: "Landing Page Design", href: "/services/landing-page-design", description: "Design target-focused layouts for specific offers." },
    ],
    auditCTA: {
      title: "Find why website visitors leave.",
      description: "Book an Experience Audit to analyze your website's layout, speed, and conversion path.",
      buttonLabel: "Book a Web Audit",
      href: "/experience-audit",
    },
    faqs: [
      { question: "Why is our checkout page abandoned?", answer: "Usually due to hidden charges, forced registration popups, or too many form fields." },
      { question: "How does speed impact website conversion?", answer: "Every extra second of page load time reduces sales conversion by 20% on mobile devices." },
    ],
    metadata: {
      title: "Website Conversion Diagnosis — Bishorgo",
      description: "Is your website losing sales? Analyze conversion leaks and design high-converting Next.js web experiences.",
    },
  },

  // ─────────────────────────────────────────────
  // 4. UNCLEAR BRAND MESSAGE
  // ─────────────────────────────────────────────
  {
    slug: "unclear-brand-message",
    label: "Brand Message",
    title: "Customers like your product, but can't explain what you do.",
    subtitle: "Confusion is the enemy of conversion.",
    description: "If you are trying to be everything to everyone, your brand will stand for nothing. Let's design a single, sharp brand message that sticks.",
    icon: "MessageCircleQuestion",
    symptoms: [
      "Sales teams describe the product differently every time.",
      "Potential buyers take too long to understand your service.",
      "Competitors steal customers because their message is simpler.",
    ],
    causes: [
      { title: "Lack of positioning", description: "Trying to sell every feature at once instead of prioritizing one clear benefit." }
    ],
    businessCosts: [
      { title: "Longer Sales Cycle", description: "Explaining your business value over multiple meetings because the website fails to explain it." }
    ],
    commonMistakes: [
      { mistake: "Writing longer copy", whyItFails: "Adding more text just increases reader fatigue. Less is more." }
    ],
    solutionPath: [
      { step: "Define Core", description: "Isolate the single most valuable promise your business makes." }
    ],
    recommendedServices: [
      { title: "Brand Strategy", href: "/services/brand-strategy", description: "Build the messaging foundation behind your brand." }
    ],
    auditCTA: {
      title: "Clarify your messaging strategy.",
      description: "Book an Experience Audit to evaluate if your brand message is confusing your audience.",
      buttonLabel: "Book an Audit",
      href: "/experience-audit",
    },
    faqs: [
      { question: "How long should our value statement be?", answer: "One clear sentence that explains who you serve, what you solve, and why you are different." }
    ],
    metadata: {
      title: "Brand Message Clarification — Bishorgo",
      description: "Simplify your copy and positioning so customers understand your value in five seconds.",
    },
  },

  // ─────────────────────────────────────────────
  // 5. INCONSISTENT BRANDING
  // ─────────────────────────────────────────────
  {
    slug: "inconsistent-branding",
    label: "Visual Cohesion",
    title: "Your business looks different on every page, box, and post.",
    subtitle: "Inconsistency breeds doubt.",
    description: "If your designer, agency, and printer use different colors, fonts, and layouts, your brand will look amateur. We design unified design systems.",
    icon: "Shuffle",
    symptoms: [
      "Social posts use random visual templates.",
      "Website design doesn't match packaging assets."
    ],
    causes: [
      { title: "Lack of brand guidelines", description: "No visual rules or templates to guide designers." }
    ],
    businessCosts: [
      { title: "Loss of Premium Appeal", description: "Looking like a low-cost operation because visual assets look messy." }
    ],
    commonMistakes: [
      { mistake: "Changing designers constantly", whyItFails: "Every designer starts from scratch, increasing visual confusion." }
    ],
    solutionPath: [
      { step: "Design System", description: "Define absolute visual rules for logos, colors, and type scales." }
    ],
    recommendedServices: [
      { title: "Brand Identity", href: "/services/brand-identity", description: "Build visual design systems that enforce consistency." }
    ],
    auditCTA: {
      title: "Fix your visual consistency.",
      description: "Review all assets together in our Experience Audit.",
      buttonLabel: "Start Visual Audit",
      href: "/experience-audit",
    },
    faqs: [
      { question: "Do small brands need style guides?", answer: "Yes, to ensure that visual branding stays cohesive as the team grows." }
    ],
    metadata: {
      title: "Visual Branding Consistency — Bishorgo",
      description: "Unify your visual identity across websites, packaging, and social media platforms.",
    },
  },

  // ─────────────────────────────────────────────
  // 6. NO REPEAT CUSTOMERS
  // ─────────────────────────────────────────────
  {
    slug: "no-repeat-customers",
    label: "Customer Retention",
    title: "People buy from you once, then never return.",
    subtitle: "Acquisition gets the sale. Retention builds the business.",
    description: "If you spend all your budget chasing new buyers while previous customers forget your name, your growth model is leaking cash. Let's build a repeat-customer loop.",
    icon: "RefreshCcw",
    symptoms: [
      "Over 90% of monthly sales come from brand-new visitors.",
      "LTV (Customer Lifetime Value) is barely higher than CAC."
    ],
    causes: [
      { title: "Transactional follow-ups", description: "Ignoring the post-purchase onboarding path and customer care." }
    ],
    businessCosts: [
      { title: "Shrinking Profit Margins", description: "Spending more on Facebook ads to replace lost customers." }
    ],
    commonMistakes: [
      { mistake: "Spamming discount codes", whyItFails: "Trains users to wait for sales, devaluing products." }
    ],
    solutionPath: [
      { step: "Map Post-Purchase", description: "Audit what happens the moment a customer pays." }
    ],
    recommendedServices: [
      { title: "Customer Journey Design", href: "/services/customer-journey-design", description: "Build onboarding, loyalty systems, and retention loops." }
    ],
    auditCTA: {
      title: "Identify retention leak points.",
      description: "Book an Experience Audit to analyze your post-purchase customer path.",
      buttonLabel: "Book Retention Audit",
      href: "/experience-audit",
    },
    faqs: [
      { question: "How do we build a repeat customer loop?", answer: "Design post-purchase check-ins, custom unboxing moments, and valuable follow-up content." }
    ],
    metadata: {
      title: "Customer Retention Strategy — Bishorgo",
      description: "Stop relying entirely on cold traffic. Build experience-led retention systems that keep customers returning.",
    },
  },

  // ─────────────────────────────────────────────
  // 7. NEW BUSINESS LAUNCH
  // ─────────────────────────────────────────────
  {
    slug: "new-business-launch",
    label: "Business Launch",
    title: "You are launching a business and need to look trusted from day one.",
    subtitle: "You only get one chance to make a first impression.",
    description: "Launching without a strategic brand and visual direction leads to inconsistent messaging, wasted marketing budget, and low initial trust.",
    icon: "Rocket",
    symptoms: [
      "Team cannot align on target audience priorities.",
      "Logo, website, and copywriting feel disconnected."
    ],
    causes: [
      { title: "No strategic foundation", description: "Starting visual design before clarifying brand position." }
    ],
    businessCosts: [
      { title: "Slow Market Entry", description: "Losing early interest because the launch branding looks amateur." }
    ],
    commonMistakes: [
      { mistake: "Buying a quick logo", whyItFails: "Leaves you with visual assets but no messaging guidelines." }
    ],
    solutionPath: [
      { step: "Brand Foundation", description: "Define positioning, message guides, and visual identity systems together." }
    ],
    recommendedServices: [
      { title: "Brand Strategy", href: "/services/brand-strategy", description: "Build strategic launch directions." },
      { title: "Brand Identity", href: "/services/brand-identity", description: "Design unified visual layouts." }
    ],
    auditCTA: {
      title: "Plan your brand launch blueprint.",
      description: "Avoid initial launch mistakes by coordinating a launch strategy plan.",
      buttonLabel: "Get Strategy Help",
      href: "/experience-audit",
    },
    faqs: [
      { question: "Should we build a website before launching?", answer: "Yes, a clean launch page lets you collect email lists and build authority." }
    ],
    metadata: {
      title: "New Business Launch Brand Strategy — Bishorgo",
      description: "Launch with clarity. Bishorgo designs complete strategy, identity, and landing pages for new business launches.",
    },
  },

  // ─────────────────────────────────────────────
  // 8. PRODUCT LAUNCH
  // ─────────────────────────────────────────────
  {
    slug: "product-launch",
    label: "Product Launch",
    title: "You are launching a product and need it to stand out.",
    subtitle: "Products solve problems. The launch must prove it.",
    description: "A quality product will fail if the landing page copy, social media teasers, and campaign channels fail to explain its value clearly.",
    icon: "PackageOpen",
    symptoms: [
      "Launch campaign gets clicks but low preorder conversion.",
      "Inquiries show customers don't understand the product use cases."
    ],
    causes: [
      { title: "Feature-heavy copywriting", description: "Listing tech specs instead of explaining how it makes life easier." }
    ],
    businessCosts: [
      { title: "Wasted Product Development", description: "Spending months building a product that fails to sell because of poor positioning." }
    ],
    commonMistakes: [
      { mistake: "Focusing only on price promos", whyItFails: "Devalues the product before validation." }
    ],
    solutionPath: [
      { step: "Position Product", description: "Create outcome-focused value copy and use cases." }
    ],
    recommendedServices: [
      { title: "Campaign Strategy", href: "/services/campaign-strategy", description: "Design teaser, launch, and retention campaign paths." }
    ],
    auditCTA: {
      title: "Map your product launch campaign.",
      description: "Audit your launch materials and page structures before spending on ads.",
      buttonLabel: "Book Launch Audit",
      href: "/experience-audit",
    },
    faqs: [
      { question: "How do we write product landing copy?", answer: "Highlight the primary problem solved, followed by proof and product details." }
    ],
    metadata: {
      title: "Product Launch Campaign Strategy — Bishorgo",
      description: "Coordinate premium product launch campaigns. Bishorgo designs high-converting landing pages and teaser structures.",
    },
  },

  // ─────────────────────────────────────────────
  // 9. EVENT NEEDS ATTENDANCE
  // ─────────────────────────────────────────────
  {
    slug: "event-needs-attendance",
    label: "Event Attendance",
    title: "Your event is planned, but ticket sales are slow.",
    subtitle: "Exclusivity and value drive attendance.",
    description: "If your event registration dashboard is stalling, potential attendees don't feel the value, don't trust the setup, or find the checkout path confusing.",
    icon: "UsersRound",
    symptoms: [
      "Event page visits are high but registrations remain flat.",
      "Users drop off during checkout payment steps."
    ],
    causes: [
      { title: "Lack of agenda clarity", description: "Failing to showcase speaker schedules or specific ticket inclusions." }
    ],
    businessCosts: [
      { title: "Lost Event Sponsorships", description: "Struggling to secure sponsors because attendance counts look low." }
    ],
    commonMistakes: [
      { mistake: "Spamming speaker profiles", whyItFails: "Floods grids with headshots instead of explaining attendee value." }
    ],
    solutionPath: [
      { step: "Simplify Ticketing", description: "Optimise the checkout flow to be fast and secure." }
    ],
    recommendedServices: [
      { title: "Campaign Strategy", href: "/services/campaign-strategy", description: "Design ticket sales strategies." }
    ],
    auditCTA: {
      title: "Boost your event ticket conversion.",
      description: "Let us review your event registration page and campaigns.",
      buttonLabel: "Book Event Audit",
      href: "/experience-audit",
    },
    faqs: [
      { question: "How do we optimize ticketing checkout?", answer: "Reduce checkout fields and provide direct mobile bank payments." }
    ],
    metadata: {
      title: "Event Attendance Campaign Design — Bishorgo",
      description: "Fill event seats. Discover how Bishorgo designs high-converting ticketing websites and event launch campaigns.",
    },
  },

  // ─────────────────────────────────────────────
  // 10. FACEBOOK PAGE NOT GROWING
  // ─────────────────────────────────────────────
  {
    slug: "facebook-page-not-growing",
    label: "Page Growth",
    title: "Your Facebook page growth has stalled completely.",
    subtitle: "Chasing followers yields numbers. Building authority yields growth.",
    description: "If your page likes have hit a ceiling despite daily posts, you are stuck in algorithm filters and failing to build shareable brand assets.",
    icon: "BarChart3",
    symptoms: [
      "Follower counts remain identical for months.",
      "Posts get zero organic reach outside existing fans."
    ],
    causes: [
      { title: "Algorithm spamming", description: "Posting low-value templates that get marked as noise." }
    ],
    businessCosts: [
      { title: "Declining Organic Revenue", description: "Relying 100% on active ad spends because organic reach is dead." }
    ],
    commonMistakes: [
      { mistake: "Buying fake page likes", whyItFails: "Destroys page interaction metrics permanently in algorithm filters." }
    ],
    solutionPath: [
      { step: "Shareable Content", description: "Create high-value visual resources users tag friends in." }
    ],
    recommendedServices: [
      { title: "Social Media Strategy", href: "/services/social-media-strategy", description: "Rebuild your Facebook grid hierarchy and reach plan." }
    ],
    auditCTA: {
      title: "Diagnose your page growth limits.",
      description: "Check your content parameters under our Experience Audit.",
      buttonLabel: "Get Growth Help",
      href: "/experience-audit",
    },
    faqs: [
      { question: "How do we trigger organic shares?", answer: "Write insightful industry guides or local humor posts that match user identity." }
    ],
    metadata: {
      title: "Facebook Page Growth Strategy — Bishorgo",
      description: "Break through organic reach ceilings. Bishorgo designs social media content systems that drive real page growth.",
    },
  },

  // ─────────────────────────────────────────────
  // 11. BRAND NEEDS REPOSITIONING
  // ─────────────────────────────────────────────
  {
    slug: "brand-needs-repositioning",
    label: "Repositioning",
    title: "You are stuck in price wars with low-cost competitors.",
    subtitle: "If you compete only on price, you compete to the bottom.",
    description: "If your active business is treated as a cheap option despite your quality, your branding fails to command value. We reposition your brand for premium space.",
    icon: "RefreshCw",
    symptoms: [
      "Customers complain that your prices are too high.",
      "Competitors undercut you, stealing market share."
    ],
    causes: [
      { title: "Lack of brand value markers", description: "Your presentation looks identical to low-end competitors." }
    ],
    businessCosts: [
      { title: "Thin Profit Margins", description: "Struggling to cover overhead costs because you cannot increase pricing." }
    ],
    commonMistakes: [
      { mistake: "Adding more product lines", whyItFails: "Dilutes brand focus without changing perceived quality." }
    ],
    solutionPath: [
      { step: "Command Premium", description: "Rewrite your brand story, visual systems, and touchpoints to look premium." }
    ],
    recommendedServices: [
      { title: "Brand Strategy", href: "/services/brand-strategy", description: "Define premium positioning values." }
    ],
    auditCTA: {
      title: "Analyze your pricing brand value.",
      description: "Let us review where your brand presentation is leaking premium appeal.",
      buttonLabel: "Book Repositioning Audit",
      href: "/experience-audit",
    },
    faqs: [
      { question: "Can we increase prices without losing customers?", answer: "Yes, by packaging items premium, explaining material origins, and building brand authority." }
    ],
    metadata: {
      title: "Premium Brand Repositioning — Bishorgo",
      description: "Escape price wars. Reposition your brand messaging and visuals to look premium and command higher values.",
    },
  },

  // ─────────────────────────────────────────────
  // 12. CUSTOMER JOURNEY IS BROKEN
  // ─────────────────────────────────────────────
  {
    slug: "customer-journey-is-broken",
    label: "Journey Flow",
    title: "Different parts of your experience feel completely disconnected.",
    subtitle: "A chain is only as strong as its weakest link.",
    description: "If your Facebook page looks premium, but your website is slow, checkout is confusing, and delivery packaging is damaged, the customer journey is broken.",
    icon: "RouteOff",
    symptoms: [
      "Customers buy once and leave reviews about service issues.",
      "High drop-offs between cart additions and payments."
    ],
    causes: [
      { title: "Siloed channel management", description: "Different teams managing social, web, and shipping with no unified guidelines." }
    ],
    businessCosts: [
      { title: "Damaged Reputation", description: "Losing high-value clients because of a single broken touchpoint." }
    ],
    commonMistakes: [
      { mistake: "Focusing only on ad campaigns", whyItFails: "Brings more leads into a leaking sales bucket, wasting funds." }
    ],
    solutionPath: [
      { step: "Connect Touchpoints", description: "Link every step from first view to post-purchase thank you notes." }
    ],
    recommendedServices: [
      { title: "Customer Journey Design", href: "/services/customer-journey-design", description: "Map and optimize every touchpoint in your sales path." }
    ],
    auditCTA: {
      title: "Map your complete customer path.",
      description: "Analyze all operational and digital touchpoints together.",
      buttonLabel: "Map My Journey",
      href: "/experience-audit",
    },
    faqs: [
      { question: "What is customer journey mapping?", answer: "Reviewing every step a buyer takes to find, purchase, receive, and repeat orders." }
    ],
    metadata: {
      title: "Broken Customer Journey Diagnostics — Bishorgo",
      description: "Identify operational and digital friction points in your customer path and unify all brand channels.",
    },
  },
];

// Helper functions for retrieval
export function getAllProblemSlugs(): string[] {
  return problemPages.map((page) => page.slug);
}

export function getProblemPage(slug: string): ProblemPageBlueprint | undefined {
  return problemPages.find((page) => page.slug === slug);
}
