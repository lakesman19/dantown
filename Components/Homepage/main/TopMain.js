import React from 'react'
import {BiSearch} from 'react-icons/bi'
const TopMain = () => {
  return (
    <>
      <div className='flex justify-between items-center'>
        <div className=''>
          <h3 className='text-[#0F3F62] text-xl'>Hey, Dustin!</h3>
          <p>Welcome back, nice to see you again!</p>
        </div>
        <div className='bg-[white] flex items-center h-[40px] rounded-[1.5rem] p-4'>
          <BiSearch />
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