import { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const particles = []
    const connectionDistance = 110
    const mouse = { x: null, y: null, radius: 150 }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    class Particle {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 1
        this.speedX = (Math.random() - 0.5) * 0.7
        this.speedY = (Math.random() - 0.5) * 0.7
        this.color = Math.random() > 0.6 ? 'rgba(255, 76, 0, 0.5)' : Math.random() > 0.5 ? 'rgba(255, 136, 0, 0.4)' : 'rgba(255, 255, 255, 0.2)'
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // bounce on walls
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1

        // Mouse interact
        if (mouse.x != null && mouse.y != null) {
          const dx = this.x - mouse.x
          const dy = this.y - mouse.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius
            this.x += (dx / distance) * force * 2
            this.y += (dy / distance) * force * 2
          }
        }
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const initParticles = () => {
      const density = (canvas.width * canvas.height) / 15000
      particles.length = 0
      for (let i = 0; i < Math.min(density, 120); i++) {
        particles.push(new Particle())
      }
    }
    initParticles()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Grid Pattern backdrop
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.01)'
      ctx.lineWidth = 1
      const gridSize = 100
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw lines between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const alpha = (1 - distance / connectionDistance) * 0.18
            ctx.strokeStyle = `rgba(255, 76, 0, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw and update particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden bg-bg-dark">
      {/* Dynamic colorful blur spheres in background */}
      <div className="absolute top-[5%] left-[-15%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-[130px] animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute bottom-[10%] right-[-15%] w-[700px] h-[700px] rounded-full bg-secondary/10 blur-[160px] animate-pulse" style={{ animationDuration: '14s' }} />
      <div className="absolute top-[35%] right-[15%] w-[500px] h-[500px] rounded-full bg-accent/80 opacity-[0.04] blur-[120px] animate-pulse" style={{ animationDuration: '12s' }} />

      {/* Constellation Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full pointer-events-none" />
    </div>
  )
}
