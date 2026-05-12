"use client"

import { motion } from "framer-motion"
import { Snail, EyeOff, Smartphone, MessageCircleOff, ShieldAlert, TrendingDown } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/ui/magnetic-button"

const painPoints = [
  {
    title: "Slow Loading Times",
    description: "Customers leave if a site takes more than 3 seconds to load.",
    icon: Snail,
    color: "text-red-400",
    bg: "bg-red-400/10",
    border: "group-hover:border-red-400/50"
  },
  {
    title: "Poor Google Visibility",
    description: "If you aren't on page one, your competitors get the customers.",
    icon: EyeOff,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "group-hover:border-orange-400/50"
  },
  {
    title: "Weak Mobile Experience",
    description: "80% of local searches happen on phones. Your site must adapt.",
    icon: Smartphone,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "group-hover:border-yellow-400/50"
  },
  {
    title: "No WhatsApp Funnel",
    description: "Missing out on instant messaging leads and direct bookings.",
    icon: MessageCircleOff,
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "group-hover:border-green-400/50"
  },
  {
    title: "Low Trust Design",
    description: "Outdated aesthetics make your business look unprofessional.",
    icon: ShieldAlert,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "group-hover:border-purple-400/50"
  },
  {
    title: "Poor Conversion Flow",
    description: "Traffic means nothing if visitors don't become paying customers.",
    icon: TrendingDown,
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    border: "group-hover:border-pink-400/50"
  }
]

export function WhyUs() {
  return (
    <section id="pain-points" className="relative pt-24 md:pt-32 pb-8 md:pb-12 bg-background overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-indigo/5 rounded-full blur-[150px] pointer-events-none" />

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
                className={`group relative bg-card/40 backdrop-blur-md border border-border/50 shadow-sm rounded-3xl p-8 overflow-hidden transition-all duration-300 ${point.border} hover:shadow-2xl hover:shadow-${point.color.split('-')[1]}-500/10`}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 ${point.bg}`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${point.bg} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${point.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{point.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
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
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-brand-indigo text-white hover:bg-brand-indigo/90 px-8 py-7 text-lg font-medium rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-all duration-300"
              >
                Get Free Website Audit
              </Button>
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
