"use client"

import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "HashiraDevs transformed our vision into a product that exceeded every expectation. Their technical expertise and attention to detail are unmatched.",
    author: "Manish Kumar",
    role: "CEO, MoneyRoots",
    avatar: "SC",
  },
  {
    quote: "Working with HashiraDevs was a game-changer. They delivered a complex healthcare platform in record time without compromising on quality.",
    author: "Abhiskek Sharma",
    role: "CTO, Chainese Garden",
    avatar: "MR",
  },
  {
    quote: "The team's ability to understand our business needs and translate them into elegant technical solutions is remarkable.",
    author: "Nitesh Kumar",
    role: "Founder, Dholera Real Estates",
    avatar: "EW",
  },
]

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">
            Client Stories
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Trusted by industry leaders
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="relative p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary/30 mb-6" />
              
              {/* Quote text */}
              <blockquote className="text-foreground leading-relaxed mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              
              {/* Author */}
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
