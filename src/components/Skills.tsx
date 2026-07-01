import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  Paintbrush, History, Brain, Image, RotateCcw, Feather,
  CheckCircle, Minus, Triangle, Layout, Globe, Smartphone, Crown,
} from 'lucide-react'

const icons = [
  Paintbrush, History, Brain, Image, RotateCcw, Feather,
  CheckCircle, Minus, Triangle, Layout, Globe, Smartphone, Crown,
]

const skills = [
  { name: 'taste-skill v2 experimental', tag: 'Design', desc: 'Reads the brief, infers the right design direction, and ships interfaces that do not look templated.' },
  { name: 'taste-skill-v1 Legacy', tag: 'Design', desc: 'The original v1 of taste-skill, preserved for projects depending on its exact behavior.' },
  { name: 'gpt-tasteskill', tag: 'GPT/Codex', desc: 'Stricter variant for GPT and Codex models with stronger layout variance and motion direction.' },
  { name: 'image-to-code-skill', tag: 'Image-first', desc: 'Generates design references first, analyzes them deeply, then implements the frontend closely.' },
  { name: 'redesign-skill', tag: 'Audit', desc: 'For existing projects that need a proper visual audit and cleaner redesign pass.' },
  { name: 'soft-skill', tag: 'Visual style', desc: 'For calm, expensive-looking interfaces with softer contrast, whitespace, and smooth motion.' },
  { name: 'output-skill', tag: 'Execution', desc: 'Keeps outputs complete. Prevents placeholders, skipped sections, and unfinished work.' },
  { name: 'minimalist-skill', tag: 'Visual style', desc: 'Cleaner editorial product UI with restrained color, sharp structure, and tighter hierarchy.' },
  { name: 'brutalist-skill', tag: 'Visual style', desc: 'Harder mechanical visual language: Swiss typography, raw structure, and sharper contrast.' },
  { name: 'stitch-skill', tag: 'Export', desc: 'Google Stitch-compatible semantic design rules with an extra DESIGN.md export format.' },
  { name: 'imagegen-frontend-web', tag: 'Image gen', desc: 'Premium website reference images: strong art direction, typography, spacing, and anti-slop discipline.' },
  { name: 'imagegen-frontend-mobile', tag: 'Image gen', desc: 'Premium mobile screen concepts and flows with clean hierarchy and multi-screen consistency.' },
  { name: 'brandkit', tag: 'Image gen', desc: 'Brand-kit overview images with logo concepts, color systems, typography, and mockups.' },
]

const skillImages = ['/skillsection1.avif', '/skillsection2.avif', '/skillsection3.avif', '/skillsection4.avif']

export default function Skills() {
  return (
    <section className="py-20 -mt-20 bg-bone dark:bg-ink text-ink dark:text-bone transition-colors duration-300 relative z-10 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/cleanstone.avif"
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-bone/80 dark:bg-ink/80" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-12"
        >
          <h2 className="font-sans text-5xl 760:text-7xl 900:text-[96px] font-semibold tracking-tight text-ink dark:text-bone mb-3 leading-none">
            Current skills.
          </h2>
          <p className="text-2xl text-grey leading-relaxed max-w-[50ch]">
            Pick the right skill for the job.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 900:grid-cols-12 gap-8 items-start">
          {/* Left: 3-column grid */}
          <div className="900:col-span-7 grid grid-cols-1 600:grid-cols-2 820:grid-cols-3 gap-4">
            {skills.map((skill, i) => {
              const Icon = icons[i]
              return (
                <SkillCard key={skill.name} skill={skill} icon={Icon} index={i} />
              )
            })}
          </div>

          {/* Right: Images flex column */}
          <div className="900:col-span-5 flex flex-col">
            {skillImages.map((src, i) => (
              <motion.img
                key={src}
                src={src}
                alt=""
                loading="lazy"
                decoding="async"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className={`w-full max-h-96 object-contain rounded-xl translate-y-1 ${i % 2 === 0 ? '-rotate-[5deg]' : 'rotate-[5deg]'} ${i > 0 ? '-mt-32 relative' : ''} hover:z-10`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillCard({ skill, icon: Icon, index }: { skill: typeof skills[number]; icon: any; index: number }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 250, damping: 25 })
  const springY = useSpring(y, { stiffness: 250, damping: 25 })
  const rotateX = useTransform(springY, [-0.5, 0.5], ['5deg', '-5deg'])
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-5deg', '5deg'])

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
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, type: 'spring', stiffness: 120, damping: 16 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 800, rotateX, rotateY }}
      className="card-glass rounded-xl p-5 flex flex-col group cursor-default"
    >
      <span className="flex justify-center text-ink dark:text-bone mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon size={36} strokeWidth={1.5} />
      </span>
      <span className="font-mono text-[10px] uppercase tracking-wider text-grey px-2 py-0.5 bg-black/3 dark:bg-white/5 rounded-full self-start mb-2">
        {skill.tag}
      </span>
                  <h3 className="font-sans text-[15px] font-semibold text-ink dark:text-bone mb-1 leading-snug">
                    {skill.name}
                  </h3>
      <p className="text-[12px] text-grey leading-relaxed">
        {skill.desc}
      </p>
    </motion.div>
  )
}
