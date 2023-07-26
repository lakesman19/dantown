import React from 'react'

const MiddleAside = () => {
  const data = [
    {
      name: 'Ironmen',
      message: 'When will the event be held?',
      numberMesage: 1,
      color: '#D9EDFF',
    },
    {
      name: 'Ariana Grande',
      message: 'Alright then. See you there',
      color: '#FFDAD9',
    },
    {
      name: 'Ariana Grande',
      message: 'Come on join to my party!',
      color: '#D9DAFF',
    },
    {
      name: 'Ariana Grande',
      message: 'After that you can see me',
      color: '#FFDAD9',
    },
  ]
  return (
    <div className='w-[100%] flex flex-col gap-y-3 mb-5'>
      <div className=' flex items-center w-[100%] gap-x-2 '>
        <h3 className='text-[#0F3F62]'>Chats</h3>
        <p className='bg-[#E0F3F3] rounded-full p-[10px] h-[10px] w-[10px] text-xs text-[#54BCBD] flex items-center justify-center'>
          14
        </p>
      </div>
      <div className='flex w-[100%] flex-col gap-y-4'>
        {data.map((item, index) => (
          <div className='flex items-center gap-x-4 w-[100%]'>
            <div
              className='h-[50px] w-[50px] rounded-full'
              style={{ backgroundColor: item.color }}
              key={index}
            ></div>
            <div className=''>
              <h3 className='text-[#0F3F62] text-base font-semibold'>
                {item.name}
              </h3>
              <p className='text-[#8695A0] text-sm'>{item.message}</p>
            </div>
            {item.numberMesage && (
              <p className='p-[10px] bg-[#F4694C] rounded-full text-sm h-[10px] w-[10px] flex items-center justify-center text-[white]'>
                {item.numberMesage}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MiddleAside
