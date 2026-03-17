"use client"

import { Globe, Smartphone, Layers, Palette, Cloud, Server } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Globe,
    title: "Custom Web Applications",
    description: "Scalable, high-performance web applications built with modern frameworks like Next.js, React, and Vue. From complex dashboards to customer-facing portals.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native iOS and Android apps, plus cross-platform solutions with React Native and Flutter. Seamless experiences that users love.",
  },
  {
    icon: Layers,
    title: "SaaS Platforms",
    description: "End-to-end SaaS product development with multi-tenancy, subscription billing, analytics, and scalable architecture built for growth.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Research-driven design that converts. User flows, wireframes, prototypes, and polished interfaces that elevate your brand.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "AWS, GCP, and Azure infrastructure with CI/CD pipelines, containerization, monitoring, and auto-scaling for production-ready deployments.",
  },
  {
    icon: Server,
    title: "API & Backend Development",
    description: "Robust REST and GraphQL APIs, microservices architecture, database design, and third-party integrations that power your applications.",
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-150 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 text-balance">
            Our Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty leading-relaxed">
            Senior-level engineering across the full stack. We bring deep technical 
            expertise to every project we deliver.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={cn(
                "group relative p-8 lg:p-10 rounded-2xl border border-border/60 bg-card/30",
                "transition-all duration-500 ease-out",
                "hover:border-primary/40 hover:bg-card/60",
                "hover:shadow-[0_0_60px_-12px_rgba(99,102,241,0.25)]",
                "hover:-translate-y-1"
              )}
            >
              {/* Icon container */}
              <div className="relative w-14 h-14 rounded-xl bg-secondary/80 flex items-center justify-center mb-7 transition-all duration-500 group-hover:bg-primary/15 group-hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.4)]">
                <service.icon className="w-7 h-7 text-primary transition-transform duration-500 group-hover:scale-110" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                {service.description}
              </p>

              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Top edge glow line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
