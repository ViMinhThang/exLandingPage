import { Zap } from 'lucide-react'

export default function Marquee() {
  const items = [
    { icon: Zap, text: 'Context 128K full codebase' },
    { icon: Zap, text: 'Smart multi-file editing' },
    { icon: Zap, text: 'Terminal automation' },
    { icon: Zap, text: '200+ languages supported' },
    { icon: Zap, text: 'Smart Git integration' },
    { icon: Zap, text: 'End-to-end encrypted — private' },
  ]

  const marqueeItems = [...items, ...items, ...items, ...items]

  return (
    <div className="w-full py-4 border-t border-b border-black/10 dark:border-white/10 bg-bone-dim dark:bg-ink-soft overflow-hidden z-20 relative transition-colors duration-300">
      <div className="animate-marquee flex items-center gap-12 select-none">
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4 whitespace-nowrap">
            <item.icon size={12} strokeWidth={2} className="text-muted dark:text-grey shrink-0" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted dark:text-grey">
              {item.text}
            </span>
            <span className="w-1 h-1 rounded-full bg-muted/30 dark:bg-white/20" />
          </div>
        ))}
      </div>
    </div>
  )
}
