import React from "react"
import { motion } from "framer-motion"
import { Search, Compass, Palette, Code2, Rocket, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const PROCESS_STEPS = [
  {
    step: "01",
    phase: "Discover",
    title: "Customer Profiles & Revenue Goals",
    desc: "We analyze your ideal buyer persona, regional competitors, profit margins, and past marketing roadblocks. No cookie-cutter assumptions.",
    icon: Search,
    color: "#D97706",
    tags: ["Competitor Audit", "Target Audience", "KPI Definition"],
  },
  {
    step: "02",
    phase: "Strategy",
    title: "Funnel & Content Architecture",
    desc: "We build your bespoke 30-day content calendar, identify viral reel hooks, select high-intent Google keywords, and design the ad conversion funnel.",
    icon: Compass,
    color: "#0284C7",
    tags: ["Reel Scripting", "Keyword Research", "Ad Funnel Map"],
  },
  {
    step: "03",
    phase: "Design",
    title: "Scroll-Stopping Visual Production",
    desc: "Our editors and motion designers craft 10 high-retention video reels, 30 premium creative designs, and modern responsive website layouts.",
    icon: Palette,
    color: "#DB2777",
    tags: ["9:16 Video Cuts", "Carousel Graphics", "Brand Identity"],
  },
  {
    step: "04",
    phase: "Develop",
    title: "Fast, Accessible, Clean Engineering",
    desc: "Clean website development with sub-second load times, mobile-first touch optimization, SEO metadata, and interactive WhatsApp conversion CTAs.",
    icon: Code2,
    color: "#16A34A",
    tags: ["Ultra-fast Code", "Mobile Ready", "Schema Markup"],
  },
  {
    step: "05",
    phase: "Launch",
    title: "Rigorous QA & Campaign Deployment",
    desc: "We configure Meta Pixels, Google Conversion Tracking, cross-device testing, and launch your paid campaigns with strict A/B testing budgets.",
    icon: Rocket,
    color: "#D97706",
    tags: ["Pixel Setup", "Conversion Tracking", "A/B Testing"],
  },
  {
    step: "06",
    phase: "Scale",
    title: "Continuous Optimization & ROI Growth",
    desc: "Daily ad monitoring, audience retargeting, bi-weekly performance reviews, and doubling down on creative formats that produce paying customers.",
    icon: TrendingUp,
    color: "#2563EB",
    tags: ["Retargeting", "ROAS Scaling", "Transparent Reports"],
  },
]

export function Process() {
  return (
    <section id="process" className="py-24 relative bg-white border-t border-slate-200 overflow-hidden">
      <div className="container-wide relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="gold" className="px-3.5 py-1 text-xs">
            The Proven Growth Blueprint
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 font-display tracking-tight">
            Six Gears. <span className="text-amber-500">Zero Guesswork.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We don’t burn ad budgets on hunches. Every video, social graphic, and line of code follows a disciplined, 6-step revenue-focused methodology.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative p-8 rounded-3xl bg-slate-50/80 border border-slate-200 hover:border-amber-400 hover:bg-white transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm"
                      style={{ backgroundColor: `${step.color}15`, color: step.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase font-bold tracking-widest px-2.5 py-1 rounded bg-white text-slate-700 border border-slate-200">
                        {step.phase}
                      </span>
                      <span className="text-2xl font-black text-slate-400 font-display">
                        {step.step}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-snug font-display">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-wrap gap-1.5 font-mono">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white text-slate-600 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
