import { motion } from 'framer-motion'
import { FaCode, FaMobileAlt, FaPalette, FaSearch, FaTools } from 'react-icons/fa'

const SERVICES = [
  {
    title: 'React JS Development',
    icon: <FaCode size={18} />,
    description: 'Build responsive frontend experiences with React JS, JavaScript, and reusable interface patterns.',
    skills: ['React JS', 'JavaScript (ES6+)', 'API Integration'],
    color: '#FF4C00',
  },
  {
    title: 'Web Design to Frontend',
    icon: <FaPalette size={18} />,
    description: 'Turn PSD and Figma designs into clean, pixel-accurate web interfaces.',
    skills: ['Figma to HTML', 'PSD to HTML', 'CSS3'],
    color: '#FF6A00',
  },
  {
    title: 'Responsive Web Design',
    icon: <FaMobileAlt size={18} />,
    description: 'Create mobile-first websites that adapt across screen sizes and browsers.',
    skills: ['Mobile-First Design', 'Bootstrap 4/5', 'Cross-Browser Compatibility'],
    color: '#FF8800',
  },
  {
    title: 'Dashboard & Web Projects',
    icon: <FaTools size={18} />,
    description: 'Contribute frontend work to CRM dashboards, education platforms, AI websites, and full-stack web projects.',
    skills: ['CRM Dashboards', 'Frontend Development', 'MySQL & MongoDB Basics'],
    color: '#FF4C00',
  },
  {
    title: 'SEO & Content Optimization',
    icon: <FaSearch size={18} />,
    description: 'Apply SEO basics and content optimization to support clear, discoverable website experiences.',
    skills: ['SEO Basics', 'Content Optimization', 'Digital Marketing'],
    color: '#FF6A00',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative bg-[#050505] overflow-hidden">
      <div className="absolute top-20 right-0 w-[450px] h-[450px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[350px] h-[350px] bg-primary/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">What I Do</p>
          <h2 className="text-3xl md:text-5xl font-black font-serif text-white">Skills in Practice</h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4" />
          <p className="text-white/40 text-sm mt-4 max-w-xl mx-auto">
            Frontend, web design, and optimization work grounded in my professional experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group bg-[#0d0d0d] border border-white/5 rounded-2xl p-6 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div
                className="w-12 h-12 rounded-xl bg-black border border-white/5 flex items-center justify-center mb-5"
                style={{ color: service.color }}
              >
                {service.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed min-h-12">{service.description}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {service.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] px-2.5 py-1 bg-white/5 border border-white/10 text-white/55 rounded-full"
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
