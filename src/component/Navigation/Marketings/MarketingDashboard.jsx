import React from "react";
import Chart from "react-apexcharts";
import "./MarketingDashboard.css";

const MarketingDashboard = () => {
  // 1. Configuration generator for individual top card sparklines
  const sparklineOptions = (color) => ({
    chart: {
      type: "area",
      sparkline: { enabled: true },
      animations: { enabled: false },
    },
    stroke: { curve: "smooth", width: 2 },
    colors: [color],
    tooltip: { enabled: false },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.15,
        opacityTo: 0.0,
        stops: [0, 100],
      },
    },
    markers: { size: 0 },
  });

  // Sparkline chart tracking waves matching the card layouts
  const visitorsSeries    = [{ data: [30, 42, 35, 50, 40, 62, 48, 70, 65, 75] }];
  const leadsSeries        = [{ data: [20, 25, 45, 30, 38, 55, 42, 48, 52, 60] }];
  const conversionSeries   = [{ data: [15, 30, 22, 40, 32, 50, 45, 65, 58, 72] }];
  const roiSeries          = [{ data: [25, 32, 28, 42, 35, 50, 48, 58, 62, 70] }];

  // 2. Campaign Performance (Grouped Multi-Bar Chart)
  const campaignChartOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    colors: ["#3b82f6", "#10b981", "#f59e0b"], // Email (Blue), Social (Teal), PPC (Orange)
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 2,
      },
    },
    dataLabels: { enabled: false },
    grid: {
      borderColor: "#f1f5f9",
      strokeDashArray: 4,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    xaxis: {
      categories: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { colors: "#94a3b8", fontSize: "12px" } },
    },
    yaxis: {
      min: 0,
      max: 8000,
      tickAmount: 4,
      labels: { style: { colors: "#94a3b8", fontSize: "12px" } },
    },
    legend: { show: false }, // Handled via HTML custom legend matching design perfectly
  };

  const campaignChartSeries = [
    { name: "Email", data: [4200, 3800, 5100, 4600, 5500, 6200] },
    { name: "Social", data: [2800, 3200, 2900, 3600, 4100, 3800] },
    { name: "PPC", data: [1800, 2100, 2400, 1900, 2800, 3100] },
  ];

  // 3. Traffic Sources Donut Chart
  const trafficChartOptions = {
    chart: { type: "donut" },
    labels: ["Organic", "Social", "Paid", "Direct"],
    colors: ["#3b82f6", "#10b981", "#d97706", "#8b5cf6"],
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

  const trafficChartSeries = [35.0, 28.0, 22.0, 15.0];

  return (
    <div className="marketing-dashboard">
      {/* Header Path Trail */}
      <div className="dashboard-header">
        <h1 className="main-title">Marketing</h1>
        <div className="breadcrumb-trail">
          <span>Home</span> / <span>Dashboard</span> / <span className="active">Marketing</span>
        </div>
      </div>

      {/* 4 Cards Stats Segment */}
      <div className="metrics-grid-row">
        {/* Card 1: Website Visitors */}
        <div className="metric-mini-card">
          <div className="card-top-layout">
            <div className="card-values">
              <span className="card-label">Website Visitors</span>
              <h2 className="card-number">2,94,805</h2>
              <span className="rate-pill pill-green">+18.2%</span>
            </div>
            <div className="card-round-icon bg-blue">🌐</div>
          </div>
          <div className="card-sparkline-wrap">
            <Chart options={sparklineOptions("#3b82f6")} series={visitorsSeries} type="area" height="100%" width="100%" />
          </div>
        </div>

        {/* Card 2: Leads Generated */}
        <div className="metric-mini-card">
          <div className="card-top-layout">
            <div className="card-values">
              <span className="card-label">Leeds Generated</span>
              <h2 className="card-number">4,358</h2>
              <span className="rate-pill pill-green">+23.5%</span>
            </div>
            <div className="card-round-icon bg-teal">👤+</div>
          </div>
          <div className="card-sparkline-wrap">
            <Chart options={sparklineOptions("#10b981")} series={leadsSeries} type="area" height="100%" width="100%" />
          </div>
        </div>

        {/* Card 3: Conversion Rate */}
        <div className="metric-mini-card">
          <div className="card-top-layout">
            <div className="card-values">
              <span className="card-label">Conversion Rate</span>
              <h2 className="card-number">13.3%</h2>
              <span className="rate-pill pill-green">+0.5%</span>
            </div>
            <div className="card-round-icon bg-orange">%</div>
          </div>
          <div className="card-sparkline-wrap">
            <Chart options={sparklineOptions("#f59e0b")} series={conversionSeries} type="area" height="100%" width="100%" />
          </div>
        </div>

        {/* Card 4: Ad Spend ROI */}
        <div className="metric-mini-card">
          <div className="card-top-layout">
            <div className="card-values">
              <span className="card-label">Ad Spend ROI</span>
              <h2 className="card-number">14.7x</h2>
              <span className="rate-pill pill-green">+0.8x</span>
            </div>
            <div className="card-round-icon bg-blue-light">📈</div>
          </div>
          <div className="card-sparkline-wrap">
            <Chart options={sparklineOptions("#3b82f6")} series={roiSeries} type="area" height="100%" width="100%" />
          </div>
        </div>
      </div>

      {/* Visual Charts Layout Splits */}
      <div className="charts-flex-split">
        {/* Left Side: Campaign Performance */}
        <div className="visual-chart-box width-65">
          <div className="visual-box-header">
            <h3>Campaign Performance</h3>
            <div className="date-toggle-tabs">
              <button className="tab-btn">7d</button>
              <button className="tab-btn active">30d</button>
              <button className="tab-btn">90d</button>
            </div>
          </div>

          {/* Sync Core Legend Labels */}
          <div className="bars-graph-legend">
            <div className="legend-marker-item"><span className="indicator-dot dot-blue"></span> Email</div>
            <div className="legend-marker-item"><span className="indicator-dot dot-teal"></span> Social</div>
            <div className="legend-marker-item"><span className="indicator-dot dot-orange"></span> PPC</div>
          </div>

          <div className="apex-chart-container">
            <Chart options={campaignChartOptions} series={campaignChartSeries} type="bar" height="100%" />
          </div>
        </div>

        {/* Right Side: Traffic Sources */}
        <div className="visual-chart-box width-35">
          <div className="visual-box-header">
            <h3>Traffic Sources</h3>
          </div>
          <div className="donut-chart-container">
            <Chart options={trafficChartOptions} series={trafficChartSeries} type="donut" height="85%" />
          </div>

          {/* Horizontal Bottom Legend List */}
          <div className="donut-graph-legend">
            <div className="legend-marker-item"><span className="indicator-dot dot-blue"></span> Organic</div>
            <div className="legend-marker-item"><span className="indicator-dot dot-teal"></span> Social</div>
            <div className="legend-marker-item"><span className="indicator-dot dot-orange"></span> Paid</div>
            <div className="legend-marker-item"><span className="indicator-dot dot-purple"></span> Direct</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingDashboard;