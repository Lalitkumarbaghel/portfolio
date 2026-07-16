import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaPalette, FaBrain, FaCode, FaPaintBrush, FaMobileAlt, FaLightbulb, 
  FaLaptop, FaTabletAlt, FaMobile, FaPlay, FaSync, FaTools, FaCheckCircle, FaArrowRight
} from 'react-icons/fa'

const SERVICES_DATA = [
  {
    id: '01',
    title: 'Web Design',
    icon: <FaPalette size={18} />,
    description: 'Crafting stunning, pixel-perfect website designs with modern aesthetics, intuitive UX, and strong visual identity.',
    features: ['Figma Wireframes', 'Responsive UI', 'Brand Identity'],
    color: '#FF4C00',
  },
  {
    id: '02',
    title: 'Web Development',
    icon: <FaCode size={18} />,
    description: 'Building high-performance React JS applications, SPAs, and dynamic websites with clean, scalable code.',
    features: ['React JS / Vite', 'REST API Integration', 'Redux & Hooks'],
    color: '#FF6A00',
  },
  {
    id: '03',
    title: 'Graphic Design',
    icon: <FaPaintBrush size={18} />,
    description: 'Logo design, brand kits, social media graphics, and print-ready assets that communicate your brand visually.',
    features: ['Logo & Branding', 'Social Media', 'Print Design'],
    color: '#FF8800',
  },
  {
    id: '04',
    title: 'Responsive Websites',
    icon: <FaMobileAlt size={18} />,
    description: 'Mobile-first, fully responsive websites that look and perform flawlessly across every screen and device.',
    features: ['Mobile-First', 'Cross-Browser', 'Touch Optimized'],
    color: '#FF4C00',
  },
  {
    id: '05',
    title: 'Problem Solving',
    icon: <FaLightbulb size={18} />,
    description: 'Analytical thinking and structured debugging to resolve complex UI/UX and frontend challenges efficiently.',
    features: ['Debug & Optimize', 'Code Review', 'Performance Audit'],
    color: '#FF6A00',
  },
  {
    id: '06',
    title: 'Analytical Abilities',
    icon: <FaBrain size={18} />,
    description: 'Data-driven design decisions, user research insights, and metrics-focused improvements for real results.',
    features: ['A/B Testing', 'UX Research', 'SEO Basics'],
    color: '#FF8800',
  },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState(0)

  // Simulation state for Web Design (Color Palette Modifier)
  const [designColor, setDesignColor] = useState('#FF4C00')

  // Simulation state for Web Development (Interactive Compiler)
  const [compilerState, setCompilerState] = useState('idle') // idle, compiling, success
  const handleCompile = () => {
    setCompilerState('compiling')
    setTimeout(() => {
      setCompilerState('success')
    }, 1500)
  }

  // Simulation state for Graphic Design (Logo Customizer)
  const [logoRotation, setLogoRotation] = useState(0)
  const [logoScale, setLogoScale] = useState(1)

  // Simulation state for Responsive Websites (Device Simulator)
  const [simDevice, setSimDevice] = useState('desktop') // desktop, tablet, mobile

  // Simulation state for Problem Solving (Code Auto-Debugger)
  const [debugLogs, setDebugLogs] = useState([
    { text: 'ERR: index.css lines 45: Layout Overflow', status: 'error' },
    { text: 'ERR: App.jsx lines 122: Invalid prop type', status: 'error' },
    { text: 'WARN: Navbar.jsx lines 8: Unused import', status: 'warn' }
  ])
  const [debugging, setDebugging] = useState(false)
  const startDebugging = () => {
    if (debugging) return
    setDebugging(true)
    setTimeout(() => {
      setDebugLogs([
        { text: 'FIXED: index.css lines 45: Added overflow-hidden', status: 'fixed' },
        { text: 'ERR: App.jsx lines 122: Invalid prop type', status: 'error' },
        { text: 'WARN: Navbar.jsx lines 8: Unused import', status: 'warn' }
      ])
    }, 800)
    setTimeout(() => {
      setDebugLogs([
        { text: 'FIXED: index.css lines 45: Added overflow-hidden', status: 'fixed' },
        { text: 'FIXED: App.jsx lines 122: Cast standard value type', status: 'fixed' },
        { text: 'WARN: Navbar.jsx lines 8: Unused import', status: 'warn' }
      ])
    }, 1600)
    setTimeout(() => {
      setDebugLogs([
        { text: 'FIXED: index.css lines 45: Added overflow-hidden', status: 'fixed' },
        { text: 'FIXED: App.jsx lines 122: Cast standard value type', status: 'fixed' },
        { text: 'CLEARED: Navbar.jsx lines 8: Removed unused import', status: 'fixed' }
      ])
      setDebugging(false)
    }, 2400)
  }

  // Simulation state for Analytical Abilities (A/B traffic Simulator)
  const [trafficA, setTrafficA] = useState(45)
  const [trafficB, setTrafficB] = useState(72)
  const [simulatingTraffic, setSimulatingTraffic] = useState(false)
  const simulateTraffic = () => {
    if (simulatingTraffic) return
    setSimulatingTraffic(true)
    let count = 0
    const interval = setInterval(() => {
      setTrafficA(Math.floor(Math.random() * 20) + 40)
      setTrafficB(Math.floor(Math.random() * 30) + 70)
      count++
      if (count > 5) {
        clearInterval(interval)
        setSimulatingTraffic(false)
      }
    }, 250)
  }

  return (
    <section id="services" className="py-24 px-6 relative bg-[#050505] overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-20 right-0 w-[450px] h-[450px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[350px] h-[350px] bg-primary/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="mb-14" data-aos="fade-up">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3 text-center lg:text-left">Interactive Stage</p>
          <h2 className="text-3xl md:text-5xl font-black font-serif text-gradient text-center lg:text-left uppercase tracking-tight">
            My Services
          </h2>
          <div className="w-12 h-1 bg-primary mt-4 mx-auto lg:mx-0" />
        </div>

        {/* Dynamic Studio Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch" data-aos="fade-up" data-aos-delay="100">
          
          {/* Left Controls: Sidebar Tabs */}
          <div className="flex flex-row lg:flex-col gap-3 lg:col-span-1 justify-start lg:justify-center overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 snap-x snap-mandatory scrollbar-thin">
            {SERVICES_DATA.map((service, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveTab(idx)
                  // Reset states on change
                  setCompilerState('idle')
                }}
                className={`text-left p-4 lg:p-5 rounded-2xl border transition-all duration-300 flex items-center gap-3 lg:gap-4 cursor-pointer group relative overflow-hidden snap-start shrink-0 min-w-[170px] sm:min-w-[210px] lg:min-w-0 ${
                  activeTab === idx 
                    ? 'bg-gradient-to-r from-primary/10 to-transparent border-primary/40 shadow-lg shadow-primary/5' 
                    : 'bg-[#080808]/60 border-white/5 hover:border-white/10 hover:bg-white/[0.01]'
                }`}
              >
                {/* Active slider indicator line */}
                {activeTab === idx && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute left-0 right-0 bottom-0 h-0.5 lg:h-auto lg:right-auto lg:top-0 lg:bottom-0 lg:w-1 bg-primary"
                  />
                )}
                
                {/* Icon box */}
                <div 
                  className={`w-9 h-9 lg:w-10 lg:h-10 rounded-xl flex items-center justify-center border transition-all duration-300 shrink-0 ${
                    activeTab === idx 
                      ? 'bg-primary border-primary text-white' 
                      : 'bg-white/5 border-white/10 text-white/50 group-hover:text-white/80'
                  }`}
                  style={activeTab === idx ? { backgroundColor: service.color, borderColor: service.color } : {}}
                >
                  {service.icon}
                </div>

                <div className="flex-grow min-w-0">
                  <h3 className={`text-xs md:text-sm lg:text-base font-bold font-serif transition-colors truncate ${
                    activeTab === idx ? 'text-white' : 'text-white/70 group-hover:text-white'
                  }`}>
                    {service.title}
                  </h3>
                  <span className="text-[9px] text-white/30 group-hover:text-white/45 transition-colors font-mono block">
                    Service {service.id}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Right Display Panel: Interactive Simulator Stage */}
          <div className="lg:col-span-2 bg-[#080808]/90 border border-white/5 rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative min-h-[420px]">
            
            {/* Visual background highlight glow for active service */}
            <div 
              className="absolute -top-12 -right-12 w-64 h-64 opacity-20 pointer-events-none rounded-full blur-[90px]"
              style={{ background: SERVICES_DATA[activeTab].color }}
            />

            <div>
              {/* Header Info */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-white flex items-center gap-2">
                    <span 
                      className="w-2.5 h-2.5 rounded-full animate-ping"
                      style={{ backgroundColor: SERVICES_DATA[activeTab].color }}
                    />
                    {SERVICES_DATA[activeTab].title}
                  </h3>
                  <p className="text-white/40 text-[11px] font-mono mt-0.5">laboratory-simulation://active-stage</p>
                </div>
                <div className="flex gap-1">
                  {SERVICES_DATA[activeTab].features.map((feat, fi) => (
                    <span 
                      key={fi} 
                      className="text-[9px] px-2 py-0.5 bg-white/5 border border-white/10 text-white/50 rounded-full font-mono font-bold uppercase tracking-wider"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Service Description */}
              <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-8">
                {SERVICES_DATA[activeTab].description}
              </p>
            </div>

            {/* INTERACTIVE WORKSPACE SCREEN */}
            <div className="flex-grow flex items-center justify-center p-6 bg-[#030303] border border-white/5 rounded-2xl overflow-hidden relative min-h-[220px]">
              <AnimatePresence mode="wait">
                
                {/* 01. WEB DESIGN INTERACTIVE SCREEN */}
                {activeTab === 0 && (
                  <motion.div 
                    key="design"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full max-w-sm flex flex-col gap-4 text-center"
                  >
                    <div className="glass-panel border-white/5 p-4 rounded-xl flex flex-col gap-3 relative">
                      <div className="flex gap-1 justify-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      </div>
                      <div className="h-10 rounded-lg bg-white/5 flex items-center justify-center text-[10px] font-mono text-white/40 border border-dashed border-white/10">
                        Header Layout Area
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div 
                          className="h-16 rounded-lg transition-colors flex items-center justify-center text-xs font-bold text-white shadow-md"
                          style={{ backgroundColor: designColor }}
                        >
                          Accent Card
                        </div>
                        <div className="h-16 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px] text-white/30">
                          Content Container
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center items-center gap-3">
                      <span className="text-[10px] font-mono text-white/50">Modify Scheme:</span>
                      {['#FF4C00', '#00F0FF', '#FF00A0', '#00FF66'].map((col) => (
                        <button
                          key={col}
                          onClick={() => setDesignColor(col)}
                          className={`w-6 h-6 rounded-full border cursor-pointer transition-transform ${
                            designColor === col ? 'scale-125 border-white' : 'border-transparent hover:scale-110'
                          }`}
                          style={{ backgroundColor: col }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* 02. WEB DEVELOPMENT INTERACTIVE IDE */}
                {activeTab === 1 && (
                  <motion.div 
                    key="dev"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full flex flex-col gap-3 text-left font-mono text-xs"
                  >
                    <div className="w-full bg-[#050505] rounded-xl border border-white/10 p-4 shadow-inner relative">
                      <div className="flex justify-between items-center pb-2 mb-2 border-b border-white/5 text-[9px] text-white/30">
                        <span>LalitComponent.jsx</span>
                        <span className="text-green-500">React v19</span>
                      </div>
                      
                      <div className="space-y-1 text-white/70 text-[10px] md:text-[11px] leading-relaxed">
                        <p><span className="text-primary">const</span> Hero = () =&gt; &#123;</p>
                        <p className="pl-4"><span className="text-primary">return</span> (</p>
                        <p className="pl-8 text-cyan-400">&lt;<span className="text-white">div</span> className=<span className="text-yellow-300">"glow-neon"</span>&gt;</p>
                        <p className="pl-12 text-white">&lt;<span className="text-cyan-400">h1</span>&gt;Portfolio Website&lt;/<span className="text-cyan-400">h1</span>&gt;</p>
                        <p className="pl-8 text-cyan-400">&lt;/<span className="text-white">div</span>&gt;</p>
                        <p className="pl-4">)</p>
                        <p>&#125;</p>
                      </div>

                      {compilerState === 'compiling' && (
                        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center rounded-xl">
                          <FaSync className="animate-spin text-primary mb-2" size={18} />
                          <span className="text-[10px] text-white/50 tracking-wider">COMPILING ASSETS...</span>
                        </div>
                      )}

                      {compilerState === 'success' && (
                        <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center rounded-xl p-4 text-center">
                          <FaCheckCircle className="text-green-500 mb-2 scale-110" size={20} />
                          <span className="text-[10px] text-white font-bold tracking-wider">COMPILATION SUCCESSFUL</span>
                          <span className="text-[9px] text-white/40 mt-1">Rendered output: 440kB bundle file</span>
                          <button 
                            onClick={() => setCompilerState('idle')}
                            className="mt-3 px-3 py-1 rounded bg-white/5 border border-white/10 text-[9px] text-white/60 hover:text-white cursor-pointer"
                          >
                            Reset
                          </button>
                        </div>
                      )}
                    </div>

                    {compilerState === 'idle' && (
                      <button
                        onClick={handleCompile}
                        className="px-5 py-2.5 bg-primary rounded-xl text-[10px] font-bold uppercase tracking-wider text-white flex items-center justify-center gap-2 hover:bg-primary/95 shadow-md shadow-primary/15 self-start cursor-pointer"
                      >
                        <FaPlay size={8} /> Run Compiler
                      </button>
                    )}
                  </motion.div>
                )}

                {/* 03. GRAPHIC DESIGN LOGO RETAINER */}
                {activeTab === 2 && (
                  <motion.div 
                    key="graphics"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full max-w-xs flex flex-col gap-4 text-center"
                  >
                    {/* Simulated Vector Artboard */}
                    <div className="h-32 border border-white/5 rounded-xl flex items-center justify-center bg-black/50 relative overflow-hidden">
                      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                      
                      <motion.div 
                        animate={{ rotate: logoRotation, scale: logoScale }}
                        transition={{ type: 'spring', damping: 15 }}
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent relative flex items-center justify-center shadow-lg shadow-primary/20"
                      >
                        <div className="w-6 h-6 rounded bg-black/30 border border-white/20" />
                      </motion.div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[10px] font-mono text-white/50">
                        <span>Rotate Design: {logoRotation}°</span>
                        <input 
                          type="range" 
                          min="0" 
                          max="360" 
                          value={logoRotation}
                          onChange={(e) => setLogoRotation(Number(e.target.value))}
                          className="w-32 accent-primary cursor-pointer"
                        />
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-white/50">
                        <span>Scale Ratio: x{logoScale.toFixed(1)}</span>
                        <input 
                          type="range" 
                          min="0.5" 
                          max="1.8" 
                          step="0.1"
                          value={logoScale}
                          onChange={(e) => setLogoScale(Number(e.target.value))}
                          className="w-32 accent-primary cursor-pointer"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 04. RESPONSIVE DEVICES CONTAINER */}
                {activeTab === 3 && (
                  <motion.div 
                    key="responsive"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full flex flex-col items-center gap-4 text-center"
                  >
                    {/* Mode Selector Buttons */}
                    <div className="flex gap-2.5 bg-white/5 p-1 border border-white/10 rounded-full">
                      {[
                        { id: 'desktop', icon: <FaLaptop size={12} />, label: 'Desktop' },
                        { id: 'tablet', icon: <FaTabletAlt size={11} />, label: 'Tablet' },
                        { id: 'mobile', icon: <FaMobile size={11} />, label: 'Mobile' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setSimDevice(item.id)}
                          className={`px-3 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                            simDevice === item.id 
                              ? 'bg-primary text-white' 
                              : 'text-white/40 hover:text-white/80'
                          }`}
                        >
                          {item.icon} {item.label}
                        </button>
                      ))}
                    </div>

                    {/* Resizable Device Frame */}
                    <motion.div 
                      animate={{ 
                        width: simDevice === 'desktop' ? '100%' : simDevice === 'tablet' ? '70%' : '40%' 
                      }}
                      transition={{ type: 'spring', stiffness: 120, damping: 16 }}
                      className="border border-white/10 rounded-xl bg-black/60 overflow-hidden flex flex-col gap-2 p-3 text-left min-h-[110px]"
                    >
                      <div className="flex justify-between items-center border-b border-white/5 pb-1">
                        <span className="text-[8px] text-white/30 font-mono">responsive-viewport://preview</span>
                        <div className="flex gap-0.5">
                          <span className="w-1 h-1 rounded-full bg-red-500/50" />
                          <span className="w-1 h-1 rounded-full bg-yellow-500/50" />
                          <span className="w-1 h-1 rounded-full bg-green-500/50" />
                        </div>
                      </div>
                      <div className="text-[10px] text-white/50 leading-relaxed font-mono">
                        Fluid grid layout responsive components rendering scale. Try resizing above to check breakpoints.
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {/* 05. PROBLEM SOLVING INTERACTIVE SCANNER */}
                {activeTab === 4 && (
                  <motion.div 
                    key="problem"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full flex flex-col gap-3 font-mono text-[10px]"
                  >
                    <div className="w-full bg-[#050505] rounded-xl border border-white/10 p-4 flex flex-col gap-1.5 relative overflow-hidden">
                      {debugging && (
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary/80 animate-pulse shadow-[0_0_10px_#FF4C00]" />
                      )}
                      
                      {debugLogs.map((log, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                          <span className={`${
                            log.status === 'error' ? 'text-red-500' : log.status === 'warn' ? 'text-yellow-500' : 'text-green-500'
                          }`}>
                            {log.text}
                          </span>
                          <span className="text-white/20">[{log.status.toUpperCase()}]</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={startDebugging}
                      disabled={debugging}
                      className="px-5 py-2.5 bg-primary disabled:bg-white/10 rounded-xl text-[10px] font-bold uppercase tracking-wider text-white flex items-center justify-center gap-2 hover:bg-primary/95 self-start cursor-pointer"
                    >
                      <FaTools size={10} className={debugging ? 'animate-spin' : ''} />
                      {debugging ? 'PATCHING SYSTEMS...' : 'RUN AUTO-DEBUG PATCH'}
                    </button>
                  </motion.div>
                )}

                {/* 06. ANALYTICAL ABILITIES AB TEST SIMULATOR */}
                {activeTab === 5 && (
                  <motion.div 
                    key="analytical"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full max-w-xs flex flex-col gap-4 text-left"
                  >
                    <div className="bg-[#050505] border border-white/10 rounded-xl p-4 space-y-3 font-mono text-[10px]">
                      <div className="text-[9px] text-white/30 border-b border-white/5 pb-1 flex justify-between">
                        <span>A/B TEST: conversion_rate</span>
                        <span className="text-primary font-bold">LIVE METRIC</span>
                      </div>
                      
                      {/* Variant A */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-white/60">
                          <span>Variant A (Original)</span>
                          <span>{trafficA}%</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            animate={{ width: `${trafficA}%` }}
                            className="h-full bg-white/35 rounded-full"
                          />
                        </div>
                      </div>

                      {/* Variant B */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-white">
                          <span>Variant B (Optimized UX)</span>
                          <span className="text-primary font-bold">{trafficB}%</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            animate={{ width: `${trafficB}%` }}
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={simulateTraffic}
                      disabled={simulatingTraffic}
                      className="px-5 py-2.5 bg-primary disabled:bg-white/10 rounded-xl text-[10px] font-bold uppercase tracking-wider text-white flex items-center justify-center gap-2 hover:bg-primary/95 self-start cursor-pointer font-mono"
                    >
                      <FaSync size={10} className={simulatingTraffic ? 'animate-spin' : ''} />
                      SIMULATE USER TRAFFIC
                    </button>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
            
            {/* CTA action bottom */}
            <div className="border-t border-white/5 pt-4 mt-6 flex justify-between items-center text-white/40">
              <span className="text-[10px] font-mono">Stage initialized: operational</span>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-[10px] text-primary uppercase font-bold tracking-wider hover:underline flex items-center gap-1 cursor-pointer"
              >
                Inquire Service <FaArrowRight size={8} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}


