import React from 'react'
import { TopSideBarLinks, bottomSideBarLinks } from './SideBarLinks'
import Link from 'next/link'
import {FaTimes } from 'react-icons/fa'
const MsideBar = ({ close }) => {
  return (
    <div className='smallside'>
      <div className='flex flex-col gap-y-4 w-[100%] '>
        <div className='pl-3 py-2  '>
          <img src='/Images/Group 196.png' alt='' />
          <FaTimes
            className='close'
            onClick={() => {
              close(false)
            }}
          />
        </div>
        <div className='topmeun w-[100%] text-[#8695A0] flex flex-col items-center gap-y-2 text-base '>
          {TopSideBarLinks.map((TopSideBarLink) => (
            <Link
              href={TopSideBarLink.path}
              className='w-[100%] hover:bg-[#E0F3F3] pl-3 py-2 '
            >
              <div className='flex items-center text-base  w-[100%]  gap-x-4 capitalize'>
                <div className='text-xl'>{TopSideBarLink.icon}</div>
                <div>{TopSideBarLink.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-y-4 w-[100%]'>
        <div className='bottomsidebarheader pl-3'>
          <h4>Category</h4>
        </div>
        <div className='bottommeun w-[100%]  w-[100%] text-[#8695A0] flex flex-col gap-y-2 text-base'>
          {bottomSideBarLinks.map((bottomSideBarLink) => (
            <Link href={bottomSideBarLink.path} className='pl-3 py-2'>
              <div className='flex items-center w-[100%]  gap-x-4 capitalize '>
                <div className='bg-[#FFEEEB] text-[#F4694C] capitalize text-base p-2 rounded-full'>
                  {bottomSideBarLink.icon}
                </div>
                <div>{bottomSideBarLink.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MsideBar
