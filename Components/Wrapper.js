'use client'

import React, { useContext } from 'react'
import SideBar from './SideBar'
import { SidebarContext } from '@/context/WrapperContext/WrapperContext'
import { FaBars } from 'react-icons/fa'
import Header from './Header'
import Mheader from './Mheader'
const Wrapper = ({ children }) => {
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext)
  return (
    <div className='bg-[#F7FAFC] h-full'>
      <SideBar />
      <main
        className={`${
          isSidebarOpen ? 'pl-[220px]' : 'pl-0 md:pl-[80px] lg:pl-[220px]'
        }`}
      >
        <FaBars className='hidden md:block lg:hidden text-xl ' onClick={toggleSidebar} />
        <Mheader />
        <Header />

        {children}
      </main>
    </div>
  )
}

export default Wrapper
