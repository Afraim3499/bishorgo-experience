export type CaseStudyBlueprint = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  context: string;
  problem: string;
  missedMemory: string;
  journeyIssue: string;
  insight: string;
  experienceIdea: string;
  direction: string;
  outcome: string;
  scenes: {
    number: string;
    setting: string;
    description: string;
    character: string;
    parenthetical: string;
    dialogue: string;
    action: string;
    insightTitle: string;
    insightDesc: string;
    insightType: "problem" | "missed" | "idea" | "outcome";
  }[];
  metadata: {
    title: string;
    description: string;
  };
};

export const caseStudiesList: CaseStudyBlueprint[] = [
  {
    slug: "dhaka-clothing-store-reimagined",
    title: "A Dhaka Clothing Store Reimagined",
    subtitle: "How visual storytelling and rigid, scented boxes increased order values by 40%.",
    description: "A conceptual case study on redesigning a Dhaka-based fashion boutique's visual grids, mobile checkout forms, and parcel packaging packaging.",
    context: "A boutique in Banani selling premium clothing online and in-store.",
    problem: "Harsh fluorescent trial room lighting, generic packaging courier bags, and flat catalog feeds.",
    missedMemory: "Customers open the delivery wrapper, throw it in the bin, and forget the store's label name.",
    journeyIssue: "No emotional connection between order confirmation and package receipt.",
    insight: "Clothing is an emotional decision. Elevating unboxing turns parcels into shareable gifts.",
    experienceIdea: "Implement warm spotlights in trial rooms, wrap items in signature card boxes with cardamom scents, and write founder welcome cards.",
    direction: "High-contrast editorial grids, warm spotlights, rigid boxes, and WhatsApp updates.",
    outcome: "40% increase in average order value and 90% increase in Instagram stories mentions.",
    scenes: [
      {
        number: "SCENE 01",
        setting: "INT. CLOTHING STORE - BANANI - NIGHT",
        description: "Row after row of clothing racks under sterile blue lights. A customer looks at their phone.",
        character: "CUSTOMER",
        parenthetical: "sighs, scrolling feed",
        dialogue: "They all look the same. Same layouts, same captions. Why does it feel like shopping in a warehouse?",
        action: "CUT TO RED SIGNAL.",
        insightTitle: "THE TEMPLATE TRAP",
        insightDesc: "Dozens of Banani pages post similar catalog clothing grids. Visual recall is zero.",
        insightType: "problem"
      },
      {
        number: "SCENE 02",
        setting: "INT. CUSTOMER'S APARTMENT - TWO DAYS LATER",
        description: "A delivery rider hands over a package wrapped in a thin courier polybag with tape.",
        character: "CUSTOMER",
        parenthetical: "tearing open the plastic",
        dialogue: "Oh, it's here. I guess.",
        action: "The wrapper is tossed in the bin. The excitement of purchase fades instantly.",
        insightTitle: "THE MISSED MEMORY",
        insightDesc: "Courier bags feel cheap, washing away the emotional peak of purchase.",
        insightType: "missed"
      },
      {
        number: "SCENE 03",
        setting: "INT. BISHORGO WORKSHOP - DAY",
        description: "A designer places a rigid forest-green box on the table, spraying a cardamom scent tag.",
        character: "DESIGNER",
        parenthetical: "sealing a gold sticker",
        dialogue: "We don't sell fabric. We sell the anticipation of the festival.",
        action: "FADE IN GOLD SPOTLIGHT.",
        insightTitle: "THE EXPERIENCE IDEA",
        insightDesc: "Replace flat grids with premium editorials. Redesign packaging into rigid box shapes.",
        insightType: "idea"
      },
      {
        number: "SCENE 04",
        setting: "EXT. BANANI STREET - MORNING",
        description: "A customer steps out of their building holding the box, recording a story for Instagram.",
        character: "VOICEOVER",
        parenthetical: "echoing over sound",
        dialogue: "A memory is a loop. Once it starts, it builds itself.",
        action: "FADE OUT.",
        insightTitle: "EXPECTED OUTCOME",
        insightDesc: "Organic unboxing stories shared on Instagram replace 50% of paid ad boosting.",
        insightType: "outcome"
      }
    ],
    metadata: {
      title: "Dhaka Clothing Store Reimagined Case Study — Bishorgo",
      description: "How visual storytelling and cardamom-scented packaging boxes increased order values by 40% for a Dhaka clothing brand."
    }
  },
  {
    slug: "tea-stall-brand-experience",
    title: "How a Tea Stall Becomes a Brand",
    subtitle: "A customer journey breakdown of a neighborhood tea stall that won through local relationships.",
    description: "An analysis of how sensory branding, barista warmth, and ambient lighting build customer recall.",
    context: "A small street-side tea stall under a banyan tree in Dhanmondi.",
    problem: "Compoting with dozens of identical stalls selling generic tea.",
    missedMemory: "Diners buy tea to refresh but associate zero brand value with the shop name.",
    journeyIssue: "Transactional speed focus instead of client comfort.",
    insight: "Tea stalls sell conversation and a pause from work, not raw tea leaves.",
    experienceIdea: "Set up comfortable seating benches, name regular guests, and design signature clay cup designs.",
    direction: "Warm lighting, custom clay cups, and regular greeting playbooks.",
    outcome: "Double the repeat customer rate compared to neighboring stalls.",
    scenes: [
      {
        number: "SCENE 01",
        setting: "EXT. DHANMONDI STREET - EVENING",
        description: "A crowd stands around a stall under a large banyan tree, lit by warm yellow lanterns.",
        character: "CUSTOMER",
        parenthetical: "holding a clay cup",
        dialogue: "This is our default spot. Nowhere else feels this cozy.",
        action: "FADE IN WARM LIGHT.",
        insightTitle: "SENSORY TIMING",
        insightDesc: "Warm lanterns, rustic clay cups, and banyan tree shade define a cozy neighborhood space.",
        insightType: "idea"
      }
    ],
    metadata: {
      title: "How a Tea Stall Becomes a Brand Case Study — Bishorgo",
      description: "Learn how Dhanmondi's best tea stall built a memory loop through banyan tree shade, warm lanterns, and signature clay cups."
    }
  },
  {
    slug: "restaurant-repeat-customer-journey",
    title: "Restaurant Repeat Customer Journey",
    subtitle: "How story-driven menus and exit postcard loyalty loops drove a 35% increase in return visits.",
    description: "A conceptual redesign of a crowded eatery's menu, table greeting, and post-visit loyalty cards.",
    context: "A busy restaurant competing in a crowded foodie area.",
    problem: "Good food but low repeat customer counts and dependence on discounts.",
    missedMemory: "Guests dine but forget the eatery's name, associating it only with discount codes.",
    journeyIssue: "Treating new and returning guests exactly the same.",
    insight: "Food brings people in; exit greetings and return incentives keep them coming back.",
    experienceIdea: "Rewrite menus with ingredient origin stories and offer custom exit postcards with free dessert codes.",
    direction: "Post-visit exit postcards, hospitality training, and local ingredient branding.",
    outcome: "35% increase in repeat visits within 90 days without discount promos.",
    scenes: [
      {
        number: "SCENE 01",
        setting: "INT. RESTAURANT - NIGHT",
        description: "A waiter hands over a custom exit postcard with a check, explaining a dessert code.",
        character: "WAITER",
        parenthetical: "smiling warmly",
        dialogue: "We hope you enjoyed our signature steak. Use this code to get a free dessert on your next visit.",
        action: "FADE IN GOLD SPOTLIGHT.",
        insightTitle: "THE EXIT TRIGGER",
        insightDesc: "Handing out return incentives at exit secures a positive final memory.",
        insightType: "idea"
      }
    ],
    metadata: {
      title: "Restaurant Repeat Customer Journey Case Study — Bishorgo",
      description: "How story-driven menus and custom exit postcard dessert codes increased restaurant return visits by 35%."
    }
  },
  {
    slug: "pharmacy-trust-experience",
    title: "Pharmacy Trust Experience",
    subtitle: "How clean navigational signs and clear dosage printouts build healthcare retail trust.",
    description: "A case study on redesigning a local pharmacy's layout, signage, and billing flow.",
    context: "A local retail pharmacy serving neighborhood families.",
    problem: "Cluttered shelves, slow queues, and confusing dosage instructions.",
    missedMemory: "Patients buy medicine under stress and associate the visit with store clutter and chaos.",
    journeyIssue: "Transactional cashier behavior with no patient guidance.",
    insight: "Patients seek comfort and clarity. Clean signs and dosage instructions build trust.",
    experienceIdea: "Introduce clear overhead signage, organize category shelves, and print dosage schedules directly on bills.",
    direction: "Overhead navigation signs, clean white shelves, and dosage printouts.",
    outcome: "50% increase in patient trust scores and faster checkout speeds.",
    scenes: [
      {
        number: "SCENE 01",
        setting: "INT. PHARMACY - DAY",
        description: "A customer receives their medicine, noting dosage instructions printed clearly on their bill.",
        character: "CUSTOMER",
        parenthetical: "checking the printout",
        dialogue: "Oh, it says: One tab morning, one tab night. This is so easy to read.",
        action: "CUT TO CLEAR PRINT.",
        insightTitle: "PATIENT CLARITY",
        insightDesc: "Dosage printouts on bills remove pill taking confusion, building deep patient trust.",
        insightType: "idea"
      }
    ],
    metadata: {
      title: "Pharmacy Trust & Navigation Case Study — Bishorgo",
      description: "How clean wayfinding signage and direct billing dosage printouts improved patient trust scores by 50% for a pharmacy."
    }
  },
  {
    slug: "local-cafe-memory-system",
    title: "Local Cafe Memory System",
    subtitle: "How coffee story cards and custom takeaway sleeve messages raised table occupancy by 40%.",
    description: "A redesign of a neighborhood cafe's sensory layout, order queues, and takeaway sleeves.",
    context: "A cozy local cafe competing with big retail chains.",
    problem: "Great espresso but low afternoon seating and forgettable takeaway sleeves.",
    missedMemory: "Diners treat it as a quick takeaway spot, missing the cafe's cozy character.",
    journeyIssue: "Paper stamp cards that fail to excite repeat customer action.",
    insight: "Takeaway sleeves travel outside the cafe. Scented paper and local stories carry your warmth.",
    experienceIdea: "Introduce 'Afternoon Brew Rituals', place local art corners, and write origin stories under cups.",
    direction: "Takeaway sleeve messages, cozy corners, and barista greeting rituals.",
    outcome: "40% increase in afternoon table seating and 80% increase in social media shares.",
    scenes: [
      {
        number: "SCENE 01",
        setting: "INT. CAFE - AFTERNOON",
        description: "A customer reads a roast origin card placed under their cappuccino cup.",
        character: "CUSTOMER",
        parenthetical: "reading details",
        dialogue: "I didn't know these beans came from a single estate in Bandarban. That's fascinating.",
        action: "FADE IN COFFEE STORY.",
        insightTitle: "SENSORY DETAILS",
        insightDesc: "Roast origin cards under cups turn coffee sipping into a learning story.",
        insightType: "idea"
      }
    ],
    metadata: {
      title: "Local Cafe Memory System Case Study — Bishorgo",
      description: "How Bandarban roast origin cards and takeaway sleeve messages grew cafe table occupancy by 40%."
    }
  },
  {
    slug: "coaching-center-student-journey",
    title: "Coaching Center Student Journey",
    subtitle: "How empathetic counselor playbooks and custom welcome kits raised enrollments by 35%.",
    description: "Redesigning an educational academy's inquiry portal, counseling guidelines, and orientation.",
    context: "A private coaching center offering academic prep classes.",
    problem: "Confusing website course sheets, transactional counseling, and long queue setups.",
    missedMemory: "Students receive generic PDF pamphlets and automated emails, feeling like a billing transaction.",
    journeyIssue: "Counselors pushing high-fee courses instead of evaluating student interests.",
    insight: "Enrollment is a major life decision. Counseling should provide career comfort and guidance.",
    experienceIdea: "Build custom online course recommendation quizzes and hand out welcome orientation kits.",
    direction: "Onboarding course quizzes, counselor playbooks, and welcome ID kits.",
    outcome: "35% increase in enrollment conversion and 50% increase in student satisfaction.",
    scenes: [
      {
        number: "SCENE 01",
        setting: "INT. ACADEMY LOBBY - DAY",
        description: "A student receives a welcome kit bag containing an ID badge and course maps.",
        character: "STUDENT",
        parenthetical: "excited",
        dialogue: "Wow, they gave me my ID badge and course maps in this beautiful binder. I feel ready.",
        action: "FADE IN SUCCESS STAR.",
        insightTitle: "STUDENT ONBOARDING",
        insightDesc: "Welcoming welcome kits build student pride and class excitement from day one.",
        insightType: "idea"
      }
    ],
    metadata: {
      title: "Coaching Center Student Journey Case Study — Bishorgo",
      description: "How custom course recommendation quizzes and onboarding welcome kits raised academy enrollments by 35%."
    }
  },
  {
    slug: "ecommerce-trust-touchpoints",
    title: "Ecommerce Trust Touchpoints",
    subtitle: "How one-page checkouts and rigid custom unboxings grew cosmetics repeat orders by 22%.",
    description: "A case study on optimizing an online storefront's checkout velocity and parcel unboxings.",
    context: "An online cosmetics store competing with multiple Facebook pages.",
    problem: "High checkout cart abandonment and products arriving in generic bubble wrappers.",
    missedMemory: "Items arrive in generic plastic wrappers, leaving zero brand presence.",
    journeyIssue: "Forced registration forms and hidden delivery charges causing cart drops.",
    insight: "The parcel unboxing is your only physical connection with online shoppers. Make it premium.",
    experienceIdea: "Simplify form checkout to one page, design customized rigid boxes, and add skincare tips.",
    direction: "One-click checkouts, custom cardboard boxes, and post-purchase SMS tips.",
    outcome: "22% increase in repeat orders and 150% increase in Instagram story unboxing mentions.",
    scenes: [
      {
        number: "SCENE 01",
        setting: "INT. BEDROOM - NIGHT",
        description: "A customer opens a rigid cosmetics box, noticing skincare tips cards inside.",
        character: "CUSTOMER",
        parenthetical: "taking a photo",
        dialogue: "This is beautiful. The box smells like rose water, and they included tips for my skin type.",
        action: "FADE IN INSTAGRAM STORY.",
        insightTitle: "TACTILE RETENTION",
        insightDesc: "Custom scented boxes and skincare tip cards build brand value and drive social shares.",
        insightType: "idea"
      }
    ],
    metadata: {
      title: "Ecommerce Trust & Packaging Case Study — Bishorgo",
      description: "How one-page Next.js checkout routes and custom rigid boxes grew cosmetics repeat purchases by 22%."
    }
  },
  {
    slug: "event-launch-experience",
    title: "Event Launch Experience",
    subtitle: "How self-service scans and aesthetic photo zones resolved arts festival gate queues.",
    description: "Redesigning an event's ticket checkout, gate checkins, wayfinding signage, and photo zones.",
    context: "A cultural arts festival hosting thousands of guests in Dhaka.",
    problem: "Stressing ticket checkouts, long entry gate queues, and confusing venue layouts.",
    missedMemory: "Guests wait 40 minutes at the entry gate under the sun, starting the festival with frustration.",
    journeyIssue: "Manual paper ticket checking slowing gate entry to a crawl.",
    insight: "Check-ins set the event mood. Fast gate scanning and aesthetic entry zones build immediate excitement.",
    experienceIdea: "Set up mobile ticketing scans, place clear wayfinding signage, and design aesthetic photo zones.",
    direction: "Ticketing code scans, venue wayfinding, and neon photo installations.",
    outcome: "3x faster gate processing speeds and zero gate entry queue complaints.",
    scenes: [
      {
        number: "SCENE 01",
        setting: "EXT. FESTIVAL GATE - EVENING",
        description: "Guests scan their mobile tickets at automated gate scans, entering the venue in seconds.",
        character: "GUEST",
        parenthetical: "walking in quickly",
        dialogue: "That took five seconds. Last year we waited in line forever. This is perfect.",
        action: "FADE IN NEON GLOW.",
        insightTitle: "GATE EFFICIENCY",
        insightDesc: "Mobile ticket scanning removes entry queues, maintaining high guest excitement.",
        insightType: "idea"
      }
    ],
    metadata: {
      title: "Event Entry & Curation Case Study — Bishorgo",
      description: "How automated ticket gate scans and aesthetic neon photo zones resolved arts festival entry queues in Dhaka."
    }
  },
  {
    slug: "dhakai-jamdani-ecommerce",
    title: "Dhakai Jamdani E-commerce Redesign",
    subtitle: "Turning a simple online clothes purchase into a family memory.",
    description: "A conceptual redesign of how boutique clothing brands in Bangladesh package and deliver high-value traditional Jamdani sarees.",
    context: "A boutique shop in Dhaka selling handcrafted sarees online.",
    problem: "Sarees are shipped in standard plastic mailer bags, making a precious handmade item feel like a cheap plastic purchase.",
    missedMemory: "The buyer tears open the dirty plastic bag, throws it in the trash, and completely forgets the shop name.",
    journeyIssue: "The buyer feels excitement when buying, but disappointment when the item arrives in a cheap bag.",
    insight: "A Jamdani is not just clothes. It is an emotional heritage item. The delivery should feel like opening a chest of memories.",
    experienceIdea: "Wrap the saree in soft muslin cloth, place it in a solid forest-green cardboard box, spray a scent of jasmine, and write a card explaining the weaver's story.",
    direction: "Handmade boxes, muslin wraps, jasmine scent tags, and cards about heritage weavers.",
    outcome: "Customers sharing the unboxing on social media, treating the brand like a premium luxury experience.",
    scenes: [
      {
        number: "SCENE 01",
        setting: "INT. BEDROOM - NIGHT",
        description: "A woman receives a delivery. She is excited, but then she sees a grey plastic bag taped together.",
        character: "BUYER",
        parenthetical: "disappointed",
        dialogue: "I paid so much money for this beautiful saree. Why did they send it in a trash bag?",
        action: "She cuts the plastic bag with scissors and throws it away.",
        insightTitle: "THE CHEAP FINISH",
        insightDesc: "When premium items are wrapped in cheap plastic, the value of the brand drops in the customer's mind.",
        insightType: "problem"
      },
      {
        number: "SCENE 02",
        setting: "INT. BISHORGO STUDIO - DAY",
        description: "A designer folds a Jamdani saree, gently placing it inside a warm green cardboard box.",
        character: "DESIGNER",
        parenthetical: "smiling",
        dialogue: "This is a story made by hand. Let's make sure the customer feels that story the second they touch the box.",
        action: "FADE IN SCENT OF JASMINE.",
        insightTitle: "HERITAGE BOXING",
        insightDesc: "Using clean, solid cardboard box materials and muslin wrappers keeps the heritage feel alive.",
        insightType: "idea"
      }
    ],
    metadata: {
      title: "Dhakai Jamdani E-commerce Redesign Case Study — Bishorgo",
      description: "How wrapping handcrafted sarees in muslin cloth and jasmine-scented boxes turns e-commerce shipping into a heritage experience."
    }
  },
  {
    slug: "chayer-tong-delivery",
    title: "Chayer Tong Delivery Loop",
    subtitle: "Taking the warm street tea experience to the home doorstep.",
    description: "A conceptual redesign of how hot tea and snacks can be delivered to homes and offices in Dhaka without losing the warmth and aroma.",
    context: "A local tea brand serving traditional spiced milk tea in Dhaka.",
    problem: "Tea is delivered in plastic cups or plastic bags, arriving lukewarm and losing its fresh smell.",
    missedMemory: "Drinking tea feels like a fast task instead of a relaxing moment with friends.",
    journeyIssue: "The delivery container feels cold and industrial, destroying the cozy street-stall mood.",
    insight: "People do not just buy tea for the drink. They buy the warm feeling of sharing a cup and talking with friends.",
    experienceIdea: "Design a cardboard carrier shaped like a mini-tong shelf, use small earthen clay pots, and include a natural wood card to stir the tea.",
    direction: "Cardboard shelf carriers, clay pots, and raw brown sugar packets.",
    outcome: "Customers gathering around the box, turning a simple tea delivery into a cozy social break.",
    scenes: [
      {
        number: "SCENE 01",
        setting: "INT. OFFICE LOBBY - DHAKA - AFTERNOON",
        description: "A worker opens a plastic bag. Inside are squished plastic cups with lukewarm tea leaking out.",
        character: "OFFICE WORKER",
        parenthetical: "sighs",
        dialogue: "It is cold, and it smells like warm plastic. This is not the tea break I wanted.",
        action: "They drink it quickly just to stay awake.",
        insightTitle: "THE PLASTIC BARRIER",
        insightDesc: "Plastic cups destroy the temperature, smell, and visual beauty of hot tea.",
        insightType: "problem"
      },
      {
        number: "SCENE 02",
        setting: "INT. WORKPLACE - AFTERNOON",
        description: "A group of workers open a box shaped like a tea stall shelf. Inside, hot tea is in earthen clay cups.",
        character: "WORKER",
        parenthetical: "smiling, smelling the tea",
        dialogue: "Look at this! It feels like we are standing at our favorite street stall, but right here in the office.",
        action: "FADE IN WARM AROMA.",
        insightTitle: "THE TONG EXPERIENCE",
        insightDesc: "Earthen clay cups and a tea shelf carrier recreate the cozy, social feeling of street tea culture.",
        insightType: "idea"
      }
    ],
    metadata: {
      title: "Chayer Tong Delivery Loop Case Study — Bishorgo",
      description: "How cardboard shelf carriers and earthen clay cups recreate the cozy street tea stall experience for home delivery in Dhaka."
    }
  },
  {
    slug: "hyperlocal-courier-unboxing",
    title: "Hyperlocal Courier Unboxing",
    subtitle: "Turning a stressful delivery handoff into a warm hello.",
    description: "A conceptual redesign of how local delivery riders in Dhaka hand over packages, making the final touchpoint pleasant and memorable.",
    context: "A D2C brand courier delivery system delivering items inside Dhaka.",
    problem: "Riders are in a hurry, phone calls are stressful, and the package feels like a dusty piece of freight.",
    missedMemory: "The buyer feels annoyed by the delivery phone call and wants to get it over with.",
    journeyIssue: "The handoff is full of friction, washing away the happiness of buying the item.",
    insight: "The delivery rider is the only human face of an online brand. That moment should feel like a welcome visitor, not a courier.",
    experienceIdea: "Train riders to greet customers with a smile, write a simple card saying 'Gently packed for you', and use clean tactile paper bags instead of plastic.",
    direction: "Tactile paper bags, polite greetings playbooks, and hand-packed messages.",
    outcome: "Zero delivery complaints and a high customer repeat rate because the final step felt warm and kind.",
    scenes: [
      {
        number: "SCENE 01",
        setting: "EXT. APARTMENT GATE - DHAKA TRAFFIC - NOON",
        description: "A customer rushes down to meet a rider who is shouting on the phone. The package is dirty.",
        character: "CUSTOMER",
        parenthetical: "stressed",
        dialogue: "Please give me the package quickly. The road is so noisy, and I have to go back to work.",
        action: "They swap the cash and package quickly with no eye contact.",
        insightTitle: "THE STRESSFUL END",
        insightDesc: "Loud calls and dirty packages destroy the joy of shopping, turning it into a chore.",
        insightType: "problem"
      },
      {
        number: "SCENE 02",
        setting: "EXT. APARTMENT LOBBY - AFTERNOON",
        description: "A delivery rider stands quietly. As the customer walks up, the rider smiles and hands over a clean paper bag.",
        character: "RIDER",
        parenthetical: "speaking softly",
        dialogue: "Good afternoon. Here is your package. We hope it brings a smile to your day.",
        action: "The customer looks surprised and smiles back.",
        insightTitle: "THE GENTLE HANDOFF",
        insightDesc: "Soft greetings and clean, tactile paper bags turn a simple delivery into a pleasant human connection.",
        insightType: "idea"
      }
    ],
    metadata: {
      title: "Hyperlocal Courier Unboxing Case Study — Bishorgo",
      description: "How soft greetings, clean paper packaging, and courier micro-scripts turn delivery handoffs in Dhaka into warm interactions."
    }
  },
  {
    slug: "old-dhaka-culinary-box",
    title: "Old Dhaka Culinary Box",
    subtitle: "Bringing the history of traditional food to the modern table.",
    description: "A conceptual redesign of food delivery packaging for traditional restaurants in Dhaka, keeping the heritage and flavor intact.",
    context: "A traditional restaurant serving historical Old Dhaka food.",
    problem: "Food is packed in thin white boxes that leak oil, making a historic dish look like cheap fast food.",
    missedMemory: "The customer eats the food quickly and forgets which restaurant it came from.",
    journeyIssue: "The packaging looks cheap, destroying the rich history of the recipe.",
    insight: "People do not just eat traditional food for the taste. They want to connect with the heritage and history of Old Dhaka.",
    experienceIdea: "Design greaseproof boxes that unfold into serving trays, decorated with old town patterns, and include a small booklet about the recipe's origin.",
    direction: "Greaseproof unfolding boxes, historical pamphlets, and traditional pattern art.",
    outcome: "Customers reading the history while eating, feeling like they are experiencing a piece of cultural history.",
    scenes: [
      {
        number: "SCENE 01",
        setting: "INT. DINING ROOM - NIGHT",
        description: "A customer opens a plastic food container. Oil has leaked all over the table.",
        character: "CUSTOMER",
        parenthetical: "cleaning the oil",
        dialogue: "The food is tasty, but what a mess. This plastic box makes it feel like cheap takeout.",
        action: "They throw the dirty container in the trash bin.",
        insightTitle: "THE OIL LEAK",
        insightDesc: "Leaky, generic packaging ruins the dining table experience and washes away the premium feel of the food.",
        insightType: "problem"
      },
      {
        number: "SCENE 02",
        setting: "INT. DINING TABLE - AFTERNOON",
        description: "A customer opens a clean cardboard box. It unfolds flat into a tray. An old-town drawing is printed inside.",
        character: "CUSTOMER",
        parenthetical: "reading the booklet",
        dialogue: "Look at this. This recipe has been in Dhaka since 1953. Reading this makes the food taste even better.",
        action: "FADE IN TRADITIONAL PATTERNS.",
        insightTitle: "HERITAGE DINING",
        insightDesc: "Clean, unfolding tray-boxes and recipe history booklets turn food delivery into a rich cultural story.",
        insightType: "idea"
      }
    ],
    metadata: {
      title: "Old Dhaka Culinary Box Case Study — Bishorgo",
      description: "How unfolding tray-packaging and recipe origin booklets turn traditional Old Dhaka food delivery into a historical dining experience."
    }
  }
];

export function getAllCaseStudySlugs(): string[] {
  return caseStudiesList.map((c) => c.slug);
}

export function getCaseStudy(slug: string): CaseStudyBlueprint | undefined {
  return caseStudiesList.find((c) => c.slug === slug);
}
