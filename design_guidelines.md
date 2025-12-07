# Design Guidelines: Data Analyst Portfolio Website

## Design Approach
**Reference-Based Inspiration**: Linear (clean professionalism) + Stripe (trust and clarity) + Notion (content organization)

**Key Principles**:
- Professional credibility over flashy aesthetics
- Data-driven visual language (subtle use of charts/metrics as design elements)
- Clear information hierarchy prioritizing impact metrics
- Clean, modern, resume-ready presentation

---

## Typography System

**Font Families** (Google Fonts):
- Primary: Inter (headings, UI elements, metrics)
- Secondary: JetBrains Mono (code snippets, technical terms, SQL/Python mentions)

**Type Scale**:
- Hero Headline: text-5xl/text-6xl, font-bold
- Section Headings: text-3xl/text-4xl, font-semibold
- Project Titles: text-2xl, font-semibold
- Body Text: text-base/text-lg, font-normal
- Metrics/Numbers: text-4xl/text-5xl, font-bold (JetBrains Mono for data points)
- Labels/Captions: text-sm, font-medium

---

## Layout System

**Spacing Primitives**: Use Tailwind units of **4, 6, 8, 12, 16** (e.g., p-4, gap-8, mb-12, py-16)

**Container Strategy**:
- Full-width sections with inner `max-w-7xl mx-auto px-6`
- Content sections: `py-16` (desktop), `py-12` (mobile)
- Project showcases: Generous whitespace between cards (gap-12)

**Grid System**:
- Skills: 4-column grid (lg:grid-cols-4, md:grid-cols-2, grid-cols-1)
- Projects: Single column with alternating layouts
- Certifications: 3-column grid (lg:grid-cols-3)

---

## Component Library

### Navigation
- Fixed header with subtle backdrop blur
- Logo/Name (left), Navigation links (center), "Download Resume" CTA (right)
- Links: About, Projects, Skills, Contact
- Mobile: Hamburger menu with slide-in drawer

### Hero Section
**Layout**: Split layout (60/40)
- Left: Name, title, tagline, key metrics (dashboards shipped, reporting time reduced), dual CTAs
- Right: Professional headshot with subtle geometric accent (data visualization pattern overlay)
- Background: Clean gradient or solid with subtle grid pattern

### Skills Section
**Component**: Skill category cards in 4-column grid
- Each card: Icon (Heroicons), skill category title, bulleted tech list
- Categories: SQL, Python, BI Tools, Data Engineering
- Subtle hover elevation on cards

### Project Showcases
**Component**: Case study cards with alternating image-text layouts
- Large project preview area (dashboard screenshot mockup with blur-behind-text for metrics overlay)
- Project title, description, tech stack chips, impact metrics in 3-column grid
- "View Details" link
- Each project gets 1 full viewport section with generous padding

### Work Experience Timeline
**Component**: Single-column timeline with connector line
- Company logo placeholder (left), role/dates/achievements (right)
- Key metrics highlighted in bold or accent treatment
- Bullet points with checkmark icons (Heroicons)

### Certifications
**Component**: Simple 3-column card grid
- Certification badge icon, title, issuing organization, year
- Subtle border, clean presentation

### Contact Section
**Layout**: 2-column split
- Left: Contact form (Name, Email, Message fields, Submit button)
- Right: Direct contact info (email, LinkedIn, phone with icons), "Open to opportunities" badge

### Footer
- Quick links, social icons (LinkedIn, GitHub if applicable), copyright notice
- "Built with modern web technologies" tag

---

## Images

**Hero Section**: Professional headshot (256x256 to 512x512px) with subtle circular or rounded-square frame, positioned right side with data visualization accent pattern overlay (think: subtle line charts or dot matrix pattern in background)

**Project Showcases**: Dashboard/analytics screenshots (1200x800px mockups recommended). Use subtle shadows and border radius. If actual screenshots unavailable, use placeholder with descriptive text like "SS-MIS Analytics Dashboard - Patient Journey Funnel Visualization"

**Large Hero Image**: No full-width background hero image. Use clean gradient or solid background with geometric patterns instead.

---

## Key Differentiators

- **Data-Driven Aesthetic**: Incorporate subtle chart/graph visual elements as decorative accents (not functional)
- **Metrics First**: Numbers (40% reduction, 8+ dashboards, 500+ users) prominently displayed in hero and project cards
- **Professional Trust Signals**: Certification badges, tech stack chips, quantified impact
- **Scannable Hierarchy**: Hiring managers should grasp key info in 10 seconds

**Icons**: Use Heroicons exclusively via CDN for consistency

**Animations**: Minimal - subtle fade-ins on scroll, gentle hover elevations only. No distracting motion.