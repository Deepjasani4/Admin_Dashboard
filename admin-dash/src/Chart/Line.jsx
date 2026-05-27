import React from "react";
import Chart from "react-apexcharts";
import { Monitor, Smartphone, Tablet, Users, TrendingUp } from "lucide-react";

import "./Line.css";

const LineChart = () => {
  /* =========================
     LINE / AREA CHART
  ========================== */

  const lineOptions = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },

    stroke: {
      curve: "smooth",
      width: 3,
    },

    dataLabels: {
      enabled: false,
    },

    colors: ["#4f7df3", "#0ea5e9"],

    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
      },
    },

    grid: {
      borderColor: "#f1f1f1",
      strokeDashArray: 5,
    },

    legend: {
      position: "top",
      horizontalAlign: "right",
    },

    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },

    yaxis: {
      min: 20,
      max: 100,
    },
  };

  const lineSeries = [
    {
      name: "Sessions",
      data: [31, 40, 28, 51, 42, 85, 77, 95, 87, 73, 69, 85],
    },
    {
      name: "Page Views",
      data: [87, 76, 65, 89, 95, 76, 89, 67, 78, 95, 87, 92],
    },
  ];

  /* =========================
     DONUT CHART
  ========================== */

  const donutOptions = {
    chart: {
      type: "donut",
    },

    labels: ["Desktop", "Mobile", "Tablet"],

    colors: ["#4f7df3", "#2eaf7d", "#f59e0b"],

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },

    stroke: {
      width: 0,
    },
  };

  const donutSeries = [45.8, 38.7, 15.5];

  return (
    <div className=" LineChart-container">
      {/* LEFT SIDE */}
      <div className="LineChart-card">
        {/* HEADER */}
        <div className="card-header">
          <h2>Real-time Analytics</h2>

          <div className="days-btn">
            <button>7d</button>
            <button className="active">30d</button>
            <button>90d</button>
          </div>
        </div>
        <hr />
        {/* STATS */}
        <div className="stats-row">
          <div className="stat-box">
            <div className="stat-icon pink">
              <Users size={20} />
            </div>

            <div>
              <h4>Sessions</h4>
              <h2>47,829</h2>
            </div>
          </div>

          <div className="stat-box">
            <div className="stat-icon green">
              <TrendingUp size={20} />
            </div>

            <div>
              <h4>Page Views</h4>
              <h2>186,247</h2>
            </div>
          </div>
        </div>

        {/* LINE CHART */}
        <Chart
          options={lineOptions}
          series={lineSeries}
          type="area"
          height={380}
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="device-card">
        <h2>Device Analytics</h2>

        <Chart
          options={donutOptions}
          series={donutSeries}
          type="donut"
          height={260}
        />

        <div className="device-list">
          <div className="device-item">
            <div className="device-title">
              <Monitor size={18} color="#e91e63" />
              <span>Desktop</span>
            </div>

            <span>45.8%</span>
          </div>

          <div className="progress">
            <div className="progress-fill desktop"></div>
          </div>

          <div className="device-item">
            <div className="device-title">
              <Smartphone size={18} color="#2eaf7d" />
              <span>Mobile</span>
            </div>

            <span>38.7%</span>
          </div>

          <div className="progress">
            <div className="progress-fill mobile"></div>
          </div>

          <div className="device-item">
            <div className="device-title">
              <Tablet size={18} color="#f59e0b" />
              <span>Tablet</span>
            </div>

            <span>15.5%</span>
          </div>

          <div className="progress">
            <div className="progress-fill tablet"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineChart;
