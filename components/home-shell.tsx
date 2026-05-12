"use client"

import { CTA } from "@/components/cta"
import { FAQ } from "@/components/faq"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { TrustStrip } from "@/components/trust-strip"
import { WhyUs } from "@/components/why-us"
import { Work } from "@/components/work"
import { Industries } from "@/components/industries"
import { Process } from "@/components/process"

export function HomeShell() {
  return (
    <main className="min-h-screen bg-background selection:bg-brand-indigo/30 selection:text-brand-cyan">
      <Hero />
      <TrustStrip />
      <WhyUs />
      <Services />
      <Industries />
      <Process />
      <Work />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  )
}
