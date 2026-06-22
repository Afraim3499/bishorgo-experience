# Bishorgo Experience — Web Architecture Guideline

## 1. Purpose of This Document

This document defines the website architecture for **Bishorgo Experience**.

The website must not behave like a normal agency website. It must feel like an experience from the first load. The architecture should support strong storytelling, premium motion, fast performance, easy content updates, and future scalability.

This document is written for the coding agent / developer who will build the Bishorgo Experience website.

---

## 2. Core Architecture Strategy

### Main Goal

Build a fast, premium, experiential website that presents Bishorgo as a **brand experience and business growth company**, not a basic digital marketing agency.

The website should make visitors think:

> “These people understand brand memory, customer behavior, and business growth — not just design and ads.”

### Technical Direction

Use:

- **React** for frontend development
- **Vercel** for deployment
- **Tailwind CSS** for styling
- **Framer Motion** for animation and interaction
- **MDX / JSON files** for content management in v1
- **Supabase only if database storage becomes necessary later**

### Database Decision

For version 1, **do not use a database**.

The website can run as a static frontend with:

- Static pages
- Local content files
- JSON configuration files
- MDX content files
- Form submissions handled through email, third-party form tools, or Vercel serverless functions

Use Supabase only if Bishorgo later needs:

- Lead database
- Experience Audit result storage
- Newsletter subscriber storage
- Admin dashboard
- Client dashboard
- Dynamic CMS-like content management

---

## 3. Recommended Stack

### Frontend

```txt
React
Vite
TypeScript
Tailwind CSS
Framer Motion
React Router
MDX
```

### Deployment

```txt
Vercel
```

### Optional Later Tools

```txt
Supabase — database, auth, lead storage
Resend / SendGrid — email delivery
Formspree / Getform — no-database form handling
Plausible / Google Analytics — analytics
Meta Pixel — retargeting
```

---

## 4. Build Philosophy

### 4.1 Experience First

Every major section should feel intentional.

Do not build a plain scroll website with static service cards. The site should use:

- Logo loader animation
- Smooth reveal transitions
- Premium hover states
- Story-led page flow
- Subtle movement
- Interaction-based discovery
- Strong visual rhythm

But avoid over-animation.

Rule:

> Animation should create meaning, not decoration.

### 4.2 Static First

Because Bishorgo is a marketing / portfolio / content website, most content should be static in v1.

Use static content for:

- Homepage
- About page
- Services
- Experience Lab entries
- Case studies
- Blog posts
- Founder letter
- Legal pages

This makes the website:

- Faster
- Cheaper
- Easier to deploy
- Easier to maintain
- Less vulnerable to backend issues

### 4.3 Component Driven

Every repeated UI pattern should become a reusable component.

Examples:

- Section header
- CTA button
- Service card
- Case study card
- Experience Lab card
- Navigation menu
- Footer
- Animated logo loader
- Form field
- Insight block
- Testimonial card
- Process timeline

---

## 5. Site Map

### Primary Pages

```txt
/
/about
/services
/services/brand-strategy
/services/brand-identity
/services/web-development
/services/social-media
/services/content-production
/services/experience-marketing
/services/field-marketing
/experience-audit
/experience-lab
/experience-lab/:slug
/case-studies
/case-studies/:slug
/resources
/contact
/book-a-call
```

### Secondary Pages

```txt
/founder-letter
/our-method
/industries
/industries/restaurants
/industries/retail
/industries/healthcare
/industries/education
/industries/real-estate
/industries/startups
/careers
/partnerships
/privacy-policy
/terms-and-conditions
```

### Future Pages

```txt
/client-dashboard
/admin
/reports
/tools/customer-memory-score
/tools/brand-recall-index
```

Do not build future pages in v1 unless required. Keep architecture ready for them.

---

## 6. Navigation Architecture

### Header Navigation

Main navigation should be clean and strategic.

```txt
Home
Services
Experience Lab
Case Studies
About
Contact
```

Primary CTA:

```txt
Book an Experience Audit
```

### Mobile Navigation

Mobile navigation should feel premium, not like a basic dropdown.

Requirements:

