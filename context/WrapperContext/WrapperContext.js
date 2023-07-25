'use client'
import React, { createContext, useReducer, useState } from 'react'
import SideBarReducer from './SideBarReducer'
const SidebarContext = createContext()
const WrapperContext = ({children}) => {
  const initialState = {
    isSidebarOpen: false,
  }
  const [state, dispatch] = useReducer(SideBarReducer, initialState)
  const toggleSidebar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' })
  }
  return (
    <SidebarContext.Provider value={{ ...state, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export { WrapperContext, SidebarContext }
