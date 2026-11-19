import { NavLink } from 'react-router-dom'
import useReveal from '../utils/useReveal.js'

export default function ProgramCard({ program }) {
  const ref = useReveal()

  return (
    <div
      ref={ref}
      className="reveal flex flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">{program.title}</h3>
        <span className="rounded-full bg-brand-mist px-3 py-1 text-xs font-semibold text-brand-blue">
          {program.duration}
        </span>
      </div>

      <p className="mt-3 text-sm font-medium text-brand-slate">{program.mode}</p>
      <p className="mt-4 text-brand-slate">{program.description}</p>

      <ul className="mt-6 flex-1 space-y-2">
        {program.outcomes.map((outcome) => (
          <li key={outcome} className="flex items-start gap-2 text-sm text-brand-ink">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-gradient" />
            {outcome}
          </li>
        ))}
      </ul>

      <NavLink
        to="/contact"
        className="mt-6 inline-block text-sm font-semibold text-brand-blue hover:underline"
      >
        Ask about this program →
      </NavLink>
    </div>
  )
}
