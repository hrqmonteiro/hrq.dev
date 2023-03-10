'use client'

import { ArrowUpRight } from 'phosphor-react'
import { useState } from 'react'
import type { CardProps } from './types'

export default function Card({ src }: CardProps) {
  const [hovering, setHovering] = useState<boolean>(false)

  return (
    <button
      className='w-82 h-82 lg:w-58 lg:h-58'
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        className={`w-full h-full filter ${
          hovering ? 'grayscale-0 blur-0' : 'grayscale blur-1'
        }`}
        style={{
          backgroundImage: `url('${src}')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        {/* <img alt={title} src={src} /> */}
      </div>

      <div
        className={`relative -top-10 left-1 bg-primary w-8 h-8 rounded-full flex justify-center items-center ${
          hovering ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ArrowUpRight className='text-secondary text-sm' />
      </div>
    </button>
  )
}
