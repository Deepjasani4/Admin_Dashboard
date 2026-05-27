import React from "react";
import Chart from "react-apexcharts";
import "./HRDashboard.css";

const HRDashboard = () => {
  // 1. Reusable config generator for individual top card sparklines
  const sparklineOptions = (color) => ({
    chart: {
      type: "area",
      sparkline: { enabled: true },
      animations: { enabled: false },
      padding: { top: 6, bottom: 6, left: 0, right: 0 },
    },
    stroke: { curve: "smooth", width: 2.5 },
    colors: [color],
    tooltip: { enabled: false },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.5,
        opacityFrom: 0.25,
        opacityTo: 0.0,
        stops: [0, 90, 100],
      },
    },
    markers: { size: 0 },
  });

  // 2. Specific mini-chart wave shapes mapped directly from the screenshot trends
  const totalEmployeesSeries = [{ data: [10, 15, 22, 28, 35, 42, 48, 55, 62, 70] }];
  const openPositionsSeries  = [{ data: [35, 20, 45, 30, 52, 40, 58, 42, 65, 50] }];
  const attendanceRateSeries = [{ data: [40, 15, 65, 20, 55, 80, 50, 75, 45, 60] }];
  const avgTenureSeries      = [{ data: [20, 24, 28, 30, 35, 38, 42, 45, 50, 55] }];

  // 3. Main Headcount Trend Chart Options
  const headcountTrendOptions = {
    chart: {
      type: "area",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: ["#3b82f6", "#ef4444"], // Headcount (Blue), Departures (Red)
    stroke: { curve: "smooth", width: 2 },
    dataLabels: { enabled: false },
    grid: {
      borderColor: "#f1f5f9",
      strokeDashArray: 4,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    xaxis: {
      categories: [
        "Apr 25", "May 25", "Jun 25", "Jul 25", "Aug 25", "Sep 25",
        "Oct 25", "Nov 25", "Dec 25", "Jan 26", "Feb 26", "Mar 26"
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { colors: "#94a3b8", fontSize: "12px" } },
    },
    yaxis: {
      min: 0,
      max: 250,
      tickAmount: 5,
      labels: { style: { colors: "#94a3b8", fontSize: "12px" } },
    },
    legend: { show: false },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.12,
        opacityTo: 0.0,
        stops: [0, 100],
      },
    },
  };

  const headcountTrendSeries = [
    {
      name: "Headcount",
      data: [210, 215, 218, 222, 220, 225, 226, 228, 230, 232, 231, 235],
    },
    {
      name: "Departures",
      data: [8, 6, 5, 4, 8, 7, 5, 6, 4, 5, 3, 4],
    },
  ];

  // 4. Department Breakdown Donut Chart Options
  const departmentBreakdownOptions = {
    chart: { type: "donut" },
    labels: ["Engineering", "Marketing", "Sales", "Design", "HR"],
    colors: ["#3b82f6", "#10b981", "#d97706", "#8b5cf6", "#06b6d4"],
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
        colors: ["#ffffff"],
      },
      dropShadow: { enabled: false },
      formatter: (val) => `${val.toFixed(1)}%`,
    },
  };

  const departmentBreakdownSeries = [35.0, 25.0, 20.0, 12.0, 8.0];

  return (
    <div className="hr-dashboard">
      {/* Top Header Section */}
      <div className="dashboard-header">
        <h1 className="main-title">HR</h1>
        <div className="breadcrumb-trail">
          <span>Home</span> / <span>Dashboard</span> / <span className="active">HR</span>
        </div>
      </div>

      {/* Top Metrics Cards Row */}
      <div className="metrics-row">
        {/* Card 1: Total Employees */}
        <div className="metric-card">
          <div className="card-info-wrap">
            <div className="card-text">
              <span className="card-title">Total Employees</span>
              <h2 className="card-value">868</h2>
              <span className="pill pill-green">+12 this month</span>
            </div>
            <div className="card-icon icon-blue">👥</div>
          </div>
          <div className="sparkline-container">
            <Chart
              options={sparklineOptions("#3b82f6")}
              series={totalEmployeesSeries}
              type="area"
              height="100%"
              width="100%"
            />
          </div>
        </div>

        {/* Card 2: Open Positions */}
        <div className="metric-card">
          <div className="card-info-wrap">
            <div className="card-text">
              <span className="card-title">Open Positions</span>
              <h2 className="card-value">56</h2>
              <span className="pill pill-yellow">5 urgent</span>
            </div>
            <div className="card-icon icon-teal">💼</div>
          </div>
          <div className="sparkline-container">
            <Chart
              options={sparklineOptions("#06b6d4")}
              series={openPositionsSeries}
              type="area"
              height="100%"
              width="100%"
            />
          </div>
        </div>

        {/* Card 3: Attendance Rate */}
        <div className="metric-card">
          <div className="card-info-wrap">
            <div className="card-text">
              <span className="card-title">Attendance Rate</span>
              <h2 className="card-value">329.7%</h2>
              <span className="pill pill-green">+1.3%</span>
            </div>
            <div className="card-icon icon-green">📅</div>
          </div>
          <div className="sparkline-container">
            <Chart
              options={sparklineOptions("#10b981")}
              series={attendanceRateSeries}
              type="area"
              height="100%"
              width="100%"
            />
          </div>
        </div>

        {/* Card 4: Avg Tenure */}
        <div className="metric-card">
          <div className="card-info-wrap">
            <div className="card-text">
              <span className="card-title">Avg Tenure</span>
              <h2 className="card-value">11.2 years</h2>
              <span className="pill pill-blue">+0.4</span>
            </div>
            <div className="card-icon icon-orange">🕒</div>
          </div>
          <div className="sparkline-container">
            <Chart
              options={sparklineOptions("#f59e0b")}
              series={avgTenureSeries}
              type="area"
              height="100%"
              width="100%"
            />
          </div>
        </div>
      </div>

      {/* Analytics Visualization Section */}
      <div className="visualization-row">
        {/* Left Card: Headcount Trend */}
        <div className="viz-card growth-box">
          <div className="viz-card-header">
            <h3>Headcount Trend</h3>
            <div className="filter-toggle-group">
              <button className="toggle-btn">7d</button>
              <button className="toggle-btn active">30d</button>
              <button className="toggle-btn">90d</button>
            </div>
          </div>

          {/* Sync Legend Wrapper */}
          <div className="custom-chart-legend">
            <div className="legend-item">
              <span className="dot dot-blue"></span> Headcount
            </div>
            <div className="legend-item">
              <span className="dot dot-red"></span> Departures
            </div>
          </div>

          <div className="growth-chart-wrapper">
            <Chart
              options={headcountTrendOptions}
              series={headcountTrendSeries}
              type="area"
              height="100%"
            />
          </div>
        </div>

        {/* Right Card: Department Breakdown */}
        <div className="viz-card plan-box">
          <div className="viz-card-header">
            <h3>Department Breakdown</h3>
          </div>
          <div className="donut-chart-wrapper">
            <Chart
              options={departmentBreakdownOptions}
              series={departmentBreakdownSeries}
              type="donut"
              height="85%"
            />
          </div>

          {/* Bottom Horizontal Layout Donut Legend */}
          <div className="donut-custom-legend">
            <div className="legend-item">
              <span className="dot dot-blue"></span> Engineering
            </div>
            <div className="legend-item">
              <span className="dot dot-green"></span> Marketing
            </div>
            <div className="legend-item">
              <span className="dot dot-orange"></span> Sales
            </div>
            <div className="legend-item">
              <span className="dot dot-purple"></span> Design
            </div>
            <div className="legend-item">
              <span className="dot dot-cyan"></span> HR
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;