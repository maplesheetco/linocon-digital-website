// The three services. The homepage section, the Services menu, the footer and
// each service's own page (/services/<slug>) all read from this list.
export const SERVICES = [
  {
    slug: 'website-creation',
    name: 'Website Creation',
    menu: 'Fast, custom sites that turn visitors into enquiries.',
    kicker: '01 — Website Creation',
    title: 'Sites built to convert, not just exist.',
    body: 'Custom-built websites that load fast and turn visitors into leads. Not another templated theme.',
    points: ['Custom design for your brand', 'Built mobile-first', 'Enquiry forms and call booking built in'],
    image: 'web',
    alt: 'A fast, mobile-friendly business website receiving a new enquiry',
    metaTitle: 'Website Creation for Small Businesses',
    metaDescription:
      'Custom, fast, mobile-first websites for small businesses, built to turn visitors into enquiries, with SEO built in from day one. LinoCon Digital, Vancouver, BC.',
    intro:
      'Your website is often the first impression a customer gets. We design and build it around your business and your customers, so it looks the part, loads quickly on any phone, and makes it easy for visitors to get in touch.',
    included: [
      {
        title: 'Custom design, zero templates',
        body: 'Every site is designed around your business and your customers, so you stand out instead of blending in.',
      },
      {
        title: 'Mobile-first',
        body: 'Most of your visitors are on a phone. Your site is built for them first, then scaled up for desktop.',
      },
      {
        title: 'Fast by default',
        body: 'Lean code and optimized images, so pages load quickly on any connection.',
      },
      {
        title: 'Leads, not just visits',
        body: 'Clear calls to action, enquiry forms and call booking that land in your inbox and calendar.',
      },
      {
        title: 'SEO built in',
        body: 'Keyword mapping, site structure and metadata from day one, not bolted on later.',
      },
      {
        title: 'A clear quote up front',
        body: 'Your project is quoted on the pages, features and content you need, and agreed before any work begins.',
      },
    ],
    fit: [
      "You don't have a website yet, or you've outgrown a DIY one.",
      'Your current site is slow, outdated or hard to use on a phone.',
      "Visitors land on your site but don't call or enquire.",
    ],
    article: 'small-business-website-cost-canada',
  },
  {
    slug: 'seo-setup',
    name: 'SEO Setup',
    menu: 'The technical foundation Google needs to rank you.',
    kicker: '02 — SEO Setup',
    title: 'A technical foundation Google can actually rank.',
    body: 'Complete on-page and technical SEO, so Google understands what you do and who you serve.',
    points: ['Keyword mapping', 'Site structure and metadata', 'Speed fixes'],
    image: 'seo',
    alt: 'A business ranking first on Google with organic traffic trending up',
    metaTitle: 'SEO Setup for Small Businesses',
    metaDescription:
      'On-page and technical SEO setup for small business websites: keyword mapping, site structure, metadata and speed fixes, so Google understands what you do and who you serve.',
    intro:
      "A good-looking website doesn't help if nobody can find it. SEO setup gives Google a clear picture of what you do, where you work and who you serve, so your site has a real chance to show up when customers search.",
    included: [
      {
        title: 'Keyword mapping',
        body: 'We find the searches your customers actually type and match each one to the right page on your site.',
      },
      {
        title: 'Site structure',
        body: 'Pages, headings and internal links organized so Google and visitors can find their way around easily.',
      },
      {
        title: 'Titles and metadata',
        body: 'Page titles, descriptions and structured data written so your listing in Google is clear and worth clicking.',
      },
      {
        title: 'Speed fixes',
        body: 'Slow pages lose visitors and rankings. We find what is slowing your site down and fix it.',
      },
      {
        title: 'Technical health',
        body: 'Indexing, sitemaps, mobile usability and broken links checked and sorted, so nothing holds your pages back.',
      },
      {
        title: 'Ongoing support if you want it',
        body: 'Content strategy, on-page improvements and performance monitoring after launch, at the level that suits you.',
      },
    ],
    fit: [
      "Your website doesn't show up on Google for what you do.",
      'You have a site, but nobody ever set up its SEO properly.',
      "You're launching a new site and want it built to rank from day one.",
    ],
    article: 'small-business-seo-first-90-days',
  },
  {
    slug: 'backlink-building',
    name: 'Backlink Building',
    menu: 'Quality links that build trust and rankings.',
    kicker: '03 — Backlink Building',
    title: 'Authority that compounds, not spam that gets penalized.',
    body: 'High-authority backlinks that move your rankings, without the spammy links that get sites penalized.',
    points: ['High-authority placements', 'Relevant to your industry', 'No link farms, ever'],
    image: 'links',
    alt: 'High-authority websites linking to your site to build its authority',
    metaTitle: 'Backlink Building for Small Businesses',
    metaDescription:
      'Safe, relevant backlink building for small businesses: quality placements in your industry that build authority and support your Google rankings. No link farms, ever.',
    intro:
      "Google treats links from other trusted websites as votes of confidence. We earn your site relevant, quality links that build its authority over time, without the shortcuts that get sites penalized.",
    included: [
      {
        title: 'High-authority placements',
        body: 'Links from established, trusted websites, not throwaway blogs built to sell links.',
      },
      {
        title: 'Relevant to your industry',
        body: 'Placements that make sense for your business and your customers, so every link looks natural.',
      },
      {
        title: 'No link farms, ever',
        body: 'We avoid link farms, automated link schemes and irrelevant placements that can do more harm than good.',
      },
      {
        title: 'Part of your SEO plan',
        body: 'Links are aimed at the pages and searches that matter most to your business, alongside your wider SEO.',
      },
    ],
    fit: [
      'Competitors outrank you even though your website is solid.',
      'Your SEO foundation is in place and you want to build authority.',
      "You've been offered cheap links and want a safer approach.",
    ],
    article: 'what-are-backlinks',
  },
]

export function getService(slug) {
  return SERVICES.find((s) => s.slug === slug)
}

export const servicePath = (s) => `/services/${s.slug}`
