'use client'

import NextLink from 'next/link'
import { Fira_Code } from 'next/font/google'
import { Card, Link } from 'components/atoms'
import { Buildings, Cube, Flask, PenNib, Stack } from 'phosphor-react'
import { portfolio } from 'utils/constants'

const firaCode = Fira_Code({
  subsets: ['latin'],
  style: ['normal']
})

export default function Home() {
  return (
    <main className='min-h-screen flex flex-wrap items-center justify-center'>
      <div>
        <div className='flex justify-start mx-4 my-20 select-none'>
          <p className='text-2xl'>
            <span className='text-tertiary'>Henrique Monteiro</span>.{' '}
            <span className={firaCode.className}>
              <span className='italic'>programming</span>
            </span>
            -oriented <Cube className='icon' /> problem solver from Brazil.
            <br />
            Crafting end-to-end tested and stressed <Flask className='icon' />{' '}
            enterprise-graded <Buildings className='icon' /> software.
            <br />
            Painting <PenNib className='icon' /> beautiful user interfaces.
            Full-TypeScript <Stack className='icon' /> stack evangelist.
            <br />
            Currently Lead Frontend Developer at{' '}
            <Link
              href='https://laudoaudiovisual.com.br'
              rel='noreferrer'
              size='base'
              target='_blank'
              text='LAV'
              variant='tertiary'
            />{' '}
            and Systems Analyst at{' '}
            <Link
              href='https://minu.co'
              target='_blank'
              rel='noreferrer'
              size='base'
              text='Minu'
              variant='tertiary'
            />
            .
          </p>
        </div>
        <div className='mx-4 my-8'>
          <span className='text-xl'>Work</span>
        </div>
        <ul className='flex flex-wrap mt-8 justify-start'>
          {portfolio.slice(0, 3).map((link: any, index: number) => (
            <li className='mx-4' key={index}>
              <NextLink href={link.url} target='_blank' rel='noreferrer'>
                <Card src={link.img} title={link.name} />
              </NextLink>
            </li>
          ))}
        </ul>
        <div className='mx-4 flex justify-end -mt-4 mb-8'>
          <Link href='/work' size='xl' text='See more' variant='tertiary' />
        </div>
      </div>
    </main>
  )
}
