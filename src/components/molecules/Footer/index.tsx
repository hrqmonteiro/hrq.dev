'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Clock, Container } from 'components/atoms'
import { Moon, Sun } from 'phosphor-react'

export default function Footer() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { theme, setTheme, systemTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return isLoading ? null : (
    <div className='w-full py-6 border-t-1 border-t-quartiary border-opacity-10 flex justify-center'>
      <Container>
        <div className='text-quartiary flex flex-nowrap justify-between'>
          <Clock />
          <button
            onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
          >
            {currentTheme === 'dark' ? <Sun /> : <Moon />}
          </button>
        </div>
      </Container>
    </div>
  )
}
