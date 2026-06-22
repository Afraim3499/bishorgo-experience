export interface NavLink {
  label: string;
  href: string;
}

export const headerNavLinks: NavLink[] = [
  { label: "Belief", href: "/#belief" },
  { label: "Method", href: "/method" },
  { label: "Services", href: "/services" },
  { label: "Lab", href: "/experience-lab" },
  { label: "Audit", href: "/experience-audit" },
  { label: "Contact", href: "/contact" },
];

export const footerExploreLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Method", href: "/method" },
  { label: "Services", href: "/services" },
  { label: "Experience Lab", href: "/experience-lab" },
  { label: "Experience Audit", href: "/experience-audit" },
  { label: "Contact", href: "/contact" },
];

export const footerIndustryLinks: NavLink[] = [
  { label: "Restaurants", href: "/industries/restaurants" },
  { label: "Cafes", href: "/industries/cafes" },
  { label: "Clothing Stores", href: "/industries/clothing-stores" },
  { label: "Ecommerce", href: "/industries/ecommerce" },
  { label: "Real Estate", href: "/industries/real-estate" },
];

export const footerSolutionLinks: NavLink[] = [
  { label: "Brand Not Memorable", href: "/solutions/brand-not-memorable" },
  { label: "Low Social Engagement", href: "/solutions/low-social-engagement" },
  { label: "Website Not Converting", href: "/solutions/website-not-converting" },
  { label: "Broken Customer Journey", href: "/solutions/customer-journey-is-broken" },
];

export const footerCompanyLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-and-conditions" },
];

