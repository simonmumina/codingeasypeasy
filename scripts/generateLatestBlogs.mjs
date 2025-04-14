import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer.js'
import { allBlogs } from '../.contentlayer/generated/index.mjs'
import { writeFileSync, mkdirSync } from 'fs'
import path from 'path'

async function createFolder() {
  const directoryPath = 'latestBlogs'
  const posts = allCoreContent(sortPosts(allBlogs))
    const slicedBlogPosts = posts?.slice(0, 6)
    
    // console.log(slicedBlogPosts)

  mkdirSync(directoryPath, { recursive: true })
  writeFileSync(path.join(directoryPath, 'index.json'), JSON.stringify(slicedBlogPosts))
}

createFolder()
