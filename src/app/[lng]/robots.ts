import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseURL = 'https://koukiwebservice.com'
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: '/api, /dashboard',
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        disallow: ['/'],
      },
    ],
    sitemap: `${baseURL}/sitemap.xml`,
  }
}