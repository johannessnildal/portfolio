'use client'
import Link from 'next/link'
import React from 'react'

import { Button } from '../ui/button'
import { Github, Mail } from 'lucide-react'
import MobileNavBar from './mobile-nav-bar'
import NavBarLinks from './nav-links'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


const NavBar = () => {
  return (
    <header className='w-full py-3 px-12 flex items-center gap-10 lg:gap-20 justify-between md:justify-evenly bg-zinc-950 bg-opacity-85 backdrop-blur border-b border-zinc-800'>
      <div className='flex flex-row gap-7 justify-center items-center'>
        <Link href='/'>
          <div className='mr-10 py-1.5'>
            <h1 className='font-extrabold font-serif text-xl underline underline-offset-4 decoration-zinc-400 hover:decoration-white decoration-dotted duration-300 ease-in-out'>JohannesS.</h1>
          </div>
        </Link>
        <Link href='/about'>
          <div className='hidden md:block opacity-70 hover:opacity-100 duration-300 ease-in-out font-light ml-8 xl:ml-14 2xl:ml-20'>
            <h1 className='text-sm'>About Me</h1>
          </div>
        </Link>
        <NavBarLinks />
      </div>

      <div className='hidden md:block'>
        <div className='flex flex-row gap-4'>
          
        <TooltipProvider>
            <Tooltip>
              <Button
                asChild 
                className='dark'
                variant='outline'
              >
                <TooltipTrigger>
                  <Link className='gap-2 flex flex-row items-center' href='mailto:johannes.snildal@gmail.com'>
                    <Mail size='16' />
                    <p className='hidden lg:block'>Contact Me</p>
                  </Link>
                </TooltipTrigger>
              </Button>
              <TooltipContent className='dark'>
                <p>Send me an email to get in touch</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <Button
                asChild 
                variant='default'
                className='dark'
              >
                <TooltipTrigger>
                  <Link className='gap-2 flex flex-row items-center' href='https://github.com/johannessnildal' target="_blank">
                  <Github size='16'/>
                    <p className='hidden lg:block'>Github</p>
                  </Link>
                </TooltipTrigger>
              </Button>
              <TooltipContent>
                <p>Check out my work on Github</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <MobileNavBar />

    </header>
  )
}

export default NavBar