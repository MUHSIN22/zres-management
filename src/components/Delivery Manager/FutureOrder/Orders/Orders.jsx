import React, { useState } from "react";
import "./Orders.scss";

function Orders() {
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
    <div className="Orders">
      <table className="table">
        <thead>
          <tr>
            <th className="orderNuber__th">Order Number</th>
            <th>Order Taken At</th>
            <th>Remaining Time</th>
            <th>Driver</th>
            <th className="location__th">Location</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Order Number">
              #145S -{" "}
              {firstHalf.map((items) => (
                <>
                  {"       "}
                  {items.ordername} X {items.qty}
                </>
              ))}
              {readMore &&
                secondHalf.map((items) => (
                  <>
                    {"       "}
                    {items.ordername} X {items.qty}
                  </>
                ))}
              <a href="#" onClick={() => setReadMore(!readMore)}>
                {" "}
                {!readMore ? "Click for more details..." : "click to read less"}
              </a>
            </td>

            <td data-label="Order Taken At">08.25 AM</td>

            <td data-label="Remaining Time" className="elapsedTime">
              9 days 5hrs
            </td>

            <td data-label="Driver">UN-Assigned</td>

            <td data-label="Location">14 KK , Oman , Market Road</td>

            <td data-label="Amount">OMR 13.000</td>

            <td data-label="Status" className="elapsedTime">
              <a href="#" className="button">
                In Progress
              </a>
            </td>
          </tr>

          <tr>
            <td data-label="Order Number">
              #145S -{" "}
              {firstHalf.map((items) => (
                <>
                  {"       "}
                  {items.ordername} X {items.qty}
                </>
              ))}
              {readMore &&
                secondHalf.map((items) => (
                  <>
                    {"       "}
                    {items.ordername} X {items.qty}
                  </>
                ))}
              <a href="#" onClick={() => setReadMore(!readMore)}>
                {" "}
                {!readMore ? "Click for more details..." : "click to read less"}
              </a>
            </td>

            <td data-label="Order Taken At">08.25 AM</td>

            <td data-label="Remaining Time" className="elapsedTime">
              9 days 5hrs
            </td>

            <td data-label="Driver">UN-Assigned</td>

            <td data-label="Location">14 KK , Oman , Market Road</td>

            <td data-label="Amount">OMR 13.000</td>

            <td data-label="Status" className="elapsedTime">
              <a href="#" className="button">
                In Progress
              </a>
            </td>
          </tr>

          <tr>
            <td data-label="Order Number">
              #145S -{" "}
              {firstHalf.map((items) => (
                <>
                  {"       "}
                  {items.ordername} X {items.qty}
                </>
              ))}
              {readMore &&
                secondHalf.map((items) => (
                  <>
                    {"       "}
                    {items.ordername} X {items.qty}
                  </>
                ))}
              <a href="#" onClick={() => setReadMore(!readMore)}>
                {" "}
                {!readMore ? "Click for more details..." : "click to read less"}
              </a>
            </td>

            <td data-label="Order Taken At">08.25 AM</td>

            <td data-label="Remaining Time" className="elapsedTime">
              9 days 5hrs
            </td>

            <td data-label="Driver">UN-Assigned</td>

            <td data-label="Location">14 KK , Oman , Market Road</td>

            <td data-label="Amount">OMR 13.000</td>

            <td data-label="Status" className="elapsedTime">
              <a href="#" className="button">
                In Progress
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
