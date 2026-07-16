import { useEffect, useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FaAward, FaBriefcase, FaUsers, FaGraduationCap, FaCogs, FaSlidersH } from 'react-icons/fa'
import InteractiveTerminal from './InteractiveTerminal'

const STATS = [
  { value: 6, suffix: '+', label: 'Years Experience', icon: <FaAward className="text-primary" size={18} /> },
  { value: 50, suffix: '+', label: 'Projects Built', icon: <FaBriefcase className="text-primary" size={18} /> },
  { value: 40, suffix: '+', label: 'Happy Clients', icon: <FaUsers className="text-primary" size={18} /> },
]

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    let cur = 0
    const inc = Math.ceil(value / 60)
    const timer = setInterval(() => {
      cur += inc
      if (cur >= value) { setCount(value); clearInterval(timer) }
      else setCount(cur)
    }, 20)
    return () => clearInterval(timer)
  }, [inView, value])
  return <span ref={ref}>{count}{suffix}</span>
}

export default function About() {
  const [activeTab, setActiveTab] = useState('bio')

  const tabContent = {
    bio: (
      <div className="space-y-4">
        <h4 className="text-white font-bold font-serif text-base flex items-center gap-2">
          <FaGraduationCap className="text-primary" /> Designing & Coding Premium Web Experiences
        </h4>
        <p className="text-white/55 text-xs md:text-sm leading-relaxed">
          I am a passionate Senior Web Designer with 6+ years of experience designing responsive, user-friendly and visually attractive websites.
          Along with web designing, I have 1 year of experience in React JS building modern single-page applications.
        </p>
        <p className="text-white/55 text-xs md:text-sm leading-relaxed">
          My goal is to become a Full Stack Developer while creating premium-quality web applications.
        </p>
      </div>
    ),
    values: (
      <div className="space-y-3">
        <h4 className="text-white font-bold font-serif text-base flex items-center gap-2">
          <FaSlidersH className="text-primary" /> Core Development Philosophy
        </h4>
        <div className="grid grid-cols-1 gap-2.5 pt-1.5">
          <div className="border-l-2 border-primary/45 pl-3">
            <span className="text-white font-bold text-xs block">Design-First Approach</span>
            <span className="text-white/50 text-[11px]">Creating immersive visual architectures and perfect layouts.</span>
          </div>
          <div className="border-l-2 border-primary/45 pl-3">
            <span className="text-white font-bold text-xs block">Performance & SEO</span>
            <span className="text-white/50 text-[11px]">Optimized loading speed, semantic structures, and accessibility standards.</span>
          </div>
          <div className="border-l-2 border-primary/45 pl-3">
            <span className="text-white font-bold text-xs block">Clean React Code</span>
            <span className="text-white/50 text-[11px]">Reusable components, custom hooks, and standard clean architecture.</span>
          </div>
        </div>
      </div>
    ),
    setup: (
      <div className="space-y-3">
        <h4 className="text-white font-bold font-serif text-base flex items-center gap-2">
          <FaCogs className="text-primary" /> My Workspace & Tech Tools
        </h4>
        <p className="text-white/55 text-xs md:text-sm leading-relaxed">
          I love keeping my environment highly optimized for building clean layouts and debugging systems:
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {['Figma', 'VS Code', 'Git & GitHub', 'Chrome DevTools', 'Photoshop', 'npm / Vite'].map((tool) => (
            <span key={tool} className="text-[10px] px-2.5 py-1 bg-white/5 border border-white/10 rounded font-mono text-white/70 hover:border-primary/30 hover:text-primary transition-all">
              {tool}
            </span>
          ))}
        </div>
      </div>
    )
  }

  return (
    <section id="about" className="py-20 px-6 bg-[#030303] relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Know About</p>
          <h2 className="text-3xl md:text-5xl font-black font-serif text-gradient">About Me</h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4" />
        </div>

        {/* Symmetric 3-Column Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

          {/* Column 1: Profile & Stats Combined */}
          <div className="flex flex-col gap-6" data-aos="fade-right">
            {/* Quick Profile Card */}
            <div className="bg-[#080808]/90 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-primary/20 transition-all duration-300 shadow-xl flex-grow">
              <div className="relative mb-4 group">
                <div className="absolute inset-0 bg-primary/25 rounded-full blur-md opacity-50 group-hover:opacity-85 transition-opacity" />
                <div className="w-24 h-24 rounded-full border-[3px] border-primary overflow-hidden relative z-10 shadow-lg">
                  <img 
                    src="/profile.png" 
                    alt="Lalit Kumar Baghel" 
                    className="w-full h-full object-cover object-top scale-105"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80'
                    }}
                  />
                </div>
              </div>
              <h3 className="text-lg font-black text-white font-serif">Lalit Kumar Baghel</h3>
              <p className="text-primary text-[10px] font-bold uppercase tracking-widest mt-1">Senior Web Designer</p>
              <p className="text-white/40 text-[11px] font-mono mt-3">visitor@lalit-baghel:~$ status --active</p>
            </div>

            {/* Counter Stats Stack - Horizontal Row */}
            <div className="grid grid-cols-3 gap-3">
              {STATS.map((s, i) => (
                <div 
                  key={i} 
                  className="bg-[#080808]/90 border border-white/5 rounded-2xl p-3 flex flex-col xl:flex-row items-center justify-center xl:justify-start xl:px-4 gap-2 hover:border-primary/30 transition-all duration-300 shadow-xl cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    {s.icon}
                  </div>
                  <div className="text-center xl:text-left flex flex-col items-center xl:items-start leading-tight">
                    <span className="text-lg font-black text-white">
                      <Counter value={s.value} suffix={s.suffix} />
                    </span>
                    <span className="text-[8px] text-white/50 uppercase tracking-wider font-bold whitespace-nowrap">{s.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Terminal Console (Middle) */}
          <div 
            className="bg-[#080808]/90 border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-primary/20 transition-all duration-300 shadow-xl h-full" 
            data-aos="fade-up"
          >
            <div className="mb-4 text-left">
              <h3 className="text-lg font-bold text-white font-serif flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary/20 border border-primary/50 animate-pulse" />
                Developer Console
              </h3>
              <p className="text-white/40 text-xs mt-1">
                Try commands: <span className="text-primary cursor-pointer hover:underline">bio</span>, <span className="text-primary cursor-pointer hover:underline">skills</span>, <span className="text-primary cursor-pointer hover:underline">experience</span>, <span className="text-primary cursor-pointer hover:underline">contact</span>, <span className="text-primary cursor-pointer hover:underline">clear</span>
              </p>
            </div>
            <div className="flex-grow flex flex-col justify-center">
              <InteractiveTerminal />
            </div>
          </div>

          {/* Column 3: Interactive Tab Details (Right) */}
          <div 
            className="bg-[#080808]/90 border border-white/5 rounded-2xl p-6 flex flex-col justify-between min-h-[300px] text-left hover:border-primary/20 transition-all duration-300 shadow-xl h-full" 
            data-aos="fade-left"
          >
            <div>
              {/* Tab Header Buttons */}
              <div className="flex border-b border-white/5 pb-3 mb-5 gap-2">
                {[
                  { id: 'bio', label: 'Biography' },
                  { id: 'values', label: 'Philosophy' },
                  { id: 'setup', label: 'My Setup' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-primary/10 border border-primary/30 text-primary'
                        : 'text-white/40 hover:text-white/80'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content body */}
              <div className="flex-grow">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {tabContent[activeTab]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="border-t border-white/5 pt-4 mt-6">
              <p className="text-[10px] text-white/30 font-mono">System initialized: OK</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

