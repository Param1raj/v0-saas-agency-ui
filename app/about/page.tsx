import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import {
  ArrowRight,
  Award,
  Eye,
  LineChart,
  MapPinned,
  MessageCircle,
  Shield,
  Target,
  Users,
} from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/components/site-data"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { CountUp } from "@/components/ui/count-up"

export const metadata: Metadata = {
  title: "About HashiraDevs | Local Business Website & SEO Growth Partner",
  description:
    "Learn how HashiraDevs helps local businesses grow online with trust-building websites, local SEO, and conversion-focused systems designed to drive more inquiries.",
  keywords: [
    "about local business web development agency",
    "local SEO agency about page",
    "website development for local businesses",
    "business growth agency",
    "HashiraDevs about",
    "local business website partner",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About HashiraDevs | Local Business Website & SEO Growth Partner",
    description:
      "HashiraDevs helps local businesses grow online with websites, local SEO, and conversion-focused systems.",
    type: "website",
    url: `${siteConfig.domain}/about`,
  },
  twitter: {
    card: "summary_large_image",
    title: "About HashiraDevs | Local Business Website & SEO Growth Partner",
    description:
      "HashiraDevs helps local businesses grow online with websites, local SEO, and conversion-focused systems.",
  },
}

import { AboutClient } from "./client"

export default function AboutPage() {
  return (
    <>
      <Script
        id="about-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: siteConfig.domain,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "About",
                  item: `${siteConfig.domain}/about`,
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              name: "About HashiraDevs",
              url: `${siteConfig.domain}/about`,
              description:
                "About HashiraDevs, a local business website development and SEO partner focused on trust, visibility, and conversions.",
              mainEntity: {
                "@type": "LocalBusiness",
                name: "HashiraDevs",
                url: siteConfig.domain,
                telephone: siteConfig.phoneDisplay,
                email: siteConfig.email,
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Moradabad",
                  addressRegion: "Uttar Pradesh",
                  addressCountry: "IN",
                },
              },
            },
          ]),
        }}
      />
      <AboutClient />
    </>
  )
}