- Full-screen menu overlay
- Dark green background
- Ivory text
- Gold hover / active accents
- Smooth slide / fade animation
- Clear CTA at bottom

### Footer Navigation

Footer should include:

```txt
Bishorgo Experience positioning line
Services
Company
Experience Lab
Contact
Social links
Legal links
Newsletter signup
```

Footer positioning line:

```txt
Bishorgo Experience — We build experiences people remember.
```

---

## 7. Page Architecture

## 7.1 Homepage

The homepage is the most important page. It should function like a guided brand experience.

### Homepage Flow

```txt
1. Logo Loader / First Load Experience
2. Hero Section
3. Belief Section
4. Problem Section
5. Bishorgo Method™
6. Service Pillars
7. Experience Audit CTA
8. Experience Lab Preview
9. Featured Case Studies
10. Industries Section
11. Founder Message
12. Final CTA
13. Footer
```

### Homepage Objective

The homepage should communicate:

```txt
Bishorgo does not only market brands.
Bishorgo designs memorable customer experiences.
```

### Hero Copy Direction

Headline:

```txt
People forget campaigns.
People remember experiences.
```

Subheadline:

```txt
Bishorgo Experience helps businesses turn ordinary brand interactions into memorable customer journeys through strategy, branding, technology, content, and real-world experiences.
```

CTA buttons:

```txt
Book an Experience Audit
Explore Experience Lab
```

---

## 7.2 About Page

The About page should not be a boring company profile.

It should explain:

- Why Bishorgo exists
- What Bishorgo believes
- What makes Bishorgo different
- How Bishorgo thinks about brands
- Who is behind the company

### About Page Flow

```txt
1. About Hero
2. Why Bishorgo Exists
3. Our Belief
4. Founder Story
5. Mission / Vision
6. Values
7. Team Section
8. CTA
```

### Core About Message

```txt
We exist because most brands are seen for a moment and forgotten the next. Bishorgo helps businesses create experiences that stay in people’s memory.
```

---

## 7.3 Services Page

The Services page should not look like a generic agency service list.

Instead of only saying:

```txt
Branding
Website
Social Media
Marketing
```

Frame services as business outcomes.

### Service Pillars

```txt
Brand
Technology
Marketing
Experience
```

### Service Page Flow

```txt
1. Services Hero
2. Four Pillars Overview
3. Detailed Service Cards
4. Bishorgo Method™ Process
5. Who This Is For
6. Expected Outcomes
7. CTA
```

### Individual Service Page Structure

Each service detail page should use this structure:

```txt
1. Service Hero
2. Problem this service solves
3. Why this matters
4. Bishorgo approach
5. What we deliver
6. Process
7. Example use cases
8. CTA
```

---

## 7.4 Experience Audit Page

The Experience Audit is the main lead generation mechanism.

### Purpose

Capture founders who want to improve their brand experience.

### Page Flow

```txt
1. Audit Hero
2. What is an Experience Audit?
3. What we evaluate
4. How the score works
5. Audit Form
6. What happens after submission
7. CTA / reassurance
```

### Audit Form Fields

```txt
Name
Business name
Business category
Website or Facebook page
Phone number
Email
Main challenge
Current marketing activity
What do you want to improve?
```

### v1 Form Strategy

Do not store in database initially.

Recommended v1 options:

1. Send form submission to email via Vercel serverless function + Resend/SendGrid
2. Use Formspree/Getform
3. Save to Google Sheet using automation if needed

### v2 Form Strategy

Use Supabase table:

```txt
experience_audit_submissions
```

Only add Supabase if Bishorgo needs dashboards or saved lead history.

---

## 7.5 Experience Lab Page

Experience Lab is the content engine of the website.

It should feel like Bishorgo’s thinking room.

### Content Types

```txt
Experience Breakdowns
Brand Psychology
Bishorgo Reimagines
Founder Notes
Case Studies
Frameworks
Reports
```

### Experience Lab Listing Page

Required features:

- Category filter
- Featured article section
- Card grid
- Search field if content volume grows
- Reading time
- Tags
- CTA after every few cards

### Experience Lab Detail Page

Each detail page should include:

```txt
Title
Category
Date
Summary
Hero visual
Main content
Pull quotes
Insight boxes
Related articles
CTA
```

