'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import Link from '@/components/Link'
import Tag from '@/components/Tag'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface TagsLayoutProps {
  tags: any
  initialDisplayPosts?: any
  pagination?: PaginationProps
  tagCounts: any
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const segments = pathname.split('/')
  const lastSegment = segments[segments.length - 1]
  const basePath = pathname
    .replace(/^\//, '') // Remove leading slash
    .replace(/\/page\/\d+$/, '') // Remove any trailing /page
  console.log(pathname)
  console.log(basePath)
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5 mt-4 w-full">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function TagsLayout({ tags, initialDisplayPosts = [], pagination, tagCounts }: TagsLayoutProps) {
  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : tags

  return (
    <>
      {displayPosts.map((t) => {
        return (
          <div key={t} className="mt-2 mr-5 mb-2">
            <Tag text={t} />
            <Link
              href={`/tags/${slug(t)}`}
              className="-ml-2 text-sm font-semibold text-gray-600 uppercase dark:text-gray-300"
              aria-label={`View posts tagged ${t}`}
            >
              {` (${tagCounts[t]})`}
            </Link>
          </div>
        )
      })}

      {pagination && pagination.totalPages > 1 && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}