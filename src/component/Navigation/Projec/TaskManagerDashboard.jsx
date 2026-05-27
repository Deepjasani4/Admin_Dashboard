import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ChevronDown, ChevronLeft, ChevronRight, PlusCircle } from 'lucide-react';
import './TaskManagerDashboard.css';

export default function TaskManagerDashboard() {
  // Mock Data Array for the Task List representing the 15 results
  const [projects, setProjects] = useState([
    { id: 1, user: 'John Smith', initials: 'JS', avatarBg: '#3b82f6', project: 'Admin Dashboard', progress: 85, status: 'On Track', dueDate: 'Dec 15' },
    { id: 2, user: 'Sarah Johnson', initials: 'SJ', avatarBg: '#f59e0b', project: 'Mobile App', progress: 62, status: 'At Risk', dueDate: 'Jan 05' },
    { id: 3, user: 'Mike Brown', initials: 'MB', avatarBg: '#10b981', project: 'E-commerce Site', progress: 100, status: 'On Track', dueDate: 'Nov 20' },
    { id: 4, user: 'Emily Davis', initials: 'ED', avatarBg: '#0ea5e9', project: 'API Integration', progress: 45, status: 'At Risk', dueDate: 'Jan 10' },
    { id: 5, user: 'Chris Wilson', initials: 'CW', avatarBg: '#8b5cf6', project: 'CMS Platform', progress: 30, status: 'Delayed', dueDate: 'Feb 01' },
    { id: 6, user: 'Anna Baker', initials: 'AB', avatarBg: '#ec4899', project: 'UI Redesign', progress: 95, status: 'On Track', dueDate: 'Dec 22' },
    { id: 7, user: 'David Clark', initials: 'DC', avatarBg: '#6b7280', project: 'Database Migration', progress: 15, status: 'Delayed', dueDate: 'Mar 12' },
  ]);

  // States for interactive Controls
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Filter Data based on Search Text Query
  const filteredProjects = useMemo(() => {
    return projects.filter(item => 
      item.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [projects, searchTerm]);

  // Handle pagination calculation segment slicing
  const totalResults = filteredProjects.length;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredProjects.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(totalResults / rowsPerPage);

  return (
    <div className="task-dashboard-container">
      
      {/* 1. TOP MATRIX LAYER: THREE METRICS PANELS */}
      <div className="metrics-row-grid">
        
        {/* OVERDUE TASKS METER */}
        <div className="summary-status-card">
          <div className="status-card-header">
            <span className="card-lbl-title">Overdue Tasks</span>
            <span className="percentage-badge reduction-pill">-10%</span>
          </div>
          <div className="status-card-body">
            <h2 className="headline-count-value">119</h2>
            <span className="comparison-subtext-label">Last Week: 60%</span>
          </div>
        </div>

        {/* TASKS TO DO METER */}
        <div className="summary-status-card">
          <div className="status-card-header">
            <span className="card-lbl-title">Tasks to Do</span>
            <span className="percentage-badge growth-pill">+30%</span>
          </div>
          <div className="status-card-body">
            <h2 className="headline-count-value">88</h2>
            <span className="comparison-subtext-label">Last Week: 40%</span>
          </div>
        </div>

        {/* COMPLETED TASK METER */}
        <div className="summary-status-card">
          <div className="status-card-header">
            <span className="card-lbl-title">Completed Task</span>
            <span className="percentage-badge reduction-pill">-25%</span>
          </div>
          <div className="status-card-body">
            <h2 className="headline-count-value">67</h2>
            <span className="comparison-subtext-label">Last Week: 70%</span>
          </div>
        </div>

      </div>

      {/* 2. LOWER DATA SECTION: USER PROJECT LIST CONTAINER */}
      <div className="datatable-panel-wrapper">
        <div className="datatable-section-title">
          <h3>User Project List</h3>
        </div>

        {/* FILTER UTILITY ACTIONS ACTION ROW */}
        <div className="datatable-controls-bar">
          <div className="left-controls-group">
            <div className="search-input-frame">
              <Search size={16} className="search-icon-inside" />
              <input 
                type="text" 
                placeholder="Search projects..." 
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
              />
            </div>
            <button className="utility-action-btn">
              <PlusCircle size={15} />
              <span>Status</span>
            </button>
          </div>

          <div className="right-controls-group">
            <button className="utility-action-btn border-gray">
              <SlidersHorizontal size={15} />
              <span>Columns</span>
            </button>
          </div>
        </div>

        {/* DATA TABLE GRAPHIC SHEET */}
        <div className="table-overflow-containment">
          <table className="project-data-table">
            <thead>
              <tr>
                <th>User <span className="sort-arrows-indicator">⇅</span></th>
                <th>Project <span className="sort-arrows-indicator">⇅</span></th>
                <th>Progress <span className="sort-arrows-indicator">⇅</span></th>
                <th>Status <span className="sort-arrows-indicator">⇅</span></th>
                <th>Due Date <span className="sort-arrows-indicator">⇅</span></th>
              </tr>
            </thead>
            <tbody>
              {currentRows.length > 0 ? (
                currentRows.map((item) => (
                  <tr key={item.id}>
                    {/* User Profile Cell */}
                    <td>
                      <div className="user-profile-cell-box">
                        <div className="avatar-initials-badge" style={{ backgroundColor: item.avatarBg }}>
                          {item.initials}
                        </div>
                        <span className="profile-identity-name">{item.user}</span>
                      </div>
                    </td>
                    
                    {/* Project Name Cell */}
                    <td className="project-title-cell">{item.project}</td>
                    
                    {/* Progress Bar Loader Meter Cell */}
                    <td>
                      <div className="progress-meter-flex-row">
                        <div className="track-bar-container">
                          <div 
                            className="fill-bar-progress" 
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                        <span className="numerical-percentage-text">{item.progress}%</span>
                      </div>
                    </td>
                    
                    {/* Status Label Pills Cell */}
                    <td>
                      <span className={`status-pill-badge ${item.status.toLowerCase().replace(' ', '-')}`}>
                        {item.status}
                      </span>
                    </td>
                    
                    {/* Due Date Calendar Text Cell */}
                    <td className="due-date-calendar-cell">{item.dueDate}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="empty-table-fallback">No matching projects found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION CONTROL FOOTER ROW BLOCK */}
        <div className="datatable-pagination-footer">
          <span className="results-counter-subtext">
            Showing {totalResults === 0 ? 0 : indexOfFirstRow + 1}-{Math.min(indexOfLastRow, totalResults)} of {totalResults} results
          </span>

          <div className="pagination-action-controls">
            <div className="rows-dropdown-selector-box">
              <span className="selector-prefix-label">Rows</span>
              <div className="custom-dropdown-select">
                <select 
                  value={rowsPerPage} 
                  onChange={(e) => { setRowsPerPage(Number(e.target.value)); setCurrentPage(1); }}
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                </select>
                <ChevronDown size={14} className="dropdown-arrow-icon" />
              </div>
            </div>

            <div className="pagination-pages-navigation-track">
              <button 
                className="page-step-nav-btn" 
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              >
                <ChevronLeft size={16} />
                <span>Previous</span>
              </button>

              <div className="numerical-pages-pills">
                {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    className={`page-index-number-pill ${currentPage === pageNum ? 'active-page-state' : ''}`}
                    onClick={() => setCurrentPage(pageNum)}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>

              <button 
                className="page-step-nav-btn" 
                disabled={currentPage === totalPages || totalPages === 0}
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              >
                <span>Next</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}