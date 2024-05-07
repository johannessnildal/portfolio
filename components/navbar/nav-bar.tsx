'use client'
import Link from 'next/link'
import React from 'react'

import { Button } from '../ui/button'
import { Github, Mail } from 'lucide-react'
import MobileNavBar from './mobile-nav-bar'
import NavBarLinks from './nav-links'

const NavBar = () => {
  return (
    <header className='w-full py-3 px-12 flex items-center gap-20 justify-between md:justify-evenly sticky backdrop-blur border-b border-zinc-900'>
      <div className='flex flex-row justify-center items-center'>
        <Link href='/'>
          <div className='mr-10 py-1.5'>
            <h1 className='font-extrabold text-xl tracking-tight'>Johannes</h1>
          </div>
        </Link>
        <NavBarLinks />
      </div>

      <div className='hidden md:block'>
        <div className='flex flex-row gap-4'>
          <Button
            asChild 
            className='dark'
            variant='outline'
          >
            <Link className='gap-2' href='mailto:johannessnildal@gmail.com'>
              <Mail size='16' />
              <p>Contact Me</p>
            </Link>
          </Button>
          <Button
            asChild 
            variant='default'
            className='dark'
          >
            <Link className='gap-2' href='https://github.com/johannessnildal' target="_blank">
            <Github size='16'/>
              <p>Github</p>
            </Link>
          </Button>
        </div>
      </div>

      <MobileNavBar />

    </header>
  )
}

export default NavBar