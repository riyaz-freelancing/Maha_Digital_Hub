/**
 * Pricing data & Contact constants for Maha Digital Hub
 * Edit prices here without modifying any JSX components.
 */

export const CONTACT_INFO = {
  phone: "+91 95736 36632",
  phoneRaw: "+919573636632",
  whatsappNumber: "919573636632",
  whatsappRaw: "919573636632",
  whatsappFormatted: "+91 95736 36632",
  instagramHandle: "@mahaa_digital_hub",
  instagramUrl: "https://instagram.com/mahaa_digital_hub",
  email: "contact@mahadigitalhub.com",
  address: "Hyderabad & Andhra Pradesh, India",
}

export const WEBSITE_PRICING_INFO = {
  startingPrice: "₹10,000",
  max3DPrice: "₹35,000",
  rangeDisplay: "₹10,000 – ₹35,000",
  codingNotWordpress: "100% Custom Coded Websites (Pure Code • No WordPress • No Pre-made Themes)",
  postLaunchSetup: "Google Search Console, Google Analytics 4, XML Sitemaps & Basic SEO Setup Included",
  staticHostingIncluded: true,
  staticHostingText: "Static website hosting is provided by us (100% Free Included)",
  domainHostingResponsibilityText: "Domain name and dynamic/server hosting are the client's responsibility (we assist with complete DNS and server configuration)",
  customRequirementText: "Every website is custom engineered as per client requirements and business scope.",
}

