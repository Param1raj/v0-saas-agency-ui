"use client"

import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "Zenith Finance Platform",
    description: "A next-generation banking dashboard handling $2B+ in transactions annually. Built for speed, security, and seamless user experience.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "AWS"],
    gradient: "from-blue-600/20 via-cyan-500/10 to-transparent",
    accentColor: "group-hover:shadow-blue-500/20",
  },
  {
    title: "Pulse Health SaaS",
    description: "AI-powered health monitoring platform serving 500k+ patients. Real-time analytics, HIPAA-compliant infrastructure, and intuitive dashboards.",
    technologies: ["React", "Node.js", "MongoDB", "TensorFlow", "GCP"],
    gradient: "from-emerald-600/20 via-teal-500/10 to-transparent",
    accentColor: "group-hover:shadow-emerald-500/20",
  },
  {
    title: "Nova Commerce Engine",
    description: "Headless e-commerce solution processing 1M+ orders monthly. Lightning-fast checkout, inventory management, and omnichannel support.",
    technologies: ["Vue.js", "GraphQL", "Redis", "Elasticsearch", "Docker"],
    gradient: "from-violet-600/20 via-purple-500/10 to-transparent",
    accentColor: "group-hover:shadow-violet-500/20",
  },
]

export function Work() {
  return (
    <section id="work" className="relative py-28 md:py-36">
      {/* Background accent */}
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 text-balance">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty leading-relaxed">
            A selection of recent work showcasing our expertise in building 
            complex, scalable applications for ambitious clients.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={cn(
                "group relative flex flex-col rounded-2xl border border-border/60 bg-card/40 overflow-hidden",
                "transition-all duration-500 ease-out",
                "hover:border-primary/30 hover:-translate-y-1",
                "hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]",
                project.accentColor
              )}
            >
              {/* Mockup Image Area */}
              <div className="relative h-52 md:h-56 overflow-hidden">
                {/* Gradient background */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br",
                  project.gradient
                )} />
                
                {/* Mockup placeholder - browser window style */}
                <div className="absolute inset-4 md:inset-6 rounded-lg border border-border/40 bg-background/60 backdrop-blur-sm overflow-hidden">
                  {/* Browser dots */}
                  <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/40">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                    <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                    <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                  </div>
                  {/* Content area with subtle pattern */}
                  <div className="p-3 space-y-2">
                    <div className="h-3 w-3/4 rounded bg-muted/50" />
                    <div className="h-3 w-1/2 rounded bg-muted/30" />
                    <div className="h-8 w-full rounded bg-muted/20 mt-3" />
                    <div className="flex gap-2 mt-2">
                      <div className="h-6 w-16 rounded bg-primary/20" />
                      <div className="h-6 w-16 rounded bg-muted/30" />
                    </div>
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Content */}
              <div className="flex flex-col flex-1 p-6 md:p-8">
                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-[15px] leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary/80 text-muted-foreground border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Case Study Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>

              {/* Top edge glow on hover */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
