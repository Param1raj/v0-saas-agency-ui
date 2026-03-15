import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhyUs } from "@/components/why-us"
import { Work } from "@/components/work"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Work />
      <Testimonials />
      <Contact />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
