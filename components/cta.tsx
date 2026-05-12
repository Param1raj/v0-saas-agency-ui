"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

import { ContactSheet } from "./contact-sheet"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { siteConfig } from "@/components/site-data"

export function CTA() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section id="contact" className="relative py-32 overflow-hidden bg-background">
        {/* Atmospheric Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Animated overlay orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-indigo/10 rounded-full blur-[150px]" />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-violet/10 rounded-full blur-[150px]" 
          />
          {/* Subtle noise texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-muted-foreground mb-8 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-brand-cyan" />
            <span className="text-sm font-medium tracking-wide">Limited Spots Available This Month</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 tracking-tight leading-[1.1]"
          >
            Stop losing customers to <br className="hidden md:block"/>
            <span className="text-muted-foreground line-through decoration-brand-indigo/50">outdated websites</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 text-pretty leading-relaxed"
          >
            Upgrade your digital presence today. Turn your website into a high-converting machine that works 24/7.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <MagneticButton>
              <Button
                size="lg"
                className="group bg-foreground text-background hover:bg-foreground/90 px-10 py-8 text-xl font-medium rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] transition-all duration-300"
                onClick={() => setOpen(true)}
              >
                Book Strategy Call
                <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:text-brand-indigo" />
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Social Proof Avatars */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col items-center justify-center"
          >
             <div className="flex -space-x-4 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-background bg-gradient-to-br from-brand-indigo to-brand-cyan p-[2px] shadow-lg">
                     <div className="w-full h-full rounded-full bg-card flex items-center justify-center relative overflow-hidden">
                       <div className="absolute inset-0 bg-white/5" />
                       <span className="text-xs font-bold text-muted-foreground">{i + 1}</span>
                     </div>
                  </div>
                ))}
             </div>
             <p className="text-sm font-medium text-muted-foreground">Join 40+ local businesses growing with us.</p>
          </motion.div>
        </div>
      </section>
      
      <ContactSheet open={open} handleClose={() => setOpen(false)} />
    </>
  )
}
