"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Elite Development Partner</span>
        </div>
        
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance">
          <span className="text-foreground">We build </span>
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            exceptional
          </span>
          <br />
          <span className="text-foreground">digital products</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
          HashiraDevs is a premium software development agency crafting 
          world-class applications for ambitious companies worldwide.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="group bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-medium transition-all duration-300"
          >
            Start a Project
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-6 text-base font-medium border-border bg-transparent hover:bg-secondary/50 transition-all duration-300"
          >
            View Our Work
          </Button>
        </div>
        
        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[
            { value: "150+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "12+", label: "Years Experience" },
            { value: "50+", label: "Global Clients" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
