"use client"

import { Code2, Smartphone, Cloud, Palette, Shield, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Scalable, high-performance web applications built with modern frameworks and best practices.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile experiences that users love and businesses rely on.",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Robust cloud infrastructure designed for scale, security, and operational excellence.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces crafted through user research and design thinking.",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Enterprise-grade security implementations to protect your data and users.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimization strategies that deliver lightning-fast experiences at any scale.",
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">
            What We Do
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            End-to-end development expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            From concept to deployment, we deliver comprehensive solutions 
            that drive business growth and user engagement.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                "group relative p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm",
                "hover:border-primary/50 hover:bg-card transition-all duration-300",
                "cursor-default"
              )}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
