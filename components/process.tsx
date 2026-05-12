"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Lightbulb, PenTool, Code, LineChart, Rocket, RefreshCcw } from "lucide-react"
import Image from "next/image"

const steps = [
  { id: "01", title: "Audit", description: "Deep dive into your current online presence.", icon: Search },
  { id: "02", title: "Strategy", description: "Blueprint for your conversion machine.", icon: Lightbulb },
  { id: "03", title: "Design", description: "Crafting a premium, trust-building UI.", icon: PenTool },
  { id: "04", title: "Development", description: "Building with Next.js for maximum speed.", icon: Code },
  { id: "05", title: "SEO Setup", description: "Optimizing for local search dominance.", icon: LineChart },
  { id: "06", title: "Launch", description: "Going live and configuring analytics.", icon: Rocket },
  { id: "07", title: "Optimization", description: "Continuous A/B testing and growth.", icon: RefreshCcw }
]

export function Process() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="relative pt-24 md:pt-32 pb-8 md:pb-12 bg-background border-t border-border overflow-hidden">
      <div className="absolute inset-0 bg-brand-indigo/5 mix-blend-overlay pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-brand-violet mb-6"
          >
            <span className="text-sm font-medium tracking-wide">Our Process</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight tracking-tight"
          >
            How We Build <span className="bg-gradient-to-r from-brand-violet to-brand-indigo bg-clip-text text-transparent">Growth Machines</span>
          </motion.h2>
        </div>

        {/* Desktop Process (Horizontal) */}
        <div className="hidden lg:flex justify-between relative mt-32 mb-16">
          {/* Glowing Connection Line */}
          <div className="absolute top-8 left-0 right-0 h-1 bg-border rounded-full z-0 overflow-hidden">
             <motion.div 
               className="h-full bg-brand-indigo shadow-[0_0_15px_rgba(99,102,241,0.8)]" 
               initial={{ width: "0%" }}
               whileInView={{ width: "100%" }}
               transition={{ duration: 2, ease: "easeInOut" }}
             />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon
            const isActive = activeStep === index
            
            return (
              <div 
                key={step.id} 
                className="relative z-10 flex flex-col items-center flex-1 cursor-pointer group"
                onMouseEnter={() => setActiveStep(index)}
              >
                <motion.div 
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 ${isActive ? 'bg-brand-indigo border-brand-indigo shadow-[0_0_30px_rgba(99,102,241,0.5)] scale-110' : 'bg-background border-border group-hover:border-primary/50'}`}
                  whileHover={{ y: -5 }}
                >
                  <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-muted-foreground group-hover:text-foreground'}`} />
                </motion.div>
                
                <div className="mt-6 text-center h-24 relative w-full">
                   <div className={`font-bold transition-colors ${isActive ? 'text-brand-indigo' : 'text-foreground'}`}>
                     {step.id}. {step.title}
                   </div>
                   
                   <AnimatePresence>
                     {isActive && (
                       <motion.div 
                         initial={{ opacity: 0, y: 10 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: -10 }}
                         className="absolute top-8 left-1/2 -translate-x-1/2 w-[180px] text-sm text-muted-foreground"
                       >
                         {step.description}
                       </motion.div>
                     )}
                   </AnimatePresence>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile Process (Vertical) */}
        <div className="lg:hidden relative pl-8 space-y-12">
           {/* Vertical Line */}
           <div className="absolute top-0 bottom-0 left-[39px] w-[2px] bg-border z-0">
             <motion.div 
               className="w-full bg-brand-indigo shadow-[0_0_10px_rgba(99,102,241,0.8)]"
               initial={{ height: "0%" }}
               whileInView={{ height: "100%" }}
               transition={{ duration: 2, ease: "easeInOut" }}
             />
           </div>

           {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative z-10 flex gap-6 group"
                >
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-card border-2 border-brand-indigo flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                    <Icon className="w-5 h-5 text-brand-indigo" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-brand-indigo mb-1">Step {step.id}</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              )
           })}
        </div>
      </div>
    </section>
  )
}
