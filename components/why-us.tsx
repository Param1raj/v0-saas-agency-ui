"use client";

import { Award, Zap, MessageCircle, Blocks, Handshake } from "lucide-react";
import { cn } from "@/lib/utils";
import { HoverCard } from "./card/hover-card";

const advantages = [
  {
    icon: Award,
    title: "Senior-Level Engineering",
    description:
      "Every project is led by experienced engineers with 8+ years of expertise. No juniors learning on your dime—just battle-tested professionals delivering production-grade code.",
  },
  {
    icon: Zap,
    title: "Performance-First Development",
    description:
      "Speed is a feature. We optimize from day one with lazy loading, code splitting, edge caching, and Core Web Vitals tuning to deliver sub-second experiences.",
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    description:
      "Weekly demos, async updates, and direct access to your team. No black boxes—you'll always know exactly where your project stands and what's coming next.",
  },
  {
    icon: Blocks,
    title: "Scalable Architecture",
    description:
      "Built for growth. Microservices, horizontal scaling, and clean abstractions ensure your codebase evolves gracefully from MVP to enterprise scale.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "We're not just vendors—we're partners. From launch support to ongoing maintenance, we're committed to your success for the long haul.",
  },
];

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
            We combine technical excellence with a partnership mindset to
            deliver software that stands the test of time.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <HoverCard
              title={advantage.title}
              Icon={advantage.icon}
              description={advantage.description}
              isLast={index === advantages.length-1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
