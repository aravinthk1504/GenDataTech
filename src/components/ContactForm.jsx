import { useState } from 'react'

// Replace with your own Formspree endpoint (https://formspree.io/forms/<id>)
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

const initialState = { name: '', email: '', program: '', message: '' }

export default function ContactForm() {
  const [values, setValues] = useState(initialState)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function handleChange(e) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })

      if (res.ok) {
        setStatus('success')
        setValues(initialState)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-brand-teal/30 bg-brand-teal/5 p-8 text-center">
        <p className="font-display text-xl font-bold text-brand-ink">Message sent</p>
        <p className="mt-2 text-brand-slate">
          Thanks for reaching out — we'll get back to you within a couple of days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-brand-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={values.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-brand-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={values.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="program" className="mb-1 block text-sm font-medium text-brand-ink">
          Program you're interested in (optional)
        </label>
        <input
          id="program"
          name="program"
          type="text"
          value={values.program}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
          placeholder="e.g. AI & Machine Learning"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-brand-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
          placeholder="Tell us what you're looking for..."
        />
      </div>

      {status === 'error' && (
        <p className="text-sm font-medium text-red-600">
          Something went wrong sending your message. Please try again, or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.02] disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
