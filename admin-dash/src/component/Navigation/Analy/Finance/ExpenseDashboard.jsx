import React, { useState, useMemo } from 'react';
import { Search, PlusCircle, SlidersHorizontal, Download } from 'lucide-react';
import Chart from 'react-apexcharts';
import './ExpenseDashboard.css';

export default function ExpenseDashboard() {
  // State Management for Interactive Elements
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('All'); // 'All' | 'Credit' | 'Debit'
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // 1. DATA: WHERE YOUR MONEY GO? (PROGRESS BARS)
  const budgetCategories = [
    { name: 'Food & Drink', amount: '$1,000', percentage: 65, color: '#db2777', icon: '🍔' },
    { name: 'Travel', amount: '$400', percentage: 30, color: '#14b8a6', icon: '✈️' },
    { name: 'Shopping', amount: '$650', percentage: 45, color: '#ea580c', icon: '🛍️' },
    { name: 'Healthcare', amount: '$250', percentage: 26, color: '#6366f1', icon: '💜' }
  ];

  // 2. APEXCHARTS: CATEGORY DONUT CHART CONFIG
  const donutSeries = [35, 20, 15, 20, 10]; // Representative distributions
  const donutOptions = {
    chart: { type: 'donut' },
    labels: ['Salary', 'Investment', 'Freelance', 'Business', 'Other'],
    colors: ['#3b82f6', '#10b981', '#f59e0b', '#a855f7', '#06b6d4'],
    stroke: { show: true, colors: ['#ffffff'], width: 2 },
    dataLabels: { enabled: false },
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      fontFamily: 'system-ui, sans-serif',
      fontSize: '12px',
      markers: { radius: 12, width: 10, height: 10 },
      itemMargin: { horizontal: 8, vertical: 4 }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '75%',
          background: 'transparent'
        }
      }
    }
  };

  // 3. DATA: TRANSACTION HISTORY
  const initialTransactions = [
    { date: 'Jan 15', description: 'Salary Deposit', amount: '+$5,200.00', type: 'Credit', balance: '$12,800.00' },
    { date: 'Jan 14', description: 'Amazon Purchase', amount: '-$450.00', type: 'Debit', balance: '$7,600.00' },
    { date: 'Jan 13', description: 'Netflix Subscription', amount: '-$15.99', type: 'Debit', balance: '$8,050.00' },
    { date: 'Jan 12', description: 'Freelance Payment', amount: '+$2,500.00', type: 'Credit', balance: '$8,065.99' },
    { date: 'Jan 11', description: 'Grocery Store', amount: '-$32.50', type: 'Debit', balance: '$5,565.99' },
    { date: 'Jan 10', description: 'Gas Station', amount: '-$45.00', type: 'Debit', balance: '$5,600.00' },
    { date: 'Jan 09', description: 'Client Retainer', amount: '+$1,200.00', type: 'Credit', balance: '$6,800.00' }
  ];

  // 4. FILTER & PAGINATION LOGIC
  const filteredTransactions = useMemo(() => {
    return initialTransactions.filter(tx => {
      const matchesSearch = tx.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = typeFilter === 'All' || tx.type === typeFilter;
      return matchesSearch && matchesType;
    });
  }, [searchTerm, typeFilter]);

  const totalPages = Math.ceil(filteredTransactions.length / rowsPerPage) || 1;
  const paginatedTransactions = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    return filteredTransactions.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredTransactions, currentPage, rowsPerPage]);

  const handleTypeToggle = () => {
    if (typeFilter === 'All') setTypeFilter('Credit');
    else if (typeFilter === 'Credit') setTypeFilter('Debit');
    else setTypeFilter('All');
    setCurrentPage(1);
  };

  return (
    <div className="dashboard-root-layout">
      
      {/* TOP SECTION: TWO-COLUMN PANELS GRID */}
      <div className="top-insights-grid">
        
        {/* Left Component: Money Destinations Grid */}
        <div className="insight-card money-flow-card">
          <h3>Where your money go?</h3>
          <div className="progress-bars-grid-layout">
            {budgetCategories.map((category) => (
              <div key={category.name} className="progress-bar-item-box">
                <div className="bar-meta-row">
                  <div className="icon-name-flex-group">
                    <span className="category-emoji-icon" style={{ backgroundColor: category.color + '15', color: category.color }}>
                      {category.icon}
                    </span>
                    <span className="category-label-text">{category.name}</span>
                  </div>
                  <div className="value-percentage-group">
                    <span className="absolute-amount-text">{category.amount}</span>
                    <span className="fraction-percentage-text">{category.percentage}%</span>
                  </div>
                </div>
                <div className="native-track-bg">
                  <div 
                    className="active-fill-thumb" 
                    style={{ width: `${category.percentage}%`, backgroundColor: category.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Component: Category Apex Donut Chart */}
        <div className="insight-card category-pie-card">
          <h3>Category</h3>
          <div className="donut-chart-canvas-wrapper">
            <Chart options={donutOptions} series={donutSeries} type="donut" width="100%" height={260} />
          </div>
        </div>

      </div>

      {/* BOTTOM SECTION: TRANSACTION HISTORY TABLE LAYER */}
      <div className="transaction-history-card">
        <h3>Transaction History</h3>

        {/* Action controls utility navigation header */}
        <div className="table-utilities-actions-bar">
          <div className="utility-left-inputs-subflex">
            <div className="search-input-field-wrapper">
              <Search className="embedded-search-icon" size={16} />
              <input 
                type="text" 
                placeholder="Search transactions..." 
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
              />
            </div>
            
            <button className={`filter-dropdown-trigger-btn ${typeFilter !== 'All' ? 'active-filter' : ''}`} onClick={handleTypeToggle}>
              <PlusCircle size={14} />
              <span>{typeFilter === 'All' ? 'Type' : `Type: ${typeFilter}`}</span>
            </button>
          </div>

          <div className="utility-right-buttons-subflex">
            <button className="utility-pill-btn">
              <SlidersHorizontal size={14} />
              <span>Columns</span>
            </button>
            <button className="utility-pill-btn">
              <Download size={14} />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Semantic Responsive Hidden Overrun Scroll Container */}
        <div className="responsive-table-scroller">
          <table className="crm-data-table">
            <thead>
              <tr>
                <th>Date ⇅</th>
                <th>Description ⇅</th>
                <th>Amount ⇅</th>
                <th>Type ⇅</th>
                <th>Balance ⇅</th>
              </tr>
            </thead>
            <tbody>
              {paginatedTransactions.length > 0 ? (
                paginatedTransactions.map((tx, idx) => (
                  <tr key={idx}>
                    <td className="text-muted-slate">{tx.date}</td>
                    <td className="font-medium-dark">{tx.description}</td>
                    <td className={`font-semibold-amount ${tx.type === 'Credit' ? 'positive-green' : 'negative-red'}`}>
                      {tx.amount}
                    </td>
                    <td>
                      <span className={`type-badge-pill ${tx.type.toLowerCase()}`}>
                        {tx.type}
                      </span>
                    </td>
                    <td className="font-medium-dark">{tx.balance}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="empty-table-state-cell">No records found tracking current queries.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Table Footer Pagination Block Layer */}
        <div className="table-pagination-footer-flex">
          <span className="results-counter-text">
            Showing {filteredTransactions.length ? (currentPage - 1) * rowsPerPage + 1 : 0}-
            {Math.min(currentPage * rowsPerPage, filteredTransactions.length)} of {filteredTransactions.length} results
          </span>

          <div className="pagination-controls-subgroup">
            <div className="rows-dropdown-selector-box">
              <span>Rows</span>
              <select 
                className="native-select-element"
                value={rowsPerPage} 
                onChange={(e) => { setRowsPerPage(Number(e.target.value)); setCurrentPage(1); }}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
              </select>
            </div>

            <div className="page-stepping-row-buttons">
              <button 
                className="nav-step-btn" 
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => prev - 1)}
              >
                Previous
              </button>
              
              {[...Array(totalPages)].map((_, idx) => (
                <button 
                  key={idx}
                  className={`numeric-indicator-btn ${currentPage === idx + 1 ? 'active-page-state' : ''}`}
                  onClick={() => setCurrentPage(idx + 1)}
                >
                  {idx + 1}
                </button>
              ))}

              <button 
                className="nav-step-btn" 
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => prev + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}