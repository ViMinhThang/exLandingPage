import { motion } from 'framer-motion'
import { Check, Minus, Gauge, GitFork, Terminal, Glasses, Languages, Shield } from 'lucide-react'

export default function Compare() {
  const tableData = [
    {
      metric: 'Context window',
      echopulse: '128K tokens',
      smartwatch: '8K–16K tokens',
      band: '4K–8K tokens',
      highlight: true
    },
    {
      metric: 'Multi-file editing',
      echopulse: true,
      smartwatch: false,
      band: true,
      highlight: false
    },
    {
      metric: 'Terminal automation',
      echopulse: true,
      smartwatch: false,
      band: false,
      highlight: false
    },
    {
      metric: 'Full codebase understanding',
      echopulse: true,
      smartwatch: false,
      band: false,
      highlight: false
    },
    {
      metric: 'Languages supported',
      echopulse: '200+',
      smartwatch: '50+',
      band: '20+',
      highlight: true
    },
    {
      metric: 'SOC 2 certified',
      echopulse: true,
      smartwatch: false,
      band: false,
      highlight: false
    }
  ]

  return (
    <section id="compare" className="py-24 bg-bone dark:bg-ink text-ink dark:text-bone relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Head */}
        <div className="max-w-3xl mb-16 text-left">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="h-px w-6 bg-ink dark:bg-bone"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-grey">Comparison</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-4xl 860:text-5xl font-semibold tracking-tight text-ink dark:text-bone mb-6"
          >
            Why choose EXCELSIOR?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-grey leading-relaxed max-w-[55ch]"
          >
            Other coding agents only see the file you have open. EXCELSIOR sees the entire project.
          </motion.p>
        </div>

        {/* Table Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full overflow-x-auto border border-black/10 dark:border-white/10 rounded-xl"
        >
          <table className="w-full min-w-[700px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-black/10 dark:border-white/10">
                <th className="p-6 font-mono text-xs uppercase tracking-wider text-grey font-medium">Criteria</th>
                <th className="p-6"></th>
                <th className="p-6 font-mono text-xs uppercase tracking-wider text-ink dark:text-bone font-bold bg-black/3 dark:bg-white/3">EXCELSIOR</th>
                <th className="p-6 font-mono text-xs uppercase tracking-wider text-grey font-medium">Copilot</th>
                <th className="p-6 font-mono text-xs uppercase tracking-wider text-grey font-medium">ChatGPT</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => {
                const icons = [<Gauge size={14} />, <GitFork size={14} />, <Terminal size={14} />, <Glasses size={14} />, <Languages size={14} />, <Shield size={14} />]
                return (
                <tr key={index} className="border-b border-black/5 dark:border-white/5 hover:bg-black/1 dark:hover:bg-white/1 transition-colors duration-200">
                  <td className="p-6 text-grey/60">{icons[index]}</td>
                  <td className="p-6 font-medium text-ink dark:text-bone-dim">{row.metric}</td>
                  
                  {/* EXCELSIOR highlighted value */}
                  <td className="p-6 font-semibold bg-black/3 dark:bg-white/3">
                    {typeof row.echopulse === 'boolean' ? (
                      row.echopulse ? (
                        <Check size={18} strokeWidth={2.5} className="text-ink dark:text-bone" />
                      ) : (
                        <Minus size={18} className="text-grey" />
                      )
                    ) : (
                      <span className="text-ink dark:text-bone font-semibold">{row.echopulse}</span>
                    )}
                  </td>
                  
                  {/* Copilot value */}
                  <td className="p-6 text-grey">
                    {typeof row.smartwatch === 'boolean' ? (
                      row.smartwatch ? (
                        <Check size={18} className="text-grey" />
                      ) : (
                        <Minus size={18} className="text-grey" />
                      )
                    ) : (
                      <span>{row.smartwatch}</span>
                    )}
                  </td>
                  
                  {/* ChatGPT value */}
                  <td className="p-6 text-grey">
                    {typeof row.band === 'boolean' ? (
                      row.band ? (
                        <Check size={18} className="text-grey" />
                      ) : (
                        <Minus size={18} className="text-grey" />
                      )
                    ) : (
                      <span>{row.band}</span>
                    )}
                  </td>
                </tr>
                )
              })}
            </tbody>
          </table>
        </motion.div>

      </div>
    </section>
  )
}
