import { HomeShell } from "@/components/home-shell"
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'HashiraDevs | Premium Software Development Agency | Custom Web & Mobile Apps',
  description: 'Elite software development agency specializing in custom web applications, mobile apps, and SaaS platforms. Trusted by startups and enterprises worldwide. Get a free consultation today.',
  keywords: ['software development', 'web development', 'SaaS', 'mobile app development', 'custom software', 'Next.js development', 'React development', 'full-stack development', 'API development', 'cloud solutions', 'DevOps', 'UI/UX design', 'enterprise software', 'startup development', 'digital transformation'],
  openGraph: {
    title: 'HashiraDevs | Premium Software Development Agency',
    description: 'Elite software development agency crafting world-class digital experiences. We build scalable, high-performance applications for global enterprises.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HashiraDevs | Premium Software Development Agency',
    description: 'Elite software development agency crafting world-class digital experiences.',
  },
}

export default function Home() {
  return (
    <>
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What technologies do you specialize in?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We specialize in modern web technologies including Next.js, React, Node.js, TypeScript, Python, and cloud platforms like AWS, GCP, and Azure. We stay current with the latest frameworks and best practices."
                }
              },
              {
                "@type": "Question",
                "name": "How long does a typical project take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Project timelines vary based on complexity. A simple web app might take 4-8 weeks, while complex SaaS platforms can take 3-6 months. We provide detailed timelines during our initial consultation."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide ongoing maintenance and support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we offer comprehensive maintenance packages including bug fixes, security updates, performance monitoring, and feature enhancements. We also provide 24/7 support for critical applications."
                }
              },
              {
                "@type": "Question",
                "name": "What's your development process like?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We follow an agile methodology with regular check-ins, transparent communication, and iterative development. Each project includes discovery, design, development, testing, and deployment phases."
                }
              },
              {
                "@type": "Question",
                "name": "Do you work with startups and small businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! We love working with startups and small businesses. We understand budget constraints and can scale our services accordingly. Many of our long-term clients started as small projects."
                }
              },
              {
                "@type": "Question",
                "name": "What makes HashiraDevs different from other agencies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We combine technical excellence with business acumen. Our senior-level developers have extensive experience, and we focus on delivering scalable, maintainable solutions that grow with your business."
                }
              }
            ]
          })
        }}
        />
      <Script
        id="aggregate-rating-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "HashiraDevs",
            "url": "https://hashiradevs.com",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "50",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Sarah Chen"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "HashiraDevs transformed our vision into a product that exceeded every expectation. Their technical expertise and attention to detail are unmatched."
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Marcus Rodriguez"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "Working with HashiraDevs was a game-changer. They delivered a complex healthcare platform in record time without compromising on quality."
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Emily Watson"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "The team's ability to understand our business needs and translate them into elegant technical solutions is remarkable."
              }
            ]
          })
        }}
      />
      <HomeShell />
    </>
  )
}
