import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import allBlogs from '@/latestBlogs/index'
import Main from '@/components/Main'

export default async function Page() {
  const blogs: any = allBlogs;
  const sortedPosts = sortPosts(blogs);
  const posts = allCoreContent(sortedPosts);
  return <Main posts={posts} />
}
