import React from "react";
import Chart from "react-apexcharts";
import "./RevenueSection.css";

const RevenueSection = () => {

  const revenueChartOptions = {
    chart: {
      type: "line",
      toolbar: { show: false },

      redrawOnParentResize: true, 
    },
    stroke: {
      curve: "smooth",
      width: [3, 2, 2],
      dashArray: [0, 4, 0], 
    },
    colors: ["#3b82f6", "#10b981", "#f59e0b"], 
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      min: 10,
      max: 80,
      tickAmount: 7,
    },
    grid: {
      borderColor: "#f1f5f9",
      strokeDashArray: 4,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      markers: { radius: 12 },
    },
    
    responsive: [
      {
        breakpoint: 640, 
        options: {
          chart: {
            height: 260, 
          },
          legend: {
            position: "bottom", 
            horizontalAlign: "center",
          },
          yaxis: {
            tickAmount: 4, 
          }
        },
      },
    ],
  };

  const revenueChartSeries = [
    {
      name: "Actual",
      data: [18, 24, 28, 32, 38, 41, 48, 51, 54],
    },
    {
      name: "Forecast",
      data: [20, 26, 27, 35, 36, 43, 46, 50, 53],
    },
    {
      name: "Target",
      data: [15, 22, 25, 30, 34, 40, 44, 49, 55],
    },
  ];

  return (
    <div className="revenue-grid-container">
      {/* LEFT SIDE: REVENUE TRENDS LINE CHART */}
      <div className="revenue-card main-chart-card">
        <div className="revenue-header">
          <h2>Revenue Trends</h2>
        </div>
        <div className="chart-body">
          <Chart
            options={revenueChartOptions}
            series={revenueChartSeries}
            type="line"
            height="100%" 
          />
        </div>
      </div>

      {/* RIGHT SIDE: TOP REGIONS & GOAL PROGRESS */}
      <div className="revenue-right-column">
        {/* TOP REGIONS CARD */}
        <div className="revenue-card">
          <div className="revenue-header">
            <h2>Top Regions</h2>
          </div>
          <div className="regions-list">
            <div className="region-item">
              <div>
                <h4>North America</h4>
                <p>$247,890</p>
              </div>
              <span className="trend-up">↑ +24.5%</span>
            </div>
            <div className="region-item">
              <div>
                <h4>Europe</h4>
                <p>$198,456</p>
              </div>
              <span className="trend-up">↑ +18.2%</span>
            </div>
            <div className="region-item">
              <div>
                <h4>Asia Pacific</h4>
                <p>$156,789</p>
              </div>
              <span className="trend-up">↑ +31.7%</span>
            </div>
            <div className="region-item">
              <div>
                <h4>Latin America</h4>
                <p>$89,234</p>
              </div>
              <span className="trend-down">↓ -5.3%</span>
            </div>
          </div>
        </div>

        {/* GOAL PROGRESS CARD */}
        <div className="revenue-card">
          <div className="revenue-header">
            <h2>Goal Progress</h2>
          </div>
          <div className="progress-list">
            {/* MONTHLY */}
            <div className="progress-item">
              <div className="progress-labels">
                <span>Monthly</span>
                <strong>78%</strong>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill bar-pink" style={{ width: "78%" }}></div>
              </div>
            </div>

            {/* QUARTERLY */}
            <div className="progress-item">
              <div className="progress-labels">
                <span>Quarterly</span>
                <strong>92%</strong>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill bar-green" style={{ width: "92%" }}></div>
              </div>
            </div>

            {/* ANNUAL */}
            <div className="progress-item">
              <div className="progress-labels">
                <span>Annual</span>
                <strong>65%</strong>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill bar-orange" style={{ width: "65%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueSection;