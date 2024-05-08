import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiShadcnui, SiVercel } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Image from 'next/image';
import YoomLogo from '/public/icons/yoomlogo.svg';

const Footer = () => {
  return (
    <section className='w-full h-fit bg-black border-t border-zinc-800 flex flex-col'>
      <div className='flex flex-col sm:flex-row justify-center pt-6 gap-10 sm:gap-[10vw] md:gap-[15vw] lg:gap-[30vw] xl:gap-[25vw] 2xl:gap-[20vw]'>
        <div className='flex flex-col gap-2'>
          <h1 className='font-extrabold text-xl tracking-tight text-center sm:text-left'>Johannes</h1>
          <p className='text-sm font-light text-zinc-400 text-center sm:text-left'>Welcome to my portfolio, showcasing <br /> my projects and the tools i use!</p>
        </div>
        <div className='flex flex-col text-center sm:text-left sm:flex-row gap-10 sm:gap-[100px] md:gap-[140px]'>
          <div className='flex flex-col gap-3'>
            <Link 
              href='/projects'
              className='text-zinc-400 hover:text-muted duration-300 ease-in-out'
            >
              My Projects
            </Link>
            <Link href='https://yoom-liart-delta.vercel.app/' target='blank' className='w-fit flex self-center'>
              <div className='bg-zinc-950 hover:bg-zinc-800 duration-100 ease-in-out rounded-md border-solid border-[1px] border-zinc-700'>
                <div className='flex flex-row gap-3 items-center justify-start px-4 py-2'>
                  <Image src={YoomLogo} width={26} height={26} alt='Yoom'/>
                  <h1 className='text-sm'>Yoom</h1>
                </div>
              </div>
            </Link>
          </div>

          <div className='flex flex-col gap-4'>
            <Link href='/tools'
              className='text-zinc-400 hover:text-muted duration-300 ease-in-out'
            >Tech Stack</Link>
            <ul className='flex flex-col gap-3 items-center sm:items-start'>
              <Link href='https://nextjs.org/' target='blank'><li className='flex flex-row gap-2 text-sm hover:text-zinc-400 duration-300 ease-in-out'>Next.js<RiNextjsFill size='20' /></li></Link>
              <Link href='https://tailwindcss.com/' target='blank'><li className='flex flex-row gap-2 text-sm hover:text-zinc-400 duration-300 ease-in-out'>Tailwind<RiTailwindCssFill size='18' /></li></Link>
              <Link href='https://www.mongodb.com/' target='blank'><li className='flex flex-row gap-1 text-sm hover:text-zinc-400 duration-300 ease-in-out'>MongoDB<SiMongodb size='18'/></li></Link>
              <Link href='https://vercel.com/' target='blank'><li className='flex flex-row gap-2 text-sm hover:text-zinc-400 duration-300 ease-in-out'>Vercel<SiVercel size='16'/></li></Link>
              <li className='text-sm text-zinc-400'>And more...</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='w-[50vw] self-center border-t border-zinc-900 mt-14'></div>

      <div className='flex flex-row items-center justify-center gap-4 pt-10'>
        <Button className='dark rounded-full mx-0' variant='outline'>
          <Link href='https://github.com/johannessnildal' target='blank'><FaGithub size='22'/></Link>
        </Button>
        <Button className='dark rounded-full mx-0' variant='outline'>
          <Link href='mailto:johannessnildal@gmail.com'><MdEmail size='22'/></Link>
        </Button>
      </div>

      <div className='text-center'>
        <p className='text-sm text-zinc-500 py-6'>&copy; {new Date().getFullYear()} Johannes Snildal. All rights reserved.</p>
      </div>
    </section>
  )
}

export default Footer