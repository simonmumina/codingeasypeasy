import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'
import TagsLayout from '@/layouts/TagsLayout'

export const revalidate = 60

export const dynamicParams = true

const POSTS_PER_PAGE = 25

export const metadata = genPageMetadata({ title: 'Tags', description: 'CodingEasyPeasy Tags' })

export default async function Page(props: { searchParams: Promise<{ page: string }> }) {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  const pageNumber = 1
  const totalPages = Math.ceil(sortedTags.length / POSTS_PER_PAGE)
  const initialDisplayPosts = sortedTags.slice(0, POSTS_PER_PAGE * pageNumber)
  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  }

  return (
    <>
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0 dark:divide-gray-700">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14 dark:text-gray-100">
            Tags
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {tagKeys.length === 0 && 'No tags found.'}
          <TagsLayout
            tags={sortedTags}
            initialDisplayPosts={initialDisplayPosts}
            pagination={pagination}
            tagCounts={tagCounts}
          />
        </div>
      </div>
    </>
  )
}
