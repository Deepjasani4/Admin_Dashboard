import React, { useState } from "react";
import {
  ArrowUp,
  ArrowDown,
  Search,
  PlusCircle,
  SlidersHorizontal,
  Download,
} from "lucide-react";
import Chart from "react-apexcharts";
import "./CRMSWidgets.css";

export default function CRMSWidgets() {
  const [timeframe, setTimeframe] = useState("30d");
  const [searchOrder, setSearchOrder] = useState("");

  // ==========================================
  // APEXCHARTS CONFIGURATIONS
  // ==========================================

  // 1. Transactions Mini Line Sparkline (Image 1)
  const transactionSeries = [
    {
      name: "Transactions",
      data: [30, 25, 45, 30, 55, 40, 70, 65, 50, 60, 55, 45],
    },
  ];

  const transactionOptions = {
    chart: { type: "line", sparkline: { enabled: true } },
    stroke: { curve: "smooth", width: 2 },
    colors: ["#3b82f6"],
    tooltip: { enabled: false },
  };

  // 2. News Statistics Horizontal Bar Chart (Image 1)
  const newsSeries = [
    {
      data: [53, 13, 30, 4],
    },
  ];

  const newsOptions = {
    chart: { type: "bar", toolbar: { show: false } },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "32%",
        borderRadius: 4,
      },
    },
    colors: ["#2dd4bf"],
    dataLabels: { enabled: false },
    xaxis: {
      categories: ["Sport", "Music", "Travel", "News"],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { colors: "#64748b", fontFamily: "system-ui" } },
    },
    yaxis: {
      labels: {
        style: { colors: "#334155", fontWeight: 500, fontFamily: "system-ui" },
      },
    },
    grid: {
      borderColor: "#f1f5f9",
      strokeDashArray: 4,
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: false } },
    },
  };

  // Mock Data for Recent Orders Table (Image 3)
  const orders = [
    {
      id: "#467",
      code: "FLP-346",
      date: "Jan 2026",
      budget: "$450",
      status: "Completed",
      rating: 4,
    },
    {
      id: "#466",
      code: "FLP-345",
      date: "Jan 2026",
      budget: "$768",
      status: "Processing",
      rating: 3,
    },
    {
      id: "#465",
      code: "FLP-344",
      date: "Dec 2025",
      budget: "$298",
      status: "Completed",
      rating: 5,
    },
    {
      id: "#464",
      code: "FLP-343",
      date: "Dec 2025",
      budget: "$625",
      status: "Failed",
      rating: 2,
    },
    {
      id: "#463",
      code: "FLP-342",
      date: "Nov 2025",
      budget: "$475",
      status: "Completed",
      rating: 4,
    },
  ];

  return (
    <div className="crm-dashboard-wrapper">
      {/* ==========================================================================
         BLOCK 2: Bottom Visual Row (Products Sold Hero & Recent Orders Table) - Image 3
         ========================================================================== */}
      <div
        className="widgets-row-grid split-table-layout"
      >
        {/* Left Side: Solid Blue Products Sold Panel */}
        <div className="products-sold-hero-card">
          <div className="hero-center-content">
            <h2>375</h2>
            <span className="hero-subtitle">Products Sold This Month</span>
          </div>
        </div>

        {/* Right Side: Recent Orders Management Table */}
        <div className="crm-card">
          <div className="card-title-flex" style={{ marginBottom: "16px" }}>
            <span
              style={{ fontSize: "0.95rem", fontWeight: 600, color: "#1e293b" }}
            >
              Recent Orders
            </span>
          </div>

          <div className="toolbar-flex">
            <div className="search-wrapper">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search orders..."
                className="search-input"
                value={searchOrder}
                onChange={(e) => setSearchOrder(e.target.value)}
              />
            </div>

            <div className="action-buttons-group">
              <button className="btn-secondary">
                <PlusCircle className="btn-icon-sm" />
                <span>Status</span>
              </button>
              <button className="btn-secondary">
                <SlidersHorizontal className="btn-icon-sm" />
                <span>Columns</span>
              </button>
              <button className="btn-secondary">
                <Download className="btn-icon-sm" />
                <span>Export</span>
              </button>
            </div>
          </div>

          <div className="table-responsive">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Code</th>
                  <th>Date</th>
                  <th>Budget</th>
                  <th>Status</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, idx) => (
                  <tr key={idx}>
                    <td style={{ color: "#64748b" }}>{order.id}</td>
                    <td style={{ fontWeight: 500 }}>{order.code}</td>
                    <td style={{ color: "#64748b" }}>{order.date}</td>
                    <td style={{ fontWeight: 500 }}>{order.budget}</td>
                    <td>
                      <span
                        className={`status-badge ${order.status.toLowerCase()}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td>
                      <div className="star-rating-row">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={
                              i < order.rating ? "star filled" : "star empty"
                            }
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pagination-footer">
            <span>Showing 1-5 of 20 results</span>

            <div className="pagination-controls-right">
              <div className="rows-per-page-select">
                <span>Rows</span>
                <select className="custom-select">
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                </select>
              </div>

              <div className="pagination-buttons">
                <button className="btn-page-nav" disabled>
                  Previous
                </button>
                <button className="btn-page-number active">1</button>
                <button className="btn-page-number">2</button>
                <button className="btn-page-number">3</button>
                <button className="btn-page-number">4</button>
                <button className="btn-page-nav">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
