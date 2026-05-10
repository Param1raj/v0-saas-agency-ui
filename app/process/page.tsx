"use client"

import { useEffect, useRef, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  Search, 
  PenTool, 
  Code2, 
  TestTube, 
  Rocket, 
  HeartHandshake,
  ArrowRight,
  CheckCircle2
} from "lucide-react"
import { cn } from "@/lib/utils"

const processSteps = [
  {
    number: "01",
    title: "Discovery & Planning",
    icon: Search,
    description: "We begin every project with a deep dive into your business goals, target audience, and technical requirements. This phase ensures we understand the full scope before writing a single line of code.",
    deliverables: [
      "Requirements documentation",
      "Technical feasibility analysis",
      "Project roadmap & milestones",
      "Initial cost estimation"
    ],
    duration: "1-2 weeks"
  },
  {
    number: "02",
    title: "Architecture & Design",
    icon: PenTool,
    description: "Our team designs the system architecture and user experience in parallel. We create wireframes, prototypes, and technical specifications that serve as the blueprint for development.",
    deliverables: [
      "System architecture diagram",
      "UI/UX wireframes & prototypes",
      "Database schema design",
      "API specification"
    ],
    duration: "2-3 weeks"
  },
  {
    number: "03",
    title: "Development",
    icon: Code2,
    description: "With a solid foundation in place, our senior engineers build your application using modern frameworks and best practices. You'll receive regular updates and demos throughout the process.",
    deliverables: [
      "Sprint-based development cycles",
      "Weekly progress demos",
      "Code review & documentation",
      "Version control & CI/CD setup"
    ],
    duration: "4-12 weeks"
  },
  {
    number: "04",
    title: "Testing & Optimization",
    icon: TestTube,
    description: "Quality is non-negotiable. We conduct thorough testing across devices and browsers, optimize performance, and ensure your application meets the highest standards before launch.",
    deliverables: [
      "Automated & manual testing",
      "Performance optimization",
      "Security audit",
      "Cross-browser/device QA"
    ],
    duration: "1-2 weeks"
  },
  {
    number: "05",
    title: "Launch",
    icon: Rocket,
    description: "We handle the deployment process end-to-end, ensuring a smooth transition to production. Our team monitors the launch closely and addresses any issues that arise immediately.",
    deliverables: [
      "Production deployment",
      "DNS & SSL configuration",
      "Launch monitoring",
      "Post-launch support"
    ],
    duration: "1 week"
  },
  {
    number: "06",
    title: "Ongoing Support",
    icon: HeartHandshake,
    description: "Our partnership doesn't end at launch. We offer ongoing maintenance, feature development, and support to ensure your application continues to perform and evolve with your business.",
    deliverables: [
      "Maintenance & updates",
      "Feature enhancements",
      "Performance monitoring",
      "Priority support access"
    ],
    duration: "Ongoing"
  },
]

function ProcessStep({ 
  step, 
  index, 
  isVisible 
}: { 
  step: typeof processSteps[0]
  index: number
  isVisible: boolean 
}) {
  const isEven = index % 2 === 0

  return (
    <div className="relative">
      {/* Timeline connector */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-border via-primary/30 to-border hidden lg:block" />
      
      {/* Step content */}
      <div 
        className={cn(
          "relative flex flex-wrap-reverse sm:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-12 lg:py-20",
          "transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        {/* Number indicator on timeline */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex">
          <div className={cn(
            "w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm",
            "bg-background border-2 border-primary shadow-[0_0_20px_rgba(99,102,241,0.3)]",
            "transition-all duration-500",
            isVisible ? "scale-100" : "scale-75"
          )}>
            <step.icon className="w-6 h-6 text-primary" />
          </div>
        </div>

        {/* Content card */}
        <div className={cn(
          "order-2",
          isEven ? "lg:order-1 lg:text-right lg:pr-16" : "lg:order-2 lg:pl-16"
        )}>
          <div className={cn(
            "inline-flex items-center gap-3 mb-4",
            isEven ? "lg:flex-row-reverse" : ""
          )}>
            <div className="lg:hidden w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <step.icon className="w-6 h-6 text-primary" />
            </div>
            <span className="text-4xl font-bold text-primary/20">{step.number}</span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {step.title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            {step.description}
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 text-sm text-muted-foreground">
            <span>Duration:</span>
            <span className="font-medium text-foreground">{step.duration}</span>
          </div>
        </div>

        {/* Deliverables card */}
        <div className={cn(
          "order-1",
          isEven ? "lg:order-2 lg:pl-16" : "lg:order-1 lg:pr-16"
        )}>
          <div className={cn(
            "p-6 md:p-8 rounded-2xl border border-border/60 bg-card/40",
            "transition-all duration-500",
            isVisible ? "shadow-[0_0_40px_-10px_rgba(99,102,241,0.15)]" : ""
          )}>
            <h4 className="text-sm font-medium text-primary mb-4 uppercase tracking-wider">
              Key Deliverables
            </h4>
            <ul className="space-y-3">
              {step.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProcessPage() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = stepRefs.current.indexOf(entry.target as HTMLDivElement)
          if (entry.isIntersecting && index !== -1) {
            setVisibleSteps((prev) => 
              prev.includes(index) ? prev : [...prev, index]
            )
          }
        })
      },
      { threshold: 0.2, rootMargin: "-50px" }
    )

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-150 h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            How We Work
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            A proven, transparent process that transforms your vision into 
            a high-quality product. Every step is designed for efficiency, 
            clarity, and exceptional results.
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="relative py-4 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              ref={(el) => { stepRefs.current[index] = el }}
            >
              <ProcessStep 
                step={step} 
                index={index} 
                isVisible={visibleSteps.includes(index)} 
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32">
        {/* Background glow */}
        <div className="absolute inset-0 bg-secondary/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-150 h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 text-pretty leading-relaxed">
            Let's discuss your requirements and create a roadmap for success. 
            Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="group bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-medium transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]"
              asChild
            >
              <a href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-base font-medium border-border bg-transparent hover:bg-secondary/50 hover:border-primary/50 transition-all duration-300"
              asChild
            >
              <a href="/portfolio">
                View Our Work
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
