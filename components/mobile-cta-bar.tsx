"use client"

import { ArrowRight, MessageCircle, Phone } from "lucide-react"

import { siteConfig } from "@/components/site-data"

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/80 backdrop-blur-xl md:hidden pb-safe">
      <div className="grid grid-cols-4 gap-2 px-4 py-3">
        <a
          href={siteConfig.phoneHref}
          className="col-span-1 flex flex-col items-center justify-center gap-1 rounded-xl bg-card/50 border border-border/50 py-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-medium">Call</span>
        </a>
        
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2 relative flex items-center justify-center gap-2 rounded-xl bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] overflow-hidden group"
        >
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-bold tracking-wide">WhatsApp Us</span>
        </a>
        
        <a
          href="/contact"
          className="col-span-1 flex flex-col items-center justify-center gap-1 rounded-xl bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo py-2 transition-colors"
        >
          <ArrowRight className="w-5 h-5" />
          <span className="text-[10px] font-medium">Book</span>
        </a>
      </div>
    </div>
  )
}
