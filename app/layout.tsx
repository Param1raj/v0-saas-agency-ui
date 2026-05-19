import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'

import './globals.css'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { siteConfig, localBusinessDescription, organizationServices, geoAreasServed, organizationSameAs } from '@/components/site-data'
import { ThemeProvider } from '@/components/theme-provider'
import { LenisProvider } from '@/components/providers/lenis-provider'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { MobileCtaBar } from '@/components/mobile-cta-bar'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', display: 'swap' })

export const metadata: Metadata = {
  title: 'Local Business Growth Websites & SEO Services | HashiraDevs',
  description: localBusinessDescription,
  keywords: [
    'local business website development',
    'local SEO services',
    'local business growth',
    'Google Business Profile optimization',
    'Google Maps optimization',
    'WhatsApp lead system',
    'customer acquisition',
    'website redesign for local businesses',
    'Moradabad web development',
    'Delhi NCR local SEO',
    'Noida website design',
  ],
  authors: [{ name: 'HashiraDevs' }],
  creator: 'HashiraDevs',
  publisher: 'HashiraDevs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.domain),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Local Business Growth Websites & SEO Services | HashiraDevs',
    description: localBusinessDescription,
    url: siteConfig.domain,
    siteName: 'HashiraDevs',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local Business Growth Websites & SEO Services | HashiraDevs',
    description: localBusinessDescription,
  },
  icons: {
    icon: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'geo.region': 'IN-UP',
    'geo.placename': 'Moradabad, Uttar Pradesh',
    'geo.position': '28.8386;78.7733',
    'ICBM': '28.8386, 78.7733',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': `${siteConfig.domain}/#organization`,
  name: 'HashiraDevs',
  url: siteConfig.domain,
  logo: `${siteConfig.domain}/icon.svg`,
  image: `${siteConfig.domain}/icon.svg`,
  description: localBusinessDescription,
  telephone: siteConfig.phoneDisplay,
  email: siteConfig.email,
  priceRange: '₹₹',
  openingHours: 'Mo-Sa 09:00-19:00',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Prabhat Market',
    addressLocality: 'Moradabad',
    addressRegion: 'Uttar Pradesh',
    postalCode: '244001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.8386,
    longitude: 78.7733,
  },
  areaServed: geoAreasServed.map((city) => ({
    '@type': 'City',
    name: city,
  })),
  sameAs: organizationSameAs,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Local Business Growth Services',
    itemListElement: organizationServices.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service,
      },
    })),
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteConfig.domain}/#website`,
  url: siteConfig.domain,
  name: 'HashiraDevs',
  description: 'Local business growth websites, SEO, and customer acquisition systems.',
  publisher: {
    '@id': `${siteConfig.domain}/#organization`,
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteConfig.domain,
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <ThemeProvider>
          <LenisProvider>
            <Navbar />
            {children}
            <Analytics />
            <Footer />
            {/* <WhatsAppButton /> */}
            <MobileCtaBar />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
