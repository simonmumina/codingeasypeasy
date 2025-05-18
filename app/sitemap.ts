import { MetadataRoute } from 'next'
// import { allBlogs } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { allBlogs } = await import('../.contentlayer/generated/Blog/_index.mjs')
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_CONTENTLAYER_URL}/contentlayer/generated/Blog/_index.json`
  // )
  // const allBlogs = await response.json()
  
  const siteUrl = siteMetadata.siteUrl

  const blogRoutes = allBlogs
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteUrl}/${post.path}`,
      lastModified: post.lastmod || post.date,
    }))

  const routes = ['', 'about'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogRoutes]
}
