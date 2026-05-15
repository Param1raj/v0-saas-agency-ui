"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import {
  footerServiceLinks,
  navLinks,
  siteConfig,
} from "@/components/site-data"

export function Footer() {
  return (
    <footer className="dark border-t border-border bg-[#0f172a] dark:bg-background relative pt-24 pb-12">
      <div className="absolute inset-0 bg-secondary/30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-24">
          
          {/* Brand Column */}
          <div className="md:col-span-5 lg:col-span-4">
            <Link href="/" className="inline-block mb-6 group">
              <span className="text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-brand-indigo">
                HashiraDevs
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-8 text-pretty">
              Helping Local Businesses Grow Through Strategic Websites, Local SEO &amp; Digital Growth Systems.
            </p>
            <div className="flex gap-4">
               <a 
                 href={siteConfig.whatsappUrl} 
                 target="_blank" 
                 rel="noreferrer"
                 className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider flex items-center gap-1"
               >
                 WhatsApp <ArrowUpRight className="w-3 h-3" />
               </a>
               <a 
                 href={siteConfig.phoneHref} 
                 className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider flex items-center gap-1"
               >
                 Call <ArrowUpRight className="w-3 h-3" />
               </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-bold text-foreground uppercase tracking-widest mb-6">Navigation</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-brand-cyan transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-foreground uppercase tracking-widest mb-6">Expertise</h4>
              <ul className="space-y-4">
                {footerServiceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-brand-violet transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-xs font-bold text-foreground uppercase tracking-widest mb-6">Location</h4>
              <p className="text-sm text-muted-foreground mb-4">
                {siteConfig.location}
              </p>
              <a href={`mailto:${siteConfig.email}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block pb-1 border-b border-border/50 hover:border-primary/50">
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} HashiraDevs. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
