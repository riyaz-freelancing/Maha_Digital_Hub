import React from "react"
import { motion } from "framer-motion"
import {
  MessageCircle,
  ArrowRight,
  Sparkles,
  Play,
  TrendingUp,
  Flame,
  Volume2,
  Eye,
  Heart,
  Rocket,
  Magnet,
  DollarSign,
  Trophy,
  Zap,
  ShieldCheck,
  Smartphone,
  Search,
  Code2,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CONTACT_INFO } from "@/data/pricing"
import { HERO_HIGHLIGHTS } from "@/data/services"

export function Hero() {
  const highlightIcons = {
    Rocket: Rocket,
    Magnet: Magnet,
    DollarSign: DollarSign,
    Trophy: Trophy,
  }

  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-32 pb-12 overflow-hidden flex flex-col justify-between bg-white bg-clean-grid"
    >
      {/* Background Soft Blue Atmosphere */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-sky-100/60 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-wide relative z-10 w-full flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 lg:items-stretch items-center">
          
          {/* Left Column: Clear, High-Impact Agency Pitch with Perfect Vertical Alignment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between py-1 text-center lg:text-left h-full"
          >
            {/* Top Block: Badge + Heading + Subheadline */}
            <div className="space-y-5 sm:space-y-6">
              {/* Top Pill Tag */}
              <div>
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                  <span className="font-mono text-xs uppercase tracking-wider text-amber-800 font-bold">
                    YOUR GROWTH OUR MISSION
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-900 font-bold">Maha Digital Hub</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.15rem] font-bold text-slate-950 leading-[1.16] tracking-tight font-display max-w-xl lg:max-w-[36rem]">
                We Create{" "}
                <span className="text-amber-500">
                  Stunning Visuals
                </span>{" "}
                &amp;{" "}
                <span className="text-blue-600">
                  Digital Growth
                </span>{" "}
                Solutions
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                Everything your business needs to attract, engage &amp; convert customers online. <span className="text-slate-900 font-bold">Turn your ideas into powerful visual stories</span> that drive real sales and revenue.
              </p>

              {/* Dedicated Commitment Banner */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-blue-50/90 via-sky-50/70 to-amber-50/60 border border-blue-200/80 shadow-sm flex items-start sm:items-center gap-3.5 max-w-xl mx-auto lg:mx-0 text-left">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-blue-600 text-white">
                      OUR COMMITMENT
                    </span>
                    <span className="text-[11px] text-emerald-700 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Dedicated Team Support
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-bold text-slate-950 mt-1 leading-snug">
                    Your Business Is Our Responsibility For Building Growth.
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Once you connect with us, our specialized team steps in to help you strategize, execute, and scale.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Block: CTAs + Trust Proof Bullets */}
            <div className="space-y-4 pt-6 lg:pt-0">
              {/* Primary & Secondary CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                    "Hi Maha Digital Hub! I'd like to connect with your team to help grow my business."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="xl"
                    variant="default"
                    className="w-full sm:w-auto gap-3 text-slate-950 font-black tracking-wide uppercase text-sm shadow-xl shadow-amber-400/25 hover:bg-amber-500 transition-all bg-amber-400 hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-5 h-5 fill-slate-950" />
                    <span>Connect With Our Team</span>
                  </Button>
                </a>

                <a href="#services" className="w-full sm:w-auto">
                  <Button
                    size="xl"
                    variant="outline"
                    className="w-full sm:w-auto gap-2 border-slate-300 bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm uppercase tracking-wide shadow-sm"
                  >
                    <span>View Services</span>
                    <ArrowRight className="w-4 h-4 text-amber-500" />
                  </Button>
                </a>
              </div>

              {/* Reassurance note */}
              <p className="text-xs text-slate-500 font-mono flex items-center justify-center lg:justify-start gap-1.5 pt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Connect with our squad once — we take complete responsibility for your digital growth.</span>
              </p>

              {/* Trust Proof Bullets */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-slate-600 font-medium font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Monthly 10 Videos + 30 Designs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span>Meta &amp; Google Ads Targeting</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span>Fast SEO-Friendly Websites</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Studio Visual with Matching Top & Bottom Alignment */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative h-full flex flex-col justify-center"
          >
            <div className="relative mx-auto w-full max-w-md lg:max-w-none h-full flex flex-col justify-between">
              
              {/* Outer Card Frame */}
              <div className="rounded-3xl p-1.5 bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200 shadow-2xl shadow-slate-200/60 border border-slate-200/80 h-full flex flex-col">
                <div className="rounded-[22px] bg-white overflow-hidden relative group h-full flex flex-col justify-between">
                  
                  {/* Clean Hero Photo Container with ONLY the Limited Offer Badge */}
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto lg:flex-grow bg-slate-50 overflow-hidden min-h-[320px]">
                    <img
                      src="/images/hero-daylight.jpg"
                      alt="Maha Digital Hub Agency Studio"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src = "/images/hero.jpg"
                      }}
                    />

                    {/* Floating "LIMITED OFFER" Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="relative">
                        <span className="absolute -inset-1 rounded-full bg-amber-400 blur-sm opacity-60 animate-pulse" />
                        <span className="relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg">
                          <Flame className="w-3.5 h-3.5 fill-slate-950" />
                          <span>LIMITED OFFER</span>
                        </span>
                      </div>
                    </div>

                    {/* Floating Team Responsibility Tag */}
                    <div className="absolute bottom-4 left-4 z-20">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-white/20 text-white shadow-xl">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[11px] font-semibold text-slate-100 font-sans">
                          Your Business Is Our Responsibility
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Clean Lower Card Pricing Bar */}
                  <div className="p-5 sm:p-6 bg-white border-t border-slate-200 shrink-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-blue-600 font-bold">
                          COMPLETE MONTHLY SOLUTION
                        </div>
                        <div className="text-base sm:text-lg font-black text-slate-950 mt-0.5 font-display">
                          Digital Marketing &amp; Video Editing
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-xs text-slate-400 line-through font-semibold">₹25,000</div>
                        <div className="text-2xl font-black text-amber-600 leading-none font-display">₹19,999</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Icon Highlights Strip Below Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {HERO_HIGHLIGHTS.map((item) => {
            const IconComponent = highlightIcons[item.icon] || Sparkles
            return (
              <div
                key={item.title}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-white transition-all duration-300 group hover:shadow-md hover:translate-y-[-2px]"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${item.color}20`, color: item.color }}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-snug font-display">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono">Guaranteed Growth</div>
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* Feature Pills Strip */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-center gap-2.5 text-xs font-mono text-slate-700">
          <span className="px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-900 flex items-center gap-2 font-bold shadow-sm">
            <Code2 className="w-3.5 h-3.5 text-indigo-600" /> 100% Custom Coded • No WordPress
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 flex items-center gap-2 font-bold shadow-sm">
            <TrendingUp className="w-3.5 h-3.5 text-blue-600" /> Google Search Console &amp; GA4 Setup Included
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center gap-2 font-bold shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Free Static Hosting Provided By Us
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 flex items-center gap-2 font-bold shadow-sm">
            <Zap className="w-3.5 h-3.5 text-amber-600" /> Websites: Starts ₹10k to 3D ₹35k
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 flex items-center gap-2">
            <span>ℹ️</span> Domain &amp; Dynamic Server: Client Responsibility
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-900 flex items-center gap-2 font-bold">
            <MessageCircle className="w-3.5 h-3.5 text-green-600" /> WhatsApp Click-To-Chat
          </span>
        </div>

      </div>

      {/* Infinite Marquee Strip */}
      <div className="mt-12 py-3 border-y border-slate-200 bg-slate-50 overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-xs font-mono font-bold tracking-widest uppercase text-slate-600">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="flex items-center gap-3">
                <span className="text-amber-500">★</span>
                <span>MONTHLY 10 REELS &amp; SHORTS</span>
              </span>
              <span className="flex items-center gap-3">
                <span className="text-blue-600">★</span>
                <span>30 HIGH-IMPACT SOCIAL CREATIVES</span>
              </span>
              <span className="flex items-center gap-3">
                <span className="text-emerald-600">★</span>
                <span>META ADS (FB &amp; INSTAGRAM)</span>
              </span>
              <span className="flex items-center gap-3">
                <span className="text-pink-600">★</span>
                <span>HIGH-INTENT GOOGLE ADS</span>
              </span>
              <span className="flex items-center gap-3">
                <span className="text-amber-500">★</span>
                <span>CUSTOM LIGHTNING-FAST WEBSITES</span>
              </span>
              <span className="flex items-center gap-3">
                <span className="text-blue-600">★</span>
                <span>TURN IDEAS INTO POWERFUL VISUAL STORIES</span>
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
