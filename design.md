# Bishorgo Experience — Web Design Guideline

**Document name:** `design.md`  
**Brand:** Bishorgo Experience  
**Tagline:** We Build the Experience  
**Purpose:** This document is the design strategy and implementation guide for the Bishorgo Experience website. It should be used by the designer, developer, and coding agent as the source of truth for visual direction, UI decisions, animation behavior, responsive design, and interaction quality.

---

## 1. Core Website Design Strategy

Bishorgo Experience should not feel like a normal agency website.

Most agency websites say:

- We do branding
- We do websites
- We do social media
- We do campaigns

Bishorgo must feel different from the first second.

The website itself must prove the brand promise:

> We do not just promote brands. We build experiences people remember.

The website should feel like a controlled brand journey:

1. **First-load experience** — logo animation introduces the idea of transformation.
2. **Hero experience** — the visitor immediately understands the philosophy.
3. **Belief experience** — the website explains why ordinary marketing is forgettable.
4. **Method experience** — Bishorgo shows a strategic process, not random services.
5. **Proof experience** — case studies, experiments, and Experience Lab show thinking.
6. **Conversion experience** — the visitor is invited to book an Experience Audit.

The design should communicate:

- Premium but not cold
- Creative but not chaotic
- Strategic but not corporate
- Bangladeshi-rooted but globally polished
- Human-first but technically sharp

---

## 2. Brand Interpretation

The logo is fixed. Do not redesign, reshape, recolor, stretch, or simplify it.

The logo already contains three useful meanings:

1. **Bird form** — ambition, movement, flight, freedom, forward momentum.
2. **Face form** — human experience, emotion, interaction, memory.
3. **Base form** — Bishorgo identity, stability, brand system.

The website should use this hidden transformation as a strategic design language.

### Design metaphor

The brand identity should represent:

> From attention → to emotion → to memory.

This metaphor should guide animations, section transitions, copy flow, and visual rhythm.

---

## 3. Experience Principle

Every screen should answer one of these questions:

1. What does Bishorgo believe?
2. What problem does Bishorgo solve?
3. How does Bishorgo think?
4. What can Bishorgo build?
5. Why should a founder trust Bishorgo?
6. What should the visitor do next?

If a section does not answer any of these, remove it.

---

## 4. Visual Direction

### Overall style

Use a premium editorial-studio look with strategic motion.

The website should feel closer to:

- Creative strategy studio
- Experience design consultancy
- Brand growth lab
- Human-centered marketing company

It should not feel like:

- Generic digital marketing agency
- SEO service website
- Template portfolio
- Software landing page
- Overanimated tech startup website

### Visual keywords

- Warm premium
- Human intelligence
- Cultural confidence
- Smooth motion
- Sharp typography
- Strategic whitespace
- Soft gold accents
- Deep green authority
- Editorial layouts
- Controlled asymmetry

---

## 5. Color System

Use the logo colors as the foundation. The palette must feel warm, premium, and trustworthy.

### Primary colors

| Token | Hex | Use |
|---|---:|---|
| `forest` | `#014A36` | Primary brand green, dark sections, buttons, headings, footer |
| `gold` | `#C8922B` | Accent lines, hover states, icons, badges, highlights |
| `ivory` | `#F8F5EF` | Main page background, cards, clean sections |
| `charcoal` | `#222222` | Body text, strong headings on light backgrounds |
| `sand` | `#E8DDCB` | Secondary backgrounds, soft cards, dividers |

### Extended colors

| Token | Hex | Use |
|---|---:|---|
| `deep-forest` | `#002F24` | Dark hero backgrounds, footer, immersive sections |
| `muted-gold` | `#A87318` | Darker gold for text on light backgrounds |
| `soft-gold` | `#E7C77A` | Glow, subtle gradients, illustration accents |
| `warm-white` | `#FFFDF8` | Clean white surfaces with warmth |
| `line` | `#D8CDBB` | Borders and separator lines |
| `danger` | `#B94A48` | Form error only |
| `success` | `#1F7A4D` | Form success only |

### Color usage rule

Use this ratio:

- 70% ivory / warm white
- 20% forest green
- 7% charcoal
- 3% gold

Gold must never dominate the design. Gold is a memory cue, not the main surface.

### Do not use

