import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownLeft, Plus } from 'lucide-react';
import Chart from 'react-apexcharts';
import './FinanceDashboard.css';

export default function FinanceDashboard() {
  const [timeframe, setTimeframe] = useState('30d');

  // ==========================================
  // 1. TOP MINI SPARKLINES CONFIGURATIONS
  // ==========================================
  
  // Total Income Chart (Green Sparkline)
  const incomeSparklineOptions = {
    chart: { type: 'area', sparkline: { enabled: true } },
    stroke: { curve: 'smooth', width: 2 },
    colors: ['#10b981'],
    fill: {
      type: 'gradient',
      gradient: { shadeIntensity: 1, opacityFrom: 0.2, opacityTo: 0 }
    },
    tooltip: { enabled: false }
  };

  // Total Expenses Chart (Red Line Sparkline)
  const expensesSparklineOptions = {
    chart: { type: 'line', sparkline: { enabled: true } },
    stroke: { curve: 'smooth', width: 2 },
    colors: ['#ef4444'],
    tooltip: { enabled: false }
  };

  // Net Profit Chart (Blue Mini Bar Sparkline)
  const profitSparklineOptions = {
    chart: { type: 'bar', sparkline: { enabled: true } },
    colors: ['#3b82f6'],
    plotOptions: { bar: { columnWidth: '60%', borderRadius: 2 } },
    tooltip: { enabled: false }
  };

  // ==========================================
  // 2. MAIN CASHFLOW BAR CHART CONFIGURATION
  // ==========================================
  const cashflowSeries = [
    {
      name: 'Income',
      data: [42, 54, 38, 65, 22, 41, 55, 60, 46, 53, 70, 57]
    },
    {
      name: 'Expenses',
      data: [15, 22, 18, 25, 12, 19, 24, 22, 17, 20, 28, 21]
    }
  ];

  const cashflowOptions = {
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
    colors: ['#538bfb', '#f1f3f7'], // Royal Blue and Light Grey/Slate
    dataLabels: { enabled: false },
    stroke: { show: true, width: 2, colors: ['transparent'] },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { colors: '#94a3b8', fontFamily: 'system-ui' } }
    },
    yaxis: {
      min: 0,
      max: 80,
      tickAmount: 4,
      labels: { style: { colors: '#94a3b8', fontFamily: 'system-ui' } }
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'right',
      fontFamily: 'system-ui',
      markers: { radius: 2, width: 12, height: 12 }
    },
    grid: {
      borderColor: '#f1f5f9',
      strokeDashArray: 4,
      yaxis: { lines: { show: true } },
      xaxis: { lines: { show: false } }
    },
    tooltip: { shared: true, intersect: false }
  };

  return (
    <div className="finance-dashboard-container">
      
      {/* HEADER BREADCRUMBS */}
      <div className="finance-page-header">
        <h2>Finance</h2>
        <div className="finance-breadcrumbs">Home / Dashboard / <span className="active">Finance</span></div>
      </div>

      {/* MAIN TWO-COLUMN RESPONSIVE LAYOUT */}
      <div className="finance-grid-layout">
        
        {/* LEFT COLUMN: CARD & TRANSACTIONS */}
        <div className="finance-left-pane">
          
          {/* Dark Glass Credit Card */}
          <div className="credit-card-widget">
            <div className="card-top-row">
              <span className="card-label-type">Credit Card</span>
              <span className="card-chip-icon">🗉</span>
            </div>
            
            <div className="card-number-display">
              ••••  ••••  ••••  8361
            </div>
            
            <div className="card-holder-meta-row">
              <div className="meta-block">
                <span className="meta-label">Card Holder</span>
                <span className="meta-value">John Smith</span>
              </div>
              <div className="meta-block text-right">
                <span className="meta-label">Expires</span>
                <span className="meta-value">07/30</span>
              </div>
            </div>

            <div className="card-balance-section">
              <span className="balance-label">Total Balance</span>
              <span className="balance-value">$1,480,000</span>
            </div>
          </div>

          {/* Recent Transactions Module */}
          <div className="transactions-list-card">
            <div className="transactions-header">
              <h3>Recent Transactions</h3>
              <button className="add-transaction-btn">
                <Plus size={16} strokeWidth={3} />
              </button>
            </div>

            <div className="transaction-rows-container">
              {/* Row 1 */}
              <div className="transaction-item-row">
                <div className="tx-profile-wrapper">
                  <div className="tx-icon-circle down"><ArrowDownLeft size={16} /></div>
                  <div className="tx-info">
                    <span className="tx-name">Apple Inc.</span>
                  </div>
                </div>
                <span className="tx-amount negative">-$210,000</span>
              </div>

              {/* Row 2 */}
              <div className="transaction-item-row">
                <div className="tx-profile-wrapper">
                  <div className="tx-icon-circle down"><ArrowDownLeft size={16} /></div>
                  <div className="tx-info">
                    <span className="tx-name">Spotify</span>
                  </div>
                </div>
                <span className="tx-amount negative">-$10,000</span>
              </div>

              {/* Row 3 */}
              <div className="transaction-item-row">
                <div className="tx-profile-wrapper">
                  <div className="tx-icon-circle down"><ArrowDownLeft size={16} /></div>
                  <div className="tx-info">
                    <span className="tx-name">Medium</span>
                  </div>
                </div>
                <span className="tx-amount negative">-$26</span>
              </div>

              {/* Row 4 */}
              <div className="transaction-item-row">
                <div className="tx-profile-wrapper">
                  <div className="tx-icon-circle up"><ArrowUpRight size={16} /></div>
                  <div className="tx-info">
                    <span className="tx-name">Uber</span>
                  </div>
                </div>
                <span className="tx-amount positive">+$210,000</span>
              </div>

              {/* Row 5 */}
              <div className="transaction-item-row">
                <div className="tx-profile-wrapper">
                  <div className="tx-icon-circle up"><ArrowUpRight size={16} /></div>
                  <div className="tx-info">
                    <span className="tx-name">Ola Cabs</span>
                  </div>
                </div>
                <span className="tx-amount positive">+$210,000</span>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: UPPER METRICS & MAIN GRAPH */}
        <div className="finance-right-pane">
          
          {/* Top 3 Metric Cards Grid */}
          <div className="top-metrics-row-grid">
            
            {/* Metric 1: Total Income */}
            <div className="metric-mini-card">
              <div className="metric-meta-details">
                <span className="mini-label">Total Income</span>
                <h3>$2275K</h3>
                <span className="growth-indicator green">↑ +8.2% this month</span>
              </div>
              <div className="mini-sparkline-box">
                <Chart options={incomeSparklineOptions} series={[{ data: [30, 40, 35, 50, 45, 60, 55] }]} type="area" height={45} width={80} />
              </div>
            </div>

            {/* Metric 2: Total Expenses */}
            <div className="metric-mini-card">
              <div className="metric-meta-details">
                <span className="mini-label">Total Expenses</span>
                <h3>$1225K</h3>
                <span className="growth-indicator red">↑ +3.1% this month</span>
              </div>
              <div className="mini-sparkline-box">
                <Chart options={expensesSparklineOptions} series={[{ data: [40, 55, 45, 60, 50, 65, 55] }]} type="line" height={45} width={80} />
              </div>
            </div>

            {/* Metric 3: Net Profit */}
            <div className="metric-mini-card">
              <div className="metric-meta-details">
                <span className="mini-label">Net Profit</span>
                <h3>$1050K</h3>
                <span className="growth-indicator red">↑ +5.4% this month</span>
              </div>
              <div className="mini-sparkline-box">
                <Chart options={profitSparklineOptions} series={[{ data: [20, 35, 45, 30, 55, 65, 75] }]} type="bar" height={45} width={80} />
              </div>
            </div>

          </div>

          {/* Cashflow Large Card Block */}
          <div className="cashflow-main-card">
            <div className="cashflow-header-controls">
              <div className="left-headline-group">
                <h3>Cashflow</h3>
                <span className="cashflow-badge-pill">+5.44%</span>
              </div>
              
              <div className="cashflow-timeframe-toggle">
                <button className={timeframe === '7d' ? 'active' : ''} onClick={() => setTimeframe('7d')}>7d</button>
                <button className={timeframe === '30d' ? 'active' : ''} onClick={() => setTimeframe('30d')}>30d</button>
                <button className={timeframe === '90d' ? 'active' : ''} onClick={() => setTimeframe('90d')}>90d</button>
              </div>
            </div>

            <div className="main-bar-chart-wrapper">
              <Chart options={cashflowOptions} series={cashflowSeries} type="bar" height={340} width="100%" />
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}