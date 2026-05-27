import React from "react";
import Chart from "react-apexcharts";

import "./Analytics.css";

import LineChart from "../Chart/Line.jsx";
import Map from "../component/Navigation/Analy/Map.jsx";
import Transactions from "../component/Navigation/Analy/Transactions.jsx";
import KpiCards from "../component/Navigation/Analy/KpiCards.jsx";
import RevenueSection from "../component/Navigation/Analy/RevenueSection.jsx";

const Analytics = () => {
  const cards = [
    {
      title: "Total Revenue",
      value: "$847,290",
      growth: "+12.5% from last month",
      color: "#e91e63",
      series: [10, 14, 12, 18, 16, 28, 26],
      type: "line",
    },

    {
      title: "Active Users",
      value: "24,689",
      growth: "+8.2% from last week",
      color: "#2eaf7d",
      series: [8, 18, 12, 22, 15, 25, 20],
      type: "area",
    },

    {
      title: "Orders",
      value: "1,847",
      growth: "-2.1% from yesterday",
      color: "#e69500",
      series: [15, 35, 22, 45, 30, 18, 25],
      type: "bar",
    },

    {
      title: "Conversion Rate",
      value: "3.47%",
      growth: "+0.3% from last month",
      color: "#0ea5e9",
      series: [10, 20, 15, 30, 25, 40, 35],
      type: "line",
    },
  ];

  return (
    <div className="analytics-page">
      {/* PAGE HEADER */}
      <div className="page-header">
        <h1>Analytics</h1>

        <p>
          Home / Dashboard / <span>Analytics</span>
        </p>
      </div>

      {/* CARDS */}
      <div className="card-grid">
        {cards.map((card, index) => {
          const options = {
            chart: {
              sparkline: {
                enabled: true,
              },

              toolbar: {
                show: false,
              },
            },

            stroke: {
              curve: "smooth",
              width: 3,
            },

            fill: {
              opacity: 0.3,
            },

            tooltip: {
              enabled: false,
            },

            colors: ["#ffffff"],

            grid: {
              show: false,
            },

            dataLabels: {
              enabled: false,
            },

            xaxis: {
              labels: {
                show: false,
              },
            },

            yaxis: {
              show: false,
            },
          };

          const series = [
            {
              data: card.series,
            },
          ];

          return (
            <div
              className="card"
              key={index}
              style={{ background: card.color }}
            >
              <div className="card-content">
                <div>
                  <h3>{card.title}</h3>

                  <h2>{card.value}</h2>

                  <p>{card.growth}</p>
                </div>

                <div className="chart-box">
                  <Chart
                    options={options}
                    series={series}
                    type={card.type}
                    height={90}
                    width={100}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* BIG CHART */}
      <div className="line-chart-wrapper">
        <LineChart />
      </div>

      {/* MAP */}
      <div className="map-wrapper">
        <Map />
      </div>

      {/* TRANSACTIONS */}
      <div className="transactions-wrapper">
        <Transactions />
      </div>

      <KpiCards />
      <RevenueSection />
    </div>
  );
};

export default Analytics;
