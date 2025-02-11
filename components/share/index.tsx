'use client'

import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { useState } from 'react'
import { useParams, usePathname } from 'next/navigation'

type ShareProps = { title: string; description?: string; slug: string; className?: string }

const Share = ({ title, description, slug, className }: ShareProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [copied, setCopied] = useState<boolean>(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 10 * 60 * 1000) // Reset copied state after 10 minutes
  }

  const pathname = usePathname()

  return (
    <div className="m-4 mt-8 flex flex-col items-center justify-center pt-4 sm:flex-row">
      <div className="mb-4 sm:mb-0">
        <p className="text-highlighted dark:text-darkmode-highlighted text-primary-500 mr-3 px-4 font-bold sm:border-r-2">
          Share
        </p>
      </div>
      <div>
        <ul className={`grid grid-cols-4 gap-4 ${className}`}>
          <li className="ml-4 inline-block">
            <SocialIcon
              kind="facebook"
              size={5}
              aria-label="facebook share"
              href={`https://facebook.com/sharer/sharer.php?u=${siteMetadata.siteUrl}/${slug}`}
            />
          </li>
          <li className="ml-4 inline-block">
            <SocialIcon
              kind="twitter"
              size={5}
              aria-label="twitter share"
              href={`https://twitter.com/intent/tweet/?url=${siteMetadata.siteUrl}/${slug}&text=${title}`}
            />
          </li>
          <li className="ml-4 inline-block">
            <SocialIcon
              kind="linkedin"
              size={5}
              aria-label="LinkedIn share"
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${siteMetadata.siteUrl}/${slug}&title=${title}&summary=${description}&source=${siteMetadata.siteUrl}`}
            />
          </li>
          <li className="relative ml-4 inline-block">
            <button
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
              onClick={handleCopy}
              className="hover:text-primary-500 dark:hover:text-primary-400 fill-current text-gray-700 outline-none focus:outline-none dark:text-gray-200"
            >
              <svg height="24" viewBox="0 0 24 24" width="24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
              </svg>
            </button>
            {showMenu && (
              <div className="ring-opacity-5 absolute top-8 right-0 w-32 rounded-md bg-white p-2 text-center ring-1 shadow-lg ring-black focus:outline-none dark:bg-gray-800">
                <p className={`${copied ? 'text-primary-500 dark:text-primary-400' : ''}`}>
                  {copied ? 'Url Copied' : 'Copy Url'}
                </p>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Share
