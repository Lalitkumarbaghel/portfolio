import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCalendarAlt, FaBookOpen, FaBookmark, FaShareAlt, FaCheck, FaArrowRight } from 'react-icons/fa'

const BLOGS = [
  {
    id: 1,
    date: '10 March 2025',
    category: 'Web Design',
    title: '10 UI Design Trends Dominating in 2025',
    excerpt: 'Glassmorphism, bento grids, and bold typography are reshaping how we design for the modern web.',
    img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
    readTime: '4 min read',
    accentColor: '#FF4C00',
    tags: ['UX Trends', 'Glassmorphism', 'Bento Grid']
  },
  {
    id: 2,
    date: '22 April 2025',
    category: 'React JS',
    title: 'Building Scalable SPAs with React & Redux Toolkit',
    excerpt: 'A deep dive into structuring your React applications with clean state management, hooks, and modular architecture.',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14431b9?auto=format&fit=crop&w=800&q=80',
    readTime: '6 min read',
    accentColor: '#FF6A00',
    tags: ['React JS', 'Redux', 'State Management']
  },
  {
    id: 3,
    date: '05 June 2025',
    category: 'Career',
    title: 'From Web Designer to Full Stack Developer — My Journey',
    excerpt: 'How I transitioned from CSS layouts to Node.js backends while continuing to build beautiful frontends.',
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
    readTime: '5 min read',
    accentColor: '#FF8800',
    tags: ['Career Growth', 'Frontend', 'Backend']
  },
]

export default function Blog() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [bookmarked, setBookmarked] = useState({})
  const [copiedLink, setCopiedLink] = useState(false)

  const activePost = BLOGS[activeIdx]

  const toggleBookmark = (id) => {
    setBookmarked(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const handleShare = () => {
    setCopiedLink(true)
    navigator.clipboard?.writeText(window.location.href)
    setTimeout(() => setCopiedLink(false), 2000)
  }

  return (
    <section id="blog" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-primary/4 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Articles</p>
          <h2 className="text-3xl md:text-5xl font-black font-serif text-gradient">Latest Blog</h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4" />
        </div>

        {/* Spotlight Showcase Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" data-aos="fade-up" data-aos-delay="100">
          
          {/* Left Column (lg:col-span-5): Article Index Feed */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-center">
            {BLOGS.map((post, i) => (
              <button
                key={post.id}
                onClick={() => setActiveIdx(i)}
                className="w-full text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col gap-2 relative overflow-hidden cursor-pointer group"
                style={{
                  borderColor: activeIdx === i ? `${post.accentColor}40` : 'rgba(255,255,255,0.05)',
                  background: activeIdx === i ? `linear-gradient(90deg, ${post.accentColor}10, transparent)` : 'rgba(8, 8, 8, 0.6)'
                }}
              >
                {/* Active slider indicator line */}
                {activeIdx === i && (
                  <motion.div 
                    layoutId="activeBlogIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1"
                    style={{ backgroundColor: post.accentColor }}
                  />
                )}

                <div className="flex justify-between items-center text-[10px] font-mono text-white/40">
                  <span className="flex items-center gap-1.5">
                    <FaCalendarAlt size={9} className="text-primary/60" />
                    {post.date}
                  </span>
                  <span 
                    className="px-2 py-0.5 border rounded-full text-[8px] uppercase tracking-wider font-bold"
                    style={{
                      borderColor: activeIdx === i ? `${post.accentColor}40` : 'rgba(255,255,255,0.08)',
                      color: activeIdx === i ? post.accentColor : 'rgba(255,255,255,0.4)',
                      background: activeIdx === i ? `${post.accentColor}10` : 'transparent'
                    }}
                  >
                    {post.category}
                  </span>
                </div>

                <h3 className={`text-sm md:text-base font-bold font-serif leading-snug transition-colors ${
                  activeIdx === i ? 'text-white' : 'text-white/70 group-hover:text-white'
                }`}>
                  {post.title}
                </h3>
              </button>
            ))}

            <div className="mt-4 flex justify-center lg:justify-start">
              <button className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-bold uppercase tracking-widest hover:bg-primary hover:border-primary hover:text-white transition-all cursor-pointer">
                View All Articles
              </button>
            </div>
          </div>

          {/* Right Column (lg:col-span-7): Magazine Reader Stage */}
          <div className="lg:col-span-7 bg-[#080808]/90 border border-white/5 rounded-3xl overflow-hidden flex flex-col justify-between shadow-2xl relative min-h-[460px]">
            
            {/* Active Artboard preview */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePost.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full justify-between flex-grow"
              >
                <div>
                  {/* Top Image Banner */}
                  <div className="h-48 w-full overflow-hidden relative">
                    <img 
                      src={activePost.img} 
                      alt={activePost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-black/25" />
                    
                    {/* Floating Controls */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button 
                        onClick={() => toggleBookmark(activePost.id)}
                        className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm ${
                          bookmarked[activePost.id]
                            ? 'bg-primary border-primary text-white'
                            : 'bg-black/40 border-white/10 text-white/60 hover:border-white/30 hover:text-white'
                        }`}
                        style={bookmarked[activePost.id] ? { backgroundColor: activePost.accentColor, borderColor: activePost.accentColor } : {}}
                      >
                        <FaBookmark size={10} />
                      </button>
                      <button 
                        onClick={handleShare}
                        className="w-8 h-8 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white/60 hover:border-white/30 hover:text-white transition-all cursor-pointer backdrop-blur-sm"
                      >
                        {copiedLink ? <FaCheck size={9} className="text-green-400 animate-pulse" /> : <FaShareAlt size={10} />}
                      </button>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-8 pb-4">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-[10px] font-mono text-white/40 mb-3">
                      <span className="flex items-center gap-1.5">
                        <FaCalendarAlt size={9} />
                        {activePost.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaBookOpen size={9} />
                        {activePost.readTime}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-xl md:text-3xl font-bold font-serif text-white leading-tight mb-4">
                      {activePost.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-white/55 text-xs md:text-sm leading-relaxed mb-6">
                      {activePost.excerpt}
                    </p>

                    {/* Sub-tags list */}
                    <div className="flex flex-wrap gap-2">
                      {activePost.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-[9px] px-2.5 py-1 bg-white/5 border border-white/10 rounded-full font-mono text-white/40"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Read trigger */}
                <div className="p-8 pt-0 border-t border-white/5 mt-6 flex justify-between items-center text-white/40">
                  <span className="text-[10px] font-mono">Reader status: ready</span>
                  <button 
                    className="px-5 py-2.5 bg-primary text-white rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-primary/90 flex items-center gap-2 transition-all cursor-pointer"
                    style={{ backgroundColor: activePost.accentColor }}
                  >
                    Read Full Article <FaArrowRight size={8} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  )
}
