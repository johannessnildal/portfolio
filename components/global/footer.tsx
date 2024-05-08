import { Github, Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Footer = () => {
  return (
    <section className='w-full h-fit bg-black border-t border-zinc-800 flex flex-col'>
      <div className='flex flex-col sm:flex-row justify-center pt-6 gap-10 sm:gap-[30vw]'>
        <div>
          <h1 className='font-extrabold text-xl tracking-tight text-center'>Johannes</h1>
        </div>
        <div className='flex flex-col sm:flex-row gap-10 sm:gap-20 items-center'>
          <div>
            <Link href='/projects'
              className='text-zinc-400 hover:text-muted duration-300 ease-in-out'
            >Projects</Link>
          </div>
          <div>
            <Link href='/tools'
              className='text-zinc-400 hover:text-muted duration-300 ease-in-out'
            >Tech</Link>
          </div>
        </div>
      </div>

      <div className='w-[50vw] self-center border-t border-zinc-900 mt-14'></div>

      <div className='flex flex-row items-center justify-center gap-4 pt-10'>
        <Button className='dark rounded-full mx-0' variant='outline'>
          <Link href='https://github.com/johannessnildal' target='blank'><Github size={24}/></Link>
        </Button>
        <Button className='dark rounded-full mx-0' variant='outline'>
          <Link href='mailto:johannessnildal@gmail.com'><Mail size={24}/></Link>
        </Button>
      </div>

      <div className='text-center'>
        <p className='text-sm text-zinc-500 py-6'>&copy; {new Date().getFullYear()} Johannes Snildal. All rights reserved.</p>
      </div>
    </section>
  )
}

export default Footer