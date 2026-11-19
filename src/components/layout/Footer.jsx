import { FaInstagram, FaYoutube, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-100 bg-brand-mist">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold">
            Gen<span className="bg-brand-gradient bg-clip-text text-transparent">DataTech</span>
          </p>
          <p className="mt-3 text-sm text-brand-slate">
            AI/ML, full-stack development, and hands-on IT training, based in Kovilpatti,
            Tamil Nadu.
          </p>
        </div>

        <div className="text-sm text-brand-slate">
          <p className="font-semibold text-brand-ink">Contact</p>
          <p className="mt-3">Annai Abirami Nagar, Kovilpatti – 628502, Tamil Nadu</p>
          <p className="mt-1">+91 84286 83895 · +91 95664 63895</p>
          <p className="mt-1">gendatatechies@gmail.com</p>
        </div>

        <div className="text-sm text-brand-slate">
          <p className="font-semibold text-brand-ink">Follow along</p>
          <div className="mt-3 flex gap-4">
            <a
              href="https://instagram.com/gendata_tech"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-brand-blue"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://youtube.com/@GenDataTech"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="hover:text-brand-blue"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://linkedin.com/company/105936374"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-brand-blue"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://wa.me/918428683895"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="hover:text-brand-blue"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 py-4 text-center text-xs text-brand-slate">
        © {year} GenDataTech. All rights reserved.
      </div>
    </footer>
  )
}
