import React from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import { BsEmojiSmile, BsFillSendFill } from 'react-icons/bs'
const Chat = () => {
  return (
    <div className='w-[100%] capitalize rounded-[15px] bg-[white]'>
      <div className='flex p-2 justify-between items-center w-[100%] bg-[#5DC2C4] text-[white] rounded-ss-[15px] rounded-se-[15px] mb-4'>
        <span>Ironmen</span>
        <span>
          <LiaTimesSolid />
        </span>
      </div>
      <div className='w-[100%] flex items-center justify-center mb-4'>
        <p className='bg-[#072E75] text-[white] rounded-full p-2 text-sm'>
          {' '}
          today
        </p>
      </div>
      <div className=' p-2'>
        <div className='w-[100%] flex gap-x-2 text-sm items-baseline mb-4 '>
          <p className='bg-[#E0F3F3] rounded-[15px] flex  p-2 justify-center items-center text-sm text-[#5DC2C4]'>
            when will the event be held
          </p>
          <span className='text-[#8695A0]'>10.22am</span>
        </div>
        <div className='w-[100%] flex gap-x-2 text-sm items-baseline justify-end mb-4'>
          <span className='text-[#8695A0]'>10.22am</span>
          <p className='bg-[#5DC2C4] ] rounded-[15px] flex  p-2 justify-center items-center text-[white] text-sm'>
            tomorrow at 4pm
          </p>
        </div>
        <div className=' w-[100%] p-2 flex items-center justify-center gap-x-2 mb-4 '>
          <div className='flex border rounded-full w-[100%] items-center justify-between px-1'>
            <input
              type='text'
              className='bg-[transparent] outline-none border-none w-[90%] p-1 text-sm'
              placeholder='type here'
            />
            <div className='emoji w-[10%]'>
              <BsEmojiSmile />
            </div>
          </div>
          <div className='send bg-[#F4694C] p-2 text-[white] rounded-full'>
            <BsFillSendFill />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
