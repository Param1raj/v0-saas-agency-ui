"use client"

import { Quote } from "lucide-react"

import { testimonialItems } from "@/components/site-data"

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">
            Client Stories
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            What Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty leading-relaxed">
            Short feedback from businesses that wanted a stronger digital presence and a smoother customer journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonialItems.map((testimonial) => (
            <div
              key={testimonial.author}
              className="relative p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-6" />
              <blockquote className="text-foreground leading-relaxed mb-8 text-pretty">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-sm font-semibold text-foreground">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
