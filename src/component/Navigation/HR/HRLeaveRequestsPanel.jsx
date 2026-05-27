import React, { useState } from "react";
import "./HRLeaveRequestsPanel.css";

const HRLeaveRequestsPanel = () => {
  // Mock Data matching the design specifications exactly
  const initialLeaveData = [
    { id: "AK", name: "Alex Kumar", type: "Vacation", from: "Apr 05", to: "Apr 12", days: 8, status: "Pending", color: "#3b82f6" },
    { id: "LP", name: "Lisa Park", type: "Sick", from: "Mar 31", to: "Mar 31", days: 1, status: "Approved", color: "#f59e0b" },
    { id: "JR", name: "James Rodriguez", type: "Personal", from: "Apr 02", to: "Apr 03", days: 2, status: "Pending", color: "#10b981" },
    { id: "MN", name: "Maria Nguyen", type: "Vacation", from: "Apr 07", to: "Apr 14", days: 8, status: "Rejected", color: "#ef4444" },
    { id: "TW", name: "Tom Wilson", type: "Sick", from: "Apr 01", to: "Apr 02", days: 2, status: "Approved", color: "#8b5cf6" },
  ];

  const [leaveRequests, setLeaveRequests] = useState(initialLeaveData);
  const [searchTerm, setSearchTerm] = useState("");

  // Simple handlers for action table buttons
  const handleAction = (id, newStatus) => {
    setLeaveRequests(prev =>
      prev.map(req => (req.id === id ? { ...req, status: newStatus } : req))
    );
  };

  // Filter logic based on the design's search input bar
  const filteredRequests = leaveRequests.filter(req =>
    req.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    req.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="leave-requests-panel">
      <div className="requests-card-container">
        <h3 className="panel-section-title">Leave Requests</h3>

        {/* Action Controls Filter Header Bar */}
        <div className="filter-toolbar-container">
          <div className="filter-left-aside">
            <div className="input-search-field-wrapper">
              <span className="magnifier-icon">🔍</span>
              <input
                type="text"
                placeholder="Search leave requests..."
                className="search-field-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="toolbar-status-filter-btn">
              <span className="plus-symbol">+</span> Status
            </button>
          </div>
          <button className="toolbar-columns-toggle-btn">
            <span className="column-layout-icon">📊</span> Columns
          </button>
        </div>

        {/* Responsive Flex Data Table Wrapper */}
        <div className="table-viewport-wrapper">
          <table className="leave-records-table">
            <thead>
              <tr>
                <th>Name <span className="sort-indicator-arrows">↑↓</span></th>
                <th>Leave Type <span className="sort-indicator-arrows">↑↓</span></th>
                <th>From <span className="sort-indicator-arrows">↑↓</span></th>
                <th>To <span className="sort-indicator-arrows">↑↓</span></th>
                <th>Days <span className="sort-indicator-arrows">↑↓</span></th>
                <th>Status <span className="sort-indicator-arrows">↑↓</span></th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map((request, idx) => (
                <tr key={idx}>
                  <td>
                    <div className="employee-avatar-profile">
                      <div className="avatar-badge-circle" style={{ backgroundColor: request.color }}>
                        {request.id}
                      </div>
                      <span className="employee-name-label">{request.name}</span>
                    </div>
                  </td>
                  <td className="table-body-text-muted">{request.type}</td>
                  <td className="table-body-text-muted">{request.from}</td>
                  <td className="table-body-text-muted">{request.to}</td>
                  <td className="table-body-text-muted">{request.days}</td>
                  <td>
                    <span className={`status-pill-chip status-state-${request.status.toLowerCase()}`}>
                      {request.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-button-flex-group">
                      <button 
                        className="action-circle-btn button-approve-check" 
                        onClick={() => handleAction(request.id, "Approved")}
                        title="Approve Request"
                      >
                        ✓
                      </button>
                      <button 
                        className="action-circle-btn button-reject-cross" 
                        onClick={() => handleAction(request.id, "Rejected")}
                        title="Reject Request"
                      >
                        ✕
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Metadata & Table Pagination Rules */}
        <div className="panel-pagination-footer">
          <div className="results-indicator-count">Showing 1-5 of 15 results</div>
          <div className="pagination-navigation-controls">
            <span className="row-selection-menu-label">Rows</span>
            <div className="dropdown-native-select-wrapper">
              <select className="row-count-select-menu" defaultValue="5">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
              </select>
            </div>
            <div className="pagination-buttons-nav-cluster">
              <button className="nav-step-btn state-disabled" disabled>Previous</button>
              <button className="num-step-btn active-page-index">1</button>
              <button className="num-step-btn">2</button>
              <button className="num-step-btn">3</button>
              <button className="nav-step-btn">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRLeaveRequestsPanel;