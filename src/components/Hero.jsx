import { NavLink } from 'react-router-dom'
import useReveal from '../utils/useReveal.js'

export default function Hero() {
  const ref = useReveal()

  return (
    <section className="relative overflow-hidden bg-brand-mist">
      <div
        ref={ref}
        className="reveal mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-24 md:py-32"
      >
        <span className="rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-brand-blue shadow-sm">
          Kovilpatti, Tamil Nadu
        </span>
        <h1 className="max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
          We build AI systems.
          <br />
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            We train the people
          </span>{' '}
          who'll build the next ones.
        </h1>
        <p className="max-w-xl text-lg text-brand-slate">
          GenDataTech delivers AI/ML and full-stack engineering for clients, and runs
          project-based training and internship programs for the next generation of engineers.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <NavLink
            to="/training"
            className="rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105"
          >
            Explore programs
          </NavLink>
          <NavLink
            to="/contact"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-brand-ink transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            Talk to us
          </NavLink>
        </div>
      </div>

      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-gradient opacity-20 blur-3xl"
        aria-hidden="true"
      />
    </section>
  )
}
