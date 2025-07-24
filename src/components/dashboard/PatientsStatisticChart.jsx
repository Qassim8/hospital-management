// PatientsColumnChart.jsx
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const PatientsStatisticChart = () => {
  const [filter, setFilter] = useState("week");

  const categories = {
    week: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    month: ["Week 1", "Week 2", "Week 3", "Week 4"],
    year: [
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
  };

  const data = {
    week: {
      admission: [120, 200, 150, 170, 300, 250, 400],
      discharge: [100, 180, 130, 140, 250, 220, 350],
      visit: [80, 160, 110, 100, 200, 180, 300],
    },
    month: {
      admission: [700, 800, 600, 900],
      discharge: [600, 750, 500, 850],
      visit: [500, 700, 400, 800],
    },
    year: {
      admission: [
        1000, 900, 1100, 1050, 950, 1150, 1200, 1300, 1250, 1400, 1350, 1500,
      ],
      discharge: [
        900, 850, 1000, 950, 900, 1050, 1100, 1200, 1150, 1300, 1250, 1400,
      ],
      visit: [800, 750, 900, 850, 800, 950, 1000, 1100, 1050, 1200, 1150, 1300],
    },
  };

  const series = [
    {
      name: "Admission",
      data: data[filter].admission,
      color: "#007bff", // أزرق
    },
    {
      name: "Discharge",
      data: data[filter].discharge,
      color: "#28a745", // أخضر
    },
    {
      name: "Visit",
      data: data[filter].visit,
      color: "#ffc107", // أصفر
    },
  ];

  const options = {
    chart: {
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: categories[filter],
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "10px",
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "20%",
        borderRadius: 7,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "top",
    },
    fill: {
      opacity: 1,
    },
    grid: {
      show: false,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
  };

  return (
    <section className="w-2/3 bg-white p-5 rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold">Patients Statistics</h1>
        <div>
          <button
            onClick={() => setFilter("week")}
            className={`px-3 py-1 rounded mr-2 ${
              filter === "week" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Week
          </button>
          <button
            onClick={() => setFilter("month")}
            className={`px-3 py-1 rounded mr-2 ${
              filter === "month" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Month
          </button>
          <button
            onClick={() => setFilter("year")}
            className={`px-3 py-1 rounded ${
              filter === "year" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Year
          </button>
        </div>
      </div>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height="auto"
      />
    </section>
  );
};

export default PatientsStatisticChart;
