import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

const CATEGORIES = ['All', 'React JS', 'Web Design', 'Dashboards']

const PROJECTS = [
  {
    title: 'Admissions Overseas',
    category: 'Web Design',
    num: '01',
    description: 'Admissions and overseas education website for students exploring study opportunities.',
    tags: ['Admissions', 'Study Abroad'],
    url: 'https://www.admissionsoverseas.com/',
    gradient: 'from-blue-900 to-indigo-900',
    accent: '#6366f1',
  },
  {
    title: 'Omeshan',
    category: 'Web Design',
    num: '02',
    description: 'Website project delivered for Omeshan.',
    tags: ['Website'],
    url: 'https://www.omeshan.com',
    gradient: 'from-cyan-900 to-blue-900',
    accent: '#06b6d4',
  },
  {
    title: 'Zozocar',
    category: 'Web Design',
    num: '03',
    description: 'Website project published on GitHub Pages.',
    tags: ['Website'],
    url: 'https://lalitkumarbaghel.github.io/zozocar.github.io',
    gradient: 'from-purple-900 to-pink-900',
    accent: '#a855f7',
  },
  {
    title: 'Maiz Education',
    category: 'Web Design',
    num: '04',
    description: 'Education website project for Maiz Education.',
    tags: ['Education'],
    url: 'https://www.edumaiz.com/',
    gradient: 'from-orange-900 to-red-900',
    accent: '#f97316',
  },
  {
    title: 'CRM Software — Study Abroad & Immigration',
    category: 'Dashboards',
    num: '05',
    description: 'CRM software project for study-abroad and immigration workflows.',
    tags: ['CRM', 'Study Abroad'],
    gradient: 'from-indigo-900 to-purple-900',
    accent: '#8b5cf6',
  },
  {
    title: 'Study Abroad Website (Full Stack)',
    category: 'React JS',
    num: '06',
    description: 'Full-stack website project focused on study-abroad services.',
    tags: ['Full Stack', 'Study Abroad'],
    gradient: 'from-emerald-900 to-teal-900',
    accent: '#10b981',
  },
  {
    title: 'Blog Website',
    category: 'React JS',
    num: '07',
    description: 'Blog website project included in the CV portfolio.',
    tags: ['Blog'],
    gradient: 'from-sky-900 to-indigo-900',
    accent: '#38bdf8',
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredIdx, setHoveredIdx] = useState(null)

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory || p.tags.includes(activeCategory))

  return (
    <section id="projects" className="py-20 px-6 bg-[#050505] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header — split layout */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12" data-aos="fade-up">
          <div>
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Projects from my CV</p>
            <h2 className="text-3xl md:text-5xl font-black font-serif text-gradient">Selected Projects</h2>
            <div className="w-12 h-1 bg-primary mt-4" />
          </div>
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-[0_4px_15px_rgba(255,76,0,0.35)]'
                    : 'bg-white/5 text-white/50 border border-white/5 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects — Horizontal list layout */}
        <motion.div layout className="flex flex-col divide-y divide-white/5">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => (
              <motion.div
                layout
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group flex flex-col lg:flex-row items-start lg:items-center gap-6 py-7 px-4 rounded-xl cursor-default transition-all duration-300 ${
                  hoveredIdx === i ? 'bg-white/[0.025]' : ''
                }`}
              >
                {/* Number */}
                <span
                  className="text-4xl md:text-5xl font-black font-serif leading-none shrink-0 transition-all duration-300 select-none w-16 text-center lg:text-left"
                  style={{ color: hoveredIdx === i ? p.accent : 'rgba(255,255,255,0.06)' }}
                >
                  {p.num}
                </span>

                {/* Mini browser mockup */}
                <div className={`hidden lg:flex w-28 h-16 rounded-lg overflow-hidden shrink-0 bg-gradient-to-br ${p.gradient} relative items-center justify-center transition-transform duration-300 ${hoveredIdx === i ? 'scale-105' : ''}`}>
                  <div className="w-5/6 h-4/5 bg-black/40 rounded-t border-t border-x border-white/10 p-1">
                    <div className="flex items-center gap-0.5 mb-1">
                      <div className="w-1 h-1 rounded-full bg-red-400/70" />
                      <div className="w-1 h-1 rounded-full bg-yellow-400/70" />
                      <div className="w-1 h-1 rounded-full bg-green-400/70" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="h-0.5 bg-white/10 rounded w-full" />
                      <div className="h-0.5 bg-white/10 rounded w-3/4" />
                      <div className="h-0.5 bg-white/10 rounded w-1/2" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-lg md:text-xl font-bold font-serif mb-1.5 transition-colors duration-300"
                    style={{ color: hoveredIdx === i ? p.accent : '#ffffff' }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-white/45 text-xs leading-relaxed line-clamp-2 max-w-xl">{p.description}</p>
                </div>

                {/* Project tags */}
                <div className="hidden md:flex flex-wrap gap-1.5 shrink-0">
                  {p.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] px-2 py-0.5 border rounded font-mono transition-all duration-300"
                      style={{
                        borderColor: hoveredIdx === i ? `${p.accent}50` : 'rgba(255,255,255,0.08)',
                        color: hoveredIdx === i ? p.accent : 'rgba(255,255,255,0.35)',
                        background: hoveredIdx === i ? `${p.accent}10` : 'transparent',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white rounded-full transition-all duration-300 shrink-0"
                    style={{ background: hoveredIdx === i ? p.accent : 'rgba(255,255,255,0.08)' }}
                  >
                    Visit Website <FaExternalLinkAlt size={8} />
                  </a>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
