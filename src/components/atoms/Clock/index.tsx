'use client'

import { useEffect, useState } from 'react'

export default function Clock() {
  const [time, setTime] = useState<Date>(new Date())

  useEffect(() => {
    const timeId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timeId)
  }, [time])

  return <div>{time.toLocaleTimeString('pt-br', { hour12: false })}</div>
}
