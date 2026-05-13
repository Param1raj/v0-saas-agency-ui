"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Clock, Users, Zap, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { projectItems } from "./site-data"
import { ProjectCard } from "./card/project-card"

const caseStudies = [
  {
    title: "Dr. Sharma's Dental Clinic",
    category: "Healthcare",
    description: "Transformed an outdated informational site into a high-converting patient booking machine.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    metrics: [
      { label: "Online Bookings", value: "+145%", icon: Users, color: "text-brand-indigo" },
      { label: "Load Speed", value: "3x", icon: Zap, color: "text-yellow-500" }
    ],
    color: "from-brand-indigo/20 to-brand-cyan/20"
  },
  {
    title: "Spice Route Restaurant",
    category: "Hospitality",
    description: "Built a mobile-first menu and direct WhatsApp ordering system, bypassing 3rd party commission fees.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    metrics: [
      { label: "Direct Orders", value: "+80%", icon: ArrowUpRight, color: "text-green-500" },
      { label: "Local Visibility", value: "+210%", icon: Search, color: "text-brand-violet" }
    ],
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Elite Auto Repair",
    category: "Automotive",
    description: "Dominating local search results with a completely restructured SEO foundation and fast loading UI.",
    image: "https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&q=80&w=800",
    metrics: [
      { label: "Inquiries", value: "2.5x", icon: Users, color: "text-orange-500" },
      { label: "Bounce Rate", value: "-45%", icon: Clock, color: "text-red-500" }
    ],
    color: "from-orange-500/20 to-red-500/20"
  }
]

export function Work() {
  return (
    <section id="work" className="relative pt-8 md:pt-12 pb-24 md:pb-32 bg-background">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan mb-6"
            >
              <span className="text-sm font-medium tracking-wide">Case Studies</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight"
            >
              Proven Growth for <br/>
              <span className="text-muted-foreground">Local Businesses.</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/portfolio"
              className="inline-flex items-center gap-2 text-foreground font-medium hover:text-brand-indigo transition-colors group"
            >
              View all projects 
              <span className="w-8 h-8 rounded-full bg-foreground/5 border border-border/50 flex items-center justify-center group-hover:bg-brand-indigo group-hover:border-brand-indigo transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projectItems.map(project => (
            <ProjectCard key={project.title} {...{...project, images:project.ss} } />
            // <motion.div
            //   key={study.title}
            //   initial={{ opacity: 0, y: 30 }}
            //   whileInView={{ opacity: 1, y: 0 }}
            //   viewport={{ once: true, margin: "-100px" }}
            //   className="group relative rounded-3xl bg-card/40 border border-border/50 shadow-sm overflow-hidden hover:border-primary/50 transition-colors"
            // >
            //   {/* Image Container with Hover Zoom */}
            //   <div className="relative h-64 overflow-hidden">
            //     <div className={`absolute inset-0 bg-gradient-to-t ${study.color} mix-blend-multiply opacity-60 z-10`} />
            //     <Image 
            //       src={study.image} 
            //       alt={study.title}
            //       fill
            //       className="object-cover transition-transform duration-700 group-hover:scale-110"
            //     />
            //     <div className="absolute top-4 left-4 z-20">
            //       <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-md text-xs font-medium border border-border/50">
            //         {study.category}
            //       </span>
            //     </div>
            //   </div>

            //   <div className="p-8 relative z-20 bg-background/50 backdrop-blur-xl">
            //     <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-brand-indigo transition-colors">
            //       {study.title}
            //     </h3>
            //     <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            //       {study.description}
            //     </p>

            //     {/* KPI Metrics */}
            //     {/* <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border/50">
            //       {study.metrics.map((metric, i) => {
            //         const MetricIcon = metric.icon
            //         return (
            //           <div key={i} className="flex flex-col">
            //             <div className="flex items-center gap-2 mb-1">
            //               <MetricIcon className={`w-4 h-4 ${metric.color}`} />
            //               <span className="text-2xl font-bold text-foreground">{metric.value}</span>
            //             </div>
            //             <span className="text-xs text-muted-foreground uppercase tracking-wider">{metric.label}</span>
            //           </div>
            //         )
            //       })}
            //     </div> */}
            //   </div>
            // </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
