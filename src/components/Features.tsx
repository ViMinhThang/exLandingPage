import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { 
  Files,
  Terminal,
  Code,
  Search,
  GitBranch,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

const features = [
  {
    icon: <Files size={20} strokeWidth={1.5} />,
    title: 'Multi-file Editing',
    desc: 'Edit multiple files at once — from renaming variables across your project to restructuring entire modules.',
  },
  {
    icon: <Terminal size={20} strokeWidth={1.5} />,
    title: 'Terminal AI',
    desc: 'Run commands, analyze errors, fix bugs automatically. No more copy-pasting errors into ChatGPT.',
  },
  {
    icon: <Code size={20} strokeWidth={1.5} />,
    title: 'Gen-4 Codegen',
    desc: 'Generate complete functions, components, API endpoints from natural language descriptions.',
  },
  {
    icon: <Search size={20} strokeWidth={1.5} />,
    title: 'Smart Review',
    desc: 'Static code analysis — catch bugs, vulnerabilities, and code smells before you commit.',
  },
  {
    icon: <GitBranch size={20} strokeWidth={1.5} />,
    title: 'Git Integration',
    desc: 'Auto-generate commit messages, analyze diffs, suggest branch strategies.',
  },
  {
    icon: <ShieldCheck size={20} strokeWidth={1.5} />,
    title: 'Privacy First',
    desc: 'End-to-end encryption, no code storage, no data sent externally without permission.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-bone dark:bg-ink text-ink dark:text-bone relative transition-colors duration-300 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/image.avif"
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-bone/85 dark:bg-ink/85" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 860:grid-cols-12 gap-12 860:gap-16 items-start">
          
          {/* Left: What's new */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="860:col-span-5 text-left"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-4 bg-ink dark:bg-bone"></span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-grey flex items-center gap-1.5">
                <Sparkles size={10} strokeWidth={2} /> What's new
              </span>
            </div>
            
            <h2 className="font-sans text-4xl 860:text-5xl font-semibold tracking-tight text-ink dark:text-bone mb-4 leading-tight">
              Code more.<br />Type less.
            </h2>
            
            <p className="text-sm text-grey leading-relaxed">
              Not a chatbot that retypes code. EXCELSIOR understands your entire project — from directory structure and dependencies to business logic — and acts directly on your codebase.
            </p>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 100, damping: 18 }}
              className="mt-8 p-4 card-glass rounded-lg border-l-2 border-ink dark:border-bone"
            >
              <p className="font-mono text-xs text-grey leading-relaxed">
                "It took me 3 days to refactor the auth module. EXCELSIOR did it in 3 minutes."
              </p>
              <p className="font-mono text-[10px] text-grey mt-2">— Lead Developer, 6 months in</p>
            </motion.div>
          </motion.div>

          {/* Right: Feature list */}
          <div className="860:col-span-7 flex flex-col gap-3">
            {features.map((feature, i) => (
              <FeatureCard key={i} feature={feature} index={i} />
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

function FeatureCard({ feature, index }: { feature: typeof features[number]; index: number }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 20 })
  const springY = useSpring(y, { stiffness: 200, damping: 20 })
  const rotateX = useTransform(springY, [-0.5, 0.5], ['6deg', '-6deg'])
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-6deg', '6deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const nx = (e.clientX - rect.left) / rect.width - 0.5
    const ny = (e.clientY - rect.top) / rect.height - 0.5
    x.set(nx)
    y.set(ny)
  }

  const handleMouseLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, type: 'spring', stiffness: 120, damping: 16 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ x: 4 }}
      style={{ perspective: 800, rotateX, rotateY }}
      className="card-glass rounded-lg p-5 flex items-start gap-4 group cursor-pointer"
    >
      <span className="shrink-0 mt-0.5 text-ink dark:text-bone group-hover:scale-110 transition-transform duration-300">
        {feature.icon}
      </span>
      <div>
        <h3 className="font-sans text-base font-semibold text-ink dark:text-bone mb-0.5">
          {feature.title}
        </h3>
        <p className="text-sm text-grey leading-relaxed">
          {feature.desc}
        </p>
      </div>
    </motion.div>
  )
}