- Neon green
- Bright yellow
- Pure black as the main background
- Random gradients unrelated to green/gold
- Too many accent colors
- Blue as a major UI color

---

## 6. Typography System

Typography should feel confident, clean, and premium.

### English font

Primary choice:

```txt
Plus Jakarta Sans
```

Use for:

- Headings
- Body copy
- Navigation
- Buttons
- Forms
- UI labels

Fallback:

```css
font-family: "Plus Jakarta Sans", Inter, system-ui, sans-serif;
```

### Bangla font

Primary choice:

```txt
Hind Siliguri
```

Fallback:

```css
font-family: "Hind Siliguri", "Noto Sans Bengali", system-ui, sans-serif;
```

### Type scale

Use a responsive type scale.

| Element | Desktop | Tablet | Mobile | Weight |
|---|---:|---:|---:|---:|
| Hero headline | 72–96px | 56–72px | 40–48px | 700/800 |
| Page headline | 56–72px | 44–56px | 34–42px | 700 |
| Section headline | 40–56px | 34–44px | 28–34px | 700 |
| Subheadline | 22–28px | 20–24px | 18–22px | 500 |
| Body large | 18–20px | 17–18px | 16–17px | 400/500 |
| Body normal | 16–18px | 16px | 15–16px | 400 |
| Caption | 13–14px | 13px | 12–13px | 500 |
| Button | 14–16px | 14–15px | 14px | 600 |

### Typography rules

- Keep headlines short and memorable.
- Use generous line-height.
- Avoid all-caps for long text.
- Use uppercase only for small labels, badges, and section markers.
- Do not use overly decorative fonts.
- Do not mix more than two font families.
- Bangla text should not look like a fallback afterthought.

---

## 7. Layout System

### Grid

Use a 12-column grid on desktop.

Recommended content widths:

```txt
Max page width: 1440px
Main container: 1200px
Narrow content: 760px
Wide content: 1320px
```

### Spacing scale

Use a consistent spacing system.

```txt
4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px
```

### Section padding

| Screen | Vertical padding |
|---|---:|
| Desktop | 96–144px |
| Tablet | 72–96px |
| Mobile | 56–72px |

### Layout rhythm

Use an editorial rhythm:

- Large quiet space before important statements
- Narrow text width for philosophy sections
- Wide visual space for experience examples
- Alternating light and dark sections
- Intentional asymmetry for creative energy

---

## 8. Website Page Experience Structure

### 8.1 First-load experience

The site should begin with the logo animation.

Animation concept:

```txt
Bird → Face → Base Logo
```

Meaning:

```txt
Motion → Human emotion → Brand memory
```

Duration target:

```txt
4–8 seconds for full first-load experience
1.5–2.5 seconds for repeat visits or reduced loading mode
```

Implementation rule:

- Use SVG parts for final production.
- Use PNG fallback only for early prototype.
- Respect `prefers-reduced-motion`.
- If reduced motion is enabled, show static base logo and fade into homepage.

### 8.2 Homepage

Recommended section order:

1. Logo loader / entry experience
2. Hero
3. Belief statement
4. What Bishorgo does
5. Bishorgo Method™
6. Experience Audit™
7. Experience Lab™ preview
8. Case study / reimagined business preview
9. Industries served
10. Founder note
11. Final CTA
12. Footer

### 8.3 About page

Must feel like a founder letter, not a corporate profile.

Sections:

1. Why Bishorgo exists
2. The belief behind the company
3. What “Experience” means to Bishorgo
4. Mission
5. Vision
6. Values
7. Team / founding members
8. CTA to Experience Audit

### 8.4 Services page

Do not present services like a menu.

Present them as pillars:

1. Brand
2. Technology
3. Marketing
4. Experience

Each service card should include:

- Service name
- Problem it solves
- What Bishorgo does
- Expected outcome
- CTA

### 8.5 Experience Audit™ page

This is a primary conversion page.

Sections:

1. Audit promise
2. What gets reviewed
3. Scoring categories
4. Form
5. What happens after submission
6. CTA

Audit categories:

- Brand clarity
- Website experience
- Social media presence
- Visual identity
- Customer journey
- Conversion readiness
- Memorability

### 8.6 Experience Lab™ page

This is Bishorgo’s thought-leadership engine.

Categories:

