"use client"

import { AtSign, MapPin, Phone } from "lucide-react"
import Link from "next/link"

import {
  footerServiceLinks,
  navLinks,
  siteConfig,
} from "@/components/site-data"

const footerLinks = {
  company: navLinks,
  services: footerServiceLinks,
  contact: [
    { label: siteConfig.phoneDisplay, icon: <Phone className="w-4 h-4" /> },
    { label: siteConfig.email, icon: <AtSign className="w-4 h-4" /> },
    { label: siteConfig.location, icon: <MapPin className="w-4 h-4" /> },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 py-16 pb-28 md:pb-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-sm font-bold text-foreground">H</span>
              </div>
              <span className="text-lg font-semibold text-foreground tracking-tight">
                HashiraDevs
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs mb-6 leading-relaxed">
              Conversion-focused websites and local growth systems for businesses that want more visibility, trust, and inquiries.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.label} className="flex gap-2 items-start">
                  {link.icon}
                  <p className="text-sm text-muted-foreground transition-colors">
                    {link.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} HashiraDevs. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Helping local businesses grow online.
          </p>
        </div>
      </div>
    </footer>
  )
}
