import { ParkingCircleOff } from "lucide-react";
import React from "react";
import ParjectDashboard from "../component/Navigation/Projec/ProjectDashboard";
import TaskManagerDashboard from "../component/Navigation/Projec/TaskManagerDashboard";
const Project = () => {
  return (
    <div>
      <ParjectDashboard />
      <TaskManagerDashboard />
    </div>
  );
};

export default Project;
