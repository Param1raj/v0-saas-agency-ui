import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Clock,
  FileText,
  GitBranch,
  Github,
  Handshake,
  Linkedin,
  Mail,
  Rocket,
  ScrollText,
  Users,
  Wrench,
} from "lucide-react"

import { HoverCard } from "@/components/card/hover-card"
import { Contact } from "@/components/contact"
import { ScrollReveal } from "@/components/ScrollReveal"
import { siteConfig } from "@/components/site-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const pageTitle = "Param Raj – Full-Stack & AI Engineer for Startups"
const pageDescription =
  "Part-time contract engineering for startups: React/Next.js, Node.js and AI integrations. MVPs, fixes and extra hands while you hire."
const pageUrl = `${siteConfig.domain}/startups`

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
}

const githubUrl = "https://github.com/Param1raj"
const linkedinUrl = "https://www.linkedin.com/in/param-raj-997aa41ba"

const helpItems = [
  {
    icon: Bot,
    title: "AI features & integrations",
    description:
      "AI chat, RAG search, agents and workflow automation added to the product you already have.",
  },
  {
    icon: Users,
    title: "Extra engineering while you hire",
    description:
      "I take part of your backlog part-time while you search for a full-time engineer.",
  },
  {
    icon: Wrench,
    title: "Fixes & rebuilds",
    description:
      "Slow, broken or outdated React and Node apps and dashboards: I find what's wrong and fix it, or rebuild the parts that need it.",
  },
  {
    icon: Rocket,
    title: "SaaS MVPs",
    description: "A working v1 of your product in 4–8 weeks, in your repo.",
  },
]

const actionEngineSteps = [
  "The AI proposes an action",
  "Human approval for actions that need it",
  "Runs as an idempotent async Celery task",
  "Calls the provider's API with OAuth-scoped access",
]

const integrations = ["GitHub", "Gmail", "Outlook", "Teams", "HubSpot"]

const workingItems = [
  {
    icon: Clock,
    title: "Overlap with US mornings",
    description: "About 9:30 AM–1:30 PM ET (7:00–11:00 PM IST) on weekdays.",
  },
  {
    icon: FileText,
    title: "Async by default",
    description:
      "Written updates, a short demo of working software every week, and a shared board.",
  },
  {
    icon: GitBranch,
    title: "You own the code from day one",
    description: "The code goes into your repo from the first commit.",
  },
  {
    icon: Handshake,
    title: "Three ways to work together",
    description: "A part-time monthly contract, a fixed-scope MVP, or a fixed-price fix.",
  },
]

// TODO(Param): prune this list to the tools you actually use day to day.
const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "Express",
  "Python",
  "Celery",
  "PostgreSQL",
  "Redis",
  "Redux Toolkit",
  "Tailwind",
  "AWS (S3)",
  "OpenAI / Anthropic APIs",
  "Razorpay/Stripe-style payments",
]

const startupProjectTypes = [
  { value: "ai-feature", label: "AI feature / integration" },
  { value: "contract-developer", label: "Contract developer" },
  { value: "fix-or-rebuild", label: "Fix or rebuild" },
  { value: "mvp", label: "MVP" },
  { value: "other", label: "Other" },
]

const startupBudgets = [
  { value: "under-2k", label: "Under $2k" },
  { value: "2k-5k", label: "$2k–5k" },
  { value: "5k-10k", label: "$5k–10k" },
  { value: "10k-plus", label: "$10k+" },
  { value: "not-sure", label: "Not sure yet" },
]

function SectionHeading({ title, intro }: { title: string; intro?: string }) {
  return (
    <ScrollReveal>
      <div className="text-center mb-12 md:mb-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 text-balance">
          {title}
        </h2>
        {intro && (
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty leading-relaxed">
            {intro}
          </p>
        )}
      </div>
    </ScrollReveal>
  )
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
    >
      {children}
      <ArrowUpRight className="w-4 h-4" />
    </a>
  )
}

