// VisitorChart.jsx
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const PatientsVisitorChart = () => {
  const [range, setRange] = useState("week");

  // البيانات حسب النطاق المختار
  const dataByRange = {
    week: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      male: [200, 300, 350, 500, 680, 500, 720],
      female: [110, 200, 600, 250, 720, 220, 680],
    },
    month: {
      categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
      male: [800, 1200, 1800, 1100],
      female: [700, 500, 1200, 1050],
    },
    year: {
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
      male: [
        2000, 2700, 1400, 2100, 2500, 300, 2100, 1600, 2000, 2800, 3000, 2900,
      ],
      female: [
        1800, 2900, 2000, 1800, 2400, 3000, 2400, 1700, 2500, 2700, 2000, 2800,
      ],
    },
  };

  const currentData = dataByRange[range];

  const series = [
    {
      name: "Male",
      data: currentData.male,
    },
    {
      name: "Female",
      data: currentData.female,
    },
  ];

  const options = {
    chart: {
      type: "line",
      height: 350,
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    stroke: {
      curve: "smooth", // spline line
      width: 3,
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: currentData.categories,
      axisBorder: {
        show: false, // ❌ يخفي الخط الأساسي لمحور X
      },
      axisTicks: {
        show: false, // ❌ يخفي العلامات الصغيرة (ticks)
      },
    },
    yaxis: {
      min: 0,
      max: 3000,
      tickAmount: 6,
      labels: {
        formatter: (val) => Math.round(val),
      },
    },
    colors: ["#3B82F6", "#0bb2d5"], // أزرق للذكور، وردي للإناث
    markers: {
      size: 0,
    },
    legend: {
      position: "top",
    },
  };

  return (
    <section className="flex-1 bg-white p-5 rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold">Patients Visitor</h1>
        <div>
          <button
            onClick={() => setRange("week")}
            className={`px-3 py-1 rounded mr-2 ${
              range === "week" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Week
          </button>
          <button
            onClick={() => setRange("month")}
            className={`px-3 py-1 rounded mr-2 ${
              range === "month" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Month
          </button>
          <button
            onClick={() => setRange("year")}
            className={`px-3 py-1 rounded ${
              range === "year" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Year
          </button>
        </div>
      </div>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={250}
      />
    </section>
  );
};

export default PatientsVisitorChart;
