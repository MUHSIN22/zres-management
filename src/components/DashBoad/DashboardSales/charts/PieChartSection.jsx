import React from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
function PieChartSection({data}) {
  return (
    <div
      style={{ backgroundColor: "#fff", padding: "10px", borderRadius: "15px" }}
    >
      
        <ResponsiveContainer width="100%" aspect={1}>
        <PieChart width={200} height={50}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#2f2174"
            label
          />

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      
    </div>
  );
}

export default PieChartSection;
