import React from "react"
import { motion } from "framer-motion"
import {
  Layout,
  ShoppingBag,
  Smartphone,
  TrendingUp,
  Code2,
  ShieldCheck,
  Zap,
  Lock,
  SearchCheck,
  Headphones,
  CheckCircle,
  ArrowRight,
  Gauge,
  Sparkles,
  Boxes,
  Server,
  Globe,
  Tag,
  BarChart3,
  FileText,
  CheckCircle2,
} from "lucide-react"
import { Card, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { WEBSITE_SERVICES, WEBSITE_PILL_BADGES } from "@/data/services"
import { CONTACT_INFO, WEBSITE_PRICING_INFO } from "@/data/pricing"

const WEB_ICONS = {
  Layout: Layout,
  ShoppingBag: ShoppingBag,
  Smartphone: Smartphone,
  TrendingUp: TrendingUp,
  Code2: Code2,
  ShieldCheck: ShieldCheck,
  Boxes: Boxes,
}

const BADGE_ICONS = {
  Zap: Zap,
  Lock: Lock,
  SearchCheck: SearchCheck,
  Headphones: Headphones,
  Server: Server,
  Globe: Globe,
  Tag: Tag,
}

export function WebServices() {
  return (
    <section id="web-services" className="py-24 relative bg-[#F0F6FE] border-t border-slate-200 overflow-hidden">
      <div className="container-wide relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <Badge variant="blue" className="px-3.5 py-1 text-xs">
            Engineered For Speed &amp; Conversions
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 font-display tracking-tight">
            Websites That Actually <span className="text-blue-600">Grow Your Business</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every website is custom engineered as per client requirements. Starting price is <span className="font-bold text-slate-900">₹10,000</span> for clean responsive websites up to <span className="font-bold text-slate-900">₹35,000</span> for immersive 3D interactive portals.
          </p>

          {/* Hosting and Pricing Pill Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-3">
            {WEBSITE_PILL_BADGES.map((b) => {
              const BIcon = BADGE_ICONS[b.icon] || Zap
              return (
                <div
                  key={b.text}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-sm font-mono"
                >
                  <BIcon className="w-3.5 h-3.5 text-blue-600" />
                  <span>{b.text}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Live Studio Browser Bar Mockup */}
        <div className="max-w-4xl mx-auto mb-16 rounded-2xl bg-white border border-slate-200 p-4 font-mono text-xs shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-500 text-xs w-full sm:w-80">
              <Lock className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-slate-800 font-semibold">https://mahadigitalhub.com/your-brand</span>
            </div>
          </div>

          <div className="flex items-center gap-5 text-xs text-slate-700">
            <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
              <Gauge className="w-4 h-4 text-emerald-600" />
              <span>99/100 Lighthouse</span>
            </div>
            <div className="flex items-center gap-1.5 text-blue-700 font-bold">
              <Zap className="w-4 h-4 text-blue-600" />
              <span>0.8s First Paint</span>
            </div>
          </div>
        </div>

        {/* 6 Web Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WEBSITE_SERVICES.map((item, idx) => {
            const Icon = WEB_ICONS[item.icon] || Layout
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
              >
                <Card className="h-full border-slate-200 bg-white hover:border-blue-400 hover:shadow-xl transition-all duration-300 group p-8 flex flex-col justify-between rounded-3xl">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-100 text-blue-800 border border-slate-200">
                        {item.badge}
                      </span>
                    </div>

                    <CardTitle className="text-xl font-bold text-slate-900 font-display group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </CardTitle>

                    <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span className="flex items-center gap-1.5 text-slate-700 font-mono">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      Production Standard
                    </span>
                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                        `Hi Maha Digital Hub! I'm interested in your ${item.title} service.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors uppercase tracking-wider font-mono font-bold"
                    >
                      Inquire &rarr;
                    </a>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Post-Build Guarantee Banner: Custom Coded & Complete Google Setup */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-slate-50 to-blue-50/50 border border-slate-200 shadow-lg">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold uppercase tracking-wider border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Included After Build • 100% Free Setup</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-display">
              We Build <span className="text-blue-600">Custom Coded</span> Websites — Not WordPress &amp; Pre-made Themes
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every site is hand-coded using modern React &amp; Tailwind for sub-second speeds and zero plugin vulnerabilities. Once development is complete, our team sets up your entire Google search and analytics infrastructure before launch:
            </p>
          </div>

          {/* 4 Setup Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 hover:border-blue-400 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <SearchCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-950 font-display">Google Search Console</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full domain ownership verification, crawling diagnostics, and Google keyword ranking tracking.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 hover:border-amber-400 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-950 font-display">Google Analytics 4 (GA4)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Live visitor tracking, referral source monitoring, user engagement reports, and conversion events.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 hover:border-emerald-400 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-950 font-display">XML Sitemap Submission</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated XML sitemaps generated and submitted directly to Googlebot for instant search indexing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 hover:border-indigo-400 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-950 font-display">Basic On-Page SEO Setup</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Custom meta titles, meta descriptions, OpenGraph social preview tags, and semantic HTML5 markup.
              </p>
            </div>
          </div>
        </div>

        {/* Website CTA Strip with Clear Hosting & Pricing Responsibility */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-md">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold font-mono uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Starting ₹10,000 to 3D Websites ₹35,000</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-display">
              Ready for a custom website tailored to your exact requirements?
            </h3>
            <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
              We build custom static business websites (starting at ₹10k) and immersive interactive 3D web portals (up to ₹35k). <span className="font-bold text-emerald-700">Static website hosting is provided by us for free.</span> Domain name and dynamic/server hosting are the client's responsibility.
            </p>
          </div>

          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
              "Hi Maha Digital Hub! I'd like to get my website developed (budget ₹10k - ₹35k as per requirement)."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <Button size="xl" variant="default" className="gap-2.5 font-bold uppercase tracking-wider text-xs shadow-lg bg-amber-400 hover:bg-amber-500 text-slate-950">
              <span>Get Website Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>

      </div>
    </section>
  )
}
