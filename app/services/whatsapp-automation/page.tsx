import type { Metadata } from 'next'
import { WhatsAppAutomationContent } from './whatsapp-automation-content'

export const metadata: Metadata = {
  title: 'WhatsApp Lead Automation | 24/7 Lead Capture | HashiraDevs',
  description: 'Never miss a lead again. We implement automated WhatsApp systems that capture and respond to local business inquiries 24/7, ensuring you win the job before your competitors wake up.',
  keywords: ['whatsapp business automation', 'automated lead capture', '24/7 inquiry response', 'business messaging automation', 'local lead qualification'],
}

export default function WhatsAppAutomationPage() {
  return <WhatsAppAutomationContent />
}
