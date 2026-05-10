"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { ContactSheet } from "./contact-sheet"
import { Button } from "@/components/ui/button"
import {
  ctaDescription,
  siteConfig,
} from "@/components/site-data"

export function CTA() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section id="contact" className="relative py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Ready to grow your business{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                online
              </span>
              ?
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
              {ctaDescription}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Button
                size="lg"
                className="group bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-medium transition-all duration-300"
                onClick={() => setOpen(true)}
              >
                Book Free Consultation
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-base font-medium border-border bg-transparent hover:bg-secondary/50 hover:border-primary/50 hover:text-primary transition-all duration-300"
                >
                  See Our Work
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <a href={siteConfig.phoneHref} className="hover:text-foreground transition-colors">
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                WhatsApp Quick Action
              </a>
              <span>{siteConfig.location}</span>
            </div>
          </div>
        </div>
      </section>
      <ContactSheet open={open} handleClose={() => setOpen(false)} />
    </>
  )
}
