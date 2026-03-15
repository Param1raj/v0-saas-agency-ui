"use client"

import { useState } from "react"
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

  return (
    <>
      <main className="min-h-screen bg-background pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Great
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Ready to transform your vision into reality? Tell us about your project and we'll show you how we can help.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="relative pb-28 md:pb-36">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
              {/* Contact Form - Takes 2 columns */}
              <div className="lg:col-span-2">
                {formState === "success" ? (
                  <div className="p-10 md:p-12 rounded-2xl border border-border/60 bg-card/30 backdrop-blur-sm text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Message Sent Successfully
                    </h3>
                    <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                      Thank you for reaching out! We'll review your project details and get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setFormState("idle")}
                      variant="outline"
                      className="border-border hover:bg-secondary/50"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-2xl border border-border/60 bg-card/30 backdrop-blur-sm">
                    <h2 className="text-2xl font-semibold text-foreground mb-8">
                      Tell us about your project
                    </h2>

                    {/* Error Banner */}
                    {formState === "error" && (
                      <div className="flex items-center gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/30 mb-8">
                        <AlertCircle className="w-5 h-5 text-destructive shrink-0" />
                        <p className="text-sm text-destructive">
                          Something went wrong. Please try again or contact us directly.
                        </p>
                      </div>
                    )}

                    <FieldGroup className="gap-6">
                      {/* Name and Email Row */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <Field data-invalid={!!errors.name}>
                          <FieldLabel className="text-foreground font-medium mb-2">
                            Name <span className="text-destructive">*</span>
                          </FieldLabel>
                          <Input
                            placeholder="John Smith"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            className={cn(inputClassName, errors.name && "border-destructive")}
                          />
                          {errors.name && <FieldError>{errors.name}</FieldError>}
                        </Field>

                        <Field data-invalid={!!errors.email}>
                          <FieldLabel className="text-foreground font-medium mb-2">
                            Email <span className="text-destructive">*</span>
                          </FieldLabel>
                          <Input
                            type="email"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className={cn(inputClassName, errors.email && "border-destructive")}
                          />
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
                      <Button
                        type="submit"
                        size="lg"
                        disabled={formState === "submitting"}
                        className="w-full h-14 bg-foreground text-background hover:bg-foreground/90 text-base font-medium transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.2)] disabled:opacity-70"
                      >
                        {formState === "submitting" ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            Send Message
                            <Send className="w-4 h-4" />
                          </span>
                        )}
                      </Button>
                    </FieldGroup>
                  </form>
                )}
              </div>

              {/* Sidebar - Alternative Contact Info */}
              <div className="space-y-6">
                {/* Contact Methods */}
                <div className="p-8 rounded-2xl border border-border/60 bg-card/30 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-foreground mb-6">
                    Other ways to reach us
                  </h3>
                  
                  <div className="space-y-5">
                    {/* Email */}
                    <a 
                      href="mailto:hello@hashiradevs.com"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-secondary/80 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-0.5">Email</p>
                        <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                          hello@hashiradevs.com
                        </p>
                      </div>
                    </a>

                    {/* LinkedIn */}
                    <a 
                      href="https://linkedin.com/company/hashiradevs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-secondary/80 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                        <Linkedin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-0.5">LinkedIn</p>
                        <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                          /company/hashiradevs
                        </p>
                      </div>
                    </a>

                    {/* WhatsApp */}
                    <a 
                      href="https://wa.me/1234567890?text=Hi%20HashiraDevs%2C%20I%20want%20to%20discuss%20a%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-secondary/80 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/15 transition-colors">
                        <MessageCircle className="w-5 h-5 text-[#25D366]" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-0.5">WhatsApp</p>
                        <p className="text-foreground font-medium group-hover:text-[#25D366] transition-colors">
                          Chat with us
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="p-8 rounded-2xl border border-border/60 bg-card/30 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
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
                </div>

                {/* Trust Badge */}
                <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5">
                  <p className="text-sm text-center text-foreground/80">
                    Trusted by <span className="font-semibold text-foreground">50+ clients</span> worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
