import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, Sparkles, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from "@/data/portfolio"
import { CONTACT_INFO } from "@/data/pricing"

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [activeItem, setActiveItem] = useState(null)

  const filteredItems =
    selectedCategory === "all"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory)

  return (
    <section id="portfolio" className="py-24 relative bg-white border-t border-slate-200 overflow-hidden">
      <div className="container-wide relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <Badge variant="blue" className="px-4 py-1 text-xs">
            Verified Case Studies &amp; Production
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 font-display tracking-tight">
            Proof in the <span className="text-blue-600">Numbers</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Explore our curated work across viral video editing, Meta performance ads, custom web stores, and brand identity systems.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {PORTFOLIO_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20 scale-105"
                      : "bg-slate-100 text-slate-700 border border-slate-200 hover:text-slate-950 hover:bg-slate-200"
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  onClick={() => setActiveItem(item)}
                  className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col h-full"
                >
                  {/* Image container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='375' viewBox='0 0 600 375'><rect fill='%23F1F5F9' width='600' height='375'/><circle cx='300' cy='187' r='100' fill='%23E2E8F0'/><path d='M250 150 L350 150 L350 250 L250 250 Z' fill='none' stroke='%230284C7' stroke-width='3'/><text x='50%' y='48%' dominant-baseline='middle' text-anchor='middle' fill='%230F172A' font-family='sans-serif' font-weight='bold' font-size='20'>${encodeURIComponent(item.title)}</text><text x='50%' y='60%' dominant-baseline='middle' text-anchor='middle' fill='%2364748B' font-family='sans-serif' font-size='14'>Click to View Case Study</text></svg>`
                      }}
                    />

                    {/* Category pill */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-blue-800 border border-slate-200 shadow-sm">
                        {item.categoryLabel}
                      </span>
                    </div>

                    {/* Hover view overlay icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/20">
                      <div className="w-13 h-13 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shadow-lg transform scale-80 group-hover:scale-100 transition-transform">
                        <Eye className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="text-xs text-amber-700 font-mono font-bold uppercase mb-1">
                        Client: {item.client}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 font-display group-hover:text-blue-600 transition-colors line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-emerald-700 flex items-center gap-1">
                        <span>⚡</span>
                        <span>{item.metrics.split(',')[0]}</span>
                      </span>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 group-hover:text-blue-800 flex items-center gap-1">
                        Case Study &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Large View Dialog */}
        <Dialog open={!!activeItem} onOpenChange={(open) => !open && setActiveItem(null)}>
          {activeItem && (
            <DialogContent className="sm:max-w-3xl bg-white border-slate-200 p-0 overflow-hidden rounded-3xl">
              <div className="relative aspect-[16/9] w-full bg-slate-100">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'><rect fill='%23F8FAFC' width='800' height='450'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%230F172A' font-family='sans-serif' font-weight='bold' font-size='24'>${encodeURIComponent(activeItem.title)}</text></svg>`
                  }}
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="blue" className="text-xs font-mono uppercase font-bold">
                    {activeItem.categoryLabel}
                  </Badge>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <DialogHeader className="text-left space-y-2">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700">
                    Client: {activeItem.client}
                  </div>
                  <DialogTitle className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                    {activeItem.title}
                  </DialogTitle>
                </DialogHeader>

                <DialogDescription className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {activeItem.description}
                </DialogDescription>

                {/* Key Metrics Strip */}
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
                  <div>
                    <div className="text-xs text-blue-900 font-mono font-bold uppercase">Measurable Outcome</div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">{activeItem.metrics}</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {activeItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
                  <div className="text-xs text-slate-500 text-center sm:text-left">
                    Ready to scale your business with similar results?
                  </div>
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `Hi Maha Digital Hub! I saw your work on "${activeItem.title}" and want similar results for my brand.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button variant="default" className="w-full sm:w-auto font-black uppercase text-xs tracking-wider gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950">
                      <span>Discuss on WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                </div>

              </div>
            </DialogContent>
          )}
        </Dialog>

      </div>
    </section>
  )
}
