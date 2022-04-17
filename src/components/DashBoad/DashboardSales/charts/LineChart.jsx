import React, { useEffect, useState } from "react";
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

function LineChartSection({data}) {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  const [ItemsTodisplay, setItemToDisplay] = useState();

  useEffect(() => {
    if (screenSize.dynamicWidth <= 768) {
      setItemToDisplay(4);
    } else {
      setItemToDisplay(4);
    }
  }, [screenSize]);

  return (
    <div
      style={{ backgroundColor: "#fff", padding: "10px", borderRadius: "15px" }}
    >
      <ResponsiveContainer width="100%" aspect={ItemsTodisplay}>
        <LineChart
          width={500}
          height={200}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid horizontal="true" vertical="" />
          <XAxis dataKey="Date" tick={{ fill: "#040153" }} />
          <YAxis tick={{ fill: "#040153" }} stroke="#fff" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#040153",
              color: "#fff",
            }}
            itemStyle={{ color: "#fff" }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="TotalSale"
            stroke="#040153"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChartSection;
