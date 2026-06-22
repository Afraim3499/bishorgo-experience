export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const generalFAQs: FAQItem[] = [
  {
    question: "What is Bishorgo Experience?",
    answer: "Bishorgo Experience is a brand experience company that builds memorable customer journeys. We go beyond traditional advertising to connect strategy, branding, website development, content, and real-world activation into one memorable experience system.",
    category: "General"
  },
  {
    question: "How is it different from a digital marketing agency?",
    answer: "A digital marketing agency focuses on buying traffic and posting daily content. We focus on customer memory. We design how your brand looks, talks, and behaves at every single touchpoint, ensuring that your marketing spend turns into long-term recall and repeat customers.",
    category: "General"
  },
  {
    question: "What is an Experience Audit?",
    answer: "An Experience Audit is our proprietary evaluation process. We inspect your brand's digital footprint, website performance, checkout flow, social media presence, and real-world interactions. We identify where the experience breaks, where customers lose interest, and where you can become unforgettable.",
    category: "Audit"
  },
  {
    question: "Who works with Bishorgo Experience?",
    answer: "We work with passionate founders, retail brands, restaurants, startups, and service companies in Bangladesh and globally who realize that advertisements are temporary, but a premium customer experience is permanent.",
    category: "General"
  }
];

export const servicesFAQs: FAQItem[] = [
  {
    question: "Do I have to purchase all 10 services?",
    answer: "No. While our services are designed to work together as a touchpoint system, we tailormake solutions based on where your brand's experience is currently breaking. We often start with Brand Strategy & Identity or Website Experience.",
    category: "Services"
  },
  {
    question: "How long does a typical branding project take?",
    answer: "A complete Brand Strategy & Identity project typically takes 4 to 6 weeks. This includes research, positioning, visual identity development, and delivery of brand guidelines.",
    category: "Services"
  },
  {
    question: "Do you build custom websites or use templates?",
    answer: "We build 100% custom websites using Next.js, React, Tailwind CSS, and Framer Motion. We do not use generic WordPress or Shopify templates. Every site is built for high speed, custom animations, and clean layouts.",
    category: "Services"
  }
];

export const methodFAQs: FAQItem[] = [
  {
    question: "How do you track results in the 'Deepen' phase?",
    answer: "We track brand recall, customer retention rates, website conversion metrics, checkout completion rates, and average response times. We use these data points to refine and improve the customer journey over time.",
    category: "Method"
  },
  {
    question: "What is the timeline of the Bishorgo Method?",
    answer: "The duration depends on the scope of work, but a standard cycle from Discover to Deliver takes between 6 to 12 weeks. The Deepen phase is an ongoing partnership to continuous optimization.",
    category: "Method"
  }
];
