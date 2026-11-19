import ProgramCard from '../components/ProgramCard.jsx'
import programs from '../data/programs.js'

export default function Training() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
          Training programs
        </span>
        <h1 className="mt-2 font-display text-4xl font-bold">Learn by building</h1>
        <p className="mt-4 text-brand-slate">
          Every program is project-based: you leave with something real in your portfolio,
          not just a certificate.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {programs.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </section>
  )
}
