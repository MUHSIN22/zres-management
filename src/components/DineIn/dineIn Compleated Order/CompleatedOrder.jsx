import axios from "axios";
import React, { useEffect, useState } from "react";
import "./compleatedOrder.scss";
function CompleatedOrder() {
  const [data, setData] = useState()
  useEffect(() => {
    axios
      .get("https://zres.clubsoft.co.in/DineIn/CompletedOrders?CMPid=1")
      .then((res) => {
        setData(res.data);
      });
  }, [])
  return (
    <div className="CompleatedOrder">
      <div className="runningOrder__headder">
        <h3>Compleated Order</h3>
      </div>

      <div className="TableSection">
        <table className="table">
          <thead>
            <tr>
              <th className="orderNuber__th">Table No</th>
              <th>Order No</th>
              <th>Amound</th>
              <th>Status</th>
              <th>Dining For</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((data) => (
              <tr>
                <td data-label="Order Number">{data.TableNumber}</td>
                <td data-label="Order Taken At">
                  {data.OrderNumber} <h6>Burger</h6>
                </td>
                <td data-label="Elapsed Time">{data.Amount}</td>
                <td data-label="Delivery Area">
                  {" "}
                  <a href="#" className="button ">
                   {data.Status==="COMPLETED" ? "paid":""}
                  </a>
                </td>
                <td data-label="Amount">About 2 Hrs</td>
                <td data-label="" colSpan={"2"}></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="TotalOrder">
        <table className="table">
          <thead>
            <tr>
              <th className="orderNuber__th">Total Order</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Order Number">{data && data.length}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CompleatedOrder;
