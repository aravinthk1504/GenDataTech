import { NavLink } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import useReveal from '../utils/useReveal.js'

const services = [
  {
    title: 'AI & ML Engineering',
    text: 'Custom models, from classification to production-ready pipelines.',
  },
  {
    title: 'Full-Stack Development',
    text: 'React and Node.js applications built for real users, not demos.',
  },
  {
    title: 'Training & Internships',
    text: 'Structured, project-based programs that build a real portfolio.',
  },
]

export default function Home() {
  const ref = useReveal()

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div ref={ref} className="reveal grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-2xl border border-slate-100 p-8">
              <h3 className="font-display text-lg font-bold">{service.title}</h3>
              <p className="mt-3 text-brand-slate">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-ink py-20 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold">Ready to build something?</h2>
            <p className="mt-2 max-w-md text-slate-300">
              Whether it's a client project or your next step in AI, let's talk.
            </p>
          </div>
          <NavLink
            to="/contact"
            className="rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105"
          >
            Get in touch
          </NavLink>
        </div>
      </section>
    </>
  )
}
