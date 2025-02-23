import { writeFileSync, mkdirSync } from 'fs'
import path from 'path'
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai'
import slugify from 'slugify'

const apiKey = 'AIzaSyDmJyodUSWaU1Ei-ta66FAGZQ14om3Lb8A'

const genAI = new GoogleGenerativeAI(apiKey)

const model = genAI.getGenerativeModel({
  model: 'gemini-2.0-flash-exp',
})

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
}

const topics = [
  'Wordpress',
  'Data Structures',
  'Algorithms',
  'Python',
  'R',
  'Amazon Web Services (AWS)',
  'Google Cloud Platform (GCP)',
  'Microsoft Azure',
  'Flask',
  'Django',
  'Java',
  'C',
  'C++',
  'JavaScript',
  'AJAX programming language',
  'Android Development',
  'SQL',
  'Data Science',
  'Machine Learning',
  'PHP',
  'Web Development',
  'IT System Design',
  'Programming',
  'HTML',
  'CSS',
  'Bootstrap',
  'Tailwind Css',
  'React',
  'React Native',
  'NextJs',
  'VueJs',
  'NuxtJs',
  'NodeJS',
  'Express',
  'IT Q&A',
  'Computer Science',
  'IT Puzzle and answer',
  'Mathematics',
  'Git',
  'Github',
  'Object oriented programming',
  'Functional programming',
  'SEO',
  'any NPM package',
]

const prompt = `
generate a long, detailed and seo friendly MDX blog post on How to Revert to Last Commit Git. Include code examples where appropriate. The MDX should be ready to be saved to a file and should include title which is optimised for search engines, date, lastmod, tags which are optimised for search engines, draft with default as false, summary which is optimised for search engines, and author as default for example:
---
title: 'Title of blog'
date: '2024-10-12'
lastmod: '2025-01-16'
tags: ['next-js', 'tailwind', 'guide']
draft: false
summary: 'summary of blog.'
authors: ['default']
---
`
async function run() {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  })

  const result = await chatSession.sendMessage(prompt)

  const obj = result?.response?.text()

  if (obj) {
    const titleMatch = obj.match(/title: (.+)/)
    if (!titleMatch) {
      console.log('Could not extract title from generated content.')
      return
    }

    const title = titleMatch[1]

    const slug = slugify(title, { lower: true, strict: true }) + '.mdx'

    const directoryPath = 'data/blog'

    const lines = obj.split('\n')
    const newContent = lines.slice(1, lines.length - 1).join('\n')

    async function buildBlog() {
      mkdirSync(directoryPath, { recursive: true })
      writeFileSync(path.join(directoryPath, slug), newContent)
    }

    buildBlog()
    console.log(slug)
    console.log('Blog generated...')
  }

  return
}

run();
