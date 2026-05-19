"use client"

import { useState, useEffect } from "react"
import { Send, CheckCircle2, AlertCircle, Mail, Linkedin, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Field, FieldGroup, FieldLabel, FieldError } from "@/components/ui/field"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { motion, AnimatePresence } from "framer-motion"
import { siteConfig } from "@/components/site-data"

function ContactHeroVisual() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Network Grid */}
      <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.1]" 
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} 
      />

      <svg className="absolute top-0 left-0 w-full h-full opacity-[0.2]" viewBox="0 0 1000 600">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--primary)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Animated Beams */}
        {[...Array(3)].map((_, i) => (
          <motion.path
            key={i}
            d={`M ${-100 + i * 50} ${200 + i * 100} Q ${300 + i * 100} ${50 + i * 50} ${1100} ${300 + i * 50}`}
            stroke="url(#lineGrad)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 0], x: [0, 100] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 1.5, ease: "linear" }}
          />
        ))}

        {/* Pulsing Nodes */}
        {[
          { x: 200, y: 150 }, { x: 800, y: 100 }, { x: 400, y: 450 }, { x: 900, y: 500 }
        ].map((node, i) => (
          <g key={i}>
            <motion.circle 
              cx={node.x} cy={node.y} r="15" 
              className="fill-primary/5 stroke-primary/20" 
              animate={{ r: [15, 25, 15], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.7 }}
            />
            <circle cx={node.x} cy={node.y} r="3" className="fill-primary" />
          </g>
        ))}
      </svg>

      {/* Floating 3D Spheres */}
      <motion.div 
        animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[10%] w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl"
      />
      <motion.div 
        animate={{ y: [0, 30, 0], x: [0, -15, 0], rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[20%] right-[15%] w-48 h-48 rounded-full bg-gradient-to-br from-accent/10 to-primary/10 blur-3xl"
      />
    </div>
  )
}

type FormState = "idle" | "submitting" | "success" | "error"

interface FormErrors {
  name?: string
  email?: string
  projectType?: string
  budgetRange?: string
  timeline?: string
  message?: string
}

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle")
  const [errors, setErrors] = useState<FormErrors>({})
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budgetRange: "",
    timeline: "",
    message: "",
  })

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type"
    }

    if (!formData.budgetRange) {
      newErrors.budgetRange = "Please select a budget range"
    }

    if (!formData.timeline) {
      newErrors.timeline = "Please select a timeline"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Please provide more details (at least 20 characters)"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setFormState("submitting")

    try {
      // Formspree configuration - Replace with your form endpoint
      const formspreeEndpoint = `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORM_FREE_ID}` // Get from Formspree

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          projectType: formData.projectType,
          budgetRange: formData.budgetRange,
          timeline: formData.timeline,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setFormState("success")
        setFormData({
          name: "",
          email: "",
          company: "",
          projectType: "",
          budgetRange: "",
          timeline: "",
          message: "",
        })
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setFormState("error")
    }
  }

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const inputClassName = cn(
    "h-12 bg-secondary/50 border-border/60 text-foreground placeholder:text-muted-foreground/60",
    "focus:border-primary/50 focus:ring-primary/20 transition-all duration-300",
    "hover:border-border"
  )

  const selectTriggerClassName = cn(
    "h-12 w-full bg-secondary/50 border-border/60 text-foreground",
    "focus:border-primary/50 focus:ring-primary/20 transition-all duration-300",
    "hover:border-border data-[placeholder]:text-muted-foreground/60"
  )

