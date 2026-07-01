import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function Sponsor() {
  return (
    <section className="py-20 bg-bone dark:bg-ink text-ink dark:text-bone transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 text-left">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-2xl uppercase tracking-widest text-ink dark:text-bone mb-8 font-semibold"
        >
          Partners
        </motion.p>

        <div className="flex flex-col 600:flex-row items-start gap-8">
          <SponsorCard
            logo="/vscodeLogo.png"
            alt="VS Code"
            title="VS Code"
            subtitle="Official Extension"
            desc="The most popular code editor — seamlessly integrated with EXCELSIOR."
            delay={0.1}
          />
          <SponsorCard
            logo="/gitHubLogo.png"
            alt="GitHub"
            title="GitHub"
            subtitle="Native Integration"
            desc="Source code management platform — automate commits, reviews, and deploys via EXCELSIOR."
            delay={0.2}
          />
        </div>
      </div>
    </section>
  )
}

function SponsorCard({ logo, alt, title, subtitle, desc, delay }: {
  logo: string; alt: string; title: string; subtitle: string; desc: string; delay: number
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 20 })
  const springY = useSpring(y, { stiffness: 200, damping: 20 })
  const rotateX = useTransform(springY, [-0.5, 0.5], ['4deg', '-4deg'])
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-4deg', '4deg'])

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, type: 'spring', stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 800, rotateX, rotateY }}
      className="card-glass rounded-2xl px-12 py-10 w-full flex items-center gap-8 group cursor-default border-black/15 dark:border-white/15 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-ink/3 dark:from-bone/3 to-transparent" />
      </div>
      <img src={logo} alt={alt} width="80" height="80" loading="lazy" decoding="async" className="h-20 w-auto object-contain shrink-0 relative" />
      <div className="text-left relative">
        <p className="font-sans text-3xl font-semibold text-ink dark:text-bone">{title}</p>
        <p className="font-mono text-base text-ink/70 dark:text-bone/70">{subtitle}</p>
        <p className="text-sm text-grey mt-2 leading-relaxed max-w-[28ch]">{desc}</p>
      </div>
    </motion.div>
  )
}
