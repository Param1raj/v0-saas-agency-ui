import Script from 'next/script'
import type { Metadata } from 'next'
import { ServicesContent } from './services-content'

export const metadata: Metadata = {
  title: 'Local Business Growth Services | HashiraDevs | SEO, Websites & WhatsApp Automation',
  description: 'Strategic growth services for local businesses. We provide high-converting websites, local SEO, Google Maps optimization, and automated lead systems to drive real customer acquisition.',
  keywords: ['local seo services', 'google maps optimization', 'business growth websites', 'whatsapp automation for business', 'local business marketing', 'conversion rate optimization'],
  openGraph: {
    title: 'Local Business Growth Services | HashiraDevs',
    description: 'Grow your local business with strategic websites, local SEO, and automated lead systems.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local Business Growth Services | HashiraDevs',
    description: 'Strategic growth services designed for local businesses.',
  },
}

export default function ServicesPage() {
  return (
    <>
      <Script
        id="breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://hashiradevs.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://hashiradevs.com/services"
              }
            ]
          })
        }}
      />
      <ServicesContent />
    </>
  )
}
