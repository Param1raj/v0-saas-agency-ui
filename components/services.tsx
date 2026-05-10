"use client"

import { cn } from "@/lib/utils"

import {
  serviceItems,
  servicesHeadline,
  servicesIntro,
} from "@/components/site-data"

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-150 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-18">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 text-balance">
            {servicesHeadline}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty leading-relaxed">
            {servicesIntro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {serviceItems.map((service) => (
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
              <div className="relative w-14 h-14 rounded-xl bg-secondary/80 flex items-center justify-center mb-7 transition-all duration-500 group-hover:bg-primary/15 group-hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.4)]">
                <service.icon className="w-7 h-7 text-primary transition-transform duration-500 group-hover:scale-110" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-[15px] line-clamp-3">
                {service.description}
              </p>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
