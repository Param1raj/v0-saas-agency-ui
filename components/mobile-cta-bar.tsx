"use client"

import { ArrowRight, MessageCircle, Phone } from "lucide-react"

import { siteConfig } from "@/components/site-data"

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-md md:hidden">
      <div className="grid grid-cols-3 gap-2 px-3 py-3">
        <a
          href={siteConfig.phoneHref}
          className="flex h-11 items-center justify-center gap-2 rounded-xl border border-border/60 bg-card/40 text-sm font-medium text-foreground"
        >
          <Phone className="w-4 h-4" />
          Call
        </a>
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 items-center justify-center gap-2 rounded-xl border border-border/60 bg-card/40 text-sm font-medium text-foreground"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
        <a
          href="/contact"
          className="flex h-11 items-center justify-center gap-2 rounded-xl bg-foreground text-sm font-medium text-background"
        >
          <ArrowRight className="w-4 h-4" />
          Consult
        </a>
      </div>
    </div>
  )
}
