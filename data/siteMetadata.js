/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'CodingEasyPeasy',
  author: 'CodingEasyPeasy',
  headerTitle: 'CodingEasyPeasy',
  description:
    'Master programming and mathematics with CodingEasyPeasy. Our blog features well-written articles and tutorials on programming languages, e.g., Python, Java, C++, Javascript, PHP e.t.c and mathematical areas e.g., calculus, linear algebra, discrete math e.t.c.  Perfect for programmers, mathematicians, students, and anyone looking to deepen their understanding. Learn through clear explanations and practical examples.',
  language: 'en',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.codingeasypeasy.com',
  siteRepo: 'https://github.com/CodingEasyPeasy',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  mastodon: 'https://mastodon.social/',
  email: 'simonmumina2000@gmail.com',
  github: 'https://github.com/CodingEasyPeasy',
  x: 'https://x.com/codingeasypeasy',
  facebook: 'https://www.facebook.com/profile.php?id=61573393855943',
  youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/groups/10062332/',
  threads: 'https://www.threads.net',
  instagram: 'https://www.instagram.com',
  locale: 'en',
  multiauthors: false,
  analytics: {
    googleAnalytics: {
      googleAnalyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, // e.g. G-XXXXXXX
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
  },
  formspree: false,
  // waline support
  iswaline: false,
  walineServer: '',
}

module.exports = siteMetadata