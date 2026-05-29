import React, { useState } from "react";
import {
  Phone,
  Search,
  PlusCircle,
  SlidersHorizontal,
  Check,
  X,
} from "lucide-react";
import Chart from "react-apexcharts"; // Importing ApexCharts
import "./UserDashboard.css";

// Initialized Mock User Roster
const initialUsers = [
  {
    id: 1,
    name: "Alex Smith",
    email: "alex.smith@example.com",
    status: "Approved",
    avatarBg: "#db2777",
    initials: "AS",
  },
  {
    id: 2,
    name: "John Doe",
    email: "john.doe@example.com",
    status: "Pending",
    avatarBg: "#059669",
    initials: "JD",
  },
  {
    id: 3,
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    status: "Approved",
    avatarBg: "#ea580c",
    initials: "SW",
  },
  {
    id: 4,
    name: "Mike Johnson",
    email: "mike.j@example.com",
    status: "Pending",
    avatarBg: "#2563eb",
    initials: "MJ",
  },
  {
    id: 5,
    name: "Emma Lewis",
    email: "emma.lewis@example.com",
    status: "Pending",
    avatarBg: "#7c3aed",
    initials: "EL",
  },
];

export default function UserDashboard() {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Row operations
  const handleApprove = (id) => {
    setUsers(
      users.map((u) => (u.id === id ? { ...u, status: "Approved" } : u)),
    );
  };

  const handleReject = (id) => {
    setUsers(
      users.map((u) => (u.id === id ? { ...u, status: "Rejected" } : u)),
    );
  };

  // Live client-side text filtering
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // ==========================================
  // APEXCHARTS CONFIGURATION (Donut Chart)
  // ==========================================
  const chartSeries = [65.0, 25.0, 10.0]; // Values for Answered, Missed, Voicemail

  const chartOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Answered", "Missed", "Voicemail"],
    colors: ["#3b82f6", "#ea580c", "#dc2626"], // Blue, Orange, Red
    stroke: {
      width: 2,
      colors: ["#ffffff"],
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val.toFixed(1) + "%";
      },
      style: {
        fontSize: "11px",
        fontFamily: "system-ui, sans-serif",
        fontWeight: "700",
        colors: ["#ffffff"],
      },
      dropShadow: {
        enabled: false,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "62%", // Controls the inner radius size
        },
      },
    },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "13px",
      fontFamily: "system-ui, sans-serif",
      fontWeight: 400,
      labels: {
        colors: "#475569",
      },
      markers: {
        width: 10,
        height: 10,
        radius: 12,
        offsetX: -3,
      },
      itemMargin: {
        horizontal: 8,
        vertical: 4,
      },
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function (val) {
          return val + "%";
        },
      },
    },
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-grid">
        {/* LEFT WIDGET: Phone Call Metrics */}
        <div className="dash-card">
          <div className="card-title-flex">
            <Phone className="phone-icon" />
            <span>Phone Calls</span>
          </div>

          {/* ApexCharts Donut Render Wrapper */}
          <div
            className="chart-container"
            style={{ display: "block", height: "auto" }}
          >
            <Chart
              options={chartOptions}
              series={chartSeries}
              type="donut"
              width="100%"
              height={270}
            />
          </div>
        </div>

        {/* RIGHT WIDGET: User Management Matrix */}
        <div className="dash-card">
          <div className="card-title-flex" style={{ marginBottom: "16px" }}>
            <span>Recent Users</span>
          </div>

          {/* Filtering Tools Toolbar Container */}
          <div className="toolbar-flex">
            <div className="search-wrapper">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search users..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
            </div>
          </div>

          {/* Native Responsive Table Layer */}
          <div className="table-responsive">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>
                    User <span className="sort-icon-span">▲▼</span>
                  </th>
                  <th>
                    Email <span className="sort-icon-span">▲▼</span>
                  </th>
                  <th>
                    Status <span className="sort-icon-span">▲▼</span>
                  </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <div className="user-info-cell">
                        <div
                          className="avatar-circle"
                          style={{ backgroundColor: user.avatarBg }}
                        >
                          {user.initials}
                        </div>
                        <span>{user.name}</span>
                      </div>
                    </td>
                    <td className="email-text">{user.email}</td>
                    <td>
                      <span
                        className={`status-badge ${user.status.toLowerCase()}`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td>
                      <div className="actions-cell-flex">
                        <button
                          className="btn-action-approve"
                          onClick={() => handleApprove(user.id)}
                        >
                          <Check size={12} /> Approve
                        </button>
                        <button
                          className="btn-action-reject"
                          onClick={() => handleReject(user.id)}
                        >
                          <X size={12} /> Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredUsers.length === 0 && (
                  <tr>
                    <td
                      colSpan="4"
                      style={{
                        textAlign: "center",
                        padding: "24px",
                        color: "#94a3b8",
                      }}
                    >
                      No matching records located.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Controlled Interactive Pagination Layer */}
          <div className="pagination-footer">
            <span>Showing 1-{filteredUsers.length} of 15 results</span>

            <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              <div className="rows-per-page-select">
                <span>Rows</span>
                <select
                  className="custom-select"
                  value={rowsPerPage}
                  onChange={(e) => setRowsPerPage(Number(e.target.value))}
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                </select>
              </div>

              <div className="pagination-buttons">
                <button className="btn-page-nav" disabled>
                  Previous
                </button>
                <button className="btn-page-number active">1</button>
                <button className="btn-page-number">2</button>
                <button className="btn-page-number">3</button>
                <button className="btn-page-nav">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
