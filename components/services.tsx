"use client"

import { motion, useAnimation } from "framer-motion"
import { useState } from "react"
import { CountUp } from "@/components/ui/count-up"

/* ─────────────────────────────────────────────
   MINI VISUAL PREVIEWS  (inline SVG / JSX)
───────────────────────────────────────────── */

function WebsitePreview() {
  return (
    <div className="w-full h-full flex flex-col bg-[#0c0c18] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#15152a] border-b border-white/10 shrink-0">
        <span className="w-2 h-2 rounded-full bg-red-500/80" />
        <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
        <span className="w-2 h-2 rounded-full bg-green-500/80" />
        <div className="ml-2 flex-1 h-3.5 rounded-full bg-white/5 border border-white/10 flex items-center px-2">
          <span className="text-[7px] text-white/25">yoursite.com</span>
        </div>
      </div>

      {/* Navbar */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/8 bg-[#0e0e1e] shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-indigo-500" />
          <span className="text-[9px] font-bold text-white">YourBrand</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[7px] text-white/40">Services</span>
          <span className="text-[7px] text-white/40">About</span>
          <div className="px-2 py-0.5 rounded-full bg-indigo-500 text-[7px] text-white font-semibold">Book Now</div>
        </div>
      </div>

      {/* Hero section */}
      <div className="flex-1 flex flex-col items-start justify-center px-4 py-3 bg-gradient-to-br from-orange-900/30 to-[#0c0c18]">
        <div className="text-[8px] text-orange-300 font-medium mb-1 tracking-widest uppercase">🍽️ Fine Dining · Moradabad</div>
        <div className="text-[13px] font-black text-white leading-tight mb-1">
          Best Restaurant<br />
          <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">in Moradabad</span>
        </div>
        <div className="text-[7px] text-white/40 mb-3 leading-relaxed">Authentic flavours, home delivery in 30 mins.</div>
        <div className="flex gap-1.5">
          <div className="px-3 py-1.5 rounded-full bg-orange-500 text-[8px] text-white font-bold shadow-lg shadow-orange-500/30">
            Order Now
          </div>
          <div className="px-3 py-1.5 rounded-full border border-white/20 text-[8px] text-white/60">
            View Menu
          </div>
        </div>
      </div>

      {/* Service pills */}
      <div className="flex gap-1.5 px-3 py-2.5 border-t border-white/8 bg-[#0e0e1e] shrink-0 overflow-hidden">
        {["Web Design", "SEO", "WhatsApp", "Ads"].map(s => (
          <span key={s} className="shrink-0 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[7px] text-white/50">{s}</span>
        ))}
      </div>
    </div>
  )
}

function SeoPreview() {
  return (
    <div className="w-full h-full flex flex-col gap-3 p-3 items-center justify-center">
      {/* Search Bar */}
      <div className="w-full max-w-[220px] bg-white/10 border border-white/20 rounded-full px-4 py-2 flex items-center gap-2">
        <span className="text-[12px]">🔍</span>
        <span className="text-[10px] text-white/80 font-medium tracking-wide">best agency near me</span>
      </div>

      {/* Search Result */}
      <div className="w-full max-w-[220px] flex flex-col gap-2">
        <motion.div 
          initial={{ x: -10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-cyan-500/20 border border-cyan-500/50 rounded-lg p-3 flex items-center justify-between"
        >
          <div className="flex flex-col gap-1">
            <span className="text-[11px] font-bold text-white">Your Business</span>
            <span className="text-[8px] text-cyan-200">www.yourwebsite.com</span>
          </div>
          <div className="bg-cyan-500 text-white text-[8px] font-black px-2 py-1 rounded uppercase tracking-widest">
            Rank #1
          </div>
        </motion.div>

        {/* Competitor */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex items-center justify-between opacity-50">
          <div className="flex flex-col gap-1">
            <span className="text-[11px] font-bold text-white/70">Competitor</span>
            <span className="text-[8px] text-white/40">www.competitor.com</span>
          </div>
          <span className="text-[8px] text-white/40 font-bold">#2</span>
        </div>
      </div>
    </div>
  )
}

function GoogleBizPreview() {
  return (
    <div className="w-full h-full flex flex-col p-2 gap-2">
      {/* Google search bar */}
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15">
        <span className="text-[11px]">🔍</span>
        <span className="text-[9px] text-white/70">plumber near me</span>
        <div className="ml-auto flex items-center gap-0.5">
          <span className="text-[9px] font-bold" style={{color:"#4285F4"}}>G</span>
          <span className="text-[9px] font-bold" style={{color:"#EA4335"}}>o</span>
          <span className="text-[9px] font-bold" style={{color:"#FBBC04"}}>o</span>
          <span className="text-[9px] font-bold" style={{color:"#4285F4"}}>g</span>
          <span className="text-[9px] font-bold" style={{color:"#34A853"}}>l</span>
          <span className="text-[9px] font-bold" style={{color:"#EA4335"}}>e</span>
        </div>
      </div>

      {/* Knowledge Panel */}
      <div className="flex-1 rounded-xl border border-white/12 bg-white/5 p-3 flex flex-col gap-2 overflow-hidden">
        {/* Business name + category */}
        <div>
          <div className="text-[11px] font-bold text-white">Your Business Name</div>
          <div className="text-[8px] text-white/50">Plumbing Service · Mumbai</div>
        </div>

        {/* Stars + reviews */}
        <div className="flex items-center gap-1">
          <span className="text-[10px] font-bold text-orange-400">
            <CountUp to={4.9} decimals={1} duration={1.5} />
          </span>
          <div className="flex">
            {[1,2,3,4,5].map(s => (
              <span key={s} className="text-yellow-400 text-[10px]">★</span>
            ))}
          </div>
          <span className="text-[8px] text-white/40">(247)</span>
          <span className="ml-auto text-[8px] text-green-400 font-semibold">Open now</span>
        </div>

        {/* Info rows */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[9px]">📍</span>
            <span className="text-[8px] text-white/50">123 Main St, Mumbai</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[9px]">🕐</span>
            <span className="text-[8px] text-white/50">Closes at 8:00 PM</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[9px]">📞</span>
            <span className="text-[8px] text-white/50">+91 98765 43210</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-1.5 mt-auto">
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="flex-1 flex flex-col items-center gap-0.5 py-1.5 rounded-lg bg-orange-500/15 border border-orange-500/30 cursor-pointer"
          >
            <span className="text-[10px]">📞</span>
            <span className="text-[7px] text-orange-300 font-semibold">Call</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="flex-1 flex flex-col items-center gap-0.5 py-1.5 rounded-lg bg-blue-500/15 border border-blue-500/30 cursor-pointer"
          >
            <span className="text-[10px]">🗺️</span>
            <span className="text-[7px] text-blue-300 font-semibold">Directions</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="flex-1 flex flex-col items-center gap-0.5 py-1.5 rounded-lg bg-white/8 border border-white/15 cursor-pointer"
          >
            <span className="text-[10px]">🌐</span>
            <span className="text-[7px] text-white/50 font-semibold">Website</span>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function WhatsAppPreview() {
  const messages = [
    { from: "user", text: "I wanna order. 🍕" },
    { from: "bot", text: "Hey! 👋 Sure! Check our menu & place your order below." },
    { from: "user", text: "1 Paneer Tikka please!" },
    { from: "bot", text: "Got it! 🛵 Arriving in 30 mins. Track here 👇" },
  ]
  return (
    <div className="w-full h-full flex flex-col rounded-xl overflow-hidden border border-white/10 bg-[#0d1117]">
      {/* header */}
      <div className="flex items-center gap-2 px-3 py-2 bg-[#128C7E] shrink-0">
        <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center text-[8px] font-bold text-white">Y</div>
        <div>
          <div className="text-[9px] font-semibold text-white">Your Business</div>
          <div className="text-[7px] text-green-200">online • replies instantly</div>
        </div>
      </div>
      {/* chat */}
      <div className="flex-1 px-2 py-2 flex flex-col gap-1.5 overflow-hidden bg-[#0a1628]/80">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: m.from === "user" ? 10 : -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div className={`max-w-[75%] px-2 py-1.5 rounded-xl text-[8px] leading-relaxed ${m.from === "user" ? "bg-[#128C7E] text-white rounded-tr-none" : "bg-[#1f2937] text-white/80 rounded-tl-none border border-white/10"}`}>
              {m.text}
            </div>
          </motion.div>
        ))}
        {/* typing indicator */}
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
          className="flex justify-start"
        >
          <div className="bg-[#1f2937] border border-white/10 px-2.5 py-1.5 rounded-xl rounded-tl-none flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-white/50" />
            <span className="w-1 h-1 rounded-full bg-white/50" />
            <span className="w-1 h-1 rounded-full bg-white/50" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function ConversionPreview() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="flex items-center gap-4 w-full max-w-[240px]">
        {/* Before */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
            <span className="text-2xl opacity-50">👥</span>
          </div>
          <span className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Traffic</span>
        </div>

        {/* Arrow with animation */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] text-pink-400 font-bold bg-pink-500/20 px-2 py-0.5 rounded-full">CONVERTS</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="text-pink-500 text-xl"
          >→</motion.div>
        </div>

        {/* After */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="w-16 h-16 bg-pink-500/20 border border-pink-500/50 rounded-full flex items-center justify-center relative">
            <div className="absolute inset-0 bg-pink-500/20 blur-md rounded-full" />
            <span className="text-2xl relative z-10">💰</span>
          </div>
          <span className="text-[10px] text-pink-400 uppercase tracking-widest font-bold">Sales</span>
        </div>
      </div>
    </div>
  )
}

function RedesignPreview() {
  return (
    <div className="w-full h-full flex gap-2 items-stretch">
      {/* Old */}
      <div className="flex-1 rounded-xl border border-white/10 bg-white/5 overflow-hidden flex flex-col">
        <div className="px-2 py-1 bg-white/5 border-b border-white/10">
          <span className="text-[7px] text-white/30 uppercase tracking-widest">Before</span>
        </div>
        <div className="flex-1 p-2 flex flex-col gap-1.5 opacity-50">
          <div className="h-6 rounded bg-gray-500/30" />
          <div className="h-2 w-full rounded bg-gray-500/20" />
          <div className="h-2 w-3/4 rounded bg-gray-500/20" />
          <div className="h-8 rounded bg-gray-500/20 mt-1" />
          <div className="grid grid-cols-2 gap-1 flex-1">
            <div className="rounded bg-gray-500/20" />
            <div className="rounded bg-gray-500/20" />
          </div>
        </div>
      </div>

      {/* Arrow */}
      <div className="flex items-center shrink-0">
        <div className="flex flex-col items-center gap-1">
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="text-violet-400 text-lg"
          >→</motion.div>
        </div>
      </div>

      {/* New */}
      <div className="flex-1 rounded-xl border border-violet-500/30 bg-violet-500/5 overflow-hidden flex flex-col">
        <div className="px-2 py-1 bg-violet-500/10 border-b border-violet-500/20">
          <span className="text-[7px] text-violet-300 uppercase tracking-widest">After</span>
        </div>
        <div className="flex-1 p-2 flex flex-col gap-1.5">
          <div className="h-6 rounded bg-gradient-to-r from-violet-500/40 to-pink-500/30 border border-violet-500/20" />
          <div className="h-2 w-full rounded bg-white/20" />
          <div className="h-2 w-3/4 rounded bg-white/15" />
          <div className="h-8 rounded bg-gradient-to-br from-violet-500/20 to-pink-500/10 border border-violet-500/20 mt-1" />
          <div className="grid grid-cols-2 gap-1 flex-1">
            <div className="rounded bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/20" />
            <div className="rounded bg-gradient-to-br from-pink-500/20 to-transparent border border-pink-500/20" />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   SERVICE DATA
───────────────────────────────────────────── */

const services = [
  {
    id: "web-dev",
    title: "Website Development",
    tagline: "Built to convert visitors into customers",
    metric: <CountUp to={3} suffix="×" />,
    metricLabel: "faster load time",
    accent: "#6366f1",
    accentGlow: "rgba(99,102,241,0.15)",
    preview: <WebsitePreview />,
    colSpan: "md:col-span-2",
    wide: true,
  },
  {
    id: "local-seo",
    title: "Local SEO",
    tagline: "Rank #1 when customers search near you",
    metric: "Top 3",
    metricLabel: "map pack",
    accent: "#06b6d4",
    accentGlow: "rgba(6,182,212,0.15)",
    preview: <SeoPreview />,
    colSpan: "md:col-span-1",
    wide: false,
  },
  {
    id: "google-biz",
    title: "Google Business",
    tagline: "Turn your profile into a lead machine",
    metric: <CountUp to={140} prefix="+" suffix="%" />,
    metricLabel: "profile views",
    accent: "#f97316",
    accentGlow: "rgba(249,115,22,0.15)",
    preview: <GoogleBizPreview />,
    colSpan: "md:col-span-1",
    wide: false,
  },
  {
    id: "whatsapp",
    title: "WhatsApp Automation",
    tagline: "Respond to every lead — even at 3am",
    metric: "24/7",
    metricLabel: "lead capture",
    accent: "#22c55e",
    accentGlow: "rgba(34,197,94,0.15)",
    preview: <WhatsAppPreview />,
    colSpan: "md:col-span-2",
    wide: true,
    flip: true,
  },
  {
    id: "conversion",
    title: "Conversion Optimisation",
    tagline: "More bookings from the traffic you already have",
    metric: <CountUp to={48} prefix="+" suffix="%" />,
    metricLabel: "conversion rate",
    accent: "#ec4899",
    accentGlow: "rgba(236,72,153,0.15)",
    preview: <ConversionPreview />,
    colSpan: "md:col-span-2",
    wide: true,
  },
  {
    id: "redesign",
    title: "Website Redesign",
    tagline: "From outdated to unforgettable in days",
    metric: <CountUp to={100} suffix="%" />,
    metricLabel: "premium aesthetic",
    accent: "#a855f7",
    accentGlow: "rgba(168,85,247,0.15)",
    preview: <RedesignPreview />,
    colSpan: "md:col-span-1",
    wide: false,
  },
]

/* ─────────────────────────────────────────────
   CARD
───────────────────────────────────────────── */

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const wide = service.wide

  return (
    <motion.div
      initial={service.id === "whatsapp" ? { opacity: 0, x: 60 } : { opacity: 0, y: 28 }}
      whileInView={service.id === "whatsapp" ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative rounded-3xl overflow-hidden border border-white/8 bg-[#0e0e1a]/80 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1.5 ${
        wide ? "flex flex-col md:flex-row" : "flex flex-col"
      } ${service.colSpan}`}
      style={{
        boxShadow: hovered
          ? `0 0 0 1px ${service.accent}40, 0 20px 60px -10px ${service.accent}30`
          : "0 2px 20px rgba(0,0,0,0.4)",
      }}
    >
      {/* Glow gradient bg */}
      <div
        className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${service.accentGlow} 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Accent bar — left edge normally, right edge when flipped */}
      <div
        className={`absolute transition-opacity duration-300 ${
          wide
            ? service.flip
              ? "top-0 bottom-0 right-0 w-[2px]"
              : "top-0 bottom-0 left-0 w-[2px]"
            : "top-0 left-0 right-0 h-[2px]"
        }`}
        style={{
          background: wide
            ? `linear-gradient(180deg, transparent, ${service.accent}, transparent)`
            : `linear-gradient(90deg, transparent, ${service.accent}, transparent)`,
          opacity: hovered ? 1 : 0.3,
        }}
      />

      {/* ── WIDE CARD ── */}
      {wide ? (
        <>
          {/* TEXT — shown first (left) normally, first (left) on flip too on mobile, but after preview on desktop when NOT flipped */}
          {service.flip && (
            <div className="relative z-10 flex flex-col justify-center gap-4 p-5 md:p-6 md:flex-1 order-2 md:order-1">
              <div className="flex flex-col" style={{ color: service.accent }}>
                <span className="text-3xl font-black leading-none">{service.metric}</span>
                <span className="text-[11px] text-white/40 mt-0.5 uppercase tracking-wider">{service.metricLabel}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-snug">{service.title}</h3>
                <p className="text-sm text-white/50 mt-1 leading-relaxed">{service.tagline}</p>
              </div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold" style={{ color: service.accent }}>
                <span>Learn more</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          )}

          {/* Divider (desktop only, left of preview when flipped) */}
          {service.flip && (
            <div
              className="hidden md:block w-px self-stretch my-4 shrink-0 order-2 md:order-2"
              style={{ background: `linear-gradient(180deg, transparent, ${service.accent}30, transparent)` }}
            />
          )}

          {/* Preview */}
          <div className={`relative w-full md:w-[55%] shrink-0 p-4 h-56 md:h-auto ${
            service.flip ? "order-1 md:order-3" : ""
          }`}>
            <div className="w-full h-full">
              {service.preview}
            </div>
          </div>

          {/* Divider (desktop only, right of preview when NOT flipped) */}
          {!service.flip && (
            <div
              className="hidden md:block w-px self-stretch my-4 shrink-0"
              style={{ background: `linear-gradient(180deg, transparent, ${service.accent}30, transparent)` }}
            />
          )}

          {/* Text — right side when NOT flipped */}
          {!service.flip && (
            <div className="relative z-10 flex flex-col justify-center gap-4 p-5 md:p-6 md:flex-1">
              <div className="flex flex-col" style={{ color: service.accent }}>
                <span className="text-3xl font-black leading-none">{service.metric}</span>
                <span className="text-[11px] text-white/40 mt-0.5 uppercase tracking-wider">{service.metricLabel}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-snug">{service.title}</h3>
                <p className="text-sm text-white/50 mt-1 leading-relaxed">{service.tagline}</p>
              </div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold" style={{ color: service.accent }}>
                <span>Learn more</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          )}
        </>
      ) : (
        /* ── NARROW CARD: preview TOP, text BOTTOM ── */
        <>
          <div className="relative p-4 pb-0 h-52 shrink-0">
            <div className="w-full h-full">
              {service.preview}
            </div>
          </div>
          <div className="relative z-10 p-5 flex items-end justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-bold text-white leading-snug">{service.title}</h3>
              <p className="text-sm text-white/50 mt-0.5 leading-relaxed">{service.tagline}</p>
            </div>
            <div
              className="shrink-0 flex flex-col items-end"
              style={{ color: service.accent }}
            >
              <span className="text-xl font-black leading-none">{service.metric}</span>
              <span className="text-[10px] text-white/40 leading-tight text-right mt-0.5">{service.metricLabel}</span>
            </div>
          </div>
        </>
      )}
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   SECTION
───────────────────────────────────────────── */

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-background border-t border-border/50 overflow-hidden">
      {/* ambient glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[400px] rounded-full bg-indigo-600/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] rounded-full bg-cyan-500/5 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-sm font-medium tracking-wide">What We Do</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight tracking-tight"
          >
            Services that{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              actually grow
            </span>{" "}
            your business
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Everything a local business needs to get found, get clicked, and get booked — all under one roof.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
