export async function fetchContentlayerData() {
  const { allBlogs, allAuthors } = await import('contentlayer/generated')
  return { allBlogs, allAuthors }
}
