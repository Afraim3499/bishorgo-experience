export interface LabArticle {
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

export const labCategories = [
  "All",
  "Experience Breakdown",
  "Brand Psychology",
  "Experience Insights",
  "Bishorgo Reimagines",
  "Toolkits",
  "Founder Notes",
] as const;

export const labArticles: LabArticle[] = [
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
    slug: "why-customers-forget-businesses",
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
    slug: "dhaka-clothing-store-reimagined",
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
  },
  {
    id: "why-experience-makes-brand-harder-to-forget",
    title: "Why Experience Makes a Brand Harder to Forget",
    banglaTitle: "অভিজ্ঞতা কেন ব্র্যান্ডকে চিরস্মরণীয় করে তোলে?",
    category: "Brand Psychology",
    summary: "How cognitive memory structures prioritize multisensory events over plain advertising claims.",
    readTime: "5 min read",
    date: "May 10, 2026",
    slug: "why-experience-makes-brand-harder-to-forget",
    banglaHook: "মানুষ বিজ্ঞাপন ভুলে যায়, কিন্তু ভালো ব্যবহারের স্মৃতি কখনোই ভোলেনা।",
    content: "In a world of constant digital scrolls, traditional advertising banner ads fade into background noise. Our brains filter out flat text claims. However, when a brand designs a physical, sensory, or conversational experience — like a custom unboxing scent or a highly caring chat reply — it registers in our episodic memory. Episodic memory anchors the event alongside details, building permanent brand association."
  },
  {
    id: "customer-touchpoints-explained",
    title: "Customer Touchpoints Explained: The Complete Guide",
    category: "Toolkits",
    summary: "Understanding all physical and digital contact points between local consumers and scaling brands.",
    readTime: "6 min read",
    date: "May 03, 2026",
    slug: "customer-touchpoints-explained",
    content: "A customer touchpoint is any moment of interaction between a buyer and your brand. It includes social ad grids, layout speeds, checkout gateways, packaging tissue seals, and support playbooks. To build a premium brand, you must map and unify every touchpoint. One broken link (like a late reply or damaged parcel wrapper) washes away all previous marketing trust."
  },
  {
    id: "why-social-posts-do-not-create-recall",
    title: "Why Social Posts Do Not Create Recall",
    banglaTitle: "ফেসবুক পোস্ট কেন কাস্টমারকে ধরে রাখতে পারছে না?",
    category: "Experience Insights",
    summary: "Why posting generic product grids daily is failing to build real customer relationships.",
    readTime: "5 min read",
    date: "April 28, 2026",
    slug: "why-social-posts-do-not-create-recall",
    banglaHook: "প্রতিদিন পোস্ট করলেই রিলেশন হয় না, রিলেশন হয় ভালো কন্টেন্ট আর ট্রাস্ট থেকে।",
    content: "Many social media agencies push brands to post daily product lists. This floods consumer feeds with visual clutter, resulting in algorithm fatigue. Clicks drop, and comments focus entirely on 'price?' instead of value. To build recall, replace raw product posting with cohesive value stories, customer unboxing narratives, and genuine community dialogue prompts."
  },
  {
    id: "how-small-businesses-can-build-brand-memory",
    title: "How Small Businesses Can Build Brand Memory",
    category: "Toolkits",
    summary: "Practical, low-cost experience cues neighborhood stores and cafes can implement to double repeat visits.",
    readTime: "7 min read",
    date: "April 21, 2026",
    slug: "how-small-businesses-can-build-brand-memory",
    content: "Small businesses don't need multi-million BDT budgets to build brand recall. You can win loyalty through local customer care: greeting regulars by name, setting up aesthetic corners for photos, printing custom recipes on receipts, and sending friendly SMS thank you notes. Small gestures build deep neighborhood trust."
  },
  {
    id: "brand-recall-in-bangladesh",
    title: "Brand Recall in Bangladesh: Local Consumer Psychology",
    banglaTitle: "বাংলাদেশী কাস্টমারের সাইকোলজি এবং ব্র্যান্ড রিকল",
    category: "Experience Insights",
    summary: "Analyzing local shopping habits, trust barriers, and the power of hospitality in Bangladeshi commerce.",
    readTime: "6 min read",
    date: "April 14, 2026",
    slug: "brand-recall-in-bangladesh",
    banglaHook: "বাঙালি কাস্টমার আতিথেয়তা ভালোবাসে। যেখানে সম্মান বেশি, সেখানেই সে বারবার ফিরে যায়।",
    content: "Bangladeshi consumers are highly relational. Trust is hard to win but extremely rewarding once established. Buyers respond strongly to digital and physical hospitality: polite live support, fast delivery timelines, clean physical layouts, and custom unboxing cards. Design your customer journey to feel like a welcoming home."
  },
  {
    id: "what-is-experience-marketing",
    title: "What Is Experience Marketing?",
    category: "Experience Insights",
    summary: "The definitive guide to experiential activations, custom packaging, and sensory brand connections.",
    readTime: "6 min read",
    date: "April 07, 2026",
    slug: "what-is-experience-marketing",
    content: "Experience marketing shifts the focus from selling product features to designing memorable interactions. By planning physical events, sensory packaging wrappers, and interactive tools, brands invite active audience participation. This turns casual transactional buyers into passionate brand advocates."
  },
  {
    id: "what-is-customer-journey-design",
    title: "What Is Customer Journey Design?",
    category: "Toolkits",
    summary: "How to audit, map, and optimize touchpoints to remove conversion friction and scale revenue.",
    readTime: "7 min read",
    date: "March 30, 2026",
    slug: "what-is-customer-journey-design",
    content: "Customer Journey Design is the operational discipline of mapping every interaction point a customer has with your business. By optimizing registration fields, accelerating mobile loading times, designing rider communications, and refining unboxings, we eliminate trust drops and double repeat sales."
  },
  {
    id: "what-is-brand-experience",
    title: "What Is Brand Experience?",
    category: "Brand Psychology",
    summary: "A foundational guide breaking down visual, written, and sensory parameters in modern commerce.",
    readTime: "5 min read",
    date: "March 23, 2026",
    slug: "what-is-brand-experience",
    content: "Brand Experience represents the sum of all feelings and perceptions a buyer registers during their relationship with you. It is visual logo consistency, layout speeds, chat scripts, delivery care, and product performance. Modern brands compete and win on experience, not products."
  },
  {
    id: "bangladesh-local-business-branding-mistakes",
    title: "Branding Mistakes Local Businesses Make in Bangladesh",
    banglaTitle: "আমাদের দেশের ব্যবসায়ীদের ব্র্যান্ডিং-এর ৫টি বড় ভুল",
    category: "Founder Notes",
    summary: "Common branding and journey errors scaling local businesses commit, and how to fix them.",
    readTime: "6 min read",
    date: "March 15, 2026",
    slug: "bangladesh-local-business-branding-mistakes",
    banglaHook: "ভুল জায়গায় টাকা খরচ না করে, কাস্টমার সার্ভিসের মান আর প্যাকেজিং সুন্দর করুন।",
    content: "scaling local brands often commit five major experience mistakes: 1) Spending on ads before clarifying their core brand message. 2) Using random visual templates, breaking visual recall. 3) Forgetting Google Maps neighborhood presence. 4) Using late automated chat replies. 5) handover items in plain plastic bags. Fix these gaps first to build trusted growth."
  },
  {
    id: "psychology-of-bhai-script",
    title: "The psychology of the 'Bhai' script: Human conversations in commerce",
    category: "Brand Psychology",
    summary: "Why standard automated chat replies feel cold to Bangladeshi shoppers, and how local brands can build genuine, warm communication playbooks.",
    readTime: "5 min read",
    date: "June 22, 2026",
    slug: "psychology-of-bhai-script",
    content: "Imagine this: It is late at night. You are searching for a birthday gift for your mother. You find a page that sells handmade wooden mirrors. You are excited, so you send a message: 'Hi, is this mirror in stock?' Immediately, you get a reply. But it is not a person. It is a machine. It says: 'Welcome! Press 1 for price. Press 2 for delivery. Press 3 to talk to agent.' You feel cold. You close the chat. \n\nIn Bangladesh, digital shopping is not just a math calculation. It is a social conversation. When we buy from a local brand, we use terms like 'Bhai' or 'Apu'. These are not just words. They are tools of respect and connection. Standard chatbots break this connection. They feel like a cold wall between the seller and the buyer. \n\nContrast this with a different experience. You message another page. A real person replies within minutes: 'Assalamu Alaikum Apu. Yes, we have two of these mirrors left. We made them by hand using mahogany wood. Would you like us to write a warm birthday note for your mother?' You feel heard. You feel cared for. You immediately send the payment. \n\nBy designing human chat playbooks, local brands can win customer hearts. It means training support teams to write with warmth, to avoid robotic templates, and to treat every message like a conversation over tea. In a crowded market, the brand that talks like a friend is the brand that people remember."
  },
  {
    id: "facebook-ads-leaking-retention",
    title: "Why Facebook ads are leaking your customer budget",
    category: "Experience Insights",
    summary: "How local companies waste money buying quick attention while ignoring the checkout and packaging experiences that bring customers back.",
    readTime: "6 min read",
    date: "June 20, 2026",
    slug: "facebook-ads-leaking-retention",
    content: "Let us look at a story of a young founder in Dhaka. He designed a beautiful range of leather bags. To get sales, he spent his entire savings boosting posts on Facebook. Every morning, he looked at his ad dashboard. He was happy because thousands of people clicked his ads. \n\nBut at the end of the month, his bank account was empty. Why did this happen? It is because his business was a leaky bucket. \n\nWhen customers clicked his ads, they faced a website that took ten seconds to load on mobile. Many left in frustration. The ones who stayed sent messages on Messenger, only to wait three hours for a reply. And when the lucky few finally bought a bag, it was delivered by a dusty rider who shoved the premium leather bag in a thin, torn plastic wrapper. The premium feeling was completely dead. \n\nThis founder bought attention but sold disappointment. He spent money to show his brand, but the customer only remembered the late reply and the ugly plastic wrapper. Attention is easy to buy with money. But repeat sales are earned through the journey. If you do not design the checkout speed, the chat warmth, and the unboxing beauty, every Taka you spend on Facebook ads is just leaking away."
  },
  {
    id: "bangladeshi-mobile-checkout-gaps",
    title: "The 3 biggest gaps in Bangladeshi mobile checkout design",
    category: "Experience Breakdown",
    summary: "Common checkout mistakes on local websites that frustrate mobile shoppers, and how to fix them for faster sales.",
    readTime: "5 min read",
    date: "June 18, 2026",
    slug: "bangladeshi-mobile-checkout-gaps",
    content: "Picture yourself sitting inside a crowded bus on Mirpur Road. The traffic is not moving. The air is hot, and you are tired. To pass the time, you open your phone. You see a beautiful ceramic mug made by a local designer. You click 'Buy Now' to treat yourself. \n\nThen, the pain begins. \n\nFirst, a large pop-up screen blocks your view. It says you must register an account and create a password with at least one number and special symbol. Your bus jolts forward, and you mistype the password. You have to start again. Second, the website asks you to fill out a long form with ten different boxes: your country, your state, your postal code, and even a second backup phone number. The bus is bumpy, and typing on a small screen is hard. Third, when you finally try to pay, you are redirected to a slow gateway page that crashes before you can enter your bKash number. You sigh, close the browser, and forget about the mug. \n\nThis is the reality of mobile shopping in Bangladesh. Almost everyone shops on their phones, often on slow mobile data while moving through busy streets. Yet, local checkout systems are designed for desktop computers. By making checkout simple—removing forced passwords, asking only for a name, number, and address, and placing a direct one-click bKash button—brands can make buying feel like a breeze. Speed is the ultimate form of customer hospitality."
  },
  {
    id: "bideshi-unboxing-local-materials",
    title: "Designing a premium unboxing experience with local materials",
    category: "Bishorgo Reimagines",
    summary: "How to use local jute, clay, and handmade paper to create world-class packaging that tells a story.",
    readTime: "6 min read",
    date: "June 16, 2026",
    slug: "bideshi-unboxing-local-materials",
    content: "A few months ago, a designer from our workshop took a walk through the narrow streets of Shankhari Bazar and the busy lanes of Karwan Bazar. He was not looking for imported plastic bubble wraps or glossy papers. He was looking for things that feel like Bangladesh. \n\nHe came back with a roll of raw golden jute fabric, small red clay seals, and soft handmade paper created from water hyacinths. \n\nMany local brands think they must use shiny, imported materials to look premium. They want their packaging to look like it came from London or New York. But this is a mistake. Imported packaging feels cold and generic. When a customer receives a package wrapped in raw golden jute, secured with a red clay seal, and accompanied by a card made of textured water-hyacinth paper, their senses wake up. They feel the rough texture of the jute. They smell the natural earthiness of the clay. They read a story of local craftsmanship. \n\nThis is what we call local luxury. It does not try to copy foreign styles. Instead, it takes the simple, beautiful materials of our own country and uses them with care and respect. It shows the customer that the brand cares about details, about the environment, and about our heritage. And best of all, it is a sensory story that they will never forget."
  }
];

export function getAllLabSlugs(): string[] {
  return labArticles.map((a) => a.slug);
}

export function getLabArticle(slug: string): LabArticle | undefined {
  return labArticles.find((a) => a.slug === slug);
}
