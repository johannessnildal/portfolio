import * as React from "react"

import Image from "next/image"
import { ArrowRight, ArrowRightCircle, Earth, Hammer, SquareArrowOutUpRight } from "lucide-react"
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
    <section className="w-full h-screen">
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
        <h1 className='font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
          I create meaningful
        </h1>
        <h1>
          <span className='font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
            <DescriptionCarousel />
          </span>
        </h1>
      </div>

      <div className="flex flex-col items-center text-center justify-center pt-8 text-zinc-400">
        <p className="text-sm sm:text-base max-w-[350px] sm:max-w-[500px]">Welcome to my portfolio! My name is Johannes Snildal. I am an aspiring web developer from Norway, and it&apos;s nice to see you here!</p>
        <div className="flex flex-row gap-2 pt-8">
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
            <Link className='gap-2 flex flex-row items-center' href='/'>
                <p>Tech Stack</p>
                <Hammer size="16" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="hiddem md:flex justify-center pt-[150px] relative overflow-hidden">
          <Image 
            src="/images/yoom-tn.png"
            alt="hero-image"
            width={1500}
            height={780}
            className="rounded-md opacity-50 border-solid border-[1px] border-zinc-700 object-cover"
          ></Image>
        <div className="absolute inset-0 bg-gradient-to-t from-black from-2%" />
      </div>

    </section>
  )
}

export default HomePage