export default function StartupsPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-clip">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full h-[400px] bg-primary/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16 items-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-indigo opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-indigo"></span>
                </span>
                <span className="text-sm font-medium tracking-wide">Part-time contract engineering</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.1] text-balance">
                Senior full-stack &amp; AI engineering for startups,
                <span className="block mt-2 bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-cyan bg-clip-text text-transparent">
                  without the hiring cycle
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed text-pretty">
                I&apos;m Param Raj, a full-stack engineer with 4.5+ years of experience in React/Next.js,
                Node.js/NestJS and AI integrations. I work part-time on contract (about 15–20 hours a
                week), overlapping with US mornings.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Button
                  asChild
                  size="lg"
                  className="group bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-medium transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]"
                >
                  <a href="#contact">
                    Book a 15-min call
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <div className="grid grid-cols-2 gap-3 sm:flex sm:gap-4">
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="px-6 py-6 text-base font-medium border-border bg-transparent hover:bg-secondary/50 hover:border-primary/50 transition-all duration-300"
                  >
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="px-6 py-6 text-base font-medium border-border bg-transparent hover:bg-secondary/50 hover:border-primary/50 transition-all duration-300"
                  >
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            <div className="order-first lg:order-last">
              <ScrollReveal delay={0.1}>
                {/* TODO(Param): replace public/param.jpg (currently a placeholder) with your headshot. */}
                <Image
                  src="/param.jpg"
                  alt="Param Raj"
                  width={320}
                  height={384}
                  priority
                  className="w-24 h-24 sm:w-28 sm:h-28 lg:w-80 lg:h-96 rounded-2xl lg:rounded-3xl object-cover border border-border/60 bg-secondary/60 shadow-xl"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* What I can help with */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-secondary/20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6">
          <SectionHeading title="What I can help with" />
          <div className="grid md:grid-cols-2 gap-6">
            {helpItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.07}>
                <HoverCard title={item.title} description={item.description} Icon={item.icon} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading title="Selected work" />

          <div className="grid lg:grid-cols-2 gap-6">
            {/* MoneyRoots */}
            <ScrollReveal>
              <article className="h-full flex flex-col rounded-2xl border border-border/60 bg-card/40 overflow-hidden transition-all duration-500 hover:border-primary/30">
                <div className="relative h-56 sm:h-64 lg:h-80 bg-secondary/40">
                  <Image
                    src="/elearning-1.png"
                    alt="MoneyRoots course catalogue"
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                    MoneyRoots: e-learning platform
                  </h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed mb-6 flex-1">
                    Paid video courses streamed from Amazon S3, Razorpay checkout with server-side payment
                    verification, OTP sign-up, JWT auth with a mutex-guarded token refresh, device-limited
                    logins (FingerprintJS) and a referral program with an affiliate dashboard.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Next.js 15", "React 19", "TypeScript", "Redux Toolkit / RTK Query"].map((tech) => (
                      <Badge key={tech} variant="outline" className="px-2.5 py-1 bg-secondary/60 text-muted-foreground border-border/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    <ExternalLink href="https://moneyroots.in">Live site</ExternalLink>
                    <Link
                      href="/case-study/e-learning-website"
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Case study <ArrowRight className="w-4 h-4" />
                    </Link>
                    <ExternalLink href="https://github.com/Param1raj/e-learning">Code</ExternalLink>
                  </div>
                </div>
              </article>
            </ScrollReveal>

            {/* AI workplace platform */}
            <ScrollReveal delay={0.1}>
              <article className="h-full flex flex-col rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8 transition-all duration-500 hover:border-primary/30">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-3">
                  Built in my current role
                </p>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                  Multi-tenant AI workplace platform
                </h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed mb-6">
                  Integrates GitHub, Gmail, Outlook, Teams and HubSpot. I built the action engine that lets
                  the AI take real actions through OAuth-scoped APIs, with human-approval steps, async
                  Celery task queues, idempotency and audit logging.
                </p>

                {/* Architecture sketch of the action engine */}
                <div
                  className="mt-auto rounded-xl border border-border/60 bg-secondary/30 p-4 sm:p-5"
                  aria-label="Action engine flow"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                    Action engine
                  </p>
                  <ol className="space-y-2">
                    {actionEngineSteps.map((step, i) => (
                      <li key={step}>
                        <div className="flex items-start gap-3 rounded-lg border border-border/60 bg-background/60 px-3 py-2.5">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-xs font-semibold text-primary">
                            {i + 1}
                          </span>
                          <span className="text-sm text-foreground leading-snug pt-0.5">{step}</span>
                        </div>
                        {i < actionEngineSteps.length - 1 && (
                          <ArrowDown className="mx-auto my-1 h-4 w-4 text-muted-foreground/60" aria-hidden="true" />
                        )}
                      </li>
                    ))}
                  </ol>
                  <ArrowDown className="mx-auto my-1 h-4 w-4 text-muted-foreground/60" aria-hidden="true" />
                  <div className="flex flex-wrap justify-center gap-2">
                    {integrations.map((name) => (
                      <Badge key={name} variant="outline" className="px-2.5 py-1 bg-background/60 text-foreground border-border/60">
                        {name}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2 border-t border-border/60 pt-3 text-xs text-muted-foreground">
                    <ScrollText className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    Actions are recorded in an audit log.
                  </div>
                </div>
              </article>
            </ScrollReveal>
          </div>

          {/* Dholera */}
          <ScrollReveal delay={0.15}>
            <Link
              href="/case-study/dholera-realestate-website"
              className="group mt-6 flex flex-col sm:flex-row sm:items-center gap-5 rounded-2xl border border-border/60 bg-card/40 p-4 sm:p-5 transition-all duration-500 hover:border-primary/30"
            >
              <div className="relative h-40 sm:h-24 sm:w-40 shrink-0 overflow-hidden rounded-xl bg-secondary/40">
                <Image
                  src="/realestate-1.png"
                  alt="Dholera lead-generation site"
                  fill
                  sizes="(min-width: 640px) 160px, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  Dholera lead-generation site
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A landing page for a real-estate campaign, with an enquiry form and a WhatsApp
                  call-to-action, built in its own Next.js route group and layout.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary shrink-0">
                Case study <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* How I work */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-secondary/20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6">
          <SectionHeading title="How I work" />
          <ul className="grid sm:grid-cols-2 gap-4">
            {workingItems.map((item, i) => (
              <li key={item.title}>
                <ScrollReveal delay={i * 0.07}>
                  <div className="flex gap-4 rounded-2xl border border-border/50 bg-card/30 p-5 h-full">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/60">
                      <item.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              </li>
            ))}
          </ul>
          <ScrollReveal delay={0.2}>
            <p className="mt-8 text-center text-muted-foreground text-pretty">
              Pricing depends on scope. I&apos;ll give you a clear quote after a 15-min call.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stack */}
      <section className="relative py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading title="Stack" />
          <ScrollReveal>
            <ul className="flex flex-wrap justify-center gap-2.5">
              {stack.map((item) => (
                <li key={item}>
                  <Badge
                    variant="outline"
                    className="px-3 py-1.5 text-sm bg-secondary/50 text-foreground border-border/60 whitespace-normal text-center"
                  >
                    {item}
                  </Badge>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact */}
      <Contact
        className="relative scroll-mt-20 py-20 md:py-28"
        title="Book a 15-min call"
        description="Tell me what you're building and where you need help. I'll reply by email to set up a call."
        successMessage="Thanks, I've got your message. I'll reply by email to set up a call."
        messagePlaceholder="What are you building, what's the current stack, and where do you need help?"
        projectTypeOptions={startupProjectTypes}
        budgetOptions={startupBudgets}
        source="startups"
        aside={
          <aside className="rounded-2xl border border-border/60 bg-card/30 p-6 md:p-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/60 mb-4">
              <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
            </div>
            <p className="font-semibold text-foreground mb-1">Prefer email?</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-primary hover:text-primary/80 transition-colors break-all"
            >
              {siteConfig.email}
            </a>
            <div className="mt-6 flex gap-5 border-t border-border/60 pt-5">
              <ExternalLink href={githubUrl}>GitHub</ExternalLink>
              <ExternalLink href={linkedinUrl}>LinkedIn</ExternalLink>
            </div>
          </aside>
        }
      />
    </main>
  )
}
