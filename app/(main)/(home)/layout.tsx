import React, { ReactNode } from 'react'

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
        <div className='pt-20'>
            {children}
        </div>
    </main>
  )
}

export default HomeLayout