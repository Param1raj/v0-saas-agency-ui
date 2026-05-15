"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Award,
  Eye,
  LineChart,
  MapPinned,
  MessageCircle,
  Shield,
  Target,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/components/site-data"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { CountUp } from "@/components/ui/count-up"

function ValueTargetVisual() {
  return (
    <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-[0.15] group-hover:opacity-50 transition-opacity duration-500 pointer-events-none">
      <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="50" cy="50" r="10" fill="currentColor" />
        <motion.path d="M 0 0 L 45 45" stroke="currentColor" strokeWidth="3" strokeLinecap="round"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} />
      </svg>
    </div>
  )
}

function ValueSpeedVisual() {
  return (
    <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-[0.15] group-hover:opacity-50 transition-opacity duration-500 pointer-events-none">
      <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
        <path d="M 20 80 A 40 40 0 1 1 80 80" stroke="currentColor" strokeWidth="4" fill="none" strokeDasharray="4 4" />
        <motion.path d="M 20 80 A 40 40 0 1 1 80 80" stroke="currentColor" strokeWidth="4" fill="none"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 0.8 }} transition={{ duration: 1.5, ease: "easeOut" }} />
        <motion.line x1="50" y1="50" x2="80" y2="30" stroke="currentColor" strokeWidth="4" strokeLinecap="round"
          initial={{ rotate: -90, transformOrigin: "50px 50px" }} whileInView={{ rotate: 30 }} transition={{ duration: 1.5, ease: "easeOut" }} />
      </svg>
    </div>
  )
}

function ValueChatVisual() {
  return (
    <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-[0.15] group-hover:opacity-50 transition-opacity duration-500 pointer-events-none">
      <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
        <motion.path d="M 20 40 C 20 20 45 20 45 40 C 45 55 30 65 20 70 C 25 60 20 60 20 40 Z" stroke="currentColor" strokeWidth="3" fill="none"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
        <motion.path d="M 50 60 C 50 80 85 80 85 60 C 85 45 100 35 105 30 C 100 40 105 40 105 60 Z" stroke="currentColor" strokeWidth="3" fill="none"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 }} />
      </svg>
    </div>
  )
}

function ValueStairsVisual() {
  return (
    <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-[0.15] group-hover:opacity-50 transition-opacity duration-500 pointer-events-none">
      <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
        {[1, 2, 3, 4].map((i) => (
          <motion.rect key={i} x={i * 20 - 10} y={90 - i * 20} width="15" height={i * 20} fill="currentColor"
            initial={{ height: 0, y: 90 }} whileInView={{ height: i * 20, y: 90 - i * 20 }} transition={{ duration: 0.5, delay: i * 0.2 }} />
        ))}
      </svg>
    </div>
  )
}

const values = [
  {
    icon: Target,
    title: "Business-First Thinking",
    description:
      "We make decisions based on what helps your business earn more trust, attract better leads, and turn interest into real conversations.",
    Visual: ValueTargetVisual,
  },
  {
    icon: LineChart,
    title: "Performance That Supports Growth",
    description:
      "Fast pages, clear messaging, and practical conversion paths help more visitors stay, understand your offer, and take action.",
    Visual: ValueSpeedVisual,
  },
  {
    icon: Shield,
    title: "Honest Communication",
    description:
      "You get direct guidance, clear expectations, and a partner who tells you what matters, what does not, and why.",
    Visual: ValueChatVisual,
  },
  {
    icon: Users,
    title: "Long-Term Partnership",
    description:
      "We build with the next stage of your business in mind so your website, SEO, and lead flow can keep improving over time.",
    Visual: ValueStairsVisual,
  },
] as const

const proofHighlights = [
  "5+ years building conversion-focused web experiences",
  "50+ projects delivered across service and growth-led businesses",
  "Support across web strategy, local SEO, and inquiry journeys",
] as const

const stats = [
  { value: 5, prefix: "", suffix: "+", label: "Years helping businesses improve online trust" },
  { value: 50, prefix: "", suffix: "+", label: "Projects delivered with a growth-first mindset" },
  { value: 15, prefix: "", suffix: "+", label: "Industries served across local and digital businesses" },
  { value: 1, prefix: "", suffix: ":1", label: "Direct collaboration without bloated handoffs" },
] as const

