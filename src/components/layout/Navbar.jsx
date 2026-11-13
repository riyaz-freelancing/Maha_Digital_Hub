import React, { useState, useEffect } from "react"
import { Phone, MessageCircle, Menu, ArrowUpRight } from "lucide-react"
import { Logo } from "@/components/layout/Logo"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CONTACT_INFO } from "@/data/pricing"

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Sectors", href: "#sectors" },
  { label: "Services", href: "#services" },
  { label: "Methodology", href: "#process" },
  { label: "Web Studio", href: "#web-services" },
  { label: "Packages", href: "#packages" },
  { label: "Team", href: "#team" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = ["home", "sectors", "services", "process", "web-services", "packages", "team", "portfolio", "contact"]
      const scrollPosition = window.scrollY + 140

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id) => {
    setMobileOpen(false)
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/90 py-2.5 shadow-sm"
          : "bg-white/90 backdrop-blur-md py-3 sm:py-3.5 border-b border-slate-200/60"
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between gap-4 lg:gap-6">
          
          {/* Brand Logo */}
          <Logo size="large" onClick={() => scrollTo("#home")} />

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-1.5 bg-slate-100/90 border border-slate-200/80 rounded-full px-2.5 py-1.5 2xl:px-3.5 2xl:py-2 backdrop-blur-md shadow-inner shrink-0">
            {NAV_LINKS.map((link) => {
              const targetId = link.href.substring(1)
              const isActive = activeSection === targetId

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollTo(link.href)
                  }}
                  className={`px-3 py-1.5 2xl:px-4 2xl:py-2 text-xs 2xl:text-sm font-bold rounded-full transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "text-slate-950 bg-amber-400 font-extrabold shadow-sm scale-[1.02]"
                      : "text-slate-700 hover:text-slate-950 hover:bg-white"
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center shrink-0">
            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                "Hi Maha Digital Hub! I want to discuss a project for my business."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="whatsapp"
                size="default"
                className="gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs 2xl:text-sm uppercase tracking-wider shadow-sm px-4 2xl:px-5 py-2 h-10 shrink-0"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">WhatsApp</span>
              </Button>
            </a>
          </div>

          {/* Mobile Sheet Trigger */}
          <div className="flex items-center gap-2 xl:hidden shrink-0">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-slate-300 bg-white text-slate-800 shadow-sm"
                  aria-label="Navigation Menu"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[310px] bg-white border-slate-200 p-6 flex flex-col justify-between">
                <div>
                  <SheetHeader className="text-left mb-6">
                    <Logo onClick={() => scrollTo("#home")} />
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                  </SheetHeader>

                  <div className="flex flex-col gap-1 mt-4">
                    {NAV_LINKS.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault()
                          scrollTo(link.href)
                        }}
                        className="flex items-center justify-between px-4 py-3 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors font-semibold text-sm"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-4 h-4 text-slate-400" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-xs text-emerald-700 font-semibold px-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Booking Client Campaigns</span>
                  </div>

                  <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="block w-full">
                    <Button variant="default" className="w-full gap-2 justify-center font-bold text-xs uppercase tracking-wider bg-amber-400 text-slate-950">
                      <Phone className="w-4 h-4 fill-slate-950" />
                      Call {CONTACT_INFO.phone}
                    </Button>
                  </a>

                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button variant="whatsapp" className="w-full gap-2 justify-center font-bold text-xs uppercase tracking-wider bg-emerald-600 text-white">
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp: {CONTACT_INFO.phone}
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  )
}
