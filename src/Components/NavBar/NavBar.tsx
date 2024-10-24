import { useContext } from 'react'
import logo from "../../assets/images/Logo.png";
import { AuthContext } from './../Context/AuthContext';
import { CgProfile } from "react-icons/cg";
import { HiOutlineUsers } from "react-icons/hi";
import { IoHomeOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { TiUserAddOutline } from "react-icons/ti";
import {  Menu, MenuItem } from "react-pro-sidebar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./NavBar.css"
export default function NavBar() {
let{ userData }:any=  useContext(AuthContext)
let navigate = useNavigate();
const { pathname: currentPath } = useLocation();
let logout = () => {
  localStorage.removeItem("userToken");
  navigate("/login");
};
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-4">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
  <img src={logo} alt="logo" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      <div className="d-md-flex ms-auto align-items-center mt-md-0 mt-3">
      <a className="navbar-brand py-md-0 py-3" href="#">
      Welcome {userData?.firstName}
    </a>
    <div className='menuMobile'>
    <Menu >
          <MenuItem
            icon={<IoHomeOutline />}
            component={<Link to="/dashboard" />}
            active={currentPath === "/dashboard"}
          >
            Home
          </MenuItem>
          <MenuItem
            icon={<HiOutlineUsers />}
            component={<Link to="/dashboard/users-list" />}
            active={currentPath === "/dashboard/users-list"}
          >
            Users
          </MenuItem>
          <MenuItem
            icon={<TiUserAddOutline />}
            component={<Link to="/dashboard/user-data" />}
            active={currentPath === "/dashboard/user-data"}
          >
            {" "}
            Add User
          </MenuItem>
          <MenuItem
            icon={<CgProfile />}
            component={<Link to="/dashboard/profile" />}
            active={currentPath === "/dashboard/profile"}
          >
            {" "}
            Profile
          </MenuItem>
          <MenuItem onClick={logout} icon={<MdLogout />} component={<Link to="" />}>
            Logout
          </MenuItem>
        </Menu>
    </div>
      </div>
      

    </div>
  </div>
</nav>
  )
}
