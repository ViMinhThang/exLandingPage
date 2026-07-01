import { motion } from 'framer-motion'
import { Quote, BarChart3 } from 'lucide-react'

export default function Story() {
  return (
    <section className="py-24 bg-bone dark:bg-ink text-ink dark:text-bone relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left testimonial quote */}
          <div className="lg:col-span-6 text-left flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="h-px w-6 bg-ink dark:bg-bone"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-grey flex items-center gap-1.5">
                <Quote size={12} strokeWidth={2} /> Real experience
              </span>
            </motion.div>
            
            <motion.blockquote 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-sans text-2xl md:text-3.5xl font-medium italic text-ink dark:text-bone leading-relaxed"
            >
              "It took me 3 days to refactor the auth module. EXCELSIOR did it in <span className="text-ink dark:text-bone not-italic font-semibold">3 minutes</span> — and the code was cleaner than if I'd written it myself."
            </motion.blockquote>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-mono text-xs text-grey uppercase tracking-widest mt-8"
            >
              Lead Developer · 6 months in
            </motion.p>
          </div>

          {/* Right visual chart panel */}
          <div className="lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-glass rounded-xl p-8 flex flex-col justify-between aspect-[4/3] w-full"
            >
              {/* Header metrics */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-grey flex items-center gap-1.5">
                    <BarChart3 size={12} strokeWidth={2} /> Dev performance
                  </span>
                  <span className="font-sans text-sm font-semibold text-ink dark:text-bone block mt-1">Task completion time (hours)</span>
                </div>
                <motion.span
                  className="h-2 w-2 rounded-full bg-ink dark:bg-bone"
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                />
              </div>

              {/* Chart container */}
              <div className="w-full flex-grow flex items-center justify-center my-4 relative h-36">
                <svg viewBox="0 0 300 120" preserveAspectRatio="none" className="w-full h-full">
                  {/* Grid lines */}
                  <line x1="0" y1="30" x2="300" y2="30" className="stroke-black/5 dark:stroke-white/3" strokeWidth="1" />
                  <line x1="0" y1="60" x2="300" y2="60" className="stroke-black/5 dark:stroke-white/3" strokeWidth="1" />
                  <line x1="0" y1="90" x2="300" y2="90" className="stroke-black/5 dark:stroke-white/3" strokeWidth="1" />
                  <line x1="0" y1="110" x2="300" y2="110" className="stroke-black/10 dark:stroke-white/10" strokeWidth="1" />

                  {/* Shading under curve */}
                  <defs>
                    <linearGradient id="chart-area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#666666" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#666666" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Chart fill path */}
                  <motion.path 
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 1.5, ease: "easeOut" }}
                    d="M0,90 Q30,70 60,80 T120,55 T180,35 T240,30 T300,25 L300,110 L0,110 Z" 
                    fill="url(#chart-area)"
                  />

                  {/* Chart line path */}
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 1.5, ease: "easeOut" }}
                    d="M0,90 Q30,70 60,80 T120,55 T180,35 T240,30 T300,25" 
                    fill="none" 
                    stroke="#666666" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />

                  {/* Data points */}
                  <motion.circle 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2, type: "spring" }}
                    cx="180" cy="35" r="4" fill="#666666" className="stroke-bone dark:stroke-ink" strokeWidth="1" 
                  />
                  <motion.circle 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.4, type: "spring" }}
                    cx="300" cy="25" r="4" fill="#666666" className="stroke-bone dark:stroke-ink" strokeWidth="1" 
                  />
                </svg>
              </div>

              {/* Stat metrics row */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-black/5 dark:border-white/5 w-full text-left">
                <div>
<span className="font-mono text-2xl font-bold text-ink dark:text-bone block">10x</span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-grey">Coding speed</span>
              </div>
              <div>
                <span className="font-mono text-2xl font-bold text-ink dark:text-bone block">60%</span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-grey">Review time reduced</span>
              </div>
              <div>
                <span className="font-mono text-2xl font-bold text-ink dark:text-bone block">0</span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-grey">Data stored</span>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
