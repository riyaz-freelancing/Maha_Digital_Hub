import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  Building2,
  UtensilsCrossed,
  Stethoscope,
  Scissors,
  ShoppingBag,
  Briefcase,
  ArrowRight,
  RotateCw,
  Check,
  Zap,
  MessageCircle,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { CONTACT_INFO } from "@/data/pricing"

const SECTORS = [
  {
    id: "real-estate",
    title: "Real Estate & Architecture",
    desc: "Luxury video walk-throughs, 3D render showcase reels, and high-net-worth Meta lead generation funnels.",
    icon: Building2,
    stat: "₹42 Cost/Lead",
    color: "#D97706",
    badgeBg: "bg-amber-50 text-amber-800 border-amber-200",
    playbookTitle: "Real Estate Acquisition Playbook",
    playbookHighlights: [
      "Cinematic drone-style walk-throughs & 3D project reels",
      "Hyper-local 5–15km geo-fenced Meta & Google Ads",
      "Instant WhatsApp lead routing straight to sales executives",
      "Retargeting warm video viewers to book on-site visits",
    ],
    expectedRoi: "35–60 Site Visits / month",
  },
  {
    id: "salons-beauty",
    title: "Salons, Spas & Beauty Clinics",
    desc: "Before/after transformation reels, Instagram booking funnels, and weekend promotional creative packages.",
    icon: Scissors,
    stat: "+220% Appointments",
    color: "#DB2777",
    badgeBg: "bg-pink-50 text-pink-800 border-pink-200",
    playbookTitle: "Beauty & Wellness Booking Playbook",
    playbookHighlights: [
      "High-retention before & after transformation reels",
      "Direct Instagram DM & WhatsApp appointment booking funnels",
      "Weekend offer creative posters & festive package ads",
      "Google Maps review boost & local neighborhood discovery",
    ],
    expectedRoi: "2.2x Weekly Slot Bookings",
  },
  {
    id: "restaurants-food",
    title: "Restaurants, Cafes & Food",
    desc: "Mouth-watering 4K food reels, local Google Maps ranking, festive discount menus, and weekend footfall campaigns.",
    icon: UtensilsCrossed,
    stat: "3.2x Dine-in Footfall",
    color: "#0284C7",
    badgeBg: "bg-sky-50 text-sky-800 border-sky-200",
    playbookTitle: "F&B Dine-In & Delivery Playbook",
    playbookHighlights: [
      "Mouth-watering 4K chef preparation & viral food reels",
      "Google Maps local #1 rank for 'Best Cafe/Food near me'",
      "Weekend event, buffet promotion & festive discount campaigns",
      "Food blogger collaborations & viral audio trends",
    ],
    expectedRoi: "3.2x Weekend Dine-in Rush",
  },
  {
    id: "healthcare-wellness",
    title: "Healthcare, Dental & Wellness",
    desc: "Patient trust-building educational videos, high-intent Google Search advertising, and appointment scheduler websites.",
    icon: Stethoscope,
    stat: "320+ Patients / 60 Days",
    color: "#16A34A",
    badgeBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
    playbookTitle: "Patient Trust & Acquisition Playbook",
    playbookHighlights: [
      "Doctor authority video snippets answering patient FAQs",
      "High-intent Google Search Ads ('Best Dentist / Clinic near me')",
      "Custom responsive appointment scheduler web portal",
      "Patient testimonial videos & ethical healthcare branding",
    ],
    expectedRoi: "150+ Direct Inquiries / month",
  },
  {
    id: "retail-ecommerce",
    title: "Retail & E-Commerce Brands",
    desc: "Product unboxing videos, catalog carousel ads, Shopify / custom fast storefronts, and abandoned cart retargeting.",
    icon: ShoppingBag,
    stat: "8.4x Verified ROAS",
    color: "#D97706",
    badgeBg: "bg-amber-50 text-amber-800 border-amber-200",
    playbookTitle: "Direct-to-Consumer (D2C) Scaling Playbook",
    playbookHighlights: [
      "Viral unboxing, customer reaction & problem-solving reels",
      "Dynamic Meta product catalog carousel ads & remarketing",
      "Ultra-fast custom coded storefront with 1-click checkout",
      "Automated WhatsApp abandoned cart recovery & flash sales",
    ],
    expectedRoi: "4.5x – 8.4x Ad Spend Return (ROAS)",
  },
  {
    id: "corporate-b2b",
    title: "Corporate & Professional Firms",
    desc: "Executive LinkedIn authority posts, sleek corporate web portals, and B2B client acquisition campaigns.",
    icon: Briefcase,
    stat: "Top Google Ranks",
    color: "#2563EB",
    badgeBg: "bg-blue-50 text-blue-800 border-blue-200",
    playbookTitle: "B2B Authority & Inbound Lead Playbook",
    playbookHighlights: [
      "Executive LinkedIn thought leadership & case study carousels",
      "B2B Google Search ads capturing high-intent corporate contracts",
      "Ultra-clean corporate portfolio website with client proof",
      "Email newsletter nurturing & strategic pitch deck design",
    ],
    expectedRoi: "High-Ticket Retainer Pipeline",
  },
]

