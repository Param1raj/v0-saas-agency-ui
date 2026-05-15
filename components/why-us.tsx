"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Snail, EyeOff, Smartphone, MessageCircleOff, ShieldAlert, TrendingDown } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/ui/magnetic-button"

const painPoints = [
  {
    title: "Customers Leave Before Contacting You",
    description: "Visitors make up their mind in seconds. A slow or confusing site sends them straight to a competitor.",
    icon: Snail,
    color: "text-red-400",
    bg: "bg-red-400/10",
    border: "group-hover:border-red-400/50",
    glow: "shadow-red-500/20",
    stat: "53%",
    statLabel: "of users abandon slow sites"
  },
  {
    title: "Your Business Barely Appears on Google",
    description: "If you're not on page one or in the Map Pack, competitors are getting the calls that should be yours.",
    icon: EyeOff,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "group-hover:border-orange-400/50",
    glow: "shadow-orange-500/20",
    stat: "75%",
    statLabel: "never scroll past page 1"
  },
  {
    title: "Mobile Visitors Drop Off Quickly",
    description: "80% of local searches happen on phones. If your site isn't built for mobile, you're losing most of your traffic.",
    icon: Smartphone,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "group-hover:border-yellow-400/50",
    glow: "shadow-yellow-500/20",
    stat: "80%",
    statLabel: "searches from mobile"
  },
  {
    title: "Leads Are Lost Without Follow-Up",
    description: "Without WhatsApp integration or automated responses, most inquiries go cold before you ever reply.",
    icon: MessageCircleOff,
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "group-hover:border-green-400/50",
    glow: "shadow-green-500/20",
    stat: "2B+",
    statLabel: "WhatsApp active users"
  },
  {
    title: "Competitors Look More Trustworthy Online",
    description: "Outdated design signals low credibility. Customers choose who they trust — and trust is built in 0.05 seconds.",
    icon: ShieldAlert,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "group-hover:border-purple-400/50",
    glow: "shadow-purple-500/20",
    stat: "0.05s",
    statLabel: "to form a first impression"
  },
  {
    title: "Your Website Fails to Convert Visitors",
    description: "Traffic means nothing without conversion. Most visitors leave without ever calling, booking, or messaging.",
    icon: TrendingDown,
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    border: "group-hover:border-pink-400/50",
    glow: "shadow-pink-500/20",
    stat: "96%",
    statLabel: "visitors don't convert"
  }
]

export function WhyUs() {
  const [particles, setParticles] = useState<any[]>([])

  useEffect(() => {
    setParticles(Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 4,
    })))
  }, [])

  return (
    <section id="pain-points" className="relative pt-24 md:pt-32 pb-8 md:pb-12 bg-background overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-indigo/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Floating ambient particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-red-500/20"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 mb-6"
          >
            <span className="text-sm font-medium tracking-wide">The Problem</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight tracking-tight"
          >
            Most Local Business Websites Fail to <span className="text-red-400">Generate Customers</span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {painPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className={`group relative bg-card/40 backdrop-blur-md border border-border/50 shadow-sm rounded-3xl p-8 overflow-hidden transition-all duration-300 ${point.border} hover:shadow-2xl hover:${point.glow}`}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 ${point.bg}`} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${point.bg} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-7 h-7 ${point.color}`} />
                    </div>
                    {/* Stat badge */}
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${point.color}`}>{point.stat}</div>
                      <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider max-w-[100px] text-right leading-tight">{point.statLabel}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{point.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>

                  {/* Animated bottom line */}
                  <div className="mt-6 h-[2px] w-full overflow-hidden rounded-full bg-foreground/5">
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      className={`h-full ${point.bg}`}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <MagneticButton>
            <Button
              asChild
              size="lg"
              className="bg-brand-indigo text-white hover:bg-brand-indigo/90 px-8 py-7 text-lg font-medium rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-all duration-300"
            >
              <Link href="/contact">
                Get Free Growth Audit
              </Link>
            </Button>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
