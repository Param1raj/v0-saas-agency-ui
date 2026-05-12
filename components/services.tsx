"use client"

import { motion } from "framer-motion"
import { Code2, LineChart, MapPin, MessageSquare, RefreshCcw, MousePointerClick } from "lucide-react"

const services = [
  {
    title: "Website Development",
    description: "Lightning-fast, mobile-optimized websites designed specifically to convert your local visitors into paying customers.",
    icon: Code2,
    metric: "3x",
    metricLabel: "Faster Load Time",
    colSpan: "lg:col-span-2",
    bgClass: "from-brand-indigo/10 to-transparent",
    borderClass: "hover:border-brand-indigo/50"
  },
  {
    title: "Local SEO",
    description: "Dominate local searches. When customers look for your services, you appear first.",
    icon: LineChart,
    metric: "Top 3",
    metricLabel: "Map Rankings",
    colSpan: "lg:col-span-1",
    bgClass: "from-brand-cyan/10 to-transparent",
    borderClass: "hover:border-brand-cyan/50"
  },
  {
    title: "Google Business",
    description: "Optimize your Google profile to capture high-intent leads directly from search results.",
    icon: MapPin,
    metric: "+140%",
    metricLabel: "Profile Views",
    colSpan: "lg:col-span-1",
    bgClass: "from-orange-500/10 to-transparent",
    borderClass: "hover:border-orange-500/50"
  },
  {
    title: "WhatsApp Automation",
    description: "Instantly capture leads and answer queries 24/7 with integrated WhatsApp funnels.",
    icon: MessageSquare,
    metric: "24/7",
    metricLabel: "Lead Capture",
    colSpan: "lg:col-span-2",
    bgClass: "from-[#25D366]/10 to-transparent",
    borderClass: "hover:border-[#25D366]/50"
  },
  {
    title: "Conversion Optimization",
    description: "Data-driven improvements to your website's layout to maximize the percentage of visitors who book.",
    icon: MousePointerClick,
    metric: "+48%",
    metricLabel: "Conversion Rate",
    colSpan: "lg:col-span-2",
    bgClass: "from-pink-500/10 to-transparent",
    borderClass: "hover:border-pink-500/50"
  },
  {
    title: "Website Redesign",
    description: "Transform your outdated site into a modern, premium experience that builds instant trust.",
    icon: RefreshCcw,
    metric: "100%",
    metricLabel: "Premium Aesthetic",
    colSpan: "lg:col-span-1",
    bgClass: "from-brand-violet/10 to-transparent",
    borderClass: "hover:border-brand-violet/50"
  }
]

export function Services() {
  return (
    <section id="services" className="relative pt-8 md:pt-12 pb-24 md:pb-32 bg-background border-t border-border/50">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo mb-6"
          >
            <span className="text-sm font-medium tracking-wide">Our Expertise</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight tracking-tight"
          >
            Everything You Need to <span className="bg-gradient-to-r from-brand-indigo to-brand-cyan bg-clip-text text-transparent">Dominate Local</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative flex flex-col justify-between p-8 rounded-3xl border border-border/50 shadow-sm bg-card/40 backdrop-blur-sm overflow-hidden transition-colors duration-500 ${service.colSpan} ${service.borderClass}`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${service.bgClass}`} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-foreground/5 border border-border/50 flex items-center justify-center transform group-hover:-translate-y-1 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-foreground" />
                    </div>
                    
                    {/* Animated Metric */}
                    <div className="text-right">
                      <div className="text-2xl font-bold text-foreground">{service.metric}</div>
                      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{service.metricLabel}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                {/* Mini UI Preview / Decoration (Abstract Representation) */}
                <div className="relative z-0 mt-8 h-20 w-full overflow-hidden rounded-xl border border-border/50 bg-foreground/5 flex items-center justify-center">
                   <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                   <motion.div 
                     initial={{ width: "0%" }}
                     whileInView={{ width: "100%" }}
                     transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                     className="h-[2px] bg-gradient-to-r from-transparent via-foreground/20 to-transparent absolute top-1/2 -translate-y-1/2"
                   />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
