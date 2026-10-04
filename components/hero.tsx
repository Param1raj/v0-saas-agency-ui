"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { ArrowRight, CheckCircle2, TrendingUp, Search, MessageSquare, Zap } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/ui/magnetic-button"

const trustChips = [
  "Local SEO Ready",
  "Mobile Optimized",
  "WhatsApp Integrated",
  "Conversion Focused"
]

export function Hero() {
  const [mounted, setMounted] = useState(false)
  
  // Use MotionValues for smooth, performant cursor follow
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Create spring-smoothed versions of the mouse coordinates
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 })
  
  const { scrollY } = useScroll()
  const scrollY1 = useTransform(scrollY, [0, 1000], [0, 200])
  const scrollY2 = useTransform(scrollY, [0, 1000], [0, -100])

  // Mouse transformation values
  const cardX = useTransform(smoothMouseX, [-1, 1], [-20, 20])
  const cardY = useTransform(smoothMouseY, [-1, 1], [-20, 20])
  const cardRotateX = useTransform(smoothMouseY, [-1, 1], [5, -5])
  const cardRotateY = useTransform(smoothMouseX, [-1, 1], [-5, 5])

  const float1X = useTransform(smoothMouseX, [-1, 1], [-40, 40])
  const float1Y = useTransform(smoothMouseY, [-1, 1], [-40, 40])
  
  const float2X = useTransform(smoothMouseX, [-1, 1], [30, -30])
  const float2Y = useTransform(smoothMouseY, [-1, 1], [30, -30])

  useEffect(() => {
    setMounted(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize values to -1 to 1 range
      mouseX.set((e.clientX / window.innerWidth) * 2 - 1)
      mouseY.set((e.clientY / window.innerHeight) * 2 - 1)
    }
    
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  if (!mounted) return <div className="min-h-screen bg-background" />

  return (
    <section className="relative min-h-screen pt-32 pb-36 md:pb-20 overflow-hidden flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Animated Gradient Mesh */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-indigo/30 blur-[80px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brand-cyan/20 blur-[100px]" />
      </div>

      {/* Grid Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: Copy & CTAs */}
          <motion.div 
            initial={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >
            <motion.div 
              initial={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-indigo opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-indigo"></span>
              </span>
              <span className="text-sm font-medium tracking-wide">Local Business Growth Partner</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              We Help Local Businesses Get More
              <span className="block mt-2 bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-cyan bg-clip-text text-transparent">
                Calls, Customers & Bookings
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
              We build high-converting websites, Google visibility systems, and WhatsApp lead funnels designed to help local businesses grow revenue — not just look modern online.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12 w-full">
              <MagneticButton className="w-full sm:w-auto">
                <Button
                  asChild
                  size="lg"
                  pop={true}
                  className="w-full group relative bg-foreground text-background hover:bg-foreground/90 px-6 py-6 sm:px-8 sm:py-7 text-base sm:text-lg font-medium transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] rounded-2xl"
                >
                  <Link href="/contact" className="block w-full">
                    <span className="relative z-10 flex items-center">
                      Get Free Growth Audit
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Button>
              </MagneticButton>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full px-6 py-6 sm:px-8 sm:py-7 text-base sm:text-lg font-medium border-border bg-transparent hover:bg-white/5 transition-all duration-300 rounded-2xl"
              >
                <Link href="/portfolio" className="w-full sm:w-auto">
                  See How We Help Businesses Grow
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-y-3 gap-x-2 sm:flex sm:flex-wrap sm:items-center sm:gap-3 w-full">
              {trustChips.map((chip, i) => (
                <motion.div
                  initial={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  key={chip} 
                  className="flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-3 py-1.5 text-sm text-muted-foreground backdrop-blur-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand-indigo" />
                  {chip}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE: Interactive Visuals */}
          <div className="relative h-[600px] hidden lg:block perspective-1000">
            <motion.div 
              style={{ y: scrollY1 }}
              className="absolute inset-0"
            >
              {/* Main Dashboard Card */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                }}
                style={{
                  x: cardX,
                  y: cardY,
                  rotateX: cardRotateX,
                  rotateY: cardRotateY,
                }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="absolute top-10 right-10 w-[450px] bg-card/80 backdrop-blur-2xl border border-border rounded-3xl p-6 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-xs font-medium text-muted-foreground bg-white/5 px-3 py-1 rounded-full">
                    hashiradevs.com
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="h-40 rounded-2xl bg-gradient-to-br from-brand-indigo/20 to-transparent border border-white/5 relative overflow-hidden flex items-end p-4">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                    <div className="w-full flex items-end gap-2 h-full pt-8">
                      {[40, 70, 45, 90, 65, 100, 85].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 0.5 + i * 0.1, duration: 0.8, type: "spring" }}
                          className="flex-1 bg-brand-indigo rounded-t-sm"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <TrendingUp className="w-4 h-4 text-brand-cyan" />
                        <span className="text-sm">Conversions</span>
                      </div>
                      <div className="text-xl font-bold text-foreground">
                        More inquiries
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Search className="w-4 h-4 text-brand-violet" />
                        <span className="text-sm">Search</span>
                      </div>
                      <div className="text-xl font-bold text-foreground">
                        Organic traffic ↑
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Element 1: WhatsApp Popup */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1,
                  y: [0, -10, 0]
                }}
                style={{
                  x: float1X,
                  y: float1Y,
                }}
                transition={{ 
                  opacity: { delay: 0.5, duration: 0.8 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute top-[14%] -left-10 bg-card/90 backdrop-blur-xl border border-border rounded-2xl p-4 flex items-center gap-4 shadow-xl z-20"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-[#25D366]" fill="#25D366" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">New Inquiry</div>
                  <div className="text-xs text-muted-foreground">"Hi, I'd like to book a table for tonight"</div>
                </div>
              </motion.div>

              {/* Floating Element 2: Performance Score */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, 10, 0]
                }}
                style={{
                  x: float2X,
                  y: float2Y,
                }}
                transition={{ 
                  opacity: { delay: 0.7, duration: 0.6 },
                  scale: { delay: 0.7, duration: 0.6 },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute bottom-20 right-0 bg-card/90 backdrop-blur-xl border border-border rounded-2xl p-5 flex flex-col items-center gap-2 shadow-xl z-20"
              >
                <div className="relative flex items-center justify-center">
                  <svg className="w-16 h-16 transform -rotate-90">
                    <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-white/10" />
                    <motion.circle 
                      initial={{ strokeDasharray: "0 200" }}
                      animate={{ strokeDasharray: "170 200" }}
                      transition={{ duration: 1.5, delay: 1 }}
                      cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="6" fill="transparent" 
                      className="text-green-500" 
                      strokeLinecap="round"
                    />
                  </svg>
                  <CheckCircle2 className="absolute w-6 h-6 text-green-500" />
                </div>
                <div className="flex items-center gap-1 text-xs font-medium text-foreground">
                  <Zap className="w-3 h-3 text-yellow-500" fill="currentColor" />
                  Fast load times
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