---

## 7.6 Case Studies Page

Case studies should show thinking, not only visuals.

### Case Study Structure

```txt
1. Client / concept name
2. Industry
3. Problem
4. Insight
5. Strategy
6. Execution
7. Experience touchpoints
8. Result / expected result
9. Visuals
10. CTA
```

### Self-Initiated Case Studies for v1

Use concept case studies before real client case studies are available.

Examples:

```txt
How Bishorgo would make a tea stall unforgettable
How Bishorgo would redesign a Dhaka pharmacy experience
How Bishorgo would improve a small restaurant’s customer journey
How Bishorgo would make a clothing store feel premium
```

---

## 8. Content Architecture

### Static Content Files

Use local content files instead of a database.

Recommended structure:

```txt
/src/content/pages/home.ts
/src/content/pages/about.ts
/src/content/services/services.ts
/src/content/experience-lab/*.mdx
/src/content/case-studies/*.mdx
/src/content/resources/*.mdx
```

### Why This Works

- Easy to edit by developers
- Version controlled in Git
- No backend needed
- Fast deployment
- Perfect for v1

### MDX Frontmatter Format

Each Experience Lab or case study MDX file should include:

```md
---
title: "Why This Tea Stall Is Always Crowded"
slug: "why-this-tea-stall-is-always-crowded"
category: "Experience Breakdown"
date: "2026-06-22"
summary: "A customer experience breakdown of a small Bangladeshi tea stall."
coverImage: "/images/experience-lab/tea-stall.jpg"
readingTime: "4 min read"
featured: true
---
```

---

## 9. Component Architecture

### Core Layout Components

```txt
AppLayout
Header
MobileMenu
Footer
PageTransition
LogoLoader
SEOHead
```

### UI Components

```txt
Button
Badge
Card
SectionHeader
Container
Grid
ImageReveal
QuoteBlock
InsightBox
ProcessStep
StatBlock
FormInput
Textarea
SelectField
```

### Page Components

```txt
HeroSection
BeliefSection
ProblemSection
ServicePillars
BishorgoMethod
ExperienceAuditCTA
ExperienceLabPreview
CaseStudyPreview
FounderMessage
FinalCTA
```

### Content Components

```txt
MDXRenderer
PostCard
CaseStudyCard
CategoryFilter
RelatedPosts
ArticleHeader
ArticleFooterCTA
```

### Animation Components

```txt
RevealOnScroll
MagneticButton
AnimatedLogoMark
ParallaxImage
MotionCard
PageFade
```

---

## 10. File Structure

Recommended project structure:

```txt
bishorgo-experience/
│
├── public/
│   ├── images/
│   │   ├── brand/
│   │   ├── hero/
│   │   ├── experience-lab/
│   │   ├── case-studies/
│   │   └── team/
│   ├── icons/
│   └── animations/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   ├── ui/
│   │   ├── sections/
│   │   ├── forms/
│   │   ├── animation/
│   │   └── content/
│   │
│   ├── content/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── experience-lab/
│   │   ├── case-studies/
│   │   └── resources/
│   │
│   ├── data/
│   │   ├── navigation.ts
│   │   ├── services.ts
│   │   ├── industries.ts
│   │   └── site.ts
│   │
│   ├── hooks/
│   │   ├── useScrollReveal.ts
│   │   ├── useReducedMotion.ts
│   │   └── usePageTransition.ts
│   │
│   ├── lib/
│   │   ├── seo.ts
│   │   ├── forms.ts
│   │   ├── analytics.ts
│   │   ├── mdx.ts
│   │   └── utils.ts
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── ServiceDetail.tsx
│   │   ├── ExperienceAudit.tsx
│   │   ├── ExperienceLab.tsx
│   │   ├── ArticleDetail.tsx
│   │   ├── CaseStudies.tsx
│   │   ├── CaseStudyDetail.tsx
│   │   ├── Contact.tsx
│   │   └── BookCall.tsx
│   │
│   ├── routes/
│   │   └── router.tsx
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   └── animations.css
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── api/
│   ├── contact.ts
│   ├── experience-audit.ts
│   └── subscribe.ts
│
├── design.md
├── content.md
├── architecture.md
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── README.md
```

