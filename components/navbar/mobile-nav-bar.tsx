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
import { Mail, Menu } from 'lucide-react'
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
          <SheetTitle className='mt-5 tracking-tight font-extrabold text-xl'>Johannes</SheetTitle>
        </SheetHeader>
      <div className='flex flex-col gap-8 mt-10 items-center justify-center'>
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
              <li className='text-sm opacity-40'>
                  More coming...
              </li>
            </ul>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger>
            <Button variant='link'>Tools</Button>
          </PopoverTrigger>
          <PopoverContent className='dark w-[200px]'>
            <ul className='flex flex-col gap-3 justify-center items-center'>
            <li className='text-sm opacity-70 active:opacity-100'>
                <Link href='/'>
                  Next.js
                </Link>
              </li>
              <li className='text-sm opacity-70 active:opacity-100'>
                <Link href='/'>
                  Tailwind
                </Link>
              </li>
              <li className='text-sm opacity-70 active:opacity-100'>
                <Link href='/'>
                  #
                </Link>
              </li>
              <li className='text-sm opacity-70 active:opacity-100'>
                <Link href='/'>
                  #
                </Link>
              </li>
              <li className='text-sm opacity-70 active:opacity-100'>
                <Link href='/'>
                  #
                </Link>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      </div>
      <div className='absolute inset-x-0 bottom-[10vh] flex items-center justify-center'>
        <Button asChild className='dark m-auto' variant='outline'>
          <Link className='gap-2' href='mailto:johannessnildal@gmail.com'>
            <Mail size='16' />
            <p>Contact Me</p>
          </Link>
        </Button>
      </div>
      </SheetContent>
    </Sheet>    
  </div>
  )
}

export default MobileNavBar