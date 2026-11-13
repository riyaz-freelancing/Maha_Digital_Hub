import React, { useState } from "react"
import { motion } from "framer-motion"
import { toast } from "sonner"
import {
  Phone,
  MessageCircle,
  Instagram,
  MapPin,
  Send,
  Clock,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CONTACT_INFO } from "@/data/pricing"

const SERVICES_OPTIONS = [
  { value: "complete-marketing", label: "Complete Digital Marketing Package (₹19,999)" },
  { value: "website-dev", label: "Website Development Package (₹12,000)" },
  { value: "video-content", label: "Video Content & Reels Editing" },
  { value: "creative-design", label: "Social Media Creative Design" },
  { value: "meta-ads", label: "Meta (Facebook & Instagram) Ads" },
  { value: "google-ads", label: "Google Ads & PPC Strategy" },
  { value: "brand-identity", label: "Brand Identity & Logo Kit" },
  { value: "other", label: "Custom Combination / Other" },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error("Please provide both your name and phone number.")
      return
    }

    setIsSubmitting(true)

    const serviceLabel =
      SERVICES_OPTIONS.find((s) => s.value === formData.service)?.label ||
      formData.service ||
      "General Inquiry"

    const messageLines = [
      `*New Inquiry from Maha Digital Hub Website:*`,
      `*Name:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      `*Service Interested:* ${serviceLabel}`,
      formData.message ? `*Message:* ${formData.message}` : null,
    ]
      .filter(Boolean)
      .join("\n")

    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
      messageLines
    )}`

    toast.success("Thank you! Opening WhatsApp to connect with our team directly.", {
      description: "We typically respond within 15 minutes during business hours.",
    })

    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer")
      setIsSubmitting(false)
      setFormData({ name: "", phone: "", service: "", message: "" })
    }, 800)
  }

  return (
    <section id="contact" className="py-24 relative bg-[#F0F6FE] border-t border-slate-200 overflow-hidden">
      <div className="container-wide relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="blue" className="px-4 py-1 text-xs">
            Start Your Transformation
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 font-display tracking-tight">
            Let’s Build Something <span className="text-blue-600">Extraordinary</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Reach out via phone, direct WhatsApp, Instagram, or fill out the quick form below. We're ready to partner with you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Phone Card */}
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="block p-6 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 group shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase font-mono font-bold text-slate-400">Direct Phone</div>
                  <div className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors font-display">
                    {CONTACT_INFO.phone}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">Direct line to our strategy team</div>
                </div>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-3xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 group shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase font-mono font-bold text-slate-400">WhatsApp</div>
                  <div className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors font-display">
                    {CONTACT_INFO.phone}
                  </div>
                  <div className="text-xs text-emerald-700 mt-0.5 font-bold font-mono">● Online • Instant chat response</div>
                </div>
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-3xl bg-white border border-slate-200 hover:border-pink-400 hover:shadow-lg transition-all duration-300 group shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase font-mono font-bold text-slate-400">Instagram</div>
                  <div className="text-lg font-bold text-slate-900 group-hover:text-pink-600 transition-colors font-display">
                    {CONTACT_INFO.instagramHandle}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">Explore our daily creative reels &amp; stories</div>
                </div>
              </div>
            </a>

            {/* Operating Hours Note */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-2 text-xs text-slate-600 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm font-display">
                <Clock className="w-4 h-4 text-amber-500" />
                <span>Working Hours &amp; Location</span>
              </div>
              <p className="font-mono">Monday – Saturday: 9:30 AM to 7:30 PM IST</p>
              <p className="flex items-center gap-1.5 text-slate-600 font-mono">
                <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Serving clients across India &amp; globally.</span>
              </p>
            </div>

          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <Card className="border-slate-200 bg-white p-7 sm:p-9 shadow-lg rounded-3xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1 mb-2">
                  <h3 className="text-2xl font-black text-slate-950 font-display">Send Us a Message</h3>
                  <p className="text-sm text-slate-600">
                    Fill this out and we'll immediately open a direct WhatsApp chat with your project requirements.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                      Your Full Name <span className="text-amber-500">*</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                      Phone / WhatsApp Number <span className="text-amber-500">*</span>
                    </label>
                    <Input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Service Interested in */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                    Service Interested In
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={(val) => handleChange("service", val)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a package or service..." />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICES_OPTIONS.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                    Brief Project Details or Goals
                  </label>
                  <Textarea
                    placeholder="Tell us about your business, current marketing challenges, or website goals..."
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="xl"
                  variant="default"
                  disabled={isSubmitting}
                  className="w-full gap-2 text-slate-950 font-bold shadow-md bg-amber-400 hover:bg-amber-500 text-sm uppercase tracking-wider"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? "Opening WhatsApp..." : "Send via WhatsApp"}</span>
                </Button>

                <p className="text-center text-xs text-slate-500 font-mono">
                  🔒 We respect your privacy. No spam. Direct communication with founders.
                </p>
              </form>
            </Card>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
