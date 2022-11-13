import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    uv: 30,
    fill: "#8884d8",
  },
  {
    name: "February",
    uv: 26.69,
    fill: "#83a6ed",
  },
  {
    name: "March",
    uv: 15.69,
    fill: "#8dd1e1",
  },
  {
    name: "April",
    uv: 8.22,
    fill: "#82ca9d",
  },
  {
    name: "May",
    uv: 8.63,
    fill: "#a4de6c",
  },
  {
    name: "Jume",
    uv: 2.63,
    fill: "#d0ed57",
  },
  {
    name: "July",
    uv: 6.67,
    fill: "#ffc658",
  },
];

const style = {
  top: 20,
  left: 290,
  lineHeight: "24px",
};

const RatingRadialBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        cx="40%"
        cy="55%"
        innerRadius="10%"
        outerRadius="80%"
        barSize={10}
        data={data}
      >
        <RadialBar
          minAngle={15}
          label={{ position: "insideStart", fill: "#fff" }}
          background
          clockWise
          dataKey="uv"
        />
        <Legend
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default RatingRadialBarChart;
