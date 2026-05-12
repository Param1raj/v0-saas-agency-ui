"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, CheckCircle2, TrendingUp, Search, MessageSquare, Zap } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/ui/magnetic-button"

const trustChips = [
  "SEO Ready",
  "Mobile Optimized",
  "Fast Loading",
  "WhatsApp Integrated"
]

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, 200])
  const y2 = useTransform(scrollY, [0, 1000], [0, -100])

  useEffect(() => {
    setMounted(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      })
    }
    
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  if (!mounted) return <div className="min-h-screen bg-background" />

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Animated Gradient Mesh */}
      <div className="absolute inset-0 opacity-40">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-indigo/30 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brand-cyan/20 blur-[150px]"
        />
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-indigo opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-indigo"></span>
              </span>
              <span className="text-sm font-medium tracking-wide">Premium Agency</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              Websites That Turn Local Businesses Into
              <span className="block mt-2 bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-cyan bg-clip-text text-transparent">
                Growth Machines
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
              We design and build high-converting websites designed to generate leads, rank on Google, and automate your WhatsApp inquiries.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto">
              <MagneticButton className="w-full sm:w-auto">
                <Link href="/contact" className="block w-full">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto group relative bg-foreground text-background hover:bg-foreground/90 px-8 py-7 text-lg font-medium transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] rounded-2xl"
                  >
                    <span className="relative z-10 flex items-center">
                      Book Free Consultation
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </Link>
              </MagneticButton>
              
              <Link href="/portfolio" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto px-8 py-7 text-lg font-medium border-border bg-transparent hover:bg-white/5 transition-all duration-300 rounded-2xl"
                >
                  View Projects
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {trustChips.map((chip, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  key={chip} 
                  className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-muted-foreground backdrop-blur-sm"
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
              style={{ y: y1 }}
              className="absolute inset-0"
            >
              {/* Main Dashboard Card */}
              <motion.div 
                animate={{ 
                  x: mousePosition.x * 20,
                  y: mousePosition.y * 20,
                  rotateX: mousePosition.y * -5,
                  rotateY: mousePosition.x * 5,
                }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                className="absolute top-10 right-10 w-[450px] bg-card/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl"
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
                        <span className="text-sm">Conversion Rate</span>
                      </div>
                      <div className="text-3xl font-bold text-foreground">8.4%</div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Search className="w-4 h-4 text-brand-violet" />
                        <span className="text-sm">Organic Traffic</span>
                      </div>
                      <div className="text-3xl font-bold text-foreground">+142%</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Element 1: WhatsApp Popup */}
              <motion.div 
                animate={{ 
                  x: mousePosition.x * 40,
                  y: mousePosition.y * 40 + Math.sin(Date.now() / 1000) * 10,
                }}
                transition={{ type: "spring", stiffness: 40, damping: 20 }}
                className="absolute top-1/2 -left-10 bg-card/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center gap-4 shadow-xl z-20"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-[#25D366]" fill="#25D366" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">New Inquiry</div>
                  <div className="text-xs text-muted-foreground">"Hi, I need a website..."</div>
                </div>
              </motion.div>

              {/* Floating Element 2: Performance Score */}
              <motion.div 
                animate={{ 
                  x: mousePosition.x * -30,
                  y: mousePosition.y * -30 + Math.cos(Date.now() / 1000) * 10,
                }}
                transition={{ type: "spring", stiffness: 30, damping: 15 }}
                className="absolute bottom-20 right-0 bg-card/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex flex-col items-center gap-2 shadow-xl z-20"
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
                  <div className="absolute text-xl font-bold text-green-500">99</div>
                </div>
                <div className="flex items-center gap-1 text-xs font-medium text-foreground">
                  <Zap className="w-3 h-3 text-yellow-500" fill="currentColor" />
                  Performance
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
