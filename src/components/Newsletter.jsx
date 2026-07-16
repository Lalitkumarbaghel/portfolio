import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaEnvelope, FaPaperPlane, FaCheck, FaInfoCircle, FaShieldAlt } from 'react-icons/fa'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setTimeout(() => { 
      setSubmitted(false)
      setEmail('') 
    }, 4000)
  }

  return (
    <section id="newsletter" className="py-24 px-6 bg-[#030303] relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10" data-aos="fade-up">
        {/* Floating Translucent Capsule Container */}
        <div className="relative bg-[#080808]/80 border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden backdrop-blur-xl">
          
          {/* Subtle grid pattern background inside card */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
          
          {/* Decorative neon borders corner ticks */}
          <div className="absolute top-0 left-0 w-8 h-0.5 bg-primary/50" />
          <div className="absolute top-0 left-0 w-0.5 h-8 bg-primary/50" />
          <div className="absolute bottom-0 right-0 w-8 h-0.5 bg-primary/50" />
          <div className="absolute bottom-0 right-0 w-0.5 h-8 bg-primary/50" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column (lg:col-span-7): Headline & Benefits */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="flex items-center gap-2 text-primary font-mono text-[10px] uppercase tracking-widest">
                <FaEnvelope /> Subscribe Hub
              </div>
              <h2 className="text-xl md:text-3xl font-black font-serif text-white leading-tight">
                Subscribe to get information, latest news & interesting offers about Lalit
              </h2>
              
              {/* Feature checkboxes */}
              <div className="space-y-2 pt-2">
                {[
                  'Weekly React JS & Premium Design insights',
                  'Frontend performance & SEO optimization hacks',
                  'Exclusive project case studies & codes'
                ].map((feat, fi) => (
                  <div key={fi} className="flex items-center gap-2.5 text-xs text-white/50">
                    <span className="w-4 h-4 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                      <FaCheck size={7} />
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column (lg:col-span-5): Interactive Registration Form */}
            <div className="lg:col-span-5 w-full">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit} 
                    className="flex flex-col gap-3.5 bg-[#050505] p-5 border border-white/5 rounded-2xl relative shadow-inner"
                  >
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email address..."
                        className="w-full pl-3 pr-10 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs outline-none placeholder-white/30 font-medium focus:border-primary/50 transition-colors"
                        required
                      />
                      <FaEnvelope className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/20 text-xs" />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-primary/95 transition-all cursor-pointer flex items-center justify-center gap-2 group shadow-md shadow-primary/15"
                    >
                      Subscribe Now
                      <FaPaperPlane size={9} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>

                    <div className="flex items-center gap-1.5 justify-center text-[9px] text-white/30 mt-1 font-mono">
                      <FaShieldAlt size={8} /> <span>Zero spam · Unsubscribe anytime</span>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center bg-[#050505] p-8 border border-primary/20 rounded-2xl shadow-lg shadow-primary/5 h-[170px]"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-3">
                      <FaCheck size={12} className="animate-bounce" />
                    </div>
                    <h3 className="text-white font-bold text-sm">Successfully Subscribed!</h3>
                    <p className="text-white/40 text-[10px] mt-1 font-mono">Check inbox for verification code</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
