"use client"

import { motion } from "framer-motion"
import { Utensils, Stethoscope, Scissors, Dumbbell, Building2, GraduationCap, Wrench, Home } from "lucide-react"

const industries = [
  { name: "Restaurants", icon: Utensils, color: "from-orange-500/20 to-red-500/20", textColor: "text-orange-500" },
  { name: "Clinics", icon: Stethoscope, color: "from-blue-500/20 to-cyan-500/20", textColor: "text-blue-500" },
  { name: "Salons", icon: Scissors, color: "from-pink-500/20 to-rose-500/20", textColor: "text-pink-500" },
  { name: "Gyms", icon: Dumbbell, color: "from-zinc-500/20 to-slate-500/20", textColor: "text-zinc-400" },
  { name: "Real Estate", icon: Building2, color: "from-brand-indigo/20 to-brand-violet/20", textColor: "text-brand-indigo" },
  { name: "Education", icon: GraduationCap, color: "from-yellow-500/20 to-amber-500/20", textColor: "text-yellow-500" },
  { name: "Repair Services", icon: Wrench, color: "from-gray-500/20 to-zinc-500/20", textColor: "text-gray-400" },
  { name: "Home Services", icon: Home, color: "from-emerald-500/20 to-green-500/20", textColor: "text-emerald-500" }
]

export function Industries() {
  return (
    <section className="relative py-24 bg-background overflow-hidden border-t border-border">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-border/50 text-muted-foreground mb-6"
          >
            <span className="text-sm font-medium tracking-wide">Industries We Serve</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight tracking-tight"
          >
            Built for Local Businesses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto"
          >
            Helping restaurants, clinics, salons, gyms, and service businesses grow across Delhi, Noida, Gurugram, Moradabad, Lucknow, and beyond.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl bg-card/40 border border-border/50 shadow-sm overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className={`w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center mb-4 border border-border/50 relative z-10 group-hover:bg-foreground/10 transition-colors`}>
                  <Icon className={`w-8 h-8 ${industry.textColor} transition-transform duration-500 group-hover:scale-110`} />
                </div>
                <h3 className="text-lg font-bold text-foreground relative z-10 text-center">{industry.name}</h3>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
