import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs, FaGitAlt, FaFigma } from 'react-icons/fa'
import { SiRedux, SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si'

const SKILLS = [
  { name: 'HTML5', level: 95, icon: <FaHtml5 className="text-orange-500" size={22} />, color: '#f97316' },
  { name: 'CSS3', level: 90, icon: <FaCss3Alt className="text-blue-500" size={22} />, color: '#3b82f6' },
  { name: 'JavaScript', level: 85, icon: <FaJs className="text-yellow-400" size={22} />, color: '#facc15' },
  { name: 'React JS', level: 80, icon: <FaReact className="text-cyan-400" size={22} />, color: '#22d3ee' },
  { name: 'Tailwind CSS', level: 90, icon: <SiTailwindcss className="text-cyan-500" size={22} />, color: '#06b6d4' },
  { name: 'Bootstrap', level: 88, icon: <FaBootstrap className="text-indigo-400" size={22} />, color: '#818cf8' },
  { name: 'Redux', level: 75, icon: <SiRedux className="text-purple-400" size={22} />, color: '#c084fc' },
  { name: 'Node.js', level: 65, icon: <FaNodeJs className="text-green-500" size={22} />, color: '#22c55e' },
  { name: 'Express.js', level: 70, icon: <SiExpress className="text-white/60" size={22} />, color: '#ffffff' },
  { name: 'MongoDB', level: 60, icon: <SiMongodb className="text-green-600" size={22} />, color: '#16a34a' },
  { name: 'Git & GitHub', level: 85, icon: <FaGitAlt className="text-orange-600" size={22} />, color: '#ea580c' },
  { name: 'Figma', level: 80, icon: <FaFigma className="text-pink-400" size={22} />, color: '#f472b6' },
]

const PROFICIENCY_LABELS = [
  { range: [90, 100], label: 'Expert' },
  { range: [75, 89], label: 'Advanced' },
  { range: [60, 74], label: 'Intermediate' },
]

function getLabel(level) {
  for (const p of PROFICIENCY_LABELS) {
    if (level >= p.range[0] && level <= p.range[1]) return p.label
  }
  return 'Learning'
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Technical</p>
          <h2 className="text-3xl md:text-5xl font-black font-serif text-white">My Skills</h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4" />
          <p className="text-white/40 text-sm mt-4 max-w-xl mx-auto">
            A curated set of technologies I've mastered through years of professional project work.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {SKILLS.map((skill, i) => (
            <div
              key={i}
              className="group bg-[#0d0d0d] border border-white/5 rounded-2xl p-5 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 text-center relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={i * 40}
            >
              {/* Subtle glow blob behind */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${skill.color}15, transparent 70%)` }}
              />

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-black border border-white/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 relative z-10">
                {skill.icon}
              </div>

              {/* Skill name */}
              <p className="text-white font-bold text-sm mb-1 relative z-10">{skill.name}</p>

              {/* Proficiency badge */}
              <span
                className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border mb-3 inline-block relative z-10"
                style={{ borderColor: `${skill.color}50`, color: skill.color, background: `${skill.color}10` }}
              >
                {getLabel(skill.level)}
              </span>

              {/* Progress bar */}
              <div className="h-1 bg-white/5 rounded-full overflow-hidden relative z-10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 + i * 0.03 }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})` }}
                />
              </div>
              <p className="text-[10px] text-white/30 mt-1.5 font-mono relative z-10">{skill.level}%</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
