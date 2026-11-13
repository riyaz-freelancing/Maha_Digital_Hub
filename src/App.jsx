import React from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { FloatingActions } from "@/components/layout/FloatingActions"
import { Hero } from "@/components/sections/Hero"
import { Sectors } from "@/components/sections/Sectors"
import { Services } from "@/components/sections/Services"
import { BeforeAfter } from "@/components/sections/BeforeAfter"
import { Process } from "@/components/sections/Process"
import { WebServices } from "@/components/sections/WebServices"
import { Comparison } from "@/components/sections/Comparison"
import { WhatYouGet } from "@/components/sections/WhatYouGet"
import { Pricing } from "@/components/sections/Pricing"
import { Team } from "@/components/sections/Team"
import { Portfolio } from "@/components/sections/Portfolio"
import { Testimonials } from "@/components/sections/Testimonials"
import { FAQ } from "@/components/sections/FAQ"
import { CallNowBanner } from "@/components/sections/CallNowBanner"
import { Contact } from "@/components/sections/Contact"
import { Toaster } from "@/components/ui/sonner"

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 flex flex-col selection:bg-amber-400 selection:text-slate-950 font-sans">
      {/* Top sticky navigation */}
      <Navbar />

      {/* Main Content Stream */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Industry Sectors ("Built Specifically For Your Sector") */}
        <Sectors />

        {/* 3. Core Growth Services (6 digital marketing services in Bento Grid) */}
        <Services />

        {/* 4. Before Versus After (Real Agency Client Transformations) */}
        <BeforeAfter />

        {/* 5. Process Section ("Six Gears. Zero Guesswork" - Methodology) */}
        <Process />

        {/* 6. Website Studio (Web & E-Commerce with 99/100 Lighthouse & 0.8s load budgets) */}
        <WebServices />

        {/* 7. Agency Advantage Comparison (Why Businesses Pick Us vs Generic Agencies) */}
        <Comparison />

        {/* 8. What You Get Value Strip */}
        <WhatYouGet />

        {/* 9. Packages & Pricing */}
        <Pricing />

        {/* 10. Studio Team (Ajay, Maha Lakshmi, Habeeb, Surya) */}
        <Team />

        {/* 11. Work Portfolio & Case Studies */}
        <Portfolio />

        {/* 12. Client Testimonials */}
        <Testimonials />

        {/* 13. FAQ Accordion */}
        <FAQ />

        {/* 14. Large Yellow Call Now Hotline Banner */}
        <CallNowBanner />

        {/* 15. Contact Form & Details */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating UI Elements: WhatsApp Pulse + Scroll To Top */}
      <FloatingActions />

      {/* Sonner Toast Notification System */}
      <Toaster position="top-right" richColors />
    </div>
  )
}
