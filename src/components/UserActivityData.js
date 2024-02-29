"use client";
import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { fetchuserData } from "../utils/api";

const UserActivityData = () => {
  const [userData, setuserData] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2022");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchuserData();
        setuserData(data);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    };

    fetchData();
  }, []);

  const years = Object.keys(userData);

  const filteredData = userData[selectedYear];

  // Ensure filteredData is not undefined before trying to aggregate
  const aggregatedData = filteredData
    ? filteredData.reduce((acc, curr) => {
        acc[curr.month] = acc[curr.month]
          ? acc[curr.month] + curr.value
          : curr.value;
        return acc;
      }, {})
    : {};

  // Convert aggregated data to array for pie chart
  const pieChartData = Object.keys(aggregatedData).map((month) => ({
    month,
    value: aggregatedData[month],
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];


  return (
    <div className="p-[10px] lg:p-[50px] ">
      <h2 className="text-[36px] font-[500] pb-[30px]">User Acitvity</h2>
      <p>Select Year</p>
      <select
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
        className="mb-4"
      >
        {years.map((year) => (
          <option key={year} selected value={year}>
            {year}
          </option>
        ))}
      </select>

      {pieChartData?.length > 0 ? (
        <ResponsiveContainer
          width="100%"
          height={400}
          className="responsive-container"
        >
          <PieChart>
            <Pie
              data={pieChartData}
              nameKey="month"
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#8884d8"
              label
              Legend
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
      <Legend />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-center flex h-[400px] items-center justify-center">
          Loading...
        </p>
      )}
    </div>
  );
};

export default UserActivityData;
