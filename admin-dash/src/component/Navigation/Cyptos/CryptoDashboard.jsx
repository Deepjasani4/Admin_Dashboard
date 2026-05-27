import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import './CryptoDashboard.css';

export default function CryptoDashboard() {
  const [timeframe, setTimeframe] = useState('30d');

  // ==========================================
  // APEXCHARTS: SPLINE AREA CHART CONFIG
  // ==========================================
  const chartSeries = [
    {
      name: 'Bitcoin',
      data: [30, 40, 35, 50, 49, 78, 75, 85, 78, 68, 65, 82] // Wave shape matching the blue line
    },
    {
      name: 'Ethereum',
      data: [12, 32, 45, 30, 41, 52, 48, 58, 51, 42, 45, 55] // Wave shape matching the green line
    }
  ];

  const chartOptions = {
    chart: {
      type: 'area',
      toolbar: { show: false },
      zoom: { enabled: false }
    },
    colors: ['#2563eb', '#10b981'], // Royal Blue and Emerald Green
    stroke: {
      curve: 'smooth',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.25,
        opacityTo: 0.02,
        stops: [0, 90, 100]
      }
    },
    dataLabels: { enabled: false },
    grid: {
      borderColor: '#f1f5f9',
      strokeDashArray: 4,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } }
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'right',
      fontFamily: 'system-ui, sans-serif',
      fontSize: '13px',
      offsetY: -10,
      markers: { radius: 12, width: 8, height: 8 }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: { colors: '#94a3b8', fontFamily: 'system-ui, sans-serif', fontSize: '12px' }
      }
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
      labels: {
        style: { colors: '#94a3b8', fontFamily: 'system-ui, sans-serif', fontSize: '12px' }
      }
    },
    tooltip: {
      x: { show: true },
      theme: 'light'
    }
  };

  // ==========================================
  // NOTIFICATIONS DATASET
  // ==========================================
  const notifications = [
    { id: 1, type: 'order', text: 'New order received', time: '2 min ago', amount: '$12.56', dotColor: '#2563eb' },
    { id: 2, type: 'user', text: 'New user registered', time: '15 min ago', amount: '$12.36', dotColor: '#10b981' },
    { id: 3, type: 'complete', text: 'Order completed', time: '1 hr ago', amount: '$11.45', dotColor: '#f59e0b' },
    { id: 4, type: 'pending', text: 'Payment pending', time: '3 hrs ago', amount: '$9.39', dotColor: '#ef4444' }
  ];

  return (
    <div className="crypto-dashboard-canvas">
      
      {/* 1. BREADCRUMBS HEADER */}
      <div className="crypto-page-header">
        <h2>Crypto</h2>
        <div className="crypto-breadcrumbs">Home / Dashboard / <span className="active">Crypto</span></div>
      </div>

      {/* 2. TOP WALLET CARDS ROW */}
      <div className="crypto-wallets-row">
        
        {/* Bitcoin Wallet */}
        <div className="wallet-card wallet-bitcoin">
          <div className="wallet-info-stack">
            <span className="wallet-label">Bitcoin Wallet</span>
            <h2 className="wallet-balance">$32,557</h2>
          </div>
          <div className="wallet-watermark-icon">₿</div>
        </div>

        {/* Dollar Wallet */}
        <div className="wallet-card wallet-dollar">
          <div className="wallet-info-stack">
            <span className="wallet-label">Dollar Wallet</span>
            <h2 className="wallet-balance">$28,354</h2>
          </div>
          <div className="wallet-watermark-icon">$</div>
        </div>

        {/* Pound Wallet */}
        <div className="wallet-card wallet-pound">
          <div className="wallet-info-stack">
            <span className="wallet-label">Pound Wallet</span>
            <h2 className="wallet-balance">$26,254</h2>
          </div>
          <div className="wallet-watermark-icon">£</div>
        </div>

      </div>

      {/* 3. LOWER CONTENT GRID */}
      <div className="crypto-content-grid">
        
        {/* Left Side: Main Chart Panel */}
        <div className="crypto-panel-card statistics-chart-card">
          <div className="chart-header-actions-row">
            <h3>Statistics</h3>
            <div className="chart-timeframe-selector">
              <button className={timeframe === '7d' ? 'active' : ''} onClick={() => setTimeframe('7d')}>7d</button>
              <button className={timeframe === '30d' ? 'active' : ''} onClick={() => setTimeframe('30d')}>30d</button>
              <button className={timeframe === '90d' ? 'active' : ''} onClick={() => setTimeframe('90d')}>90d</button>
            </div>
          </div>
          
          <div className="apex-chart-container-box">
            <Chart options={chartOptions} series={chartSeries} type="area" height={340} width="100%" />
          </div>
        </div>

        {/* Right Side: Notifications Feed Panel */}
        <div className="crypto-panel-card notifications-feed-card">
          <h3>Notifications</h3>
          
          <div className="notifications-list-wrapper">
            {notifications.map((item) => (
              <div key={item.id} className="notification-row-item">
                <div className="notification-left-block">
                  <span className="status-indicator-dot" style={{ backgroundColor: item.dotColor }} />
                  <div className="notification-text-meta">
                    <span className="notification-main-msg">{item.text}</span>
                    <span className="notification-timestamp">{item.time}</span>
                  </div>
                </div>
                <div className="notification-right-block">
                  <span className="notification-financial-value">{item.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}