import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft, FaCheckCircle, FaProjectDiagram } from 'react-icons/fa'

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Product Manager',
    company: 'WebFlow Co',
    text: 'Lalit is an exceptionally skilled designer. He transformed our messy mockups into a gorgeous, cohesive, responsive React site ahead of schedule. Highly recommended!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    meta: {
      project: 'Web Platform Redesign',
      category: 'Web Design & React',
      timeline: '4 Weeks',
      metric: '99.8% Client Sat'
    }
  },
  {
    id: 2,
    name: 'Vikram Mehta',
    role: 'CEO',
    company: 'TechNova Solutions',
    text: "Working with Lalit was a breeze. His understanding of design trends coupled with solid React JS skills helped us build a dynamic CRM UI that our users love.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    meta: {
      project: 'SaaS CRM Dashboard',
      category: 'React & Redux Integration',
      timeline: '8 Weeks',
      metric: '40% User Growth'
    }
  },
  {
    id: 3,
    name: 'Emily Rose',
    role: 'Founder',
    company: 'Travely Agency',
    text: 'Our landing page conversion rate increased by 25% after Lalit redesigned it. The interactive scroll animations are simply beautiful. Highly recommend!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80',
    meta: {
      project: 'Travel Booking Portal',
      category: 'SEO & Interactive UI',
      timeline: '3 Weeks',
      metric: '+25% Conversions'
    }
  },
]

export default function Testimonials() {
  const [cards, setCards] = useState(TESTIMONIALS)

  // Move top card to bottom
  const nextCard = () => {
    setCards((prev) => {
      const nextList = [...prev]
      const first = nextList.shift()
      if (first) nextList.push(first)
      return nextList
    })
  }

  // Move bottom card to top
  const prevCard = () => {
    setCards((prev) => {
      const nextList = [...prev]
      const last = nextList.pop()
      if (last) nextList.unshift(last)
      return nextList
    })
  }

  const activeCard = cards[0]

  return (
    <section id="testimonials" className="py-24 px-6 bg-[#030303] relative overflow-hidden">
      {/* Background ambient light glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-primary/4 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Feedback</p>
          <h2 className="text-3xl md:text-5xl font-black font-serif text-gradient">What People Say About Me</h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Column (lg:col-span-7): The 3D Interactive Stack Deck */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center min-h-[380px] w-full relative" data-aos="fade-right">
            
            {/* Draggable Stack Container */}
            <div className="relative w-full max-w-lg h-[260px] flex items-center justify-center">
              {cards.map((card, index) => {
                const isTop = index === 0
                const isSecond = index === 1
                const isThird = index === 2

                // Calculate visual shifts for non-top cards to create the 3D depth
                let scale = 1
                let yOffset = 0
                let zIndex = 30 - index
                let opacity = 1
                let rotate = 0

                if (isSecond) {
                  scale = 0.95
                  yOffset = 16
                  opacity = 0.8
                  rotate = -1.5
                } else if (isThird) {
                  scale = 0.9
                  yOffset = 32
                  opacity = 0.5
                  rotate = 1.5
                } else if (index > 2) {
                  opacity = 0
                }

                return (
                  <motion.div
                    key={card.id}
                    drag={isTop ? 'x' : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, info) => {
                      if (isTop && Math.abs(info.offset.x) > 100) {
                        nextCard()
                      }
                    }}
                    animate={{
                      scale,
                      y: yOffset,
                      opacity,
                      rotate,
                    }}
                    transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                    className={`absolute w-full bg-[#080808]/90 border rounded-3xl p-8 shadow-2xl flex flex-col justify-between cursor-grab active:cursor-grabbing select-none ${
                      isTop 
                        ? 'border-primary/25 shadow-primary/5' 
                        : 'border-white/5 pointer-events-none'
                    }`}
                    style={{
                      zIndex,
                      height: '240px',
                      transformOrigin: 'bottom center',
                    }}
                  >
                    {/* Background glow for top card */}
                    {isTop && (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl pointer-events-none" />
                    )}

                    {/* Quote Icon & Review Text */}
                    <div className="relative">
                      <FaQuoteLeft className="text-primary/20 text-4xl mb-4" />
                      <p className="text-white/80 text-xs md:text-sm leading-relaxed italic line-clamp-4">
                        &ldquo;{card.text}&rdquo;
                      </p>
                    </div>

                    {/* Reviewer Information row */}
                    <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-2">
                      <div className="flex items-center gap-3">
                        <img 
                          src={card.avatar} 
                          alt={card.name} 
                          className="w-10 h-10 rounded-full border border-primary/30 object-cover"
                        />
                        <div>
                          <h4 className="text-white font-bold text-xs md:text-sm font-serif">{card.name}</h4>
                          <p className="text-white/45 text-[10px]">{card.role}, <span className="text-primary font-semibold">{card.company}</span></p>
                        </div>
                      </div>

                      <div className="flex gap-0.5">
                        {[...Array(card.rating)].map((_, r) => (
                          <FaStar key={r} className="text-primary" size={9} />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Stack Action Controls */}
            <div className="flex items-center gap-4 mt-12">
              <button 
                onClick={prevCard}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-primary hover:text-primary transition-all cursor-pointer bg-[#080808]"
              >
                <FaChevronLeft size={10} />
              </button>
              <div className="flex gap-1.5">
                {TESTIMONIALS.map((t, ti) => {
                  const currentActiveIndex = TESTIMONIALS.findIndex(item => item.id === activeCard.id)
                  return (
                    <div 
                      key={ti} 
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        ti === currentActiveIndex ? 'w-6 bg-primary' : 'w-1.5 bg-white/20'
                      }`}
                    />
                  )
                })}
              </div>
              <button 
                onClick={nextCard}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-primary hover:text-primary transition-all cursor-pointer bg-[#080808]"
              >
                <FaChevronRight size={10} />
              </button>
            </div>

          </div>

          {/* Right Column (lg:col-span-5): Dynamic Verified Project Metadata Panel */}
          <div className="lg:col-span-5 flex flex-col justify-center" data-aos="fade-left">
            <div className="bg-[#080808]/90 border border-white/5 rounded-3xl p-6 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
              
              <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-3">
                <FaProjectDiagram className="text-primary" size={14} />
                <span className="text-[10px] font-mono uppercase text-white/40 tracking-wider">PROJECT METADATA DIAGNOSTICS</span>
              </div>

              {/* Dynamic properties updated with slide transitions */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCard.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4 text-left"
                >
                  <div>
                    <span className="text-[9px] font-mono text-white/35 block uppercase tracking-widest">Case Project</span>
                    <span className="text-white font-bold text-sm font-serif mt-0.5 block">{activeCard.meta.project}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[9px] font-mono text-white/35 block uppercase tracking-widest">Category Scope</span>
                      <span className="text-white font-semibold text-xs mt-0.5 block">{activeCard.meta.category}</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-white/35 block uppercase tracking-widest">Project Timeline</span>
                      <span className="text-white font-semibold text-xs mt-0.5 block font-mono">{activeCard.meta.timeline}</span>
                    </div>
                  </div>

                  <div className="bg-[#030303] border border-white/5 rounded-2xl p-4 flex items-center justify-between mt-6">
                    <div>
                      <span className="text-[9px] font-mono text-primary font-bold block uppercase tracking-widest">Impact Metric</span>
                      <span className="text-white font-black text-sm mt-0.5 block">{activeCard.meta.metric}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-primary">
                      <FaCheckCircle size={10} />
                      <span className="text-[8px] font-bold uppercase tracking-wider font-mono">Verified Client</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
