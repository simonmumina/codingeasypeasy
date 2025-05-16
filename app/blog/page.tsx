import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
// import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import ListLayout from '@/layouts/ListLayoutWithTags'

export const revalidate = 3600

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({ title: 'Blog' })

export default async function BlogPage(props: { searchParams: Promise<{ page: string }> }) {
  const { allBlogs } = await import('../../.contentlayer/generated/Blog/_index.mjs')
  // console.log(`${process.env.NEXT_PUBLIC_CONTENTLAYER_URL}/contentlayer/generated/Blog/_index.mjs`)
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_CONTENTLAYER_URL}/contentlayer/generated/Blog/_index.mjs`,
  //   {
  //     headers: {
  //       Accept: 'text/javascript',
  //     },
  //   }
  // )
  // const allBlogs: any = await response.json()

  const posts: any = allCoreContent(sortPosts(allBlogs))
  const pageNumber = 1
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE * pageNumber)
  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  }

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
    />
  )
}
