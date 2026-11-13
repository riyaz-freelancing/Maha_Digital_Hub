import React from "react"
import { Phone, MessageCircle, Instagram, ArrowUp } from "lucide-react"
import { Logo } from "@/components/layout/Logo"
import { CONTACT_INFO } from "@/data/pricing"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-slate-900 text-slate-200 border-t border-slate-800 pt-16 pb-12 overflow-hidden">
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="bg-white p-3.5 rounded-2xl inline-block shadow-md">
              <Logo size="large" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed pt-2">
              Turn your ideas into powerful visual stories. Full-spectrum digital marketing, viral reels, and high-performance web engineering to scale your business.
            </p>
            <div className="pt-1">
              <span className="inline-block text-xs font-mono font-bold text-amber-400 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full uppercase">
                Your Growth Our Mission
              </span>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-amber-400 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all duration-200"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base uppercase tracking-wider mb-4 font-display flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-amber-400 transition-colors">
                  Sectors &amp; Industries
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-amber-400 transition-colors">
                  Methodology
                </a>
              </li>
              <li>
                <a href="#web-services" className="hover:text-amber-400 transition-colors">
                  Website Development
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-amber-400 transition-colors">
                  Packages &amp; Pricing
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-amber-400 transition-colors">
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-amber-400 transition-colors">
                  Portfolio Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services List */}
          <div>
            <h4 className="text-white font-bold text-base uppercase tracking-wider mb-4 font-display flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              <li className="hover:text-blue-400 transition-colors">Video Content &amp; Reels (10/Mo)</li>
              <li className="hover:text-blue-400 transition-colors">Creative Graphic Design (30/Mo)</li>
              <li className="hover:text-blue-400 transition-colors">Meta Ads (Facebook &amp; Instagram)</li>
              <li className="hover:text-blue-400 transition-colors">Google Ads &amp; High-Intent Search</li>
              <li className="hover:text-blue-400 transition-colors">Social Media Management</li>
              <li className="hover:text-blue-400 transition-colors">Brand Identity &amp; Logo Design</li>
              <li className="hover:text-blue-400 transition-colors">Custom Websites &amp; E-Commerce</li>
            </ul>
          </div>

          {/* Col 4: Contact Direct */}
          <div>
            <h4 className="text-white font-bold text-base uppercase tracking-wider mb-4 font-display flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Direct Contacts
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="flex items-center gap-3 p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-mono font-bold">Direct Phone</div>
                  <div className="font-bold text-white group-hover:text-amber-400 font-display">{CONTACT_INFO.phone}</div>
                </div>
              </a>

              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-400/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-mono font-bold">WhatsApp Direct</div>
                  <div className="font-bold text-white group-hover:text-emerald-400 font-display">{CONTACT_INFO.phone}</div>
                </div>
              </a>

              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-pink-400/10 text-pink-400 flex items-center justify-center shrink-0">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-mono font-bold">Instagram</div>
                  <div className="font-bold text-white group-hover:text-pink-400 font-display">{CONTACT_INFO.instagramHandle}</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Banner & Tagline */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-slate-300">
              "Turn Your Ideas Into Powerful Visual Stories"
            </p>
            <p className="text-xs text-slate-500 font-mono">
              © 2026 Maha Digital Hub. All rights reserved.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono font-semibold text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
