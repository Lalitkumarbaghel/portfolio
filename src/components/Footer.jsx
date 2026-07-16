import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaArrowUp, FaTwitter } from 'react-icons/fa'

const FOOTER_LINKS = {
  'Quick Links': ['Home', 'About Me', 'Services', 'Portfolio', 'Contact Us'],
  'Services': ['Web Design', 'React Development', 'Responsive Website', 'Landing Page', 'Dashboard Design'],
}

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const ID_MAP = {
    'Home': 'home', 'About Me': 'about', 'Services': 'services',
    'Portfolio': 'projects', 'Contact Us': 'contact',
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
            Senior Web Designer & React JS Developer based in India. Creating premium digital experiences since 2019.
          </p>
          <p className="text-white/30 text-xs">
            If you have any queries, please feel free to contact me.
          </p>
          <div className="flex space-x-2">
            {[
              { href: 'https://github.com', icon: <FaGithub size={14} />, label: 'GitHub' },
              { href: 'https://linkedin.com', icon: <FaLinkedin size={14} />, label: 'LinkedIn' },
              { href: 'mailto:lalit@example.com', icon: <FaEnvelope size={14} />, label: 'Email' },
              { href: 'https://wa.me/910000000000', icon: <FaWhatsapp size={14} />, label: 'WhatsApp' },
              { href: '#', icon: <FaTwitter size={14} />, label: 'Twitter' },
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
            <p className="text-white/50 text-xs">lalit@example.com</p>
            <p className="text-white/50 text-xs">+91 00000 00000</p>
            <p className="text-white/50 text-xs">India</p>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-[11px]">
            © {new Date().getFullYear()} Lalit Kumar Baghel. All Rights Reserved.
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
