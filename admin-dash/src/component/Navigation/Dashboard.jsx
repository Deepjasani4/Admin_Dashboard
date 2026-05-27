import React, { useState } from "react";

import "./Dashboard.css";

import logo from "../../assets/logo_image.png";
import { Link } from "react-router-dom";

import {
  FaThLarge,
  FaComments,
  FaEnvelope,
  FaCalendarAlt,
  FaFolderOpen,
  FaImages,
  FaUsers,
  FaClipboardList,
  FaBell,
  FaFileInvoiceDollar,
  FaTimes,
  FaChevronDown,
  FaBoxOpen, // Products
  FaShoppingCart, // Cart
  FaReceipt, // Orders
  FaHeart,
  FaFont, // Typography
  FaLayerGroup, // Components
  FaRegSmile,
  FaEllipsisH, // Form Elements
  FaTasks, // Form Wizard
  FaEdit,
  FaTable,
  FaChartPie,
  FaBookOpen, // Sample Page
  FaCreditCard, // Pricing
  FaGlobe, // Maps
  FaExclamationTriangle, // Pages
  FaChevronRight, // Arrow Right
  FaRegUserCircle, // Settings
  FaSignOutAlt,
} from "react-icons/fa";
const Sidebar = ({ collapse, mobile, setMobile }) => {
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [authenticationOpen, setAuthenticationOpen] = useState(false);
  const [utilityOpen, setUtilityOpen] = useState(false);

  return (
    <>
      {/* Overlay */}

      <div
        className={mobile ? "overlay active" : "overlay"}
        onClick={() => setMobile(false)}
      ></div>

      {/* Sidebar */}

      <div
        className={`
          sidebar
          ${collapse ? "collapse" : ""}
          ${mobile ? "mobile-active" : ""}
        `}
      >
        {/* Mobile Close */}

        <div className="mobile-top">
          <FaTimes onClick={() => setMobile(false)} />
        </div>

        {/* Logo */}

        <div className="logo-section">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>

          {(!collapse || mobile) && <h2>Admindek</h2>}
        </div>

        <div className="nav-heading">
          {(!collapse || mobile) && <h3>NAVIGATION</h3>}
        </div>

        {/* Menu */}
        <div className="menu">
          {/* Dashboard */}

          <div className="dropdown">
            <div
              className="menu-item"
              onClick={() => setDashboardOpen(!dashboardOpen)}
            >
              <div className="menu-left">
                <FaThLarge />

                {(!collapse || mobile) && <span>Dashboard</span>}
              </div>

              {(!collapse || mobile) && (
                <FaChevronDown
                  className={dashboardOpen ? "arrow rotate" : "arrow"}
                />
              )}
            </div>

            {/* Submenu */}

            {dashboardOpen && (!collapse || mobile) && (
              <div className="submenu">
                <Link to="/" className="submenu-link">
                  <p className="active-submenu">Analytics</p>
                </Link>

                <Link to="/crm" className="submenu-link">
                  <p className="active-submenu">CRM</p>
                </Link>
                <Link to="/ecommerce" className="submenu-link">
                  <p className="active-submenu">Ecommerce</p>
                </Link>

                <Link to="/finance" className="submenu-link">
                  <p className="active-submenu">Finance</p>
                </Link>

                <Link to="/crypto" className="submenu-link">
                  <p className="active-submenu">Crypto</p>
                </Link>

                <Link to="/project" className="submenu-link">
                  <p className="active-submenu">Project</p>
                </Link>

                <Link to="/saas" className="submenu-link">
                  <p className="active-submenu">SaaS</p>
                </Link>

                <Link to="/hr" className="submenu-link">
                  <p className="active-submenu">HR</p>
                </Link>

                <Link to="/marketing" className="submenu-link">
                  <p className="active-submenu">Marketing</p>
                </Link>
              </div>
            )}
          </div>

          <div className="nav-application">
            {(!collapse || mobile) && <h3>APLLICATION</h3>}
          </div>

          {/* Other Menu */}

          <div className="menu-item">
            <FaComments />
            {(!collapse || mobile) && <span>Chat</span>}
          </div>

          <div className="menu-item">
            <FaEnvelope />
            {(!collapse || mobile) && <span>Email</span>}
          </div>

          <div className="menu-item">
            <FaCalendarAlt />
            {(!collapse || mobile) && <span>Calendar</span>}
          </div>

          <div className="menu-item">
            <FaFolderOpen />
            {(!collapse || mobile) && <span>File Manager</span>}
          </div>

          <div className="menu-item">
            <FaClipboardList />
            {(!collapse || mobile) && <span>Task Board</span>}
          </div>

          <div className="menu-item">
            <FaBell />
            {(!collapse || mobile) && <span>Notifications</span>}
          </div>

          <div className="menu-item">
            <FaImages />
            {(!collapse || mobile) && <span>Gallery</span>}
          </div>

          <div className="menu-item">
            <FaUsers />
            {(!collapse || mobile) && <span>Users</span>}
          </div>

          <div className="menu-item">
            <FaFileInvoiceDollar />
            {(!collapse || mobile) && <span>Invoice</span>}
          </div>

          <div className="nav-application">
            {(!collapse || mobile) && <h3>E-COMMERCE</h3>}
          </div>

          {/* E-commerce */}

          <div className="menu-item">
            <FaBoxOpen />
            {(!collapse || mobile) && <span>Products</span>}
          </div>

          <div className="menu-item">
            <FaShoppingCart />
            {(!collapse || mobile) && <span>Cart</span>}
          </div>

          <div className="menu-item">
            <FaReceipt />
            {(!collapse || mobile) && <span>Orders</span>}
          </div>

          <div className="menu-item">
            <FaHeart />
            {(!collapse || mobile) && <span>Wishlist</span>}
          </div>

          <div className="nav-application">
            {(!collapse || mobile) && <h3>ELEMENTS</h3>}
          </div>

          {/* ELEMENTS */}

          <div className="menu-item">
            <FaFont />
            {(!collapse || mobile) && <span>Typography</span>}
          </div>

          <div className="menu-item">
            <FaLayerGroup />
            {(!collapse || mobile) && <span>Components</span>}
          </div>

          <div className="menu-item">
            <FaRegSmile />
            {(!collapse || mobile) && <span>Icons</span>}
          </div>

          <div className="nav-application">
            {(!collapse || mobile) && <h3>FORMS</h3>}
          </div>

          {/* FORMS */}

          <div className="menu-item">
            <FaEllipsisH />
            {(!collapse || mobile) && <span>Form Elements</span>}
          </div>

          <div className="menu-item">
            <FaTasks />
            {(!collapse || mobile) && <span>Form Wizard</span>}
          </div>

          <div className="menu-item">
            <FaEdit />
            {(!collapse || mobile) && <span>Editor</span>}
          </div>

          <div className="nav-application">
            {(!collapse || mobile) && <h3>TABLES</h3>}
          </div>

          {/* TBLES*/}

          <div className="menu-item">
            <FaTable />
            {(!collapse || mobile) && <span>Data Tables</span>}
          </div>

          <div className="nav-application">
            {(!collapse || mobile) && <h3>CHARTS & MAP</h3>}
          </div>

          {/* CHARTS & MAP */}

          <div className="menu-item">
            <FaChartPie />
            {(!collapse || mobile) && <span>Data Tables</span>}
          </div>

          <div className="nav-application">
            {(!collapse || mobile) && <h3>OTHER</h3>}
          </div>

          {/* OTHER */}

          <div className="menu-item">
            <FaBookOpen />
            {(!collapse || mobile) && <span>Data Tables</span>}
          </div>

          <div className="menu-item">
            <FaCreditCard />
            {(!collapse || mobile) && <span>Data Tables</span>}
          </div>

          <div className="menu-item">
            <FaGlobe />
            {(!collapse || mobile) && <span>Data Tables</span>}
          </div>

          <div className="dropdown">
            <div
              className="menu-item"
              onClick={() => setAuthenticationOpen(!authenticationOpen)}
            >
              <div className="menu-left">
                <FaThLarge />

                {(!collapse || mobile) && <span>Authentication</span>}
              </div>

              {(!collapse || mobile) && (
                <FaChevronDown
                  className={authenticationOpen ? "arrow rotate" : "arrow"}
                />
              )}
            </div>

            {/* Submenu */}

            {authenticationOpen && (!collapse || mobile) && (
              <div className="submenu">
                <p className="active-submenu">Login V1</p>

                <p className="active-submenu">Login V2</p>

                <p className="active-submenu">Register V1</p>

                <p className="active-submenu">Register V2</p>

                <p className="active-submenu">Forgot Password V1</p>

                <p className="active-submenu">Forgot Password V2</p>

                <p className="active-submenu">Reset Password V1</p>

                <p className="active-submenu">Reset Password V2</p>

                <p className="active-submenu">Verify Email V1</p>

                <p className="active-submenu">Verify Email V2</p>

                <p className="active-submenu">Two factor V1</p>

                <p className="active-submenu">Two factor V2</p>

                <p className="active-submenu">Lock Screen V1</p>

                <p className="active-submenu">Lock Screen V2</p>

                <p className="active-submenu">Account Disabled V1</p>

                <p className="active-submenu">Account Disabled V2</p>

                <p className="active-submenu">Password Changed V1</p>

                <p className="active-submenu">Password Changed V2</p>
              </div>
            )}
          </div>

          <div className="nav-application">
            {(!collapse || mobile) && <h3>UTILITY PAGES</h3>}
          </div>

          <div className="dropdown">
            <div
              className="menu-item"
              onClick={() => setUtilityOpen(!utilityOpen)}
            >
              <div className="menu-left">
                <FaExclamationTriangle />

                {(!collapse || mobile) && <span>Pages</span>}
              </div>

              {(!collapse || mobile) && (
                <FaChevronDown
                  className={utilityOpen ? "arrow rotate" : "arrow"}
                />
              )}
            </div>

            {/* Submenu */}

            {utilityOpen && (!collapse || mobile) && (
              <div className="submenu">
                <p className="active-submenu">Error 404</p>

                <p className="active-submenu">Error 500</p>

                <p className="active-submenu">Error 403</p>

                <p className="active-submenu">Maintenance</p>

                <p className="active-submenu">Coming Soon</p>

                <p className="active-submenu">Under Construction</p>

                <p className="active-submenu">Offline</p>

                <p className="active-submenu">Session Expired</p>

                <p className="active-submenu">Rate Limited</p>
              </div>
            )}
          </div>

          <div className="nav-application">
            {(!collapse || mobile) && <h3>SYSTEM</h3>}
          </div>

          {/* SYSTEM */}

          <div className="menu-item">
            <FaRegUserCircle />
            {(!collapse || mobile) && <span>Settings</span>}
          </div>

          <div className="menu-item">
            <FaBookOpen />
            {(!collapse || mobile) && <span>Documentation</span>}
          </div>

          <div className="profile-section">
            <div className="profile-left">
              <div className="profile-avatar">AS</div>
              {(!collapse || mobile) && (
                <div className="profile-info">
                  <h4>Aigars S.</h4>
                  <p>Admin</p>
                </div>
              )}
            </div>

            {(!collapse || mobile) && (
              <div className="logout-btn">
                <FaSignOutAlt />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
