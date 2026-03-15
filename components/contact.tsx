"use client"

import { useState } from "react"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"
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
import { cn } from "@/lib/utils"

type FormState = "idle" | "submitting" | "success" | "error"

interface FormErrors {
  fullName?: string
  email?: string
  projectType?: string
  budgetRange?: string
  timeline?: string
  message?: string
}

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle")
  const [errors, setErrors] = useState<FormErrors>({})
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    projectType: "",
    budgetRange: "",
    timeline: "",
    message: "",
  })

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
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

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Simulate success (in production, handle actual API response)
    const success = Math.random() > 0.1 // 90% success rate for demo
    
    if (success) {
      setFormState("success")
      setFormData({
        fullName: "",
        email: "",
        company: "",
        projectType: "",
        budgetRange: "",
        timeline: "",
        message: "",
      })
    } else {
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

  if (formState === "success") {
    return (
      <section id="contact" className="relative py-28 md:py-36">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <div className="p-12 rounded-2xl border border-border/60 bg-card/30 backdrop-blur-sm">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Message Sent Successfully
            </h3>
            <p className="text-muted-foreground mb-8">
              Thank you for reaching out! We'll review your project details and get back to you within 24-48 hours.
            </p>
            <Button
              onClick={() => setFormState("idle")}
              variant="outline"
              className="border-border hover:bg-secondary/50"
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="relative py-28 md:py-36">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 text-balance">
            Start Your Project
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg text-pretty leading-relaxed">
            Tell us about your vision. We'll get back to you within 24 hours to discuss how we can bring it to life.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-2xl border border-border/60 bg-card/30 backdrop-blur-sm">
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
              <Field data-invalid={!!errors.fullName}>
                <FieldLabel className="text-foreground font-medium mb-2">
                  Full Name <span className="text-destructive">*</span>
                </FieldLabel>
                <Input
                  placeholder="John Smith"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className={cn(inputClassName, errors.fullName && "border-destructive")}
                />
                {errors.fullName && <FieldError>{errors.fullName}</FieldError>}
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

            {/* Project Type, Budget, Timeline Row */}
            <div className="grid md:grid-cols-3 gap-6">
              <Field data-invalid={!!errors.projectType}>
                <FieldLabel className="text-foreground font-medium mb-2">
                  Project Type <span className="text-destructive">*</span>
                </FieldLabel>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) => handleInputChange("projectType", value)}
                >
                  <SelectTrigger className={cn(selectTriggerClassName, errors.projectType && "border-destructive")}>
                    <SelectValue placeholder="Select type" />
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
                Project Details <span className="text-destructive">*</span>
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
      </div>
    </section>
  )
}
