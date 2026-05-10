"use client"

import { trustMetrics } from "@/components/site-data"

export function TrustStrip() {
  return (
    <section className="relative py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {trustMetrics.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-border/50 bg-card/20 px-4 py-4 text-center text-sm text-muted-foreground backdrop-blur-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
