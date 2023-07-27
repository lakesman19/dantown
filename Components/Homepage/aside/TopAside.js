import React from 'react'
import { BiEnvelope } from 'react-icons/bi'
import { MdNotificationsNone, MdOutlineKeyboardArrowDown } from 'react-icons/md'
import Image from 'next/image'
const TopAside = () => {
  return (
    <div className=' flex hidden md:block justify-end  px-5 w-[40%] md:w-[40%] lg:w-[30%]'>
      <div className='flex items-center justify-between w-[100%] gap-x-2'>
        <div className='flex items-center justify-center gap-x-2 w-[40%]'>
          <BiEnvelope className='text-base' />
          <MdNotificationsNone className='text-base' />
        </div>
        <div className='flex items-center w-[100%] gap-x-2'>
          <div className='w-[30%] flex justify-center items-center'>
            <img src='/Images/img.png' alt='' className='w-[100%]' />
          </div>
          <div className='flex items-center w-[70%]'>
            <p className='text-[#0F3F62] text-sm'>Jamet Roy</p>
            <span>
              <MdOutlineKeyboardArrowDown />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopAside
