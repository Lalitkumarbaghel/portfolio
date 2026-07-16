import { useState, useRef, useEffect } from 'react'

export default function InteractiveTerminal() {
  const [history, setHistory] = useState([
    { type: 'input', text: 'help' },
    {
      type: 'output',
      text: 'Available commands: bio | skills | experience | contact | clear',
    },
  ])
  const [inputVal, setInputVal] = useState('')
  const terminalEndRef = useRef(null)
  const inputRef = useRef(null)

  const handleContainerClick = () => {
    inputRef.current?.focus()
  }

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = inputVal.trim().toLowerCase()
      let response = ''

      switch (cmd) {
        case 'bio':
          response = 'Lalit Kumar Baghel - Senior Web Designer & React JS Developer based in India. 6+ Years designing premium websites.'
          break
        case 'skills':
          response = 'React JS, Redux, Tailwind CSS, JavaScript (ES6+), Node.js, Express, MongoDB, Git.'
          break
        case 'experience':
          response = '6+ Years Web Designing | 1 Year React JS Frontend Development'
          break
        case 'contact':
          response = 'Email: lalit@example.com | Location: India'
          break
        case 'clear':
          setHistory([])
          setInputVal('')
          return
        case 'help':
        default:
          response = cmd ? `Command not found: "${cmd}". Type "help" for a list of commands.` : ''
          break
      }

      const newHistory = [...history, { type: 'input', text: inputVal }]
      if (response) {
        newHistory.push({ type: 'output', text: response })
      }
      setHistory(newHistory)
      setInputVal('')
    }
  }

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  return (
    <div 
      onClick={handleContainerClick}
      className="w-full h-full bg-[#030303]/90 rounded-2xl border border-primary/20 font-mono text-xs text-primary p-4 flex flex-col justify-between shadow-[0_0_25px_rgba(255,76,0,0.15)] min-h-[260px] cursor-text transition-all duration-300 hover:border-primary/45"
    >
      {/* Terminal Title Bar */}
      <div className="flex justify-between items-center pb-2 border-b border-white/10 mb-2">
        <div className="flex space-x-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[10px] text-white/30">visitor@lalit-baghel: ~</span>
      </div>

      {/* Terminal History */}
      <div className="flex-grow overflow-y-auto space-y-1.5 pr-1 max-h-[160px] text-left scrollbar-thin">
        <div className="text-white/40">Type a command to explore...</div>
        {history.map((line, idx) => (
          <div key={idx} className="leading-relaxed">
            {line.type === 'input' ? (
              <span>
                <span className="text-primary font-bold">$</span> <span className="text-white/95">{line.text}</span>
              </span>
            ) : (
              <span className="text-white/70 block pl-3 border-l border-primary/20">{line.text}</span>
            )}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Terminal Input */}
      <div className="flex items-center pt-2 border-t border-white/5 mt-2">
        <span className="text-primary mr-2 font-bold">$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleCommand}
          placeholder="Type here..."
          className="flex-grow bg-transparent border-none outline-none text-white font-mono text-xs placeholder-primary/20"
        />
      </div>
    </div>
  )
}
