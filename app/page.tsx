import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
// import { allBlogs } from 'contentlayer/generated'
import allBlogs from '../latestBlogs/index'
import Main from './Main'

export default async function Page() {
  const blogs: any = allBlogs
  const sortedPosts = sortPosts(blogs)
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} />
}
