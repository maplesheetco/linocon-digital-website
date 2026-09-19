import Reveal from '../Reveal'

const STATS = [
  { value: 0, suffix: '%', label: 'Average lift in organic traffic within 6 months', placeholder: '[XX]%' },
  { value: 0, suffix: '', label: 'Keywords ranked on page 1 of Google', placeholder: '[XX]' },
  { value: 0, suffix: '', label: 'High-authority backlinks placed to date', placeholder: '[XXX]' },
]

export default function Stats() {
  return (
    <section id="results" className="py-28 md:py-32 bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-14">
            Built to be measured.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.1}
              className={`md:px-8 ${i > 0 ? 'md:border-l md:border-border' : ''}`}
            >
              <div className="font-display font-bold text-5xl md:text-6xl text-gradient">
                {s.placeholder}
              </div>
              <p className="text-text-secondary mt-3">{s.label}</p>
            </Reveal>
          ))}
        </div>
        <p className="text-xs text-text-tertiary mt-5">
          Numbers above are placeholders &mdash; swap in your real results once you have client
          history.
        </p>

        <Reveal delay={0.2} className="mt-16 md:mt-20">
          <div className="rounded-3xl bg-surface-2 border border-border p-8 md:p-11 grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <svg width="34" height="26" viewBox="0 0 34 26" fill="none" className="mb-4 opacity-50">
                <path
                  d="M0 26V15.6C0 6.9 5.4 1.2 13.4 0l1.4 4.4C9.3 5.7 6.6 9 6.6 13.4H14V26H0zm19.2 0V15.6c0-8.7 5.4-14.4 13.4-15.6l1.4 4.4c-5.5 1.3-8.2 4.6-8.2 9v.2h7.4V26H19.2z"
                  fill="#2E6BFF"
                />
              </svg>
              <p className="text-xl leading-relaxed">
                &#8220;[Client testimonial goes here &mdash; a specific line about the result
                LinoCon Digital delivered.]&#8221;
              </p>
              <p className="text-sm text-text-tertiary mt-4">[Name], [Title] &middot; [Company]</p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold tracking-widest uppercase text-text-tertiary">
                Trusted by
              </span>
              <div className="flex gap-3">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-20 h-10 rounded-lg bg-white/5 border border-dashed border-white/15 flex items-center justify-center text-[10px] text-text-tertiary"
                  >
                    Logo
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
