"use client"

import { useState } from "react"
import { 
  MessageSquare, 
  Smartphone, 
  Zap, 
  Check, 
  ArrowRight,
  Clock,
  Send
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { WhatsAppPreview } from "@/components/services"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { motion } from "framer-motion"

const problems = [
  {
    title: "The 'After Hours' Lead Loss",
    description: "Customers who inquire outside business hours expect instant responses. If you're asleep, they move to the next business on Google."
  },
  {
    title: "Manual Response Fatigue",
    description: "Spending hours answering the same basic questions (pricing, location, hours) keeps you from actually running your business."
  },
  {
    title: "Leads Falling Through Cracks",
    description: "When inquiries come from multiple places (calls, web forms, DMs), it's easy to lose track and miss out on potential revenue."
  }
]

const outcomes = [
  {
    icon: Clock,
    title: "24/7 Instant Engagement",
    description: "Capture and respond to leads the moment they inquire, regardless of the time or day."
  },
  {
    icon: Send,
    title: "Automated Lead Qualification",
    description: "Let AI handle the initial questions and only involve your team when a lead is ready to book or buy."
  },
  {
    icon: Smartphone,
    title: "Lower Friction Capture",
    description: "WhatsApp is where your customers already are. Let them reach you without leaving their favorite app."
  }
]

const benefits = [
  "Official WhatsApp API integration",
  "Automated welcome & FAQ flows",
  "Lead notification for your team",
  "Custom appointment booking bots",
  "Detailed lead tracking dashboard",
  "Secure and privacy-compliant"
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

export function WhatsAppAutomationContent() {
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
                <MessageSquare className="w-4 h-4" />
                <span className="text-sm font-medium">Automated Lead Capture</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance text-foreground">
                Never Miss a <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Lead Again</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                Turn your WhatsApp into a 24/7 sales machine. We implement automated systems that 
                engage, qualify, and capture leads while you focus on running your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group h-12 px-8">
                  See Automation Demo
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
                  <WhatsAppPreview />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leads Wait for No One</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">In the local service industry, the first business to respond usually wins the job.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Capture Revenue while You Sleep</h2>
              <p className="text-lg text-muted-foreground mb-12">
                We bridge the gap between user inquiry and business response with seamless automation.
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
                  value="100%"
                  label="Response Rate"
                  color="primary"
                  animationType="sparkle"
                  className="aspect-[4/5]"
                />
                <StatCard 
                  value="<1 min"
                  label="Response Time"
                  color="accent"
                  animationType="rising"
                  className="aspect-square"
                />
              </div>
              <div className="space-y-4">
                <StatCard 
                  value="3x"
                  label="More Bookings"
                  color="foreground"
                  animationType="ripple"
                  className="aspect-square"
                />
                <StatCard 
                  value="24/7"
                  label="Lead Capture"
                  color="primary"
                  animationType="radar"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Automation Power Features</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Scalable for Any Service Business</h2>
            <p className="text-muted-foreground">If you take appointments or answer questions, this is your secret weapon.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {["Real Estate Agents", "Event Planners", "Medical Clinics", "Financial Advisors", "Customer Support", "Booking Services"].map((industry, i) => (
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
