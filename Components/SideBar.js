import React,{useContext} from 'react'
import TopLinks from './SideBar/TopLinks'
import BottomLinks from './SideBar/BottomLinks'
import { SidebarContext } from '@/context/WrapperContext/WrapperContext'


const SideBar = () => {
  const { isSidebarOpen } = useContext(SidebarContext)

  return (
    <div
      className={`${
        isSidebarOpen
          ? 'hidden w-[100%] lg:block lg:w-[220px] bg-[#fff] fixed h-[100%] py-9 overflow-auto shadow-[rgb(113 122 131 / 11%) 0px 7px 30px 0px;] transition-[all] ease duration-[.3s] '
          : 'hidden w-[100%] md:block md:w-[80px] lg:w-[220px] bg-[#fff] fixed h-[100%] py-9 overflow-auto shadow-[rgb(113 122 131 / 11%) 0px 7px 30px 0px;] transition-[all]'
      }`}
    >
      <TopLinks />
      <hr
        class='m-5'
        style={{
          backgroundColor: 'whitesmoke',
          borderTop: '2px solid rgba(0, 0, 0, 0.1)',
        }}
      />
      <BottomLinks />
    </div>
  )
}

export default SideBar