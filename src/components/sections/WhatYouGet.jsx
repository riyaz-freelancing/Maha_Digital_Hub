import React from "react"
import { motion } from "framer-motion"
import { Eye, Users, CalendarCheck, BarChart3 } from "lucide-react"
import { WHAT_YOU_GET } from "@/data/services"
import { Badge } from "@/components/ui/badge"

const BENEFIT_ICONS = {
  Eye: Eye,
  Users: Users,
  CalendarCheck: CalendarCheck,
  BarChart3: BarChart3,
}

const ACCENT_STYLES = {
  yellow: {
    bg: "bg-amber-100",
    border: "border-amber-200",
    text: "text-amber-800",
    glow: "hover:border-amber-400",
  },
  cyan: {
    bg: "bg-blue-100",
    border: "border-blue-200",
    text: "text-blue-800",
    glow: "hover:border-blue-400",
  },
  pink: {
    bg: "bg-pink-100",
    border: "border-pink-200",
    text: "text-pink-800",
    glow: "hover:border-pink-400",
  },
  green: {
    bg: "bg-emerald-100",
    border: "border-emerald-200",
    text: "text-emerald-800",
    glow: "hover:border-emerald-400",
  },
}

export function WhatYouGet() {
  return (
    <section className="py-20 relative bg-[#F0F6FE] border-t border-slate-200 overflow-hidden">
      <div className="container-wide relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <Badge variant="blue" className="px-3.5 py-1 text-xs">
            Measurable ROI
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display">
            What You Get Working With <span className="text-blue-600">Maha Digital Hub</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            We don’t just deliver vanity metrics; we build compounding marketing assets for your long-term success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHAT_YOU_GET.map((item, index) => {
            const Icon = BENEFIT_ICONS[item.icon] || Eye
            const style = ACCENT_STYLES[item.accent] || ACCENT_STYLES.yellow

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`p-8 rounded-3xl bg-white border border-slate-200 transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] shadow-sm ${style.glow}`}
              >
                {/* Icon Circle */}
                <div
                  className={`w-16 h-16 rounded-2xl mx-auto sm:mx-0 flex items-center justify-center mb-5 border shadow-inner ${style.bg} ${style.border} ${style.text} transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 stroke-[2.2]" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 text-center sm:text-left font-display">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed text-center sm:text-left">
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
