import React, { ReactNode } from 'react'
import Navbar from '../navbar';

interface BaseLayoutProps {
  children: ReactNode
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='bg-gray-50 overflow-hidden min-h-screen'>
        <div className='max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8'>
          {children}
        </div>
      </div>
    </>
  )
}

export default BaseLayout;