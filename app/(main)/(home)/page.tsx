import * as React from "react"

import { motion } from "framer-motion"
 
import { Poppins } from 'next/font/google'
 
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const HomePage = () => {
  return (
    <section className="w-full h-screen">
      <div className={`${poppins.className} text-center pt-[70px] sm:pt-[100px] md:pt-[170px] flex flex-col gap-10`}>
        <h1 className='inline-block h-fit text-transparent bg-clip-text bg-gradient-to-b from-muted to-muted/70 font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl italic'>I am an aspiring <br /> full-stack web developer.</h1>
      </div>
    </section>
  )
}

export default HomePage