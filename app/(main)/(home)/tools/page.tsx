import React from 'react'
import { FaDatabase } from 'react-icons/fa'

import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiAppwrite, SiClerk, SiCss3, SiDjango, SiExpress, SiHtml5, SiJavascript, SiMongodb, SiPython, SiReact, SiShadcnui, SiSupabase, SiVercel } from 'react-icons/si'

const ToolsPage = () => {
  return (
    <section>
      <div className='text-center flex flex-col gap-2'>
        <h1 className='font-extrabold font-serif text-5xl md:text-6xl lg:text-7xl'>Tools</h1>
        <p className='text-zinc-400 font-light text-md md:text-lg lg:text-xl'>Tools I use to create beautiful, dynamic websites.</p>
      </div>

      <h1 className='text-center text-3xl text-zinc-800 font-light tracking-wide pt-[100px]'>Languages</h1>
      
      <div className='flex justify-center pt-3'>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6'>
          <div className='w-[350px] h-[100px] border-zinc-800 border-[1px] rounded-lg bg-zinc-950 hover:bg-zinc-900 duration-100 hover:cursor-pointer ease-in-out'>
            <div className='flex flex-col gap-1 pt-5 text-center'>
              <div className='flex flex-row items-center text-center justify-center gap-2'><SiHtml5 size={22}/><SiCss3 size={22}/> <h1 className='text-2xl font-bold leading-tight'>HTML & CSS</h1></div>
              <p className='text-sm text-zinc-400'>The basics</p>
            </div>
          </div>
          <div className='w-[350px] h-[100px] border-zinc-800 border-[1px] rounded-lg bg-zinc-950 hover:bg-zinc-900 duration-100 hover:cursor-pointer ease-in-out'>
            <div className='flex flex-col gap-1 pt-5 text-center'>
              <div className='flex flex-row items-center text-center justify-center gap-2'><SiJavascript size={22}/> <h1 className='text-2xl font-bold leading-tight'>Javascript</h1></div>
              <p className='text-sm text-zinc-400'>The best and worst language ever created</p>
            </div>
          </div>
          <div className='w-[350px] h-[100px] border-zinc-800 border-[1px] rounded-lg bg-zinc-950 hover:bg-zinc-900 duration-100 hover:cursor-pointer ease-in-out'>
            <div className='flex flex-col gap-1 pt-5 text-center'>
              <div className='flex flex-row items-center text-center justify-center gap-2'><SiPython size={22}/> <h1 className='text-2xl font-bold leading-tight'>Python</h1></div>
              <p className='text-sm text-zinc-400'>A great multi-use language</p>
            </div>
          </div>
          <div className='w-[350px] h-[100px] border-zinc-800 border-[1px] rounded-lg bg-zinc-950 hover:bg-zinc-900 duration-100 hover:cursor-pointer ease-in-out'>
            <div className='flex flex-col gap-1 pt-5 text-center'>
              <div className='flex flex-row items-center text-center justify-center gap-2'><FaDatabase size={22}/> <h1 className='text-2xl font-bold leading-tight'>SQL</h1></div>
              <p className='text-sm text-zinc-400'>Used to easily manage databases</p>
            </div>
          </div>
        </div>
      </div>

      <h1 className='text-center text-3xl text-zinc-800 font-light tracking-wide pt-[100px]'>Frameworks</h1>

      <div className='flex justify-center pt-3'>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6'>
          <div className='w-[350px] h-[100px] border-zinc-800 border-[1px] rounded-lg bg-zinc-950 hover:bg-zinc-900 duration-100 hover:cursor-pointer ease-in-out'>
            <div className='flex flex-col gap-1 pt-5 text-center'>
              <div className='flex flex-row items-center text-center justify-center gap-2'><SiReact size={26}/> <h1 className='text-2xl font-bold leading-tight'>React</h1></div>
              <p className='text-sm text-zinc-400'>JavaScript Framework</p>
            </div>
          </div>
          <div className='w-[350px] h-[100px] border-zinc-800 border-[1px] rounded-lg bg-zinc-950 hover:bg-zinc-900 duration-100 hover:cursor-pointer ease-in-out'>
            <div className='flex flex-col gap-1 pt-5 text-center'>
              <div className='flex flex-row items-center text-center justify-center gap-2'><SiDjango size={26}/> <h1 className='text-2xl font-bold leading-tight'>Django</h1></div>
              <p className='text-sm text-zinc-400'>Python Framework</p>
            </div>
          </div>
          <div className='w-[350px] h-[100px] border-zinc-800 border-[1px] rounded-lg bg-zinc-950 hover:bg-zinc-900 duration-100 hover:cursor-pointer ease-in-out'>
            <div className='flex flex-col gap-1 pt-5 text-center'>
              <div className='flex flex-row items-center text-center justify-center gap-2'><RiNextjsLine size={30}/> <h1 className='text-2xl font-bold leading-tight'>Next.js</h1></div>
              <p className='text-sm text-zinc-400'>React Framework</p>
            </div>
          </div>
          <div className='w-[350px] h-[100px] border-zinc-800 border-[1px] rounded-lg bg-zinc-950 hover:bg-zinc-900 duration-100 hover:cursor-pointer ease-in-out'>
            <div className='flex flex-col gap-1 pt-5 text-center'>
              <div className='flex flex-row items-center text-center justify-center gap-2'><RiTailwindCssFill size={30}/> <h1 className='text-2xl font-bold leading-tight'>Tailwind</h1></div>
              <p className='text-sm text-zinc-400'>CSS Framework</p>
            </div>
          </div>
          <div className='w-[350px] h-[100px] border-zinc-800 border-[1px] rounded-lg bg-zinc-950 hover:bg-zinc-900 duration-100 hover:cursor-pointer ease-in-out'>
            <div className='flex flex-col gap-1 pt-5 text-center'>
              <div className='flex flex-row items-center text-center justify-center gap-2'><SiExpress size={28}/> <h1 className='text-2xl font-bold leading-tight'>Express</h1></div>
              <p className='text-sm text-zinc-400'>Node.js Framework</p>
            </div>
          </div>
        </div>
      </div>

      <h1 className='text-center text-3xl text-zinc-800 font-light tracking-wide pt-[100px]'>Auth & Database</h1>

      <div className='flex justify-center pt-3'>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6'>
        <div className='w-[350px] h-[100px] border-zinc-800 border-[1px] rounded-lg bg-zinc-950 hover:bg-zinc-900 duration-100 hover:cursor-pointer ease-in-out'>
            <div className='flex flex-col gap-1 pt-5 text-center'>
              <div className='flex flex-row items-center text-center justify-center gap-2'><SiSupabase size={24}/> <h1 className='text-2xl font-bold leading-tight'>Supabase</h1></div>
              <p className='text-sm text-zinc-400'>Full backend</p>
            </div>
          </div>
          <div className='w-[350px] h-[100px] border-zinc-800 border-[1px] rounded-lg bg-zinc-950 hover:bg-zinc-900 duration-100 hover:cursor-pointer ease-in-out'>
            <div className='flex flex-col gap-1 pt-5 text-center'>
              <div className='flex flex-row items-center text-center justify-center gap-2'><SiMongodb size={30}/> <h1 className='text-2xl font-bold leading-tight'>MongoDB</h1></div>
              <p className='text-sm text-zinc-400'>Database</p>
            </div>
          </div>
          <div className='w-[350px] h-[100px] border-zinc-800 border-[1px] rounded-lg bg-zinc-950 hover:bg-zinc-900 duration-100 hover:cursor-pointer ease-in-out'>
            <div className='flex flex-col gap-1 pt-5 text-center'>
              <div className='flex flex-row items-center text-center justify-center gap-2'><SiClerk size={24}/> <h1 className='text-2xl font-bold leading-tight'>Clerk</h1></div>
              <p className='text-sm text-zinc-400'>Authentication</p>
            </div>
          </div>
          <div className='w-[350px] h-[100px] border-zinc-800 border-[1px] rounded-lg bg-zinc-950 hover:bg-zinc-900 duration-100 hover:cursor-pointer ease-in-out'>
            <div className='flex flex-col gap-1 pt-5 text-center'>
              <div className='flex flex-row items-center text-center justify-center gap-2'><SiAppwrite size={24}/> <h1 className='text-2xl font-bold leading-tight'>Appwrite</h1></div>
              <p className='text-sm text-zinc-400'>Full backend</p>
            </div>
          </div>
        </div>
      </div>

      <h1 className='text-center text-3xl text-zinc-800 font-light tracking-wide pt-[100px]'>Other</h1>

      <div className='flex justify-center pt-3 pb-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6'>
          <div className='w-[350px] h-[100px] border-zinc-800 border-[1px] rounded-lg bg-zinc-950 hover:bg-zinc-900 duration-100 hover:cursor-pointer ease-in-out'>
            <div className='flex flex-col gap-1 pt-5 text-center'>
              <div className='flex flex-row items-center text-center justify-center gap-2'><SiShadcnui size={22}/> <h1 className='text-2xl font-bold leading-tight'>Shadcn/ui</h1></div>
              <p className='text-sm text-zinc-400'>Reusable UI Components</p>
            </div>
          </div>
          <div className='w-[350px] h-[100px] border-zinc-800 border-[1px] rounded-lg bg-zinc-950 hover:bg-zinc-900 duration-100 hover:cursor-pointer ease-in-out'>
            <div className='flex flex-col gap-1 pt-5 text-center'>
              <div className='flex flex-row items-center text-center justify-center gap-2'><SiVercel size={24}/> <h1 className='text-2xl font-bold leading-tight'>Vercel</h1></div>
              <p className='text-sm text-zinc-400'>Next.js project deployment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ToolsPage