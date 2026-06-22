export type ChecklistBlueprint = {
  slug: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  items: {
    section: string;
    tasks: string[];
  }[];
  localTip: string;
  metadata: {
    title: string;
    description: string;
  };
};

export const checklistsList: ChecklistBlueprint[] = [
  {
    slug: "brand-memory-checklist",
    label: "Brand Memory Checklist",
    title: "Brand Memory & Recall Audit Checklist",
    subtitle: "A practical checklist to verify if your brand presentation leaves a lasting customer memory.",
    description: "Check if your visual system, core promise, tagline, and signature cues are aligned to create active recall in your market segment.",
    items: [
      {
        section: "1. Messaging Clarity",
        tasks: [
          "Can a visitor explain your core differentiator in 5 seconds?",
          "Is your value statement written in simple, jargon-free words?",
          "Do sales, support, and web channels use identical brand slogans?"
        ]
      },
      {
        section: "2. Visual Recall",
        tasks: [
          "Do social posts, websites, and boxes use the exact same logo scale?",
          "Are colors and fonts consistent across 95% of visual assets?",
          "Is your watermark logo placed cleanly on all product images?"
        ]
      },
      {
        section: "3. Signature Cues",
        tasks: [
          "Do you have a unique visual detail or phrase customers recognize?",
          "Does your exit ritual or packaging include a memorable thank you note?"
        ]
      }
    ],
    localTip: "Ensure your brand tagline matches the emotional outcome of your product. For example: don't just sell apparel, sell celebration confidence.",
    metadata: {
      title: "Brand Memory Audit Checklist — Bishorgo Resources",
      description: "Is your brand forgettable? Download our Brand Memory Checklist to verify messaging clarity, visual recall, and signature cues."
    }
  },
  {
    slug: "customer-journey-checklist",
    label: "Customer Journey Checklist",
    title: "Customer Journey Friction Check",
    subtitle: "Locate and remove the friction breaking trust between discovery, checkout, and packaging receipt.",
    description: "Check your digital and operational touchpoints to make sure you aren't losing leads due to hidden friction.",
    items: [
      {
        section: "1. Digital Booking / Checkout",
        tasks: [
          "Does registration checkout require fewer than 4 form fields?",
          "Are payment gateway options clearly displayed on mobile layouts?",
          "Is there a fast order confirmation popup and follow-up SMS?"
        ]
      },
      {
        section: "2. Order Fulfillment",
        tasks: [
          "Do buyers receive package delivery status updates?",
          "Is the delivery rider trained to represent your brand tone politely?"
        ]
      },
      {
        section: "3. Unboxing Experience",
        tasks: [
          "Does parcel packaging structure protect items from dirt and damage?",
          "Is there a handwritten welcome letter or custom stamp wrap?"
        ]
      }
    ],
    localTip: "A customer judges the purchase journey based on the Peak and the End. Make sure your checkout is fast and your packaging unboxing is premium.",
    metadata: {
      title: "Customer Journey & Friction Checklist — Bishorgo",
      description: "Remove operational drop-offs. Audit your digital checkout forms, delivery SMS status, and unboxing parcel details."
    }
  },
  {
    slug: "website-experience-checklist",
    label: "Website Experience Checklist",
    title: "Website Experience & UX Conversion Checklist",
    subtitle: "Ensure your online storefront loads instantly on mobile networks and guides visitors to convert.",
    description: "Audit your mobile loading speed, layout shifts, typography contrast, form friction, and technical SEO structure.",
    items: [
      {
        section: "1. Speed & Performance",
        tasks: [
          "Does the page load in under 1.5 seconds on local mobile networks?",
          "Are all large-scale banner assets compressed below 150KB?",
          "Is Cumulative Layout Shift (CLS) zero on mobile load?"
        ]
      },
      {
        section: "2. Navigation & Trust",
        tasks: [
          "Is the contact link or book button visible on the main screen?",
          "Do you display customer review widgets or brand credentials?"
        ]
      },
      {
        section: "3. SEO & Structured Data",
        tasks: [
          "Does every page contain exactly one H1 heading?",
          "Are canonical alternate links defined on all page templates?",
          "Is the JSON-LD FAQ schema injected on service pages?"
        ]
      }
    ],
    localTip: "Every extra second of mobile page load time reduces conversion rates by 20%. Keep script tags clean and compress image assets first.",
    metadata: {
      title: "Website Experience & UX Checklist — Bishorgo",
      description: "Optimize your portal for speed and sales. Audit mobile loading times, checkout friction, and SEO sitemap variables."
    }
  },
  {
    slug: "social-media-consistency-checklist",
    label: "Social Media Consistency Checklist",
    title: "Social Media Content & Style Consistency Checklist",
    subtitle: "Stop posting random updates. Establish cohesive content pillars and templates that build authority.",
    description: "Verify if your post visual formats, tone of voice, response timings, and boosting metrics align with your strategy.",
    items: [
      {
        section: "1. Content Structure",
        tasks: [
          "Do you alternate between sales catalog, brand story, and community prompts?",
          "Are captions written in a consistent, strategic brand voice?",
          "Do posts focus on product utility and fitting, rather than raw price charts?"
        ]
      },
      {
        section: "2. Visual Guidelines",
        tasks: [
          "Do all image posts use colors matching your brand kit?",
          "Are typography fonts consistent on 95% of social covers?"
        ]
      },
      {
        section: "3. Dialogue Response",
        tasks: [
          "Are responses to comments sent in under 15 minutes?",
          "Are automated bot answers friendly, directing users to direct actions?"
        ]
      }
    ],
    localTip: "Engagement grows when you write captions that offer value or invite dialogue. Avoid generic captions that only list product names.",
    metadata: {
      title: "Social Media Content Consistency Checklist — Bishorgo",
      description: "Build a premium social presence. Verify content pillars, visual templates consistency, and comment response timing guides."
    }
  },
  {
    slug: "brand-launch-checklist",
    label: "Brand Launch Checklist",
    title: "Startup & New Brand Launch Blueprint Checklist",
    subtitle: "Establish trust, secure early traction, and ensure messaging clarity from day one.",
    description: "A complete launch checklist covering brand strategy positioning, visual systems, website preparation, and launch campaigns.",
    items: [
      {
        section: "1. Strategy & Messaging",
        tasks: [
          "Is the brand positioning differentiator defined clearly?",
          "Is the tone of voice guide documented for copywriters?"
        ]
      },
      {
        section: "2. Visual Identity Systems",
        tasks: [
          "Are primary logos and variations finalized for print/screens?",
          "Do packaging assets, boxes, tags, and labels match visual systems?"
        ]
      },
      {
        section: "3. Digital Launch Portals",
        tasks: [
          "Is a clean, fast launch landing page ready with booking forms?",
          "Are social media grids customized with launch editorial layouts?"
        ]
      }
    ],
    localTip: "You only get one chance to make a first impression. launch with messaging clarity before investing in paid boosting campaigns.",
    metadata: {
      title: "Startup & Brand Launch Checklist — Bishorgo",
      description: "Ensure a successful brand launch. Audit your differentiator strategy, visual files, landing portals, and campaign setups."
    }
  },
  {
    slug: "event-activation-checklist",
    label: "Event Activation Checklist",
    title: "Event Experience & Activation Planning Checklist",
    subtitle: "Optimize entry gates, venue wayfinding, and photo activations to make your event memorable.",
    description: "Ensure guest comfort, ticketing checkout speed, aesthetic wayfinding signage, and post-event memory follow-up are aligned.",
    items: [
      {
        section: "1. Pre-Event Ticketing",
        tasks: [
          "Does the booking page process payments in under 3 clicks?",
          "Do guests receive SMS notifications with entry rules and parking routes?"
        ]
      },
      {
        section: "2. Venue Wayfinding & Curation",
        tasks: [
          "Are entry gate line lanes managed with welcoming guides?",
          "Are large category signboards visible across stages and food stalls?",
          "Are dedicated photo zones styled with warm, bright lighting?"
        ]
      },
      {
        section: "3. Post-Event Loops",
        tasks: [
          "Is a photo portal link sent to guests within 24 hours of exit?",
          "Do you capture guest feedback to improve future campaigns?"
        ]
      }
    ],
    localTip: "Check-in queues break expectations. Keep gate processing swift by utilizing barcodes and pre-scanned tickets.",
    metadata: {
      title: "Event Activation & Wayfinding Checklist — Bishorgo",
      description: "Plan return-worthy events. Audit ticketing checkouts, gate processing speeds, photo zones, and post-event portals."
    }
  },
  {
    slug: "local-business-experience-guide",
    label: "Local Business Guide",
    title: "Local Business Brand & Experience Growth Guide",
    subtitle: "Build storefront trust, neighborhood Google Maps visibility, and repeat customer stamp loops.",
    description: "A practical guide detailing maps profiles configuration, visual storefront wayfinding, service playbooks, and loyalty cards.",
    items: [
      {
        section: "1. Local Search Visibility",
        tasks: [
          "Is your Google Maps profile complete with phone, hours, and photos?",
          "Do you respond to 100% of neighborhood reviews politely?"
        ]
      },
      {
        section: "2. Storefront Navigation",
        tasks: [
          "Are storefront signs bright and readable from the street?",
          "Are menus or service prices displayed clearly inside the lobby?"
        ]
      },
      {
        section: "3. Service Rituals",
        tasks: [
          "Do baristas/stylists follow a signature welcoming script?",
          "Are repeat visitors greeted by name and offered early bookings?"
        ]
      }
    ],
    localTip: "Transparent pricing builds immediate customer confidence. Avoid making neighbors ask for service costs.",
    metadata: {
      title: "Local Business Experience & Growth Guide — Bishorgo",
      description: "Increase foot traffic and local sales. Audit storefront signs, Google Maps reviews, staff scripts, and stamp cards."
    }
  }
];

export function getAllChecklistSlugs(): string[] {
  return checklistsList.map((c) => c.slug);
}

export function getChecklistPage(slug: string): ChecklistBlueprint | undefined {
  return checklistsList.find((c) => c.slug === slug);
}
