"use client"

import dynamic from "next/dynamic"
import { Hero } from "@/components/hero"
import { TrustStrip } from "@/components/trust-strip"
import { WhyUs } from "@/components/why-us"
import { Services } from "@/components/services"
import { Industries } from "@/components/industries"
import { Process } from "@/components/process"

const Work = dynamic(() => import("@/components/work").then(mod => mod.Work), { ssr: true })
const Testimonials = dynamic(() => import("@/components/testimonials").then(mod => mod.Testimonials), { ssr: true })
const FAQ = dynamic(() => import("@/components/faq").then(mod => mod.FAQ), { ssr: true })
const CTA = dynamic(() => import("@/components/cta").then(mod => mod.CTA), { ssr: true })

export function HomeShell() {
  return (
    <main className="min-h-screen bg-background selection:bg-brand-indigo/30 selection:text-brand-cyan">
      <Hero />
      <TrustStrip />
      <WhyUs />
      <Services />
      <Industries />
      <Process />
      <div className="min-h-[400px]"><Work /></div>
      <div className="min-h-[400px]"><Testimonials /></div>
      <div className="min-h-[400px]"><FAQ /></div>
      <div className="min-h-[300px]"><CTA /></div>
    </main>
  )
}
