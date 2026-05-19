"use client"

import { motion } from "framer-motion"
import { CountUp } from "@/components/ui/count-up"

const metrics = [
  { value: 5, prefix: "", suffix: "+", label: "Businesses Helped" },
  { value: 92, prefix: "", suffix: "+", label: "Site Speed Score" },
  { value: 3, prefix: "", suffix: "x", label: "Faster Websites" },
  { value: 100, prefix: "", suffix: "%", label: "Focus on Growth" }
]

const logos = [
  "Money Roots", "Chinese Garden", "Dholera Realestates", 
  "Money Roots", "Chinese Garden", "Dholera Realestates"
]

export function TrustStrip() {
  return (
    <section className="relative py-12 overflow-hidden bg-background border-y border-border/50">
      {/* Subtle fade edges for the marquee */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center divide-x divide-border/50">
          {metrics.map((metric, i) => (
            <motion.div 
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent mb-2">
                <CountUp to={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="flex overflow-hidden group">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap gap-16 md:gap-32 px-8 items-center"
        >
          {logos.map((logo, i) => (
            <div 
              key={`${logo}-${i}`} 
              className="text-2xl font-black tracking-tighter opacity-30 grayscale hover:grayscale-0 hover:opacity-100 hover:text-brand-indigo transition-all duration-300 cursor-default"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
