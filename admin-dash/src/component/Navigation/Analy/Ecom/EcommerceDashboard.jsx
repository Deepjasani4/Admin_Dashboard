import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';
import Chart from 'react-apexcharts';
import './EcommerceDashboard.css';

export default function EcommerceDashboard() {
  const [timeframe, setTimeframe] = useState('7d');
  const [summaryType, setSummaryType] = useState('Monthly');
  const [activeDay, setActiveDay] = useState('Mon');

  // ==========================================
  // APEXCHARTS: YEARLY SUMMARY BAR CHART
  // ==========================================
  const barSeries = [
    {
      name: 'Invoiced',
      data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43]
    },
    {
      name: 'Profit',
      data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27]
    }
  ];

  const barOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
      parentHeightOffset: 0
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '40%',
        borderRadius: 3,
        endingShape: 'rounded'
      },
    },
    colors: ['#5bf', '#2dd4bf'], // Soft blue and Teal matching the mockup
    dataLabels: { enabled: false },
    stroke: { show: true, width: 2, colors: ['transparent'] },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { colors: '#94a3b8', fontFamily: 'system-ui' } }
    },
    yaxis: {
      tickAmount: 4,
      labels: { style: { colors: '#94a3b8', fontFamily: 'system-ui' } }
    },
    legend: { show: false }, // Handled via custom header metrics layout
    grid: {
      borderColor: '#f1f5f9',
      strokeDashArray: 4,
      yaxis: { lines: { show: true } },
      xaxis: { lines: { show: false } }
    },
    tooltip: { enabled: true }
  };

  return (
    <div className="ecom-dashboard-container">
      
      {/* HEADER BREADCRUMB COMPONENT */}
      <div className="ecom-header-nav">
        <h2>eCommerce</h2>
        <div className="breadcrumbs">Home / Dashboard / <span className="active">eCommerce</span></div>
      </div>

      {/* TOP COMPONENT TOOLBAR */}
      <div className="order-progress-toolbar">
        <span className="section-title">Order Progress</span>
        <div className="pill-toggle-group">
          {['7d', '30d', '90d'].map((t) => (
            <button 
              key={t} 
              className={timeframe === t ? 'active' : ''} 
              onClick={() => setTimeframe(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* ==========================================================================
         BLOCK 1: Progress Metrics Row (Delivery, Pending, Return)
         ========================================================================== */}
      <div className="metrics-row-grid">
        
        {/* Card 1: Delivery Orders */}
        <div className="progress-metric-card">
          <span className="card-lbl">Delivery Orders</span>
          <div className="metric-ratio">
            <span className="bold-num">237</span> <span className="muted-max">/ 400</span>
          </div>
          <div className="progress-bar-track">
            <div className="progress-bar-fill fill-teal" style={{ width: '59%' }}></div>
          </div>
          <span className="progress-sub-text">59% Done</span>
        </div>

        {/* Card 2: Pending */}
        <div className="progress-metric-card">
          <span className="card-lbl">Pending</span>
          <div className="metric-ratio">
            <span className="bold-num">100</span> <span className="muted-max">/ 500</span>
          </div>
          <div className="progress-bar-track">
            <div className="progress-bar-fill fill-blue" style={{ width: '20%' }}></div>
          </div>
          <span className="progress-sub-text">20% Pending</span>
        </div>

        {/* Card 3: Return */}
        <div className="progress-metric-card">
          <span className="card-lbl">Return</span>
          <div className="metric-ratio">
            <span className="bold-num">50</span> <span className="muted-max">/ 400</span>
          </div>
          <div className="progress-bar-track">
            <div className="progress-bar-fill fill-pink" style={{ width: '13%' }}></div>
          </div>
          <span className="progress-sub-text">13% Return</span>
        </div>

      </div>

      {/* ==========================================================================
         BLOCK 2: Split Visual Layer (Yearly Summary & Earnings Block)
         ========================================================================== */}
      <div className="split-visual-grid">
        
        {/* LEFT: Yearly Summary Chart Module */}
        <div className="summary-chart-card">
          <div className="summary-card-header">
            <div className="header-left-meta">
              <h3>Yearly Summary</h3>
              <div className="financial-legend-metrics">
                <span>Invoiced <strong className="txt-dark">$2,356.4</strong></span>
                <span>Profit <strong className="txt-dark">$1,935.6</strong></span>
                <span>Expenses <strong className="txt-dark">$468.9</strong></span>
              </div>
            </div>

            <div className="pill-toggle-group">
              {['Monthly', 'Quarterly'].map((type) => (
                <button 
                  key={type} 
                  className={summaryType === type ? 'active' : ''} 
                  onClick={() => setSummaryType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Render Apex Column Chart */}
          <div className="main-bar-chart-wrapper">
            <Chart options={barOptions} series={barSeries} type="bar" height={280} width="100%" />
            
            {/* Inline Custom Legend to exactly match graphic color dots */}
            <div className="chart-inline-legend">
              <span className="legend-dot"><span className="dot-color blue-dot"></span> Invoiced</span>
              <span className="legend-dot"><span className="dot-color teal-dot"></span> Profit</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Solid Teal Earnings Module */}
        <div className="earnings-hero-card">
          <h3>Earnings</h3>
          
          <div className="days-horizontal-strip">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <span 
                key={day} 
                className={`day-pill ${activeDay === day ? 'active' : ''}`}
                onClick={() => setActiveDay(day)}
              >
                {day}
              </span>
            ))}
          </div>

          <div className="earnings-display-value-block">
            <div className="earnings-val-flex">
              <h2>359,234</h2>
              <ArrowUp className="arrow-up-icon" size={24} />
            </div>
            <span className="day-metric-subtitle">{activeDay} earnings</span>
          </div>
        </div>

      </div>

    </div>
  );
}