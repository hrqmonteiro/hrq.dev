'use client'

import Link from 'next/link'
import { Container } from 'components/atoms'
import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'
import { useState } from 'react'

const socials: Array<object> = [
  {
    name: 'GitHub',
    link: 'https://github.com.com/hrqmonteiro',
    icon: <GithubLogo />
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com/hrqmonteiro',
    icon: <InstagramLogo />
  },
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com/in/hrqmonteiro',
    icon: <LinkedinLogo />
  },
  {
    name: 'Contact',
    link: '#contact',
    icon: <span className='lowercase font-medium text-sm'>Contact me</span>
  }
]

export default function Navbar() {
  const [activeLink, setActiveLink] = useState<string>('')
  const [opacityActive, setOpacityActive] = useState<string>('opacity-95')
  const [opacityInactive, setOpacityInactive] = useState<string>('opacity-95')

  return (
    <nav className='absolute w-full top-0 my-4 md:my-14 lg:my-24 flex items-center h-20'>
      <Container>
        <ul className='inline-flex items-center justify-end w-full'>
          {socials.map((social: any) => (
            <li key={social.name}>
              <Link
                className={`ml-10 text-xl flex items-center ${
                  activeLink === social.name ? opacityActive : opacityInactive
                }`}
                href={social.link}
                onMouseEnter={() => {
                  setActiveLink(social.name)
                  setOpacityActive('opacity-95')
                  setOpacityInactive('opacity-50 filter blur-1')
                }}
                onMouseLeave={() => {
                  setActiveLink('')
                  setOpacityActive('opacity-95')
                  setOpacityInactive('opacity-95')
                }}
                target='_blank'
              >
                {social.icon}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  )
}
