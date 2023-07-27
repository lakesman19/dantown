import React from 'react'
import TopMain from './TopMain'
import Middle from './Middle'
import BottomMain from './BottomMain'

const Main = () => {
  return (
    <div className='w-[100%] md:w-[60%] lg:w-[70%] border-r-2 px-5'>
      {/* <TopMain className='' /> */}
      <Middle />
      <BottomMain />
    </div>
  )
}

export default Main
