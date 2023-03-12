import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next']
  },
  shortcuts: {
    icon: 'text-lg md:text-xl lg:text-2xl transform translate-y-1'
  },
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        quartiary: 'var(--quartiary)'
      },
      borderColor: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        quartiary: 'var(--quartiary)'
      },
      textColor: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        quartiary: 'var(--quartiary)'
      }
    }
  }
})
