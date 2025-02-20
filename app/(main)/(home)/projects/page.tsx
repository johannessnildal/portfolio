'use client';
import Image from 'next/image'
import React from 'react'

import { motion } from 'framer-motion';

const ProjectsPage = () => {
  return (
    <main className='w-full h-full'>
      <section>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 0.4}}>
        <div className='text-center flex flex-col gap-2 max-w-prose mx-auto items-center'>
          <h1 className='font-extrabold font-serif text-5xl md:text-6xl lg:text-7xl'>Projects</h1>
          <p className='text-zinc-400 font-light text-md md:text-lg lg:text-xl max-w-[90vw]'>A brief overview of my recent projects, tech-stacks used and links to each individual project!</p>
        </div>
      </motion.div>
      </section>

      <section className='mt-24 flex flex-col'>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 0.4}}>
        <div className="md:pt-20 relative overflow-hidden flex justify-center">
          <div className="w-[90%] max-w-[1200px] aspect-[1500/780] relative">
            <Image               
            src="/images/yoom-tn.png"
            alt="yoom showcase"
            fill={true}
            className="mx-auto rounded-xl opacity-70 border-opacity-100 border-solid border-[1px] border-zinc-700 object-cover z-1"
            priority
            ></Image>
            <div className="rounded-xl absolute overflow-hidden inset-0 bg-gradient-to-t from-black from-2% z-1" />
          </div>
        </div>
        </motion.div>

        <div className="flex flex-row items-center justify-center text-center gap-1 sm:gap-2">
          <Image 
            src="/icons/yoomlogo.svg"
            alt="yoom"
            width={32}
            height={30}
          />
          <h1 className="font-bold">Yoom</h1>
        </div>
      </section>
    </main>
  )
}

export default ProjectsPage