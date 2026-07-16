import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBriefcase, FaLaptopCode, FaMapMarkerAlt, FaCalendarAlt, FaChevronDown } from 'react-icons/fa'

const TIMELINE = [
  {
    id: '01',
    role: 'React JS Developer',
    company: 'Freelance / Projects',
    location: 'Remote, India',
    duration: '2025 – Present',
    period: '1 Year',
    icon: <FaLaptopCode size={16} />,
    description: 'Building high-performance React web applications, interactive dashboards, and SPA websites. Integrated REST APIs, Redux, React Router, and Tailwind CSS.',
    skills: ['React JS', 'Redux', 'Tailwind CSS', 'REST APIs', 'Vite', 'Framer Motion'],
    type: 'Current',
  },
  {
    id: '02',
    role: 'Senior Web Designer',
    company: 'Design Studio & Client Services',
    location: 'India',
    duration: '2019 – 2025',
    period: '6+ Years',
    icon: <FaBriefcase size={16} />,
    description: 'Designed 100+ visually stunning, responsive websites using HTML5, CSS3, JavaScript, Bootstrap, Figma. Led UI/UX decisions and collaborated with cross-functional teams.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Figma', 'Bootstrap', 'UI/UX'],
    type: 'Full-time',
  },
]

export default function Experience() {
  const [expandedIdx, setExpandedIdx] = useState(0)

  return (
    <section id="experience" className="py-20 px-6 bg-[#030303] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header — split */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14" data-aos="fade-up">
          <div>
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Career Journey</p>
            <h2 className="text-3xl md:text-5xl font-black font-serif text-gradient">My Experience</h2>
            <div className="w-12 h-1 bg-primary mt-4" />
          </div>
          <p className="text-white/35 text-xs md:text-sm leading-relaxed max-w-sm lg:text-right">
            7+ years of combined experience across design and frontend development.
          </p>
        </div>

        {/* Main Layout: Left sidebar totals + Right cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Left — summary sidebar */}
          <div className="flex flex-col gap-5" data-aos="fade-right">
            {/* Total XP card */}
            <div className="bg-[#080808]/90 border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-all duration-300">
              <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-3">Total Experience</p>
              <div className="text-5xl font-black text-gradient font-serif leading-none">7+</div>
              <p className="text-white/40 text-xs mt-1 font-mono">Years in Industry</p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#080808]/90 border border-white/5 rounded-2xl p-4 hover:border-primary/20 transition-all duration-300 text-center">
                <div className="text-2xl font-black text-white font-serif">100+</div>
                <p className="text-[9px] text-white/40 uppercase tracking-wider mt-1">Projects</p>
              </div>
              <div className="bg-[#080808]/90 border border-white/5 rounded-2xl p-4 hover:border-primary/20 transition-all duration-300 text-center">
                <div className="text-2xl font-black text-white font-serif">40+</div>
                <p className="text-[9px] text-white/40 uppercase tracking-wider mt-1">Clients</p>
              </div>
            </div>

            {/* Skills summary */}
            <div className="bg-[#080808]/90 border border-white/5 rounded-2xl p-5 hover:border-primary/20 transition-all duration-300">
              <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-3">Core Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {['React JS', 'Figma', 'Tailwind', 'JavaScript', 'Bootstrap', 'Node.js'].map((s) => (
                  <span key={s} className="text-[9px] px-2 py-0.5 bg-primary/8 border border-primary/15 text-primary/80 rounded font-mono">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Experience cards */}
          <div className="lg:col-span-2 flex flex-col gap-4" data-aos="fade-left">
            {TIMELINE.map((item, i) => (
              <div
                key={i}
                onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
                className={`group bg-[#080808]/90 border rounded-2xl overflow-hidden cursor-pointer transition-all duration-400 ${
                  expandedIdx === i
                    ? 'border-primary/35 shadow-[0_5px_30px_rgba(255,76,0,0.1)]'
                    : 'border-white/5 hover:border-primary/20'
                }`}
              >
                {/* Card Header — always visible */}
                <div className="flex items-center gap-5 p-6">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                    expandedIdx === i
                      ? 'bg-primary border-primary text-white shadow-[0_0_20px_rgba(255,76,0,0.4)]'
                      : 'bg-primary/10 border-primary/20 text-primary group-hover:bg-primary/15'
                  }`}>
                    {item.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Role + type badge */}
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className={`text-base md:text-lg font-bold font-serif transition-colors duration-300 ${
                        expandedIdx === i ? 'text-primary' : 'text-white group-hover:text-white/90'
                      }`}>
                        {item.role}
                      </h3>
                      <span className="text-[8px] px-2 py-0.5 bg-primary/10 border border-primary/20 text-primary rounded-full font-bold uppercase tracking-wider">
                        {item.type}
                      </span>
                    </div>
                    <p className="text-white/45 text-xs">{item.company}</p>
                  </div>

                  {/* Duration badge */}
                  <div className="hidden sm:flex flex-col items-end gap-1 shrink-0">
                    <span className="text-primary text-[10px] font-bold font-mono bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                      {item.duration}
                    </span>
                    <span className="text-white/30 text-[9px] font-mono">{item.period}</span>
                  </div>

                  {/* Toggle chevron */}
                  <motion.div
                    animate={{ rotate: expandedIdx === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      expandedIdx === i ? 'border-primary text-primary' : 'border-white/10 text-white/30'
                    }`}
                  >
                    <FaChevronDown size={10} />
                  </motion.div>
                </div>

                {/* Expanded Body */}
                <AnimatePresence>
                  {expandedIdx === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-white/5 pt-5">
                        {/* Meta row */}
                        <div className="flex flex-wrap gap-4 mb-4 text-[11px] text-white/40">
                          <span className="flex items-center gap-1.5">
                            <FaCalendarAlt size={9} className="text-primary/60" />
                            {item.duration} · {item.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <FaMapMarkerAlt size={9} className="text-primary/60" />
                            {item.location}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-white/55 text-sm leading-relaxed mb-5">
                          {item.description}
                        </p>

                        {/* Skill tags */}
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((s, si) => (
                            <span key={si} className="text-[9px] px-2.5 py-1 bg-primary/8 border border-primary/20 text-primary/80 rounded font-mono font-bold">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
