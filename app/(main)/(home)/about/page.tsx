'use client';

import React from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <main className='flex flex-col gap-5'>
        <section>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 0.4}}>
          <div className='text-center flex flex-col gap-2 max-w-prose mx-auto'>
              <h1 className='font-extrabold font-serif text-5xl md:text-6xl lg:text-7xl'>About me</h1>
              <p className='text-zinc-400 font-light text-md md:text-lg lg:text-xl'>I am a Norwegian-born self-taught programmer. 
              Born in 2005, i started learning how to code already in 2017.</p>
          </div>
        </motion.div>
        </section>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 0.4}}>
          <section className='flex flex-col md:flex-row gap-5 md:gap-10 items-center justify-center'>
          <div className="pt-16 sm:pt-20 relative overflow-hidden">
              <Image               
              src="/images/IMG_5773.jpeg"
              alt="hero-image"
              width={300}
              height={100}
              className="mx-auto border-opacity-30 rounded-xl border-solid border-[1px] border-zinc-700 object-cover z-1"
              priority
              ></Image>
              <div className="rounded-xl absolute overflow-hidden inset-0 bg-gradient-to-t from-black from-2% z-1" />
          </div>
          <div className="md:pt-20 relative overflow-hidden">
              <Image               
              src="/images/IMG_6714.jpeg"
              alt="hero-image"
              width={300}
              height={100}
              className="mx-auto rounded-xl opacity-70 border-opacity-100 border-solid border-[1px] border-zinc-700 object-cover z-1"
              priority
              ></Image>
              <div className="rounded-xl absolute overflow-hidden inset-0 bg-gradient-to-t from-black from-2% z-1" />
          </div>
          </section>
        </motion.div>
    </main>
  )
}

export default AboutPage