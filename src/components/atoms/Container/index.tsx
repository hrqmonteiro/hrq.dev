'use client'

import type { ContainerProps } from './types'

export default function Container({ children }: ContainerProps) {
  return <div className='container mx-auto px-6'>{children}</div>
}
