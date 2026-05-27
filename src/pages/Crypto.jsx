import { Cylinder } from "lucide-react";
import React from "react";
import CryptoDashboard from "../component/Navigation/Cyptos/CryptoDashboard";
import MarketOverviewDashboard from "../component/Navigation/Cyptos/MarketOverviewDashboard";

const Crypto = () => {
  return (
    <div>
      <CryptoDashboard />
      <MarketOverviewDashboard />
    </div>
  );
};

export default Crypto;
