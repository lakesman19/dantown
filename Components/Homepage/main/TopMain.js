import React from 'react'
import { BiSearch } from 'react-icons/bi'
const TopMain = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row justify-between items-center w-[60%] md:w-[60%]lg:w-[70%]'>
        <div className='w-[100%] lg:w-[45%]'>
          <h3 className='text-[#0F3F62] text-xl'>Hey, Dustin!</h3>
          <p>Welcome back, nice to see you again!</p>
        </div>
        <div className='bg-[white] flex items-center h-[40px] rounded-[1.5rem] gap-y-2 p-4 w-[100%] lg:w-[45%]'>
          <div className=''>
            <BiSearch className='text-base' />
          </div>
          <input
            type='text'
            placeholder='search here'
            className='border-none outline-none bg-[transparent] pl-3'
          />
        </div>
      </div>
    </>
  )
}

export default TopMain
