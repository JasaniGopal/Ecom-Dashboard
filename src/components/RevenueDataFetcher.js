"use client";
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { fetchrevenueData } from "../utils/api";

const RevenueData = () => {
  const [revenueData, setrevenueData] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2022");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchrevenueData();
        setrevenueData(data);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    };

    fetchData();
  }, []);

  const years = Object.keys(revenueData);

  const filteredData = revenueData[selectedYear];


  return (
    <div className="p-[10px] lg:p-[50px] ">
      <h2 className="text-[36px] font-[500] pb-[30px]">Revenue</h2>
      <p>Select Year</p>
      <select
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
        className="mb-4"
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      {filteredData?.length > 0 ? (
        <ResponsiveContainer
          width="100%"
          height={400}
          className="responsive-container"
        >
          <LineChart
            data={filteredData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-center flex h-[400px] items-center justify-center">
          Loading...
        </p>
      )}
    </div>
  );
};

export default RevenueData;
