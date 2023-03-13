'use client'

import s from './page.module.css'
import NextLink from 'next/link'
import { Fira_Code } from 'next/font/google'
import { Card, Link } from 'components/atoms'
import { Buildings, Cube, Flask, PenNib, Stack } from 'phosphor-react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from 'framer-motion'
import { portfolio } from 'utils/constants'
import { useEffect, useRef } from 'react'

const firaCode = Fira_Code({
  subsets: ['latin'],
  style: ['normal']
})

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [0, -distance])
}

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const x = useParallax(scrollYProgress, 300)

  return (
    <main className='flex flex-wrap items-center justify-center'>
      <div className='min-h-screen flex flex-wrap content-center'>
        <div className='container max-w-screen-md mx-auto px-6 flex justify-start'>
          <motion.h1
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -50, opacity: 0 }}
            className='text-xl md:text-4xl lg:text-4xl font-medium'
            transition={{ duration: 3, delay: 0, type: 'spring' }}
          >
            Henrique Monteiro.
          </motion.h1>
        </div>
        <div className='w-full flex flex-wrap justify-center'>
          <div>
            <motion.h2
              animate={{ x: 0, opacity: 1 }}
              className='w-full text-4xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-10xl flex flex-nowrap justify-start md:justify-start lg:justify-center font-extrabold my-10'
              initial={{ x: -1000, opacity: 0 }}
              style={{ x }}
              transition={{
                duration: 3,
                delay: 0,
                type: 'spring'
              }}
            >
              full stack developer
            </motion.h2>
          </div>
        </div>
        <div className='container max-w-screen-md mx-auto px-6 flex justify-start'>
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 500, opacity: 0 }}
            transition={{
              duration: 3,
              delay: 0,
              type: 'spring'
            }}
          >
            <div className='text-quartiary font-medium text-xs uppercase mb-6'>
              TL;DR
            </div>
            <p className='text-justify text-xl lg:Text-2xl'>
              I&apos;m a{' '}
              <span className={firaCode.className}>
                <span className='italic'>programming</span>
              </span>
              -oriented <Cube className='icon' /> problem solver from Brazil.
              Crafting end-to-end tested and stressed <Flask className='icon' />{' '}
              enterprise-graded <Buildings className='icon' /> software.
              Painting <PenNib className='icon' /> beautiful user interfaces.
              <br />
              Full-TypeScript <Stack className='icon' /> stack evangelist.
              <br />
              Currently Lead Frontend Developer at{' '}
              <Link
                href='https://assessoriamedica.lav.app.br'
                rel='noreferrer'
                size='base'
                target='_blank'
                text='LAV'
                variant='tertiary'
              />{' '}
              and Full-Stack Developer at{' '}
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
          </motion.div>
        </div>
      </div>
      <div>
        <ul className='flex flex-wrap mt-8 justify-start'>
          {portfolio.slice(0, 4).map((link: any, index: number) => (
            <li className={s.card} key={index}>
              <NextLink href={link.url} target='_blank' rel='noreferrer'>
                <Card src={link.img} title={link.name} />
              </NextLink>
            </li>
          ))}
        </ul>
        <div className='my-8 flex justify-start lg:justify-end'>
          <Link href='/work' size='xl' text='See more' variant='tertiary' />
        </div>
      </div>
    </main>
  )
}
