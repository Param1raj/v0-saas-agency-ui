"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const categories = ["All", "Web", "Mobile", "SaaS", "E-commerce"] as const
type Category = (typeof categories)[number]

const projects = [
  {
    title: "Zenith Finance Platform",
    description: "Next-generation banking dashboard handling $2B+ in transactions annually with real-time analytics and fraud detection.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "AWS"],
    category: "Web" as Category,
    gradient: "from-blue-600/20 via-cyan-500/10 to-transparent",
    accentColor: "group-hover:shadow-blue-500/20",
  },
  {
    title: "Pulse Health SaaS",
    description: "AI-powered health monitoring platform serving 500k+ patients with HIPAA-compliant infrastructure.",
    technologies: ["React", "Node.js", "MongoDB", "TensorFlow", "GCP"],
    category: "SaaS" as Category,
    gradient: "from-emerald-600/20 via-teal-500/10 to-transparent",
    accentColor: "group-hover:shadow-emerald-500/20",
  },
  {
    title: "Nova Commerce Engine",
    description: "Headless e-commerce solution processing 1M+ orders monthly with lightning-fast checkout.",
    technologies: ["Vue.js", "GraphQL", "Redis", "Elasticsearch", "Docker"],
    category: "E-commerce" as Category,
    gradient: "from-violet-600/20 via-purple-500/10 to-transparent",
    accentColor: "group-hover:shadow-violet-500/20",
  },
  {
    title: "Meridian Banking App",
    description: "Mobile banking application with biometric auth, instant transfers, and investment tracking for 200k+ users.",
    technologies: ["React Native", "TypeScript", "Firebase", "Plaid", "AWS"],
    category: "Mobile" as Category,
    gradient: "from-amber-600/20 via-orange-500/10 to-transparent",
    accentColor: "group-hover:shadow-amber-500/20",
  },
  {
    title: "Apex Analytics Dashboard",
    description: "Enterprise analytics SaaS with real-time data visualization, custom reporting, and team collaboration.",
    technologies: ["Next.js", "D3.js", "ClickHouse", "Kubernetes", "Azure"],
    category: "SaaS" as Category,
    gradient: "from-rose-600/20 via-pink-500/10 to-transparent",
    accentColor: "group-hover:shadow-rose-500/20",
  },
  {
    title: "Luxe Retail Platform",
    description: "Premium e-commerce experience for luxury brand with AR try-on, personalized recommendations, and global fulfillment.",
    technologies: ["Nuxt.js", "Shopify", "Three.js", "Algolia", "Vercel"],
    category: "E-commerce" as Category,
    gradient: "from-indigo-600/20 via-blue-500/10 to-transparent",
    accentColor: "group-hover:shadow-indigo-500/20",
  },
  {
    title: "TaskFlow Mobile",
    description: "Cross-platform productivity app with offline sync, team workspaces, and AI-powered task prioritization.",
    technologies: ["Flutter", "Dart", "Supabase", "OpenAI", "RevenueCat"],
    category: "Mobile" as Category,
    gradient: "from-cyan-600/20 via-sky-500/10 to-transparent",
    accentColor: "group-hover:shadow-cyan-500/20",
  },
  {
    title: "Vertex CRM Platform",
    description: "Full-featured CRM with pipeline management, email automation, and predictive lead scoring for sales teams.",
    technologies: ["React", "Python", "PostgreSQL", "SendGrid", "Heroku"],
    category: "Web" as Category,
    gradient: "from-fuchsia-600/20 via-purple-500/10 to-transparent",
    accentColor: "group-hover:shadow-fuchsia-500/20",
  },
]

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-2xl border border-border/60 bg-card/40 overflow-hidden",
        "transition-all duration-500 ease-out",
        "hover:border-primary/30 hover:-translate-y-1",
        "hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]",
        project.accentColor
      )}
    >
      {/* Mockup Image Area */}
      <div className="relative h-48 md:h-52 overflow-hidden">
        {/* Gradient background */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br",
          project.gradient
        )} />
        
        {/* Mockup placeholder - browser window style */}
        <div className="absolute inset-4 md:inset-5 rounded-lg border border-border/40 bg-background/60 backdrop-blur-sm overflow-hidden">
          {/* Browser dots */}
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/40">
            <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
            <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
            <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
          </div>
          {/* Content area with subtle pattern */}
          <div className="p-3 space-y-2">
            <div className="h-2.5 w-3/4 rounded bg-muted/50" />
            <div className="h-2.5 w-1/2 rounded bg-muted/30" />
            <div className="h-6 w-full rounded bg-muted/20 mt-2" />
            <div className="flex gap-2 mt-2">
              <div className="h-5 w-14 rounded bg-primary/20" />
              <div className="h-5 w-14 rounded bg-muted/30" />
            </div>
          </div>
        </div>

        {/* Hover glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        
        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs font-medium rounded-md bg-secondary/80 text-muted-foreground border border-border/50"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-secondary/80 text-muted-foreground border border-border/50">
              +{project.technologies.length - 4}
            </span>
          )}
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
  )
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All")

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        {/* Background effects */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Our Work
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            A showcase of projects we have built for ambitious companies. 
            Each represents our commitment to quality, performance, and results.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="relative pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-foreground text-background shadow-lg"
                    : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground border border-border/50"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32">
        {/* Background */}
        <div className="absolute inset-0 bg-secondary/30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Have a project in mind?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto text-pretty">
            Let's discuss how we can help bring your vision to life with 
            world-class development and design.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="group bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-medium transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]"
            >
              <span className="flex items-center">
                Let's Talk
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-base font-medium border-border bg-transparent hover:bg-secondary/50 hover:border-primary/50 transition-all duration-300"
            >
              View Services
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
