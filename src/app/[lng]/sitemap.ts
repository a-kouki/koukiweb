import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
<<<<<<< HEAD
  const baseURL = 'http://koukiwebservice.com/'
=======
  const baseURL = 'https://koukiwebservice.com'
>>>>>>> 96d2e449326dc3e9687a7f8a115c769ff22c3c0d
  
  return [
    {
      url: `${baseURL}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseURL}/template-models`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseURL}/products`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseURL}/contacts`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
