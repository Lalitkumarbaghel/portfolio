import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane, FaWifi, FaCheckCircle } from 'react-icons/fa'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setSendError('')

    const formData = new FormData(e.currentTarget)
    formData.set('_subject', form.subject)
    formData.set('_replyto', form.email)

    try {
      const response = await fetch('https://formsubmit.co/ajax/lk03041997@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
      const result = await response.json()

      if (!response.ok || (result.success !== true && result.success !== 'true')) {
        throw new Error(result.message || 'Your message could not be sent. Please try again.')
      }

      setSubmitted(true)
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      setSendError(error instanceof Error ? error.message : 'Your message could not be sent. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-[#050505] relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-black font-serif text-gradient uppercase tracking-tight">Contact Me</h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column (lg:col-span-5): Futuristic Interactive HUD Info Deck */}
          <div className="lg:col-span-5 flex flex-col gap-5 justify-between" data-aos="fade-right">
            
            <div className="space-y-4">
              {[
                { 
                  icon: <FaEnvelope />, 
                  label: 'Email',
                  value: 'lk03041997@gmail.com',
                  href: 'mailto:lk03041997@gmail.com',
                  status: 'Contact',
                  color: '#FF4C00',
                  sub: 'For project inquiries and collaboration'
                },
                { 
                  icon: <FaMapMarkerAlt />, 
                  label: 'Location',
                  value: 'Gurgaon, India',
                  href: 'https://maps.google.com/?q=Gurgaon%2C+India',
                  status: 'India',
                  color: '#FF6A00',
                  sub: 'Based in Gurgaon · Open to opportunities'
                },
                { 
                  icon: <FaPhoneAlt />, 
                  label: 'Phone',
                  value: '+91 7838015881',
                  href: 'tel:+917838015881',
                  status: 'Contact',
                  color: '#FF8800',
                  sub: 'Call or WhatsApp for a quick conversation'
                },
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="group bg-[#080808]/90 border border-white/5 rounded-2xl p-5 hover:border-primary/20 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Neon laser scan bar on hover */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
                  
                  <div className="flex items-center space-x-4">
                    {/* Icon box */}
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xs shrink-0 border"
                      style={{ color: item.color, borderColor: `${item.color}30`, backgroundColor: `${item.color}10` }}
                    >
                      {item.icon}
                    </div>
                    
                    <div className="flex-grow min-w-0">
                      <div className="flex justify-between items-center">
                        <p className="text-white/40 text-[9px] font-mono uppercase tracking-wider">{item.label}</p>
                        <span className="flex items-center gap-1 text-[8px] font-mono text-green-500 font-bold uppercase">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          {item.status}
                        </span>
                      </div>
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-white font-bold text-sm mt-0.5 font-sans truncate block hover:text-primary transition-colors">{item.value}</a>
                      <p className="text-white/20 text-[9px] font-mono mt-1">{item.sub}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cyber Map display */}
            <div className="rounded-2xl overflow-hidden border border-white/5 bg-[#080808]/90 p-3 h-48 relative group hover:border-primary/20 transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/45 pointer-events-none z-10" />
              <iframe
                title="Gurgaon, India Map"
                src="https://maps.google.com/maps?q=Gurgaon%20India&z=12&output=embed"
                className="w-full h-full border-0 grayscale opacity-45 group-hover:opacity-75 group-hover:grayscale-0 transition-all duration-700 rounded-xl"
                loading="lazy"
              />
            </div>

          </div>

          {/* Right Column (lg:col-span-7): Contact Form */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  onSubmit={handleSubmit} 
                  className="bg-[#080808]/90 border border-white/5 rounded-3xl p-8 space-y-6 text-left relative overflow-hidden h-full flex flex-col justify-between"
                >
                  <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
                  
                  <div className="space-y-5">
                    {/* Header bar */}
                    <div className="flex justify-between items-center pb-3 border-b border-white/5 text-[9px] font-mono text-white/30">
                      <span>EMAIL CONTACT FORM</span>
                      <span className="flex items-center gap-1 text-primary"><FaWifi /> EMAIL DELIVERY</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {[
                        { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name', val: form.name },
                        { id: 'email', label: 'Email', type: 'email', placeholder: 'Your email address', val: form.email },
                      ].map(f => (
                        <div key={f.id} className="space-y-2">
                          <label className="text-[9px] font-mono font-bold uppercase tracking-wider text-white/40 block">
                            <span className="text-primary">{f.label}</span>
                          </label>
                          <input
                            name={f.id}
                            type={f.type}
                            value={f.val}
                            onChange={e => setForm({...form, [f.id]: e.target.value})}
                            placeholder={f.placeholder}
                            required
                            className="w-full px-4 py-3 bg-black border border-white/5 rounded-xl text-white text-xs font-mono placeholder-white/15 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_rgba(255,76,0,0.1)] transition-all duration-300"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] font-mono font-bold uppercase tracking-wider text-white/40 block">
                        <span className="text-primary">Subject</span>
                      </label>
                      <input
                        name="subject"
                        type="text"
                        value={form.subject}
                        onChange={e => setForm({...form, subject: e.target.value})}
                        placeholder="Enter Subject"
                        required
                        className="w-full px-4 py-3 bg-black border border-white/5 rounded-xl text-white text-xs font-mono placeholder-white/15 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_rgba(255,76,0,0.1)] transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-[9px] font-mono font-bold uppercase tracking-wider text-white/40">
                        <span className="text-primary">Message</span>
                        <span>CHAR LIMIT: 500</span>
                      </div>
                      <textarea
                        name="message"
                        rows={4}
                        maxLength={500}
                        value={form.message}
                        onChange={e => setForm({...form, message: e.target.value})}
                        placeholder="Enter Message"
                        required
                        className="w-full px-4 py-3 bg-black border border-white/5 rounded-xl text-white text-xs font-mono placeholder-white/15 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_rgba(255,76,0,0.1)] transition-all duration-300 resize-none"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full py-4 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-primary/95 transition-all cursor-pointer flex items-center justify-center gap-2 group shadow-md shadow-primary/15"
                    >
                      {sending ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1 }}
                            className="w-3 h-3 border-2 border-white border-t-transparent rounded-full"
                          />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          Send Message
                        </>
                      )}
                    </button>
                    {sendError && (
                      <p role="alert" className="text-red-400 text-xs text-center mt-3">
                        {sendError}
                      </p>
                    )}
                    <div className="flex items-center gap-1.5 justify-center text-[9px] text-white/30 mt-3 font-mono">
                      <FaEnvelope size={8} /> <span>Your message will be sent to lk03041997@gmail.com</span>
                    </div>
                  </div>

                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="bg-[#080808]/90 border border-primary/20 rounded-3xl p-8 text-center flex flex-col items-center justify-center shadow-lg shadow-primary/5 h-full relative"
                >
                  <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
                  
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-4 animate-bounce">
                    <FaCheckCircle size={16} />
                  </div>
                  <h3 className="text-white font-bold font-serif text-lg md:text-xl">MESSAGE SENT</h3>
                  <p className="text-white/50 text-xs mt-2 max-w-sm">
                    Thanks for reaching out. Your message has been sent to Lalit.
                  </p>
                  <div className="mt-6 border border-white/5 px-4 py-2 rounded-xl font-mono text-[9px] text-white/30 bg-black/40">
                    email_status: sent
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
