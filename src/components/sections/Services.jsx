import React from "react"
import { motion } from "framer-motion"
import {
  Video,
  Palette,
  Target,
  Search,
  Share2,
  Sparkles,
  Check,
  ArrowUpRight,
} from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MARKETING_SERVICES } from "@/data/services"
import { CONTACT_INFO } from "@/data/pricing"

export function Services() {
  return (
    <section id="services" className="py-24 relative bg-white border-t border-slate-200 overflow-hidden">
      <div className="container-wide relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="gold" className="px-3.5 py-1 text-xs">
            Revenue-Focused Disciplines
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 font-display tracking-tight">
            Comprehensive <span className="text-amber-500">Digital Marketing</span> Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            High-retention visual content, laser-focused audience advertising, and end-to-end profile management engineered to convert attention into paying customers.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 01: Video Content (Wide Hero Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-2 lg:col-span-2 rounded-3xl bg-slate-50/70 border border-slate-200 hover:border-amber-400 transition-all duration-300 p-8 flex flex-col justify-between group shadow-sm hover:shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-yellow-400 to-transparent" />

            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold shadow-sm">
                    <Video className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-amber-700">DISCIPLINE 01</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display group-hover:text-amber-600 transition-colors">
                      Video Content &amp; Reels Production
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm">
                  10 VIDEOS / MONTH
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
                High-retention short and long form videos engineered to grab attention in the first 3 seconds and drive organic reach across Instagram Reels, YouTube Shorts, and brand channels.
              </p>

              {/* Editing Suite Preview */}
              <div className="mt-6 p-4 rounded-2xl bg-white border border-slate-200 font-mono text-xs shadow-inner">
                <div className="flex items-center justify-between text-[11px] text-slate-500 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>TIMELINE: 1080x1920 (9:16)</span>
                  </div>
                  <span className="text-amber-700 font-bold">AI PACING &amp; COLOR GRADED</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <div className="text-[10px] text-slate-500">Monthly Volume</div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">10 Videos</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <div className="text-[10px] text-slate-500">Aspect Ratios</div>
                    <div className="text-sm font-bold text-blue-600 mt-0.5">Reels &amp; Shorts</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <div className="text-[10px] text-slate-500">Audio Sync</div>
                    <div className="text-sm font-bold text-emerald-600 mt-0.5">Music &amp; SFX</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <div className="text-[10px] text-slate-500">Captions</div>
                    <div className="text-sm font-bold text-amber-600 mt-0.5">Kinetic Subtitles</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> Script hooks</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> Transitions &amp; zooms</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> Platform sound licensing</span>
              </div>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Hi Maha Digital Hub! I'm interested in your 10 Videos / Month video production package."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1 transition-colors uppercase tracking-wider"
              >
                <span>Book Video Package &rarr;</span>
              </a>
            </div>
          </motion.div>

          {/* Card 02: Creative Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-3xl bg-white border border-slate-200 hover:border-blue-400 transition-all duration-300 p-7 flex flex-col justify-between group shadow-sm hover:shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-transparent" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Palette className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                  30 DESIGNS/MO
                </span>
              </div>

              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-blue-700">DISCIPLINE 02</span>
              <h3 className="text-xl font-bold text-slate-900 font-display group-hover:text-blue-600 transition-colors mt-1">
                Creative Graphic Design
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Scroll-stopping social posts, educational carousels, and festive promotional creatives that elevate your brand aesthetic.
              </p>

              <div className="mt-5 space-y-2 font-mono">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Daily Creative Pace</span>
                  <span className="font-bold text-slate-900">1 Design / Day</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Formats</span>
                  <span className="font-bold text-blue-600">1:1, 4:5, 9:16</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Hi Maha Digital Hub! I'd like to get 30 premium designs per month for my brand."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors uppercase tracking-wider"
              >
                <span>Inquire About Creatives &rarr;</span>
              </a>
            </div>
          </motion.div>

          {/* Card 03: Meta Ads */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="rounded-3xl bg-white border border-slate-200 hover:border-pink-400 transition-all duration-300 p-7 flex flex-col justify-between group shadow-sm hover:shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 to-transparent" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center font-bold">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-pink-50 text-pink-800 border border-pink-200">
                  PAID ACQUISITION
                </span>
              </div>

              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-pink-700">DISCIPLINE 03</span>
              <h3 className="text-xl font-bold text-slate-900 font-display group-hover:text-pink-600 transition-colors mt-1">
                Meta Ads (FB &amp; Instagram)
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Laser-targeted advertising to turn cold social traffic into verified leads, website bookings, and repeat buyers.
              </p>

              <ul className="mt-5 space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> High-intent audience &amp; lookalike targeting</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Pixel setup &amp; custom conversion events</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Retargeting funnels to reduce acquisition cost</li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Hi Maha Digital Hub! I want to run Meta Ads for my business."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-bold text-pink-600 hover:text-pink-800 flex items-center gap-1 transition-colors uppercase tracking-wider"
              >
                <span>Launch Meta Ads &rarr;</span>
              </a>
            </div>
          </motion.div>

          {/* Card 04: Google Ads */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="rounded-3xl bg-white border border-slate-200 hover:border-emerald-400 transition-all duration-300 p-7 flex flex-col justify-between group shadow-sm hover:shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-transparent" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <Search className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  HIGH-INTENT SEARCH
                </span>
              </div>

              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-emerald-700">DISCIPLINE 04</span>
              <h3 className="text-xl font-bold text-slate-900 font-display group-hover:text-emerald-600 transition-colors mt-1">
                Google Ads &amp; Search PPC
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Capture buyers at the exact second they search for your services with Google Search, Display, and YouTube targeting.
              </p>

              <ul className="mt-5 space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> High-intent keyword strategy &amp; negatives</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Location-targeted search dominance</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Real-time click fraud &amp; budget monitoring</li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Hi Maha Digital Hub! I'd like to run high-intent Google Ads."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-bold text-emerald-600 hover:text-emerald-800 flex items-center gap-1 transition-colors uppercase tracking-wider"
              >
                <span>Start Google Campaign &rarr;</span>
              </a>
            </div>
          </motion.div>

          {/* Card 05: Social Media Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="rounded-3xl bg-white border border-slate-200 hover:border-amber-400 transition-all duration-300 p-7 flex flex-col justify-between group shadow-sm hover:shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-transparent" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                  <Share2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                  360° MANAGEMENT
                </span>
              </div>

              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-amber-700">DISCIPLINE 05</span>
              <h3 className="text-xl font-bold text-slate-900 font-display group-hover:text-amber-600 transition-colors mt-1">
                Social Media Management
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Strategic posting, prime-time scheduling, bio optimization, and engagement to turn dormant social pages into active sales channels.
              </p>

              <ul className="mt-5 space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> 30-day content calendar &amp; approval flow</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Profile SEO &amp; highlight covers setup</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Monthly analytics &amp; audience growth review</li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Hi Maha Digital Hub! I want monthly social media management for my brand."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1 transition-colors uppercase tracking-wider"
              >
                <span>Automate Socials &rarr;</span>
              </a>
            </div>
          </motion.div>

          {/* Card 06: Brand Identity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="md:col-span-2 lg:col-span-3 rounded-3xl bg-slate-900 border border-slate-800 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 group shadow-lg text-white relative overflow-hidden"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shrink-0">
                <Sparkles className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-amber-400">DISCIPLINE 06</span>
                <h3 className="text-2xl font-black text-white font-display">
                  Brand Identity &amp; Visual Design System
                </h3>
                <p className="text-sm text-slate-300 mt-1 max-w-xl">
                  Bespoke vector logos, luxury typography hierarchy, complete color guidelines, and cohesive social media brand kits that build immediate authority.
                </p>
              </div>
            </div>

            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                "Hi Maha Digital Hub! I'd like to get a professional Brand Identity and Logo kit created."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              <button className="px-6 py-3.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-500 transition-colors shadow-md cursor-pointer">
                Get Brand Kit
              </button>
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