function BespokeConnectionVisual() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {/* Central Hub */}
      <div className="relative w-32 h-32">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4 border border-dashed border-accent/40 rounded-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.5)]">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Orbiting Particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-3 h-3 bg-accent rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"
            animate={{
              x: [Math.cos(i * 120 * Math.PI / 180) * 80, Math.cos((i * 120 + 360) * Math.PI / 180) * 80],
              y: [Math.sin(i * 120 * Math.PI / 180) * 80, Math.sin((i * 120 + 360) * Math.PI / 180) * 80],
            }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      {/* Connection Beams to outer nodes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 400 400">
        {[
          { x: 50, y: 100, label: "Design" },
          { x: 350, y: 80, label: "Tech" },
          { x: 320, y: 320, label: "Growth" },
          { x: 60, y: 340, label: "Cloud" }
        ].map((node, i) => (
          <g key={i}>
            <motion.line 
              x1="200" y1="200" x2={node.x} y2={node.y} 
              stroke="var(--primary)" strokeWidth="1" strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: i * 0.5 }}
            />
            <motion.circle 
              cx={node.x} cy={node.y} r="4" className="fill-primary"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
            />
          </g>
        ))}
      </svg>
    </div>
  )
}

function Spotlight() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 opacity-[0.15] dark:opacity-[0.25]"
      style={{
        background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.15), transparent 80%)`,
      }}
    />
  )
}

  return (
    <>
      <Spotlight />
      <main className="min-h-screen bg-background pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <ContactHeroVisual />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Available for new projects
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-8 text-balance leading-[1.1] tracking-tight">
                  <TypingAnimation text="Let's Build Something Great" />
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl text-pretty leading-relaxed mb-8">
                  Transform your vision into reality with our expert development team. We combine technical excellence with business-first thinking.
                </p>
                
                <div className="flex flex-wrap gap-8 items-center mt-12 opacity-60">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-foreground">24h</span>
                    <span className="text-xs uppercase tracking-tighter">Response time</span>
                  </div>
                  <div className="w-px h-10 bg-border/50" />
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-foreground">Global</span>
                    <span className="text-xs uppercase tracking-tighter">Collaboration</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="hidden lg:block"
              >
                <BespokeConnectionVisual />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="relative pb-28 md:pb-36">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
              {/* Contact Form - Takes 2 columns */}
              <div className="lg:col-span-2">
                {formState === "success" ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-10 md:p-12 rounded-3xl border border-border bg-card/40 backdrop-blur-xl text-center shadow-2xl relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none" />
                    <div className="w-24 h-24 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-8 relative">
                      <motion.div 
                        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute inset-0 rounded-full bg-emerald-500/20"
                      />
                      <CheckCircle2 className="w-12 h-12 text-emerald-500 relative z-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                      Message Received!
                    </h3>
                    <p className="text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed text-lg">
                      We've got your details. Our team is already looking into your request and will reach out shortly.
                    </p>
                    <Button
                      onClick={() => setFormState("idle")}
                      variant="outline"
                      className="border-border hover:bg-secondary/50 rounded-full px-10 py-6 text-base shadow-lg"
                    >
                      New Inquiry
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.005 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit} 
                    className="p-8 md:p-12 rounded-3xl border border-border bg-card/40 backdrop-blur-xl shadow-2xl relative group"
                  >
                    <div className="absolute -inset-px bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    <h2 className="text-3xl font-bold text-foreground mb-10 flex items-center gap-4">
                      <div className="w-1.5 h-8 bg-primary rounded-full" />
                      Tell us about your project
                    </h2>

                    {/* Error Banner */}
                    {formState === "error" && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="flex items-center gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/30 mb-8"
                      >
                        <AlertCircle className="w-5 h-5 text-destructive shrink-0" />
                        <p className="text-sm text-destructive">
                          Something went wrong. Please try again or contact us directly.
                        </p>
                      </motion.div>
                    )}

                    <FieldGroup className="gap-6">
                      {/* Name and Email Row */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <Field data-invalid={!!errors.name}>
                          <FieldLabel className="text-foreground font-medium mb-2">
                            Name <span className="text-destructive">*</span>
                          </FieldLabel>
                           <motion.div whileTap={{ scale: 0.995 }}>
                            <Input
                              placeholder="John Smith"
                              value={formData.name}
                              onChange={(e) => handleInputChange("name", e.target.value)}
                              className={cn(inputClassName, errors.name && "border-destructive")}
                            />
                          </motion.div>
                          {errors.name && <FieldError>{errors.name}</FieldError>}
                        </Field>

                        <Field data-invalid={!!errors.email}>
                          <FieldLabel className="text-foreground font-medium mb-2">
                            Email <span className="text-destructive">*</span>
                          </FieldLabel>
                           <motion.div whileTap={{ scale: 0.995 }}>
                            <Input
                              type="email"
                              placeholder="john@company.com"
                              value={formData.email}
                              onChange={(e) => handleInputChange("email", e.target.value)}
                              className={cn(inputClassName, errors.email && "border-destructive")}
                            />
                          </motion.div>
                          {errors.email && <FieldError>{errors.email}</FieldError>}
                        </Field>
                      </div>

                      {/* Company */}
                      <Field>
                        <FieldLabel className="text-foreground font-medium mb-2">
                          Company <span className="text-muted-foreground font-normal">(Optional)</span>
                        </FieldLabel>
                        <Input
                          placeholder="Your company name"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          className={inputClassName}
                        />
                      </Field>

                      {/* Project Type */}
                      <Field data-invalid={!!errors.projectType}>
                        <FieldLabel className="text-foreground font-medium mb-2">
                          Project Type <span className="text-destructive">*</span>
                        </FieldLabel>
                        <Select
                          value={formData.projectType}
                          onValueChange={(value) => handleInputChange("projectType", value)}
                        >
                          <SelectTrigger className={cn(selectTriggerClassName, errors.projectType && "border-destructive")}>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="web-app">Web Application</SelectItem>
                            <SelectItem value="mobile-app">Mobile App</SelectItem>
                            <SelectItem value="saas">SaaS Platform</SelectItem>
                            <SelectItem value="ecommerce">E-commerce</SelectItem>
                            <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                            <SelectItem value="consulting">Consulting</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.projectType && <FieldError>{errors.projectType}</FieldError>}
                      </Field>

                      {/* Budget and Timeline Row */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <Field data-invalid={!!errors.budgetRange}>
                          <FieldLabel className="text-foreground font-medium mb-2">
                            Budget Range <span className="text-destructive">*</span>
                          </FieldLabel>
                          <Select
                            value={formData.budgetRange}
                            onValueChange={(value) => handleInputChange("budgetRange", value)}
                          >
                            <SelectTrigger className={cn(selectTriggerClassName, errors.budgetRange && "border-destructive")}>
                              <SelectValue placeholder="Select budget" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="10k-25k">$10k - $25k</SelectItem>
                              <SelectItem value="25k-50k">$25k - $50k</SelectItem>
                              <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                              <SelectItem value="100k+">$100k+</SelectItem>
                              <SelectItem value="not-sure">Not sure yet</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.budgetRange && <FieldError>{errors.budgetRange}</FieldError>}
                        </Field>

                        <Field data-invalid={!!errors.timeline}>
                          <FieldLabel className="text-foreground font-medium mb-2">
                            Timeline <span className="text-destructive">*</span>
                          </FieldLabel>
                          <Select
                            value={formData.timeline}
                            onValueChange={(value) => handleInputChange("timeline", value)}
                          >
                            <SelectTrigger className={cn(selectTriggerClassName, errors.timeline && "border-destructive")}>
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="asap">ASAP</SelectItem>
                              <SelectItem value="1-2-months">1-2 months</SelectItem>
                              <SelectItem value="3-6-months">3-6 months</SelectItem>
                              <SelectItem value="6-plus-months">6+ months</SelectItem>
                              <SelectItem value="flexible">Flexible</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.timeline && <FieldError>{errors.timeline}</FieldError>}
                        </Field>
                      </div>

                      {/* Message */}
                      <Field data-invalid={!!errors.message}>
                        <FieldLabel className="text-foreground font-medium mb-2">
                          Message <span className="text-destructive">*</span>
                        </FieldLabel>
                        <Textarea
                          placeholder="Tell us about your project, goals, and any specific requirements..."
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          className={cn(
                            "min-h-[140px] bg-secondary/50 border-border/60 text-foreground placeholder:text-muted-foreground/60",
                            "focus:border-primary/50 focus:ring-primary/20 transition-all duration-300",
                            "hover:border-border resize-none",
                            errors.message && "border-destructive"
                          )}
                        />
                        {errors.message && <FieldError>{errors.message}</FieldError>}
                      </Field>

                      {/* Submit Button */}
                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="relative z-10"
                      >
                        <Button
                          type="submit"
                          size="lg"
                          disabled={formState === "submitting"}
                          className="relative w-full h-14 bg-foreground text-background hover:bg-foreground/90 text-base font-bold transition-all duration-500 rounded-2xl overflow-hidden group/btn"
                        >
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-primary/20 via-white/20 to-primary/20 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" 
                          />
                          {formState === "submitting" ? (
                            <span className="flex items-center gap-3">
                              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Processing...
                            </span>
                          ) : (
                            <span className="flex items-center gap-2 relative z-10">
                              Send Proposal Request
                              <Send className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                            </span>
                          )}
                        </Button>
                      </motion.div>
                    </FieldGroup>
                  </motion.form>
                )}
              </div>

              {/* Sidebar - Alternative Contact Info */}
              <div className="space-y-6">
                {/* Contact Methods */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl border border-border/60 bg-card/30 backdrop-blur-sm shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-6">
                    Other ways to reach us
                  </h3>
                  
                  <div className="space-y-5">
                    {/* Email */}
                    <a 
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-secondary/80 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-all duration-300 group-hover:scale-110">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                      </div>
                    </a>

                    {/* LinkedIn */}
                    <a 
                      href="https://linkedin.com/hashiradevs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-secondary/80 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-all duration-300 group-hover:scale-110">
                        <Linkedin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-0.5">LinkedIn</p>
                      </div>
                    </a>

                    {/* WhatsApp */}
                    <a 
                      href="https://wa.me/+917818869663?text=Hi%20HashiraDevs%2C%20I%20want%20to%20discuss%20a%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-secondary/80 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/15 transition-all duration-300 group-hover:scale-110">
                        <MessageCircle className="w-5 h-5 text-[#25D366]" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-0.5">WhatsApp</p>
                      </div>
                    </a>
                  </div>
                </motion.div>

                {/* Response Time */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="p-8 rounded-2xl border border-border/60 bg-card/30 backdrop-blur-sm shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 relative overflow-hidden">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,rgba(99,102,241,0.2)_360deg)]"
                      />
                      <Clock className="w-5 h-5 text-primary relative z-10" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Quick Response
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        We respond within 24 hours. For urgent inquiries, reach out via WhatsApp for faster response.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Trust Badge */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="p-6 rounded-2xl border border-primary/20 bg-primary/5 text-center"
                >
                  <p className="text-sm text-foreground/80">
                    Trusted by <span className="font-semibold text-foreground">50+ clients</span> worldwide
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        {/* Google Map Section */}
        <section className="relative py-12 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden border border-border/60 shadow-2xl h-[400px] md:h-[500px] group"
            >
              {/* Map Overlay for branding */}
              <div className="absolute inset-0 z-10 pointer-events-none border-[12px] border-card/20 dark:border-background/20" />
              
              <iframe 
                src="https://maps.google.com/maps?q=Prabhat%20market,%20moradabad,%20244001&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.2] contrast-[1.1] dark:invert-[0.9] dark:hue-rotate-[180deg] dark:brightness-[0.8] transition-all duration-700 group-hover:grayscale-0"
              />

              <div className="absolute bottom-6 left-6 z-20">
                <div className="bg-card/90 backdrop-blur-md border border-border/50 p-4 rounded-2xl shadow-xl max-w-xs transition-transform duration-500 group-hover:-translate-y-2">
                  <h4 className="font-bold text-foreground mb-1">Our Location</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Prabhat market, moradabad, 244001<br />
                    Available for global collaboration.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
