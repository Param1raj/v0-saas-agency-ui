"use client"

import { Award, Zap, MessageCircle, Blocks, Handshake } from "lucide-react"
import { cn } from "@/lib/utils"

const advantages = [
  {
    icon: Award,
    title: "Senior-Level Engineering",
    description: "Every project is led by experienced engineers with 8+ years of expertise. No juniors learning on your dime—just battle-tested professionals delivering production-grade code.",
  },
  {
    icon: Zap,
    title: "Performance-First Development",
    description: "Speed is a feature. We optimize from day one with lazy loading, code splitting, edge caching, and Core Web Vitals tuning to deliver sub-second experiences.",
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    description: "Weekly demos, async updates, and direct access to your team. No black boxes—you'll always know exactly where your project stands and what's coming next.",
  },
  {
    icon: Blocks,
    title: "Scalable Architecture",
    description: "Built for growth. Microservices, horizontal scaling, and clean abstractions ensure your codebase evolves gracefully from MVP to enterprise scale.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description: "We're not just vendors—we're partners. From launch support to ongoing maintenance, we're committed to your success for the long haul.",
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="relative pb-28 md:pb-36 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-center m-auto">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">
            Why HashiraDevs
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance leading-tight">
            Built different. Delivered better.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
            We combine technical excellence with a partnership mindset to deliver 
            software that stands the test of time.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className={cn(
                "group relative",
                // Make the last item span full width on md, center on lg
                index === advantages.length - 1 && "md:col-span-2 lg:col-span-1"
              )}
            >
              <div
                className={cn(
                  "h-full p-8 lg:p-10 rounded-2xl border border-border/50 bg-gradient-to-b from-card/40 to-card/20",
                  "transition-all duration-500 ease-out",
                  "hover:border-primary/30 hover:from-card/60 hover:to-card/30",
                  "hover:shadow-[0_8px_40px_-12px_rgba(99,102,241,0.2)]"
                )}
              >
                {/* Icon with number badge */}
                <div className="relative mb-8">
                  <div className="w-14 h-14 rounded-xl bg-secondary/60 flex items-center justify-center transition-all duration-500 group-hover:bg-primary/10 group-hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.35)]">
                    <advantage.icon className="w-7 h-7 text-primary transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary text-xs font-semibold text-muted-foreground flex items-center justify-center border border-border/50">
                    {index + 1}
                  </span>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
