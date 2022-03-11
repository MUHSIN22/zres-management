import { display } from "@mui/system";
import React from "react";
import {
  PieChart,
  Pie,
  Legend,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
function doughNutChart() {
  const data02 = [
    { name: "Sales", value: 2400 },
    { name: "Purchase", value: 4567 },
    { name: "Gross Profit", value: 1398 },
  ];
  const COLORS = ["#040153", "#b196c2", "#7d3a58"];
  return (
    <div
      style={{ backgroundColor: "#fff", padding: "5px", borderRadius: "15px" }}
    >
      <ResponsiveContainer width="100%" aspect={2}>
        <PieChart width={500} height={500}>
          <Pie
            dataKey="value"
            data={data02}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={80}
            fill="#82ca9d"
          >
            {" "}
            {data02.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      <div className="color__section">
        <div
          className="color__sectionssss"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div
            className="color"
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "#040153",
              borderRadius: "50%",
            }}
          ></div>
          <p style={{ marginLeft: "10px", color: "grey" }}>Sales</p>
        </div>

        <div
          className="color__sectionssss"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div
            className="color"
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "#b196c2",
              borderRadius: "50%",
            }}
          ></div>
          <p style={{ marginLeft: "10px", color: "grey" }}>Purchase</p>
        </div>

        <div
          className="color__sectionssss"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div
            className="color"
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "#7d3a58",
              borderRadius: "50%",
            }}
          ></div>
          <p style={{ marginLeft: "10px", color: "grey" }}>Gross Profit</p>
        </div>
      </div>
    </div>
  );
}

export default doughNutChart;
