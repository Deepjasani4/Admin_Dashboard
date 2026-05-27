import React from "react";
import "./Transactions.css";

const Transactions = () => {
  // TRANSACTIONS DATA
  const transactionData = [
    {
      id: "JD",
      name: "John Doe",
      email: "john@example.com",
      product: "Admin Dashboard",
      amount: "$890.00",
      status: "Completed",
      statusClass: "badge-completed",
      date: "Mar 28, 2026",
      avatarColor: "#e91e63",
    },
    {
      id: "SK",
      name: "Sarah Kim",
      email: "sar@example.com",
      product: "Landing Page",
      amount: "$450.00",
      status: "Pending",
      statusClass: "badge-pending",
      date: "Mar 27, 2026",
      avatarColor: "#10b981",
    },
    {
      id: "MR",
      name: "Mike Ross",
      email: "mike@example.com",
      product: "E-commerce Theme",
      amount: "$1,290.00",
      status: "Failed",
      statusClass: "badge-failed",
      date: "Mar 26, 2026",
      avatarColor: "#f59e0b",
    },
    {
      id: "LP",
      name: "Lisa Park",
      email: "lisa@example.com",
      product: "Portfolio Template",
      amount: "$320.00",
      status: "Completed",
      statusClass: "badge-completed",
      date: "Mar 25, 2026",
      avatarColor: "#06b6d4",
    },
    {
      id: "AW",
      name: "Alex Wong",
      email: "alex@example.com",
      product: "Blog Theme",
      amount: "$675.00",
      status: "Processing",
      statusClass: "badge-processing",
      date: "Mar 24, 2026",
      avatarColor: "#ef4444",
    },
  ];

  // LIVE ACTIVITY FEED DATA
  const activityData = [
    {
      title: "New user registered",
      desc: "John Doe signed up for the premium plan",
      time: "2 min ago",
      color: "#e91e63",
    },
    {
      title: "Order #4521 completed",
      desc: "Payment of $890.00 processed successfully",
      time: "15 min ago",
      color: "#10b981",
    },
    {
      title: "Server load warning",
      desc: "CPU usage peaked at 89% on node-3",
      time: "1 hour ago",
      color: "#f59e0b",
    },
    {
      title: "New feature deployed",
      desc: "Analytics dashboard v2.4 released to production",
      time: "3 hours ago",
      color: "#3b82f6",
    },
    {
      title: "Payment failed",
      desc: "Subscription renewal failed for user #8842",
      time: "5 hours ago",
      color: "#ef4444",
    },
  ];

  return (
    <div className="dashboard-bottom-grid">
      {/* LEFT SIDE: RECENT TRANSACTIONS */}
      <div className="table-card">
        <div className="table-header">
          <h2>Recent Transactions</h2>
          <div className="header-actions">
            <button className="btn-export">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight: '5px'}}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              Export
            </button>
            <button className="btn-add-new">+ Add New</button>
          </div>
        </div>

        <div className="table-responsive">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {transactionData.map((item, index) => (
                <tr key={index}>
                  <td>
                    <div className="customer-info">
                      <div className="avatar" style={{ backgroundColor: item.avatarColor }}>
                        {item.id}
                      </div>
                      <div>
                        <span className="customer-name">{item.name}</span>
                        <span className="customer-email">{item.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="product-text">{item.product}</td>
                  <td className="amount-text">{item.amount}</td>
                  <td>
                    <span className={`status-badge ${item.statusClass}`}>{item.status}</span>
                  </td>
                  <td className="date-text">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* RIGHT SIDE: LIVE ACTIVITY FEED */}
      <div className="feed-card">
        <div className="feed-header">
          <h2>Live Activity Feed</h2>
          <span className="live-indicator">
            <span className="dot"></span> Live
          </span>
        </div>

        <div className="activity-timeline">
          {activityData.map((activity, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-badge" style={{ borderColor: activity.color }}></div>
              <div className="timeline-content">
                <h4>{activity.title}</h4>
                <p>{activity.desc}</p>
                <span className="time-text">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>

        <button className="btn-view-all">View All Activities</button>
      </div>
    </div>
  );
};

export default Transactions;