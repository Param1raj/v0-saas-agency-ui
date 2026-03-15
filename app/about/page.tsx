import { ArrowRight, Target, Eye, Award, Zap, Users, Shield, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'About HashiraDevs | Elite Software Development Agency | Our Story & Expertise',
  description: 'Learn about HashiraDevs - an elite engineering-focused development agency with 5+ years of experience delivering premium software solutions for visionary businesses worldwide.',
  keywords: ['about software development agency', 'HashiraDevs story', 'elite developers', 'senior engineering', 'software development expertise', 'company values', 'development team', 'quality software', 'performance-first development'],
  openGraph: {
    title: 'About HashiraDevs | Elite Software Development Agency',
    description: 'Learn about HashiraDevs - an elite engineering-focused development agency delivering premium software solutions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About HashiraDevs | Elite Software Development Agency',
    description: 'Learn about HashiraDevs - an elite engineering-focused development agency.',
  },
}

const values = [
  {
    icon: Award,
    title: "Uncompromising Quality",
    description: "Every line of code is crafted with precision. We follow industry best practices, rigorous testing, and thorough code reviews to deliver solutions that stand the test of time.",
  },
  {
    icon: Zap,
    title: "Performance-First",
    description: "Speed matters. We engineer applications optimized for performance from day one—fast load times, efficient queries, and seamless user experiences at any scale.",
  },
  {
    icon: Shield,
    title: "Radical Transparency",
    description: "No surprises, no hidden agendas. Clear communication, honest timelines, and regular progress updates keep you informed every step of the way.",
  },
  {
    icon: Users,
    title: "True Partnership",
    description: "We're not just vendors—we're invested partners in your success. Your goals become our goals, and we're committed to outcomes that drive real business value.",
  },
]

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "15+", label: "Industries Served" },
]

const industries = [
  "Fintech",
  "Healthcare",
  "E-commerce",
  "SaaS",
  "Education",
  "Real Estate",
  "Logistics",
  "Media",
]

export default function AboutPage() {
  return (
    <>
      <Script
        id="breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://hashiradevs.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About",
                "item": "https://hashiradevs.com/about"
              }
            ]
          })
        }}
      />
      <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            About HashiraDevs
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            An elite engineering-focused agency building exceptional software 
            for companies that refuse to settle for average.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Built by Engineers, <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  For Ambitious Founders
                </span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  HashiraDevs was founded on a simple belief: great software requires 
                  great engineering. Too many agencies deliver mediocre code wrapped in 
                  fancy presentations. We chose a different path.
                </p>
                <p>
                  We are a team of senior engineers who have built and scaled products 
                  at companies of all sizes—from scrappy startups to Fortune 500 enterprises. 
                  We understand what it takes to ship software that actually works under 
                  real-world pressure.
                </p>
                <p>
                  Our name "Hashira" represents pillars of strength—and that's exactly 
                  what we aim to be for our clients. A reliable foundation you can build 
                  your business upon, with code that scales and teams that deliver.
                </p>
              </div>
            </div>
            
            {/* Decorative code block */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl" />
              <div className="relative rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 md:p-8 overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  <span className="ml-3 text-xs text-muted-foreground font-mono">hashira.config.ts</span>
                </div>
                {/* Code content */}
                <div className="font-mono text-sm space-y-2">
                  <p><span className="text-primary">const</span> <span className="text-foreground">agency</span> = {"{"}</p>
                  <p className="pl-4"><span className="text-muted-foreground">name:</span> <span className="text-accent">"HashiraDevs"</span>,</p>
                  <p className="pl-4"><span className="text-muted-foreground">focus:</span> <span className="text-accent">"Elite Engineering"</span>,</p>
                  <p className="pl-4"><span className="text-muted-foreground">approach:</span> <span className="text-accent">"Quality First"</span>,</p>
                  <p className="pl-4"><span className="text-muted-foreground">commitment:</span> <span className="text-accent">"Long-term Success"</span>,</p>
                  <p className="pl-4"><span className="text-muted-foreground">delivery:</span> <span className="text-accent">"Always On Time"</span>,</p>
                  <p>{"}"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-secondary/20 relative">
        <div className="absolute left-0 top-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="relative p-8 md:p-10 rounded-2xl border border-border bg-card/40 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower ambitious businesses with exceptional software solutions that 
                drive growth, enhance user experiences, and create lasting competitive 
                advantages. We exist to turn complex technical challenges into elegant, 
                scalable products.
              </p>
            </div>
            
            {/* Vision */}
            <div className="relative p-8 md:p-10 rounded-2xl border border-border bg-card/40 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted development partner for companies building the 
                future. We envision a world where every business has access to senior-level 
                engineering talent and where quality software is the standard, not the exception.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              The principles that guide every decision we make and every line of code we write.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className={cn(
                  "group relative p-8 rounded-2xl border border-border/60 bg-card/30",
                  "transition-all duration-500 ease-out",
                  "hover:border-primary/40 hover:bg-card/50",
                  "hover:shadow-[0_0_50px_-12px_rgba(99,102,241,0.2)]"
                )}
              >
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/80 flex items-center justify-center transition-all duration-500 group-hover:bg-primary/15">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-[15px]">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-20 md:py-28 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
              Experience That Delivers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Proven track record across diverse industries and project types.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl border border-border/60 bg-card/30"
              >
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Industries */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6">
              Industries We Serve
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="px-4 py-2 rounded-full border border-border bg-card/50 text-sm text-muted-foreground"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent mx-auto mb-8 flex items-center justify-center">
              <Code className="w-10 h-10 text-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Small Team of Senior Experts
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We're intentionally lean. Rather than scaling with junior developers, 
              we maintain a focused team of senior engineers who bring deep expertise 
              to every project. When you work with HashiraDevs, you work directly with 
              the people writing your code—no handoffs, no communication layers, 
              no diluted quality.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
              <span className="px-4 py-2 rounded-full border border-border bg-card/50">Senior Full-Stack Engineers</span>
              <span className="px-4 py-2 rounded-full border border-border bg-card/50">UI/UX Specialists</span>
              <span className="px-4 py-2 rounded-full border border-border bg-card/50">Cloud Architects</span>
              <span className="px-4 py-2 rounded-full border border-border bg-card/50">DevOps Engineers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Ready to Build Something Great?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss your project and explore how HashiraDevs can help 
            turn your vision into exceptional software.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="group bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-medium"
              asChild
            >
              <a href="/#contact">
                Start a Conversation
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-base font-medium border-border bg-transparent hover:bg-secondary/50"
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
    </>
  )
}
