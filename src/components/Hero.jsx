import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

const TYPING_ROLES = [
  'Senior Web Designer',
  'React JS Frontend Developer',
  'UI/UX Expert',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer
    const currentFullText = TYPING_ROLES[roleIndex]
    if (isDeleting) {
      timer = setTimeout(() => setDisplayedText(currentFullText.substring(0, displayedText.length - 1)), 50)
    } else {
      timer = setTimeout(() => setDisplayedText(currentFullText.substring(0, displayedText.length + 1)), 100)
    }
    if (!isDeleting && displayedText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), 1800)
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % TYPING_ROLES.length)
    }
    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, roleIndex])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="min-h-screen bg-black flex items-center relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-0 items-center pt-24 pb-12 relative z-10">

        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-left"
        >
          {/* Badge */}
          <div className="inline-block bg-primary px-4 py-1.5 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">
            Welcome! I'M
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gradient leading-[1.05] tracking-tight font-serif pb-1">
            Lalit Kumar Baghel
          </h1>

          {/* Typing role */}
          <p className="text-sm md:text-base font-medium text-white/60 font-sans">
            <span className="typing-caret pr-1 text-primary font-semibold">{displayedText}</span>
          </p>

          {/* Bio */}
          <p className="text-white/55 text-sm leading-relaxed max-w-lg">
            I am a passionate Senior Web Designer with 6+ years of experience designing responsive,
            user-friendly and visually attractive websites. Along with web designing, I have 1 year of
            experience in React JS building modern single-page applications.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => scrollTo('contact')}
              className="px-8 py-3 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(255,76,0,0.4)] hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              Hire Me
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className="px-8 py-3 bg-transparent border border-white/30 text-white text-xs font-bold uppercase tracking-widest rounded hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              Explore
            </button>
          </div>

          {/* Social icons */}
          <div className="flex items-center space-x-3 pt-4">
            {[
              { href: 'https://github.com', icon: <FaGithub size={16} />, label: 'GitHub' },
              { href: 'https://linkedin.com', icon: <FaLinkedin size={16} />, label: 'LinkedIn' },
              { href: 'mailto:lalit@example.com', icon: <FaEnvelope size={16} />, label: 'Email' },
              { href: 'https://wa.me/910000000000', icon: <FaWhatsapp size={16} />, label: 'WhatsApp' },
            ].map((soc, idx) => (
              <a
                key={idx}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:border-primary hover:text-white transition-all"
                aria-label={soc.label}
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right — Interactive Premium Banner with Rotating Rings & Floating Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center items-center h-[380px] md:h-[520px] select-none"
        >
          {/* Outer rotating decorative dashes ring */}
          <div className="absolute w-[340px] h-[340px] md:w-[500px] md:h-[500px] rounded-full border border-dashed border-white/20 animate-[spin_60s_linear_infinite]" />
          
          {/* Inner counter-rotating solid neon ring */}
          <div className="absolute w-[310px] h-[310px] md:w-[460px] md:h-[460px] rounded-full border border-primary/40 animate-[spin_25s_linear_infinite_reverse] opacity-75" />

          {/* Big orange circle background */}
          <div className="absolute w-[280px] h-[280px] md:w-[410px] md:h-[410px] rounded-full bg-primary flex items-center justify-center shadow-[0_0_90px_rgba(255,76,0,0.35)] transition-transform duration-500 hover:scale-105">
            {/* White/Silver bordered inner photo container */}
            <div className="w-[250px] h-[250px] md:w-[370px] md:h-[370px] rounded-full border-[8px] md:border-[12px] border-white overflow-hidden bg-[#151515] shadow-2xl relative">
              <img
                src="/profile.png"
                alt="Lalit Kumar Baghel"
                className="w-full h-full object-cover object-top scale-105 hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80'
                }}
              />
            </div>
          </div>

          {/* Floating Badge 1 - Experience */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute left-4 top-16 md:left-8 md:top-24 bg-black/85 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2 shadow-2xl"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-white font-bold text-xs font-mono">6+ Years Exp</span>
          </motion.div>

          {/* Floating Badge 2 - Location */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            className="absolute right-4 bottom-16 md:right-8 md:bottom-24 bg-black/85 backdrop-blur-md border border-primary/20 px-4 py-2 rounded-xl flex items-center gap-2 shadow-2xl"
          >
            <span className="text-primary text-[10px] font-bold">📍 India</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
