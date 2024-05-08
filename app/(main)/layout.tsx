import Footer from '@/components/global/footer'
import NavBar from '@/components/navbar/nav-bar'
import React, { ReactNode } from 'react'

const Mainlayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='relative h-full w-full'>
      <div 
      className="absolute z-0 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_20%,transparent_100%)]"
      >
      </div>
        <div className='relative'>
          <NavBar />
          {children}
          <Footer />
        </div>
    </main>
  )
}

export default Mainlayout