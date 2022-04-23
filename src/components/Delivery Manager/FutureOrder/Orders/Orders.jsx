import axios from "axios";
import React, { useEffect, useState } from "react";
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
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    axios
    .get(
      `${process.env.REACT_APP_BASE_URL}/DeliveryManager/FutureOrders?CMPid=1`
    )
    .then((req) => {
      setOrderData(req.data)
    })
  }, [])
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
          {
            orderData.map(data=>(
            <tr>
            <td data-label="Order Number">
              #{data.OrderNo} -{" "}
                  {"       "}
                  {data.ItemName} 
            </td>

            <td data-label="Order Taken At">{data.OrderTakenAt}</td>

            <td data-label="Remaining Time" className="elapsedTime">
              {data.ReminingTime} hrs
            </td>

            <td data-label="Driver">{data.Driver}</td>

            <td data-label="Location">{data.DeliveryArea}</td>

            <td data-label="Amount">OMR {data.Amount}</td>

            <td data-label="Status" className="elapsedTime">
              <a href="#" className="button">
                {data.Status}
              </a>
            </td>
          </tr>
          ))}

         
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
