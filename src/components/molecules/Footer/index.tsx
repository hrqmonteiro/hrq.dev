'use client'

import { Clock, Container } from 'components/atoms'
import { useTheme } from 'next-themes'
import { Moon } from 'phosphor-react'

export default function Footer() {
  const { theme, setTheme, systemTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <div className='w-full py-6 border-t-1 border-t-secondary flex justify-center'>
      <div className='w-screen-lg text-tertiary flex flex-nowrap justify-between'>
        <Clock />
        <button
          onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
        >
          <Moon />
        </button>
      </div>
    </div>
  )
}
