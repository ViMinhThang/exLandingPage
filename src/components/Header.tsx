import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Circle, Sun, Moon } from 'lucide-react'

interface HeaderProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Specs', href: '#specs' },
    { name: 'Compare', href: '#compare' },
    { name: 'Get Started', href: '#signup' },
  ]

  return (
    <>
      <header
        className={`fixed top-4 right-6 z-40 transition-all duration-300 ${
          scrolled ? 'opacity-90 hover:opacity-100' : ''
        }`}
      >
        <div className="flex items-center gap-3 bg-bone/90 dark:bg-ink/90 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-full px-5 py-2.5 shadow-sm">
          {/* Logo */}
          <a
            href="#top"
            className="flex items-center gap-2 font-sans text-lg font-bold tracking-tight text-ink dark:text-bone mr-2"
          >
            <Circle size={14} strokeWidth={2.5} className="text-ink dark:text-bone" />
            <span className="tracking-wide hidden 600:inline">EXCELSIOR</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden 820:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-grey hover:text-ink dark:hover:text-bone transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-full text-ink dark:text-bone hover:bg-black/5 dark:hover:bg-white/5 transition-colors focus:outline-none"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          {/* CTA */}
          <a
            href="#signup"
            className="hidden 600:inline-block text-[10px] font-mono tracking-wider uppercase px-4 py-2 rounded-full bg-ink dark:bg-bone text-bone dark:text-ink hover:opacity-80 transition-opacity"
          >
            $29/mo
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-ink dark:text-bone hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors 820:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="fixed inset-0 z-35 bg-bone dark:bg-ink flex flex-col justify-center px-8 820:hidden"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-sans text-3xl text-grey hover:text-ink dark:hover:text-bone border-b border-black/5 dark:border-white/5 py-4 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="mt-12 text-center flex flex-col items-center gap-4">
              <a
                href="#signup"
                onClick={() => setIsOpen(false)}
                className="inline-block text-sm font-mono tracking-wider uppercase px-8 py-4 rounded-full bg-ink dark:bg-bone text-bone dark:text-ink font-semibold"
              >
                Get Started — $29/mo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
