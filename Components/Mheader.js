import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'

import { BiEnvelope } from 'react-icons/bi'
import { MdNotificationsNone, MdOutlineKeyboardArrowDown } from 'react-icons/md'
import Image from 'next/image'
import MsideBar from './SideBar/MsideBar'
const Mheader = () => {
  const [smallscreen, setSmallscreen] = useState(false)
  return (
    <div className='md:hidden bg-[white] flex items-center justify-between fixed z-[100] w-[100%] h-[70px] shadow-md rounded-ee-[30px] rounded-es-[30px] p-4'>
      <FaBars
        className='lg:hidden text-xl pointer'
        onClick={() => setSmallscreen(true)}
      />
      <div className=' flex md:hidden'>
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
      {smallscreen && <MsideBar close={setSmallscreen} />}
    </div>
  )
}

export default Mheader
