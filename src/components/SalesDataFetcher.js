"use client";
import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { fetchSalesData } from "../utils/api";

const DataFetcher = () => {
  const [salesData, setSalesData] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2022");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSalesData();
        setSalesData(data);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    };

    fetchData();
  }, []);

  const years = Object.keys(salesData);

  const filteredData = salesData[selectedYear];


  return (
    <div className="p-[10px] lg:p-[50px] ">
      <h2 className="text-[36px] font-[500] pb-[30px]">Sales</h2>
       
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
          <BarChart
            data={filteredData}
            margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-center flex h-[400px] items-center justify-center">
          Loading...
        </p>
      )}
    </div>
  );
};

export default DataFetcher;
