'use client'

import { useEffect, useState } from 'react'

export default function Clock() {
  const [clock, setClock] = useState<Date>(new Date())
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setIsLoading(true)

    const timeId = setInterval(() => {
      setClock(new Date())
    }, 1000)

    setIsLoading(false)

    return () => clearInterval(timeId)
  }, [])

  return isLoading ? null : (
    <span className='text-sm'>
      São Paulo, Brazil · {clock.toLocaleTimeString('pt-br', { hour12: true })}
    </span>
  )
}
