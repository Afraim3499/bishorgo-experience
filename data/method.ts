export interface MethodStepDetail {
  id: string;
  number: string;
  title: string;
  whatHappens: string;
  whyItMatters: string;
  output: string;
  example: string;
}

export const methodStepsData: MethodStepDetail[] = [
  {
    id: "discover",
    number: "01",
    title: "Discover",
    whatHappens: "We study your audience, existing touchpoints, content, website, customer behavior, and brand gaps.",
    whyItMatters: "Most brands lose memory before they even realize where the experience is breaking.",
    output: "Experience Gap Map",
    example: "We audit your Facebook page response times, website loading speeds, and delivery unboxing feedback.",
  },
  {
    id: "define",
    number: "02",
    title: "Define",
    whatHappens: "We establish a unified strategy, a single brand belief, and emotional goals that define how the brand should talk, look, and behave.",
    whyItMatters: "Without a clear strategy, a brand posts random content, runs generic ads, and confuses its audience.",
    output: "Brand Experience Blueprint",
    example: "We define the brand's core signature feeling (e.g. anticipation, warmth, prestige) that must guide every touchpoint.",
  },
  {
    id: "design",
    number: "03",
    title: "Design",
    whatHappens: "We design and build the actual touchpoints — the website code, brand visuals, content storylines, and packaging unboxing.",
    whyItMatters: "Aesthetic visuals must work hand-in-hand with smooth functionality to leave a premium, memorable impression.",
    output: "Experience Touchpoint System",
    example: "We write clean copy, develop custom web layouts, render packaging boxes, and write storytelling campaign briefs.",
  },
  {
    id: "deliver",
    number: "04",
    title: "Deliver",
    whatHappens: "We deploy the website, launch campaigns, execute activations, and distribute physical assets with pixel-perfect precision.",
    whyItMatters: "Execution determines how strategy is felt. Flawless presentation ensures immediate trust.",
    output: "Live Brand Launch & Campaign",
    example: "We push the Next.js site to production, execute Pop-up activations, and print scent-infused rigid boxes.",
  },
  {
    id: "deepen",
    number: "05",
    title: "Deepen",
    whatHappens: "We analyze customer behaviors, gather post-purchase feedback, audit conversion performance, and continuously optimize.",
    whyItMatters: "A memory is a loop. Ongoing refinement turns first-time buyers into lifetime advocates.",
    output: "Experience Optimization Log",
    example: "We track user checkout drops, run customer feedback surveys, and adjust the messenger response strategy.",
  },
];
