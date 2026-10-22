import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaArrowUp, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const FOOTER_LINKS = {
  'Quick Links': ['Home', 'About Me', 'Services', 'Portfolio', 'Contact Us'],
  'Services': ['Web Design', 'React JS Development', 'Responsive Web Design', 'Dashboard & Web Projects', 'SEO & Content Optimization'],
}

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const ID_MAP = {
    'Home': 'home', 'About Me': 'about', 'Services': 'services',
    'Portfolio': 'projects', 'Contact Us': 'contact',
    'Web Design': 'services', 'React JS Development': 'services',
    'Responsive Web Design': 'services', 'Dashboard & Web Projects': 'services',
    'SEO & Content Optimization': 'services',
  }

  return (
    <footer className="bg-black border-t border-white/5">
      {/* Top footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10" data-aos="fade-up">

        {/* Brand col */}
        <div className="space-y-5">
          <div className="flex items-center space-x-1 cursor-pointer" onClick={() => scrollTo('home')}>
            {['border-orange-500','border-white','border-orange-500','border-white'].map((c,i)=>(
              <div key={i} className={`w-5 h-5 rounded-full border-2 ${c} -ml-1 first:ml-0`} />
            ))}
          </div>
          <p className="text-white/50 text-sm leading-relaxed">
            React JS / Frontend Developer with 6+ years of web design experience, based in Gurgaon, India.
          </p>
          <p className="text-white/30 text-xs">
            If you have any queries, please feel free to contact me.
          </p>
          <div className="flex space-x-2">
            {[
              { href: 'https://github.com/Lalitkumarbaghel', icon: <FaGithub size={14} />, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/lalit-kumar-399a61177/', icon: <FaLinkedin size={14} />, label: 'LinkedIn' },
              { href: 'mailto:lk03041997@gmail.com', icon: <FaEnvelope size={14} />, label: 'Email' },
              { href: 'https://wa.me/917838015881', icon: <FaWhatsapp size={14} />, label: 'WhatsApp' },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/5 bg-white/3 flex items-center justify-center text-white/50 hover:bg-primary hover:border-primary hover:text-white transition-all"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links columns */}
        {Object.entries(FOOTER_LINKS).map(([title, links]) => (
          <div key={title} className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">{title}</h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => ID_MAP[link] && scrollTo(ID_MAP[link])}
                    className="text-white/50 text-xs hover:text-primary transition-colors hover:translate-x-1 inline-block"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Info col */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm uppercase tracking-widest">Contact Info</h4>
          <div className="space-y-3">
            <a className="flex items-start gap-3 text-white/50 text-xs hover:text-primary transition-colors" href="mailto:lk03041997@gmail.com">
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <FaEnvelope className="text-primary" />
              </span>
              <span>lk03041997@gmail.com</span>
            </a>
            <a className="flex items-start gap-3 text-white/50 text-xs hover:text-primary transition-colors" href="tel:+917838015881">
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <FaPhoneAlt className="text-primary" />
              </span>
              <span>+91 7838015881</span>
            </a>
            <a className="flex items-start gap-3 text-white/50 text-xs hover:text-primary transition-colors" href="https://maps.google.com/?q=Gurgaon%2C+India" target="_blank" rel="noopener noreferrer">
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <FaMapMarkerAlt className="text-primary" />
              </span>
              <span>Gurgaon, India</span>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-[11px]">
            © {new Date().getFullYear()} Lalit Kumar. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/80 hover:-translate-y-1 transition-all cursor-pointer"
            aria-label="Scroll to top"
          >
            <FaArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  )
}
