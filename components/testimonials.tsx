"use client"

import React, { useEffect, useCallback, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Quote, Star } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

import { testimonialItems } from "@/components/site-data"

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", skipSnaps: false }, [Autoplay({ delay: 5000, stopOnInteraction: false })])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-brand-indigo/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan mb-6"
          >
            <span className="text-sm font-medium tracking-wide">What Business Owners Say</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight tracking-tight"
          >
            Don't Just Take <span className="bg-gradient-to-r from-brand-cyan to-brand-indigo bg-clip-text text-transparent">Our Word</span> For It
          </motion.h2>
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-6">
        {/* Carousel */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-4 md:-ml-6 items-center">
            {testimonialItems.map((testimonial, index) => {
              const isActive = index === selectedIndex
              return (
                <div 
                  key={index} 
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_60%] lg:flex-[0_0_40%] pl-4 md:pl-6 transition-all duration-500"
                  style={{ opacity: isActive ? 1 : 0.5, transform: `scale(${isActive ? 1 : 0.9})` }}
                >
                  <div className="relative p-8 md:p-10 rounded-3xl bg-card/40 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-colors shadow-sm hover:shadow-2xl h-full flex flex-col justify-between group">
                    <Quote className="absolute top-6 right-8 w-20 h-20 text-brand-indigo/10 transform rotate-12 group-hover:scale-110 transition-transform duration-500" />
                    
                    <div>
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" />
                        ))}
                      </div>
                      
                      <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 relative z-10 font-medium">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>

                    <div className="flex items-center gap-4 relative z-10">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-indigo to-brand-cyan p-[2px]">
                        <div className="w-full h-full rounded-full bg-background flex items-center justify-center font-bold text-lg overflow-hidden relative">
                          <span className="text-foreground">{testimonial.avatar}</span>
                          {/* Optional Video/Image Placeholder - using gradient for now */}
                          <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/20 to-brand-cyan/20 mix-blend-overlay" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-foreground text-lg">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center gap-2">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonialItems.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex 
                  ? 'w-8 bg-brand-indigo' 
                  : 'bg-border hover:bg-foreground/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
