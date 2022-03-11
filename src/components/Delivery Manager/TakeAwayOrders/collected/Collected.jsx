import React, { useState } from "react";
import "./collected.scss";
function Collected({ collected }) {
  const list = [
    { ordername: "cheeeseDurger", qty: "2" },
    { ordername: "jerry", qty: "2" },
    { ordername: "pizza", qty: "3" },
    { ordername: "coke", qty: "3" },
  ];
  const half = Math.ceil(list.length / 2);
  const firstHalf = list.splice(0, half);
  const secondHalf = list.splice(-half);

  const [readMore, setReadMore] = useState(false);
  return (
    <div className="collected">
      <table className="table">
        <thead>
          <tr>
            <th className="orderNuber__th">Order Number</th>
            <th>Order Taken At</th>
            <th>Elapsed Time</th>
            <th>Driver</th>
            <th>Location</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {collected
            ? collected.map((data) => (
                <tr>
                  <td data-label="Order Number">{data.OrderNumber} </td>
                  <td data-label="Order Taken At">{data.OrderTakenAt}</td>
                  <td data-label="Elapsed Time" className="elapsedTime">
                    {data.ElapsedTime}
                  </td>
                  <td data-label="Driver">{data.Driver}</td>
                  <td data-label="Location">{data.Location}</td>
                  <td data-label="Amount">{data.Amount}</td>
                  <td data-label="">collected</td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
}

export default Collected;
