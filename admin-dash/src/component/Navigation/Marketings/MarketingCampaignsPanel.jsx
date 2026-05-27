import React, { useState, useMemo } from "react";
import Chart from "react-apexcharts";
import "./MarketingCampaignsPanel.css";

const MarketingCampaignsPanel = () => {
  // 1. Initial State Definition
  const initialCampaigns = [
    {
      name: "Spring Product Launch",
      platform: "Email",
      budget: "$5,000",
      spent: "$3,820",
      conversions: 312,
      roi: "5.2x",
      status: "Active",
    },
    {
      name: "Brand Awareness Q2",
      platform: "Social",
      budget: "$8,500",
      spent: "$6,214",
      conversions: 189,
      roi: "3.8x",
      status: "Active",
    },
    {
      name: "Google Search - Main",
      platform: "PPC",
      budget: "$12,000",
      spent: "$9,872",
      conversions: 428,
      roi: "4.5x",
      status: "Active",
    },
    {
      name: "SEO Content Series",
      platform: "Content",
      budget: "$3,200",
      spent: "$2,950",
      conversions: 156,
      roi: "6.1x",
      status: "Active",
    },
    {
      name: "Retargeting - Cart Abandon",
      platform: "PPC",
      budget: "$4,000",
      spent: "$2,100",
      conversions: 87,
      roi: "3.2x",
      status: "Paused",
    },
    {
      name: "Summer Flash Sale",
      platform: "Social",
      budget: "$6,000",
      spent: "$4,500",
      conversions: 210,
      roi: "4.1x",
      status: "Active",
    },
    {
      name: "Influencer Outreach",
      platform: "Social",
      budget: "$15,000",
      spent: "$12,000",
      conversions: 540,
      roi: "3.9x",
      status: "Active",
    },
    {
      name: "Affiliate Network Q2",
      platform: "Content",
      budget: "$2,500",
      spent: "$1,800",
      conversions: 95,
      roi: "5.0x",
      status: "Paused",
    },
  ];

  const [campaigns, setCampaigns] = useState(initialCampaigns);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // 2. JavaScript Filtering Logic
  const filteredData = useMemo(() => {
    return campaigns.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.platform.toLowerCase().includes(search.toLowerCase()),
    );
  }, [campaigns, search]);

  // 3. JavaScript Pagination Logic
  const totalResults = filteredData.length;
  const totalPages = Math.ceil(totalResults / rowsPerPage) || 1;

  // Reset to page 1 if search filters out rows
  React.useEffect(() => {
    setCurrentPage(1);
  }, [search, rowsPerPage]);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, totalResults);

  const paginatedData = useMemo(() => {
    return filteredData.slice(startIndex, endIndex);
  }, [filteredData, startIndex, endIndex]);

  // 4. Interactive Event Handlers
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handleRowClick = (campaignName) => {
    console.log(`Navigating to campaign details for: ${campaignName}`);
  };

  // ApexCharts Radar Diagram Configuration
  const radarOptions = {
    chart: {
      type: "radar",
      toolbar: { show: false },
      dropShadow: { enabled: false },
    },
    colors: ["#3b82f6", "#10b981"],
    labels: ["Facebook", "Twitter", "Instagram", "LinkedIn", "TikTok"],
    stroke: {
      show: true,
      width: 2,
      colors: ["#3b82f6", "#10b981"],
    },
    fill: { opacity: 0.15 },
    markers: { size: 4, hover: { size: 6 } },
    legend: { show: false },
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: "#e2e8f0",
          connectorColors: "#e2e8f0",
          fill: { colors: ["transparent", "transparent"] },
        },
      },
    },
    xaxis: {
      labels: {
        style: {
          colors: "#94a3b8",
          fontSize: "11px",
          fontFamily: "inherit",
        },
      },
    },
    yaxis: {
      show: true,
      min: 0,
      max: 100,
      tickAmount: 5,
      labels: {
        style: { colors: "#94a3b8", fontSize: "10px" },
      },
    },
  };

  const radarSeries = [
    { name: "Engagement", data: [65, 45, 85, 55, 70] },
    { name: "Reach", data: [80, 55, 75, 75, 60] },
  ];

  return (
    <div className="marketing-metrics-panel">
      {/* ================= UPPER SECTION METRIC CARDS ================= */}
      <div className="metrics-cards-trio-row">
        {/* Card A: Email Metrics */}
        <div className="metric-panel-box">
          <h3 className="panel-box-title">Email Metrics</h3>
          <div className="list-group-lines">
            <div className="list-line-row">
              <span className="line-label-muted">Sent</span>
              <div className="line-value-cluster">
                <span className="value-dark-bold">24,500</span>
                <span className="capsule-tag tag-gray">Total</span>
              </div>
            </div>
            <div className="list-line-row">
              <span className="line-label-muted">Open Rate</span>
              <div className="line-value-cluster">
                <span className="value-dark-bold">28.4%</span>
                <span className="capsule-tag tag-green">+2.1%</span>
              </div>
            </div>
            <div className="list-line-row">
              <span className="line-label-muted">Click Rate</span>
              <div className="line-value-cluster">
                <span className="value-dark-bold">4.2%</span>
                <span className="capsule-tag tag-green">+0.8%</span>
              </div>
            </div>
            <div className="list-line-row">
              <span className="line-label-muted">Unsubscribe</span>
              <div className="line-value-cluster">
                <span className="value-dark-bold">0.3%</span>
                <span className="capsule-tag tag-red">-0.1%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card B: Social Media Radar Chart */}
        <div className="metric-panel-box">
          <div className="panel-box-header-flex">
            <h3 className="panel-box-title">Social Media</h3>
            <div className="custom-html-radar-legend">
              <div className="legend-node">
                <span className="node-dot dot-blue"></span> Engagement
              </div>
              <div className="legend-node">
                <span className="node-dot dot-teal"></span> Reach
              </div>
            </div>
          </div>
          <div className="apexchart-radar-wrapper">
            <Chart
              options={radarOptions}
              series={radarSeries}
              type="radar"
              height="100%"
              width="100%"
            />
          </div>
        </div>

        {/* Card C: Top Landing Pages */}
        <div className="metric-panel-box">
          <h3 className="panel-box-title">Top Landing Pages</h3>
          <div className="landing-urls-list">
            {[
              { path: "/pricing", views: "8,432", bounce: "32%" },
              { path: "/features", views: "6,218", bounce: "28%" },
              { path: "/blog/seo-guide", views: "4,891", bounce: "45%" },
              { path: "/demo", views: "3,567", bounce: "22%" },
              { path: "/about", views: "2,134", bounce: "51%" },
            ].map((page, idx) => (
              <div className="url-row-item" key={idx}>
                <span className="code-route-text">{page.path}</span>
                <div className="url-stats-aside">
                  <div className="count-bold">{page.views} views</div>
                  <div className="bounce-muted">{page.bounce} bounce</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= LOWER SECTION DATA TABLE ================= */}
      <div className="campaigns-data-card-wrapper">
        <h3 className="table-header-main-title">Active Campaigns</h3>

        {/* Controls Toolbar */}
        <div className="table-controls-toolbar">
          <div className="toolbar-left-side">
            <div className="search-field-positioning-box">
              <span className="search-glass-vector">🔍</span>
              <input
                type="text"
                placeholder="Search campaigns..."
                className="input-filter-search"
                value={search}
                onChange={handleSearchChange}
              />
            </div>
            <button
              className="toolbar-pill-filter-btn"
              onClick={() => console.log("Filter requested")}
            >
              <span className="plus-symbol-icon">⊕</span> Status
            </button>
          </div>

          <div className="toolbar-right-side">
            <button
              className="toolbar-square-action-btn"
              onClick={() => console.log("Columns toggle clicked")}
            >
              📊 Columns
            </button>
            <button
              className="toolbar-square-action-btn"
              onClick={() => console.log("Export triggered")}
            >
              📥 Export
            </button>
          </div>
        </div>

        {/* Native Responsive Data Matrix Table */}
        <div className="responsive-table-scroll-view">
          <table className="campaigns-native-table">
            <thead>
              <tr>
                <th>
                  Campaign Name <span className="cell-sort-icon">↑↓</span>
                </th>
                <th>
                  Platform <span className="cell-sort-icon">↑↓</span>
                </th>
                <th>
                  Budget <span className="cell-sort-icon">↑↓</span>
                </th>
                <th>
                  Spent <span className="cell-sort-icon">↑↓</span>
                </th>
                <th>
                  Conversions <span className="cell-sort-icon">↑↓</span>
                </th>
                <th>
                  ROI <span className="cell-sort-icon">↑↓</span>
                </th>
                <th>
                  Status <span className="cell-sort-icon">↑↓</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.length > 0 ? (
                paginatedData.map((row, index) => (
                  <tr
                    key={index}
                    onClick={() => handleRowClick(row.name)}
                    style={{ cursor: "pointer" }}
                  >
                    <td className="cell-text-prominent-bold">{row.name}</td>
                    <td className="cell-text-secondary">{row.platform}</td>
                    <td className="cell-text-secondary">{row.budget}</td>
                    <td className="cell-text-secondary">{row.spent}</td>
                    <td className="cell-text-secondary">{row.conversions}</td>
                    <td className="cell-text-roi-emphasis">{row.roi}</td>
                    <td>
                      <span
                        className={`pill-status-badge badge-state-${row.status.toLowerCase()}`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    style={{
                      textAlign: "center",
                      color: "#64748b",
                      padding: "24px",
                    }}
                  >
                    No campaigns matched your search entries.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Interactive Pagination Footer */}
        <div className="table-pagination-footer-flex">
          <div className="footer-records-counter">
            Showing {totalResults > 0 ? startIndex + 1 : 0}-{endIndex} of{" "}
            {totalResults} results
          </div>
          <div className="pagination-right-navigation-cluster">
            <span className="menu-dropdown-label">Rows</span>
            <div className="dropdown-native-container">
              <select
                className="pagination-dropdown-select"
                value={rowsPerPage}
                onChange={handleRowsPerPageChange}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
              </select>
            </div>
            <div className="pagination-btn-sequence-group">
              <button
                className={`nav-arrow-control-btn ${currentPage === 1 ? "block-disabled" : ""}`}
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, idx) => idx + 1).map(
                (pageNum) => (
                  <button
                    key={pageNum}
                    className={`nav-number-node-btn ${currentPage === pageNum ? "current-active-node" : ""}`}
                    onClick={() => setCurrentPage(pageNum)}
                  >
                    {pageNum}
                  </button>
                ),
              )}

              <button
                className={`nav-arrow-control-btn ${currentPage === totalPages ? "block-disabled" : ""}`}
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingCampaignsPanel;
