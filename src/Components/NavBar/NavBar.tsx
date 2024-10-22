import { useContext } from 'react'
import img from "../../assets/images/caret-circle.png"
import { AuthContext } from './../Context/AuthContext';
export default function NavBar() {
let{ userData }=  useContext(AuthContext)

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
    
      <div className="d-flex ms-auto align-items-center">
      <a className="navbar-brand" href="#">
      Welcome {userData?.firstName}
    </a>
      </div>

    </div>
  </div>
</nav>
  )
}
