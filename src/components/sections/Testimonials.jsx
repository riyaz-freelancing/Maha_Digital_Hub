import React from "react"
import { motion } from "framer-motion"
import { Star, Quote, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TESTIMONIALS } from "@/data/testimonials"

export function Testimonials() {
  return (
    <section className="py-24 relative bg-[#F0F6FE] border-t border-slate-200 overflow-hidden">
      <div className="container-wide relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="green" className="px-4 py-1 text-xs">
            Client Feedback
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 font-display tracking-tight">
            Trusted by <span className="text-blue-600">Ambitious Brands</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            See how our visual storytelling and performance marketing have delivered tangible growth for businesses.
          </p>
          <div className="inline-block mt-2">
            <span className="text-xs uppercase font-bold tracking-wider px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-mono">
              Note: Sample Client Testimonials (Replace with Real Client Reviews)
            </span>
          </div>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <Card className="h-full border-slate-200 bg-white hover:border-blue-400 transition-all duration-300 p-8 flex flex-col justify-between shadow-md relative group rounded-3xl">
                
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-slate-300 group-hover:text-blue-400 transition-colors mb-4" />

                <div>
                  {/* 5-Star Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Highlight pill */}
                  <div className="mb-3">
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full inline-block font-mono">
                      {t.highlight}
                    </span>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed italic">
                    "{t.content}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-base shadow-sm font-display">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5 font-display">
                      <span>{t.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                    <p className="text-[11px] text-slate-400 truncate max-w-[200px]">{t.company}</p>
                  </div>
                </div>

              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
