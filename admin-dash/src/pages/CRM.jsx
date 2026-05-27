import React from "react";
import CRMDashboard from "../component/Navigation/Analy/Crm/CRMDashboard";
import UserDashboard from "../component/Navigation/Analy/Crm/UserDashboard";
import CRMWidgets from "../component/Navigation/Analy/Crm/CRMWidgets";

const CRM = () => {
  return (
    <div>
      <CRMDashboard />
      <UserDashboard />
      <CRMWidgets />
    </div>
  );
};

export default CRM;
