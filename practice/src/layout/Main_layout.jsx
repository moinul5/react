import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Fixed_component/Navbar'

export default function Main_layout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>    
        
    </div>
)
}
