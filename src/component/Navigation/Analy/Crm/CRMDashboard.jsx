import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import './CRMDashboard.css'; // Importing the complete layout styles from above

// Data values representing the trend line for Transactions
const transactionData = [
  { name: 'Day 1', value: 14000 },
  { name: 'Day 5', value: 13000 },
  { name: 'Day 10', value: 16000 },
  { name: 'Day 15', value: 15000 },
  { name: 'Day 20', value: 21000 },
  { name: 'Day 25', value: 19000 },
  { name: 'Day 30', value: 21000 },
  { name: 'Day 35', value: 18000 },
];

// Horizontal layout category statistics 
const newsData = [
  { name: 'Sport', value: 53 },
  { name: 'Music', value: 13 },
  { name: 'Travel', value: 30 },
  { name: 'News', value: 4 },
].reverse(); // Flipped so 'Sport' ranks higher up on the vertical scale

export default function CRMDashboard() {
  const [timePeriod, setTimePeriod] = useState('30d');

  return (
    <div className="crm-dashboard-container">
      {/* Route Headers */}
      <div className="crm-header">
        <h1>CRM</h1>
        <p className="crm-breadcrumb">
          Home / Dashboard / <span>CRM</span>
        </p>
      </div>

      {/* 3-Column Display Structure */}
      <div className="crm-grid">
        
        {/* Card Block 1: Transactions Panel */}
        <div className="crm-card">
          <div>
            <div className="crm-card-header-flex">
              <h2 className="crm-card-title">Transactions</h2>
              <div className="crm-toggle-group">
                {['7d', '30d', '90d'].map((period) => (
                  <button
                    key={period}
                    onClick={() => setTimePeriod(period)}
                    className={`crm-toggle-btn ${timePeriod === period ? 'active' : ''}`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="crm-transaction-value">$2,08,187</h3>
              <p className="crm-subtext">Total this period</p>
            </div>
          </div>

          <div className="crm-chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={transactionData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                <defs>
                  <linearGradient id="areaGradientColor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#3b82f6" 
                  strokeWidth={2.5} 
                  fillOpacity={1} 
                  fill="url(#areaGradientColor)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Card Block 2: Rating Metrics Panel */}
        <div className="crm-card">
          <h2 className="crm-card-title">Project Rating</h2>
          
          <div className="crm-rating-center">
            <div className="crm-rating-row">
              <Star className="crm-big-star" />
              <span className="crm-rating-number">4.3</span>
            </div>

            <div className="crm-stars-group">
              {[1, 2, 3, 4].map((starIdx) => (
                <Star key={starIdx} className="crm-star-icon filled" />
              ))}
              <Star className="crm-star-icon empty" />
            </div>

            <div className="crm-badge">
              <span>↑</span> &nbsp;+0.4 this month
            </div>
          </div>
        </div>

        {/* Card Block 3: Categorized Horizontal Stats */}
        <div className="crm-card">
          <h2 className="crm-card-title">News Statistics</h2>
          
          <div className="crm-bar-chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={newsData}
                layout="vertical"
                margin={{ top: 5, right: 15,  bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#abbbcb" />
                <XAxis 
                  type="number" 
                  domain={[0, 60]} 
                  ticks={[0, 10, 20, 30, 40, 50, 60]} 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                />
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#475569', fontSize: 13 }}
                />
                <Bar 
                  dataKey="value" 
                  fill="#2dd4bf" 
                  radius={[0, 4, 4, 0]} 
                  barSize={12}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}