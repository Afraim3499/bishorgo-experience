// ============================================================
// data/services/servicePages.ts
// Bishorgo Experience — Service Landing Pages Data
// ============================================================

export type ServicePageBlueprint = {
  slug: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string; // Lucide icon name
  valueStrip: {
    title: string;
    text: string;
  }[];
  builds: string[];
  philosophy: {
    normal: { title: string; text: string };
    bishorgo: { title: string; text: string };
  };
  deliverables: {
    title: string;
    description: string;
    tag: string;
  }[];
  process: {
    step: "Discover" | "Define" | "Design" | "Deliver" | "Deepen";
    description: string;
  }[];
  touchpoints: string[];
  useCases: string[];
  relatedServices: {
    title: string;
    href: string;
    description: string;
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

export const servicePages: ServicePageBlueprint[] = [
  // ─────────────────────────────────────────────
  // 1. BRAND STRATEGY
  // ─────────────────────────────────────────────
  {
    slug: "brand-strategy",
    label: "Brand Strategy",
    title: "Brand Strategy that makes your business easier to remember.",
    subtitle: "Build the direction behind your brand before you spend more on design, content, campaigns, or websites.",
    description: "Bishorgo helps define what your brand should stand for, how it should feel, and how every touchpoint should carry that memory.",
    icon: "Compass",
    valueStrip: [
      { title: "Clarity", text: "Know exactly what the brand stands for." },
      { title: "Direction", text: "Make faster, smarter brand decisions." },
      { title: "Memory", text: "Create stronger recall at every touchpoint." },
      { title: "Consistency", text: "Keep every customer interaction aligned." },
    ],
    builds: [
      "Brand positioning framework",
      "Audience & customer understanding",
      "Brand promise definition",
      "Tone of voice guidelines",
      "Messaging direction",
      "Touchpoint priorities",
      "Experience memory cues",
    ],
    philosophy: {
      normal: {
        title: "Most agencies stop at the output.",
        text: "A normal agency may deliver a logo, post, campaign, or website as a finished asset — with no connection to how that asset fits the customer journey.",
      },
      bishorgo: {
        title: "Bishorgo designs how the output should be remembered.",
        text: "We connect every asset to the customer journey so it carries meaning across every touchpoint — building memory, not just visibility.",
      },
    },
    deliverables: [
      { title: "Brand Positioning Framework", description: "A clear one-page document defining where the brand stands in the market.", tag: "Strategy" },
      { title: "Audience Insight Notes", description: "A research-backed profile of who the brand is really talking to.", tag: "Research" },
      { title: "Brand Promise Definition", description: "The single most important thing the brand promises every customer.", tag: "Direction" },
      { title: "Tone of Voice Guidelines", description: "How the brand should sound: in captions, ads, emails, and conversations.", tag: "Messaging" },
      { title: "Touchpoint Priority Map", description: "Where to focus effort first based on where memory is lost or won.", tag: "Journey" },
      { title: "Experience Memory Cues", description: "Specific moments and phrases that create stronger brand recall.", tag: "Memory" },
    ],
    process: [
      { step: "Discover", description: "Understand your business, audience, market, and current experience." },
      { step: "Define", description: "Clarify brand positioning, promise, and the feeling it should create." },
      { step: "Design", description: "Build the strategic framework, messaging pillars, and direction guide." },
      { step: "Deliver", description: "Hand over all strategy documents with a clear implementation guide." },
      { step: "Deepen", description: "Refine based on how the market and customers respond over time." },
    ],
    touchpoints: ["Website copy", "Social media tone", "Campaign messaging", "Packaging language", "Sales conversation", "Email communication", "Customer service voice", "Content direction"],
    useCases: [
      "Launching a new brand and need direction before design",
      "Existing brand that looks different everywhere",
      "Active business that feels forgotten by customers",
      "Brand that competes only on price",
      "Team that can't agree on what the brand should feel like",
      "Business ready to spend on marketing but lacking strategic clarity",
    ],
    relatedServices: [
      { title: "Brand Identity", href: "/services/brand-identity", description: "Translate your strategy into a visual system that people recognise." },
      { title: "Content Strategy", href: "/services/content-strategy", description: "Plan content that communicates your brand values and builds memory." },
      { title: "Customer Journey Design", href: "/services/customer-journey-design", description: "Design experiences that guide and convert across every touchpoint." },
    ],
    faqs: [
      { question: "What is brand strategy?", answer: "Brand strategy is the clear direction behind a brand — what it stands for, who it speaks to, what it promises, and how it should feel at every touchpoint. Without it, branding, marketing, and content become disconnected." },
      { question: "Who is this service for?", answer: "This is for any business — new or established — that wants to grow through clarity and consistency rather than spending more on random marketing." },
      { question: "What will Bishorgo deliver?", answer: "You will receive a brand positioning framework, audience insight notes, brand promise, tone of voice guidelines, touchpoint priority map, and experience memory cues." },
      { question: "How is this different from normal agency work?", answer: "Most agencies focus on output — a logo, post, or campaign. Bishorgo connects the strategy directly to the customer journey so every output carries memory and meaning." },
      { question: "Do I need an audit first?", answer: "An Experience Audit is strongly recommended before any strategy work. It helps us identify exactly where the brand experience is breaking so we know where strategy will have the most impact." },
    ],
    metadata: {
      title: "Brand Strategy — Bishorgo Experience",
      description: "Build the strategic direction behind your brand. Bishorgo helps you define positioning, audience, promise, and messaging so every touchpoint creates stronger memory.",
    },
  },

  // ─────────────────────────────────────────────
  // 2. BRAND IDENTITY
  // ─────────────────────────────────────────────
  {
    slug: "brand-identity",
    label: "Brand Identity",
    title: "A Brand Identity that people recognise before they read the name.",
    subtitle: "Build a visual system that creates instant recognition and communicates your brand's character without a word.",
    description: "Bishorgo designs logo systems, color palettes, typography, and brand visual language that translate your strategy into something people can see and feel.",
    icon: "Fingerprint",
    valueStrip: [
      { title: "Recognition", text: "Be instantly spotted in any context." },
      { title: "Trust", text: "Look premium before you say a word." },
      { title: "Consistency", text: "One visual system across every surface." },
      { title: "Character", text: "A personality people can feel." },
    ],
    builds: [
      "Logo system and variations",
      "Primary and secondary color palette",
      "Typography selection and scale",
      "Brand visual language",
      "Icon and illustration direction",
      "Photography and visual style guide",
      "Brand application templates",
    ],
    philosophy: {
      normal: {
        title: "Most agencies deliver a logo and call it identity.",
        text: "A logo without system rules becomes inconsistent. Each designer, each platform, each post — a slightly different brand.",
      },
      bishorgo: {
        title: "Bishorgo builds a visual system, not just a logo.",
        text: "We design the full brand identity ecosystem — so the business looks premium, cohesive, and recognisable everywhere it appears.",
      },
    },
    deliverables: [
      { title: "Primary Logo System", description: "Main logo plus horizontal, stacked, and icon-only variations.", tag: "Logo" },
      { title: "Color Palette", description: "Primary, secondary, and neutral brand colors with usage rules.", tag: "Color" },
      { title: "Typography System", description: "Font selection, weight rules, and hierarchy for all brand uses.", tag: "Type" },
      { title: "Brand Style Guide", description: "A complete document for how to apply all brand visual elements.", tag: "System" },
      { title: "Visual Templates", description: "Ready-to-use social, presentation, and print templates.", tag: "Templates" },
      { title: "Brand Usage Rules", description: "What to do and what to avoid to protect brand consistency.", tag: "Guidelines" },
    ],
    process: [
      { step: "Discover", description: "Study the business, audience, competitors, and current visual presence." },
      { step: "Define", description: "Set the brand personality, visual direction, and reference benchmarks." },
      { step: "Design", description: "Create logo concepts, color palette, typography, and visual language." },
      { step: "Deliver", description: "Hand over brand files, style guide, and all application templates." },
      { step: "Deepen", description: "Expand the system as new brand surfaces and applications emerge." },
    ],
    touchpoints: ["Social media profile", "Website design", "Business cards", "Packaging", "Signage", "Email signature", "Presentation decks", "Advertising creatives"],
    useCases: [
      "New business that needs a complete visual identity",
      "Brand that looks amateur compared to competitors",
      "Business using a logo made in Canva years ago",
      "Brand that looks different everywhere it appears",
      "Business ready to grow and wanting to look the part",
      "Rebranding after a strategic pivot or market change",
    ],
    relatedServices: [
      { title: "Brand Strategy", href: "/services/brand-strategy", description: "Define the strategic direction that your identity should express." },
      { title: "Website Experience", href: "/services/website-experience", description: "Build a website that brings your brand identity to life online." },
      { title: "Creative Direction", href: "/services/creative-direction", description: "Direct how your brand visuals are applied across campaigns." },
    ],
    faqs: [
      { question: "What is brand identity?", answer: "Brand identity is the visual system that represents a brand — logo, colors, typography, and visual language. It translates brand strategy into something people can see and feel." },
      { question: "Who is this service for?", answer: "Any business that looks inconsistent, amateur, or forgettable compared to where they want to be in the market." },
      { question: "What will Bishorgo deliver?", answer: "You receive a primary logo system, color palette, typography guide, brand style guide, visual templates, and usage rules." },
      { question: "How is this different from a freelance logo design?", answer: "A freelancer often delivers a single logo file. Bishorgo delivers a complete visual system with rules that keep your brand consistent everywhere." },
      { question: "Do I need a strategy before identity?", answer: "Ideally yes. Brand strategy informs identity direction. Without it, visual design can go in any direction and may not communicate what the business stands for." },
    ],
    metadata: {
      title: "Brand Identity — Bishorgo Experience",
      description: "Build a visual identity system that creates instant recognition. Bishorgo designs logos, color systems, typography, and brand visual language.",
    },
  },

  // ─────────────────────────────────────────────
  // 3. WEBSITE EXPERIENCE
  // ─────────────────────────────────────────────
  {
    slug: "website-experience",
    label: "Website Experience",
    title: "A Website that converts visitors into customers who remember you.",
    subtitle: "Design and build a website experience that feels premium, loads fast, and turns attention into action.",
    description: "Bishorgo builds custom website experiences that connect your brand strategy to your digital presence — every page, section, and interaction designed to create memory and drive conversion.",
    icon: "MonitorSmartphone",
    valueStrip: [
      { title: "First Impression", text: "Win trust in the first 5 seconds." },
      { title: "Clarity", text: "Guide visitors to action without confusion." },
      { title: "Speed", text: "Fast, responsive, and smooth on every device." },
      { title: "Conversion", text: "Turn visits into leads, calls, and sales." },
    ],
    builds: [
      "Website structure and page hierarchy",
      "User flow and navigation design",
      "Visual design system for the web",
      "Copywriting direction and tone",
      "Responsive mobile experience",
      "Performance and speed optimisation",
      "Conversion-focused page sections",
    ],
    philosophy: {
      normal: {
        title: "Most websites are built like brochures.",
        text: "A standard web project delivers pages with information but no journey — visitors land, read, get confused, and leave without acting.",
      },
      bishorgo: {
        title: "Bishorgo builds websites like experiences.",
        text: "We design the visitor journey from first scroll to final action — so every section creates clarity, trust, and the desire to move forward.",
      },
    },
    deliverables: [
      { title: "Website Structure Plan", description: "Full sitemap and page hierarchy designed for user flow.", tag: "Strategy" },
      { title: "UI/UX Design", description: "Figma-designed visual layouts for all key pages.", tag: "Design" },
      { title: "Custom Web Build", description: "Responsive, fast, and SEO-ready website development.", tag: "Build" },
      { title: "Mobile-First Execution", description: "Every page designed and tested on mobile first.", tag: "Responsive" },
      { title: "SEO Foundation", description: "Metadata, structure, and performance set for discoverability.", tag: "SEO" },
      { title: "Performance Optimisation", description: "Speed, image, and loading optimisation for all devices.", tag: "Speed" },
    ],
    process: [
      { step: "Discover", description: "Study the current website, user path, content, and conversion gaps." },
      { step: "Define", description: "Set the role of the website in the customer journey and brand experience." },
      { step: "Design", description: "Create structure, copy direction, visuals, and interaction flow." },
      { step: "Deliver", description: "Build and launch the website with responsive, tested execution." },
      { step: "Deepen", description: "Improve through feedback, behaviour signals, and performance data." },
    ],
    touchpoints: ["Homepage", "About page", "Services pages", "Case studies", "Contact and lead forms", "Blog and content", "Campaign landing pages", "Mobile experience"],
    useCases: [
      "Business with a website that gets traffic but no leads",
      "Brand launching a new website from scratch",
      "Business embarrassed to share their current website link",
      "Company that lost trust because their website looks outdated",
      "Business that needs a website that works like a sales tool",
      "Brand that wants a custom experience, not a Wix template",
    ],
    relatedServices: [
      { title: "Brand Identity", href: "/services/brand-identity", description: "Build the visual system your website will bring to life." },
      { title: "Landing Page Design", href: "/services/landing-page-design", description: "Create high-converting pages for campaigns and offers." },
      { title: "Content Strategy", href: "/services/content-strategy", description: "Plan the words and stories that fill your website with purpose." },
    ],
    faqs: [
      { question: "What is a website experience?", answer: "A website experience goes beyond pages and information. It is the designed journey a visitor takes from first impression to final action — built to create trust, clarity, and conversion." },
      { question: "Who is this service for?", answer: "Businesses that have a website that is not converting, looks outdated, or does not reflect the quality of what they actually offer." },
      { question: "What will Bishorgo deliver?", answer: "Structure plan, UI/UX design in Figma, full website build, mobile optimisation, SEO foundation, and performance tuning." },
      { question: "What technology do you build with?", answer: "We primarily build with Next.js — the most performant modern web framework. For simpler sites, we use the right tool for the project scope." },
      { question: "Do I need an audit before starting?", answer: "An Experience Audit helps us understand where your current website is losing visitors and what the new site needs to fix first." },
    ],
    metadata: {
      title: "Website Experience — Bishorgo Experience",
      description: "Build a custom website that creates trust, drives action, and reflects your brand. Bishorgo designs and develops website experiences that convert.",
    },
  },

  // ─────────────────────────────────────────────
  // 4. CONTENT STRATEGY
  // ─────────────────────────────────────────────
  {
    slug: "content-strategy",
    label: "Content Strategy",
    title: "Content that builds memory, not just engagement.",
    subtitle: "Stop posting for the algorithm. Start creating content that makes your brand impossible to forget.",
    description: "Bishorgo designs content systems that connect brand story, audience insight, and platform behaviour into a clear plan — so every post, article, and campaign strengthens brand memory.",
    icon: "NotebookPen",
    valueStrip: [
      { title: "Clarity", text: "Know what to say and when to say it." },
      { title: "Story", text: "Build a brand narrative, not a content calendar." },
      { title: "Memory", text: "Create content people associate with your brand." },
      { title: "Direction", text: "A system, not a day-by-day guessing game." },
    ],
    builds: [
      "Content pillar framework",
      "Brand storytelling direction",
      "Tone of voice guidelines",
      "Platform-specific content rules",
      "Content calendar structure",
      "Campaign content templates",
      "Audience message mapping",
    ],
    philosophy: {
      normal: {
        title: "Most content plans are just posting schedules.",
        text: "A content calendar full of dates tells you when to post but not what to build — leaving brands creating noise without building memory.",
      },
      bishorgo: {
        title: "Bishorgo builds content systems that compound over time.",
        text: "We connect every piece of content to a brand story arc — so content builds recognition, trust, and recall cumulatively, not randomly.",
      },
    },
    deliverables: [
      { title: "Content Pillar Framework", description: "3–5 core content themes that reflect brand positioning and audience needs.", tag: "Strategy" },
      { title: "Brand Storytelling Guide", description: "How to tell the brand story across different platforms and formats.", tag: "Story" },
      { title: "Tone of Voice Rules", description: "How the brand should write and speak — formal, warm, confident, or human.", tag: "Voice" },
      { title: "Platform Content Rules", description: "Specific guidelines for Facebook, Instagram, website, and email.", tag: "Platform" },
      { title: "Content Calendar Template", description: "A structured monthly template ready to fill with brand content.", tag: "Planning" },
      { title: "Message Map", description: "Which messages go to which audiences at which stage of the journey.", tag: "Messaging" },
    ],
    process: [
      { step: "Discover", description: "Audit existing content, understand the audience, and identify memory gaps." },
      { step: "Define", description: "Set content pillars, brand voice, and what the content should make people feel." },
      { step: "Design", description: "Build the content framework, storytelling direction, and platform-specific rules." },
      { step: "Deliver", description: "Hand over the strategy documents, templates, and content calendar structure." },
      { step: "Deepen", description: "Refine based on content performance, audience response, and brand evolution." },
    ],
    touchpoints: ["Facebook page", "Instagram grid and stories", "Reels and video direction", "Campaign posts", "Website copy", "Email newsletters", "Community replies", "Customer education content"],
    useCases: [
      "Business posting daily but seeing no brand growth",
      "Brand with no consistent content tone or message",
      "Business that relies entirely on paid ads for visibility",
      "Brand launching and needing a content launch plan",
      "Company that creates content but it doesn't reflect the brand",
      "Business ready to invest in content that builds long-term memory",
    ],
    relatedServices: [
      { title: "Brand Strategy", href: "/services/brand-strategy", description: "Define the strategic direction that guides all content decisions." },
      { title: "Social Media Strategy", href: "/services/social-media-strategy", description: "Turn your content system into a platform-specific social strategy." },
      { title: "Campaign Strategy", href: "/services/campaign-strategy", description: "Build campaigns that use content to drive specific business outcomes." },
    ],
    faqs: [
      { question: "What is content strategy?", answer: "Content strategy is the plan behind all brand communication — what to say, how to say it, where to say it, and how it builds memory and trust over time." },
      { question: "Who is this service for?", answer: "Businesses that post content but see no consistent brand growth, recognition, or customer recall." },
      { question: "What will Bishorgo deliver?", answer: "Content pillar framework, brand storytelling guide, tone of voice rules, platform content rules, content calendar template, and a message map." },
      { question: "Does this include content creation?", answer: "Content strategy is the planning and direction work. Content creation (writing, design, video) can be added as a separate service based on your needs." },
      { question: "Do I need brand strategy first?", answer: "Brand strategy makes content strategy stronger. If you have no existing brand direction, we recommend starting with strategy before content planning." },
    ],
    metadata: {
      title: "Content Strategy — Bishorgo Experience",
      description: "Build a content system that creates brand memory, not just engagement. Bishorgo designs content strategies that connect story, audience, and platform into a clear direction.",
    },
  },

  // ─────────────────────────────────────────────
  // 5. SOCIAL MEDIA STRATEGY
  // ─────────────────────────────────────────────
  {
    slug: "social-media-strategy",
    label: "Social Media Strategy",
    title: "Social media that builds a brand, not just a following.",
    subtitle: "Move beyond posting for engagement and build a social presence that creates genuine brand recall.",
    description: "Bishorgo designs social media ecosystems that blend brand storytelling, audience psychology, and platform strategy — so your social presence becomes a memory-building machine.",
    icon: "MessagesSquare",
    valueStrip: [
      { title: "Brand Recall", text: "Be the brand people think of first." },
      { title: "Consistency", text: "Look and sound the same everywhere." },
      { title: "Community", text: "Build an audience that trusts the brand." },
      { title: "Conversion", text: "Turn social attention into business results." },
    ],
    builds: [
      "Platform-specific social strategy",
      "Content theme and pillar system",
      "Visual grid and aesthetic direction",
      "Posting rhythm and frequency plan",
      "Engagement and community rules",
      "Hashtag and reach strategy",
      "Social conversion pathway",
    ],
    philosophy: {
      normal: {
        title: "Most social strategies are just posting schedules.",
        text: "Posting three times a week with product photos and offers creates a catalog — not a brand people remember and trust." ,
      },
      bishorgo: {
        title: "Bishorgo builds social ecosystems that create memory.",
        text: "We design social presence as a brand touchpoint — where every post, reply, and story reinforces what the brand stands for and how it makes people feel.",
      },
    },
    deliverables: [
      { title: "Platform Strategy Document", description: "Specific strategy for Facebook, Instagram, and relevant platforms.", tag: "Strategy" },
      { title: "Visual Grid Direction", description: "How the social profile should look when someone visits the page.", tag: "Visual" },
      { title: "Content Theme System", description: "Core themes that guide what the brand talks about consistently.", tag: "Content" },
      { title: "Engagement Playbook", description: "How to reply, build community, and handle conversations.", tag: "Community" },
      { title: "Posting Plan Template", description: "Structured template for weekly and monthly content planning.", tag: "Planning" },
      { title: "Social Conversion Path", description: "How social posts guide followers toward the business objective.", tag: "Conversion" },
    ],
    process: [
      { step: "Discover", description: "Audit current social performance, audience behaviour, and brand perception." },
      { step: "Define", description: "Set platform goals, brand voice for social, and what success looks like." },
      { step: "Design", description: "Build the content system, visual direction, and engagement playbook." },
      { step: "Deliver", description: "Hand over the strategy, templates, and implementation guidance." },
      { step: "Deepen", description: "Improve based on platform data, audience growth, and content performance." },
    ],
    touchpoints: ["Facebook page and feed", "Instagram grid and reels", "Instagram stories", "Facebook group management", "Story highlights", "Profile bio and links", "Social ad direction", "Influencer collaboration brief"],
    useCases: [
      "Business posting but getting no meaningful growth",
      "Brand with inconsistent tone and visual across platforms",
      "Business relying only on boosted posts",
      "Brand launching and needing a social launch strategy",
      "Business that looks unprofessional on social media",
      "Brand that wants social to support real business goals",
    ],
    relatedServices: [
      { title: "Content Strategy", href: "/services/content-strategy", description: "Build the content system that powers your social strategy." },
      { title: "Campaign Strategy", href: "/services/campaign-strategy", description: "Run social campaigns that create specific business outcomes." },
      { title: "Brand Identity", href: "/services/brand-identity", description: "Create the visual system that makes your social presence consistent." },
    ],
    faqs: [
      { question: "What is social media strategy?", answer: "Social media strategy is the planned approach to how a brand shows up, speaks, and behaves on social platforms — designed to build community, trust, and memory, not just reach." },
      { question: "Who is this service for?", answer: "Businesses that are active on social media but seeing no real brand growth, recall, or business results from their presence." },
      { question: "What will Bishorgo deliver?", answer: "Platform strategy, visual grid direction, content theme system, engagement playbook, posting plan template, and a social conversion path." },
      { question: "Does this include content creation and posting?", answer: "Strategy is the planning and direction work. Execution — writing captions, designing posts, and managing accounts — can be added separately." },
      { question: "Which platforms do you design strategy for?", answer: "Primarily Facebook and Instagram, as these are the most relevant for Bangladeshi businesses. Strategy can be extended to YouTube, LinkedIn, or TikTok depending on business goals." },
    ],
    metadata: {
      title: "Social Media Strategy — Bishorgo Experience",
      description: "Build a social media presence that creates brand memory and business results. Bishorgo designs social strategies that go beyond posting schedules.",
    },
  },

  // ─────────────────────────────────────────────
  // 6. CAMPAIGN STRATEGY
  // ─────────────────────────────────────────────
  {
    slug: "campaign-strategy",
    label: "Campaign Strategy",
    title: "Campaigns designed to be remembered, not just clicked.",
    subtitle: "Build campaign strategies that create brand memory alongside business results.",
    description: "Bishorgo designs campaign systems that combine creative concept, message architecture, channel strategy, and conversion flow — so each campaign builds brand equity while driving measurable outcomes.",
    icon: "Megaphone",
    valueStrip: [
      { title: "Concept", text: "A campaign idea people actually talk about." },
      { title: "Message", text: "Words that land and stick in memory." },
      { title: "Channel", text: "The right platform at the right moment." },
      { title: "Conversion", text: "Results that go beyond the campaign window." },
    ],
    builds: [
      "Campaign concept and creative territory",
      "Campaign message architecture",
      "Channel selection and timing plan",
      "Creative brief and direction",
      "Landing page and conversion pathway",
      "Campaign measurement framework",
      "Post-campaign brand memory assessment",
    ],
    philosophy: {
      normal: {
        title: "Most campaigns optimise for clicks.",
        text: "A typical campaign focuses on CPM, CPC, and ROAS — and disappears from memory the moment the budget runs out.",
      },
      bishorgo: {
        title: "Bishorgo designs campaigns that outlast the media spend.",
        text: "We build campaigns around a creative concept and brand memory system — so the business is remembered long after the ads stop running.",
      },
    },
    deliverables: [
      { title: "Campaign Concept Document", description: "The core creative idea, territories, and visual direction.", tag: "Concept" },
      { title: "Message Architecture", description: "What the campaign says, in what order, on which platform.", tag: "Messaging" },
      { title: "Channel & Timeline Plan", description: "Where and when the campaign runs across platforms.", tag: "Planning" },
      { title: "Creative Brief", description: "Direction document for designers and content creators.", tag: "Creative" },
      { title: "Conversion Pathway", description: "How campaign traffic moves toward a specific business action.", tag: "Conversion" },
      { title: "Campaign Measurement Frame", description: "What success looks like beyond click-through rate.", tag: "Measurement" },
    ],
    process: [
      { step: "Discover", description: "Understand the business goal, audience, and what the campaign must achieve." },
      { step: "Define", description: "Set the campaign concept, creative territory, and message pillars." },
      { step: "Design", description: "Build the campaign framework, creative direction, and channel plan." },
      { step: "Deliver", description: "Launch and implement the campaign with aligned execution partners." },
      { step: "Deepen", description: "Measure results, learn from audience response, and improve for the next campaign." },
    ],
    touchpoints: ["Facebook and Instagram ads", "Campaign landing pages", "Email campaign sequences", "Reels and video content", "Influencer collaboration", "Physical activation tie-ins", "Google search campaigns", "Campaign packaging and point-of-sale"],
    useCases: [
      "Business launching a new product or service",
      "Brand running a seasonal or occasion-based campaign",
      "Business that spends on ads but gets poor recall",
      "Brand that wants a campaign with a real creative concept",
      "Business that has never had a strategy behind their promotions",
      "Brand that wants campaigns that build brand equity, not just sales",
    ],
    relatedServices: [
      { title: "Content Strategy", href: "/services/content-strategy", description: "Plan the content that powers campaign communication." },
      { title: "Landing Page Design", href: "/services/landing-page-design", description: "Convert campaign traffic into leads and customers." },
      { title: "Brand Strategy", href: "/services/brand-strategy", description: "Build the strategic foundation that every campaign draws from." },
    ],
    faqs: [
      { question: "What is campaign strategy?", answer: "Campaign strategy is the planned approach to a specific marketing push — including the creative concept, message, channels, and conversion path — designed to achieve a business goal while building brand memory." },
      { question: "Who is this service for?", answer: "Businesses planning a launch, promotion, seasonal push, or any campaign that needs to do more than generate clicks." },
      { question: "What will Bishorgo deliver?", answer: "Campaign concept, message architecture, channel and timeline plan, creative brief, conversion pathway, and a measurement framework." },
      { question: "Does this include running the ads?", answer: "Campaign strategy is the planning and direction work. Media buying and ad management can be included or handled by your existing team following the strategy." },
      { question: "Do I need brand strategy before campaign strategy?", answer: "A strong brand strategy makes every campaign more effective because the message has a clear strategic direction. We recommend starting with brand clarity if it's not already in place." },
    ],
    metadata: {
      title: "Campaign Strategy — Bishorgo Experience",
      description: "Design campaigns that create brand memory and drive business results. Bishorgo builds campaign systems from concept to conversion.",
    },
  },

  // ─────────────────────────────────────────────
  // 7. CUSTOMER JOURNEY DESIGN
  // ─────────────────────────────────────────────
  {
    slug: "customer-journey-design",
    label: "Customer Journey Design",
    title: "Design the path your customers take — from first contact to loyal advocate.",
    subtitle: "Map, improve, and connect every touchpoint in your customer journey so nothing breaks the memory you're building.",
    description: "Bishorgo maps your customer experience from first discovery to repeat purchase — identifying where memory is created, where trust is lost, and where experience can be improved.",
    icon: "Route",
    valueStrip: [
      { title: "Clarity", text: "See every touchpoint in one clear map." },
      { title: "Connection", text: "Link every interaction into one journey." },
      { title: "Trust", text: "Remove the moments that break confidence." },
      { title: "Loyalty", text: "Turn buyers into people who come back." },
    ],
    builds: [
      "Full customer journey map",
      "Touchpoint audit and gap analysis",
      "Memory creation opportunity points",
      "Trust-breaking moment identification",
      "Post-purchase experience design",
      "Customer loyalty pathway",
      "Journey improvement roadmap",
    ],
    philosophy: {
      normal: {
        title: "Most businesses manage touchpoints in isolation.",
        text: "Marketing does ads. Design makes the website. Operations handles delivery. Nobody owns the full customer journey — and customers feel the disconnection.",
      },
      bishorgo: {
        title: "Bishorgo connects every touchpoint into one experience.",
        text: "We map the full journey and design how each moment connects to the next — so the customer always feels in a relationship with the brand, not just in a transaction.",
      },
    },
    deliverables: [
      { title: "Customer Journey Map", description: "A visual map of every stage and touchpoint in the customer experience.", tag: "Journey" },
      { title: "Touchpoint Audit Report", description: "Where the experience is strong, weak, or missing entirely.", tag: "Audit" },
      { title: "Memory Opportunity Points", description: "Specific moments where experience design can create brand recall.", tag: "Memory" },
      { title: "Trust Gap Analysis", description: "Moments that reduce confidence and what to do about them.", tag: "Trust" },
      { title: "Post-Purchase Experience Plan", description: "How to design what happens after the customer pays.", tag: "Retention" },
      { title: "Journey Improvement Roadmap", description: "A prioritised action plan for improving the full customer journey.", tag: "Strategy" },
    ],
    process: [
      { step: "Discover", description: "Map the current customer journey and identify every touchpoint and gap." },
      { step: "Define", description: "Set what each touchpoint should make the customer feel and remember." },
      { step: "Design", description: "Redesign weak touchpoints and add memory-creating moments." },
      { step: "Deliver", description: "Hand over journey maps, improvement plans, and implementation guidance." },
      { step: "Deepen", description: "Improve the journey continuously based on customer feedback and behaviour." },
    ],
    touchpoints: ["Discovery (search, social, referral)", "First website visit", "Lead and inquiry handling", "Proposal and quote experience", "Purchase and payment", "Delivery and fulfilment", "Post-purchase follow-up", "Repeat engagement and loyalty"],
    useCases: [
      "Business where customers buy once and don't return",
      "Brand where the online experience and offline experience feel different",
      "Business getting inquiries but low conversion",
      "Brand that loses customers after the sale",
      "Business unsure why customer satisfaction is low",
      "Brand ready to build a loyalty and retention system",
    ],
    relatedServices: [
      { title: "Brand Strategy", href: "/services/brand-strategy", description: "Set the strategic direction that every journey touchpoint should carry." },
      { title: "Experience Marketing", href: "/services/experience-marketing", description: "Design specific moments in the journey that create emotional memory." },
      { title: "Website Experience", href: "/services/website-experience", description: "Rebuild the digital touchpoints that the journey depends on." },
    ],
    faqs: [
      { question: "What is customer journey design?", answer: "Customer journey design is the practice of mapping and improving every interaction a customer has with a brand — from first discovery to post-purchase loyalty — to create a seamless and memorable experience." },
      { question: "Who is this service for?", answer: "Businesses that have customers who buy once and don't return, or brands where different parts of the experience feel disconnected." },
      { question: "What will Bishorgo deliver?", answer: "A customer journey map, touchpoint audit, memory opportunity points, trust gap analysis, post-purchase plan, and a journey improvement roadmap." },
      { question: "How long does this take?", answer: "A journey design engagement typically takes 2–4 weeks depending on the complexity of the business and the number of customer segments." },
      { question: "Do I need an audit first?", answer: "An Experience Audit is the starting point for journey design work. It helps us identify exactly which parts of the journey need the most attention." },
    ],
    metadata: {
      title: "Customer Journey Design — Bishorgo Experience",
      description: "Map and design your customer journey from first contact to loyal advocate. Bishorgo identifies where memory is created, where trust is lost, and what to fix.",
    },
  },

  // ─────────────────────────────────────────────
  // 8. EXPERIENCE MARKETING
  // ─────────────────────────────────────────────
  {
    slug: "experience-marketing",
    label: "Experience Marketing",
    title: "Marketing that people feel, not just see.",
    subtitle: "Design brand interactions that create emotional memory — online, offline, and at every physical touchpoint.",
    description: "Bishorgo designs experiential marketing systems that create emotional peaks at the moments that matter most — from the first interaction to the moment after the purchase.",
    icon: "Sparkles",
    valueStrip: [
      { title: "Emotion", text: "Make people feel something about your brand." },
      { title: "Memory", text: "Create moments worth talking about." },
      { title: "Shareability", text: "Design interactions people want to share." },
      { title: "Loyalty", text: "Build relationships, not just transactions." },
    ],
    builds: [
      "Experience marketing strategy",
      "Peak moment design",
      "Physical touchpoint design",
      "Packaging and unboxing experience",
      "In-store and venue experience design",
      "Post-purchase memory system",
      "Brand activation concepts",
    ],
    philosophy: {
      normal: {
        title: "Most marketing talks at customers.",
        text: "Ads, posts, and promotions are one-directional. They reach people but rarely make them feel something — so they are forgotten immediately.",
      },
      bishorgo: {
        title: "Bishorgo designs marketing that creates emotional peaks.",
        text: "We find the moments where brand and customer intersect and design those moments to be felt, remembered, and shared.",
      },
    },
    deliverables: [
      { title: "Experience Marketing Strategy", description: "The plan for which moments to design and what they should make people feel.", tag: "Strategy" },
      { title: "Peak Moment Map", description: "The specific moments in the journey where experience design has the most impact.", tag: "Journey" },
      { title: "Physical Touchpoint Brief", description: "Direction for designing packaging, store, event, or delivery experience.", tag: "Physical" },
      { title: "Unboxing Experience Design", description: "How the product delivery moment should feel and what it should communicate.", tag: "Unboxing" },
      { title: "Activation Concepts", description: "Ideas for brand activations that create shareworthy experiences.", tag: "Activation" },
      { title: "Memory Cue System", description: "Specific sensory or brand elements that trigger brand recall after the experience.", tag: "Memory" },
    ],
    process: [
      { step: "Discover", description: "Identify which moments in the customer journey have the most emotional potential." },
      { step: "Define", description: "Set what each experience moment should make people feel, do, and share." },
      { step: "Design", description: "Create the physical, digital, and sensory experience system." },
      { step: "Deliver", description: "Implement and launch the designed experience touchpoints." },
      { step: "Deepen", description: "Measure memory and sharing, and improve experience touchpoints over time." },
    ],
    touchpoints: ["Packaging and unboxing", "In-store environment", "Event space design", "Product delivery experience", "Brand activation moments", "Customer community events", "Post-purchase communication", "Sensory brand elements"],
    useCases: [
      "Business that wants customers to talk about the experience",
      "Brand with a product that deserves a better unboxing moment",
      "Restaurant or retail business that wants the space to feel like the brand",
      "Brand planning an event or activation",
      "Business that wants physical touchpoints to create online sharing",
      "Brand that has great products but forgettable delivery experiences",
    ],
    relatedServices: [
      { title: "Customer Journey Design", href: "/services/customer-journey-design", description: "Map the full journey before designing the experience peaks." },
      { title: "Event Activation", href: "/services/event-activation", description: "Design physical activation events that create memorable brand moments." },
      { title: "Field Marketing", href: "/services/field-marketing", description: "Take the brand experience directly to the customer in the real world." },
    ],
    faqs: [
      { question: "What is experience marketing?", answer: "Experience marketing is the practice of designing specific moments in the customer journey to be emotionally felt and remembered — from packaging to in-store environments to post-purchase communication." },
      { question: "Who is this service for?", answer: "Businesses that want customers to feel something about their brand — not just see it — and turn that feeling into memory, loyalty, and organic sharing." },
      { question: "What will Bishorgo deliver?", answer: "An experience marketing strategy, peak moment map, physical touchpoint brief, unboxing experience design, activation concepts, and a memory cue system." },
      { question: "Is this only for physical businesses?", answer: "No. Experience design applies to digital touchpoints too — onboarding flows, email sequences, and community interactions can all be designed to create emotional peaks." },
      { question: "How does this connect to marketing ROI?", answer: "Experiences that people feel and remember are shared — reducing paid marketing costs and increasing word-of-mouth acquisition and customer lifetime value." },
    ],
    metadata: {
      title: "Experience Marketing — Bishorgo Experience",
      description: "Design brand interactions that create emotional memory. Bishorgo designs experiential marketing systems for physical, digital, and event touchpoints.",
    },
  },

  // ─────────────────────────────────────────────
  // 9. LANDING PAGE DESIGN
  // ─────────────────────────────────────────────
  {
    slug: "landing-page-design",
    label: "Landing Page Design",
    title: "Landing pages that turn campaign traffic into real business.",
    subtitle: "Design high-converting landing pages that match your brand and move visitors toward a specific action.",
    description: "Bishorgo designs custom landing pages that are brand-aligned, conversion-optimised, and built for the specific campaign or offer they serve — not generic templates.",
    icon: "LayoutTemplate",
    valueStrip: [
      { title: "Clarity", text: "One message. One action. No confusion." },
      { title: "Brand Alignment", text: "Looks and feels like the brand, not a template." },
      { title: "Conversion", text: "Designed to turn attention into action." },
      { title: "Speed", text: "Fast-loading for mobile campaign traffic." },
    ],
    builds: [
      "Landing page strategy and goal definition",
      "Page structure and hierarchy",
      "Visual design aligned with brand system",
      "Conversion-focused copywriting direction",
      "Lead form and CTA design",
      "Mobile-first responsive build",
      "Performance and speed optimisation",
    ],
    philosophy: {
      normal: {
        title: "Most landing pages are generic templates with a form.",
        text: "Template-based landing pages look disconnected from the brand, confuse visitors with too much information, and fail to create the trust needed to convert.",
      },
      bishorgo: {
        title: "Bishorgo designs landing pages as focused experience moments.",
        text: "We design each landing page as a single, brand-aligned conversion experience — where every element, message, and visual guides one type of visitor toward one specific action.",
      },
    },
    deliverables: [
      { title: "Landing Page Strategy", description: "The goal, audience, message, and conversion action the page is designed for.", tag: "Strategy" },
      { title: "Page Structure Design", description: "Section-by-section layout for maximum clarity and conversion flow.", tag: "Structure" },
      { title: "Visual Design", description: "Brand-aligned visual design in Figma for the full page.", tag: "Design" },
      { title: "Copy Direction", description: "Headline, subheadline, body, and CTA language guidance.", tag: "Copy" },
      { title: "Responsive Build", description: "Fully built, fast-loading, mobile-first landing page.", tag: "Build" },
      { title: "Conversion Optimisation", description: "Form placement, CTA design, and trust signal positioning.", tag: "CRO" },
    ],
    process: [
      { step: "Discover", description: "Understand the campaign goal, audience, offer, and current conversion rate." },
      { step: "Define", description: "Set the page strategy, core message, and conversion action." },
      { step: "Design", description: "Create the page structure, visual design, and copy direction." },
      { step: "Deliver", description: "Build and launch the landing page with full mobile optimisation." },
      { step: "Deepen", description: "Test, measure, and improve based on visitor behaviour and conversion data." },
    ],
    touchpoints: ["Facebook and Instagram ad traffic", "Google Search campaign traffic", "Email campaign traffic", "Organic social link clicks", "WhatsApp campaign traffic", "Influencer promotion traffic", "Event registration pages", "Product offer pages"],
    useCases: [
      "Business running ads but sending traffic to the homepage",
      "Campaign that needs a dedicated conversion page",
      "Product launch that needs a focused offer page",
      "Event registration that needs a sign-up landing page",
      "Brand that wants a page that matches the brand, not a template",
      "Business that has a great offer but a poor conversion rate",
    ],
    relatedServices: [
      { title: "Website Experience", href: "/services/website-experience", description: "Build the full website that the landing page connects to." },
      { title: "Campaign Strategy", href: "/services/campaign-strategy", description: "Design the campaign system the landing page is part of." },
      { title: "Content Strategy", href: "/services/content-strategy", description: "Plan the messaging that makes the landing page copy compelling." },
    ],
    faqs: [
      { question: "What is a landing page?", answer: "A landing page is a standalone web page designed for one specific audience, message, and conversion action — separate from the main website. It is used for campaigns, offers, events, and lead generation." },
      { question: "Who is this service for?", answer: "Businesses running paid campaigns, product launches, or events that need a focused conversion page rather than sending traffic to a generic homepage." },
      { question: "What will Bishorgo deliver?", answer: "Landing page strategy, structure design, visual design in Figma, copy direction, responsive build, and conversion optimisation." },
      { question: "How is this different from a website page?", answer: "A landing page has one goal and one audience in mind. It removes navigation and distractions so the visitor has only one thing to do — convert." },
      { question: "How fast can this be done?", answer: "A focused landing page can typically be designed and built within 1–2 weeks depending on complexity and feedback rounds." },
    ],
    metadata: {
      title: "Landing Page Design — Bishorgo Experience",
      description: "Design high-converting landing pages that match your brand and turn campaign traffic into leads and customers. Bishorgo builds brand-aligned, conversion-optimised landing pages.",
    },
  },

  // ─────────────────────────────────────────────
  // 10. CREATIVE DIRECTION
  // ─────────────────────────────────────────────
  {
    slug: "creative-direction",
    label: "Creative Direction",
    title: "Creative Direction that keeps your brand visually strong everywhere.",
    subtitle: "Set the creative vision behind campaigns, content, and brand expression so every output feels intentional.",
    description: "Bishorgo provides creative direction that defines the visual concept, style, and quality benchmark for campaigns, content, and brand moments — so every creative output feels like it belongs to the same brand.",
    icon: "Brush",
    valueStrip: [
      { title: "Vision", text: "A clear creative concept behind everything." },
      { title: "Quality", text: "A standard every output is measured against." },
      { title: "Cohesion", text: "Every creative feels like the same brand." },
      { title: "Impact", text: "Visuals that land and create brand memory." },
    ],
    builds: [
      "Creative concept and visual territory",
      "Campaign visual direction",
      "Photography and video style guide",
      "Creative quality benchmarks",
      "Moodboard and reference system",
      "Creative brief templates",
      "Vendor and team creative alignment",
    ],
    philosophy: {
      normal: {
        title: "Most brands produce creative without a creative director.",
        text: "Designers, photographers, and agencies produce work in isolation — each piece looks different, and nothing feels like a unified brand.",
      },
      bishorgo: {
        title: "Bishorgo sets the creative vision that every output answers to.",
        text: "We define the creative territory, quality benchmark, and visual direction — so every designer, photographer, and content creator works toward the same brand feeling.",
      },
    },
    deliverables: [
      { title: "Creative Concept Document", description: "The core creative idea and visual territories for the brand or campaign.", tag: "Concept" },
      { title: "Visual Style Guide", description: "Photography, video, colour, and composition direction.", tag: "Visual" },
      { title: "Moodboard System", description: "Visual reference boards for different brand moments and expressions.", tag: "Reference" },
      { title: "Creative Brief Templates", description: "Standardised briefs for designers, photographers, and content creators.", tag: "Briefs" },
      { title: "Creative Quality Benchmarks", description: "Examples of what good looks like for this brand.", tag: "Standards" },
      { title: "Campaign Creative Direction", description: "Specific visual concept and direction for a campaign or product launch.", tag: "Campaign" },
    ],
    process: [
      { step: "Discover", description: "Understand the brand, existing creative output, and what the creative needs to achieve." },
      { step: "Define", description: "Set the creative vision, visual territory, and quality benchmarks." },
      { step: "Design", description: "Build concept documents, style guides, moodboards, and creative briefs." },
      { step: "Deliver", description: "Hand over all creative direction documents and brief templates." },
      { step: "Deepen", description: "Evolve the creative direction as the brand grows and campaigns develop." },
    ],
    touchpoints: ["Campaign visuals", "Social media content", "Photography direction", "Video and reel direction", "Event and activation visuals", "Print and outdoor advertising", "Packaging design direction", "Website visual expression"],
    useCases: [
      "Brand that produces a lot of content but it all looks different",
      "Business launching a campaign and wanting a clear creative concept",
      "Brand working with multiple designers with no unified direction",
      "Business that wants to elevate the quality of all creative output",
      "Brand that wants visuals that look as good as their premium competitors",
      "Company planning a major brand moment that needs strong visual direction",
    ],
    relatedServices: [
      { title: "Brand Identity", href: "/services/brand-identity", description: "Build the visual system that creative direction will be applied to." },
      { title: "Campaign Strategy", href: "/services/campaign-strategy", description: "Design the campaign that creative direction will bring to life." },
      { title: "Content Strategy", href: "/services/content-strategy", description: "Plan the content system that creative direction will give a visual voice." },
    ],
    faqs: [
      { question: "What is creative direction?", answer: "Creative direction is the practice of setting the visual concept, style, and quality benchmark for a brand or campaign — ensuring every creative output feels intentional, cohesive, and on-brand." },
      { question: "Who is this service for?", answer: "Businesses that produce content, campaigns, or brand materials but find that different pieces look and feel disconnected from each other." },
      { question: "What will Bishorgo deliver?", answer: "Creative concept document, visual style guide, moodboard system, creative brief templates, quality benchmarks, and campaign-specific creative direction." },
      { question: "Does Bishorgo produce the creative output too?", answer: "Creative direction is the planning and direction work. Design, photography, and production can be included or handled by your existing team following the direction." },
      { question: "Is this a one-time service or ongoing?", answer: "It can be both. Creative direction is most valuable as an ongoing relationship where Bishorgo reviews and guides creative output to maintain quality and cohesion." },
    ],
    metadata: {
      title: "Creative Direction — Bishorgo Experience",
      description: "Set the creative vision behind your brand. Bishorgo provides creative direction that keeps campaigns, content, and brand expression visually strong and cohesive.",
    },
  },

  // ─────────────────────────────────────────────
  // 11. FIELD MARKETING
  // ─────────────────────────────────────────────
  {
    slug: "field-marketing",
    label: "Field Marketing",
    title: "Take the brand directly to the people who need to experience it.",
    subtitle: "Design field marketing strategies that create real-world brand presence, community trust, and local memory.",
    description: "Bishorgo plans and designs field marketing activations that bring the brand to the street, market, community, or local environment — creating direct human interactions that advertising cannot replicate.",
    icon: "MapPin",
    valueStrip: [
      { title: "Presence", text: "Be seen where your customers actually are." },
      { title: "Trust", text: "Human interaction builds faster trust than ads." },
      { title: "Local Memory", text: "Be the brand people in the area remember." },
      { title: "Shareability", text: "Create moments people photograph and share." },
    ],
    builds: [
      "Field marketing strategy and territory map",
      "Activation concept and design",
      "Team briefing and engagement script",
      "Field material and collateral design",
      "Sampling and demonstration design",
      "Community engagement plan",
      "Field marketing measurement system",
    ],
    philosophy: {
      normal: {
        title: "Most brands market where it's convenient — online.",
        text: "Digital-only brands miss the physical moments where real trust is built — the neighbourhood, the market, the community gathering — where people actually make decisions.",
      },
      bishorgo: {
        title: "Bishorgo takes the brand to where memory is made.",
        text: "We design field marketing experiences that put the brand in front of real people in real places — creating the kind of direct human memory that digital marketing rarely achieves.",
      },
    },
    deliverables: [
      { title: "Field Marketing Strategy", description: "The target territories, timing, objectives, and approach for field activity.", tag: "Strategy" },
      { title: "Activation Concept", description: "The creative idea behind the field marketing execution.", tag: "Concept" },
      { title: "Team Engagement Brief", description: "Scripts, talking points, and brand behaviour guidelines for field teams.", tag: "Briefing" },
      { title: "Field Material Design", description: "Banners, flyers, sampling kits, and point-of-contact materials.", tag: "Materials" },
      { title: "Community Engagement Plan", description: "How to build relationships with specific communities or neighbourhoods.", tag: "Community" },
      { title: "Measurement Framework", description: "How to track the reach, recall, and business impact of field activity.", tag: "Measurement" },
    ],
    process: [
      { step: "Discover", description: "Understand the target area, audience, and what field marketing should achieve." },
      { step: "Define", description: "Set the activation concept, territory map, and engagement approach." },
      { step: "Design", description: "Create the strategy, materials, team briefs, and execution plan." },
      { step: "Deliver", description: "Execute the field activation with full brand alignment." },
      { step: "Deepen", description: "Measure results, gather learnings, and improve future field activity." },
    ],
    touchpoints: ["Street and neighbourhood activation", "Market and bazaar presence", "Local business partnerships", "Community events", "Sampling and demonstration", "Pop-up brand moments", "Point-of-sale in local stores", "School, university, or institution outreach"],
    useCases: [
      "Local business that wants more neighbourhood awareness",
      "Brand launching in a new area or market",
      "Business that relies on word of mouth and wants to accelerate it",
      "Brand with a product people need to experience before buying",
      "Business that wants to build community trust, not just social reach",
      "Brand planning a market entry or expansion into a new location",
    ],
    relatedServices: [
      { title: "Event Activation", href: "/services/event-activation", description: "Design branded event experiences that go beyond field marketing." },
      { title: "Experience Marketing", href: "/services/experience-marketing", description: "Design the physical moments that field marketing creates." },
      { title: "Campaign Strategy", href: "/services/campaign-strategy", description: "Connect field activity to a larger campaign system." },
    ],
    faqs: [
      { question: "What is field marketing?", answer: "Field marketing is direct brand promotion that happens in physical locations — streets, markets, events, or community spaces — where a brand team creates real-world interactions with potential customers." },
      { question: "Who is this service for?", answer: "Local businesses, market entrants, or any brand that wants to build real-world presence, community trust, or local brand memory through direct human interaction." },
      { question: "What will Bishorgo deliver?", answer: "Field marketing strategy, activation concept, team engagement brief, field material design, community engagement plan, and a measurement framework." },
      { question: "Does Bishorgo manage the field team?", answer: "Bishorgo designs the strategy, concept, and materials. Field team recruitment and day-to-day management can be included or handled by your team following the brief." },
      { question: "Can field marketing work alongside digital campaigns?", answer: "Yes. The most effective field marketing integrates with digital campaigns — driving social sharing from physical moments and creating QR-linked connections to online brand experiences." },
    ],
    metadata: {
      title: "Field Marketing — Bishorgo Experience",
      description: "Design field marketing strategies that create real-world brand presence and local memory. Bishorgo takes the brand to where people actually are.",
    },
  },

  // ─────────────────────────────────────────────
  // 12. EVENT ACTIVATION
  // ─────────────────────────────────────────────
  {
    slug: "event-activation",
    label: "Event Activation",
    title: "Events that people remember long after they leave.",
    subtitle: "Design brand activations that create sensory memory, organic sharing, and lasting brand recall.",
    description: "Bishorgo designs event brand activations — from concept to experience design — that turn any event into a peak brand memory moment people share on social media and talk about long after.",
    icon: "Ticket",
    valueStrip: [
      { title: "Concept", text: "An event idea built around the brand." },
      { title: "Experience", text: "Every moment designed to be felt." },
      { title: "Memory", text: "Peak moments that stay with attendees." },
      { title: "Sharing", text: "Experiences people photograph and post." },
    ],
    builds: [
      "Event activation strategy and concept",
      "Space and environment experience design",
      "Attendee journey mapping",
      "Brand touchpoint integration",
      "Social sharing moment design",
      "Sensory experience elements",
      "Event measurement and follow-up plan",
    ],
    philosophy: {
      normal: {
        title: "Most brand events are forgettable.",
        text: "Generic booths, pull-up banners, and branded balloons create a presence — but not an experience. Attendees leave without a strong memory of the brand.",
      },
      bishorgo: {
        title: "Bishorgo designs events around peak memory moments.",
        text: "We map the attendee journey through the event and design specific sensory, visual, and interactive moments that create brand memory — not just brand visibility.",
      },
    },
    deliverables: [
      { title: "Event Activation Concept", description: "The creative idea and experience theme behind the event presence.", tag: "Concept" },
      { title: "Space Experience Design", description: "Layout, visual design, and brand touchpoint map for the event space.", tag: "Space" },
      { title: "Attendee Journey Map", description: "How attendees move through the event and what they experience at each point.", tag: "Journey" },
      { title: "Social Sharing Design", description: "Designed moments and installations that encourage photography and sharing.", tag: "Social" },
      { title: "Brand Materials Brief", description: "All physical materials needed for the activation and their design direction.", tag: "Materials" },
      { title: "Post-Event Follow-Up Plan", description: "How to continue the relationship after the event ends.", tag: "Follow-Up" },
    ],
    process: [
      { step: "Discover", description: "Understand the event, audience, brand objectives, and space requirements." },
      { step: "Define", description: "Set the activation concept, brand touchpoints, and memory objectives." },
      { step: "Design", description: "Create the space design, attendee journey, and social sharing moments." },
      { step: "Deliver", description: "Implement the activation with full brand alignment and team briefing." },
      { step: "Deepen", description: "Measure reach, recall, and social sharing — and improve for future events." },
    ],
    touchpoints: ["Event booth or space design", "Brand installation and displays", "Product demonstration experience", "Sampling and gifting moments", "Photo opportunity design", "On-site digital interaction", "Event social media coverage", "Post-event follow-up communication"],
    useCases: [
      "Brand participating in a trade show, fair, or exhibition",
      "Business launching a product with an event moment",
      "Brand hosting a customer appreciation or community event",
      "Business at a festival or cultural event needing brand presence",
      "Brand that wants an event booth that people actually photograph",
      "Business planning a launch event that needs to feel memorable",
    ],
    relatedServices: [
      { title: "Experience Marketing", href: "/services/experience-marketing", description: "Design the sensory moments that make events create lasting memory." },
      { title: "Field Marketing", href: "/services/field-marketing", description: "Take the brand beyond events to direct community engagement." },
      { title: "Creative Direction", href: "/services/creative-direction", description: "Set the visual concept that brings the event activation to life." },
    ],
    faqs: [
      { question: "What is event activation?", answer: "Event activation is the strategic design of a brand's presence at an event — turning a booth, space, or gathering into a brand experience that creates emotional memory, photography, and social sharing." },
      { question: "Who is this service for?", answer: "Any brand participating in an event, trade show, festival, or hosting their own brand event who wants the experience to be remembered, not just seen." },
      { question: "What will Bishorgo deliver?", answer: "Event activation concept, space experience design, attendee journey map, social sharing design, brand materials brief, and a post-event follow-up plan." },
      { question: "Can you design activations for small events?", answer: "Yes. A great brand activation does not need a large budget — it needs a clear concept and intentional design. We work with events of all sizes." },
      { question: "How far in advance should we start?", answer: "Ideally 4–6 weeks before the event for a well-designed activation. For large events or complex builds, 8–12 weeks allows for the best creative and production outcome." },
    ],
    metadata: {
      title: "Event Activation — Bishorgo Experience",
      description: "Design brand event activations that create sensory memory and social sharing. Bishorgo turns events into peak brand memory moments.",
    },
  },
];

export function getServicePage(slug: string): ServicePageBlueprint | undefined {
  return servicePages.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicePages.map((s) => s.slug);
}
