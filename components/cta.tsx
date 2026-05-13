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
            <span className="text-sm font-medium tracking-wide">Free Growth Audit — No Commitment</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 tracking-tight leading-[1.1]"
          >
            Ready to Get More Customers <br className="hidden md:block"/>
            <span className="bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-cyan bg-clip-text text-transparent">From Your Online Presence?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 text-pretty leading-relaxed"
          >
            Let’s find what’s stopping your business from growing online and build a system that brings you more calls, bookings, and visibility.
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
                shimmer={true}
                pop={true}
                className="group bg-foreground text-background hover:bg-foreground/90 px-10 py-8 text-xl font-medium rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] transition-all duration-300"
                onClick={() => setOpen(true)}
              >
                Get Free Growth Audit
                <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:text-brand-indigo" />
              </Button>
            </MagneticButton>
            <a
              href={"https://wa.me/+917818869663?text=Hi%20HashiraDevs%2C%20I%20want%20help%20growing%20my%20business%20online."}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/5 text-[#25D366] font-medium hover:bg-[#25D366]/10 hover:border-[#25D366]/50 transition-all duration-300 text-base"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp
            </a>
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
