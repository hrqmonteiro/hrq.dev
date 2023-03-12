'use client'

import type { ContainerProps } from './types'

export default function Container({ children }: ContainerProps) {
  return (
    <div className='container max-w-screen-md mx-auto px-6'>{children}</div>
  )
}
