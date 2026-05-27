import React, { useState } from "react";
import "./App.css";
import Sidebar from "./component/Navigation/Dashboard";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Analytics from "./pages/Analytics";
import CRM from "./pages/CRM";
import "./component/Navigation/Dashboard.css";
import Ecommerce from "./pages/Ecommerce.jsx";
import Finance from "./pages/Finance.jsx";
import Crypto from "./pages/Crypto.jsx";
import Project from "./pages/Project.jsx";

const App = () => {
  const [collapse, setCollapse] = useState(false);

  const [mobile, setMobile] = useState(false);

  return (
    <div className="app">
      <Sidebar collapse={collapse} mobile={mobile} setMobile={setMobile} />

      <div className="main-content">
        <Navbar
          collapse={collapse}
          setCollapse={setCollapse}
          mobile={mobile}
          setMobile={setMobile}
        />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Analytics />} />
            <Route path="/crm" element={<CRM />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/crypto" element={<Crypto />} />
             <Route path="/project" element={<Project />} />
          </Routes>

         
         
          {/* <Route path="/saas" element={<SaaS />} /> */}
          {/* <Route path="/hr" element={<HR />} /> */}
          {/* <Route path="/marketing" element={<Markrting />} /> */}
        </div>
      </div>
    </div>
  );
};

export default App;
