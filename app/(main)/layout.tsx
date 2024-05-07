import Footer from '@/components/global/footer'
import NavBar from '@/components/navbar/nav-bar'
import React, { ReactNode } from 'react'

const Mainlayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
        <NavBar />
          <div className='pt-20'>
            {children}
          </div>
        <Footer />
    </main>
  )
}

export default Mainlayout