import { Authors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import { fetchContentlayerData } from '@/utils/helpers'

export const revalidate = 60

export const metadata = genPageMetadata({ title: 'About' })

export default async function Page() {
  const { allAuthors } = await fetchContentlayerData()
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author?.body?.code} />
      </AuthorLayout>
    </>
  )
}
