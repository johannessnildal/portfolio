import * as React from "react"

import Image from "next/image"
import { ArrowRight, SquareArrowOutUpRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const HomePage = () => {
  return (
    <section className="w-full h-screen">
      <div className="flex flex-row items-center justify-center text-center gap-2 pt-6">
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
          <p className="font-extralight text-sm">My latest project using</p>
          <p className="font-normal text-sm">Next.js</p>
        </div>
        <Button className="dark rounded-full px-6">
          <Link className="flex flex-row gap-2 items-center" href="https://yoom-liart-delta.vercel.app">
            View
            <ArrowRight size="16" />
          </Link>
        </Button>
      </div>

      <div className={'text-center pt-[50px] sm:pt-[80px] md:pt-[120px] flex flex-col gap-10'}>
        <h1 className='inline-block h-fit text-transparent bg-clip-text bg-gradient-to-b from-muted to-muted/70 font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl italic'>I am an aspiring <br /> full-stack web developer.</h1>
      </div>
    </section>
  )
}

export default HomePage