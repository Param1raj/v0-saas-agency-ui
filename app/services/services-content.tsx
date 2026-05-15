"use client"

import { 
  Globe, 
  Smartphone, 
  Layers, 
  Palette, 
  Settings,
  ArrowRight,
  Check,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { 
  WebsitePreview, 
  SeoPreview, 
  GoogleBizPreview, 
  WhatsAppPreview, 
  RedesignPreview 
} from "@/components/services"

const services = [
  {
    icon: Globe,
    title: "Customer-Generating Websites",
    description: "We build websites that do more than just look good—they act as your 24/7 salesperson. Optimized for mobile and built for speed, our sites are designed to turn visitors into calls, bookings, and inquiries.",
    benefits: [
      "Built for local customer acquisition",
      "Fast-loading mobile-first design",
      "Clear, high-converting calls to action",
      "WhatsApp & click-to-call integration"
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Local SEO Ready", "Fast Load Times"],
    gradient: "from-blue-500/20 to-cyan-500/10",
    href: "/services/web-development",
    preview: <WebsitePreview />
  },
  {
    icon: Smartphone,
    title: "Local SEO Services",
    description: "Get found by customers in your area exactly when they need your services. We improve your visibility in local search results and Google Maps, driving high-intent traffic to your business.",
    benefits: [
      "Higher rankings in local search",
      "Localized keyword targeting",
      "Internal linking for local authority",
      "Content strategy for nearby customers"
    ],
    technologies: ["Keyword Research", "On-Page SEO", "Schema Markup", "Local Content"],
    gradient: "from-emerald-500/20 to-teal-500/10",
    href: "/services/local-seo",
    preview: <SeoPreview isHome={false} />
  },
  {
    icon: Globe,
    title: "Google Maps Optimization",
    description: "Dominate the 'Local Pack' and turn profile views into customers. We optimize your Google Business Profile to build trust, improve visibility, and encourage more inquiries.",
    benefits: [
      "Google Business Profile optimization",
      "Map pack ranking strategy",
      "Review management systems",
      "Improved local discovery"
    ],
    technologies: ["Google Business Profile", "Google Maps", "Local Citations", "Trust Building"],
    gradient: "from-orange-500/20 to-amber-500/10",
    href: "/services/google-business-optimization",
    preview: <GoogleBizPreview isHome={false} />
  },
  {
    icon: Layers,
    title: "Automated Lead Systems",
    description: "Stop losing leads to slow response times. We implement automated WhatsApp and inquiry systems that capture and respond to customers 24/7, ensuring no opportunity is missed.",
    benefits: [
      "24/7 automated inquiry response",
      "WhatsApp lead capture funnels",
      "Instant notification systems",
      "Higher lead-to-booking rates"
    ],
    technologies: ["WhatsApp API", "Automation Workflows", "CRM Integration", "Lead Management"],
    gradient: "from-violet-500/20 to-purple-500/10",
    href: "/services/whatsapp-automation",
    preview: <WhatsAppPreview />
  },
  {
    icon: Palette,
    title: "Website Redesign",
    description: "Transform your existing website into a modern, trustworthy growth engine. We update your design, messaging, and layout to build instant credibility and drive more action.",
    benefits: [
      "Modern, premium visual aesthetic",
      "Improved user journey & flow",
      "Strengthened trust & authority",
      "Mobile-responsive optimization"
    ],
    technologies: ["UI/UX Audit", "Visual Design", "Performance Upgrade", "Conversion Focus"],
    gradient: "from-pink-500/20 to-rose-500/10",
    href: "/services/website-redesign",
    preview: <RedesignPreview isHome={false} />
  }
]

const comparisonData = {
  headers: ["Feature", "Custom Development", "Templates/No-Code"],
  rows: [
    { feature: "Tailored to your exact needs", custom: true, template: false },
    { feature: "Unlimited scalability", custom: true, template: false },
    { feature: "Full ownership of code", custom: true, template: false },
    { feature: "Unique competitive advantage", custom: true, template: false },
    { feature: "Quick initial setup", custom: false, template: true },
    { feature: "Lower upfront cost", custom: false, template: true },
    { feature: "Long-term cost efficiency", custom: true, template: false },
    { feature: "Enterprise-grade security", custom: true, template: false },
    { feature: "Custom integrations", custom: true, template: false },
    { feature: "Dedicated support team", custom: true, template: false },
  ],
}

export function ServicesContent() {
  return (
    <main className="min-h-screen bg-background">      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 sm:w-200 h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            <span className="text-foreground">Growth Systems </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">for Local Businesses</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Everything a local business needs to get found on Google, capture more leads, 
            and turn website visitors into paying customers.
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={cn(
                  "grid lg:grid-cols-2 gap-8 lg:gap-16 items-center",
                  index % 2 === 1 && "lg:grid-flow-dense"
                )}
              >
                {/* Content */}
                <div className={cn(index % 2 === 1 && "lg:col-start-2")}>
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-secondary/80 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground/90 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="mb-8">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1.5 text-xs font-medium rounded-md bg-secondary/80 text-muted-foreground border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button 
                    asChild
                    className="group bg-foreground text-background hover:bg-foreground/90 font-medium px-8"
                  >
                    <a href={service.href}>
                      Explore Service
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>

                {/* Visual Card */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    "relative rounded-2xl border border-border/60 bg-card/30 overflow-hidden group",
                    index % 2 === 1 && "lg:col-start-1 lg:row-start-1"
                  )}
                >
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-50 transition-opacity duration-500 group-hover:opacity-80",
                    service.gradient
                  )} />
                  <div className="relative p-6 md:p-10 min-h-[340px] flex items-center justify-center">
                    <div className="w-full max-w-md transition-transform duration-500 group-hover:scale-[1.02]">
                      {service.preview}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="relative py-20 md:py-28 bg-secondary/20">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 text-balance">
              Custom Growth Systems vs Generic Templates
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
              While templates offer quick starts, our strategic growth systems provide the 
              foundation for long-term customer acquisition and local dominance.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="rounded-2xl border border-border/60 bg-card/30 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-secondary/50 border-b border-border/60">
              <div className="p-4 md:p-6 text-sm font-medium text-muted-foreground">
                Feature
              </div>
              <div className="p-4 md:p-6 text-sm font-medium text-foreground text-center border-l border-border/60">
                Custom Development
              </div>
              <div className="p-4 md:p-6 text-sm font-medium text-muted-foreground text-center border-l border-border/60">
                Templates / No-Code
              </div>
            </div>
            
            {/* Rows */}
            {comparisonData.rows.map((row, index) => (
              <div 
                key={row.feature}
                className={cn(
                  "grid grid-cols-3",
                  index !== comparisonData.rows.length - 1 && "border-b border-border/40"
                )}
              >
                <div className="p-4 md:p-5 text-sm text-foreground/90">
                  {row.feature}
                </div>
                <div className="p-4 md:p-5 flex items-center justify-center border-l border-border/40">
                  {row.custom ? (
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-muted/30 flex items-center justify-center">
                      <X className="w-3.5 h-3.5 text-muted-foreground/50" />
                    </div>
                  )}
                </div>
                <div className="p-4 md:p-5 flex items-center justify-center border-l border-border/40">
                  {row.template ? (
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-muted/30 flex items-center justify-center">
                      <X className="w-3.5 h-3.5 text-muted-foreground/50" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-150 h-[400px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to Scale Your Local Business?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
            Let's find what's stopping your business from growing online and build a system 
            that brings you more calls, bookings, and visibility.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="group bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-medium hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] transition-all duration-300"
            >
              Start a Conversation
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="px-8 py-6 text-base font-medium border-border bg-transparent hover:bg-secondary/50 hover:border-primary/50 transition-all duration-300"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
