import { Circle, Code2, MessageCircle, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-bone dark:bg-ink border-t border-black/10 dark:border-white/10 pt-16 pb-8 relative z-10 text-left transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Footer Top */}
        <div className="flex flex-col 900:flex-row 900:justify-between items-start gap-12 mb-16">
          <div className="max-w-xs">
            <a
              href="#top"
              className="flex items-center gap-2.5 font-sans text-xl font-bold tracking-tight text-ink dark:text-bone"
            >
              <Circle size={18} strokeWidth={2.5} className="text-ink dark:text-bone" />
              <span>EXCELSIOR</span>
            </a>
            <p className="text-xs text-grey leading-relaxed mt-4">
              An AI coding agent for those who want to code better — without typing more.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="text-grey hover:text-ink dark:hover:text-bone transition-colors" aria-label="GitHub">
                <Code2 size={16} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-grey hover:text-ink dark:hover:text-bone transition-colors" aria-label="Twitter">
                <MessageCircle size={16} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-grey hover:text-ink dark:hover:text-bone transition-colors" aria-label="Email">
                <Mail size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-16 gap-y-8 900:gap-x-24">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <h4 className="font-mono text-[10px] uppercase tracking-wider text-grey">Product</h4>
              <nav className="flex flex-col gap-2.5">
                <a href="#features" className="text-xs text-ink dark:text-bone hover:text-ink dark:hover:text-bone transition-colors">
                  Features
                </a>
                <a href="#specs" className="text-xs text-ink dark:text-bone hover:text-ink dark:hover:text-bone transition-colors">
                  Specs
                </a>
                <a href="#compare" className="text-xs text-ink dark:text-bone hover:text-ink dark:hover:text-bone transition-colors">
                  Compare
                </a>
              </nav>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <h4 className="font-mono text-[10px] uppercase tracking-wider text-grey">Company</h4>
              <nav className="flex flex-col gap-2.5">
                <a href="#" className="text-xs text-ink dark:text-bone hover:text-ink dark:hover:text-bone transition-colors">
                  About us
                </a>
                <a href="#" className="text-xs text-ink dark:text-bone hover:text-ink dark:hover:text-bone transition-colors">
                  Engineering blog
                </a>
                <a href="#" className="text-xs text-ink dark:text-bone hover:text-ink dark:hover:text-bone transition-colors">
                  Contact
                </a>
              </nav>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <h4 className="font-mono text-[10px] uppercase tracking-wider text-grey">Legal</h4>
              <nav className="flex flex-col gap-2.5">
                <a href="#" className="text-xs text-ink dark:text-bone hover:text-ink dark:hover:text-bone transition-colors">
                  Privacy policy
                </a>
                <a href="#" className="text-xs text-ink dark:text-bone hover:text-ink dark:hover:text-bone transition-colors">
                  Terms of service
                </a>
              </nav>
            </div>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col 600:flex-row justify-between items-center gap-4 pt-8 border-t border-black/5 dark:border-white/5 font-sans text-[11px] text-grey">
          <span>© 2026 EXCELSIOR. Demo product for educational purposes.</span>
          <span>Designed &amp; developed with React &amp; Tailwind CSS</span>
        </div>

      </div>
    </footer>
  )
}
