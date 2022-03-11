import React from "react";
import "./runningOrder.scss";
function RunningOrder() {
  return (
    <>
      {/* show details */}

      <div className="running__orders">
        <div className="running___order__headder">
          <h2>Running Orders</h2>
        </div>
        <div className="running__order__body">
          <table className="table">
            <thead>
              <tr>
                <th>Order No</th>
                <th>Date and Time</th>
                <th>Waiting Time</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Driver</th>
                <th>Agent</th>
                <th>Source</th>
                <th>Loyality</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="oder no">#1485</td>
                <td data-label="Date and Time">22 Nov 2021 12.50 PM</td>
                <td data-label="Waiting time">5 min</td>
                <td data-label="Amount">OMR 15000.00</td>
                <td data-label="Status">New</td>
                <td data-label="Driver"></td>
                <td data-label="Agent">Amal</td>
                <td data-label="Source"></td>
                <td data-label="Loyality">151.5</td>
                <td data-label="#">
                  <a href="#" className="button">
                    Show Details
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default RunningOrder;
