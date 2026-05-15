import type { Metadata } from 'next'
import { LocalSeoContent } from './local-seo-content'

export const metadata: Metadata = {
  title: 'Local SEO Services | Get Found by Nearby Customers | HashiraDevs',
  description: 'Dominate local search results and Google Maps. Our Local SEO services help your business get found by nearby customers who are already searching for what you offer.',
  keywords: ['local seo', 'google maps ranking', 'near me search optimization', 'local business visibility', 'google business profile seo'],
}

export default function LocalSeoPage() {
  return <LocalSeoContent />
}
