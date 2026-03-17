"use client"

import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhyUs } from "@/components/why-us"
import { Work } from "@/components/work"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"

export function HomeShell() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Services />
      <WhyUs />
      <Work />
      <Testimonials />
        {/* <FAQ /> */}
        <CTA />
        {/* <Contact /> */}
      </main>
  )
}

