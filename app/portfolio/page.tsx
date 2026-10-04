"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CaseStudies } from "@/constants/config"
import { ProjectCard } from "@/components/card/project-card"
import { TypingAnimation } from "@/components/ui/typing-animation"

const categories = ["All", "Web", "Mobile", "SaaS", "E-commerce"] as const
type Category = (typeof categories)[number]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All")

  const filteredProjects = activeCategory === "All" 
    ? CaseStudies
    : CaseStudies.filter(p => p.category === activeCategory)

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        {/* Background effects */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full h-[400px] bg-primary/8 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            <TypingAnimation text="Our Work" />
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            A showcase of projects we have built for ambitious companies. 
            Each represents our commitment to quality, performance, and results.
          </p>
          <Link
            href="/startups"
            className="group inline-flex items-center gap-1 mt-6 text-sm md:text-base font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Hiring for a startup? See how I work with startup teams
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
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
              <ProjectCard key={project.title} {...project} />
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-[500px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

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
              shimmer={true}
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
    </main>
  )
}
