import React from 'react'
import TopAside from './Homepage/aside/TopAside'
import TopMain from './Homepage/main/TopMain'

const Header = () => {
  return (
    <div className='flex w-[100%] justify-between items-center py-5 px-5 pt-[75px] md:pt-5'>
      <TopMain />
      <TopAside />
    </div>
  )
}

export default Header