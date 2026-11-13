import React from "react"
import { motion } from "framer-motion"
import { HelpCircle, MessageCircle } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FAQ_ITEMS } from "@/data/faq"
import { CONTACT_INFO } from "@/data/pricing"

export function FAQ() {
  return (
    <section id="faq" className="py-24 relative bg-white border-t border-slate-200 overflow-hidden">
      <div className="container-wide relative z-10 max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14 space-y-4">
          <Badge variant="blue" className="px-4 py-1 text-xs">
            Answers Before You Ask
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 font-display tracking-tight">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-slate-600 text-base">
            Everything you need to know about our workflow, deliverables, pricing, and ongoing support.
          </p>
        </div>

        {/* Accordion List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
            {FAQ_ITEMS.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-base sm:text-lg font-bold text-slate-900 hover:no-underline">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-amber-500 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-sm sm:text-base leading-relaxed pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-slate-900 font-display">Have a specific question not listed here?</h4>
            <p className="text-sm text-slate-600">Our strategy team is available on WhatsApp to discuss your unique business requirements.</p>
          </div>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
              "Hi Maha Digital Hub! I have a question regarding your services."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <Button variant="default" size="default" className="gap-2 font-bold bg-amber-400 hover:bg-amber-500 text-slate-950 shadow-sm">
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </Button>
          </a>
        </div>

      </div>
    </section>
  )
}
