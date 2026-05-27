import React from 'react';
import Chart from 'react-apexcharts';
import { Calendar, ArrowUp, ArrowDown } from 'lucide-react';
import './ProjectDashboard.css';

export default function ProjectDashboard() {

  // ==========================================
  // 1. DATASET: LEADERBOARD WIDGET
  // ==========================================
  const leaderboardData = [
    { rank: 1, name: 'Emma Wilson', value: '+4,250', isPositive: true },
    { rank: 2, name: 'James Chen', value: '+3,890', isPositive: true },
    { rank: 3, name: 'Sofia Martinez', value: '-2,150', isPositive: false },
    { rank: 4, name: 'Lucas Brown', value: '+1,720', isPositive: true },
    { rank: 5, name: 'Olivia Taylor', value: '-980', isPositive: false },
  ];

  // ==========================================
  // 2. CONFIG: WEEKLY RESPONSE TIME BAR CHART
  // ==========================================
  const barChartSeries = [{
    name: 'Response Frequency',
    data: [45, 55, 42, 68, 22, 44, 56] // Matches layout visual variations
  }];

  const barChartOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false }
    },
    colors: ['#5c8af0'], // Accent blue color match
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: '40%',
      }
    },
    dataLabels: { enabled: false },
    grid: {
      borderColor: '#f1f5f9',
      strokeDashArray: 4,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } }
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: { colors: '#94a3b8', fontSize: '12px' }
      }
    },
    yaxis: {
      min: 0,
      max: 80,
      tickAmount: 4,
      labels: {
        style: { colors: '#94a3b8', fontSize: '12px' }
      }
    }
  };

  // ==========================================
  // 3. CONFIG: DISTRIBUTION DONUT CHART
  // ==========================================
  const donutSeries = [23, 14, 35, 28]; // Percentages matching indicators
  const donutOptions = {
    chart: { type: 'donut' },
    colors: ['#10b981', '#f59e0b', '#8b5cf6', '#3b82f6'], // Success Green, Warning Orange, Purple, Primary Blue
    labels: ['Success', 'Warning', 'Purple', 'Primary'],
    stroke: { show: true, colors: ['#ffffff'], width: 3 },
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val.toFixed(1)}%`,
      style: { fontSize: '11px', colors: ['#ffffff'], fontWeight: '700' }
    },
    legend: { show: false }, // Handled via custom structured grid legend underneath
    plotOptions: {
      pie: {
        donut: {
          size: '70%'
        }
      }
    }
  };

  return (
    <div className="project-dashboard-wrapper">
      
      {/* HEADER BREADCRUMBS ROW */}
      <div className="dashboard-navigation-header">
        <h2>Project</h2>
        <div className="breadcrumb-links">Home / Dashboard / <span className="active-path">Project</span></div>
      </div>

      {/* TOP ROW: METRIC CARDS MATRIX */}
      <div className="dashboard-grid-row triple-column">
        
        {/* CARD 1: PROJECT TASK METER */}
        <div className="metrics-panel-card">
          <div className="panel-flex-header">
            <span className="panel-mini-title">Project Task</span>
            <span className="badge-pill teal-badge">23% Done</span>
          </div>
          <div className="panel-progress-body">
            <div className="progress-metric-labels">
              <h4>Complete Task</h4>
              <span className="fraction-count">6/10</span>
            </div>
            <div className="progress-bar-track">
              <div className="progress-bar-fill target-teal" style={{ width: '60%' }}></div>
            </div>
            <span className="team-count-text">Team: 28 Persons</span>
          </div>
        </div>

        {/* CARD 2: SALES STATISTICS HERO */}
        <div className="metrics-panel-card">
          <div className="panel-flex-header justify-end">
            <div className="time-filter-toggle">
              <span>7d</span>
              <span className="active-toggle-pill">30d</span>
              <span>90d</span>
            </div>
          </div>
          <div className="panel-sales-body">
            <h3>Sales Statistics</h3>
            <h2 className="headline-numeric-value">8,07,093</h2>
            <p className="subtext-muted-gray">Top selling items statistic by last period</p>
          </div>
        </div>

        {/* CARD 3: UPCOMING EVENT METRIC */}
        <div className="metrics-panel-card">
          <div className="panel-flex-header">
            <span className="panel-mini-title">Upcoming Event</span>
            <span className="badge-pill blue-badge">34%</span>
          </div>
          <div className="panel-events-body">
            <div className="calendar-icon-center-frame">
              <Calendar size={32} className="calendar-svg-accent" />
            </div>
            <h4 className="competitor-headline-text">45 Competitors</h4>
          </div>
        </div>

      </div>

      {/* BOTTOM ROW: CHARTS AND DATA LIST MATRIX */}
      <div className="dashboard-grid-row triple-column margin-top-layer">
        
        {/* CARD 4: REPLY RESPONSE TIME BAR CHART */}
        <div className="metrics-panel-card">
          <div className="panel-flex-header border-none">
            <span className="panel-mini-title-bold">Reply</span>
          </div>
          <div className="chart-analytics-body">
            <span className="response-time-metric">Average Response Time: 2.43h</span>
            <div className="chart-mount-canvas">
              <Chart options={barChartOptions} series={barChartSeries} type="bar" height={220} />
            </div>
          </div>
        </div>

        {/* CARD 5: STATISTICS DONUT DATA DISTRIBUTION */}
        <div className="metrics-panel-card">
          <div className="panel-flex-header border-none">
            <span className="panel-mini-title-bold">Statistics</span>
          </div>
          <div className="donut-analytics-body">
            <div className="donut-chart-mount-canvas">
              <Chart options={donutOptions} series={donutSeries} type="donut" height={200} />
            </div>
            
            {/* Custom Grid Legend Matrix matching the specific table look from images */}
            <div className="custom-donut-grid-legend">
              <div className="legend-row-item">
                <div className="legend-label"><span className="dot target-green"></span>Success</div>
                <div className="legend-val">23%</div>
              </div>
              <div className="legend-row-item">
                <div className="legend-label"><span className="dot target-orange"></span>Warning</div>
                <div className="legend-val">14%</div>
              </div>
              <div className="legend-row-item">
                <div className="legend-label"><span className="dot target-purple"></span>Purple</div>
                <div className="legend-val">35%</div>
              </div>
              <div className="legend-row-item">
                <div className="legend-label"><span className="dot target-blue"></span>Primary</div>
                <div className="legend-val">28%</div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 6: LEADERBOARD LIST COMPONENT */}
        <div className="metrics-panel-card">
          <div className="panel-flex-header border-none">
            <span className="panel-mini-title-bold">Leaderboard</span>
          </div>
          <div className="leaderboard-analytics-body">
            <ul className="leaderboard-data-list">
              {leaderboardData.map((user) => (
                <li key={user.rank} className="leaderboard-list-item">
                  <div className="user-profile-identity-box">
                    <span className="rank-index-circle">{user.rank}</span>
                    <span className="user-profile-fullname">{user.name}</span>
                  </div>
                  <div className={`leaderboard-metric-pill ${user.isPositive ? 'trend-up' : 'trend-down'}`}>
                    {user.isPositive ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
                    <span>{user.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

    </div>
  );
}