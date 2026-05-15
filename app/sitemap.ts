import { MetadataRoute } from 'next'
import { siteConfig, navLinks } from '@/components/site-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.domain

  // Static routes from navigation
  const routes = navLinks.map((link) => ({
    url: `${baseUrl}${link.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Add homepage
  const home = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1,
  }

  return [home, ...routes]
}