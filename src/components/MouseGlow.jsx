import { useEffect, useState } from 'react'

export default function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 opacity-60"
      style={{
        background: `radial-gradient(550px at ${position.x}px ${position.y}px, rgba(255, 76, 0, 0.12), rgba(255, 136, 0, 0.04), transparent 80%)`,
      }}
    />
  )
}
