import * as React from "react"

import Image from "next/image"
import { ArrowLeft, ArrowRight, Earth, Github, Hammer, } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import DescriptionCarousel from "@/components/hero-descriptions"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


const HomePage = () => {
  return (
    <section className="w-full h-full">
      <div className="flex flex-row items-center justify-center text-center gap-1 sm:gap-2 pt-6">
        <h1 className="font-bold">Yoom</h1>
        <Image 
          src="/icons/yoomlogo.svg"
          alt="yoom"
          width={32}
          height={30}
        />
        <div className="px-5 hidden sm:flex flex-row gap-1">
          <p className="font-extralight text-sm">My latest project using</p>
          <p className="font-normal text-sm">Next.js</p>
          <p className="font-extralight text-sm">and</p>
          <p className="font-normal text-sm">Clerk Auth</p>
          <p className="font-extralight text-sm">x</p>
          <p className="font-normal text-sm">Stream</p>
        </div>
        <div className="px-5 flex sm:hidden flex-row gap-1">
          <p className="font-extralight text-sm">Latest</p>
          <p className="font-normal text-sm">Next.js</p>
          <p className="font-extralight text-sm">project</p>
        </div>
        <Button className="dark rounded-full px-6">
          <Link className="flex flex-row gap-1 sm:gap-2 items-center" href="https://yoom-liart-delta.vercel.app" target="blank">
            View
            <ArrowRight size="16" />
          </Link>
        </Button>
      </div>

      <div className={'text-center pt-[50px] sm:pt-[80px] md:pt-[120px] flex flex-col gap-3'}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div className="flex flex-row gap-2 text-center justify-center items-center">
                <Link href='https://github.com/johannessnildal' className="font-bold text-md inline-block h-fit text-transparent bg-clip-text bg-gradient-to-b from-muted/60 to-muted/30" target="blank">
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
        <h1 className='font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
          I create meaningful
        </h1>
        <h1>
          <span className='font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
            <DescriptionCarousel />
          </span>
        </h1>
      </div>
        
      <div className="flex flex-row justify-center gap-2 pt-14">
        <Button                 
          asChild 
          className='dark text-white'
          variant='outline'
          >
          <Link className='gap-2 flex flex-row items-center' href='/'>
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

      <div className="flex justify-center pt-16 sm:pt-20 relative overflow-hidden">
          <Image 
            src="/images/yoom-tn.png"
            alt="hero-image"
            width={1500}
            height={780}
            className="rounded-xl opacity-50 border-solid border-[1px] border-zinc-700 object-cover"
          ></Image>
        <div className="absolute inset-0 bg-gradient-to-t from-black from-2% z-1" />
      </div>

    </section>
  )
}

export default HomePage