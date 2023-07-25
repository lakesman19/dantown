'use client'

import React, { useContext } from 'react'
import SideBar from './SideBar'
import { SidebarContext } from '@/context/WrapperContext/WrapperContext'
import { FaBars } from 'react-icons/fa'
const Wrapper = ({ children }) => {
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext)
  return (
    <div className='bg-[#F7FAFC] min-h-screen'>
      <SideBar />
      <main
        className={`${
          isSidebarOpen ? 'pl-[220px]' : 'pl-[80px] lg:pl-[220px]'
        }`}
      >
        <FaBars className='lg:hidden text-xl ' onClick={toggleSidebar} />
        {children}
      </main>
    </div>
  )
}

export default Wrapper
