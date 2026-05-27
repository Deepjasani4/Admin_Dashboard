import React from "react";

import { FaBars } from "react-icons/fa";

import { Menu, Search, Moon, Palette, Bell } from "lucide-react";

import "./Navbar.css";

const Navbar = ({ collapse, setCollapse, mobile, setMobile }) => {
  const handleSidebar = () => {
    if (window.innerWidth <= 768) {
      setMobile((prev) => !prev);
    } else {
      setCollapse((prev) => !prev);
    }
  };

  return (
    <div className="navbar">

  <div className="navbar-left">
    <Menu className="menu-icon" onClick={handleSidebar} />

    <Search className="icon" />

    <button className="shortcut-btn">⌘K</button>
  </div>

  <div className="header-right">
    {/* <Moon className="icon" /> */}

    {/* <Palette className="icon" /> */}

    <div className="notification">
      <Bell className="icon" />
      <span className="badge">2</span>
    </div>

    <div className="avatar">AS</div>
  </div>

</div>
  );
};

export default Navbar;