export function Sectors() {
  const [flippedCards, setFlippedCards] = useState({})

  const toggleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <section id="sectors" className="py-24 relative bg-[#F0F6FE] border-t border-slate-200 overflow-hidden">
      <div className="container-wide relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <Badge variant="blue" className="px-3.5 py-1 text-xs">
            Sector-Specific Playbooks
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 font-display tracking-tight">
            Built Specifically For <span className="text-blue-600">Your Industry</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We don’t do generic marketing. Every industry has unique buyer psychology, hooks, and sales funnels. <strong className="text-slate-900 font-semibold">Click any card to flip and view the playbook.</strong>
          </p>
          <div className="pt-1 flex items-center justify-center gap-2 text-xs font-mono text-slate-500">
            <RotateCw className="w-3.5 h-3.5 text-blue-600 animate-spin" style={{ animationDuration: "6s" }} />
            <span>Interactive 3D Cards • Click to Flip</span>
          </div>
        </div>

        {/* 3D Animated Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SECTORS.map((sector, idx) => {
            const Icon = sector.icon
            const isFlipped = !!flippedCards[idx]

            return (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="w-full h-[330px] sm:h-[310px] [perspective:1000px] cursor-pointer select-none"
                onClick={() => toggleFlip(idx)}
              >
                <motion.div
                  className="w-full h-full relative [transform-style:preserve-3d]"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                >
                  
                  {/* FRONT FACE OF CARD */}
                  <div
                    className="absolute inset-0 w-full h-full p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between [backface-visibility:hidden] [-webkit-backface-visibility:hidden] shadow-sm group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm"
                          style={{ backgroundColor: `${sector.color}15`, color: sector.color }}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${sector.badgeBg}`}>
                          {sector.stat}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 font-display group-hover:text-blue-600 transition-colors">
                        {sector.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                        {sector.desc}
                      </p>
                    </div>

                    {/* Bottom Flip Prompt */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-blue-600 group-hover:text-blue-800 transition-colors">
                      <span className="flex items-center gap-1.5">
                        <span>Click to Flip Playbook</span>
                        <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
                      </span>
                      <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* BACK FACE OF CARD (Revealed on 3D Flip) */}
                  <div
                    className="absolute inset-0 w-full h-full p-6 sm:p-7 rounded-3xl bg-slate-950 text-white border-2 border-blue-500/50 shadow-2xl flex flex-col justify-between [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)]"
                  >
                    <div>
                      {/* Top Bar on Back */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-amber-400" />
                          <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                            {sector.playbookTitle}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleFlip(idx)
                          }}
                          className="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-[10px] font-mono text-slate-300 hover:text-white flex items-center gap-1 border border-slate-700 transition-colors"
                        >
                          <RotateCw className="w-3 h-3 text-amber-400" />
                          <span>Flip Back</span>
                        </button>
                      </div>

                      {/* Deliverables Bullet List */}
                      <ul className="space-y-1.5 mt-2">
                        {sector.playbookHighlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-200">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5 stroke-[3]" />
                            <span className="leading-snug">{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Expected ROI Tag */}
                      <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono font-bold text-amber-400">
                        <Zap className="w-3 h-3 fill-amber-400 shrink-0" />
                        <span>Expected Output: {sector.expectedRoi}</span>
                      </div>
                    </div>

                    {/* Bottom Action on Back: WhatsApp Direct */}
                    <div className="pt-3 border-t border-slate-800/80">
                      <a
                        href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                          `Hi Maha Digital Hub! I'd like to implement the ${sector.title} Playbook for my business.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full py-2 px-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-transform hover:scale-[1.02]"
                      >
                        <MessageCircle className="w-4 h-4 fill-slate-950" />
                        <span>Discuss Playbook on WhatsApp</span>
                      </a>
                    </div>

                  </div>

                </motion.div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
