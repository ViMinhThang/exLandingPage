import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Sponsor from './components/Sponsor'
import Features from './components/Features'
import Skills from './components/Skills'
import EscapeSection from './components/EscapeSection'
import PreorderForm from './components/PreorderForm'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved === 'light' || saved === 'dark') return saved
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      return systemDark ? 'dark' : 'light'
    }
    return 'dark' // Default to dark mode for Oura/tasteskill premium feel
  })

  useEffect(() => {
    const root = window.document.documentElement
    const body = window.document.body
    if (theme === 'dark') {
      root.classList.add('dark')
      body.classList.add('dark')
    } else {
      root.classList.remove('dark')
      body.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className="bg-bone dark:bg-ink text-ink dark:text-bone min-h-[100dvh] antialiased selection:bg-ink dark:selection:bg-bone selection:text-bone dark:selection:text-ink transition-colors duration-300">
      <ScrollProgress />
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main id="top">
        <Hero />
        <Sponsor />
        <Features />
        <EscapeSection />
        <Skills />
        <PreorderForm />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
