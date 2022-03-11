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

const data = [
  {
    name: "2021-12-24",
    Date: 500,
  },
  {
    name: "2021-12-23",
    Date: 300,
  },
  {
    name: "2021-12-23",
    Date: 200,
  },
  {
    name: "2021-12-21",
    Date: 100,
  },
  {
    name: "2021-12-20",
    Date: 50,
  },
  {
    name: "2021-12-19",
    Date: 20,
  },
  {
    name: "2021-12-18",
    Date: 0,
  },
];

function LineChartSection() {
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
          <XAxis dataKey="name" tick={{ fill: "#040153" }} />
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
            dataKey="Date"
            stroke="#040153"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChartSection;
