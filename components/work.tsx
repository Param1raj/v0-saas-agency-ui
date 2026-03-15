"use client"

import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "Zenith Finance",
    category: "Fintech Platform",
    description: "A next-generation banking platform handling $2B+ in transactions annually.",
    image: "/projects/zenith.jpg",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Pulse Health",
    category: "Healthcare SaaS",
    description: "AI-powered health monitoring platform serving 500k+ patients worldwide.",
    image: "/projects/pulse.jpg",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Nova Commerce",
    category: "E-commerce",
    description: "Headless commerce solution processing 1M+ orders per month.",
    image: "/projects/nova.jpg",
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "Cipher Security",
    category: "Cybersecurity",
    description: "Enterprise security suite protecting Fortune 500 companies.",
    image: "/projects/cipher.jpg",
    color: "from-purple-500/20 to-pink-500/20",
  },
]

export function Work() {
  return (
    <section id="work" className="relative py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">
              Our Work
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
              Projects that define industries
            </h2>
          </div>
          <a 
            href="#" 
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            View all projects
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href="#"
              className={cn(
                "group relative rounded-2xl overflow-hidden border border-border",
                "hover:border-primary/50 transition-all duration-300",
                index === 0 && "md:col-span-2"
              )}
            >
              {/* Background gradient */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-50",
                project.color
              )} />
              
              {/* Content */}
              <div className={cn(
                "relative p-8 md:p-10",
                index === 0 ? "min-h-[400px]" : "min-h-[300px]",
                "flex flex-col justify-end"
              )}>
                {/* Category badge */}
                <div className="inline-flex self-start px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground mb-4">
                  {project.category}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground max-w-lg">
                  {project.description}
                </p>

                {/* Arrow indicator */}
                <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-foreground/20">
                  <ArrowUpRight className="w-5 h-5 text-foreground" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
