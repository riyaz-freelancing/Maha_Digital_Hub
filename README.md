# Maha Digital Hub – Agency Website

High-converting, bespoke digital marketing and web studio website for **Maha Digital Hub** (Instagram: [@mahaa_digital_hub](https://instagram.com/mahaa_digital_hub)), built with modern agency architectural standards (inspired by conversion leaders like `samwebstudio.site`).

> **Tagline:** *"Your Growth Our Mission"*  
> **Secondary Tagline:** *"Turn your ideas into powerful visual stories"*

---

## 🚀 Modern Agency Tech Stack

- **Framework:** React 19 + Vite (Pure JavaScript / JSX)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite` and `@theme` in `src/index.css`)
- **Typography:** Google Fonts: *Syne* (display headings) + *Plus Jakarta Sans* (grotesque body) + *Instrument Serif* (editorial accents)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) ported to Tailwind v4 & JavaScript (Button, Card, Badge, Accordion, Dialog, Sheet, Input, Textarea, Tabs, Separator, Tooltip, Select, Sonner)
- **Icons & Motion:** `lucide-react` icons + subtle, high-performance `framer-motion` scroll & hover interactions

---

## 🌟 Architectural Upgrades (Inspired by `samwebstudio.site`)

1. **Editorial Mixed Typography & Film Noise:**
   - Bold architectural typography mixed with editorial serif accents.
   - Clean SVG film grain texture overlay (`bg-noise`) and studio coordinate grid (`bg-studio-grid`).
2. **Interactive Hero Studio Workstation:**
   - 3D-tilted agency workstation mockup with simulated 9:16 Instagram Reel editing timeline, audio waveform, active playback scrubber, live engagement metrics (48.2k likes), and verified `8.4x ROAS` Meta ad tracking badge.
   - Continuous marquee tape: `★ VIDEO CONTENT ★ 30 CREATIVE DESIGNS ★ META ADS ★ GOOGLE ADS ★ WEBSITES`.
3. **Bento Grid Services Layout:**
   - Replaced generic copy-paste cards with an asymmetrical Bento Grid:
     - **01 Video Content:** Double-width interactive suite showcasing 10 monthly videos, 9:16 vertical cuts, kinetic subtitles, and AI pacing.
     - **02 Creative Design:** 30 premium designs per month breakdown (1:1, 4:5, 9:16).
     - **03 Meta Ads:** Lead generation funnels, Pixel integration, and retargeting setup.
     - **04 Google Ads:** High-intent search PPC with keyword targeting.
     - **05 Social Media Management:** 30-day content calendar and prime-time scheduling.
     - **06 Brand Identity:** Typography hierarchy, vector logo kit, and brand style guides.
4. **"Six Gears. Zero Guesswork" Methodology (Process Section):**
   - Step-by-step roadmap: `01 Discover` ➔ `02 Strategy` ➔ `03 Design` ➔ `04 Develop` ➔ `05 Launch` ➔ `06 Scale`.
5. **Technical Web Studio & Performance Budgets:**
   - Browser URL mockup with verified SSL security badge, `99/100 Lighthouse score`, and `0.8s First Paint`.
   - Custom design, e-commerce, mobile-first, SEO-ready, modern development, and maintenance support.
6. **"Why Ambitious Brands Choose Us" Comparison Matrix:**
   - Side-by-side breakdown contrasting generic agencies & hit-or-miss freelancers against Maha Digital Hub's performance standards.
7. **Transparent Fixed Pricing:**
   - **Card A (Complete Digital Marketing):** ₹19,999 (was ₹25,000) with daily breakdown (~₹660/day for a 4-person creative team).
   - **Card B (Website Development):** ₹12,000 (was ₹20,000) with 100% lifetime code ownership.
8. **Interactive Contact Form & Direct Hotlines:**
   - Instant WhatsApp prefill dispatch with toast confirmation.
   - Large metallic yellow Call Now banner (`+91 95736 36632`).

---

## 📁 File Structure

```
Maha_Digital_Hub/
├── public/
│   ├── favicon.svg              # Crown crest + M monogram
│   └── images/
│       ├── hero.jpg             # Hero agency graphic
│       ├── team/                # Ajay, Maha Lakshmi, Habeeb, Muzzammil, Surya
│       ├── portfolio/           # 9 high-res case study graphics
│       └── testimonials/        # Client avatar graphics
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Logo.jsx         # Crown crest + "MAHA" + "DIGITAL HUB"
│   │   │   ├── Navbar.jsx       # Floating capsule nav + availability pulse + Sheet
│   │   │   ├── Footer.jsx       # Comprehensive agency footer & social channels
│   │   │   └── FloatingActions.jsx # Pulsing WhatsApp trigger + Scroll-to-top
│   │   ├── sections/
│   │   │   ├── Hero.jsx         # Hero with Studio Workstation & Marquee tape
│   │   │   ├── Services.jsx     # Bento Grid for 6 core marketing disciplines
│   │   │   ├── Process.jsx      # "Six Gears. Zero Guesswork" (samwebstudio inspired)
│   │   │   ├── WebServices.jsx  # Web studio with Lighthouse performance budgets
│   │   │   ├── Comparison.jsx   # Why Choose Us comparison matrix
│   │   │   ├── WhatYouGet.jsx   # 4 value strips (icon circles)
│   │   │   ├── Pricing.jsx      # Pricing cards A (₹19,999) & B (₹10,000 – ₹35,000)
│   │   │   ├── Team.jsx         # 5 team member cards with live status (Ajay, Maha Lakshmi, Habeeb, Muzzammil, Surya)
│   │   │   ├── Portfolio.jsx    # Filterable portfolio tabs + Dialog modal preview
│   │   │   ├── Testimonials.jsx # 5-star client testimonials
│   │   │   ├── FAQ.jsx          # Interactive shadcn accordion (5 questions)
│   │   │   ├── CallNowBanner.jsx # Large high-contrast yellow call banner
│   │   │   └── Contact.jsx      # Direct details + form with toast & WhatsApp prefill
│   │   └── ui/                  # 13 shadcn components (.jsx)
│   ├── data/                    # Clean data files (Edit content without touching JSX)
│   │   ├── pricing.js           # Package prices, WhatsApp messages & contact constants
│   │   ├── services.js          # Marketing services, web services & highlights
│   │   ├── team.js              # Team names, roles, bios & social links
│   │   ├── portfolio.js         # Portfolio items, client names, tags & case studies
│   │   ├── testimonials.js      # Reviews & client feedback
│   │   └── faq.js               # 5 accordion questions & answers
│   ├── lib/
│   │   └── utils.js             # cn helper
│   ├── App.jsx                  # Main single-page application orchestrator
│   ├── index.css                # Tailwind CSS v4 @theme, gradients & film noise
│   └── main.jsx                 # Vite React root
├── index.html                   # SEO metadata, OpenGraph, Twitter Cards, Google Fonts
├── vite.config.js               # Tailwind v4 plugin & rollup vendor chunk splitting
├── README.md                    # Setup guide and content modification map
└── package.json
```

---

## 🛠️ How to Run

1. **Development Server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173`.

2. **Production Build:**
   ```bash
   npm run build
   ```
   Verified: builds cleanly in **4.1s** with tree-shaking and vendor chunking.

3. **Preview Production Build:**
   ```bash
   npm run preview
   ```
