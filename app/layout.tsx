import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from '@/components/navbar';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Footer } from '@/components/footer';
import Script from 'next/script'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'HashiraDevs | Premium Software Development Agency | Custom Web & Mobile Apps',
  description: 'Elite software development agency specializing in custom web applications, mobile apps, and SaaS platforms. Trusted by startups and enterprises worldwide. Get a free consultation today.',
  keywords: ['software development', 'web development', 'SaaS', 'mobile app development', 'custom software', 'Next.js development', 'React development', 'full-stack development', 'API development', 'cloud solutions', 'DevOps', 'UI/UX design', 'enterprise software', 'startup development', 'digital transformation'],
  authors: [{ name: 'HashiraDevs' }],
  creator: 'HashiraDevs',
  publisher: 'HashiraDevs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hashiradevs.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'HashiraDevs | Premium Software Development Agency',
    description: 'Elite software development agency crafting world-class digital experiences. We build scalable, high-performance applications for global enterprises.',
    url: 'https://hashiradevs.com',
    siteName: 'HashiraDevs',
    images: [
      {
        url: '/og-image.jpg', // You'll need to create this
        width: 1200,
        height: 630,
        alt: 'HashiraDevs - Premium Software Development Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HashiraDevs | Premium Software Development Agency',
    description: 'Elite software development agency crafting world-class digital experiences.',
    images: ['/og-image.jpg'],
    creator: '@hashiradevs', // Replace with your Twitter handle
  },
  icons: {
    icon: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code', // Add your Google verification code
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "HashiraDevs",
              "url": "https://hashiradevs.com",
              "logo": "https://hashiradevs.com/icon.svg",
              "description": "Elite software development agency specializing in custom web applications, mobile apps, and SaaS platforms.",
              "foundingDate": "2024",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-781-886-9663",
                "email": "pr6587424@gmail.com",
                "contactType": "Customer Service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://github.com/Param1raj"
              ],
              "serviceType": ["Software Development", "Web Development", "Mobile App Development", "SaaS Development"],
              "areaServed": "Worldwide",
              "knowsAbout": ["Next.js", "React", "Node.js", "Python", "AWS", "DevOps"]
            })
          }}
        />
        <Navbar />
        {children}
        <Analytics />
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
