import React from 'react'
import TopAside from './TopAside'
import MiddleAside from './MiddleAside'
import Chat from './Chat'

const Aside = () => {
  return (
    <div className='w-[100%] md:w-[40%] lg:w-[30%] px-5'>
      {/* <TopAside /> */}
      <MiddleAside />
      <Chat />
    </div>
  )
}

export default Aside
