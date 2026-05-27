import React from "react";
import HrDashboard from "../component/Navigation/HR/HRDashboard";
import SecondDashboard from "../component/Navigation/HR/Secon";
import HRLeaveRequestsPanel from "../component/Navigation/HR/HRLeaveRequestsPanel";
const Hr = () => {
  return (
    <div>
      <HrDashboard />
      <SecondDashboard />
      <HRLeaveRequestsPanel />
    </div>
  );
};

export default Hr;
