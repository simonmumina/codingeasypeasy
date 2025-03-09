import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'

export const revalidate = 60

const MAX_DISPLAY = 5

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs.slice(0, MAX_DISPLAY))
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} />
}
