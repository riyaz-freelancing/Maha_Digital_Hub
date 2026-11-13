import React from "react"
import { motion } from "framer-motion"
import { XCircle, CheckCircle2, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const CASE_STUDIES = [
  {
    category: "Restaurant & Cafe Chain",
    client: "Spice Heritage Kitchen",
    metric: "3.2x Dine-in Footfall",
    before: {
      items: [
        "Inconsistent, blurry mobile phone photos posted irregularly",
        "Zero video reels or engaging audio sync",
        "Wasting ₹15,000/month on generic 'Boost Post' with no tracking",
      ],
    },
    after: {
      items: [
        "10 mouth-watering 4K food reels with trending audio per month",
        "30 designer festival & weekend offer carousels",
        "Hyper-local Meta & Google ads generating 450k+ local reach",
      ],
    },
  },
  {
    category: "Dental & Aesthetics Clinic",
    client: "DentCare Multispecialty",
    metric: "320+ Booked Appointments",
    before: {
      items: [
        "Slow 5-second WordPress website with broken mobile layout",
        "No online consultation scheduler or WhatsApp click-to-chat",
        "Ranking on page 4 of Google for local dental keywords",
      ],
    },
    after: {
      items: [
        "Sub-second modern responsive website with instant WhatsApp booking",
        "High-intent Google Search advertising targeting emergency dental care",
        "Ranked #1 on Google Local 3-Pack within 60 days",
      ],
    },
  },
  {
    category: "Retail & Luxury Living",
    client: "Apex Luxury Living",
    metric: "8.4x Return on Ad Spend",
    before: {
      items: [
        "Low-converting static images with ₹180+ cost per inquiry",
        "No Meta Pixel or conversion event tracking installed",
        "Relying solely on expensive offline newspaper ads & flyers",
      ],
    },
    after: {
      items: [
        "Cinematic video walk-through reels targeting high-net-worth buyers",
        "Full Meta Pixel funnel capturing qualified leads at ₹42 each",
        "8.4x verified return on ad spend (ROAS) generated",
      ],
    },
  },
]

export function BeforeAfter() {
  return (
    <section className="py-24 relative bg-[#F0F6FE] border-t border-slate-200 overflow-hidden">
      <div className="container-wide relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="blue" className="px-3.5 py-1 text-xs">
            Measured Client Outcomes
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 font-display tracking-tight">
            Before Versus <span className="text-blue-600">After</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            See the concrete transformation when businesses switch from hit-or-miss marketing to Maha Digital Hub's disciplined growth system.
          </p>
        </div>

        {/* 3 Detailed Comparisons */}
        <div className="space-y-8">
          {CASE_STUDIES.map((cs, idx) => (
            <motion.div
              key={cs.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-md"
            >
              {/* Header Bar */}
              <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-mono uppercase font-bold tracking-wider text-blue-600">
                    {cs.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 font-display mt-0.5">
                    {cs.client}
                  </h3>
                </div>

                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-800">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span>{cs.metric}</span>
                </div>
              </div>

              {/* Side-by-side Before vs After */}
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                {/* BEFORE */}
                <div className="p-6 sm:p-8 bg-red-50/40 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-red-700">
                    <XCircle className="w-4 h-4 text-red-500" />
                    <span>Before Maha Digital Hub</span>
                  </div>
                  <ul className="space-y-3">
                    {cs.before.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                        <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* AFTER */}
                <div className="p-6 sm:p-8 bg-emerald-50/40 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>After Maha Digital Hub</span>
                  </div>
                  <ul className="space-y-3">
                    {cs.after.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-900 font-medium">
                        <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