- Experience Insights
- Brand Psychology
- Bishorgo Reimagines
- Founder Diaries
- Case Studies
- Toolkits

Design it like a premium editorial archive, not a normal blog grid.

### 8.7 Contact page

Contact should feel like the start of collaboration.

Avoid:

```txt
Contact Us
```

Use:

```txt
Tell us what you are building.
We will show you where the experience can grow.
```

Contact options:

- Business inquiry form
- WhatsApp
- Email
- Book a call
- Social links

---

## 9. Component Design Guidelines

### 9.1 Header

Header should be minimal, sticky, and premium.

Desktop navigation:

```txt
Logo | Work | Services | Experience Lab | Audit | About | Contact
```

Primary CTA:

```txt
Book Audit
```

Header behavior:

- Transparent over hero on first screen
- Solid ivory or dark forest after scroll
- Smooth transition, no harsh jump
- Mobile uses a full-screen menu

### 9.2 Buttons

Button types:

1. Primary button
2. Secondary button
3. Ghost button
4. Text link button

Primary button:

```txt
Background: forest
Text: ivory
Hover: gold border or gold glow
```

Secondary button:

```txt
Background: transparent
Border: forest or gold
Text: forest
Hover: forest fill + ivory text
```

Button copy should be action-oriented:

- Book an Experience Audit
- Explore the Lab
- See the Method
- Start a Conversation
- View Case Study

Avoid weak CTAs:

- Submit
- Learn More
- Click Here
- Read More

### 9.3 Cards

Cards should feel editorial and premium.

Use for:

- Services
- Lab articles
- Case studies
- Industries
- Audit categories

Card design:

- Soft ivory/sand background
- Thin border using `line`
- Subtle shadow only on hover
- Gold micro-line or category tag
- Rounded corners: 20–28px
- Good internal spacing: 24–40px

Hover behavior:

- Slight upward movement: `translateY(-4px)`
- Border changes to gold
- Optional image zoom: `scale(1.03)`

### 9.4 Forms

Forms must feel simple and low-friction.

Fields:

- Name
- Business name
- Phone
- Email
- Website / Facebook page
- Industry
- Main challenge

Form design:

- Large input height: 52–60px
- Rounded corners: 12–16px
- Clear labels above fields
- No placeholder-only labels
- Focus state uses forest border and gold glow
- Error state uses danger color with clear text

Form tone:

Instead of:

```txt
Submit
```

Use:

```txt
Send My Audit Request
```

### 9.5 Footer

Footer should feel like a closing statement.

Include:

- Logo
- One-line positioning
- Services
- Company
- Experience Lab
- Contact
- Social links
- Legal links

Footer line:

```txt
Bishorgo Experience — We build experiences people remember.
```

---

## 10. Animation and Motion Guidelines

Motion is a strategic asset for Bishorgo.

Use motion to show:

- Transformation
- Attention
- Memory
- Smooth progress
- Human warmth

Do not use motion as decoration.

### Motion personality

```txt
Smooth
Elegant
Slow enough to feel premium
Fast enough to avoid frustration
Subtle
Purposeful
```

### Recommended easing

```css
cubic-bezier(0.65, 0, 0.35, 1)
```

For softer entry:

```css
cubic-bezier(0.16, 1, 0.3, 1)
```

### Motion durations

| Motion type | Duration |
|---|---:|
| Button hover | 180–240ms |
| Card hover | 240–320ms |
| Section reveal | 600–900ms |
| Page transition | 500–800ms |
| Logo loader | 4–8s |
| Micro icon motion | 300–600ms |

### Required animations

- Logo loader
- Hero text reveal
- Section reveal on scroll
- Card hover
- Button hover
- Gold line draw animation
- Case study image reveal
- Audit score reveal

### Reduced motion rule

Always include:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 11. Imagery Direction

Use real Bangladesh wherever possible.

Preferred imagery:

- Dhaka streets
- Small business counters
- Tea stalls
- Restaurants
- Pharmacies
- Retail shelves
- Local entrepreneurs
- Customer interactions
- Events and activations
- Behind-the-scenes strategy sessions

Avoid:

- Generic office handshake photos
- Random smiling corporate people
- Overused laptop mockups
- Western stock photos that do not feel local
- Fake AI-looking business teams

Image treatment:

