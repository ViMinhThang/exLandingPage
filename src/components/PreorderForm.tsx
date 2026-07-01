import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, AlertTriangle, LoaderCircle } from 'lucide-react'

export default function PreorderForm() {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [scale, setScale] = useState('')
  const [consent, setConsent] = useState(false)
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!fullname || !email || !consent) {
      setStatus('error')
      setStatusMessage('Please fill in your full name, provide a valid email, and agree to the terms.')
      return
    }

    setStatus('loading')

    // Simulate CRM submission (1.5s delay)
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email.toLowerCase() === 'error@example.com') {
            reject(new Error('Network error'))
          } else {
            resolve(true)
          }
        }, 1500)
      })

      setStatus('success')
      setStatusMessage("Thank you! You've joined the waitlist — please check your email to confirm.")
      setFullname('')
      setEmail('')
      setScale('')
      setConsent(false)
    } catch {
      setStatus('error')
      setStatusMessage('Could not submit right now. Please try again or email us directly.')
    }
  }

  return (
    <section id="signup" className="py-24 bg-[linear-gradient(180deg,_var(--color-bone-dim)_0%,_var(--color-bone)_100%)] dark:bg-[linear-gradient(180deg,_var(--color-ink)_0%,_var(--color-ink-soft)_100%)] border-t border-black/10 dark:border-white/10 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 860:grid-cols-12 gap-12 860:gap-8 items-center">
          
          {/* Left copy column */}
          <div className="860:col-span-6 text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-ink dark:bg-bone"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-grey">Sign Up</span>
            </div>
            
            <h2 className="font-sans text-4xl 860:text-5xl font-semibold tracking-tight text-ink dark:text-bone mb-6 leading-tight">
              Try EXCELSIOR.<br />Free for 14 days.
            </h2>
            
            <p className="text-base text-grey leading-relaxed max-w-[45ch]">
              Leave your email — you'll receive the beta download link with setup instructions within 24 hours. No credit card required.
            </p>
          </div>

          {/* Right form card column */}
          <div className="860:col-span-6">
            <div className="card-glass rounded-xl p-8 760:p-10 relative overflow-hidden">
              
              <form onSubmit={handleSubmit} className="space-y-6 text-left" noValidate>
                {/* Full name */}
                <div className="flex flex-col gap-2 group">
                  <label htmlFor="fullname" className="font-mono text-[10px] uppercase tracking-wider text-grey group-focus-within:text-ink dark:group-focus-within:text-bone transition-colors duration-200">
                    Full name
                  </label>
                  <div className="relative">
                    <div className="absolute -inset-0.5 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-ink/10 dark:from-bone/10 to-transparent blur-sm pointer-events-none" />
                    <input
                      type="text"
                      id="fullname"
                      placeholder="John Doe"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      disabled={status === 'loading'}
                      className="relative w-full bg-white dark:bg-ink border border-black/10 dark:border-white/10 rounded-xl px-4 py-3.5 text-ink dark:text-bone font-sans placeholder:text-black/20 dark:placeholder:text-white/20 focus:border-ink dark:focus:border-bone focus:outline-none transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2 group">
                  <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-wider text-grey group-focus-within:text-ink dark:group-focus-within:text-bone transition-colors duration-200">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute -inset-0.5 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-ink/10 dark:from-bone/10 to-transparent blur-sm pointer-events-none" />
                    <input
                      type="email"
                      id="email"
                      placeholder="you@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === 'loading'}
                      className="relative w-full bg-white dark:bg-ink border border-black/10 dark:border-white/10 rounded-xl px-4 py-3.5 text-ink dark:text-bone font-sans placeholder:text-black/20 dark:placeholder:text-white/20 focus:border-ink dark:focus:border-bone focus:outline-none transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                {/* Scale */}
                <div className="flex flex-col gap-2 group">
                  <label htmlFor="scale" className="font-mono text-[10px] uppercase tracking-wider text-grey group-focus-within:text-ink dark:group-focus-within:text-bone transition-colors duration-200">
                    Team size
                  </label>
                  <div className="relative">
                    <div className="absolute -inset-0.5 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-ink/10 dark:from-bone/10 to-transparent blur-sm pointer-events-none" />
                    <select
                      id="scale"
                      value={scale}
                      onChange={(e) => setScale(e.target.value)}
                      disabled={status === 'loading'}
                      className="relative w-full bg-white dark:bg-ink border border-black/10 dark:border-white/10 rounded-xl px-4 py-3.5 text-ink dark:text-bone font-sans focus:border-ink-muted focus:outline-none transition-all duration-200 appearance-none"
                      style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%238A8580\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'/%3E%3C/svg%3E")', backgroundPosition: 'right 16px center', backgroundSize: '16px', backgroundRepeat: 'no-repeat' }}
                    >
                      <option value="">Individual / Select later</option>
                      <option value="1">1 developer</option>
                      <option value="2-5">2–5 developers</option>
                      <option value="6-20">6–20 developers</option>
                      <option value="20+">20+ developers</option>
                    </select>
                  </div>
                </div>

                {/* Consent checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    disabled={status === 'loading'}
                    className="mt-1 accent-ink-muted rounded border-black/20 dark:border-white/10 bg-white dark:bg-ink cursor-pointer focus:ring-0"
                    required
                  />
                  <label htmlFor="consent" className="text-xs text-grey leading-relaxed cursor-pointer select-none">
                    I agree to receive update emails from EXCELSIOR. I can unsubscribe at any time.
                  </label>
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ y: status === 'loading' ? 0 : -1 }}
                  whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                  className="w-full py-4 bg-ink dark:bg-bone text-bone dark:text-ink font-semibold rounded-xl text-sm tracking-wide transition-colors duration-200 hover:bg-ink-soft dark:hover:bg-bone-dim disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <LoaderCircle size={18} className="animate-spin" />
                      Processing...
                    </>
                  ) : (
                    'Get early access'
                  )}
                </motion.button>

                {/* Alerts / Status Message */}
                <AnimatePresence mode="wait">
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 bg-muted/10 border border-muted/20 rounded-xl flex items-start gap-3 text-muted-soft text-xs"
                    >
                      <CheckCircle size={18} className="shrink-0 text-muted-soft mt-0.5" />
                      <span>{statusMessage}</span>
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 bg-red-950/20 border border-red-900/30 rounded-xl flex items-start gap-3 text-red-400 text-xs"
                    >
                      <AlertTriangle size={18} className="shrink-0 text-red-400 mt-0.5" />
                      <span>{statusMessage}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Footer fine print */}
                <p className="font-sans text-[10px] text-muted leading-relaxed text-center">
                  No spam. Data is securely sent to our CRM system and never shared with third parties.
                </p>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
