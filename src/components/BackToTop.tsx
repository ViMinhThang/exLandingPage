import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#top"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.92 }}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-ink dark:bg-bone text-bone dark:text-ink shadow-md cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp size={18} strokeWidth={2.5} />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
