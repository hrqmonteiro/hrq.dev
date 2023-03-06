'use client'

import NextLink from 'next/link'
import { ArrowRight } from 'phosphor-react'
import { useState } from 'react'
import type { LinkProps } from './types'

export default function Link({
  href,
  rel,
  size,
  target,
  text,
  variant
}: LinkProps) {
  const [hovering, setHovering] = useState<boolean>(false)

  return (
    <NextLink
      className={`inline-flex items-center text-${variant}`}
      href={href}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      rel={rel}
      target={target}
    >
      <span
        className={
          hovering
            ? `mx-0.5 text-secondary text-${size}`
            : `mx-0.5 text-${size}`
        }
      >
        {text}
      </span>
      {target && target === '_blank' ? (
        <ArrowRight
          className={
            hovering
              ? `transform -rotate-45 text-tertiary text-${size}`
              : `text-secondary text-${size}`
          }
        />
      ) : (
        <ArrowRight
          className={
            hovering
              ? `transform translate-x-1 text-tertiary text-${size}`
              : `text-secondary text-${size}`
          }
        />
      )}
    </NextLink>
  )
}
