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
    <div className='flex justify-between items-center w-[100%]'>
      {imgData.map((item) => (
        <div className='flex flex-col justify-center items-center rounded-[5px] border '>
          <div className='p-[10px]'>
            <img src={item.imgurl} width={100} height={200} />
          </div>
          <div className='bg-[white] p-[10px]'>
            <h4>{item.h1}</h4>
            <p>{item.p}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Middle
