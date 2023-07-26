import React from 'react'
// import bic from '../../Images/Group 144.png'
// import yoga from '../../Images/Group 126.png'
// import skate from '../../Images/Group 127.png'
import Image from 'next/image'
const Middle = () => {
  const imgData = [
    {
      imgurl: '/Images/Group%20144.png',
      h1: 'Real Wild Cyclist',
      p: 'We are the wildest cyclist.',
    },
    {
      imgurl: '/Images/Group%20126.png',
      h1: 'Yoga Forces',
      p: 'Welcome to the biggest...',
    },
    {
      imgurl: '/Images/Group%20127.png',
      h1: 'Skater Boys',
      p: 'The best states of skaters.',
    },
  ]
  return (
    <div className='flex justify-between flex-col lg:flex-row gap-y-4 items-center w-[100%] gap-x-4 mb-5'>
      {imgData.map((item) => (
        <div className='flex flex-col justify-center items-center rounded-[15px] bg-[#E0F3F3] w-[100%] lg:w-1/3'>
          <div className='p-[10px] lg:h-[200px] w-[100%] flex items-center justify-center'>
            <img src={item.imgurl} className='lg:h-[100%] w-[30%] lg:w-[80%]' />
          </div>
          <div className='bg-[white] w-[100%] p-[10px] text-center rounded-es-[15px] rounded-ee-[15px]'>
            <h4 className='text-[#0F3F62] font-semibold'>{item.h1}</h4>
            <p className='text-[#8695A0] text-sm'>{item.p}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Middle
