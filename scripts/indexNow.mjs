// import tagData from '../app/tag-data.json' with { type: 'json' }
// import { allBlogs } from '../.contentlayer/generated/index.mjs'
// import siteMetadata from '../data/siteMetadata.js'
// import fs from 'fs'

// function writeFile() {
//   let urls = []
//   for (let index = 0; index < allBlogs.length; index++) {
//     const element = allBlogs[index]
//     urls.push(`${siteMetadata.siteUrl}/blog/${element.slug}`)
//   }

//   for (const tag of Object.keys(tagData)) {
//     urls.push(`${siteMetadata.siteUrl}/tags/${tag}`)
//   }

//   var newData = JSON.stringify(urls)

//   fs.writeFile('urls/data.txt', newData, (err) => {
//     if (err) throw err

//     console.log('URLS added')
//   })
// }

// writeFile()
