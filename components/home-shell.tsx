"use client"

import { CTA } from "@/components/cta"
import { FAQ } from "@/components/faq"
import { Hero } from "@/components/hero"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { TrustStrip } from "@/components/trust-strip"
import { WhyUs } from "@/components/why-us"
import { Work } from "@/components/work"

export function HomeShell() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <TrustStrip />
      <Services />
      <WhyUs />
      <Work />
      <Testimonials />
      <FAQ />
      <CTA />
      <MobileCtaBar />
    </main>
  )
}
