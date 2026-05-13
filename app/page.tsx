import type { Metadata } from 'next'
import Script from 'next/script'

import { HomeShell } from '@/components/home-shell'
import { faqItems, localBusinessDescription } from '@/components/site-data'

export const metadata: Metadata = {
  title: 'Local Business Growth Websites & SEO Services | HashiraDevs',
  description: 'HashiraDevs helps local businesses grow through high-converting websites, local SEO, Google Maps optimization, and customer acquisition systems.',
}

export default function Home() {
  return (
    <>
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      <HomeShell />
    </>
  )
}
