import React, { useContext } from 'react'
import { TopSideBarLinks } from './SideBarLinks'
import Link from 'next/link'
import { SidebarContext } from '@/context/WrapperContext/WrapperContext'
import { usePathname } from 'next/navigation'
const TopLinks = () => {
  const { isSidebarOpen } = useContext(SidebarContext)
  const pathname = usePathname()

  // const isActivePath = (path) => {
  //   return router.startsWith === path
  // }
  // console.log(isActivePath)
  return (
    <>
      <div className='flex flex-col gap-y-4 w-[100%] '>
        <div
          className={`${
            isSidebarOpen ? 'block pl-[10px]' : 'hidden lg:block pl-[10px]'
          }`}
        >
          <img src='/Images/Group 196.png' alt='' />
        </div>
        <div className='topmeun w-[100%] text-[#8695A0] flex flex-col items-center gap-y-2 text-base '>
          {TopSideBarLinks.map((TopSideBarLink) => {
            // const isActivePath = pathname.startsWith(TopSideBarLink.path)
            return (
              <Link
                href={TopSideBarLink.path}
                className={`w-[100%] hover:bg-[#E0F3F3] pl-3 py-2 ${pathname === TopSideBarLink.path ? 'bg-[#E0F3F3]': ''}`}
                // className={`w-[100%] hover:bg-[#E0F3F3] pl-3 py-2 ${
                //   isActivePath ? 'bg-[#E0F3F3]' : ''
                // }`}
              >
                <div className='flex items-center text-base  w-[100%]  gap-x-4 capitalize'>
                  <div className='text-xl'>{TopSideBarLink.icon}</div>
                  <div
                    className={`${isSidebarOpen ? 'block' : 'hidden lg:block'}`}
                  >
                    {TopSideBarLink.name}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default TopLinks
