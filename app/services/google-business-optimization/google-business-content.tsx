"use client"

import { useState } from "react"
import { 
  MapPin, 
  Star, 
  Search, 
  Check, 
  ArrowRight,
  MessageSquare,
  BarChart
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { GoogleBizPreview } from "@/components/services"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { motion } from "framer-motion"

const problems = [
  {
    title: "The 'Map Pack' Ghost",
    description: "If you're not in the Top 3 results on Google Maps, you're missing out on 70% of local clicks."
  },
  {
    title: "Low Trust Signal",
    description: "An unoptimized profile with few reviews or missing info makes customers choose your competitors instead."
  },
  {
    title: "Hidden from Nearby Search",
    description: "Without proper geo-relevance, Google won't show your business to customers even if they're right next door."
  }
]

const outcomes = [
  {
    icon: MapPin,
    title: "Top 3 Map Rankings",
    description: "Appear exactly where customers are looking when they search for services in your area."
  },
  {
    icon: Star,
    title: "Increased Trust & Reviews",
    description: "Build a profile that looks established, trustworthy, and ready to serve."
  },
  {
    icon: MessageSquare,
    title: "More Direct Inquiries",
    description: "Drive more phone calls, direction requests, and website visits directly from Google."
  }
]

const benefits = [
  "Complete GBP profile optimization",
  "Strategic keyword injection (Natural)",
  "Review management and response strategy",
  "High-quality local photo optimization",
  "Weekly 'Google Post' management",
  "Monthly performance and call reports"
]

function ProblemCard({ title, description, color }: { title: string, description: string, color: string }) {
  const [hovered, setHovered] = useState(false)
  const colors: Record<string, string> = {
    indigo: "rgba(99, 102, 241, 0.15)",
    rose: "rgba(244, 63, 94, 0.15)",
    amber: "rgba(245, 158, 11, 0.15)",
    emerald: "rgba(16, 185, 129, 0.15)",
    violet: "rgba(139, 92, 246, 0.15)",
    cyan: "rgba(6, 182, 212, 0.15)",
  }
  
  const accentColor = color === 'indigo' ? '#6366f1' : 
                      color === 'rose' ? '#f43f5e' : 
                      color === 'amber' ? '#f59e0b' : 
                      color === 'emerald' ? '#10b981' :
                      color === 'violet' ? '#8b5cf6' :
                      color === 'cyan' ? '#06b6d4' : '#6366f1'

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative p-8 rounded-2xl border border-border/50 bg-card/30 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden"
      style={{
        boxShadow: hovered ? `0 0 0 1px ${accentColor}40, 0 20px 60px -10px ${accentColor}20` : "0 2px 20px rgba(0,0,0,0.05)",
      }}
    >
      <div className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${colors[color] || colors.indigo} 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }}
      />
      <h3 className="text-xl font-bold mb-4 text-foreground relative z-10">{title}</h3>
      <p className="text-muted-foreground leading-relaxed relative z-10">{description}</p>
    </motion.div>
  )
}

function StatCard({ value, label, color, animationType, className }: { value: string, label: string, color: 'primary' | 'accent' | 'foreground', animationType: 'rising' | 'ripple' | 'sparkle' | 'radar', className?: string }) {
  const colors = {
    primary: "text-primary bg-primary/5 border-primary/10",
    accent: "text-accent bg-accent/5 border-accent/10",
    foreground: "text-foreground bg-secondary/50 border-border/50"
  }

  return (
    <div className={cn("relative overflow-hidden p-6 rounded-2xl border flex flex-col justify-end group transition-all duration-500 hover:scale-[1.02]", colors[color], className)}>
      {/* Background Animations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {animationType === 'rising' && (
          [...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 w-1 h-8 bg-current opacity-10 rounded-full"
              style={{ left: `${15 + i * 15}%` }}
              animate={{ y: [-20, -120], opacity: [0, 0.2, 0] }}
              transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
            />
          ))
        )}
        {animationType === 'ripple' && (
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-current rounded-full opacity-0"
            animate={{ scale: [0.5, 2], opacity: [0.2, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          />
        )}
        {animationType === 'sparkle' && (
          [...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-current rounded-full"
              style={{ 
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%`,
              }}
              animate={{ scale: [0, 1.5, 0], opacity: [0, 0.4, 0] }}
              transition={{ duration: 1.5 + Math.random(), repeat: Infinity, delay: Math.random() * 2 }}
            />
          ))
        )}
        {animationType === 'radar' && (
          <motion.div
            className="absolute top-0 right-0 w-full h-full origin-top-right bg-gradient-to-br from-current to-transparent opacity-[0.03]"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        )}
      </div>

      <div className="relative z-10">
        <div className="text-3xl font-bold mb-2 transition-transform group-hover:scale-110 origin-left">{value}</div>
        <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{label}</div>
      </div>
    </div>
  )
}

export function GoogleBusinessContent() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Google Maps Dominance</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance text-foreground">
                Dominate Your <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Local Neighborhood</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                Most local searches end in the "Map Pack." We optimize your Google Business Profile 
                to ensure you're the first choice for customers in your area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group h-12 px-8">
                  Check My Map Ranking
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl overflow-hidden aspect-square flex items-center justify-center p-8 group">
                <div className="w-full transition-transform duration-500 group-hover:scale-[1.02]">
                  <GoogleBizPreview />
                </div>
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-secondary/20 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Are You Losing Local Customers?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Google Maps is the new 'Yellow Pages'—if you're not prominent, you're not an option.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <ProblemCard 
              title={problems[0].title}
              description={problems[0].description}
              color="violet"
            />
            <ProblemCard 
              title={problems[1].title}
              description={problems[1].description}
              color="rose"
            />
            <ProblemCard 
              title={problems[2].title}
              description={problems[2].description}
              color="amber"
            />
          </div>
        </div>
      </section>

      {/* Business Outcome Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Drive Real Foot Traffic & Calls</h2>
              <p className="text-lg text-muted-foreground mb-12">
                We transform your profile from a static listing into a dynamic customer-acquisition machine.
              </p>
              <div className="space-y-8">
                {outcomes.map((o, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <o.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{o.title}</h3>
                      <p className="text-muted-foreground">{o.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4 pt-12">
                <StatCard 
                  value="+85%"
                  label="Maps Visibility"
                  color="primary"
                  animationType="radar"
                  className="aspect-[4/5]"
                />
                <StatCard 
                  value="3.2x"
                  label="More Calls"
                  color="accent"
                  animationType="rising"
                  className="aspect-square"
                />
              </div>
              <div className="space-y-4">
                <StatCard 
                  value="Top 3"
                  label="Ranking Success"
                  color="foreground"
                  animationType="ripple"
                  className="aspect-square"
                />
                <StatCard 
                  value="24/7"
                  label="Profile Trust"
                  color="primary"
                  animationType="sparkle"
                  className="aspect-[4/5]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Benefits Section */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">What's Included in Optimization</h2>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
              {benefits.map((b, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground/90 font-medium">{b}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Relevance Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Essential for Local Providers</h2>
            <p className="text-muted-foreground">If you have a physical location or service area, this is your #1 growth channel.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {["Retail Stores", "Medical Practices", "Auto Repair", "Home Services", "Cafes & Restaurants", "Beauty & Wellness"].map((industry, i) => (
              <span key={i} className="px-6 py-3 rounded-full bg-secondary/50 border border-border/50 text-foreground font-medium hover:bg-primary/10 hover:border-primary/30 transition-all cursor-default">
                {industry}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <FAQ />
      <CTA />
    </main>
  )
}
