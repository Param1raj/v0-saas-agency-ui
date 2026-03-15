"use client"

import { 
  Globe, 
  Smartphone, 
  Layers, 
  Palette, 
  Server, 
  Cloud, 
  Settings,
  ArrowRight,
  Check,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

const services = [
  {
    icon: Globe,
    title: "Custom Web Applications",
    description: "We build powerful, scalable web applications tailored to your business needs. From complex enterprise dashboards to customer-facing portals, we deliver solutions that drive results.",
    benefits: [
      "Fully customized to your workflow",
      "Optimized for performance and SEO",
      "Responsive across all devices",
      "Built for scalability from day one"
    ],
    technologies: ["Next.js", "React", "Vue.js", "TypeScript", "Node.js", "PostgreSQL"],
    gradient: "from-blue-500/20 to-cyan-500/10",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that users love. We create seamless experiences for iOS and Android that keep your audience engaged.",
    benefits: [
      "Native iOS and Android development",
      "Cross-platform with React Native & Flutter",
      "Offline-first architecture",
      "App Store optimization included"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo"],
    gradient: "from-emerald-500/20 to-teal-500/10",
  },
  {
    icon: Layers,
    title: "SaaS Development",
    description: "End-to-end SaaS product development from MVP to scale. We handle multi-tenancy, billing, analytics, and everything needed to launch your software business.",
    benefits: [
      "Multi-tenant architecture",
      "Subscription billing integration",
      "User analytics and dashboards",
      "Enterprise-ready security"
    ],
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis", "AWS", "Vercel"],
    gradient: "from-violet-500/20 to-purple-500/10",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Research-driven design that converts. We create intuitive interfaces through user research, wireframing, prototyping, and polished visual design.",
    benefits: [
      "User research and journey mapping",
      "Wireframes and interactive prototypes",
      "Design systems and component libraries",
      "Accessibility-first approach"
    ],
    technologies: ["Figma", "Framer", "Adobe XD", "Principle", "Storybook", "Tailwind"],
    gradient: "from-pink-500/20 to-rose-500/10",
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description: "Robust backend systems that power your applications. We build scalable APIs, microservices, and database architectures that handle any load.",
    benefits: [
      "REST and GraphQL APIs",
      "Microservices architecture",
      "Database design and optimization",
      "Third-party integrations"
    ],
    technologies: ["Node.js", "Python", "Go", "GraphQL", "PostgreSQL", "MongoDB"],
    gradient: "from-orange-500/20 to-amber-500/10",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Modern infrastructure that scales with your business. We set up CI/CD pipelines, containerization, monitoring, and auto-scaling for production-ready deployments.",
    benefits: [
      "AWS, GCP, and Azure expertise",
      "CI/CD pipeline automation",
      "Container orchestration",
      "24/7 monitoring and alerting"
    ],
    technologies: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    gradient: "from-sky-500/20 to-blue-500/10",
  },
  {
    icon: Settings,
    title: "Maintenance & Scaling",
    description: "Ongoing support to keep your applications running smoothly. We handle updates, performance optimization, security patches, and scaling as you grow.",
    benefits: [
      "Proactive monitoring and maintenance",
      "Performance optimization",
      "Security updates and audits",
      "Scaling consultation and implementation"
    ],
    technologies: ["Datadog", "Sentry", "New Relic", "Cloudflare", "PagerDuty", "Grafana"],
    gradient: "from-gray-500/20 to-slate-500/10",
  },
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

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            <span className="text-foreground">Our </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            From concept to launch and beyond, we deliver end-to-end custom development solutions 
            that transform your vision into powerful, scalable digital products.
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
                    className="group bg-foreground text-background hover:bg-foreground/90 font-medium"
                  >
                    Discuss Your Project
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>

                {/* Visual Card */}
                <div className={cn(
                  "relative rounded-2xl border border-border/60 bg-card/30 overflow-hidden",
                  index % 2 === 1 && "lg:col-start-1 lg:row-start-1"
                )}>
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-br",
                    service.gradient
                  )} />
                  <div className="relative p-8 md:p-12 min-h-[320px] flex items-center justify-center">
                    {/* Abstract visual representation */}
                    <div className="w-full max-w-sm">
                      {/* Browser mockup */}
                      <div className="rounded-lg border border-border/40 bg-background/60 backdrop-blur-sm overflow-hidden shadow-2xl">
                        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/40 bg-secondary/30">
                          <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                          <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                          <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                          <div className="ml-3 flex-1 h-5 rounded bg-muted/30" />
                        </div>
                        <div className="p-4 space-y-3">
                          <div className="h-4 w-3/4 rounded bg-muted/40" />
                          <div className="h-4 w-1/2 rounded bg-muted/30" />
                          <div className="h-20 w-full rounded bg-muted/20 mt-4" />
                          <div className="flex gap-2 mt-4">
                            <div className="h-8 w-20 rounded bg-primary/30" />
                            <div className="h-8 w-20 rounded bg-muted/30" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
              Custom Development vs Templates
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
              While templates offer quick starts, custom development provides the foundation 
              for sustainable growth and competitive advantage.
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to Build Something Exceptional?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
            Let's discuss your project and explore how HashiraDevs can help you 
            achieve your goals with custom software solutions.
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

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
