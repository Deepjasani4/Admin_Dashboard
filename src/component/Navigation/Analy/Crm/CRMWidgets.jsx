import React from 'react';
import { ArrowUp, ArrowDown, TrendingUp } from 'lucide-react';
import Chart from 'react-apexcharts';
import './CRMWidgets.css';

export default function CRMWidgets() {
  // ==========================================
  // APEXCHARTS CONFIGURATIONS
  // ==========================================

  // 1. Transactions Mini Line Sparkline
  const transactionSeries = [{
    name: 'Transactions',
    data: [30, 25, 45, 30, 55, 40, 70, 65, 50, 60, 55, 45]
  }];
  
  const transactionOptions = {
    chart: { type: 'line', sparkline: { enabled: true } },
    stroke: { curve: 'smooth', width: 2 },
    colors: ['#3b82f6'],
    tooltip: { enabled: false }
  };

  // 2. News Statistics Horizontal Bar Chart
  const newsSeries = [{
    data: [53, 13, 30, 4]
  }];

  const newsOptions = {
    chart: { type: 'bar', toolbar: { show: false } },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '32%',
        borderRadius: 4,
      }
    },
    colors: ['#2dd4bf'], // Teal bars
    dataLabels: { enabled: false },
    xaxis: {
      categories: ['Sport', 'Music', 'Travel', 'News'],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { colors: '#64748b', fontFamily: 'system-ui' } }
    },
    yaxis: {
      labels: { style: { colors: '#334155', fontWeight: 500, fontFamily: 'system-ui' } }
    },
    grid: {
      borderColor: '#f1f5f9',
      strokeDashArray: 4,
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: false } }
    }
  };

  // 3. Total Leads Donut Chart (4 sections)
  const leadsSeries = [340, 150, 120, 245]; // Organic, Purchased, Blocked, Buy Leads
  
  const leadsOptions = {
    chart: { type: 'donut' },
    labels: ['Organic', 'Purchased', 'Blocked', 'Buy Leads'],
    colors: ['#3b82f6', '#10b981', '#ef4444', '#f59e0b'], // Blue, Green, Red, Amber
    stroke: { width: 2, colors: ['#ffffff'] },
    dataLabels: { enabled: false },
    legend: { show: false }, // Custom legend used in HTML layout instead
    plotOptions: {
      pie: {
        donut: { size: '75%' }
      }
    },
    tooltip: { enabled: true }
  };

  // Mock Market Data Sparklines
  const markets = [
    { pair: 'DASH/USD', price: '1.0452', change: '+2.56%', up: true, sparkData: [10, 15, 8, 22, 18, 25] },
    { pair: 'ETH/USD', price: '0.0157', change: '-0.87%', up: false, sparkData: [25, 20, 18, 14, 15, 10] },
    { pair: 'ZEC/USD', price: '2.0764', change: '+1.56%', up: true, sparkData: [12, 14, 11, 19, 15, 22] },
    { pair: 'BTC/USD', price: '1.0452', change: '+2.56%', up: true, sparkData: [10, 15, 8, 22, 18, 25] },
  ];

  return (
    <div className="crm-dashboard-wrapper">
      
      {/* HEADER ROOT ROUTING TITLE */}
      <div className="crm-header-nav">
        <h2>CRM</h2>
        <div className="breadcrumbs">Home / Dashboard / <span className="active">CRM</span></div>
      </div>

      {/* ==========================================================================
         BLOCK 1: Top Widgets Row (Transactions, Ratings, News)
         ========================================================================== */}
      <div className="widgets-row-grid three-columns">
        
        {/* Card 1: Transactions */}
        <div className="crm-card">
          <div className="card-header-flex">
            <h3>Transactions</h3>
            <div className="timeframe-toggle">
              <button>7d</button>
              <button className="active">30d</button>
              <button>90d</button>
            </div>
          </div>
          <div className="transaction-content">
            <span className="big-currency-metric">$2,08,187</span>
            <span className="sub-muted-text">Total this period</span>
            <div className="sparkline-wrapper">
              <Chart options={transactionOptions} series={transactionSeries} type="line" height={60} width="100%" />
            </div>
          </div>
        </div>

        {/* Card 2: Project Rating */}
        <div className="crm-card text-center flex-center-content">
          <h3 className="self-start-title">Project Rating</h3>
          <div className="rating-display-block">
            <div className="numerical-rating">
              <span className="star-hero-icon">★</span>
              <h2>4.3</h2>
            </div>
            <div className="star-row-ui">
              <span className="filled-star">★</span>
              <span className="filled-star">★</span>
              <span className="filled-star">★</span>
              <span className="filled-star">★</span>
              <span className="empty-star">★</span>
            </div>
            <span className="growth-badge-pill green-up">
              <ArrowUp size={12} /> +0.4 this month
            </span>
          </div>
        </div>

        {/* Card 3: News Statistics */}
        <div className="crm-card">
          <h3 style={{ marginBottom: '8px' }}>News Statistics</h3>
          <div className="horizontal-bar-wrapper">
            <Chart options={newsOptions} series={newsSeries} type="bar" height={180} />
          </div>
        </div>

      </div>

      {/* ==========================================================================
         BLOCK 2: Bottom Widgets Row (Leaderboard, Total Leads, Markets)
         ========================================================================== */}
      <div className="widgets-row-grid three-columns" style={{ marginTop: '24px' }}>
        
        {/* Card 4: Leaderboard */}
        <div className="crm-card">
          <h3>Leaderboard</h3>
          <div className="leaderboard-list">
            {[
              { rank: 1, name: 'Silje Larsen', score: '+3,784', up: true },
              { rank: 2, name: 'Julie Vad', score: '+3,544', up: true },
              { rank: 3, name: 'Storm Hansen', score: '-2,739', up: false },
              { rank: 4, name: 'Frida Landin', score: '+1,899', up: true },
              { rank: 5, name: 'Mai Larsen', score: '-1,600', up: false },
            ].map((leader) => (
              <div className="leaderboard-item" key={leader.rank}>
                <div className="leader-info">
                  <span className="rank-badge">{leader.rank}</span>
                  <span className="leader-name">{leader.name}</span>
                </div>
                <span className={`leader-score ${leader.up ? 'txt-green' : 'txt-red'}`}>
                  {leader.up ? <ArrowUp size={12} style={{ display: 'inline' }} /> : <ArrowDown size={12} style={{ display: 'inline' }} />}
                  {leader.score}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 5: Total Leads */}
        <div className="crm-card text-center">
          <h3 className="self-start-title">Total Leads</h3>
          <span className="big-currency-metric center-metric">$208,187</span>
          
          <div className="donut-center-wrapper">
            <Chart options={leadsOptions} series={leadsSeries} type="donut" width={180} />
          </div>

          {/* Custom Multi-Column Grid Legend */}
          <div className="custom-grid-legend">
            <div className="legend-row">
              <div className="legend-item"><span className="dot dot-blue"></span> Organic</div>
              <div className="legend-val">340</div>
            </div>
            <div className="legend-row">
              <div className="legend-item"><span className="dot dot-green"></span> Purchased</div>
              <div className="legend-val">150</div>
            </div>
            <div className="legend-row">
              <div className="legend-item"><span className="dot dot-red"></span> Blocked</div>
              <div className="legend-val">120</div>
            </div>
            <div className="legend-row">
              <div className="legend-item"><span className="dot dot-amber"></span> Buy Leads</div>
              <div className="legend-val">245</div>
            </div>
          </div>
        </div>

        {/* Card 6: Markets */}
        <div className="crm-card">
          <h3>Markets</h3>
          <div className="market-list-wrapper">
            {markets.map((market, idx) => (
              <div className="market-row-item" key={idx}>
                <div className="market-meta">
                  <span className="market-pair">{market.pair}</span>
                  <span className="market-price">{market.price}</span>
                </div>
                
                <div className="mini-market-spark">
                  <Chart 
                    options={{
                      chart: { sparkline: { enabled: true } },
                      stroke: { curve: 'smooth', width: 1.5 },
                      colors: [market.up ? '#10b981' : '#ef4444'],
                      tooltip: { enabled: false }
                    }} 
                    series={[{ data: market.sparkData }]} 
                    type="line" 
                    width={60} 
                    height={24} 
                  />
                </div>

                <span className={`market-trend-status ${market.up ? 'bg-light-green text-green' : 'bg-light-red text-red'}`}>
                  {market.up ? '▲' : '▼'} {market.change}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}