import React from "react";
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

const data = [
  {
    name: "January",
    Expenses: 4000,
    Income: 6400,
    amt: 2400,
  },
  {
    name: "February",
    Expenses: 3000,
    Income: 4398,
    amt: 2210,
  },
  {
    name: "March",
    Expenses: 2000,
    Income: 9800,
    amt: 2290,
  },
  {
    name: "April",
    Expenses: 2780,
    Income: 3908,
    amt: 2000,
  },
  {
    name: "May",
    Expenses: 1890,
    Income: 4800,
    amt: 2181,
  },
  {
    name: "June",
    Expenses: 2390,
    Income: 3800,
    amt: 2500,
  },
  {
    name: "July",
    Expenses: 3490,
    Income: 4300,
    amt: 2100,
  },
  {
    name: "August",
    Expenses: 2490,
    Income: 5300,
    amt: 2100,
  },
  {
    name: "September",
    Expenses: 1490,
    Income: 4300,
    amt: 2100,
  },
  {
    name: "October",
    Expenses: 1490,
    Income: 6300,
    amt: 2100,
  },
  {
    name: "November",
    Expenses: 1490,
    Income: 8300,
    amt: 2100,
  },
  {
    name: "December",
    Expenses: 1490,
    Income: 4300,
    amt: 2100,
  },
];
const IncExpBarChart = () => {
  return (
    <>
      <div className=" pt-12 pb-8 px-4 bg-white rounded-lg shadow-lg">
        <ResponsiveContainer width="100%" aspect={3}>
          <BarChart
            width={800}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: -5,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Income" fill="#2f3e83" />
            <Bar dataKey="Expenses" fill="#01cc74" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default IncExpBarChart;
