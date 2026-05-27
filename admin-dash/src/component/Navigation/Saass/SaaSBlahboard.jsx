import React from "react";
import Chart from "react-apexcharts";
import "./SaaSBlahboard.css";

const SaaSBlahboard = () => {
  // 1. Setup for Mini Sparkline Charts in the Top Cards
  const sparklineOptions = (color) => ({
    chart: {
      type: "area",
      sparkline: { enabled: true },
      animations: { enabled: false },
      padding: {
        top: 5,
        bottom: 5,
        left: 0,
        right: 0,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2.5,
    },
    colors: [color],
    tooltip: { enabled: false },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.5,
        opacityFrom: 0.28,
        opacityTo: 0.0,
        stops: [0, 90, 100],
      },
    },
    markers: {
      size: 0,
    },
  });

  // 2. Individual Data Arrays matching each unique card wave from the screenshot
  const mrrSeries = [{ data: [35, 32, 42, 38, 45, 41, 52, 48, 62, 54, 70] }];
  const arrSeries = [{ data: [20, 25, 22, 35, 30, 48, 42, 55, 52, 65, 60] }];
  const churnSeries = [{ data: [40, 42, 55, 60, 52, 45, 58, 50, 42, 45, 20] }];
  const clvSeries = [{ data: [30, 32, 35, 38, 42, 45, 50, 53, 58, 62, 65] }];

  // 3. Setup for Main Revenue Growth Area Chart
  const revenueGrowthOptions = {
    chart: {
      type: "area",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: ["#3b82f6", "#10b981"],
    stroke: { curve: "smooth", width: 2 },
    dataLabels: { enabled: false },
    grid: {
      borderColor: "#f1f5f9",
      strokeDashArray: 4,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { colors: "#94a3b8", fontSize: "12px" } },
    },
    yaxis: {
      min: 0,
      max: 800,
      tickAmount: 4,
      labels: { style: { colors: "#94a3b8", fontSize: "12px" } },
    },
    legend: { show: false },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.15,
        opacityTo: 0.01,
        stops: [0, 100],
      },
    },
  };

  const revenueGrowthSeries = [
    {
      name: "MRR ($K)",
      data: [15, 20, 22, 28, 25, 32, 35, 38, 42, 45, 48, 55],
    },
    {
      name: "ARR ($K)",
      data: [300, 350, 330, 440, 420, 480, 520, 550, 510, 560, 600, 680],
    },
  ];

  // 4. Setup for Revenue by Plan Donut Chart
  const revenuePlanOptions = {
    chart: { type: "donut" },
    labels: ["Enterprise", "Professional", "Starter", "Free"],
    colors: ["#3b82f6", "#10b981", "#d97706", "#e2e8f0"],
    legend: { show: false },
    stroke: { width: 2, colors: ["#ffffff"] },
    plotOptions: {
      pie: {
        donut: {
          size: "72%",
          labels: { show: false },
        },
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "11px",
        fontWeight: "600",
        colors: ["#ffffff", "#ffffff", "#ffffff", "#64748b"],
      },
      dropShadow: { enabled: false },
      formatter: (val) => `${val.toFixed(1)}%`,
    },
  };

  const revenuePlanSeries = [45.0, 30.0, 15.0, 10.0];

  return (
    <div className="saas-dashboard">
      {/* Top Header Section */}
      <div className="dashboard-header">
        <h1 className="main-title">SaaS</h1>
        <div className="breadcrumb-trail">
          <span>Home</span> / <span>Dashboard</span> / <span className="active">SaaS</span>
        </div>
      </div>

      {/* Top Metrics Cards Row */}
      <div className="metrics-row">
        {/* Card 1: Monthly Recurring Revenue */}
        <div className="metric-card">
          <div className="card-info-wrap">
            <div className="card-text">
              <span className="card-title">Monthly Recurring Revenue</span>
              <h2 className="card-value">$1,68,875</h2>
              <span className="pill pill-green">+12.5%</span>
            </div>
            <div className="card-icon icon-blue">$</div>
          </div>
          <div className="sparkline-container">
            <Chart
              options={sparklineOptions("#3b82f6")}
              series={mrrSeries}
              type="area"
              height="100%"
              width="100%"
            />
          </div>
        </div>

        {/* Card 2: Annual Recurring Revenue */}
        <div className="metric-card">
          <div className="card-info-wrap">
            <div className="card-text">
              <span className="card-title">Annual Recurring Revenue</span>
              <h2 className="card-value">$20,26,500</h2>
              <span className="pill pill-green">+8.3%</span>
            </div>
            <div className="card-icon icon-teal">↗</div>
          </div>
          <div className="sparkline-container">
            <Chart
              options={sparklineOptions("#10b981")}
              series={arrSeries}
              type="area"
              height="100%"
              width="100%"
            />
          </div>
        </div>

        {/* Card 3: Churn Rate */}
        <div className="metric-card">
          <div className="card-info-wrap">
            <div className="card-text">
              <span className="card-title">Churn Rate</span>
              <h2 className="card-value">8.4%</h2>
              <span className="pill pill-red">-0.3%</span>
            </div>
            <div className="card-icon icon-red">👤</div>
          </div>
          <div className="sparkline-container">
            <Chart
              options={sparklineOptions("#ef4444")}
              series={churnSeries}
              type="area"
              height="100%"
              width="100%"
            />
          </div>
        </div>

        {/* Card 4: Customer Lifetime Value */}
        <div className="metric-card">
          <div className="card-info-wrap">
            <div className="card-text">
              <span className="card-title">Customer Lifetime Value</span>
              <h2 className="card-value">$4,340</h2>
              <span className="pill pill-green">+$85</span>
            </div>
            <div className="card-icon icon-orange">♡</div>
          </div>
          <div className="sparkline-container">
            <Chart
              options={sparklineOptions("#f59e0b")}
              series={clvSeries}
              type="area"
              height="100%"
              width="100%"
            />
          </div>
        </div>
      </div>

      {/* Analytics Visualization Section */}
      <div className="visualization-row">
        {/* Left Card: Revenue Growth */}
        <div className="viz-card growth-box">
          <div className="viz-card-header">
            <h3>Revenue Growth</h3>
            <div className="filter-toggle-group">
              <button className="toggle-btn">7d</button>
              <button className="toggle-btn active">30d</button>
              <button className="toggle-btn">90d</button>
            </div>
          </div>

          {/* Custom Sync Legend to match image perfectly */}
          <div className="custom-chart-legend">
            <div className="legend-item">
              <span className="dot dot-blue"></span> MRR ($K)
            </div>
            <div className="legend-item">
              <span className="dot dot-green"></span> ARR ($K)
            </div>
          </div>

          <div className="growth-chart-wrapper">
            <Chart
              options={revenueGrowthOptions}
              series={revenueGrowthSeries}
              type="area"
              height="100%"
            />
          </div>
        </div>

        {/* Right Card: Revenue by Plan */}
        <div className="viz-card plan-box">
          <div className="viz-card-header">
            <h3>Revenue by Plan</h3>
          </div>
          <div className="donut-chart-wrapper">
            <Chart
              options={revenuePlanOptions}
              series={revenuePlanSeries}
              type="donut"
              height="85%"
            />
          </div>

          {/* Custom Horizontal Bottom Legend */}
          <div className="donut-custom-legend">
            <div className="legend-item">
              <span className="dot dot-blue"></span> Enterprise
            </div>
            <div className="legend-item">
              <span className="dot dot-green"></span> Professional
            </div>
            <div className="legend-item">
              <span className="dot dot-orange"></span> Starter
            </div>
            <div className="legend-item">
              <span className="dot dot-gray"></span> Free
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaaSBlahboard;