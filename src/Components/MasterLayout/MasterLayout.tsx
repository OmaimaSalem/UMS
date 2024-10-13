import React from 'react'
import SideBar from '../SideBar/SideBar'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

export default function MasterLayout() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <SideBar/>
        </div>
        <div className="col-md-9">
          <NavBar/>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}