---

## 11. Routing Strategy

Use `react-router-dom`.

Recommended routes:

```tsx
/
/about
/services
/services/:slug
/experience-audit
/experience-lab
/experience-lab/:slug
/case-studies
/case-studies/:slug
/resources
/contact
/book-a-call
/privacy-policy
/terms-and-conditions
```

### Route Behavior

- All routes should load with smooth page transition.
- Scroll should reset to top on route change.
- Header should remain consistent.
- Mobile menu should close after route selection.
- Each route should have proper meta title and description.

---

## 12. Animation Architecture

### Animation Rules

- Use Framer Motion for major motion.
- Use CSS transitions for simple hover states.
- Respect `prefers-reduced-motion`.
- Do not animate everything.
- Use slow, premium easing.

### Easing Style

Use smooth cinematic easing:

```txt
cubic-bezier(0.65, 0, 0.35, 1)
```

### Required Animations

```txt
Logo loader
Page fade transition
Hero text reveal
Section reveal on scroll
Service card hover
Case study image reveal
Button hover movement
Experience Lab card entrance
Mobile menu open/close
```

### Logo Loader Sequence

```txt
1. Start with bird form
2. Slight wing movement
3. Rotate/morph into face form
4. Eye wink
5. Rotate/morph into base logo
6. Reveal homepage
```

Recommended duration:

```txt
6–8 seconds maximum
```

Skip loader after first visit in the same session using `sessionStorage`.

---

## 13. Styling Architecture

### Tailwind Theme Colors

```js
colors: {
  forest: "#014A36",
  gold: "#C8922B",
  ivory: "#F8F5EF",
  charcoal: "#222222",
  sand: "#E8DDCB",
}
```

### Typography

```txt
English: Plus Jakarta Sans
Bangla: Hind Siliguri
Fallback: Noto Sans Bengali, sans-serif
```

### Design Rhythm

Use generous spacing.

```txt
Section padding desktop: 96px–140px
Section padding mobile: 56px–80px
Container max width: 1180px–1280px
Text width for long copy: 640px–760px
```

### UI Rule

Do not create overdesigned cards.

Use:

- Clean spacing
- Strong typography
- Soft borders
- Subtle shadows
- Gold only as accent
- Green as authority
- Ivory as calm background

---

## 14. Form Architecture

### v1 Contact Form

Form fields:

```txt
Name
Business name
Email
Phone
Service interest
Message
```

Submission method:

```txt
Vercel serverless function → email notification
```

Alternative:

```txt
Formspree / Getform
```

### v1 Experience Audit Form

Form fields:

```txt
Name
Business name
Industry
Website / Facebook page
Current challenge
Marketing activity
What do you want to improve?
Phone
Email
```

Initial result:

```txt
Thank you screen + email notification
```

No database needed for v1.

### v2 Supabase Tables

Only create these later if needed:

```txt
contact_submissions
experience_audit_submissions
newsletter_subscribers
```

Example Supabase schema later:

```sql
create table experience_audit_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  business_name text,
  industry text,
  website_url text,
  challenge text,
  marketing_activity text,
  improvement_goal text,
  phone text,
  email text not null,
  created_at timestamp with time zone default now()
);
```

---

## 15. SEO Architecture

Even though this is a React site, it still needs strong SEO structure.

### Required SEO Items

Each page must have:

```txt
Title
Meta description
Canonical URL
Open Graph title
Open Graph description
Open Graph image
Twitter card metadata
Structured headings
Image alt text
```

### Recommended SEO Pages

```txt
/services/brand-strategy
/services/web-development
/services/social-media
/services/experience-marketing
/industries/restaurants
/industries/retail
/industries/healthcare
/experience-lab
```

### SEO Concern With React SPA

A pure React SPA is not as SEO-friendly as static pre-rendered pages.

For best SEO, use one of these options:

1. Pre-render important routes during build
2. Use Vite SSG plugin
3. Move to Next.js later if SEO/content scale becomes serious

For v1, use React with proper metadata and pre-rendering where possible.

---

## 16. Performance Requirements

