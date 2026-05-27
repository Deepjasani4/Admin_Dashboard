import React from 'react';
import Chart from 'react-apexcharts';
import { ChevronDown } from 'lucide-react';
import './MarketOverviewDashboard.css';

export default function MarketOverviewDashboard() {

  // ==========================================
  // 1. DATASET: MARKET OVERVIEW TABLE
  // ==========================================
  const marketPairs = [
    { pair: 'BTC/USD', price: '$43,250', change: '+2.56%', isPositive: true, marketCap: '$812B', sparkData: [32, 35, 33, 38, 36, 42, 39, 41] },
    { pair: 'ETH/USD', price: '$2,280', change: '-0.87%', isPositive: false, marketCap: '$274B', sparkData: [38, 36, 34, 35, 31, 32, 29, 28] },
    { pair: 'BNB/USD', price: '$312', change: '+1.24%', isPositive: true, marketCap: '$48B', sparkData: [22, 24, 23, 26, 25, 25, 28, 27] },
    { pair: 'SOL/USD', price: '$98', change: '+5.32%', isPositive: true, marketCap: '$42B', sparkData: [15, 18, 16, 22, 20, 24, 23, 26] },
    { pair: 'ADA/USD', price: '$0.52', change: '-1.15%', isPositive: false, marketCap: '$18B', sparkData: [29, 27, 26, 24, 24, 22, 20, 19] },
  ];

  // Helper config generator for the micro table sparklines
  const getSparklineConfig = (isPositive) => ({
    chart: { type: 'line', sparkline: { enabled: true } },
    stroke: { curve: 'smooth', width: 2 },
    colors: [isPositive ? '#10b981' : '#ef4444'], // Emerald Green / Crimson Red
    tooltip: { enabled: false }
  });

  // ==========================================
  // 2. CONFIG: PORTFOLIO MAIN AREA CHART
  // ==========================================
  const portfolioSeries = [{
    name: 'Total Earnings',
    data: [420, 460, 480, 520, 580, 640, 660, 700, 760, 800, 840, 875] // Smooth upward progression match
  }];

  const portfolioOptions = {
    chart: {
      type: 'area',
      toolbar: { show: false },
      zoom: { enabled: false }
    },
    colors: ['#3b82f6'], // Royal Blue line matching image accent color
    stroke: { curve: 'smooth', width: 3 },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.15,
        opacityTo: 0.01,
        stops: [0, 95, 100]
      }
    },
    dataLabels: { enabled: false },
    grid: {
      borderColor: '#f1f5f9',
      strokeDashArray: 5,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: { colors: '#94a3b8', fontFamily: 'inherit', fontSize: '12px' }
      }
    },
    yaxis: {
      min: 400,
      max: 900,
      tickAmount: 5,
      labels: {
        formatter: (val) => `$${val}`,
        style: { colors: '#94a3b8', fontFamily: 'inherit', fontSize: '12px' }
      }
    },
    tooltip: { theme: 'light' }
  };

  return (
    <div className="dashboard-market-row">
      
      {/* LEFT WIDGET: MARKET OVERVIEW DATA GRID */}
      <div className="dashboard-card market-overview-card">
        <div className="card-header-borderless">
          <h3>Market Overview</h3>
        </div>
        
        <div className="table-responsive-container">
          <table className="market-data-table">
            <thead>
              <tr>
                <th>PAIR</th>
                <th>PRICE</th>
                <th>CHANGE</th>
                <th className="centered-column">7D CHART</th>
                <th>MARKET CAP</th>
              </tr>
            </thead>
            <tbody>
              {marketPairs.map((coin) => (
                <tr key={coin.pair}>
                  <td className="pair-cell-bold">
                    <span>{coin.pair}</span>
                    <ChevronDown size={14} className="dropdown-arrow-icon" />
                  </td>
                  <td className="price-text-cell">{coin.price}</td>
                  <td>
                    <span className={`change-pill-badge ${coin.isPositive ? 'positive' : 'negative'}`}>
                      {coin.change}
                    </span>
                  </td>
                  <td className="centered-column sparkline-td-cell">
                    <div className="table-sparkline-wrapper">
                      <Chart 
                        options={getSparklineConfig(coin.isPositive)} 
                        series={[{ data: coin.sparkData }]} 
                        type="line" 
                        width={90} 
                        height={32} 
                      />
                    </div>
                  </td>
                  <td className="market-cap-text-cell">{coin.marketCap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* RIGHT WIDGET: PORTFOLIO EARNINGS AREA CHART */}
      <div className="dashboard-card portfolio-chart-card">
        <div className="portfolio-header-summary">
          <h3>Portfolio</h3>
          <div className="earnings-metric-block">
            <span className="metric-label-gray">Total Earnings</span>
            <h2 className="metric-value-headline">$3,13,037</h2>
          </div>
        </div>

        <div className="portfolio-chart-canvas-box">
          <Chart options={portfolioOptions} series={portfolioSeries} type="area" height={280} width="100%" />
        </div>
      </div>

    </div>
  );
}