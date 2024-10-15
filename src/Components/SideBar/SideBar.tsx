import { useState } from "react";

import { CgProfile } from "react-icons/cg";
import { HiOutlineUsers } from "react-icons/hi";
import { IoHomeOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { TiUserAddOutline } from "react-icons/ti";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";

import "./Sidebar.css";
import userImg from "../../assets/images/user.png";
import logo from "../../assets/images/Logo.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
export default function SideBar() {
  let [isCollapsed, setIsCollapsed] = useState(false);
  let toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const { pathname: currentPath } = useLocation()

  return (
    <div className="sidebarContainer vh-100">
      <Sidebar collapsed={isCollapsed} className="vh-100 sidebarWrapper">
        <div className="d-flex justify-content-between align-items-center">
          
          <div>
            {isCollapsed ?
            <FaArrowRight size={20} onClick={toggleCollapse}/>
            :<FaArrowLeft size={20} onClick={toggleCollapse}/>}
            
          </div>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="text-center my-5">
          <img src={userImg} alt="user image" className="w-50 rounded-circle" />
          <h4 className="profileName pt-3">Karthi Madesh</h4>
          <h5 className="profileRole">Admin</h5>
        </div>
        <Menu>
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
          <MenuItem icon={<MdLogout />} component={<Link to="" />}>
            {" "}
            Logout
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}
