"use client";

import { HoverCard } from "./card/hover-card"

import {
  advantageItems,
  whyUsHeadline,
  whyUsIntro,
} from "@/components/site-data"

export function WhyUs() {
  return (
    <section id="why-us" className="relative pb-24 md:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-125 h-125 bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-18 text-center m-auto">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">
            Why HashiraDevs
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance leading-tight">
            {whyUsHeadline}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-pretty max-w-2xl mx-auto">
            {whyUsIntro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantageItems.map((advantage, index) => (
            <HoverCard
              key={advantage.title}
              title={advantage.title}
              Icon={advantage.icon}
              description={advantage.description}
              isLast={index === advantageItems.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
