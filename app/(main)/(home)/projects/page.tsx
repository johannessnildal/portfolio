import Image from 'next/image'
import React from 'react'

const ProjectsPage = () => {
  return (
    <main className='w-full h-full'>
      <section>
        <div className='text-center flex flex-col gap-2 max-w-prose mx-auto items-center'>
          <h1 className='font-extrabold font-serif text-5xl md:text-6xl lg:text-7xl'>Projects</h1>
          <p className='text-zinc-400 font-light text-md md:text-lg lg:text-xl max-w-[90vw]'>A brief overview of my recent projects, tech-stacks used and links to each individual project!</p>
        </div>
      </section>

      <section className='mt-24 flex flex-col'>
        <div className="md:pt-20 relative overflow-hidden">
          <Image               
          src="/images/yoom-scbg.jpg"
          alt="hero-image"
          width={300}
          height={100}
          className="mx-auto rounded-xl opacity-70 border-opacity-100 border-solid border-[1px] border-zinc-700 object-cover z-1"
          priority
          ></Image>
          <div className="rounded-xl absolute overflow-hidden inset-0 bg-gradient-to-t from-black from-2% z-1" />
          <div className='absolute inset-0 flex flex-col justify-center items-center z-2'>
            <Image
            src="/images/yoom-sc1.png"
            alt="hero-image"
            width={100}
            height={100}
            className="mx-auto rounded-xl object-cover z-1"
            priority
            ></Image>
          </div>
        </div>

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