- Warm natural lighting
- Slight grain allowed
- Muted premium colors
- Forest/gold overlay only when useful
- Editorial cropping

---

## 12. Icon and Illustration Direction

Icons should be custom and derived from the logo geometry.

Style:

- Rounded line icons
- 1.5–2px stroke
- Forest line with gold accent
- Minimal, not childish
- No generic icon pack look

Illustrations should feel:

- Human
- Local
- Strategic
- Clean
- Warm

Possible illustration motifs:

- Touchpoint maps
- Customer journey paths
- Memory loops
- Brand interaction diagrams
- Small business scenes
- Field marketing routes

---

## 13. Interaction Strategy

The website should guide the visitor through a story.

### Visitor journey

```txt
Curiosity → Understanding → Trust → Proof → Action
```

### Interaction flow

1. Visitor sees logo transformation.
2. Visitor reads belief-driven hero message.
3. Visitor understands Bishorgo is not a generic agency.
4. Visitor sees method and service pillars.
5. Visitor explores Experience Lab or case studies.
6. Visitor books audit or starts conversation.

### Primary CTA hierarchy

Primary:

```txt
Book an Experience Audit
```

Secondary:

```txt
Explore Experience Lab
```

Tertiary:

```txt
Start a Conversation
```

---

## 14. Responsive Design Guidelines

The website must be mobile-first.

Many Bangladeshi business owners and founders will open the website from Facebook, WhatsApp, LinkedIn, or mobile browsers.

### Breakpoints

```txt
Mobile: 0–639px
Tablet: 640–1023px
Laptop: 1024–1279px
Desktop: 1280px+
Large: 1440px+
```

### Mobile rules

- Hero headline must remain readable.
- Loader should be shorter on mobile.
- Navigation should be simple.
- Cards should stack vertically.
- Forms should be one column.
- Avoid heavy parallax on mobile.
- Images should load lazily.
- Touch targets must be at least 44px.

---

## 15. Accessibility Guidelines

Accessibility is non-negotiable.

Requirements:

- Proper heading hierarchy
- Keyboard navigable menu
- Visible focus states
- Alt text for every meaningful image
- Labels for all form fields
- Color contrast that meets WCAG AA
- Reduced motion support
- ARIA only where necessary
- No text embedded inside important images

Focus style:

```css
outline: 2px solid #C8922B;
outline-offset: 4px;
```

---

## 16. SEO Design Considerations

Design must support SEO and discoverability.

Rules:

- Hero headline should be real HTML text, not image text.
- Use semantic HTML sections.
- Use only one `h1` per page.
- Use descriptive `h2` and `h3` structure.
- Use optimized images with meaningful alt text.
- Create reusable Open Graph image templates.
- Avoid hiding important content behind animations only.
- Blog and Lab pages should have readable, crawlable HTML.

---

## 17. Design Tokens for Development

Use CSS variables or Tailwind config tokens.

### CSS variables

```css
:root {
  --color-forest: #014A36;
  --color-deep-forest: #002F24;
  --color-gold: #C8922B;
  --color-muted-gold: #A87318;
  --color-soft-gold: #E7C77A;
  --color-ivory: #F8F5EF;
  --color-warm-white: #FFFDF8;
  --color-charcoal: #222222;
  --color-sand: #E8DDCB;
  --color-line: #D8CDBB;
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --ease-premium: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-soft: cubic-bezier(0.16, 1, 0.3, 1);
}
```

### Tailwind color names

```js
colors: {
  forest: "#014A36",
  "deep-forest": "#002F24",
  gold: "#C8922B",
  "muted-gold": "#A87318",
  "soft-gold": "#E7C77A",
  ivory: "#F8F5EF",
  "warm-white": "#FFFDF8",
  charcoal: "#222222",
  sand: "#E8DDCB",
  line: "#D8CDBB"
}
```

---

## 18. Component Naming Convention

Use clear and reusable component names.

```txt
/components
  /layout
    Header.tsx
    Footer.tsx
    PageShell.tsx
  /sections
    HeroSection.tsx
    BeliefSection.tsx
    ServicesSection.tsx
    MethodSection.tsx
    ExperienceLabPreview.tsx
    FounderNote.tsx
    FinalCTA.tsx
  /ui
    Button.tsx
    Card.tsx
    Badge.tsx
    SectionLabel.tsx
    SectionTitle.tsx
    Input.tsx
    Textarea.tsx
  /motion
    LogoLoader.tsx
    Reveal.tsx
    PageTransition.tsx
```

