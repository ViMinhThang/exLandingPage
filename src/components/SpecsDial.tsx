import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu } from 'lucide-react'

interface SpecNode {
  id: number
  value: string
  label: string
  detail: string
  detailsLabel: string
}

export default function SpecsDial() {
  const [activeSpec, setActiveSpec] = useState<number | null>(null)

  const specs: SpecNode[] = [
    { 
      id: 1, 
      value: '128K', 
      label: 'Context Window', 
      detail: 'Understands your entire codebase — not just a single file. 128K token context is enough to grasp large projects, from structure to business logic.',
      detailsLabel: 'Extended Context'
    },
    { 
      id: 2, 
      value: '200+', 
      label: 'Languages supported', 
      detail: 'Supports 200+ programming languages — from C, Rust, Go to Python, TypeScript, Elixir. Deep syntax highlighting and semantic analysis for each language.',
      detailsLabel: 'Polyglot Engine'
    },
    { 
      id: 3, 
      value: 'Zero-latency', 
      label: 'Streaming real-time', 
      detail: 'Results stream token by token at blazing speed. Code edits appear in your editor almost instantly — no waiting.',
      detailsLabel: 'Real-time Streaming'
    },
    { 
      id: 4, 
      value: 'GPT-4/Claude', 
      label: 'Multi-provider', 
      detail: 'Supports multiple AI providers — OpenAI, Anthropic, Google, and local models via Ollama. Choose the model that fits your needs and budget.',
      detailsLabel: 'Multi-provider Support'
    },
    { 
      id: 5, 
      value: '99.9%', 
      label: 'Uptime', 
      detail: 'Distributed cloud infrastructure guarantees 99.9% uptime. Offline mode still works — your code is never interrupted.',
      detailsLabel: 'Enterprise SLA'
    },
    { 
      id: 6, 
      value: 'SOC 2', 
      label: 'Security cert', 
      detail: 'SOC 2 Type II certified — your code is protected at the highest level. Zero data retention policy, end-to-end AES-256 encryption.',
      detailsLabel: 'SOC 2 Type II'
    },
  ]

  // Positions on a 420px container
  const positionClasses = [
    'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2', // n1: 12 o'clock
    'top-[23%] right-0 translate-x-1/3', // n2: 2 o'clock
    'bottom-[23%] right-0 translate-x-1/3', // n3: 4 o'clock
    'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2', // n4: 6 o'clock
    'bottom-[23%] left-0 -translate-x-1/3', // n5: 8 o'clock
    'top-[23%] left-0 -translate-x-1/3', // n6: 10 o'clock
  ]

  return (
    <section id="specs" className="py-24 bg-bone dark:bg-ink text-ink dark:text-bone relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Container Panel */}
        <div className="panel-glass rounded-2xl py-16 px-8 860:px-16 relative overflow-hidden">
          
          {/* Section Head */}
          <div className="max-w-xl mb-12 text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-muted"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-muted dark:text-grey flex items-center gap-1.5"><Cpu size={12} strokeWidth={2} /> Technical specs</span>
            </div>
            
            <h2 className="font-sans text-4xl 860:text-5xl font-semibold tracking-tight leading-tight text-ink dark:text-bone mb-6">
              Performance you can<br />rely on.
            </h2>
            
            <p className="text-sm text-muted dark:text-grey leading-relaxed">
              Six core metrics — every number is the result of thousands of hours of optimization and rigorous testing.
            </p>
          </div>

          {/* Desktop Interactive Radial Dial */}
          <div className="hidden 820:flex justify-center items-center py-16">
            <div className="relative w-[380px] h-[380px] flex items-center justify-center">
              
              {/* Dial SVG */}
              <div className="absolute inset-0 z-0">
                <svg viewBox="0 0 400 400" className="w-full h-full opacity-40">
                  <circle cx="200" cy="200" r="160" fill="none" className="stroke-muted dark:stroke-white/20" strokeWidth="1" strokeDasharray="3 8" />
                  <circle cx="200" cy="200" r="120" fill="none" className="stroke-muted dark:stroke-white/20" strokeWidth="1" />
                  
                  {/* Dynamic connections based on activeSpec */}
                  {activeSpec !== null && (
                    <motion.line
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      x1="200"
                      y1="200"
                      x2={200 + 160 * Math.sin(((activeSpec - 1) * 60 * Math.PI) / 180)}
                      y2={200 - 160 * Math.cos(((activeSpec - 1) * 60 * Math.PI) / 180)}
                      stroke="#666666"
                      strokeWidth="1.5"
                    />
                  )}
                </svg>
              </div>

              {/* Central Details Display */}
              <div className="absolute w-[200px] h-[200px] rounded-full bg-bone dark:bg-ink border border-black/5 dark:border-white/10 flex flex-col items-center justify-center text-center p-6 z-10">
                <AnimatePresence mode="wait">
                  {activeSpec === null ? (
                    <motion.div
                      key="default"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex flex-col items-center"
                    >
                      <span className="font-sans text-4xl font-bold text-ink dark:text-bone leading-none">10x</span>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-muted dark:text-grey mt-2">Productivity boost</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={activeSpec}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex flex-col items-center"
                    >
                      <span className="font-mono text-xl font-bold text-ink dark:text-bone leading-none">
                        {specs[activeSpec - 1].value}
                      </span>
                      <span className="font-sans text-[11px] font-semibold text-ink dark:text-bone mt-2.5 text-center leading-tight">
                        {specs[activeSpec - 1].label}
                      </span>
                      <span className="font-mono text-[8px] uppercase tracking-widest text-muted dark:text-grey mt-1.5 text-center">
                        {specs[activeSpec - 1].detailsLabel}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Spec nodes positioned in a circle */}
              {specs.map((spec, index) => {
                const isActive = activeSpec === spec.id
                return (
                  <div
                    key={spec.id}
                    className={`absolute w-[140px] text-center cursor-pointer select-none transition-all duration-300 z-20 ${positionClasses[index]}`}
                    onMouseEnter={() => setActiveSpec(spec.id)}
                    onMouseLeave={() => setActiveSpec(null)}
                  >
                    <motion.div
                      animate={{ scale: isActive ? 1.08 : 1 }}
                      className="flex flex-col items-center"
                    >
                      <span className={`w-3 h-3 rounded-full mb-2 flex items-center justify-center transition-colors duration-300 ${
                        isActive ? 'bg-ink dark:bg-bone' : 'bg-muted/40 dark:bg-white/20'
                      }`}>
                        {isActive && <span className="w-1.5 h-1.5 bg-bone rounded-full" />}
                      </span>

                      <span className={`font-mono text-lg font-bold block transition-colors ${
                        isActive ? 'text-ink dark:text-bone' : 'text-muted dark:text-grey'
                      }`}>
                        {spec.value}
                      </span>
                      <span className={`text-[11px] leading-tight block mt-0.5 ${
                        isActive ? 'text-ink dark:text-bone font-semibold' : 'text-muted dark:text-grey'
                      }`}>
                        {spec.label}
                      </span>
                    </motion.div>
                  </div>
                )
              })}

            </div>
          </div>

          {/* Interactive Spec Detail Box (Desktop only, displays the description of hovered node) */}
          <div className="hidden 820:block min-h-[96px] mt-8 max-w-xl mx-auto border-t border-muted/10 dark:border-white/10 pt-6 text-center">
            <AnimatePresence mode="wait">
              {activeSpec !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-3"
                >
                  <p className="text-xs text-muted dark:text-grey leading-relaxed font-sans max-w-[55ch]">
                    {specs[activeSpec - 1].detail}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Specs List Fallback */}
          <div className="grid grid-cols-1 600:grid-cols-2 gap-x-6 gap-y-8 mt-4 820:hidden text-left">
            {specs.map((spec) => (
              <div key={spec.id} className="border-l border-muted/20 dark:border-white/15 pl-4">
                <span className="font-mono text-lg font-bold text-ink dark:text-bone block">
                  {spec.value}
                </span>
                <span className="text-xs font-semibold text-ink dark:text-bone block mt-1">
                  {spec.label}
                </span>
                <span className="text-[10px] text-muted dark:text-grey leading-relaxed block mt-1.5">
                  {spec.detail}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
