import React, { useState, useEffect } from "react"
import { MessageCircle, ArrowUp } from "lucide-react"
import { CONTACT_INFO } from "@/data/pricing"

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="pointer-events-auto p-3 rounded-full bg-brand-dark-surface/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp with pulse ping */}
      <a
        href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent("Hi Maha Digital Hub! I'd like to learn more about your services.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="pointer-events-auto group relative flex items-center gap-2 p-3.5 bg-brand-green hover:bg-emerald-500 text-white rounded-full shadow-2xl shadow-emerald-950/60 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {/* Pulsing ring animation */}
        <span className="absolute -inset-1 rounded-full bg-brand-green opacity-40 animate-ping pointer-events-none" />

        <MessageCircle className="w-6 h-6 relative z-10" />

        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold transition-all duration-300 ease-in-out group-hover:max-w-xs group-hover:pr-2">
          Chat with us
        </span>
      </a>
    </div>
  )
}