Component rules:

- Components should be reusable.
- Avoid one massive page file.
- Separate layout, section, UI, and motion components.
- Keep animation logic inside motion components.
- Keep content in JSON/MDX where possible.

---

## 19. Copy and UI Text Rules

Design and copy must work together.

### Preferred language

Use direct, memorable lines.

Examples:

```txt
People forget ads. People remember experiences.
```

```txt
Every customer touchpoint is a chance to be remembered.
```

```txt
We design the moments your customers carry with them.
```

### Avoid

```txt
We provide innovative digital marketing solutions.
```

```txt
We are a full-service agency.
```

```txt
Grow your business online with us.
```

### CTA language

Use:

```txt
Book an Experience Audit
Explore the Lab
See the Method
Start a Conversation
```

Avoid:

```txt
Submit
Click Here
Learn More
Contact Us
```

---

## 20. Page-Level Design Strategy

### Home page strategy

Purpose:

```txt
Make the visitor immediately understand that Bishorgo is different.
```

Must include:

- Strong hero message
- Brand belief
- Service pillars
- Method framework
- Experience Audit CTA
- Experience Lab preview
- Case study preview
- Final CTA

### Services page strategy

Purpose:

```txt
Show that Bishorgo offers integrated growth systems, not disconnected services.
```

Must include:

- Four pillars
- Service outcomes
- Process
- Deliverables
- Related case studies
- CTA

### Experience Lab strategy

Purpose:

```txt
Prove Bishorgo thinks differently before the visitor becomes a client.
```

Must include:

- Featured Lab entry
- Category filters
- Editorial card layout
- Search/filter option
- Clear CTA after articles

### Experience Audit strategy

Purpose:

```txt
Turn curious founders into leads.
```

Must include:

- Clear value proposition
- Simple scoring explanation
- Short form
- Trust-building copy
- Success state

---

## 21. Website Performance Design Rules

A beautiful experience is useless if the site feels slow.

Rules:

- Compress all images.
- Use SVG for icons and logo where possible.
- Lazy load below-the-fold images.
- Keep animations lightweight.
- Avoid autoplay-heavy videos on mobile.
- Use optimized fonts and `font-display: swap`.
- Use Next.js image optimization.
- Avoid unnecessary third-party scripts.
- Keep homepage initial load lean.

Target:

```txt
Lighthouse Performance: 90+
Accessibility: 95+
SEO: 95+
Best Practices: 95+
```

---

## 22. Coding Agent Design Brain

The coding agent must follow this mindset:

```txt
Build Bishorgo Experience as an experience-led marketing website, not a generic agency template.
Every design decision must support memory, trust, clarity, and conversion.
Keep the website premium, smooth, fast, accessible, responsive, and emotionally intelligent.
Use the fixed logo and brand colors exactly. Do not invent unrelated colors, fonts, or visual styles.
Use animation only when it adds meaning.
Prioritize clean code, reusable components, and maintainable structure.
```

### Coding agent priorities

1. Preserve brand identity.
2. Make the first-load experience memorable.
3. Keep the site fast.
4. Make every section clear.
5. Keep CTAs visible but not aggressive.
6. Make mobile excellent.
7. Respect accessibility.
8. Keep design premium, not noisy.

---

## 23. Do and Do Not

### Do

- Use the logo as a source of motion language.
- Use forest green and gold consistently.
- Use strong typography.
- Use real human/business moments.
- Use smooth, meaningful animation.
- Use whitespace confidently.
- Use clear CTAs.
- Use editorial layouts.
- Use static generation wherever possible.

### Do not

- Make the site look like a generic digital agency.
- Overuse gold.
- Use random gradients.
- Add unnecessary 3D objects.
- Use too many animations.
- Use stock corporate imagery.
- Hide important content behind effects.
- Make the mobile version an afterthought.
- Use vague agency language.

---

## 24. Final Design Standard

The finished website should pass this test:

> If a founder opens the website for 20 seconds, they should remember Bishorgo as the company that builds memorable brand experiences.

If the visitor only remembers “another marketing agency,” the design has failed.

The site must make the brand promise visible, usable, and memorable.

