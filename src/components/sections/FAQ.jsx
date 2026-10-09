import Reveal from '../Reveal'

const FAQS = [
  {
    q: 'How much does a website cost?',
    a: "Every project is quoted after a free strategy call, based on the pages, features and SEO work you need. You'll get a clear quote before any work starts.",
  },
  {
    q: 'How long until my site is live?',
    a: 'It depends on the size of the site. We agree on a launch date as part of your plan, before work begins.',
  },
  {
    q: 'How soon will I see results on Google?',
    a: "SEO builds over months, not days. The technical foundation helps straight away, and backlinks compound over time. You'll get regular reports so you can see progress.",
  },
  {
    q: 'Do I need all three services?',
    a: 'No. You can start with a new website, an SEO setup for your current site, or backlinks on their own. They just work best together.',
  },
  {
    q: 'Are your backlinks safe?',
    a: 'Yes. We build links from relevant, high-authority sites only. No link farms or spam that could get your site penalized by Google.',
  },
  {
    q: 'What do you need from me?',
    a: 'A short call to understand your business, plus any logo, photos and content you already have. We handle the rest.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-28 md:py-36 border-t border-border">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <Reveal>
          <h2 className="font-display font-bold text-4xl md:text-6xl leading-tight mb-12">
            Questions, answered.
          </h2>
        </Reveal>
        <div className="flex flex-col">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04} y={16}>
              <details className="group border-b border-border py-6">
                <summary className="flex items-center justify-between gap-6 cursor-pointer list-none font-display font-semibold text-xl md:text-2xl [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="shrink-0 w-8 h-8 rounded-full border border-white/15 flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="text-text-secondary leading-relaxed mt-4 md:text-lg max-w-2xl">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
