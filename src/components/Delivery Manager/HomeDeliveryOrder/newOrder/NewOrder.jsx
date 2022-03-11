import React, { useState } from "react";
import "./newOrder.scss";
function NewOrder() {
  const [detailsClicked, setDetailsClicked] = useState(false);
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
    <div className="TableSection">
      <table className="table">
        <thead>
          <tr>
            <th className="orderNuber__th">Order Number</th>
            <th>Order Taken At</th>
            <th>Elapsed Time</th>
            <th>Delivery Area</th>
            <th>Amount</th>
            <th></th>
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
              <a href="#" onClick={() => setDetailsClicked(!detailsClicked)}>
                {" "}
                {!readMore ? "Click for more details..." : "click to read less"}
              </a>
            </td>
            <td data-label="Order Taken At">08.25 AM</td>
            <td data-label="Elapsed Time" className="elapsedTime">
              03:01:30
            </td>
            <td data-label="Delivery Area">14 KK , Oman , Market Road</td>
            <td data-label="Amount">OMR 13.000</td>
            <td data-label="">
              {" "}
              <a href="#" className="button">
                Ready ?
              </a>
            </td>
          </tr>
          <tr className="HiddenMainTr">
            <td colspan="8">
              {detailsClicked && (
                <>
                  <table className="table hiddenTable">
                    <thead>
                      <tr>
                        <th>Order No</th>
                        <th>Amount</th>
                        <th>Orderd Items</th>
                        <th>Total Time </th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="Order No">#145S</td>
                        <td data-label="Amount">13.000</td>
                        <td
                          data-label="Order Performance"
                          className="diff__time__Cycle"
                        >
                          <div className="time__gap__sections">
                            {list.map((items) => (
                              <h5>{items.ordername}</h5>
                            ))}
                          </div>
                        </td>
                        <td data-label="Total Time ">35 Mins</td>
                        <td data-label="Status"></td>
                      </tr>
                    </tbody>
                  </table>
                </>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default NewOrder;
