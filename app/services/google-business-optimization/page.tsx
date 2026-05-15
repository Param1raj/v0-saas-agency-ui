import type { Metadata } from 'next'
import { GoogleBizContent } from './google-business-content'

export const metadata: Metadata = {
  title: 'Google Business Profile Optimization | Maps SEO | HashiraDevs',
  description: 'Dominate the Google Map Pack and drive more local inquiries. We optimize your Google Business Profile to build trust, improve visibility, and get you found by nearby customers.',
  keywords: ['google business profile optimization', 'google maps seo', 'local map pack ranking', 'gbp management services', 'local business map visibility'],
}

export default function GoogleBusinessOptimizationPage() {
  return <GoogleBizContent />
}
