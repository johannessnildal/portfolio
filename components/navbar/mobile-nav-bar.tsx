import React from 'react'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

import { Button } from '../ui/button'
import { Github, Mail, Menu } from 'lucide-react'
import Link from 'next/link'

const MobileNavBar = () => {
  return (
    <div className='block md:hidden lg:hidden z-50'>
    <Sheet>
      <SheetTrigger asChild className='dark'>
        <Button variant='outline'>
          <Menu size='24' />
        </Button>
      </SheetTrigger>
      <SheetContent className='dark w-[300px] sm:w-[400px]' side='left'>
        <SheetHeader className='flex items-center'>
          <SheetTitle className='font-extrabold font-serif text-xl underline underline-offset-4 decoration-zinc-400 decoration-dotted'>JohannesS.</SheetTitle>
        </SheetHeader>
      <div className='flex flex-col gap-8 mt-10 items-center justify-center'>
        <Link href='/about'>
          <Button variant='link'>About me</Button>
        </Link>
        <Popover>
          <PopoverTrigger>
            <Button variant='link'>Projects</Button>
          </PopoverTrigger>
          <PopoverContent className='dark w-[200px]'>
            <ul className='flex flex-col gap-3 justify-center items-center'>
              <li className='text-sm opacity-70 active:opacity-100'>
                <Link href='/'>
                  Yoom
                </Link>
              </li>
              <li className='text-sm opacity-70 active:opacity-100'>
                <Link href='/'>
                  Manage
                </Link>
              </li>
              <li className='text-sm'>
                <Link href='/projects'>
                  View all
                </Link>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger>
            <Button variant='link'>Tech</Button>
          </PopoverTrigger>
          <PopoverContent className='dark w-[200px]'>
            <ul className='flex flex-col gap-3 justify-center items-center'>
            <li className='text-sm opacity-70'>
                <Link href='https://nextjs.org/' target='blank'>
                  Next.js
                </Link>
              </li>
              <li className='text-sm opacity-70'>
                <Link href='https://tailwindcss.com/' target='blank'>
                  Tailwind
                </Link>
              </li>
              <li className='text-sm opacity-70'>
                <Link href='https://ui.shadcn.com/' target='blank'>
                  Shadcn/ui
                </Link>
              </li>
              <li className='text-sm opacity-70'>
                <Link href='https://www.mongodb.com/' target='blank'>
                  MongoDB
                </Link>
              </li>
              <li className='text-sm opacity-70'>
                <Link href='https://vercel.com/' target='blank'>
                  Vercel
                </Link>
              </li>
              <li className='text-sm'>
                <Link href='/tools'>
                  View all
                </Link>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      </div>
      <div className='flex flex-col gap-4 mt-24 items-center justify-center'>
          <Button asChild className='dark m-auto' variant='outline'>
            <Link className='gap-2' href='mailto:johannessnildal@gmail.com'>
              <Mail size='16' />
              <p>Contact Me</p>
            </Link>
          </Button>
          <Button asChild className='dark m-auto' variant='default'>
            <Link className='gap-2' href='https://github.com/johannessnildal'>
              <Github size='16' />
              <p>My GitHub</p>
            </Link>
          </Button>
      </div>
      </SheetContent>
    </Sheet>    
  </div>
  )
}

export default MobileNavBar