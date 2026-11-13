import React from "react"
import { motion } from "framer-motion"
import {
  Check,
  Sparkles,
  MessageCircle,
  Clock,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Server,
  Globe,
  Building2,
  Flame,
  DollarSign,
  TrendingUp,
} from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PRICING_PACKAGES, PRICING_NOTE, CONTACT_INFO } from "@/data/pricing"

export function Pricing() {
  return (
    <section id="packages" className="py-24 relative bg-white border-t border-slate-200 overflow-hidden">
      <div className="container-wide relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="gold" className="px-4 py-1 text-xs">
            100% Transparent Investment
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 font-display tracking-tight">
            High-Growth <span className="text-amber-500">Packages &amp; Pricing</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Dedicated packages for Real Estate projects, business growth, daily viral reels, and custom coded websites. Every package is tailored for maximum ROI.
          </p>

          {/* Quick Transparency Pill Strip */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1.5 font-bold">
              <Building2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Real Estate: Daily Posts + Videos + Ads Strategy</span>
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 flex items-center gap-1.5 font-bold">
              <DollarSign className="w-3.5 h-3.5 text-amber-600" />
              <span>Ads Budget: 100% Direct to Meta/Google (0% Markup)</span>
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200 flex items-center gap-1.5 font-bold">
              <Server className="w-3.5 h-3.5 text-blue-600" />
              <span>Websites: Free Static Hosting Included</span>
            </span>
          </div>
        </div>

        {/* 4 Pricing Cards Grid (2x2 on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
          {PRICING_PACKAGES.map((pkg, index) => {
            const isRealEstate = pkg.id === "real-estate-growth"
            const isMarketing = pkg.id === "marketing-complete"
            const isDailySocial = pkg.id === "daily-social-reels"
            const isWebsite = pkg.id === "website-development"

            let cardBorder = "border-2 border-slate-200 hover:border-blue-400"
            let ribbonBg = "bg-slate-900 text-white"
            let btnClass = "bg-slate-900 hover:bg-slate-800 text-white"
            let badgeVariant = "default"
            let RibbonIcon = Sparkles

            if (isRealEstate) {
              cardBorder = "border-2 border-emerald-500 bg-emerald-50/20 shadow-xl shadow-emerald-500/10 scale-[1.01]"
              ribbonBg = "bg-emerald-600 text-white"
              btnClass = "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/25 shadow-lg"
              badgeVariant = "green"
              RibbonIcon = Building2
            } else if (isMarketing) {
              cardBorder = "border-2 border-amber-400 bg-amber-50/20 shadow-xl shadow-amber-400/10 scale-[1.01]"
              ribbonBg = "bg-amber-400 text-slate-950"
              btnClass = "bg-amber-400 hover:bg-amber-500 text-slate-950 shadow-amber-400/25 shadow-lg"
              badgeVariant = "gold"
              RibbonIcon = Sparkles
            } else if (isDailySocial) {
              cardBorder = "border-2 border-purple-200 bg-purple-50/15 hover:border-purple-400 shadow-md"
              ribbonBg = "bg-purple-600 text-white"
              btnClass = "bg-purple-600 hover:bg-purple-700 text-white shadow-purple-600/25 shadow-lg"
              badgeVariant = "purple"
              RibbonIcon = Flame
            } else if (isWebsite) {
              cardBorder = "border-2 border-blue-200 bg-blue-50/15 hover:border-blue-400 shadow-md"
              ribbonBg = "bg-blue-600 text-white"
              btnClass = "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/25 shadow-lg"
              badgeVariant = "blue"
              RibbonIcon = Globe
            }

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex"
              >
                <Card className={`w-full flex flex-col justify-between relative overflow-hidden rounded-3xl transition-all duration-300 ${cardBorder}`}>
                  
                  {/* Top Highlight Ribbon */}
                  <div className={`${ribbonBg} font-black text-xs uppercase tracking-widest py-2 px-4 text-center flex items-center justify-center gap-2 shadow-sm font-mono`}>
                    <RibbonIcon className="w-4 h-4 shrink-0" />
                    <span>{pkg.ribbonText}</span>
                  </div>

                  <CardHeader className="p-6 sm:p-8 pb-4">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <Badge
                        variant={badgeVariant}
                        className="text-xs uppercase font-extrabold tracking-wider px-3 py-1"
                      >
                        {pkg.badge}
                      </Badge>
                      <span className="text-xs text-slate-500 font-mono flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-amber-600" />
                        <span>{isWebsite ? "Custom Quote" : "Monthly Retainer"}</span>
                      </span>
                    </div>

                    <CardTitle className="text-2xl sm:text-3xl font-black text-slate-950 font-display">
                      {pkg.name}
                    </CardTitle>

                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {pkg.tagline}
                    </p>

                    {/* Price Section */}
                    <div className="mt-5 pt-5 border-t border-slate-200 flex items-baseline gap-3">
                      <span className="text-lg text-slate-400 line-through font-semibold font-mono">
                        {pkg.originalPrice}
                      </span>
                      <span className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight font-display">
                        {pkg.offerPrice}
                      </span>
                      <span className="text-sm font-bold text-slate-500 font-mono">
                        {pkg.period}
                      </span>
                    </div>

                    {/* Special Scope/ROI Tag */}
                    <div className="mt-2.5 text-xs font-mono font-bold flex items-center gap-1.5">
                      <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isRealEstate ? "text-emerald-600" : isMarketing ? "text-amber-600" : isWebsite ? "text-blue-600" : "text-purple-600"}`} />
                      <span className={isRealEstate ? "text-emerald-700" : isMarketing ? "text-amber-700" : isWebsite ? "text-blue-700" : "text-purple-700"}>
                        {isRealEstate && "Daily property graphics + walkthrough reels + geo-targeted ads"}
                        {isMarketing && "Complete 4-person marketing & video execution squad"}
                        {isDailySocial && "Daily organic social posting + 12 viral reels every month"}
                        {isWebsite && "Starts ₹10,000 for business sites to ₹35,000 for 3D portals"}
                      </span>
                    </div>

                    {/* Real Estate Specific Highlights Box */}
                    {isRealEstate && (
                      <div className="mt-4 p-3.5 rounded-2xl bg-white border border-emerald-200 space-y-2 text-xs font-mono shadow-sm">
                        <div className="flex items-center gap-2 text-emerald-900 font-bold">
                          <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                          <span>Daily Property Posts (30/mo) + 15 Walkthrough Videos</span>
                        </div>
                        <div className="flex items-center gap-2 text-emerald-900 font-bold">
                          <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                          <span>Meta &amp; Google Ads (5–20km Radius Around Project Site)</span>
                        </div>
                        <div className="flex items-center gap-2 text-emerald-900 font-bold">
                          <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                          <span>Ad Budget Advice: Recommended ₹500–₹2,000/day spend</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-700 font-medium">
                          <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px] font-bold">⚡</span>
                          <span>Inquiries Routed Instantly to WhatsApp within 10s</span>
                        </div>
                      </div>
                    )}

                    {/* Website Specific Highlights Box */}
                    {isWebsite && (
                      <div className="mt-4 p-3.5 rounded-2xl bg-white border border-slate-200 space-y-2 text-xs font-mono shadow-sm">
                        <div className="flex items-center gap-2 text-indigo-900 font-bold">
                          <Check className="w-4 h-4 text-indigo-600 stroke-[3]" />
                          <span>100% Custom Coded (No WordPress • No Pre-made Themes)</span>
                        </div>
                        <div className="flex items-center gap-2 text-blue-900 font-bold">
                          <Check className="w-4 h-4 text-blue-600 stroke-[3]" />
                          <span>Google Search Console, GA4 &amp; Sitemap Setup Included</span>
                        </div>
                        <div className="flex items-center gap-2 text-emerald-800 font-bold">
                          <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                          <span>Static Website Hosting: Provided By Us 100% Free</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-700 font-medium">
                          <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px] font-bold">ℹ</span>
                          <span>Domain &amp; Dynamic Server: Client's responsibility</span>
                        </div>
                      </div>
                    )}

                    <p className="text-xs text-slate-500 mt-3 italic">
                      {pkg.description}
                    </p>
                  </CardHeader>

                  {/* Features List */}
                  <CardContent className="p-6 sm:p-8 pt-2 flex-grow">
                    <div className="py-4 border-t border-slate-200">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-3.5 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-blue-600" />
                        <span>Deliverables Included:</span>
                      </div>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  {/* CTA Footer */}
                  <CardFooter className="p-6 sm:p-8 pt-0">
                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                        pkg.whatsappMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button
                        size="xl"
                        className={`w-full gap-2.5 font-black uppercase tracking-wider text-xs shadow-md transition-all duration-300 hover:scale-[1.02] ${btnClass}`}
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span>{pkg.ctaText}</span>
                        <ArrowRight className="w-4 h-4 ml-auto" />
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* 100% Ad Budget Transparency & Strategy Banner */}
        <div className="mt-14 max-w-6xl mx-auto p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-mono font-bold uppercase tracking-wider">
              <DollarSign className="w-3.5 h-3.5 fill-slate-950" />
              <span>100% Transparent Ad Budget Policy</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              How Does the Ad Budget Work for Real Estate &amp; Business Ads?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              Your ad spend budget is paid directly from your credit/debit card to Meta (Facebook &amp; Instagram) and Google. We take <strong className="text-amber-400 font-bold">0% commission on your ad spend</strong>. For Real Estate campaigns, we recommend an ad spend budget of <strong className="text-emerald-400 font-bold">₹500 to ₹2,000/day</strong> based on your target area and lead volume goals, ensuring maximum qualified site visits at the lowest cost per lead.
            </p>
          </div>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
              "Hi Maha Digital Hub! I'd like to get an Ad Budget & Strategy Consultation for my Real Estate / Business campaigns."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 w-full md:w-auto"
          >
            <Button size="lg" className="w-full md:w-auto gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-6 py-3.5 h-auto text-xs uppercase tracking-wider">
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Consult On Ad Budget</span>
            </Button>
          </a>
        </div>

        {/* Note under pricing */}
        <div className="mt-10 text-center max-w-5xl mx-auto">
          <p className="text-xs sm:text-sm font-medium text-slate-700 bg-slate-50 inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-slate-200 font-mono leading-relaxed text-left sm:text-center">
            <span>🔔</span>
            <span>{PRICING_NOTE}</span>
          </p>
        </div>

      </div>
    </section>
  )
}
