'use client'

import type { ContainerProps } from './types'
import { motion } from 'framer-motion'

export default function Container({ children }: ContainerProps) {
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 100, opacity: 0 }}
      className='container max-w-screen-md mx-auto px-6'
      transition={{
        duration: 3,
        delay: 0,
        type: 'spring'
      }}
    >
      {children}
    </motion.div>
  )
}
