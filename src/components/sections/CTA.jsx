import { Link } from 'react-router-dom'
import Reveal from '../Reveal'

export default function CTA() {
  return (
    <section id="contact" className="relative py-28 md:py-36 border-t border-border overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full bg-gradient-brand opacity-15 blur-[140px]" />
      <Reveal className="relative max-w-6xl mx-auto px-6 md:px-10 flex flex-col items-center text-center gap-7">
        <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.05] max-w-2xl">
          Let&#39;s build your growth system.
        </h2>
        <p className="text-lg md:text-xl text-text-secondary max-w-lg">
          Book a free strategy call &mdash; we&#39;ll show you exactly where the leverage is.
        </p>
        <Link
          to="/book"
          className="flex items-center h-14 px-8 rounded-full bg-gradient-brand text-ink text-base font-bold"
        >
          Book a Strategy Call
        </Link>
      </Reveal>
    </section>
  )
}
