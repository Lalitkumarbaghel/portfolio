import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCheck, FaArrowRight, FaStar } from 'react-icons/fa'

const PLANS = [
  {
    name: 'Basic',
    tag: 'Starter',
    price: 19.99,
    period: '/month',
    description: 'Perfect for personal projects and small landing pages.',
    features: ['1 Website Design', 'Basic SEO Setup', '3 Page Layout', '1 Month Support', 'HTML/CSS Delivery'],
    isFeatured: false,
    accentColor: 'rgba(255,76,0,0.15)',
  },
  {
    name: 'Standard',
    tag: 'Popular',
    price: 39.99,
    period: '/month',
    description: 'Best for growing businesses and small startups.',
    features: ['3 Website Design', 'On-Page SEO', '7 Page Layout', '3 Month Support', 'React JS Delivery'],
    isFeatured: false,
    accentColor: 'rgba(255,76,0,0.15)',
  },
  {
    name: 'Premium',
    tag: 'Best Value',
    price: 59.88,
    period: '/month',
    description: 'Full-featured package for serious businesses.',
    features: ['5 Website Design', 'Full SEO Audit', '15 Page Layout', '6 Month Support', 'Full Stack Delivery'],
    isFeatured: true,
    accentColor: 'rgba(255,76,0,0.25)',
  },
  {
    name: 'On-Site',
    tag: 'Enterprise',
    price: 79.99,
    period: '/month',
    description: 'Unlimited scope for large enterprises and agencies.',
    features: ['Unlimited Designs', 'Advanced SEO', 'Unlimited Pages', '12 Month Support', 'Dedicated Manager'],
    isFeatured: false,
    accentColor: 'rgba(255,76,0,0.15)',
  },
]

export default function Pricing() {
  const [hoveredIdx, setHoveredIdx] = useState(null)

  return (
    <section id="pricing" className="py-20 px-6 bg-black relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14" data-aos="fade-up">
          <div>
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Packages</p>
            <h2 className="text-3xl md:text-5xl font-black font-serif text-gradient">
              Affordable Pricing Plans
            </h2>
            <div className="w-12 h-1 bg-primary mt-4" />
          </div>
          <p className="text-white/35 text-xs md:text-sm leading-relaxed max-w-sm lg:text-right">
            Transparent, competitive pricing designed to suit freelancers, startups, and enterprise clients alike.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" data-aos="fade-up" data-aos-delay="100">
          {PLANS.map((plan, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className={`relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 ${
                plan.isFeatured
                  ? 'border-primary shadow-[0_0_40px_rgba(255,76,0,0.2)]'
                  : hoveredIdx === i
                  ? 'border-primary/30'
                  : 'border-white/5'
              }`}
            >
              {/* Top accent bar */}
              <div
                className={`h-1 w-full transition-all duration-300 ${
                  plan.isFeatured ? 'bg-primary' : hoveredIdx === i ? 'bg-primary/50' : 'bg-white/5'
                }`}
              />

              {/* Featured badge */}
              {plan.isFeatured && (
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-primary/20 border border-primary/30 px-2.5 py-1 rounded-full">
                  <FaStar size={7} className="text-primary" />
                  <span className="text-[8px] text-primary font-black uppercase tracking-wider">Best Value</span>
                </div>
              )}

              <div className={`flex flex-col flex-1 p-6 ${plan.isFeatured ? 'bg-gradient-to-b from-primary/10 to-[#080808]/90' : 'bg-[#080808]/90'}`}>

                {/* Tag + Name */}
                <div className="mb-5">
                  <span className="text-[9px] text-primary/70 font-bold uppercase tracking-widest font-mono">{plan.tag}</span>
                  <h3 className={`text-xl font-black font-serif mt-0.5 ${plan.isFeatured ? 'text-primary' : 'text-white'}`}>
                    {plan.name}
                  </h3>
                  <p className="text-white/35 text-[11px] mt-1.5 leading-relaxed">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="flex items-end gap-1 mb-6 pb-6 border-b border-white/5">
                  <span className="text-white/40 text-sm font-bold self-start mt-1">$</span>
                  <span className={`text-4xl font-black font-serif leading-none ${plan.isFeatured ? 'text-gradient' : 'text-white'}`}>
                    {plan.price.toString().split('.')[0]}
                  </span>
                  <div className="flex flex-col leading-none ml-0.5">
                    <span className="text-white font-bold text-sm">.{plan.price.toString().split('.')[1]}</span>
                    <span className="text-white/35 text-[9px] mt-1">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 flex-1 mb-7">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border ${
                        plan.isFeatured
                          ? 'bg-primary/20 border-primary/40'
                          : 'bg-primary/8 border-primary/15'
                      }`}>
                        <FaCheck size={6} className="text-primary" />
                      </div>
                      <span className="text-white/55 text-xs leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-3 rounded-xl text-xs font-bold uppercase tracking-widest cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                    plan.isFeatured
                      ? 'bg-primary text-white hover:bg-primary/90 shadow-[0_4px_15px_rgba(255,76,0,0.3)]'
                      : 'bg-white/5 border border-white/10 text-white/70 hover:bg-primary hover:border-primary hover:text-white'
                  }`}
                >
                  Get Started
                  <FaArrowRight size={9} className="group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-white/25 text-[11px] mt-8 font-mono" data-aos="fade-up">
          All plans include free consultation · Cancel anytime · Custom quotes available
        </p>

      </div>
    </section>
  )
}
