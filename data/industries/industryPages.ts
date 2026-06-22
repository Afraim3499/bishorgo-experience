// ============================================================
// data/industries/industryPages.ts
// Bishorgo Experience — Industry Landing Pages Data
// ============================================================

export type IndustryPageBlueprint = {
  slug: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string; // Lucide icon name
  customerJourney: {
    stage: string;
    description: string;
    isMemoryMoment?: boolean;
  }[];
  experienceGaps: string[];
  memoryTriggers: {
    title: string;
    description: string;
  }[];
  bishorgoSystem: {
    center: string;
    nodes: string[];
  };
  relevantServices: {
    title: string;
    href: string;
    description: string;
  }[];
  reimaginedExample: {
    title: string;
    currentSituation: string;
    missedMemory: string;
    bishorgoIdea: string;
    expectedOutcome: string;
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

export const industryPages: IndustryPageBlueprint[] = [
  // ─────────────────────────────────────────────
  // 1. RESTAURANTS
  // ─────────────────────────────────────────────
  {
    slug: "restaurants",
    label: "Restaurants",
    title: "Restaurant experiences people come back for.",
    subtitle: "Food brings people in. Experience brings them back.",
    description: "Bishorgo helps restaurants connect menu, service, content, reviews, offers, and customer memory into one stronger brand journey.",
    icon: "Utensils",
    customerJourney: [
      { stage: "Discovery", description: "Looking at Reels, Google Maps, or getting a recommendation from a friend." },
      { stage: "Menu Check", description: "Reading the menu online to see if the options and prices feel right." },
      { stage: "Visit", description: "Stepping inside, checking the music, lighting, seating, and physical mood." },
      { stage: "Service", description: "How they are greeted, how fast the food comes, and the behavior of the staff." },
      { stage: "Food Moment", description: "The food arriving, how it looks, the first bite, and table presentation.", isMemoryMoment: true },
      { stage: "Review", description: "Leaving a review or seeing a post-visit offer on social media." },
      { stage: "Return", description: "Coming back with more friends because the experience felt complete." },
    ],
    experienceGaps: [
      "Good food, weak brand recall: Customers love the meal but forget the restaurant's name.",
      "Menu looks ordinary: Just a list of items and prices with no story or character.",
      "Social posts do not create craving: Random updates instead of building sensory desire.",
      "Reviews are not guided: Getting generic feedback instead of highlighting unique vibes.",
      "Offers feel random: Disconnected discounts that reduce brand value instead of driving loyalty.",
      "No repeat-customer journey: Treating new and returning guests exactly the same.",
    ],
    memoryTriggers: [
      { title: "First Impression Vibe", description: "The exact feeling of walking in — the greeting, the lighting, and the warmth of the space." },
      { title: "Food Storytelling", description: "How the signature dish was presented, served, and explained to them." },
      { title: "Uncommon Service Care", description: "A small moment of extra attention or care from the staff that wasn't on the bill." },
      { title: "The Signature Cue", description: "A visual detail, custom receipt note, or unique custom element they took a picture of." },
    ],
    bishorgoSystem: {
      center: "Restaurant Experience System",
      nodes: [
        "Brand Positioning",
        "Menu Storytelling",
        "Social Content Direction",
        "Website & Booking",
        "Offer Campaigns",
        "Review Journeys",
        "Repeat Customer Loops",
        "Event Activations",
      ],
    },
    relevantServices: [
      { title: "Brand Strategy", href: "/services/brand-strategy", description: "Define your restaurant's unique position, tone, and character in a crowded market." },
      { title: "Content Strategy", href: "/services/content-strategy", description: "Plan stories, visual styles, and messages that build craving and name recall." },
      { title: "Social Media Strategy", href: "/services/social-media-strategy", description: "Turn updates into sensory hooks that make people want to visit." },
      { title: "Website Experience", href: "/services/website-experience", description: "Build a smooth digital menu and reservation path that feels premium." },
      { title: "Campaign Strategy", href: "/services/campaign-strategy", description: "Design launch events, seasonal campaigns, and occasion pushes that fill seats." },
      { title: "Customer Journey Design", href: "/services/customer-journey-design", description: "Connect the online discovery to table service and post-visit loyalty." },
      { title: "Experience Marketing", href: "/services/experience-marketing", description: "Design physical unboxings, custom receipt cards, and shareable sensory moments." },
    ],
    reimaginedExample: {
      title: "A local restaurant, reimagined as a return-worthy experience.",
      currentSituation: "A restaurant serves excellent food but has low repeat customers and competes entirely on discount promotions.",
      missedMemory: "Customers leave happy but forget the name, associating the visit only with the discount.",
      bishorgoIdea: "We redesigned the menu with visual stories of the ingredients, trained staff to share a unique table-greeting ritual, and created a custom exit postcard containing a code for a free dessert on their next visit.",
      expectedOutcome: "Repeat visits increased by 35% in three months, and name mentions in reviews grew by 60% without discounts.",
    },
    faqs: [
      { question: "How can a restaurant become more memorable?", answer: "By moving beyond the food. Restaurants become memorable when they design sensory peaks — like a unique welcoming gesture, a story-driven menu, custom table elements, or an unexpected post-meal touchpoint." },
      { question: "Can Bishorgo help with social media and campaigns?", answer: "Yes. We design the creative concepts, content systems, and campaigns that make your restaurant look premium and drive visits, working with your existing media teams or our creative partners." },
      { question: "Do restaurants need a website?", answer: "A premium website acts as your digital front door. It lets customers browse a beautiful, mobile-optimized menu, read your story, and book tables directly without third-party fees or distracting social media noise." },
      { question: "How does customer journey design help repeat visits?", answer: "It maps the exact path from how a customer finds you online, to their physical greeting, ordering, dining, payment, and follow-up. By designing the end of the visit to leave a lasting positive impression, we double the chance of return visits." },
      { question: "Should we start with an Experience Audit?", answer: "Absolutely. The Experience Audit is our entry point. We visit your restaurant as guests, review all digital channels, audit the physical service, and give you a detailed report of where you are losing memory and revenue." },
    ],
    metadata: {
      title: "Restaurant Brand Experience Design — Bishorgo",
      description: "Food brings people in. Experience brings them back. Discover how Bishorgo designs complete restaurant brand journeys that turn diners into loyal advocates.",
    },
  },

  // ─────────────────────────────────────────────
  // 2. CAFES
  // ─────────────────────────────────────────────
  {
    slug: "cafes",
    label: "Cafes",
    title: "Cafe spaces built for conversation and connection.",
    subtitle: "A cup of coffee starts the visit. A welcoming corner keeps them returning.",
    description: "Bishorgo designs sensory cafe journeys that turn casual morning coffee runs into long-term local rituals.",
    icon: "Coffee",
    customerJourney: [
      { stage: "Discovery", description: "Spotted while walking past, found on Instagram reels, or recommended by a friend." },
      { stage: "First Impression", description: "Stepping inside to smell the roast, hear the music, and see the queue flow." },
      { stage: "Order & Vibe", description: "Interacting with the barista, picking a brew, and finding a suitable table corner." },
      { stage: "The Cup Moment", description: "First sip of coffee, tasting the pastry, and checking the custom branded cup layout.", isMemoryMoment: true },
      { stage: "Social / Focus", description: "Working on a laptop, taking a picture of the latte art, or chatting with a companion." },
      { stage: "Exit Touch", description: "A warm goodbye, custom loyalty stamp, or a takeaway bag detail." },
      { stage: "Return Ritual", description: "Making this cafe their default space for meetings, reading, or morning espresso." },
    ],
    experienceGaps: [
      "Good coffee, forgettable space: People buy the coffee but don't connect with the brand character.",
      "Loud or disruptive vibes: Music and seating that drive people away instead of inviting comfort.",
      "Basic loyalty programs: Boring paper stamp cards that don't excite repeat customer action.",
      "Weak visual triggers: Social media posts look like standard stock photos rather than capturing local warmth.",
    ],
    memoryTriggers: [
      { title: "Sensory Atmosphere", description: "The tailored sound, lighting, and smell that define the cafe's signature mood." },
      { title: "Barista Greeting", description: "A genuine conversation or customized beverage recommendation that feels personal." },
      { title: "Corner Vibe", description: "A specific aesthetic corner, artwork, or table setup that invites photo sharing." },
      { title: "Sensory Packaging", description: " Latte art details or unique custom sleeve messages that carry brand warmth." },
    ],
    bishorgoSystem: {
      center: "Cafe Experience System",
      nodes: [
        "Brand Identity Vibe",
        "Sensory Menu Cues",
        "Latte & Pack Design",
        "Social Rituals",
        "Loyalty Systems",
        "Barista Behavior Guides",
        "Aesthetic Corner Cues",
      ],
    },
    relevantServices: [
      { title: "Brand Identity", href: "/services/brand-identity", description: "Create a visual system, custom packaging, and signage that defines your cafe." },
      { title: "Content Strategy", href: "/services/content-strategy", description: "Tell stories about your coffee beans, roasts, and the local community inside." },
      { title: "Customer Journey Design", href: "/services/customer-journey-design", description: "Optimize everything from queue flow to loyalty systems." },
    ],
    reimaginedExample: {
      title: "Reimagining a neighborhood cafe for local retention.",
      currentSituation: "A cafe has great coffee but struggles with low afternoon seating and weak brand recall in a competitive area.",
      missedMemory: "Customers treat it as a quick takeaway spot and do not post about or return to enjoy the actual space.",
      bishorgoIdea: "We designed a signature 'Afternoon Brew Ritual', created custom local artwork corners, and introduced story cards under every cup explaining the roast origin.",
      expectedOutcome: "Afternoon table occupancy rose by 40% and social shares containing the signature branded mugs grew by 80%.",
    },
    faqs: [
      { question: "How do we make our cafe stand out from big chains?", answer: "Focus on local character. Bishorgo designs specific sensory touchpoints, custom brand stories, and barista rituals that chains cannot replicate." },
      { question: "Do cafes need active websites?", answer: "Yes, to manage pre-orders, sell signature bean bags, book roasting workshops, and present a premium brand hub away from social noise." },
      { question: "How can we design a better loyalty loop?", answer: "Move past standard stamp cards. We design experience-led loyalty systems that reward customers with unique local events or menu previews." },
      { question: "Can we start with an Experience Audit?", answer: "Yes. We will visit, analyze your ordering flow, examine seating comfort, audit social presence, and identify where you lose returns." },
      { question: "What is sensory packaging?", answer: "It is designing takeaway cups, sleeves, bags, and receipt notes so that even an off-site drink carries your brand's premium warmth." },
    ],
    metadata: {
      title: "Cafe Brand Experience Design — Bishorgo",
      description: "Build a cafe space that people associate with warmth and connection. Discover Bishorgo's experience systems for cafes.",
    },
  },

  // ─────────────────────────────────────────────
  // 3. CLOTHING STORES
  // ─────────────────────────────────────────────
  {
    slug: "clothing-stores",
    label: "Clothing Stores",
    title: "Clothing store experiences that make labels memorable.",
    subtitle: "Dressing is personal. The buying journey should feel just as curated.",
    description: "Bishorgo connects visual identity, in-store sensory cues, trial room touchpoints, packaging, and digital style journeys into one brand experience.",
    icon: "Shirt",
    customerJourney: [
      { stage: "Discovery", description: "Seeing a curated collection reel on Facebook, an influencer post, or passing by the store window." },
      { stage: "First Impression", description: "Stepping onto the clean floor, sensing the store scent, lighting, and layout curation." },
      { stage: "Product Touch", description: "Feeling fabrics, checking tags, and experiencing how designs are hung and presented." },
      { stage: "Trial Room", description: "Trying on clothes under optimized mirror lighting with positive brand messages.", isMemoryMoment: true },
      { stage: "Purchase Flow", description: "Checking out at a sleek counter, interacting with staff, and receiving structured packaging." },
      { stage: "Unboxing", description: "Opening the premium bag at home, checking custom tags, tissue seals, and receipt notes." },
      { stage: "Return Visit", description: "Coming back for the next season or collection release because the style felt trusted." },
    ],
    experienceGaps: [
      "Products look good, brand feels forgettable: Customers buy clothes but don't remember the store's label.",
      "Trial rooms are ignored: Bad lighting, clutter, or plain walls that kill the excitement of trying on outfits.",
      "Standard packaging: Using cheap, generic plastic bags that reduce the perceived value of premium apparel.",
      "No customer follow-up: Letting a purchaser leave without a clear reason, styling tip, or incentive to return.",
    ],
    memoryTriggers: [
      { title: "Trial Room Magic", description: "Optimized lighting, premium mirrors, and positive brand quotes that make trying clothes a peak moment." },
      { title: "Tactile Unboxing", description: "Structured bags, textured custom tags, and scented wrapping paper that elevate the purchase." },
      { title: "Styling Conversations", description: "Helpful, non-pushy assistants who give genuine fit advice instead of rushing the sale." },
      { title: "Seasonal Curation", description: "Digital and physical story catalogs that help customers visualize full style combinations." },
    ],
    bishorgoSystem: {
      center: "Apparel Experience System",
      nodes: [
        "Visual Brand Identity",
        "Trial Room Optimisation",
        "Sensory In-Store Cues",
        "Premium Packaging",
        "Social Styling Content",
        "Post-Purchase Style Tips",
        "VIP Collection Previews",
      ],
    },
    relevantServices: [
      { title: "Brand Identity", href: "/services/brand-identity", description: "Develop premium clothing labels, tags, bags, and storefront visual systems." },
      { title: "Content Strategy", href: "/services/content-strategy", description: "Create styling lookbooks and seasonal stories that guide customer choices." },
      { title: "Social Media Strategy", href: "/services/social-media-strategy", description: "Build aesthetic feeds that showcase fit, fabric, and design details." },
      { title: "Campaign Strategy", href: "/services/campaign-strategy", description: "Launch seasonal lines and coordinate influencer styling campaigns." },
      { title: "Landing Page Design", href: "/services/landing-page-design", description: "Design high-converting collection showcase pages." },
      { title: "Customer Journey Design", href: "/services/customer-journey-design", description: "Design the checkout flow, return policies, and VIP loyalty loops." },
      { title: "Experience Marketing", href: "/services/experience-marketing", description: "Elevate the physical unboxing and in-store interactive elements." },
    ],
    reimaginedExample: {
      title: "Reimagining an apparel boutique for premium memory.",
      currentSituation: "A local clothing brand has premium designs but struggles with low name recall and high cart abandonment online.",
      missedMemory: "The trial rooms have harsh fluorescent light, and purchases are handed out in standard plastic bags.",
      bishorgoIdea: "We designed warm trial room spotlighting, placed custom motivational mirrors, and wrapped all items in signature tissue paper sealed with a gold brand stamp.",
      expectedOutcome: "Customer return visits increased by 28% and online mentions of the unboxing experience grew by over 90%.",
    },
    faqs: [
      { question: "How do we make customers remember our clothing label?", answer: "By elevating the tactile and physical moments. Premium clothing tags, sensory in-store scents, warm trial room lighting, and custom unboxing bags make the brand feel high-end." },
      { question: "Why are trial rooms so important in customer journeys?", answer: "The trial room is where the buying decision is made. Bad lighting or clutter breaks trust, while premium lighting and positive reinforcement encourage purchases." },
      { question: "Does our store need a custom website if we sell on Facebook?", answer: "Yes. A custom website removes distraction, provides a structured catalog layout, and builds a premium digital storefront that represents your true brand quality." },
      { question: "What is post-purchase follow-up for clothing stores?", answer: "Sending tailored care instructions, styling ideas for the purchased item, or early access to the next seasonal collection." },
      { question: "Should we start with an Experience Audit?", answer: "Yes. We will evaluate your digital catalog, visit your physical store, check the trial room and checkout flow, and highlight where you lose sales." },
    ],
    metadata: {
      title: "Clothing Store Brand Experience Design — Bishorgo",
      description: "Clothing is personal. Discover how Bishorgo designs sensory, premium retail journeys for apparel brands that build long-term value.",
    },
  },

  // ─────────────────────────────────────────────
  // 4. RETAIL
  // ─────────────────────────────────────────────
  {
    slug: "retail",
    label: "Retail",
    title: "Retail environments that turn foot traffic into relationships.",
    subtitle: "Shelves display products. Experiences build trust and return visits.",
    description: "Bishorgo helps physical retail stores design layouts, navigation systems, staff interactions, and checkout experiences that stand out from online noise.",
    icon: "ShoppingBag",
    customerJourney: [
      { stage: "Discovery", description: "Seeing localized Google Maps ads, neighborhood signage, or seasonal promo flyers." },
      { stage: "Entry Vibe", description: "Stepping inside to check room temperature, floor clarity, and cart availability." },
      { stage: "Navigation", description: "Browsing aisles, reading category signs, and easily finding product sections." },
      { stage: "Staff Interaction", description: "Getting polite, knowledgeable assistance when looking for specific items.", isMemoryMoment: true },
      { stage: "Checkout Speed", description: "A fast checkout process with low queues and friendly cashiers." },
      { stage: "Unbagging", description: "Unpacking items at home and reading helpful receipts or warranty detail notes." },
      { stage: "Return Loop", description: "Returning to the store because the visit felt fast, comfortable, and reliable." },
    ],
    experienceGaps: [
      "Confusing layout navigation: Customers wander aimlessly because category signs are unclear.",
      "Unfriendly or absent staff: Staff who either ignore customers or push sales too aggressively.",
      "Slow, stressful checkout lines: Long queues at checkout that leave a bad final memory.",
      "Random promotions: Irrelevant discount pamphlets that end up in the trash.",
    ],
    memoryTriggers: [
      { title: "Navigational Ease", description: "Clear, beautiful typography and visual cues that make shopping effortless." },
      { title: "Problem-Solving Staff", description: "Helpful guides who resolve issues instead of just pointing to aisles." },
      { title: "Checkout Comfort", description: "A swift, pleasant cashier interaction with premium, clean checkout lanes." },
      { title: "Localized Curation", description: "Showcasing local customer favorites or seasonal bundles in key zones." },
    ],
    bishorgoSystem: {
      center: "Retail Experience System",
      nodes: [
        "Store Visual Systems",
        "Signage & Wayfinding",
        "Staff Interaction Playbooks",
        "Checkout Speed Tuning",
        "Loyalty Program Design",
        "Local Event Activations",
        "Omnichannel Journeys",
      ],
    },
    relevantServices: [
      { title: "Brand Identity", href: "/services/brand-identity", description: "Design retail signage, wayfinding markers, shopping bags, and brand systems." },
      { title: "Customer Journey Design", href: "/services/customer-journey-design", description: "Optimize store layouts, staff scripts, and checkout flows to remove friction." },
      { title: "Experience Marketing", href: "/services/experience-marketing", description: "Design in-store pop-ups, tasting booths, or interactive seasonal displays." },
    ],
    reimaginedExample: {
      title: "Reimagining a department store checkout and layout.",
      currentSituation: "A local grocery/retail outlet experiences high weekend traffic but loses customer satisfaction due to long cashier lines.",
      missedMemory: "The final memory is frustration, washing away the good product variety they found.",
      bishorgoIdea: "We introduced clear overhead signage, retrained checkout staff on a friendly signature greeting, and added a quick 'fast lane' with a self-checkout flow.",
      expectedOutcome: "Checkout time decreased by 25% and customer satisfaction scores on reviews grew by 45%.",
    },
    faqs: [
      { question: "How can retail stores compete with online ecommerce?", answer: "By leveraging physical advantages: sensory inspection, face-to-face service, instant gratification, and designed in-store experiences." },
      { question: "What is retail wayfinding?", answer: "The system of signs, symbols, and layouts that help visitors navigate your store easily without feeling lost." },
      { question: "How can we improve retail checkout experiences?", answer: "Ensure adequate cashier staffing, implement clear queuing lines, and train staff to end the transaction with a memorable goodbye." },
      { question: "Does retail need digital branding?", answer: "Yes. Customers check Google Reviews, location maps, and social profiles before choosing to drive to a retail store." },
      { question: "Should we start with an Experience Audit?", answer: "Yes. We will walk your retail floor as secret shoppers, map friction points, and provide actionable fixes for layout and service." },
    ],
    metadata: {
      title: "Retail Brand Experience Design — Bishorgo",
      description: "Products sit on shelves. Relationships are built through experiences. Find out how Bishorgo designs premium retail journeys.",
    },
  },

  // ─────────────────────────────────────────────
  // 5. ECOMMERCE
  // ─────────────────────────────────────────────
  {
    slug: "ecommerce",
    label: "Ecommerce",
    title: "Ecommerce journeys that build loyalty beyond the cart.",
    subtitle: "Clicks buy the product. The unboxing experience brings them back.",
    description: "Bishorgo designs online shopping structures, checkout paths, post-purchase communication, and delivery unboxing systems that turn buyers into advocates.",
    icon: "ShoppingCart",
    customerJourney: [
      { stage: "Discovery", description: "Clicking a social media ad, searching online, or reading a product review." },
      { stage: "First Scroll", description: "Landing on a mobile-fast page and checking clear product details and pricing." },
      { stage: "Add to Cart", description: "Adding items to cart with clear confirmation and no hidden charge popups." },
      { stage: "Checkout", description: "Completing payment through a fast checkout path with multiple local gateways." },
      { stage: "Delivery Wait", description: "Receiving timely, friendly SMS updates about their package location." },
      { stage: "Unboxing Moment", description: "Opening a beautifully sealed package containing a custom handwritten welcome note.", isMemoryMoment: true },
      { stage: "Repeat Order", description: "Re-entering the store to buy again because the shipping, quality, and care felt trusted." },
    ],
    experienceGaps: [
      "High checkout abandonment: Confusing forms or unexpected delivery fees at the final stage.",
      "Generic brown box shipping: Sending premium items in plain, damaged cartons with zero branding.",
      "Lack of status updates: Leaving the customer in the dark for days wondering if their order was sent.",
      "No post-purchase connection: Forgetting the customer exists once their transaction clears.",
    ],
    memoryTriggers: [
      { title: "One-Click Checkout", description: "A frictionless online path that requires minimal details and respects user time." },
      { title: "Premium Unboxing Box", description: "Scented packaging paper, customized cardboard boxes, and a handwritten note." },
      { title: "Proactive Delivery SMS", description: "Real-time updates that turn waiting anxiety into brand excitement." },
      { title: "Personalized Offers", description: "Custom recommendations based on previous purchases rather than random spam." },
    ],
    bishorgoSystem: {
      center: "Ecommerce Experience System",
      nodes: [
        "conversion UI/UX",
        "Mobile-Fast Cart Design",
        "Unboxing Package Styling",
        "SMS Status Copywriting",
        "Customer Lifetime Loops",
        "Post-Purchase Support",
        "Email Retention Series",
      ],
    },
    relevantServices: [
      { title: "Brand Identity", href: "/services/brand-identity", description: "Design cohesive visual assets for social media, boxes, stickers, and tags." },
      { title: "Website Experience", href: "/services/website-experience", description: "Build custom, high-speed Next.js stores that convert at double the rate of standard Shopify themes." },
      { title: "Landing Page Design", href: "/services/landing-page-design", description: "Design conversion-focused pages for high-ticket products." },
      { title: "Customer Journey Design", href: "/services/customer-journey-design", description: "Analyze conversion drop-offs, optimize cart paths, and build retention programs." },
      { title: "Experience Marketing", href: "/services/experience-marketing", description: "Design premium unboxings and visual collateral that go inside the parcel." },
    ],
    reimaginedExample: {
      title: "Reimagining an online cosmetics store's package unboxing.",
      currentSituation: "An online cosmetics store gets high traffic but struggles to stand out from other page shops.",
      missedMemory: "Items arrive in generic bubble wrap inside a plain polybag, offering zero brand presence.",
      bishorgoIdea: "We designed a custom pink/emerald box, wrapped items in tissue paper sealed with a gold logo sticker, and added a small 'thank you' card containing skincare tips.",
      expectedOutcome: "Customer mentions on Instagram stories grew by 150% and repeat purchase rate rose by 22% in two months.",
    },
    faqs: [
      { question: "Why is the unboxing experience so critical for ecommerce?", answer: "In online retail, the unboxing is your only physical touchpoint with the customer. Making it premium builds brand value and encourages free social shares." },
      { question: "How does a custom Next.js site compare to standard platforms?", answer: "Next.js stores load in under a second, perform better on mobile Google searches, and provide custom experiences that increase order values." },
      { question: "How can we reduce cart abandonment?", answer: "By removing forced registrations, keeping checkout to a single page, displaying local payment logos, and showing all costs upfront." },
      { question: "Can you help write SMS/email notification copy?", answer: "Yes. We design the communication path so that even transactional notices carry your brand's unique tone." },
      { question: "Should we start with an Experience Audit?", answer: "Yes. We will audit your online shop, run test orders, examine checkout friction, evaluate package styling, and identify drop-offs." },
    ],
    metadata: {
      title: "Ecommerce Brand Experience Design — Bishorgo",
      description: "Clicks get the purchase. Unboxings build retention. Find out how Bishorgo designs premium digital store paths and packaging.",
    },
  },

  // ─────────────────────────────────────────────
  // 6. EDUCATION
  // ─────────────────────────────────────────────
  {
    slug: "education",
    label: "Education",
    title: "Educational institutions built on trust and clarity.",
    subtitle: "Enrollment is a major decision. The enrollment journey should reflect your care.",
    description: "Bishorgo helps academic brands, training centers, and schools design clear informational structures, counselor interactions, and welcoming student paths.",
    icon: "GraduationCap",
    customerJourney: [
      { stage: "Discovery", description: "Researching options on Google, hearing a family recommendation, or seeing an alumni story." },
      { stage: "Trust Check", description: "Visiting the institution website to check faculty credentials, campus photos, and programs." },
      { stage: "Inquiry", description: "Submitting a digital form or calling the admissions line to request prospectus details." },
      { stage: "Counseling", description: "Stepping onto campus to speak with counselors who listen and explain details.", isMemoryMoment: true },
      { stage: "Enrollment", description: "Filling out application papers, paying fees, and getting student portal details." },
      { stage: "Learning", description: "First day orientation, attending initial classes, and checking camp resources." },
      { stage: "Referral", description: "Alumni or active students recommending the institution to friends and siblings." },
    ],
    experienceGaps: [
      "Outdated, confusing website: Hard-to-find program details, broken contact forms, or poor mobile rendering.",
      "Transactional counseling: Treating prospective students and parents like a sale instead of guiding their future.",
      "Cluttered, cold admissions: Confusing paperwork steps and long queues with no welcoming support.",
      "Forgotten alumni: Dropping contact with graduates instead of building a strong career network.",
    ],
    memoryTriggers: [
      { title: "Empathetic Counseling", description: "Counselors who evaluate candidate interests instead of pushing high-fee courses." },
      { title: "Visual Digital Directory", description: "A modern, clear website that showcases camp life, program costs, and outcomes." },
      { title: "Welcoming Orientation Kit", description: "Receiving student ID badges, program planners, and branded gear in a premium bag." },
      { title: "Alumni Spotlight Stories", description: "Celebrating graduate success, building real credibility for future applications." },
    ],
    bishorgoSystem: {
      center: "Education Experience System",
      nodes: [
        "Academic Brand Curation",
        "Clear Program Directory",
        "Empathy Counseling Guides",
        "Campus Wayfinding",
        "Admission Kit Design",
        "Alumni Network Systems",
        "Community Webinars",
      ],
    },
    relevantServices: [
      { title: "Brand Strategy", href: "/services/brand-strategy", description: "Define your institution's core value, educational promise, and market position." },
      { title: "Content Strategy", href: "/services/content-strategy", description: "Plan student spotlight stories, educational guides, and prospectus text." },
      { title: "Website Experience", href: "/services/website-experience", description: "Build modern, fast, mobile-ready websites with program directories." },
      { title: "Customer Journey Design", href: "/services/customer-journey-design", description: "Map out the admissions path, student onboarding steps, and counselor playbooks." },
    ],
    reimaginedExample: {
      title: "Reimagining an academy's inquiry and student onboarding.",
      currentSituation: "A modern training center gets website traffic but struggles to convert digital leads into enrollments.",
      missedMemory: "Potential students receive generic PDF prospectus sheets and automated emails that feel cold.",
      bishorgoIdea: "We built a customized course recommendation quiz, redesigned the counselor talking path to focus on careers, and created a welcoming orientation package.",
      expectedOutcome: "Lead-to-enrollment rate grew by 35% in three months and student satisfaction scores improved by 50%.",
    },
    faqs: [
      { question: "How does branding apply to schools and educational institutions?", answer: "Branding isn't just about ads. It is the trust, academic reputation, clear program information, and student experiences that prospective parents research." },
      { question: "Why is counseling a core memory touchpoint?", answer: "It is the student's first conversation about their future. If it feels pushy or cold, they will seek other academies." },
      { question: "Does an institute need a custom website?", answer: "Absolutely. A custom website serves as a reliable portal for program syllabi, faculty directories, enrollment links, and student updates." },
      { question: "What is an enrollment kit?", answer: "A set of welcome letters, course paths, and branded items that makes students feel proud and excited from day one." },
      { question: "Should we start with an Experience Audit?", answer: "Yes. We will review your online portals, check counseling responses, analyze paperwork friction, and identify where you lose candidates." },
    ],
    metadata: {
      title: "Education Brand Experience Design — Bishorgo",
      description: "Enrollment is a major life decision. Discover how Bishorgo designs clear, trust-building journeys for academic institutions.",
    },
  },

  // ─────────────────────────────────────────────
  // 7. HEALTHCARE
  // ─────────────────────────────────────────────
  {
    slug: "healthcare",
    label: "Healthcare",
    title: "Healthcare journeys designed with empathy and care.",
    subtitle: "Patients seek help. The patient journey should provide comfort and clarity.",
    description: "Bishorgo maps patient experiences, counselor interactions, clinic layouts, digital appointment systems, and follow-ups to make care feel seamless.",
    icon: "HeartPulse",
    customerJourney: [
      { stage: "Discovery", description: "Searching for doctor specialties on Google, checking reviews, or getting a referral." },
      { stage: "Booking Path", description: "Checking doctor schedules and booking slots on a fast, mobile-optimized site." },
      { stage: "Arrival & Entry", description: "Walking in, checking parking clarity, and being welcomed by receptionist staff." },
      { stage: "Waiting Room", description: "Waiting in a calm room with clear display queues, peaceful music, and water access." },
      { stage: "Consultation", description: "Speaking with the doctor, receiving a clear explanation of health details.", isMemoryMoment: true },
      { stage: "Billing & Pharmacy", description: "Receiving bills, picking up medicine, and getting clear dosage schedules." },
      { stage: "Care Follow-up", description: "Receiving check-in calls or recovery tips from the clinic team." },
    ],
    experienceGaps: [
      "Stressing booking routes: Outdated websites, busy phone lines, and lack of clear appointment confirmations.",
      "Chaotic waiting lobbies: Crowded spaces, unclear line queues, and rude reception staff.",
      "Hurried consultation: Doctors rushing patients out without explaining issues or treatment steps.",
      "No post-visit check-ins: Forgetting the patient until they schedule another appointment.",
    ],
    memoryTriggers: [
      { title: "Clear Explanations", description: "Doctors or care teams taking a few minutes to explain prescription steps with care." },
      { title: "One-Click Appointments", description: "A simple online portal that sends SMS confirmations and directions instantly." },
      { title: "Calming Waiting Rooms", description: "A clean, bright space with low noise, comfortable chairs, and helpful queue displays." },
      { title: "Check-in Call", description: "A next-day message or call from the clinic asking how the recovery is progressing." },
    ],
    bishorgoSystem: {
      center: "Healthcare Experience System",
      nodes: [
        "Patient Trust Branding",
        "SMS Appointment Booking",
        "Lobby Wayfinding Cues",
        "Calm Waiting Room Setup",
        "Staff Empathy Training",
        "Clear Dosage Printouts",
        "Post-Care Checkups",
      ],
    },
    relevantServices: [
      { title: "Brand Strategy", href: "/services/brand-strategy", description: "Establish your clinic or hospital's core promise of trusted patient care." },
      { title: "Website Experience", href: "/services/website-experience", description: "Build fast, clear booking systems with doctor schedules and health guides." },
      { title: "Customer Journey Design", href: "/services/customer-journey-design", description: "Map out lobby patient flow, reception workflows, and post-visit support." },
    ],
    reimaginedExample: {
      title: "Reimagining a specialty clinic's appointment and waiting flow.",
      currentSituation: "A pediatric clinic has top doctors but loses patient reviews due to long waiting lines and chaotic scheduling.",
      missedMemory: "Parents remember wait frustration and crying children, avoiding return visits.",
      bishorgoIdea: "We built an automated SMS queue notification system so families can wait nearby, created a children's play corner, and designed clear prescription cards.",
      expectedOutcome: "Average lobby waiting frustration decreased, and positive Google reviews grew by 65% in 90 days.",
    },
    faqs: [
      { question: "Why does patient experience matter in healthcare?", answer: "Patients are under stress. A clear, calm, and empathetic journey reduces anxiety, builds trust, and ensures they follow treatment plans." },
      { question: "How can booking websites reduce front-desk work?", answer: "Online booking lets patients select slots, reducing call volumes, and integrates with patient queue software." },
      { question: "What is lobby wayfinding for hospitals?", answer: "Clear visual markers, color codes, and maps that help sick patients find testing rooms without wandering." },
      { question: "Do healthcare brands need active social media?", answer: "Yes, to share preventive health tips, doctor profiles, and care stories that build trust before a patient visits." },
      { question: "Should we start with an Experience Audit?", answer: "Yes. We will evaluate your booking site, analyze waiting lobbies, shadow receptionist greeting paths, and identify friction." },
    ],
    metadata: {
      title: "Healthcare Patient Experience Design — Bishorgo",
      description: "Patients seek comfort. Discover how Bishorgo designs clear, calm, and empathetic healthcare journeys.",
    },
  },

  // ─────────────────────────────────────────────
  // 8. REAL ESTATE
  // ─────────────────────────────────────────────
  {
    slug: "real-estate",
    label: "Real Estate",
    title: "Real estate experiences that turn views into sales.",
    subtitle: "Buying a home is a major decision. The buying journey must feel premium.",
    description: "Bishorgo designs property presentation paths, site tour rituals, developer websites, and homeowner welcome kits.",
    icon: "Building2",
    customerJourney: [
      { stage: "Discovery", description: "Seeing high-res property ads on Facebook, reading blog lists, or getting a referral." },
      { stage: "Project Check", description: "Visiting the developer website to check layout plans, amenities, and location details." },
      { stage: "Site Tour Request", description: "Booking an on-site visit and receiving a calendar invite with directions." },
      { stage: "Site Experience", description: "Stepping into the mock layout room, sensing the premium layout details.", isMemoryMoment: true },
      { stage: "Counseling", description: "Reviewing payment plans, customization options, and documents with consultants." },
      { stage: "Booking & Paper", description: "Paying deposit fees, completing contracts, and receiving project status updates." },
      { stage: "Handover Kit", description: "Receiving home keys in a custom box with home owner manuals and documents." },
    ],
    experienceGaps: [
      "Plain project pages: Low-quality image renders and lack of clear layout files on websites.",
      "Unprepared site visits: Showing raw, dusty construction spots without a welcoming preview zone.",
      "Cold post-purchase path: Ignoring buyers for months during project construction with zero updates.",
      "Banal handover: Throwing apartment keys into a plastic bag with paper sheets at final signing.",
    ],
    memoryTriggers: [
      { title: "Immersive Tour Vibe", description: "A beautifully scented site office with large-screen interactive mock plans." },
      { title: "Transparent Brochures", description: "Clean, story-driven project books with real material details, not just buzzwords." },
      { title: "Construction Updates", description: "Monthly digital newsletters with photos showing site construction progress." },
      { title: "Handover Celebration", description: "Handing over keys in a customized wooden chest containing home guides and gifts." },
    ],
    bishorgoSystem: {
      center: "Real Estate System",
      nodes: [
        "Property Brand Identity",
        "Project Mini-Sites",
        "Interactive Tour Offices",
        "Premium Brochures",
        "Buyer Status Portals",
        "Key Handover Kits",
        "Community Welcomes",
      ],
    },
    relevantServices: [
      { title: "Brand Identity", href: "/services/brand-identity", description: "Create high-end visual systems, project logos, brochures, and storefronts." },
      { title: "Website Experience", href: "/services/website-experience", description: "Build property showcase sites with interactive floor plans and neighborhood maps." },
      { title: "Campaign Strategy", href: "/services/campaign-strategy", description: "Plan premium launch campaigns and VIP site tours." },
      { title: "Customer Journey Design", href: "/services/customer-journey-design", description: "Optimize site tours, buyer support paths, and the key handover celebration." },
    ],
    reimaginedExample: {
      title: "Reimagining a developer's property tour and handover.",
      currentSituation: "A real estate builder has quality apartments but struggles to close deals with high-income buyers.",
      missedMemory: "Site visits feel like entering an active building site with noise, and signing feels like a bank chore.",
      bishorgoIdea: "We built a quiet site preview room, trained teams on a hospitality-level site walkthrough, and designed a custom wooden handover kit.",
      expectedOutcome: "Site tour-to-booking conversions rose by 30% and buyers posted photos of their handover boxes.",
    },
    faqs: [
      { question: "How does experience design apply to real estate?", answer: "Buying a home is highly emotional. The site office welcome, brochure detail, construction transparency, and handover moment determine your brand's reputation." },
      { question: "Why do property pages need custom websites?", answer: "Standard portals mix your projects with rivals. A custom site lets you control the narrative, display rich 3D floor guides, and book premium visits." },
      { question: "What should go in a key handover kit?", answer: "Apartment keys, warranties, utility guide sheets, and custom housewarming gifts in a premium branded chest." },
      { question: "How can we build buyer trust during construction?", answer: "By providing monthly progress updates, photos, and a client portal showing build status." },
      { question: "Should we start with an Experience Audit?", answer: "Yes. We will audit your presentation office, tour flows, brochures, and digital channels to highlight gaps." },
    ],
    metadata: {
      title: "Real Estate Brand Experience Design — Bishorgo",
      description: "Homes are emotional decisions. Discover how Bishorgo designs high-end site tours, property brochures, and homeowner handovers.",
    },
  },

  // ─────────────────────────────────────────────
  // 9. LOCAL BUSINESSES
  // ─────────────────────────────────────────────
  {
    slug: "local-businesses",
    label: "Local Businesses",
    title: "Local business brand designs that build neighborhood trust.",
    subtitle: "Serving locally means knowing every neighbor's name.",
    description: "Bishorgo helps local service brands, bakeries, salons, and offices design clear booking routes, signage, and loyalty steps.",
    icon: "Store",
    customerJourney: [
      { stage: "Discovery", description: "Seeing store signage, checking local Google maps, or asking neighbors." },
      { stage: "First Call/Visit", description: "Calling the business to check services or stepping inside to look around." },
      { stage: "Service Setup", description: "Discussing needs, checking transparent pricing, and booking appointments." },
      { stage: "The Service", description: "Receiving the service with professional, friendly care in a tidy environment.", isMemoryMoment: true },
      { stage: "Checkout & Stamp", description: "Paying at the counter, receiving a thank you note, and getting a loyalty stamp." },
      { stage: "Follow-up SMS", description: "Getting a thank you text or checking customized tips for their service." },
      { stage: "Return Visit", description: "Returning whenever they need the service because the community feel is trusted." },
    ],
    experienceGaps: [
      "No Google Maps presence: Neighbors can't find phone numbers, open hours, or reviews online.",
      "Messy storefront signage: Outdated banners or confusing layouts that look unprofessional.",
      "Hidden pricing structures: Making customers ask for costs, creating immediate trust hesitation.",
      "Lack of simple booking tools: Forcing customers to call back repeatedly instead of scheduling online.",
    ],
    memoryTriggers: [
      { title: "Friendly Local Welcomes", description: "Staff remembering customer names and previous order choices." },
      { title: "Spotless Local Storefronts", description: "Bright signage and clean physical entrance layouts." },
      { title: "Transparent Pricing", description: "Clear pricing boards or booklets that build immediate buyer confidence." },
      { title: "Local loyalty stamping", description: "A simple, fun card that makes them feel part of the community." },
    ],
    bishorgoSystem: {
      center: "Local Brand System",
      nodes: [
        "Storefront Signage",
        "Google Maps Profiles",
        "Transparent Menus",
        "Simple Booking Tools",
        "Staff Greeting Rules",
        "Local Stamp Cards",
        "SMS Reminders",
      ],
    },
    relevantServices: [
      { title: "Brand Identity", href: "/services/brand-identity", description: "Create clean logos, shop signs, staff shirts, menus, and bags." },
      { title: "Website Experience", href: "/services/website-experience", description: "Build simple, fast local pages with directions, hours, and bookings." },
      { title: "Customer Journey Design", href: "/services/customer-journey-design", description: "Refine booking paths, greeting scripts, and neighborhood loyalty campaigns." },
    ],
    reimaginedExample: {
      title: "Reimagining a neighborhood hair salon's booking and receipt.",
      currentSituation: "A local beauty salon has quality stylists but loses repeat visits because booking slots feels disorganized.",
      missedMemory: "Appointments clash, and customers wait on uncomfortable lobby benches with zero updates.",
      bishorgoIdea: "We implemented an online calendar booking tool, set up a complimentary beverage menu, and created custom receipt hair care tip sheets.",
      expectedOutcome: "Repeat visits rose by 32% and booking confusion disappeared.",
    },
    faqs: [
      { question: "Why do local businesses need brand identity?", answer: "A clean logo and professional storefront make you look trusted and premium, letting you charge more than generic competitors." },
      { question: "How does Google Maps impact local shops?", answer: "It is how neighbors find you. Complete maps, open hours, and positive reviews drive direct foot traffic." },
      { question: "Can we use online booking systems for services?", answer: "Yes. It lets clients pick slots 24/7, reducing phone work and appointment clashes." },
      { question: "How can we design low-cost loyalty steps?", answer: "Simple stamp cards, local community discount weeks, or personalized text check-ins on birthdays." },
      { question: "Should we start with an Experience Audit?", answer: "Yes. We will analyze your map presence, visit your shop, test booking paths, and provide a quick fix guide." },
    ],
    metadata: {
      title: "Local Business Brand Experience Design — Bishorgo",
      description: "Build a trusted local brand. Discover Bishorgo's storefront, booking, and loyalty systems for neighborhood businesses.",
    },
  },

  // ─────────────────────────────────────────────
  // 10. STARTUPS
  // ─────────────────────────────────────────────
  {
    slug: "startups",
    label: "Startups",
    title: "Startup experiences built to scale and command value.",
    subtitle: "New ideas need fast validation. The user journey determines your launch success.",
    description: "Bishorgo helps startups design MVP interfaces, conversion-led landing pages, onboarding cycles, and product visual identities.",
    icon: "Rocket",
    customerJourney: [
      { stage: "Discovery", description: "Seeing a product demo post, reading a tech blog article, or checking Product Hunt." },
      { stage: "Landing Check", description: "Landing on the website, reading the value proposition, and checking interactive features." },
      { stage: "Sign Up Flow", description: "Completing a fast signup process with instant verification emails." },
      { stage: "First Onboarding", description: "Stepping inside the dashboard and following clear, friendly setup guides.", isMemoryMoment: true },
      { stage: "Core Value", description: "Achieving their first success using the tool, validating their sign-up choice." },
      { stage: "Billing Choice", description: "Upgrading to premium tiers with clear feature charts and billing gates." },
      { stage: "Referral Program", description: "Sharing referral links with colleagues because the product solved their problem." },
    ],
    experienceGaps: [
      "Confusing value proposition: Vague homepage taglines that leave visitors wondering what the tool does.",
      "Complex onboarding paths: Long guides or forms that drive users away before they check the product.",
      "Slow web app loading: Heavy assets that delay load times on mobile, reducing immediate trust.",
      "Transactional billing: Hidden costs or complex cancellations that break customer trust.",
    ],
    memoryTriggers: [
      { title: "One-Sentence Clarity", description: "A homepage headline that explains the core tool value in 5 seconds." },
      { title: "Zero-Friction Onboarding", description: "Letting users explore features before asking for complex setups." },
      { title: "Interactive Product Demos", description: "Embedded mock tools that show product features without registration." },
      { title: "Polite Customer Support", description: "Fast, helpful chat support that resolves issues with care." },
    ],
    bishorgoSystem: {
      center: "Startup System",
      nodes: [
        "Brand Identity Assets",
        "Interactive Landers",
        "Zero-Friction Onboarding",
        "Value Feature Diagrams",
        "Billing Path Curation",
        "Referral Campaigns",
        "SMS Status Copy",
      ],
    },
    relevantServices: [
      { title: "Brand Strategy", href: "/services/brand-strategy", description: "Define your startup's core promise, market segment, and tone." },
      { title: "Brand Identity", href: "/services/brand-identity", description: "Create scalable logo systems, color kits, and modern product styles." },
      { title: "Website Experience", href: "/services/website-experience", description: "Build high-speed, Next.js landing pages with product demos." },
      { title: "Landing Page Design", href: "/services/landing-page-design", description: "Design conversion-focused paths for specific marketing offers." },
      { title: "Customer Journey Design", href: "/services/customer-journey-design", description: "Map out signup paths, dashboard onboarding, and email retention campaigns." },
    ],
    reimaginedExample: {
      title: "Reimagining a software startup's landing page onboarding.",
      currentSituation: "A SaaS tool has quality backend tools but struggles to convert site visitors into trial signups.",
      missedMemory: "Visitors read complex feature lists, get confused, and leave without starting a trial.",
      bishorgoIdea: "We rewrote the copy to focus on outcomes, added an interactive product walkthrough, and made signup take 20 seconds.",
      expectedOutcome: "Visitor-to-signup conversion grew by 45% and dashboard drop-offs decreased by 30%.",
    },
    faqs: [
      { question: "How does branding help new startups?", answer: "It makes you look established and trusted from day one, letting you compete with larger rivals." },
      { question: "Why is onboarding critical for software tools?", answer: "If users get confused during their first five minutes, they will close the app and never return." },
      { question: "Do we need landing pages or full websites?", answer: "Start with a high-converting landing page to validate your idea, then expand into a complete site structure." },
      { question: "How can we write clear value statements?", answer: "Focus on the exact pain your tool solves and the outcome your customer gets, avoiding complex jargon." },
      { question: "Should we start with an Experience Audit?", answer: "Yes. We will evaluate your landing page speed, signup steps, value statement, and onboarding flow." },
    ],
    metadata: {
      title: "Startup Brand Experience Design — Bishorgo",
      description: "Scale your ideas with trust. Discover how Bishorgo designs high-converting landing pages, product identities, and onboarding flows.",
    },
  },

  // ─────────────────────────────────────────────
  // 11. EVENTS & ENTERTAINMENT
  // ─────────────────────────────────────────────
  {
    slug: "events-entertainment",
    label: "Events & Entertainment",
    title: "Event brand experiences that create lifelong memories.",
    subtitle: "Events last a weekend. Memories of those events last a lifetime.",
    description: "Bishorgo designs online ticketing paths, digital schedules, stage wayfinding, entrance visuals, and post-event memory packages.",
    icon: "CalendarDays",
    customerJourney: [
      { stage: "Discovery", description: "Seeing artist lineup posts on Instagram, checking event ads, or sharing posts." },
      { stage: "Ticketing Check", description: "Visiting the ticketing site, checking prices, seating tiers, and buying passes." },
      { stage: "Pre-Event Wait", description: "Receiving entry guides, parking routes, and artist schedules via SMS." },
      { stage: "Gate Entry", description: "Walking in through clear, fast lines, checking ticket scanners, and getting wristbands.", isMemoryMoment: true },
      { stage: "Zone Exploration", description: "Finding food stalls, restrooms, stage locations, and interactive photo spots." },
      { stage: "The Show", description: "Enjoying the main performances, stage light displays, and visual elements." },
      { stage: "Post-Event Note", description: "Receiving link paths to view official event photos, videos, and early ticket offers." },
    ],
    experienceGaps: [
      "Stressing ticket paths: Slow checkout sites, broken payments, and unclear ticket delivery details.",
      "Chaotic gate entries: Long, unmanaged lines, rude security check paths, and gate confusion.",
      "Poor venue wayfinding: Confusing layout directions, long food queues, and hard-to-find restrooms.",
      "Cold post-event follow-up: Letting guests leave without sharing photos or gathering feedback.",
    ],
    memoryTriggers: [
      { title: "One-Scan Tickets", description: "A simple digital ticket that scans in seconds, reducing gate waiting times." },
      { title: "Clean Venue Signs", description: "Large, beautiful direction boards that guide guests without confusion." },
      { title: "Creative Photo Spots", description: "Curated aesthetic zones that make guests proud to take and share photos." },
      { title: "Official Photo Portals", description: "Fast digital links to view event snapshots next morning, keeping memories alive." },
    ],
    bishorgoSystem: {
      center: "Event Experience System",
      nodes: [
        "Event Brand Identity",
        "Ticketing UI Pages",
        "SMS Visitor Guides",
        "Gate Check Curation",
        "Venue Wayfinding Signs",
        "Interactive Photo Zones",
        "Post-Event Memory Packs",
      ],
    },
    relevantServices: [
      { title: "Brand Identity", href: "/services/brand-identity", description: "Design event posters, artist lineup grids, stage banners, wristbands, and tickets." },
      { title: "Website Experience", href: "/services/website-experience", description: "Build fast event pages with lineups, schedules, FAQs, and ticket paths." },
      { title: "Campaign Strategy", href: "/services/campaign-strategy", description: "Plan ticket launch phases, artist teasers, and sponsor integrations." },
      { title: "Customer Journey Design", href: "/services/customer-journey-design", description: "Optimize ticketing paths, gate entry procedures, and venue layout flow." },
      { title: "Experience Marketing", href: "/services/experience-marketing", description: "Design sensory photo zones, branded VIP lounges, and event activations." },
    ],
    reimaginedExample: {
      title: "Reimagining an arts festival ticket path and entry gate.",
      currentSituation: "A cultural arts festival has quality performers but receives complaints about gate lines and ticketing site crashes.",
      missedMemory: "Guests arrive frustrated after waiting 40 minutes at the entry gate under the sun.",
      bishorgoIdea: "We built a modern mobile site, set up self-service ticket scanners, and placed welcoming guides at the gates.",
      expectedOutcome: "Gate processing speed increased by 3x and entry queue complaints dropped to zero.",
    },
    faqs: [
      { question: "How does branding apply to single events?", answer: "Branding builds anticipation. A cohesive poster visual, seamless ticket path, and welcoming gate design make guests feel valued before the show." },
      { question: "Why do event pages need custom websites?", answer: "Social pages bury details. A custom site keeps lineups, ticketing, location maps, and rules in one fast page." },
      { question: "What is event wayfinding?", answer: "The banners, floor markers, and signs that direct guests to main stages, food, emergency exits, and restrooms." },
      { question: "How do we keep event memories alive after the show?", answer: "By sending emails or SMS messages with photo portal links and early ticket offers for the next show." },
      { question: "Should we start with an Experience Audit?", answer: "Yes. We will audit your ticketing site, evaluate lobby gate flows, review maps, and provide a pre-event fix list." },
    ],
    metadata: {
      title: "Event & Entertainment Experience Design — Bishorgo",
      description: "Create events people talk about for years. Discover how Bishorgo designs seamless ticketing, wayfinding, and photo activations.",
    },
  },
];

// Helper functions for retrieval
export function getAllIndustrySlugs(): string[] {
  return industryPages.map((page) => page.slug);
}

export function getIndustryPage(slug: string): IndustryPageBlueprint | undefined {
  return industryPages.find((page) => page.slug === slug);
}
