import { motion } from 'framer-motion'

export default function EscapeSection() {
  return (
    <section className="py-28 bg-bone dark:bg-ink text-ink dark:text-bone transition-colors duration-300 overflow-hidden relative">
      {/* Orange gradient bottom-left */}
      <div className="absolute bottom-0 left-0 w-72 h-72 760:w-96 760:h-96 pointer-events-none z-0">
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-orange-400/20 via-orange-500/10 to-transparent blur-3xl" />
      </div>
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="font-sans text-5xl 760:text-7xl 900:text-8xl font-semibold tracking-tight leading-tight"
        >
          Escape{' '}
          <span className="inline-block h-10 760:h-14 900:h-16 w-28 760:w-36 900:w-44 rounded-full overflow-hidden align-middle -mt-1 border-2 border-ink/10 dark:border-bone/10 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80"
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </span>
          <br />the<br />generic<br />AI{' '}
          <span className="inline-block h-10 760:h-14 900:h-16 w-28 760:w-36 900:w-44 rounded-full overflow-hidden align-middle -mt-1 border-2 border-ink/10 dark:border-bone/10 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </span>
          <br />slop.
        </motion.p>
      </div>
    </section>
  )
}
