import React from 'react'
import img from "../../assets/images/caret-circle.png"
import { IoMdNotificationsOutline } from 'react-icons/io'
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-4">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={img} alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      <form className="d-flex ms-auto align-items-center">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <IoMdNotificationsOutline className='text-muted' size={24}/>

      </form>

    </div>
  </div>
</nav>
  )
}
