import React, { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Cpu } from 'lucide-react'

function useCountUp(end: number, duration: number, startOnView: boolean) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!startOnView) return
    let startTime: number | null = null
    const tick = (now: number) => {
      if (!startTime) startTime = now
      const elapsed = (now - startTime) / 1000
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [end, duration, startOnView])

  return { count, ref }
}

const slides = ['/heroimg1.avif', '/heroimg2.avif', '/heroimg3.avif']

export default function Hero() {
  const buttonX = useMotionValue(0)
  const buttonY = useMotionValue(0)
  const springX = useSpring(buttonX, { stiffness: 120, damping: 12 })
  const springY = useSpring(buttonY, { stiffness: 120, damping: 12 })

  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const ctx = useCountUp(128, 2, inView)
  const lang = useCountUp(200, 2, inView)
  const prod = useCountUp(10, 2, inView)

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const mouseX = e.clientX - rect.left - rect.width / 2
    const mouseY = e.clientY - rect.top - rect.height / 2
    buttonX.set(mouseX * 0.35)
    buttonY.set(mouseY * 0.35)
  }

  const handleMouseLeave = () => {
    buttonX.set(0)
    buttonY.set(0)
  }

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh] flex items-center pt-28 pb-16 overflow-hidden bg-bone dark:bg-ink text-ink dark:text-bone transition-colors duration-300">
      {/* Background image with parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 pointer-events-none will-change-transform">
        <picture>
          <source srcSet="/herosss.webp" type="image/webp" />
          <img
            src="/herosss.jpg"
            alt=""
            fetchPriority="high"
            className="w-full h-[120%] object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-bone/30 dark:bg-ink/60" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 w-full z-10">
        <div className="grid grid-cols-1 860:grid-cols-12 gap-12 860:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="860:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="h-px w-6 bg-ink dark:bg-bone"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-grey flex items-center gap-1.5">
                <Cpu size={12} strokeWidth={2} /> AI Coding Agent · Context 128K
              </span>
            </motion.div>

            {/* H1 Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-sans text-5xl 860:text-7xl font-semibold tracking-tighter leading-[0.95] text-ink dark:text-bone mb-6"
            >
              Code better.<br /><em className="text-ink dark:text-bone not-italic font-semibold">10x faster.</em>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base 860:text-lg text-grey leading-relaxed max-w-[50ch] mb-10"
            >
              EXCELSIOR is a next-gen AI coding agent — understands your entire codebase, smart multi-file editing, terminal automation, and deep code analysis.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4 items-center mb-12 w-full 600:w-auto"
            >
              {/* Terminal command line */}
              <div className="w-full mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 font-mono text-sm text-ink dark:text-bone">
                  <span className="text-grey">$</span>
                  <span className="text-ink dark:text-bone">npx install</span>
                  <TypingText />
                </div>
              </div>
              <motion.a
                href="#signup"
                style={{ x: springX, y: springY }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-ink dark:bg-bone text-bone dark:text-ink font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-ink-soft dark:hover:bg-bone-dim cursor-pointer"
              >
                Try it free
                <ArrowRight size={16} strokeWidth={2.5} />
              </motion.a>

              <a
                href="#specs"
                className="flex items-center gap-2 px-6 py-4 rounded-full border border-black/10 dark:border-white/10 text-ink dark:text-bone hover:border-ink dark:hover:border-bone hover:text-ink dark:hover:text-bone transition-all duration-300 text-sm font-medium"
              >
                View specs
              </a>
            </motion.div>

            {/* Social Proof metrics */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-black/10 dark:border-white/10 w-full 600:w-[480px]"
            >
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              >
                <span className="font-mono text-2xl 860:text-3xl font-bold text-ink dark:text-bone block">{ctx.count}K</span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-grey">Context window</span>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              >
                <span className="font-mono text-2xl 860:text-3xl font-bold text-ink dark:text-bone block">{lang.count}+</span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-grey">Languages supported</span>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              >
                <span className="font-mono text-2xl 860:text-3xl font-bold text-ink dark:text-bone block">{prod.count}x</span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-grey">Coding productivity</span>
              </motion.div>
            </motion.div>

          </div>

          {/* Hero Right Visuals — Messy Stack */}
          <div className="860:col-span-5 flex justify-center items-center relative min-h-[300px] 860:min-h-[560px]">
            <div className="relative w-full max-w-full aspect-[4/5]">
              {slides.map((src, i) => (
                <motion.img
                  key={src}
                  src={src}
                  alt={`EXCELSIOR screenshot ${i + 1}`}
                  sizes="(max-width: 860px) 50vw, 33vw"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  className={`absolute w-full h-full object-contain rounded-xl ${
                    i === 0 ? '-rotate-[12deg] -translate-x-8 translate-y-4' :
                    i === 1 ? 'rotate-[8deg] translate-x-8 -translate-y-2' :
                    'rotate-[3deg] translate-x-0 translate-y-8'
                  }`}
                  style={{ zIndex: 3 - i }}
                  whileHover={{ scale: 1.03, zIndex: 10 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function TypingText() {
  const word = 'Excelsior'
  const [display, setDisplay] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplay(word.slice(0, i))
      if (i >= word.length) { clearInterval(interval); setTimeout(() => setDone(true), 400) }
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <span className="text-ink dark:text-bone font-semibold">{display}</span>
      {!done && <span className="w-1.5 h-4 bg-ink dark:bg-bone animate-pulse" />}
    </>
  )
}
