import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 500) // Delay fadeout slightly
          return 100
        }
        const diff = Math.random() * 15
        return Math.min(prev + diff, 100)
      })
    }, 100)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-999 flex flex-col items-center justify-center bg-bg-dark text-white"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <div className="relative flex flex-col items-center max-w-md w-full px-6">
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 relative"
          >
            <div className="text-4xl font-extrabold tracking-wider bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              LKB.
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary blur-lg opacity-40 -z-10 rounded-lg animate-pulse" />
          </motion.div>

          {/* Loader bar */}
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mb-3">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-accent to-secondary"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>

          <div className="flex justify-between w-full text-xs text-white/50 font-mono">
            <span>DEVELOPER PORTFOLIO</span>
            <span>{Math.floor(progress)}%</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
