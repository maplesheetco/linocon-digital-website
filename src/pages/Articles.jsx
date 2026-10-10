import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { articles, formatDate } from '../lib/articles'
import usePageMeta from '../lib/usePageMeta'

export default function Articles() {
  usePageMeta(
    'Articles',
    'Plain-English guides on websites, SEO, and backlinks for small businesses. A new article every week.',
  )

  return (
    <section className="min-h-screen pt-40 pb-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal className="mb-14 max-w-2xl">
          <span className="text-xs font-bold tracking-widest uppercase text-text-tertiary">
            Articles
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight mt-4">
            Straight answers on websites, SEO &amp; growth.
          </h1>
          <p className="text-lg text-text-secondary mt-4">
            Practical guides for small business owners. A new article every week.
          </p>
        </Reveal>

        {articles.length === 0 ? (
          <p className="text-text-secondary">The first article is on its way.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((a, i) => (
              <Reveal key={a.slug} delay={Math.min(i, 3) * 0.05}>
                <Link
                  to={`/articles/${a.slug}`}
                  className="group flex flex-col h-full rounded-2xl bg-surface border border-border overflow-hidden hover:border-blue transition-colors"
                >
                  {a.image ? (
                    <img
                      src={`${a.image}-800.webp`}
                      width="800"
                      height="419"
                      alt=""
                      loading="lazy"
                      className="w-full h-auto border-b border-border"
                    />
                  ) : (
                    <div className="relative aspect-[1600/837] border-b border-border overflow-hidden flex items-end p-7 md:p-8">
                      <div className="absolute inset-0 bg-gradient-brand opacity-20" />
                      <span className="relative font-display font-bold text-3xl text-text/80">
                        {a.category}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col flex-1 p-7 md:p-8">
                    <span className="text-xs font-bold tracking-widest uppercase text-text-tertiary">
                      {a.category} &middot; {a.minutes} min read
                    </span>
                    <h2 className="font-display font-bold text-2xl leading-snug mt-4 group-hover:text-gradient">
                      {a.title}
                    </h2>
                    <p className="text-text-secondary mt-3 flex-1">{a.description}</p>
                    <span className="text-sm text-text-tertiary mt-6">{formatDate(a.date)}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
