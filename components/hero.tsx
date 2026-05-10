"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import {
  heroHeadline,
  heroStatHighlights,
  heroSubheadline,
  heroTrustItems,
  socialProofLine,
} from "@/components/site-data"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = sectionRef.current?.offsetHeight || window.innerHeight
    }

    const draw = () => {
      time += 0.003
      ctx.clearRect(0, 0, canvas.width, canvas.height)

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
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pb-6 md:pb-0">
      <div className="absolute inset-0 bg-background" />
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full h-150 bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-10">
        <div className="mb-8">
          <span className="text-xl md:text-2xl font-semibold tracking-wide bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            HashiraDevs
          </span>
        </div>

        <div className="mb-6 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground/80">
          {heroStatHighlights.map((item) => (
            <div
              key={item.label}
              className="rounded-full border border-border/60 bg-card/30 px-3 py-1.5 backdrop-blur-sm"
            >
              <span className="font-medium text-foreground">{item.value}</span>
              <span className="ml-2">{item.label}</span>
            </div>
          ))}
        </div>

        <h1
          className={`max-w-[750px] mt-18 text-[52px] md:text-[28px] font-black leading-[1.05] tracking-tight text-foreground mb-6 transition-all duration-700 delay-150 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ fontFamily: "'Clash Display', 'DM Sans', sans-serif" }}
          >
            Websites That Help Local Businesses{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-blue-600">Get More Calls,</span>
              {/* underline squiggle */}
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 300 10"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 7 Q75 2 150 7 Q225 12 298 7"
                  stroke="#3B82F6"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.45"
                />
              </svg>
            </span>{" "}
            Customers &amp; Bookings
        </h1>

        <p className="text-lg md:text-lg text-muted-foreground max-w-3xl mx-auto mb-18 text-pretty leading-relaxed">
          {heroSubheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link href="/contact">
            <Button
              size="lg"
              className="group relative bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-medium transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]"
            >
              <span className="relative z-10 flex items-center">
                Book Free Consultation
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-base font-medium border-border bg-transparent hover:bg-secondary/50 hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              See Our Work
            </Button>
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-sm text-muted-foreground/80">
          {heroTrustItems.map((item) => (
            <div key={item} className="flex items-center gap-2 rounded-full border border-border/50 bg-card/20 px-3 py-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground/70 tracking-wide max-w-2xl mx-auto">
          {socialProofLine}
        </p>
      </div>
    </section>
  )
}
