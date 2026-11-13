import React from "react"
import { Phone, Zap } from "lucide-react"
import { CONTACT_INFO } from "@/data/pricing"

export function CallNowBanner() {
  return (
    <section className="relative py-14 bg-white">
      <div className="container-wide">
        <div className="relative rounded-3xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 p-8 sm:p-12 overflow-hidden shadow-xl shadow-amber-400/20 flex flex-col lg:flex-row items-center justify-between gap-8 border border-amber-300">
          
          {/* Background watermark */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none flex items-center justify-end overflow-hidden">
            <Phone className="w-96 h-96 -mr-20 -mb-20 text-slate-950 stroke-[1.5]" />
          </div>

          {/* Left Text */}
          <div className="relative z-10 space-y-2.5 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 text-white text-xs font-mono font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>DIRECT STRATEGY HOTLINE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-slate-900 font-semibold text-base sm:text-lg max-w-xl">
              Speak directly with our marketing &amp; web strategist today. Zero pressure — just actionable ideas and clear package deliverables.
            </p>
          </div>

          {/* Right Phone & Button */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="inline-flex items-center gap-4 px-8 py-5 rounded-2xl bg-slate-950 text-amber-400 hover:bg-slate-900 transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 group"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 fill-slate-950 group-hover:rotate-12 transition-transform" />
              </div>
              <div className="text-left font-display">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">CALL DIRECTLY</div>
                <div className="text-xl sm:text-2xl font-black text-white">{CONTACT_INFO.phone}</div>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