export const PRICING_PACKAGES = [
  {
    id: "real-estate-growth",
    name: "Real Estate Growth & Lead Generation",
    tagline: "Daily property posts, cinematic walkthrough videos & precision ads targeting for builders & agents",
    originalPrice: "₹35,000",
    offerPrice: "₹24,999",
    period: "/month",
    badge: "REAL ESTATE SPECIALIST",
    ribbonText: "DAILY POSTS • 15+ VIDEOS • HIGH-INTENT BUYER LEADS",
    popular: true,
    accentColor: "emerald",
    category: "Real Estate",
    description: "Built specifically for Open Plot Developers, Builders, Real Estate Agencies, and Luxury Project Promoters to drive site visits and genuine buyer inquiries.",
    features: [
      "30 Daily Property Creative Posts (1 Daily: Project launch posters, 2BHK/3BHK plans, location perks & pricing alerts)",
      "15 High-Impact Cinematic Walkthrough Videos & Drone Reels (Site tours, sample flat views & investor ROI breakdowns)",
      "Meta Ads Management (Hyper-local geo-fencing 5–20 km radius targeting high-net-worth buyers & NRI investors)",
      "Google Search & Map Ads Targeting ('Plots for sale near me', 'Flats in [City]', 'Commercial space for lease')",
      "Custom Ad Budget Planning & Strategy (Recommended ₹500–₹2,000/day ad spend allocated for lowest cost-per-lead)",
      "100% Direct Ad Spend Transparency (Client pays ad spend directly to Meta/Google with zero agency markup)",
      "Instant WhatsApp Lead Routing (Inquiries with Name, Phone & Unit Preference sent to your sales team in seconds)",
      "Site Visit Retargeting Campaigns (Turn warm video viewers into on-site property visitors with urgency triggers)",
      "Google Business Profile & Local Map Pack Ranking Optimization",
      "Dedicated Real Estate Campaign Manager & Weekly Lead Quality Reviews"
    ],
    whatsappMessage: "Hi Maha Digital Hub! I'm interested in the Real Estate Growth & Lead Generation Package at ₹24,999 (Daily posts, walkthrough videos, and targeted ads).",
    ctaText: "Book Real Estate Package",
  },
  {
    id: "marketing-complete",
    name: "Complete Digital Marketing Package",
    tagline: "The all-in-one monthly growth engine for ambitious brands & service businesses",
    originalPrice: "₹25,000",
    offerPrice: "₹19,999",
    period: "/month",
    badge: "MOST POPULAR",
    ribbonText: "COMPLETE 4-PERSON MARKETING & VIDEO SQUAD",
    popular: false,
    accentColor: "amber",
    category: "All-in-One",
    description: "Includes all 6 core marketing services to dominate social media, run high-converting ads, and generate consistent leads for any growing business.",
    features: [
      "10 High-impact Video Content (Reels, Shorts, YouTube) with AI motion editing & subtitles",
      "30 Premium Social Media Creative Designs & Promotional Banners (1 Daily content schedule)",
      "Full Meta Ads Setup & Optimization (Facebook & Instagram lead generation and sales campaigns)",
      "High-Intent Google Ads (Search, Display & YouTube targeting for customer acquisition)",
      "Transparent Ads Budget Strategy (Flexible daily ad spend guidance based on your monthly revenue goals)",
      "Dedicated Social Media Management & Monthly Growth Insights",
      "Complete Brand Identity guidance, color schemes & typography alignment",
      "Dedicated Campaign Account Manager & Direct WhatsApp Support",
      "Bi-weekly Performance Reports, Conversion Tracking & ROAS Optimization"
    ],
    whatsappMessage: "Hi Maha Digital Hub! I'm interested in the Complete Digital Marketing Package at ₹19,999",
    ctaText: "Book Marketing Package",
  },
  {
    id: "daily-social-reels",
    name: "Daily Social & Reels Acceleration",
    tagline: "Daily posting consistency, viral short-form videos & organic brand reach",
    originalPrice: "₹18,000",
    offerPrice: "₹14,999",
    period: "/month",
    badge: "ORGANIC SOCIAL",
    ribbonText: "DAILY 30 POSTS + 12 VIRAL REELS",
    popular: false,
    accentColor: "purple",
    category: "Social Media",
    description: "Ideal for Clinics, Retail Shops, Restaurants, Coaches & Local Brands who want daily brand visibility without running heavy paid ads.",
    features: [
      "30 Daily Custom Social Media Posters (1 post published every single day of the month)",
      "12 Viral Reels & Short Videos (Engaging hooks, trending audio & professional cuts)",
      "Story Strategy & Interactive Polls / Stickers for daily community engagement",
      "Targeted Hashtag Research & Caption Copywriting for maximum discoverability",
      "Profile Optimization (Bio revamp, highlight covers & cohesive grid aesthetic)",
      "Monthly Content Calendar planned and approved 5 days in advance",
      "Dedicated Content Creator & WhatsApp support channel",
      "Performance summary & monthly reach growth review"
    ],
    whatsappMessage: "Hi Maha Digital Hub! I'm interested in the Daily Social & Reels Acceleration Pack at ₹14,999",
    ctaText: "Get Daily Social Pack",
  },
  {
    id: "website-development",
    name: "Custom Website Development",
    tagline: "100% Custom Coded (No WordPress) • Starting ₹10,000 to 3D ₹35,000",
    originalPrice: "₹15,000 – ₹45,000",
    offerPrice: "₹10,000 – ₹35,000",
    period: "as per scope",
    badge: "NO WORDPRESS • PURE CODE",
    ribbonText: "CUSTOM CODED • GSC, GA4 & BASIC SEO INCLUDED",
    popular: false,
    accentColor: "blue",
    category: "Web Studio",
    description: "We build custom coded websites—never slow WordPress themes or bloated templates. After building, we set up Google Search Console, Google Analytics, XML Sitemaps, and basic SEO.",
    features: [
      "100% Custom Coded (Pure React, Tailwind & JS • Zero WordPress bloat • No templates)",
      "Google Search Console Setup & Ownership Verification after build",
      "Google Analytics 4 (GA4) Integration & Live User Traffic Tracking",
      "XML Sitemap Generation & Direct Submission to Google for fast indexing",
      "Basic On-Page SEO Setup (Meta titles, descriptions, semantic tags & OpenGraph)",
      "Starting price ₹10,000 for responsive sites up to ₹35,000 for 3D interactive portals",
      "✅ Free Static Website Hosting PROVIDED BY US (Included)",
      "ℹ️ Domain & dynamic server: Client responsibility (complete DNS setup assistance)",
      "Mobile-first responsive design, contact forms & WhatsApp click-to-chat integration",
      "1 Month complimentary post-launch technical support & maintenance"
    ],
    whatsappMessage: "Hi Maha Digital Hub! I'm interested in a Custom Coded Website (Starting ₹10k to 3D ₹35k) with Google Search Console & Analytics setup.",
    ctaText: "Get Website Quote",
  }
]

export const PRICING_NOTE = "We build 100% custom coded websites (no WordPress / no themes). Starting price is ₹10,000 up to ₹35,000 for 3D interactive websites as per client requirements. Post-launch Google Search Console, Google Analytics 4, XML sitemaps, and basic SEO are included. Static website hosting is provided by us for free. Domain and dynamic server hosting are client's responsibility. Ad spend budget is paid directly to Meta/Google by client with zero agency markup. Prices in INR."
