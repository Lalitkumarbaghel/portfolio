import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const NAV_ITEMS = [
  { name: 'Home', id: 'home' },
  { name: 'About Me', id: 'about' },
  { name: 'Services', id: 'services' },
  { name: 'Portfolio', id: 'projects' },
  { name: 'Contact Us', id: 'contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      const scrollPosition = window.scrollY + 200
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id)
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id) => {
    setIsOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <header className="fixed top-4 left-0 w-full z-40 px-6 flex justify-center">
        <div className={`w-full max-w-7xl mx-auto px-6 py-3.5 rounded-full border transition-all duration-300 flex justify-between items-center ${
          scrolled 
            ? 'bg-[#080808]/85 border-primary/20 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(0,0,0,0.9)]' 
            : 'bg-black/40 border-white/5 backdrop-blur-sm'
        }`}>
          {/* Logo */}
          <div onClick={() => handleNavClick('home')} className="cursor-pointer flex items-center space-x-1">
            <div className="flex items-center space-x-0.5">
              {['border-primary','border-white','border-primary','border-white'].map((c,i)=>(
                <div key={i} className={`w-4 h-4 rounded-full border-2 ${c} -ml-1 first:ml-0 shadow-sm`} />
              ))}
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-[10px] font-bold uppercase tracking-widest transition-colors cursor-pointer ${
                  activeSection === item.id ? 'text-primary' : 'text-white/70 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-5 py-2 rounded-full border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:border-primary transition-all cursor-pointer"
            >
              Hire Me
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-1 hover:text-primary transition-colors">
            {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[60px] z-30 bg-black/95 backdrop-blur-xl lg:hidden flex flex-col items-center justify-center space-y-8"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xl font-bold uppercase tracking-widest ${activeSection === item.id ? 'text-primary' : 'text-white/80'}`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="px-8 py-3 border border-white text-white text-sm font-bold uppercase tracking-wider hover:bg-primary hover:border-primary transition-all"
            >
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
