import React from "react";
import FinanceDashboard from "../component/Navigation/Analy/Finance/FinanceDashboard";
import ExpenseDashboard from "../component/Navigation/Analy/Finance/ExpenseDashboard";

const Finance = () => {
  return (
    <div>
      <FinanceDashboard />
      <ExpenseDashboard />
    </div>
  );
};

export default Finance;
