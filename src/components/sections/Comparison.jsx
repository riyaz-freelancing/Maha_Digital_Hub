import React from "react"
import { motion } from "framer-motion"
import { Check, X, Sparkles, ShieldCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const COMPARISONS = [
  {
    feature: "Monthly Content Output",
    other: "3 to 4 generic static posts, irregular scheduling",
    maha: "10 Viral Video Reels + 30 Premium Creative Designs monthly",
  },
  {
    feature: "Paid Advertising Focus",
    other: "Basic 'Boost Post' buttons with zero funnel tracking",
    maha: "Advanced Meta & Google conversion funnels with Pixel & ROAS optimization",
  },
  {
    feature: "Website Performance",
    other: "Bloated, slow WordPress templates (3-5s load time)",
    maha: "Clean, ultra-fast code loading in <1.2s with 95+ Google PageSpeed",
  },
  {
    feature: "Pricing Transparency",
    other: "Hidden retainer surprises, vague hourly billing",
    maha: "100% transparent fixed packages (₹19,999 marketing / ₹12,000 web)",
  },
  {
    feature: "Turnaround & Support",
    other: "Days of silence, generic customer support tickets",
    maha: "Direct WhatsApp group with founders, bi-weekly performance updates",
  },
]

export function Comparison() {
  return (
    <section className="py-24 relative bg-white border-t border-slate-200 overflow-hidden">
      <div className="container-wide relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="blue" className="px-3.5 py-1 text-xs">
            Business Focus Over Vanity Metrics
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 font-display tracking-tight">
            Why Ambitious Brands <span className="text-blue-600">Choose Us</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Compare our revenue-first operational model against typical generic agencies and hit-or-miss freelancers.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-lg">
          
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 p-6 bg-slate-50 border-b border-slate-200 text-xs font-mono font-bold tracking-wider uppercase text-slate-500">
            <div className="md:col-span-4">Strategic Capability</div>
            <div className="hidden md:block md:col-span-4 text-slate-500">Generic Agencies &amp; Freelancers</div>
            <div className="hidden md:block md:col-span-4 text-amber-700 flex items-center gap-1.5 font-bold">
              <Sparkles className="w-3.5 h-3.5 fill-amber-500" />
              <span>Maha Digital Hub Standard</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-100">
            {COMPARISONS.map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-1 md:grid-cols-12 p-6 gap-4 items-center hover:bg-slate-50/60 transition-colors"
              >
                {/* Feature Title */}
                <div className="md:col-span-4">
                  <div className="font-bold text-slate-900 text-base font-display">
                    {row.feature}
                  </div>
                </div>

                {/* Generic Agencies */}
                <div className="md:col-span-4 flex items-start gap-3 text-slate-500 text-sm">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 border border-red-200">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>{row.other}</span>
                </div>

                {/* Maha Digital Hub */}
                <div className="md:col-span-4 flex items-start gap-3 text-slate-900 text-sm font-semibold bg-amber-50/60 p-3.5 rounded-xl border border-amber-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-950 font-bold">{row.maha}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Summary Bar */}
          <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2.5 text-xs text-slate-600 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Backed by guaranteed monthly output and zero lock-in contracts.</span>
            </div>
            <a href="#packages" className="text-xs font-bold uppercase tracking-wider text-amber-700 hover:text-amber-900 flex items-center gap-1 transition-colors font-mono">
              <span>View Transparent Packages &rarr;</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