### Performance Targets

```txt
Lighthouse Performance: 90+
Accessibility: 90+
SEO: 90+
Best Practices: 90+
Initial page load: under 3 seconds on average mobile connection
```

### Optimization Rules

- Compress all images
- Use WebP or AVIF where possible
- Lazy-load below-fold images
- Avoid heavy animation libraries beyond Framer Motion
- Do not autoplay large videos on mobile
- Minimize third-party scripts
- Use SVG for logo and icons
- Use `sessionStorage` to avoid replaying loader every visit

---

## 17. Accessibility Requirements

The website should feel premium but still be usable.

Requirements:

- Keyboard navigable menu
- Visible focus states
- Alt text for images
- Proper heading hierarchy
- Sufficient color contrast
- Reduced motion support
- Labels for all form inputs
- Error messages for forms
- ARIA labels for icon buttons

---

## 18. Analytics Architecture

Install analytics from launch.

Recommended setup:

```txt
Google Analytics 4
Meta Pixel
Vercel Analytics
Microsoft Clarity or Hotjar
```

Track key events:

```txt
Book audit click
Contact form submit
Audit form submit
Book call click
Experience Lab article read
Case study view
Service page view
Newsletter signup
```

Create a simple analytics wrapper in:

```txt
/src/lib/analytics.ts
```

---

## 19. Coding Agent Rules

The coding agent must follow these rules.

### 19.1 Brand Rules

- Do not use generic startup templates.
- Do not make the website look like a SaaS landing page.
- Do not use random bright gradients.
- Do not overuse gold.
- Do not use stock-looking icons.
- Do not create corporate handshake visuals.
- Every section should support the brand idea: experience, memory, growth.

### 19.2 Code Rules

- Use TypeScript.
- Use reusable components.
- Keep components small.
- Keep content separate from UI.
- Avoid hardcoding large copy inside components.
- Use semantic HTML.
- Keep animation logic isolated.
- Use proper naming.
- Avoid unnecessary dependencies.
- Optimize for mobile first.

### 19.3 Content Rules

- Do not write generic agency copy.
- Avoid “we provide innovative solutions.”
- Avoid “full-service digital marketing agency.”
- Use human, direct, story-led language.
- Keep CTA copy strong and clear.
- Keep Bishorgo’s positioning consistent.

---

## 20. Environment Variables

Use `.env.local` for secrets.

Possible variables:

```env
VITE_SITE_URL=https://bishorgoexperience.com
VITE_GA_ID=
VITE_META_PIXEL_ID=
RESEND_API_KEY=
CONTACT_EMAIL=
SUPABASE_URL=
SUPABASE_ANON_KEY=
```

Do not expose secret keys to the frontend.

Only variables prefixed with `VITE_` are exposed to the browser in Vite.

---

## 21. Deployment Strategy

### Vercel Setup

- Connect GitHub repository to Vercel.
- Set production branch as `main`.
- Use preview deployments for every pull request.
- Add environment variables in Vercel dashboard.
- Enable Vercel Analytics.

### Build Command

```txt
npm run build
```

### Output Directory

```txt
dist
```

### Deploy Rule

Do not deploy directly without checking:

- Build success
- Mobile responsiveness
- Form submission
- Loader behavior
- SEO metadata
- Broken links
- Performance score

---

## 22. Version Roadmap

### Version 1 — Launch Website

Build:

```txt
Home
About
Services
Experience Audit
Experience Lab
Contact
Book a Call
Legal pages
```

No database.

### Version 2 — Content Engine

Add:

```txt
Case studies
Industry pages
Resources
Newsletter
Search
More MDX content
```

Still no database unless needed.

### Version 3 — Lead System

Add Supabase if needed:

```txt
Lead database
Audit result storage
Newsletter subscriber storage
Admin dashboard
```

### Version 4 — Experience Tools

Add:

```txt
Customer Memory Score tool
Brand Recall Index tool
Interactive audit report
Client dashboard
```

---

## 23. Final Build Principle

The website must prove Bishorgo’s promise.

It should not only say:

```txt
We build experiences.
```

It should make the visitor feel:

```txt
This website itself was an experience.
```

That is the architecture standard.
