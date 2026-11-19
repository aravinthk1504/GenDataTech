import ContactForm from '../components/ContactForm.jsx'

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
            Contact
          </span>
          <h1 className="mt-2 font-display text-4xl font-bold">Let's talk</h1>
          <p className="mt-4 max-w-md text-brand-slate">
            Questions about a program, or want to discuss a project? Send a message and
            we'll get back to you within a couple of days.
          </p>

          <div className="mt-8 space-y-2 text-sm text-brand-slate">
            <p className="font-semibold text-brand-ink">GenDataTech</p>
            <p>Annai Abirami Nagar, Kovilpatti – 628502, Tamil Nadu</p>
            <p>+91 84286 83895 · +91 95664 63895</p>
            <p>gendatatechies@gmail.com</p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
