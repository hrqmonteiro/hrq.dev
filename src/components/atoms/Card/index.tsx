'use client'

import { ArrowUpRight } from 'phosphor-react'
import { useState } from 'react'
import type { CardProps } from './types'

export default function Card({ src, title }: CardProps) {
  const [hovering, setHovering] = useState<boolean>(false)

  return (
    <button
      className='h-92 w-92 lg:h-80 lg:w-80'
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
        <ArrowUpRight className='text-white text-sm' />
      </div>
    </button>
  )
}
