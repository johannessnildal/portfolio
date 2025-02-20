import Footer from '@/components/global/footer'
import NavBar from '@/components/navbar/nav-bar'
import React, { ReactNode } from 'react'

const Mainlayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='relative h-full w-full'>
          <NavBar />
          {children}
          <Footer />
    </main>
  )
}

export default Mainlayout