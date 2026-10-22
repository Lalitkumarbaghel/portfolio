import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaPalette, FaSearch, FaTools } from 'react-icons/fa'

const SKILL_GROUPS = [
  {
    title: 'Frontend Development',
    icon: <FaCode size={20} />,
    color: '#22d3ee',
    skills: ['React JS', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Bootstrap 4/5', 'Tailwind CSS', 'jQuery'],
  },
  {
    title: 'Web Design',
    icon: <FaPalette size={20} />,
    color: '#f472b6',
    skills: ['Figma', 'PSD to HTML', 'Figma to HTML', 'Responsive Web Design', 'Mobile-First Design', 'Cross-Browser Compatibility'],
  },
  {
    title: 'Backend & Databases',
    icon: <FaDatabase size={20} />,
    color: '#22c55e',
    skills: ['Node.js', 'Express', 'PHP Include Pages', 'MySQL Database Connection', 'MongoDB', 'XAMPP'],
  },
  {
    title: 'Tools & Platforms',
    icon: <FaTools size={20} />,
    color: '#f97316',
    skills: ['VS Code', 'Sublime Text', 'Git', 'GitHub', 'Postman', 'ChatGPT', 'AI Studio', 'Antigravity'],
  },
  {
    title: 'Additional Skills',
    icon: <FaSearch size={20} />,
    color: '#a78bfa',
    skills: ['SEO Basics', 'Digital Marketing', 'Content Optimization', 'CRM Dashboard Design', 'Agile Teamwork', 'Project Management'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Technical</p>
          <h2 className="text-3xl md:text-5xl font-black font-serif text-white">Skills & Tools</h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4" />
          <p className="text-white/40 text-sm mt-4 max-w-xl mx-auto">
            Technologies and workflows listed in my professional CV.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-[#0d0d0d] border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 40}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-11 h-11 rounded-xl bg-black border border-white/5 flex items-center justify-center"
                  style={{ color: group.color }}
                >
                  {group.icon}
                </div>
                <h3 className="text-white font-bold text-sm">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] px-2.5 py-1.5 bg-white/5 border border-white/10 text-white/60 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