const industries = [
  "Restaurants",
  "Real Estate",
  "Education",
  "Healthcare",
  "Professional Services",
  "E-commerce",
  "Finance",
  "Local Brands",
] as const

const resultSnippets = [
  {
    title: "Better first impressions",
    description: "Cleaner positioning and stronger trust signals help visitors feel confident faster.",
  },
  {
    title: "More qualified inquiries",
    description: "We design page flow and CTA placement around calls, bookings, and WhatsApp conversations.",
  },
  {
    title: "Stronger local visibility",
    description: "SEO-friendly structure supports discovery when nearby customers are already searching.",
  },
] as const

const testimonialSnippets = [
  {
    quote:
      "They approached the site like a growth asset, not just a design project.",
    author: "Founder, service business client",
  },
  {
    quote:
      "The messaging became clearer, the site felt more trustworthy, and inquiries felt more intentional.",
    author: "Owner, local business client",
  },
] as const

function MissionVisual() {
  return (
    <div className="absolute top-0 right-0 p-6 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-700">
      <svg width="140" height="140" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M60 10 L100 30 L100 60 C100 90 60 110 60 110 C60 110 20 90 20 60 L20 30 L60 10 Z"
          stroke="currentColor"
          strokeWidth="3"
          className="text-primary/60 dark:text-primary/30"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.path
          d="M45 60 L55 70 L75 50"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
        <motion.circle cx="60" cy="60" r="40" className="fill-primary/10 dark:fill-primary/20" 
          initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 1, delay: 0.5 }} 
        />
      </svg>
    </div>
  )
}

function VisionVisual() {
  return (
    <div className="absolute top-0 right-0 p-6 pointer-events-none opacity-50 group-hover:opacity-60 transition-opacity duration-700">
      <svg width="150" height="150" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Fog disappearing - using primary color for guaranteed visibility */}
        <motion.circle cx="40" cy="40" r="30" className="fill-primary/20 dark:fill-primary/10"
          initial={{ opacity: 0.8, scale: 1 }}
          whileInView={{ opacity: 0, scale: 1.5 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.circle cx="80" cy="60" r="40" className="fill-primary/20 dark:fill-primary/10"
          initial={{ opacity: 0.8, scale: 1 }}
          whileInView={{ opacity: 0, scale: 1.5 }}
          transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
        />
        {/* Map pin appearing */}
        <motion.path
          d="M60 20 C43.431 20 30 33.431 30 50 C30 72.5 60 100 60 100 C60 100 90 72.5 90 50 C90 33.431 76.569 20 60 20 Z"
          stroke="currentColor"
          strokeWidth="5"
          className="text-primary dark:text-accent"
          fill="currentColor"
          fillOpacity="0.05"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1, type: "spring" }}
        />
        <motion.circle cx="60" cy="50" r="12" stroke="currentColor" strokeWidth="4" className="text-primary dark:text-accent"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />
      </svg>
    </div>
  )
}

