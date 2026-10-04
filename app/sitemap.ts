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

  // Pages that are not in the main navigation
  const extraRoutes = [
    { path: '/startups', priority: 0.7 },
    { path: '/privacy', priority: 0.3 },
    { path: '/terms', priority: 0.3 },
  ].map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority,
  }))

  return [home, ...routes, ...extraRoutes]
}