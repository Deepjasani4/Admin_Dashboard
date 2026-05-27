import React from "react";
import Chart from "react-apexcharts";
import "./Map.css";

const Map = () => {
  /* =========================
     WORLD MAP IMAGE
  ========================== */
  const worldMap =
    "https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg";

  /* =========================
     RADIAL CHART OPTIONS
  ========================== */
  const cpuOptions = {
    chart: { type: "radialBar" },
    plotOptions: {
      radialBar: {
        hollow: { size: "70%" },
        dataLabels: { show: false },
      },
    },
    colors: ["#ef4444"],
    stroke: { lineCap: "round" },
    labels: ["CPU"],
  };

  const memoryOptions = {
    chart: { type: "radialBar" },
    plotOptions: {
      radialBar: {
        hollow: { size: "70%" },
        dataLabels: { show: false },
      },
    },
    colors: ["#f59e0b"],
    stroke: { lineCap: "round" },
    labels: ["Memory"],
  };

  return (
    <div className="map-container">
      {/* LEFT SIDE CARD */}
      <div className="map-card">
        {/* HEADER */}
        <div className="map-header">
          <h2>Global User Distribution</h2>
          <span>Last 30 Days</span>
        </div>

        {/* STATS */}
        <div className="global-stats">
          <div className="stat-item txt-pink">
            <h3>24.5K</h3>
            <p>USA</p>
          </div>
          <div className="stat-item txt-green">
            <h3>18.2K</h3>
            <p>Europe</p>
          </div>
          <div className="stat-item txt-orange">
            <h3>12.8K</h3>
            <p>Asia</p>
          </div>
          <div className="stat-item txt-blue">
            <h3>8.1K</h3>
            <p>Others</p>
          </div>
        </div>

        {/* MAP CONTAINER */}
        <div className="map-box">
          <img src={worldMap} alt="world-map" />
        </div>
      </div>

      {/* RIGHT SIDE SECTION */}
      <div className="right-section">
        {/* CUSTOMER SENTIMENT */}
        <div className="sentiment-card">
          <h2>Customer Sentiment</h2>
          <div className="sentiment-content">
            <div>
              <h4 className="negative">NEGATIVE</h4>
              <h1>24%</h1>
              <p>287 Reviews</p>
            </div>
            <div>
              <h4 className="positive">POSITIVE</h4>
              <h1>76%</h1>
              <p>892 Reviews</p>
            </div>
          </div>
          <button className="view-reviews-btn">View All Reviews</button>
        </div>

        {/* SERVER PERFORMANCE */}
        <div className="server-card">
          <div className="server-header">
            <h2>Server Performance</h2>
            <span className="status-badge">Optimal</span>
          </div>

          <div className="server-chart">
            {/* CPU */}
            <div className="chart-item">
              <Chart
                options={cpuOptions}
                series={[67]}
                type="radialBar"
                height={130}
              />
              <h3>CPU Usage</h3>
              <p>67%</p>
            </div>

            {/* MEMORY */}
            <div className="chart-item">
              <Chart
                options={memoryOptions}
                series={[82]}
                type="radialBar"
                height={130}
              />
              <h3>Memory</h3>
              <p>82%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;