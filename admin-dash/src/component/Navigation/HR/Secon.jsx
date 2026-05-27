import React from "react";
import Chart from "react-apexcharts";
import "./Secon.css";

const SecondDashboard = () => {
  // 1. Gender Distribution (Multi-radial / Concentric Rings Chart)
  const genderChartOptions = {
    chart: {
      type: "radialBar",
    },
    colors: ["#3b82f6", "#ec4899", "#cbd5e1"], // Male, Female, Non-binary/Other
    plotOptions: {
      radialBar: {
        track: {
          background: "#f1f5f9",
          strokeWidth: "85%",
        },
        dataLabels: {
          name: {
            show: true,
            fontSize: "14px",
            fontWeight: "600",
            color: "#64748b",
            offsetY: -10,
          },
          value: {
            show: true,
            fontSize: "20px",
            fontWeight: "700",
            color: "#1e293b",
            offsetY: 4,
            formatter: () => "248", // Hardcoded total label to match design
          },
        },
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Total"],
  };

  const genderChartSeries = [80, 65, 45];

  // 2. Attendance This Week Column Chart
  const attendanceChartOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    colors: ["#2dd4bf"], // Teal bars
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "35%",
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
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { colors: "#94a3b8", fontSize: "12px" } },
    },
    yaxis: {
      min: 80,
      max: 100,
      tickAmount: 4,
      labels: { style: { colors: "#94a3b8", fontSize: "12px" } },
    },
  };

  const attendanceChartSeries = [
    {
      name: "Attendance",
      data: [95, 92, 97, 94, 88],
    },
  ];

  // 3. Mock Data for Applications Table
  const applications = [
    {
      id: "AK",
      name: "Alex Kumar",
      position: "Senior Developer",
      date: "Mar 28",
      status: "Reviewed",
      color: "#3b82f6",
    },
    {
      id: "LP",
      name: "Lisa Park",
      position: "UX Designer",
      date: "Mar 27",
      status: "New",
      color: "#f59e0b",
    },
    {
      id: "JR",
      name: "James Rodriguez",
      position: "Sales Manager",
      date: "Mar 26",
      status: "Shortlisted",
      color: "#10b981",
    },
    {
      id: "MN",
      name: "Maria Nguyen",
      position: "Data Analyst",
      date: "Mar 25",
      status: "New",
      color: "#ef4444",
    },
    {
      id: "TW",
      name: "Tom Wilson",
      position: "Marketing Lead",
      date: "Mar 24",
      status: "Shortlisted",
      color: "#8b5cf6",
    },
  ];

  return (
    <div className="hr-dashboard-p3">
      {/* Top row widget segment breakdown */}
      <div className="widgets-grid-3x">
        {/* Widget 1: Gender Distribution */}
        <div className="card-widget">
          <h3 className="card-widget-title">Gender Distribution</h3>
          <div className="radial-wrapper">
            <Chart
              options={genderChartOptions}
              series={genderChartSeries}
              type="radialBar"
              height="100%"
            />
          </div>
        </div>

        {/* Widget 2: Attendance This Week */}
        <div className="card-widget">
          <h3 className="card-widget-title">Attendance This Week</h3>
          <div className="column-chart-wrapper">
            <Chart
              options={attendanceChartOptions}
              series={attendanceChartSeries}
              type="bar"
              height="100%"
            />
          </div>
        </div>

        {/* Widget 3: Upcoming Events */}
        <div className="card-widget">
          <h3 className="card-widget-title">Upcoming Events</h3>
          <div className="events-timeline">
            <div className="event-item">
              <span className="event-indicator indicator-blue"></span>
              <div className="event-details">
                <h4>Team Standup</h4>
                <p>Today 10:00 AM</p>
              </div>
            </div>
            <div className="event-item">
              <span className="event-indicator indicator-orange"></span>
              <div className="event-details">
                <h4>Sarah's Birthday</h4>
                <p>Tomorrow</p>
              </div>
            </div>
            <div className="event-item">
              <span className="event-indicator indicator-cyan"></span>
              <div className="event-details">
                <h4>Q1 Review</h4>
                <p>Mar 31</p>
              </div>
            </div>
            <div className="event-item">
              <span className="event-indicator indicator-green"></span>
              <div className="event-details">
                <h4>New Hire Orientation</h4>
                <p>Apr 1</p>
              </div>
            </div>
            <div className="event-item">
              <span className="event-indicator indicator-red"></span>
              <div className="event-details">
                <h4>Company All-Hands</h4>
                <p>Apr 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Main Area: Recent Applications Data Grid */}
      <div className="applications-main-card">
        <h3 className="card-widget-title font-dark">Recent Applications</h3>

        {/* Table Filter Top Toolbar controls */}
        <div className="table-action-toolbar">
          <div className="left-search-group">
            <div className="search-input-wrapper">
              <span className="search-glass-icon">🔍</span>
              <input
                type="text"
                placeholder="Search applicants..."
                className="search-input"
              />
            </div>
            <button className="toolbar-filter-btn">
              <span className="plus-icon">+</span> Status
            </button>
          </div>
            <button className="toolbar-columns-toggle-btn">
            <span className="column-layout-icon">📊</span> Columns
          </button>
        </div>
    
        {/* Table Container frame */}
        <div className="table-responsive-box">
          <table className="applications-data-table">
            <thead>
              <tr>
                <th>
                  Name <span className="sort-arrows">↑↓</span>
                </th>
                <th>
                  Position <span className="sort-arrows">↑↓</span>
                </th>
                <th>
                  Date Applied <span className="sort-arrows">↑↓</span>
                </th>
                <th>
                  Status <span className="sort-arrows">↑↓</span>
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, index) => (
                <tr key={index}>
                  <td>
                    <div className="applicant-profile">
                      <div
                        className="profile-avatar"
                        style={{ backgroundColor: app.color }}
                      >
                        {app.id}
                      </div>
                      <span className="profile-name">{app.name}</span>
                    </div>
                  </td>
                  <td className="text-secondary-dark">{app.position}</td>
                  <td className="text-secondary-dark">{app.date}</td>
                  <td>
                    <span
                      className={`app-badge state-${app.status.toLowerCase()}`}
                    >
                      {app.status}
                    </span>
                  </td>
                  <td>
                    <button className="action-view-btn">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Bottom Footer layout */}
        <div className="table-pagination-footer">
          <div className="results-counter">Showing 1-5 of 15 results</div>
          <div className="pagination-controls">
            <span className="rows-dropdown-label">Rows</span>
            <div className="select-dropdown-wrapper">
              <select className="rows-select-menu" defaultValue="5">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
              </select>
            </div>
            <div className="page-buttons-group">
              <button className="page-nav-btn disabled" disabled>
                Previous
              </button>
              <button className="page-num-btn active">1</button>
              <button className="page-num-btn">2</button>
              <button className="page-num-btn">3</button>
              <button className="page-nav-btn">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondDashboard;
