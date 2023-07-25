import React,{useContext} from 'react'
import { bottomSideBarLinks } from './SideBarLinks'
import Link from 'next/link'
import { SidebarContext } from '@/context/WrapperContext/WrapperContext'
const BottomLinks = () => {
     const { isSidebarOpen } = useContext(SidebarContext)
  return (
    <>
      <div className='flex flex-col gap-y-4 w-[100%]'>
        <div className='bottomsidebarheader pl-3'>
          <h4
            className={`${
              isSidebarOpen ? 'block text-base' : 'hidden lg:block text-base'
            }`}
          >
            Category
          </h4>
        </div>
        <div className='bottommeun w-[100%]  w-[100%] text-[#8695A0] flex flex-col gap-y-2 text-base'>
          {bottomSideBarLinks.map((bottomSideBarLink) => (
            <Link href={bottomSideBarLink.path} className='pl-3 py-2'>
              <div className='flex items-center w-[100%]  gap-x-4 capitalize '>
                <div className='bg-[#FFEEEB] text-[#F4694C] capitalize text-base p-2 rounded-full'>
                  {bottomSideBarLink.icon}
                </div>
                <div
                  className={`${isSidebarOpen ? 'block' : 'hidden lg:block'}`}
                >
                  {bottomSideBarLink.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default BottomLinks