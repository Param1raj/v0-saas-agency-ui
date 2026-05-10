import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
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

export const metadata: Metadata = {
  title: "About HashiraDevs | Local Business Website & SEO Growth Partner",
  description:
    "Learn how HashiraDevs helps local businesses grow online with trust-building websites, local SEO, and conversion-focused systems designed to drive more inquiries.",
  keywords: [
    "about local business web development agency",
    "local SEO agency about page",
    "website development for local businesses",
    "business growth agency",
    "HashiraDevs about",
    "local business website partner",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About HashiraDevs | Local Business Website & SEO Growth Partner",
    description:
      "HashiraDevs helps local businesses grow online with websites, local SEO, and conversion-focused systems.",
    type: "website",
    url: `${siteConfig.domain}/about`,
  },
  twitter: {
    card: "summary_large_image",
    title: "About HashiraDevs | Local Business Website & SEO Growth Partner",
    description:
      "HashiraDevs helps local businesses grow online with websites, local SEO, and conversion-focused systems.",
  },
}

const values = [
  {
    icon: Target,
    title: "Business-First Thinking",
    description:
      "We make decisions based on what helps your business earn more trust, attract better leads, and turn interest into real conversations.",
  },
  {
    icon: LineChart,
    title: "Performance That Supports Growth",
    description:
      "Fast pages, clear messaging, and practical conversion paths help more visitors stay, understand your offer, and take action.",
  },
  {
    icon: Shield,
    title: "Honest Communication",
    description:
      "You get direct guidance, clear expectations, and a partner who tells you what matters, what does not, and why.",
  },
  {
    icon: Users,
    title: "Long-Term Partnership",
    description:
      "We build with the next stage of your business in mind so your website, SEO, and lead flow can keep improving over time.",
  },
] as const

const proofHighlights = [
  "5+ years building conversion-focused web experiences",
  "50+ projects delivered across service and growth-led businesses",
  "Support across web strategy, local SEO, and inquiry journeys",
] as const

const stats = [
  { value: "5+", label: "Years helping businesses improve online trust" },
  { value: "50+", label: "Projects delivered with a growth-first mindset" },
  { value: "15+", label: "Industries served across local and digital businesses" },
  { value: "1:1", label: "Direct collaboration without bloated handoffs" },
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

export default function AboutPage() {
  return (
    <>
      <Script
        id="about-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: siteConfig.domain,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "About",
                  item: `${siteConfig.domain}/about`,
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              name: "About HashiraDevs",
              url: `${siteConfig.domain}/about`,
              description:
                "About HashiraDevs, a local business website development and SEO partner focused on trust, visibility, and conversions.",
              mainEntity: {
                "@type": "LocalBusiness",
                name: "HashiraDevs",
                url: siteConfig.domain,
                telephone: siteConfig.phoneDisplay,
                email: siteConfig.email,
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Moradabad",
                  addressRegion: "Uttar Pradesh",
                  addressCountry: "IN",
                },
              },
            },
          ]),
        }}
      />

      <main className="min-h-screen bg-background">
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="absolute inset-0 bg-background" />
          <div className="absolute top-1/3 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/8 blur-[100px] pointer-events-none" />

          <div className="relative mx-auto max-w-[850px] px-6 text-center">
            <h1 className="mb-6 md:text-[28px] font-bold text-foreground text-balance">
              We help local businesses build a stronger online presence that earns trust and drives growth.
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              HashiraDevs combines conversion-focused websites, local SEO, and practical business strategy
              so more of your online traffic turns into calls, bookings, and real conversations.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
          </div>
        </section>

        <section className="relative py-8 md:py-10">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-3 md:grid-cols-3">
              {proofHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-border/50 bg-card/20 px-4 py-4 text-center text-sm text-muted-foreground backdrop-blur-sm"
                >
                  {item}
                </div>
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

              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 blur-xl" />
                <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm md:p-8">
                  <div className="mb-6 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/60" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                    <div className="h-3 w-3 rounded-full bg-green-500/60" />
                    <span className="ml-3 font-mono text-xs text-muted-foreground">hashira-growth.ts</span>
                  </div>

                  <div className="space-y-2 font-mono text-sm">
                    <p>
                      <span className="text-primary">const</span> <span className="text-foreground">partner</span> = {"{"}
                    </p>
                    <p className="pl-4">
                      <span className="text-muted-foreground">focus:</span> <span className="text-accent">"Local business growth"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-muted-foreground">services:</span> <span className="text-accent">"Websites + SEO + conversion systems"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-muted-foreground">goal:</span> <span className="text-accent">"More trust, leads, and bookings"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-muted-foreground">approach:</span> <span className="text-accent">"Clear, honest, business-first"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-muted-foreground">partnership:</span> <span className="text-accent">"Built for long-term improvement"</span>,
                    </p>
                    <p>{"}"}</p>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {testimonialSnippets.map((item) => (
                      <div key={item.quote} className="rounded-xl border border-border/60 bg-background/50 p-4">
                        <p className="text-sm leading-relaxed text-foreground/90">"{item.quote}"</p>
                        <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                          {item.author}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-secondary/20 py-20 md:py-28">
          <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div className="relative rounded-2xl border border-border bg-card/40 p-8 backdrop-blur-sm md:p-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Our Mission</h2>
                <p className="max-w-2xl leading-relaxed text-muted-foreground">
                  To help local businesses grow online with websites and search visibility that make them look
                  more credible, communicate more clearly, and convert more visitors into inquiries.
                </p>
              </div>

              <div className="relative rounded-2xl border border-border bg-card/40 p-8 backdrop-blur-sm md:p-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                  <Eye className="h-7 w-7 text-accent" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">How We Think</h2>
                <p className="max-w-2xl leading-relaxed text-muted-foreground">
                  Good websites should do more than exist. They should remove doubt, support local discovery,
                  and make it easier for the right customers to take the next step with confidence.
                </p>
              </div>
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
                    "group relative rounded-2xl border border-border/60 bg-card/30 p-8",
                    "transition-all duration-500 ease-out",
                    "hover:border-primary/40 hover:bg-card/50",
                    "hover:shadow-[0_0_50px_-12px_rgba(99,102,241,0.2)]",
                  )}
                >
                  <div className="flex gap-5">
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
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-border/60 bg-card/30 p-6 text-center">
                  <div className="mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
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
                  {industries.map((industry) => (
                    <span
                      key={industry}
                      className="rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-muted-foreground"
                    >
                      {industry}
                    </span>
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
    </>
  )
}
