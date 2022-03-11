import React from "react";
import "./compleatedOrder.scss";
function CompleatedOrder() {
  const data = [
    {
      tableNo: 1,
      id: 1,
      orderNo: "#4324",
      status: "done Soon",
      diningFor: "2hrs",
    },
    {
      tableNo: 2,
      id: 2,
      orderNo: "#3324",
      status: "Running Order",
      diningFor: "1hrs",
    },

    {
      tableNo: 3,
      id: 3,
      orderNo: "#1324",
      status: "done Soon",
      diningFor: "2hrs",
    },
  ];

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
            {data.map((d) => (
              <tr>
                <td data-label="Order Number">{d.tableNo}</td>
                <td data-label="Order Taken At">
                  {d.orderNo} <h6>Burger</h6>
                </td>
                <td data-label="Elapsed Time">OMR 15.00</td>
                <td data-label="Delivery Area">
                  {" "}
                  <a href="#" className="button ">
                    Paid
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
              <td data-label="Order Number">1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CompleatedOrder;