function ConversionFunnelVisual() {
  return (
    <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl border border-border bg-[#0c0c18] p-6 overflow-hidden flex flex-col justify-between shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(139,92,246,0.1)_0%,transparent_100%)]" />

      {/* Top labels */}
      <div className="relative z-10 flex justify-between items-start w-full">
        <div className="text-xs font-mono text-white/40 uppercase tracking-wider">Traffic</div>
        <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Qualified Leads</div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg viewBox="0 0 400 200" className="w-[60%] h-full overflow-visible">
          <defs>
            <linearGradient id="funnel-grad-horizontal" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
            </linearGradient>
            <filter id="glow-funnel-h" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Funnel structure - Horizontal as per image */}
          <motion.path 
            d="M 50 5 L 200 65 L 200 135 L 50 195 Z" 
            fill="url(#funnel-grad-horizontal)" 
            opacity="0.4" 
          />
          <motion.path 
            d="M 200 65 L 350 90 L 350 110 L 200 135 Z" 
            fill="url(#funnel-grad-horizontal)" 
            opacity="0.7" 
          />
          
          {/* Outline */}
          <path 
            d="M 50 5 L 200 65 L 350 90 M 50 195 L 200 135 L 350 110" 
            stroke="white" 
            strokeOpacity="0.1" 
            strokeWidth="1" 
            fill="none" 
          />

          {/* Animated Particles (Visitors entering from left) */}
          {[...Array(3)].map((_, i) => (
            <motion.circle 
              key={`visitor-h-${i}`}
              r="4" 
              fill="white"
              initial={{ cx: -20, cy: 100 + (i * 30 - 45), opacity: 0 }}
              animate={{ 
                cx: [0, 100, 200], 
                cy: [100 + (i * 10 - 15), 100, 100], 
                opacity: [0, 0.4, 0] 
              }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.8, ease: "linear" }}
            />
          ))}

          {/* Leads (Stars exiting on right) */}
          {[...Array(3)].map((_, i) => (
            <motion.path
              key={`lead-h-${i}`}
              d="M 0 -5 L 1 -1.5 L 5 -1.5 L 2 1 L 3 5 L 0 2.5 L -3 5 L -2 1 L -5 -1.5 L -1 -1.5 Z"
              fill="#10b981"
              initial={{ x: 200, y: 100, scale: 0, opacity: 0 }}
              animate={{ 
                x: [200, 300, 420], 
                y: [100, 100 + (i * 10 - 10), 100 + (i * 20 - 20)], 
                scale: [0, 1.2, 0.8], 
                opacity: [0, 1, 0] 
              }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1.5 + i * 1.1, ease: "easeOut" }}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 grid grid-cols-2 gap-3 mt-auto pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-md"
        >
          <div className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Traffic Quality</div>
          <div className="w-full bg-white/5 rounded-full h-1.5 mt-2 overflow-hidden">
            <motion.div initial={{ width: 0 }} whileInView={{ width: "85%" }} transition={{ duration: 1, delay: 1 }} className="h-full bg-violet-500 rounded-full" />
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 backdrop-blur-md"
        >
          <div className="text-[10px] uppercase tracking-wider text-emerald-400 mb-1">Lead Conversion</div>
          <div className="text-xl font-bold text-emerald-400">+240%</div>
        </motion.div>
      </div>
    </div>
  )
}

export function AboutClient() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-1/3 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/8 blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-[850px] px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            <TypingAnimation text="About HashiraDevs" />
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed"
          >
            HashiraDevs combines conversion-focused websites, local SEO, and practical business strategy
            so more of your online traffic turns into calls, bookings, and real conversations.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="group bg-foreground px-8 py-6 text-base font-medium text-background hover:bg-foreground/90 shadow-xl"
              asChild
            >
              <Link href="/#contact">
                Book Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border bg-transparent px-8 py-6 text-base font-medium hover:bg-secondary/50"
              asChild
            >
              <Link href="/portfolio">See Our Work</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="relative py-8 md:py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-3 md:grid-cols-3">
            {proofHighlights.map((item, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={item}
                className="rounded-xl border border-border/80 bg-card/50 px-4 py-4 text-center text-sm font-medium text-foreground backdrop-blur-sm shadow-sm"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                Built to help businesses compete online,
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  not just launch another website
                </span>
              </h2>
              <div className="max-w-2xl space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  HashiraDevs exists because too many local businesses are held back by websites that look
                  acceptable but do very little for trust, visibility, or lead generation. We wanted to
                  build a better path.
                </p>
                <p>
                  Our work sits at the intersection of clear positioning, strong user experience, and
                  practical growth strategy. That means thinking beyond launch day and focusing on how your
                  website supports discovery, credibility, and customer action.
                </p>
                <p>
                  We care about the business outcome behind the build: more confidence from first-time
                  visitors, more qualified inquiries, and an online presence that feels aligned with the
                  quality of your real-world service.
                </p>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-xl pointer-events-none" />
              <ConversionFunnelVisual />
              
              {/* <div className="absolute -bottom-10 left-0 right-0 grid gap-3 sm:grid-cols-2 px-4 z-20">
                {testimonialSnippets.map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    key={item.quote} 
                    className="rounded-xl border border-border/50 bg-card/90 dark:bg-[#0e0e1a]/90 backdrop-blur-xl p-4 shadow-xl"
                  >
                    <p className="text-sm leading-relaxed text-foreground dark:text-white/90">"{item.quote}"</p>
                    <p className="mt-3 text-[10px] uppercase tracking-[0.15em] text-muted-foreground dark:text-white/50">

                      {item.author}
                    </p>
                  </motion.div>
                ))}
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative bg-secondary/20 py-20 md:py-28">
        <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12 mt-10">
            <motion.div 
              whileHover={{ y: -5 }}
              className="group relative rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm md:p-10 transition-all duration-500 hover:bg-card/60 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.15)] overflow-hidden"
            >
              <MissionVisual />
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-[60px] transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110 pointer-events-none" />
              <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 dark:bg-primary/10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h2 className="relative z-10 mb-4 text-2xl font-bold text-foreground">Our Mission</h2>
              <p className="relative z-10 max-w-2xl leading-relaxed text-muted-foreground">
                To help local businesses grow online with websites and search visibility that make them look
                more credible, communicate more clearly, and convert more visitors into inquiries.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="group relative rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm md:p-10 transition-all duration-500 hover:bg-card/60 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.15)] overflow-hidden"
            >
              <VisionVisual />
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-[60px] transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110 pointer-events-none" />
              <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 dark:bg-primary/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h2 className="relative z-10 mb-4 text-2xl font-bold text-foreground">How We Think</h2>
              <p className="relative z-10 max-w-2xl leading-relaxed text-muted-foreground">
                Good websites should do more than exist. They should remove doubt, support local discovery,
                and make it easier for the right customers to take the next step with confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-5 text-3xl font-bold text-foreground md:text-4xl">What clients value when they work with us</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              A compact set of principles that keeps every project grounded in trust, clarity, and business impact.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className={cn(
                  "group relative rounded-2xl border border-border/60 bg-card/30 p-8 overflow-hidden",
                  "transition-all duration-500 ease-out",
                  "hover:border-primary/40 hover:bg-card/50",
                  "hover:shadow-[0_0_50px_-12px_rgba(99,102,241,0.2)]",
                )}
              >
                <value.Visual />
                <div className="relative z-10 flex gap-5">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-secondary/80 transition-all duration-500 group-hover:bg-primary/15">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-foreground">{value.title}</h3>
                    <p className="text-[15px] leading-relaxed text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/20 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-5 text-3xl font-bold text-foreground md:text-4xl">Experience that supports real business growth</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Enough depth to guide strategy well, while staying lean enough to keep communication direct and decisions practical.
            </p>
          </div>

          <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={stat.label} 
                className="rounded-2xl border border-border/60 bg-card/60 p-6 text-center shadow-lg"
              >
                <div className="mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                  <CountUp to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="rounded-2xl border border-border/60 bg-card/30 p-8">
              <h3 className="mb-6 text-2xl font-bold text-foreground">What that usually improves for our clients</h3>
              <div className="space-y-5">
                {resultSnippets.map((item) => (
                  <div key={item.title} className="border-l border-primary/30 pl-4">
                    <h4 className="text-base font-semibold text-foreground">{item.title}</h4>
                    <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card/30 p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <MapPinned className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Businesses we often align with</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {industries.map((industry, i) => (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    key={industry}
                    className="rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary cursor-default"
                  >
                    {industry}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent">
              <Award className="h-10 w-10 text-foreground" />
            </div>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              A hands-on team that stays close to your business goals
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              We keep our team intentionally focused so you work directly with people who care about the
              outcome, not just the output. That means better context, fewer handoff gaps, and more
              thoughtful decisions around messaging, UX, SEO, and conversion flow.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
              <span className="rounded-full border border-border bg-card/50 px-4 py-2">Growth-aware website strategy</span>
              <span className="rounded-full border border-border bg-card/50 px-4 py-2">Conversion-focused user journeys</span>
              <span className="rounded-full border border-border bg-card/50 px-4 py-2">Local SEO-friendly foundations</span>
              <span className="rounded-full border border-border bg-card/50 px-4 py-2">Direct, honest collaboration</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/20 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold text-foreground text-balance md:text-4xl">
            If your business needs a stronger online presence, we should talk.
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
            Whether you need a better website, clearer positioning, or a more reliable path from traffic to
            inquiry, we can help you build the next version with confidence.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group bg-foreground px-8 py-6 text-base font-medium text-background hover:bg-foreground/90"
              asChild
            >
              <Link href="/#contact">
                Book Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border bg-transparent px-8 py-6 text-base font-medium hover:bg-secondary/50"
              asChild
            >
              <Link href="/portfolio">See Our Work</Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href={siteConfig.phoneHref} className="hover:text-foreground transition-colors">
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Quick Action
            </a>
            <span>{siteConfig.location}</span>
          </div>
        </div>
      </section>
    </main>
  )
}
