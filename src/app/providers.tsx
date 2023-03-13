'use client'

import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider disableTransitionOnChange>
      <AnimatePresence
        onExitComplete={() => {
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0 })
          }
        }}
        initial
        mode='wait'
      >
        {children}
      </AnimatePresence>
    </ThemeProvider>
  )
}
