import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
// import type { Authors } from '../../.contentlayer/generated/types.d.ts'

export const revalidate = 3600

export const metadata = genPageMetadata({ title: 'About' })

export default async function Page() {
  // const { allAuthors } = await import('../../.contentlayer/generated/Authors/_index.json')
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_CONTENTLAYER_URL}/contentlayer/generated/Authors/_index.mjs`
  // )
  // const allAuthors = await res.json()
  const author: any = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent: any = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
    </>
  )
}
