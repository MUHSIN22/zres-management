import React, { useState } from "react";
import "./pastOrder.scss";
function PastOrder() {
  const [pastOrderClick, setPastOrderClick] = useState(false);
  return (
    <>
      <div className="past__orders">
        {/* main BODY */}
        <div className="past__order__body_wrapper ">
          <div className="past__order__headder">
            <h2>Past Orders</h2>
          </div>
          {!pastOrderClick && (
            <>
              <div className="overlay__section"></div>
              <div
                className="past__order__btn"
                onClick={() => setPastOrderClick(true)}
              >
                <h4>View Past Order</h4>
              </div>
            </>
          )}

          <div className="body__inside__section">
            <div
              className={
                "past__order__body " + (pastOrderClick && "clickedActive")
              }
            >
              <table className="table">
                <thead>
                  <tr>
                    <th>Order No</th>
                    <th>Date and Time</th>
                    <th>Type</th>
                    <th>Time Taken</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Driver</th>
                    <th>Agent</th>
                    <th>Loyality</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="oder no">#1485</td>
                    <td data-label="Date and Time">22 Nov 2021 12.50 PM</td>
                    <td data-label="Type">Call center-take away</td>
                    <td data-label="Time Taken">0 min</td>
                    <td data-label="Amount">OMR 100.00</td>
                    <td data-label="Status">Delivered</td>
                    <td data-label="Driver">System</td>
                    <td data-label="Agent">Amal</td>
                    <td data-label="Loyality">2</td>
                  </tr>

                  <tr>
                    <td data-label="oder no">#1485</td>
                    <td data-label="Date and Time">22 Nov 2021 12.50 PM</td>
                    <td data-label="Type">Call center-take away</td>
                    <td data-label="Time Taken">0 min</td>
                    <td data-label="Amount">OMR 100.00</td>
                    <td data-label="Status">Delivered</td>
                    <td data-label="Driver">System</td>
                    <td data-label="Agent">Amal</td>
                    <td data-label="Loyality">2</td>
                  </tr>
                </tbody>
              </table>

              <div className="bottom__total_data">
                <table className="table__Two">
                  <thead>
                    <tr>
                      <th width="20%">Total Order</th>
                      <th width="20%">Total Loyality Coins</th>
                      <th width="60%" className="total_amount">
                        Total Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2</td>
                      <td>157.5</td>
                      <td className="total_amount">730</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PastOrder;
