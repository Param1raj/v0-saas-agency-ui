import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'

import './globals.css'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { siteConfig, localBusinessDescription, organizationServices } from '@/components/site-data'
import { ThemeProvider } from '@/components/theme-provider'
import { LenisProvider } from '@/components/providers/lenis-provider'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { MobileCtaBar } from '@/components/mobile-cta-bar'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'HashiraDevs | Local Business Website Development & SEO Services',
  description: localBusinessDescription,
  keywords: [
    'local business website development',
    'local SEO services',
    'website redesign',
    'Google Business optimization',
    'WhatsApp automation',
    'Moradabad web development agency',
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
    title: 'HashiraDevs | Local Business Website Development & SEO Services',
    description: localBusinessDescription,
    url: siteConfig.domain,
    siteName: 'HashiraDevs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HashiraDevs | Local Business Website Development & SEO Services',
    description: localBusinessDescription,
  },
  icons: {
    icon: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'HashiraDevs',
              url: siteConfig.domain,
              logo: `${siteConfig.domain}/icon.svg`,
              description: localBusinessDescription,
              telephone: siteConfig.phoneDisplay,
              email: siteConfig.email,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Moradabad',
                addressRegion: 'Uttar Pradesh',
                addressCountry: 'IN',
              },
              areaServed: 'India',
              serviceType: organizationServices,
            }),
          }}
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
