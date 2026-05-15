import type { Metadata } from 'next'
import { WebDevContent } from './web-development-content'

export const metadata: Metadata = {
  title: 'Web Development Services | Customer-Generating Websites | HashiraDevs',
  description: 'We build high-converting, mobile-optimized websites specifically designed to turn local visitors into paying customers. Fast, secure, and built for growth.',
  keywords: ['web development for local business', 'high conversion websites', 'mobile optimized web design', 'lead generation websites', 'local business website developer'],
}

export default function WebDevelopmentPage() {
  return <WebDevContent />
}
