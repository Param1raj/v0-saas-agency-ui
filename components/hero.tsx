"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const draw = () => {
      time += 0.003
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Animated gradient orbs
      const gradient1 = ctx.createRadialGradient(
        canvas.width * 0.3 + Math.sin(time) * 100,
        canvas.height * 0.4 + Math.cos(time * 0.7) * 80,
        0,
        canvas.width * 0.3,
        canvas.height * 0.4,
        400
      )
      gradient1.addColorStop(0, "rgba(99, 102, 241, 0.15)")
      gradient1.addColorStop(1, "transparent")
      ctx.fillStyle = gradient1
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.7 + Math.cos(time * 0.8) * 120,
        canvas.height * 0.6 + Math.sin(time * 0.6) * 100,
        0,
        canvas.width * 0.7,
        canvas.height * 0.6,
        450
      )
      gradient2.addColorStop(0, "rgba(139, 92, 246, 0.12)")
      gradient2.addColorStop(1, "transparent")
      ctx.fillStyle = gradient2
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const gradient3 = ctx.createRadialGradient(
        canvas.width * 0.5 + Math.sin(time * 1.2) * 80,
        canvas.height * 0.3 + Math.cos(time) * 60,
        0,
        canvas.width * 0.5,
        canvas.height * 0.3,
        300
      )
      gradient3.addColorStop(0, "rgba(59, 130, 246, 0.1)")
      gradient3.addColorStop(1, "transparent")
      ctx.fillStyle = gradient3
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Animated gradient canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      
      {/* Subtle glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        {/* Logo text */}
        <div className="mb-12">
          <span className="text-xl md:text-2xl font-semibold tracking-wide bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            HashiraDevs
          </span>
        </div>
        
        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-balance leading-[1.1]">
          <span className="text-foreground">Elite Software Development</span>
          <br />
          <span className="text-foreground">for </span>
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Visionary Businesses
          </span>
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-pretty leading-relaxed">
          Custom web, mobile, and SaaS solutions built with performance, scalability, and precision.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/contact" >
            <Button 
              size="lg" 
              className="group relative bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-medium transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]"
            >
              <span className="relative z-10 flex items-center">
                Start a Project
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </Link>
          <Link href="/portfolio" >
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-base font-medium border-border bg-transparent hover:bg-secondary/50 hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
            View Portfolio
          </Button>
          </Link>
        </div>
        
        {/* Trust indicator */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-12 text-sm text-muted-foreground/70">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span>10+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span>50+ Projects Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            <span>99% Client Satisfaction</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
            <span>24/7 Support</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground/70 tracking-wide">
          Trusted by startups and growing businesses worldwide
        </p>
      </div>
    </section>
  )
}
