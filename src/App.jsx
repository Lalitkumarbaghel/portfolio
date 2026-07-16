import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'
import MouseGlow from './components/MouseGlow'
import AnimatedBackground from './components/AnimatedBackground'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Services from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Newsletter from './components/Newsletter'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 80,
    })
  }, [])

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="relative min-h-screen text-white">
          <CustomCursor />
          <MouseGlow />
          <AnimatedBackground />

          <Navbar />

          <main className="relative z-10">
            <Hero />
            <About />
            <Services />
            <Projects />
            <Skills />
            <Experience />
            <Testimonials />
            <Blog />
            <Newsletter />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  )
}

export default App
