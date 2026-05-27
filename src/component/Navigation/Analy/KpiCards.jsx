import React from "react";
import Chart from "react-apexcharts";
import "./KpiCards.css";

const KpiCards = () => {

  // 1. Sales Performance (Blue Radial)
  const salesOptions = {
    chart: { 
      type: "radialBar",
      redrawOnParentResize: true 
    },
    plotOptions: {
      radialBar: {
        hollow: { size: "65%" },
        dataLabels: {
          show: true,
          name: { show: false },
          value: {
            fontSize: "18px",
            fontWeight: "700",
            color: "#111827",
            offsetY: 6,
          },
        },
      },
    },
    colors: ["#3b82f6"],
    stroke: { lineCap: "round" },
  };

  // 2. Customer Satisfaction (Green Radial)
  const satisfactionOptions = {
    chart: { 
      type: "radialBar",
      redrawOnParentResize: true 
    },
    plotOptions: {
      radialBar: {
        hollow: { size: "65%" },
        dataLabels: {
          show: true,
          name: { show: false },
          value: {
            fontSize: "18px",
            fontWeight: "700",
            color: "#111827",
            offsetY: 6,
            formatter: () => "4.8/5",
          },
        },
      },
    },
    colors: ["#10b981"],
    stroke: { lineCap: "round" },
  };

  // 3. System Uptime (Orange Radial)
  const uptimeOptions = {
    chart: { 
      type: "radialBar",
      redrawOnParentResize: true 
    },
    plotOptions: {
      radialBar: {
        hollow: { size: "65%" },
        dataLabels: {
          show: true,
          name: { show: false },
          value: {
            fontSize: "16px",
            fontWeight: "700",
            color: "#111827",
            offsetY: 6,
            formatter: () => "99.9%",
          },
        },
      },
    },
    colors: ["#f59e0b"],
    stroke: { lineCap: "round" },
  };

  // 4. API Response Time (Sparkline Spark Line)
  const apiChartOptions = {
    chart: {
      type: "line",
      sparkline: { enabled: true },
      redrawOnParentResize: true
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#0ea5e9"],
    tooltip: { enabled: false },
  };

  const apiChartSeries = [
    { name: "Response Time", data: [240, 255, 238, 248, 242, 251, 247] },
  ];

  return (
    <div className="kpi-grid-container">
      {/* CARD 1: SALES PERFORMANCE */}
      <div className="kpi-card">
        <div className="kpi-chart-wrapper">
          <Chart
            options={salesOptions}
            series={[87]}
            type="radialBar"
            height={140}
            width="100%"
          />
        </div>
        <h3>Sales Performance</h3>
        <p>87% of target</p>
      </div>

      {/* CARD 2: CUSTOMER SATISFACTION */}
      <div className="kpi-card">
        <div className="kpi-chart-wrapper">
          <Chart
            options={satisfactionOptions}
            series={[96]}
            type="radialBar"
            height={140}
            width="100%"
          />
        </div>
        <h3>Customer Satisfaction</h3>
        <p>4.8 out of 5</p>
      </div>

      {/* CARD 3: SYSTEM UPTIME */}
      <div className="kpi-card">
        <div className="kpi-chart-wrapper">
          <Chart
            options={uptimeOptions}
            series={[99.9]}
            type="radialBar"
            height={140}
            width="100%"
          />
        </div>
        <h3>System Uptime</h3>
        <p>99.9% — Last 30 days</p>
      </div>

      {/* CARD 4: API RESPONSE TIME */}
      <div className="kpi-card">
        <div className="api-sparkline-container">
          <Chart
            options={apiChartOptions}
            series={apiChartSeries}
            type="line"
            height={50}
            width="100%"
          />
        </div>
        <h3>API Response Time</h3>
        <p className="api-value">~247ms</p>
      </div>
    </div>
  );
};

export default KpiCards;