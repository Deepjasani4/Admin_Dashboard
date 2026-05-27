import React from "react";
import Chart from "react-apexcharts";
import "./SaaSBlahboard2.css";

const SaaSBlahboardPart2 = () => {
  // 1. Customer Growth Column Chart Options
  const growthChartOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: ["#10b981", "#ef4444"], // New Customers (Teal/Green), Churned (Red)
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "35%",
        borderRadius: 2,
      },
    },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 2, colors: ["transparent"] },
    grid: {
      borderColor: "#f1f5f9",
      strokeDashArray: 4,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    xaxis: {
      categories: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { colors: "#94a3b8", fontSize: "12px" } },
    },
    yaxis: {
      min: 0,
      max: 200,
      tickAmount: 4,
      labels: { style: { colors: "#94a3b8", fontSize: "12px" } },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      markers: { radius: 2 },
      itemMargin: { horizontal: 10 },
      labels: { colors: "#64748b" },
    },
  };

  const growthChartSeries = [
    { name: "New Customers", data: [115, 135, 120, 160, 145, 185] },
    { name: "Churned", data: [8, 12, 6, 15, 10, 12] },
  ];

  // 2. Mock Transaction Data
  const transactions = [
    { id: "SJ", name: "Sarah Johnson", email: "sarah.j@example.com", plan: "Enterprise", amount: "$2,999/yr", date: "Jan 07", status: "Active", impact: "+$250", color: "#3b82f6" },
    { id: "MC", name: "Michael Chen", email: "m.chen@example.com", plan: "Professional", amount: "$49/mo", date: "Jan 06", status: "Active", impact: "+$49", color: "#10b981" },
    { id: "EW", name: "Emma Wilson", email: "emma.w@example.com", plan: "Starter", amount: "$19/mo", date: "Jan 05", status: "Trial", impact: "+$0", color: "#06b6d4" },
    { id: "AR", name: "Alex Rodriguez", email: "alex.r@example.com", plan: "Enterprise", amount: "$2,999/yr", date: "Jan 04", status: "Active", impact: "+$250", color: "#8b5cf6" },
    { id: "MG", name: "Maria Garcia", email: "m.garcia@example.com", plan: "Professional", amount: "$49/mo", date: "Jan 03", status: "Churned", impact: "-$49", color: "#f59e0b" },
    { id: "DK", name: "David Kim", email: "d.kim@example.com", plan: "Starter", amount: "$19/mo", date: "Jan 02", status: "Active", impact: "+$19", color: "#22d3ee" },
  ];

  return (
    <div className="saas-dashboard-p2">
      {/* Middle Grid Widgets Row */}
      <div className="widgets-row">
        {/* Widget 1: Conversion Funnel */}
        <div className="widget-card">
          <h3 className="widget-title">Conversion Funnel</h3>
          <div className="funnel-container">
            <div className="funnel-row">
              <div className="funnel-meta"><span>Visitors</span><span className="count">12,450 <span className="pct">(100%)</span></span></div>
              <div className="funnel-bar-bg"><div className="funnel-bar bar-gray" style={{ width: "100%" }}></div></div>
            </div>
            <div className="funnel-row">
              <div className="funnel-meta"><span>Signups</span><span className="count">1,867 <span className="pct">(15%)</span></span></div>
              <div className="funnel-bar-bg"><div className="funnel-bar bar-blue" style={{ width: "15%" }}></div></div>
            </div>
            <div className="funnel-row">
              <div className="funnel-meta"><span>Active Trial</span><span className="count">934 <span className="pct">(7.5%)</span></span></div>
              <div className="funnel-bar-bg"><div className="funnel-bar bar-orange" style={{ width: "7.5%" }}></div></div>
            </div>
            <div className="funnel-row">
              <div className="funnel-meta"><span>Paid</span><span className="count">467 <span className="pct">(3.75%)</span></span></div>
              <div className="funnel-bar-bg"><div className="funnel-bar bar-green" style={{ width: "3.75%" }}></div></div>
            </div>
          </div>
        </div>

        {/* Widget 2: Customer Growth */}
        <div className="widget-card">
          <h3 className="widget-title">Customer Growth</h3>
          <div className="growth-chart-container">
            <Chart options={growthChartOptions} series={growthChartSeries} type="bar" height="100%" />
          </div>
        </div>

        {/* Widget 3: Top Metrics */}
        <div className="widget-card">
          <h3 className="widget-title">Top Metrics</h3>
          <div className="metrics-list">
            <div className="metric-item">
              <span className="metric-label">Trial-to-Paid Rate</span>
              <span className="metric-val">25% <span className="trend positive">+2.1%</span></span>
            </div>
            <div className="metric-item">
              <span className="metric-label">Avg Revenue Per User</span>
              <span className="metric-val">$48 <span className="trend positive">+$3</span></span>
            </div>
            <div className="metric-item">
              <span className="metric-label">Expansion Revenue</span>
              <span className="metric-val">$4,200 <span className="trend positive">+12%</span></span>
            </div>
            <div className="metric-item">
              <span className="metric-label">Net Revenue Retention</span>
              <span className="metric-val">108% <span className="trend positive">+3%</span></span>
            </div>
            <div className="metric-item">
              <span className="metric-label">Quick Ratio</span>
              <span className="metric-val">3.2x <span className="trend positive">+0.4</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row Table Section */}
      <div className="transactions-card">
        <h3 className="widget-title table-title">Recent Transactions</h3>
        <div className="table-wrapper">
          <table className="transactions-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Plan</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
                <th>MRR Impact</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, idx) => (
                <tr key={idx}>
                  <td>
                    <div className="customer-cell">
                      <div className="avatar" style={{ backgroundColor: tx.color }}>{tx.id}</div>
                      <div className="customer-info">
                        <span className="name">{tx.name}</span>
                        <span className="email">{tx.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="text-muted">{tx.plan}</td>
                  <td className="text-muted">{tx.amount}</td>
                  <td className="text-muted">{tx.date}</td>
                  <td>
                    <span className={`status-badge badge-${tx.status.toLowerCase()}`}>
                      {tx.status}
                    </span>
                  </td>
                  <td className={`impact-cell ${tx.impact.startsWith("-") ? "negative-text" : "positive-text"}`}>
                    {tx.impact}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SaaSBlahboardPart2;