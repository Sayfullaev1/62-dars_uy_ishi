import React from 'react'
import { Outlet } from 'react-router-dom'

import Headaer from '../../components/header//Header'
import Footer from '../../components/footer//Footer'


export default function DashboardLayout() {
  return (
    <div className='container'>

        <Headaer/>

        <Outlet/>

        <Footer/>

    </div>
  )
}
