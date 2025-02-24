'use client';
import * as React from "react"

import Image from "next/image"
import { ArrowRight, Earth, Github, Hammer, } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import DescriptionCarousel from "@/components/hero-descriptions"

import { motion } from 'framer-motion';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const HomePage = () => {
  return (
    <section className="w-full h-full">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 0.7}}>
        <div className={'text-center flex flex-col gap-3'}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex flex-row gap-2 text-center justify-center items-center">
                  <Link href='https://github.com/johannessnildal' className="text-sm sm:text-base md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-muted/60 via-muted/90 to-muted/60" target="blank">
                    @johannessnildal
                  </Link>
                </div>
              </TooltipTrigger>
              <TooltipContent className="dark">
                <Link href='https://github.com/johannessnildal' target="blank" className="flex flex-row gap-2 justify-center items-center">
                  <p>Github</p>
                  <Github size="16" />
                </Link>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <h1 className='font-extrabold font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
            I create meaningful
          </h1>
          <h1>
            <span className='font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
              <DescriptionCarousel />
            </span>
          </h1>
        </div>
      </motion.div>
      
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{delay: 0.5, duration: 1}}>
        <div className="flex flex-row justify-center gap-2 pt-14">
          <Button                 
            asChild 
            className='dark text-white'
            variant='outline'
            >
            <Link className='gap-2 flex flex-row items-center' href='/projects'>
              <p>My Projects</p>
              <Earth size="16" />
            </Link>
          </Button>
          <Button
            asChild 
            className='dark'
            variant='link'
          >
            <Link className='gap-2 flex flex-row items-center' href='/tools'>
              <p>Tech Stack</p>
              <Hammer size="16" />
            </Link>
          </Button>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 0.4}}>
        <div className="mt-16 sm:mt-20 relative overflow-hidden flex justify-center">
          <div className="w-[90%] max-w-[1200px] aspect-[1500/780] relative">
              <Image 
                src="/images/yoom-tn.png"
                alt="hero-image"
                fill={true}
                className="mx-auto rounded-xl opacity-50 border-solid border-[1px] border-zinc-700 object-cover z-1"
                priority
              ></Image>
            <div className="absolute overflow-hidden inset-0 bg-gradient-to-t from-black from-2% z-1" />
          </div>
        </div>
      </motion.div>

    </section>
  )
}

export default HomePage