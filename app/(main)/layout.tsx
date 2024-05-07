import Footer from '@/components/global/footer'
import NavBar from '@/components/global/nav-bar'
import React, { ReactNode } from 'react'

const Mainlayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
        <NavBar />
        {children}
        <Footer />
    </main>
  )
}

export default Mainlayout