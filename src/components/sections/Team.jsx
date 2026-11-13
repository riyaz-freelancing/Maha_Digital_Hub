import React from "react"
import { motion } from "framer-motion"
import {
  Crown,
  Sparkles,
  Target,
  Search,
  Code2,
  Film,
  Instagram,
  Linkedin,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { TEAM_MEMBERS } from "@/data/team"
import { CONTACT_INFO } from "@/data/pricing"

const ROLE_ICONS = {
  "maha-lakshmi": Crown,
  ajay: Sparkles,
  habeeb: Search,
  muzzammil: Code2,
  surya: Film,
}

const COLOR_STYLES = {
  amber: {
    badge: "bg-amber-50 text-amber-800 border-amber-200",
    avatarBg: "from-amber-400 via-amber-500 to-yellow-500",
    glow: "bg-amber-400/20 group-hover:bg-amber-400/30",
    ring: "group-hover:border-amber-400",
    accent: "text-amber-600",
    tag: "bg-amber-50/80 text-amber-800 border-amber-200/60",
    borderTop: "from-amber-400 via-amber-500 to-yellow-400",
  },
  sky: {
    badge: "bg-sky-50 text-sky-800 border-sky-200",
    avatarBg: "from-sky-400 via-sky-500 to-blue-600",
    glow: "bg-sky-400/20 group-hover:bg-sky-400/30",
    ring: "group-hover:border-sky-400",
    accent: "text-sky-600",
    tag: "bg-sky-50/80 text-sky-800 border-sky-200/60",
    borderTop: "from-sky-400 via-sky-500 to-blue-500",
  },
  emerald: {
    badge: "bg-emerald-50 text-emerald-800 border-emerald-200",
    avatarBg: "from-emerald-400 via-emerald-500 to-teal-600",
    glow: "bg-emerald-400/20 group-hover:bg-emerald-400/30",
    ring: "group-hover:border-emerald-400",
    accent: "text-emerald-600",
    tag: "bg-emerald-50/80 text-emerald-800 border-emerald-200/60",
    borderTop: "from-emerald-400 via-emerald-500 to-teal-500",
  },
  indigo: {
    badge: "bg-indigo-50 text-indigo-800 border-indigo-200",
    avatarBg: "from-indigo-400 via-indigo-500 to-violet-600",
    glow: "bg-indigo-400/20 group-hover:bg-indigo-400/30",
    ring: "group-hover:border-indigo-400",
    accent: "text-indigo-600",
    tag: "bg-indigo-50/80 text-indigo-800 border-indigo-200/60",
    borderTop: "from-indigo-400 via-indigo-500 to-violet-500",
  },
  fuchsia: {
    badge: "bg-fuchsia-50 text-fuchsia-800 border-fuchsia-200",
    avatarBg: "from-fuchsia-400 via-fuchsia-500 to-pink-600",
    glow: "bg-fuchsia-400/20 group-hover:bg-fuchsia-400/30",
    ring: "group-hover:border-fuchsia-400",
    accent: "text-fuchsia-600",
    tag: "bg-fuchsia-50/80 text-fuchsia-800 border-fuchsia-200/60",
    borderTop: "from-fuchsia-400 via-fuchsia-500 to-pink-500",
  },
}

export function Team() {
  return (
    <section id="team" className="py-20 sm:py-24 relative bg-[#F0F6FE] border-t border-slate-200 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-amber-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-wide relative z-10">
        
        {/* Section Header with Reduced Text Size */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3.5">
          <Badge variant="blue" className="px-3.5 py-1 text-xs">
            The Studio Squad
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 font-display tracking-tight">
            Meet the Minds Behind <span className="text-blue-600">Your Growth</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Direct access to dedicated performance marketers, full-stack developers, and creative directors executing your vision in real-time.
          </p>
        </div>

        {/* 5 Sleek Unified Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {TEAM_MEMBERS.map((member, index) => {
            const style = COLOR_STYLES[member.color] || COLOR_STYLES.amber
            const Icon = ROLE_ICONS[member.id] || Sparkles
            const waUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(member.waMessage)}`

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="h-full"
              >
                <div className={`h-full bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl ${style.ring} transition-all duration-300 p-6 flex flex-col justify-between group relative overflow-hidden`}>
                  
                  {/* Top Colored Accent Stripe */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${style.borderTop}`} />

                  {/* Card Content Top Section */}
                  <div>
                    {/* Top Row: Domain Badge & Status */}
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <span className={`text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border flex items-center gap-1.5 ${style.badge}`}>
                        {member.id === "maha-lakshmi" && <Crown className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />}
                        <span>{member.badge}</span>
                      </span>
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[10px] font-mono font-bold text-emerald-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>STUDIO</span>
                      </div>
                    </div>

                    {/* Modern Avatar Discs */}
                    <div className="relative w-24 h-24 mx-auto my-3 flex items-center justify-center">
                      {/* Ambient Aura Ring */}
                      <div className={`absolute inset-0 rounded-2xl blur-lg transition-all duration-300 ${style.glow}`} />
                      
                      {/* Avatar Square with Rounded Corners */}
                      <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${style.avatarBg} text-white flex flex-col items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 border-2 border-white`}>
                        <span className="text-2xl font-black font-display tracking-tight">
                          {member.initials}
                        </span>
                        
                        {/* Domain Icon Floating Badge */}
                        <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-xl bg-slate-950 text-white flex items-center justify-center shadow-md border border-white/20">
                          <Icon className="w-3.5 h-3.5 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Member Name & Role */}
                    <div className="text-center mt-4">
                      <h3 className="text-lg font-bold text-slate-950 font-display group-hover:text-blue-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className={`text-[11px] font-semibold uppercase tracking-wider font-mono mt-1 ${style.accent}`}>
                        {member.role}
                      </p>
                    </div>

                    {/* Core Bio */}
                    <p className="text-xs text-slate-600 text-center mt-3 leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Skill Pills */}
                    <div className="flex flex-wrap items-center justify-center gap-1.5 mt-4 pt-3 border-t border-slate-100">
                      {member.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className={`text-[10px] font-medium px-2 py-0.5 rounded-md border ${style.tag}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="mt-6 pt-4 border-t border-slate-100 space-y-2.5">
                    {/* Direct WhatsApp Consultation CTA */}
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-2 px-3 rounded-xl ${member.id === "maha-lakshmi" ? "bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold" : "bg-slate-900 hover:bg-emerald-600 text-white font-semibold"} text-xs flex items-center justify-center gap-1.5 transition-all duration-200 shadow-sm group-hover:shadow`}
                    >
                      <MessageCircle className={`w-3.5 h-3.5 ${member.id === "maha-lakshmi" ? "fill-slate-950 text-slate-950" : "text-emerald-400 group-hover:text-white"}`} />
                      <span>Chat with {member.name.split(" ")[0]} {member.id === "maha-lakshmi" ? "(CEO)" : ""}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-60" />
                    </a>

                    {/* Social Link */}
                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                      <span className="font-mono text-[10px]">Follow:</span>
                      <div className="flex items-center gap-2">
                        <a
                          href={member.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-lg bg-slate-50 hover:bg-pink-50 text-slate-500 hover:text-pink-600 flex items-center justify-center transition-colors border border-slate-200/80"
                          aria-label={`${member.name} Instagram`}
                        >
                          <Instagram className="w-3.5 h-3.5" />
                        </a>
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-500 hover:text-blue-600 flex items-center justify-center transition-colors border border-slate-200/80"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
