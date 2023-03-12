'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  CodepenLogo,
  DribbbleLogo,
  FigmaLogo,
  GithubLogo,
  GitlabLogo,
  InstagramLogo,
  LinkedinLogo,
  RedditLogo,
  TwitchLogo,
  TwitterLogo,
  YoutubeLogo
} from 'phosphor-react'
import { TbBrandLastfm } from 'react-icons/tb'
import { SlSocialSteam } from 'react-icons/sl'
import { RiMastodonLine } from 'react-icons/ri'

const socials: Array<object> = [
  {
    name: 'GitHub',
    icon: <GithubLogo />,
    url: 'https://github.com/hrqmonteiro'
  },

  {
    name: 'Instagram',
    icon: <InstagramLogo />,
    url: 'https://instagram.com/hrqmonteiro'
  },
  {
    name: 'LinkedIn',
    icon: <LinkedinLogo />,
    url: 'https://linkedin.com/in/hrqmonteiro'
  },
  {
    name: 'Steam',
    icon: <SlSocialSteam />,
    url: 'https://steamcommunity.com/id/hrqmonteiro'
  },
  {
    name: 'Twitch',
    icon: <TwitchLogo />,
    url: 'https://twitch.tv/hrqmonteiro'
  },
  {
    name: 'Twitter',
    icon: <TwitterLogo />,
    url: 'https://twitter.com/hrqmonteiro'
  },
  {
    name: 'YouTube',
    icon: <YoutubeLogo />,
    url: 'https://youtube.com/hrqmonteiro'
  }
]

export default function Socials() {
  const INITIAL_ICON_CLASSES = 'opacity-0'
  const [iconClasses, setIconClasses] = useState<string>(INITIAL_ICON_CLASSES)
  const [activeLink, setActiveLink] = useState<string>('')
  const [siblingActiveLink, setSiblingActiveLink] = useState<string>('')
  const [opacityActive, setOpacityActive] = useState<string>('opacity-95')
  const [opacityInactive, setOpacityInactive] = useState<string>('opacity-95')

  function handleMouseEnter({ target }: any) {
    setActiveLink(target?.textContent)
    setSiblingActiveLink(target?.parentElement?.parentNode.textContent)
    setOpacityActive('opacity-95')
    setOpacityInactive('opacity-50 filter blur-1')
    setIconClasses('opacity-95')
  }

  function handleMouseLeave() {
    setActiveLink('')
    setSiblingActiveLink('')
    setOpacityActive('opacity-95')
    setOpacityInactive('opacity-95')
    setIconClasses(INITIAL_ICON_CLASSES)
  }

  return (
    <ul className='inline-flex my-6'>
      {socials.map(({ name, icon, url }: any) => (
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className='mr-2'
          key={name}
        >
          <Link
            className='text-sm flex flex-wrap lg:flex-nowrap items-center'
            href={url}
          >
            <span
              className={`${
                activeLink === name || siblingActiveLink === name
                  ? opacityActive
                  : opacityInactive
              }`}
            >
              {name}
            </span>
            <div
              className={`flex items-center ml-1 opacity-0 flex items-center ${
                (activeLink === name || siblingActiveLink === name) &&
                iconClasses
              }`}
            >
              {icon}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
