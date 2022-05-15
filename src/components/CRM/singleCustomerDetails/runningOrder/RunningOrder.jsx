import React, { useEffect, useState } from "react";
import { crmServices } from "../../../../Services/CrmServices";
import ShowDetails from "../../Showdetails/ShowDetails";
import "./runningOrder.scss";
function RunningOrder({number,action}) {
const [ runningOrder, setRunningOrder ] = useState([]);
const [show,setShow] = useState(false)
  useEffect(() => {
    if(number.lenth !== 0){
    crmServices.getRunningorders(number)
    .then(data => {
      setRunningOrder(data);
    })}
  }, [])
  
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
              {runningOrder && runningOrder.map((order, index) => (
              <tr>
                <td data-label="oder no">{order.OrderNo}</td>
                <td data-label="Date and Time">{order.Date}</td>
                <td data-label="Waiting time">{order.WaitingTime}</td>
                <td data-label="Amount">{order.Amount}</td>
                <td data-label="Status">{order.Status}</td>
                <td data-label="Driver">{order.Driver}</td>
                <td data-label="Agent">Amal</td>
                <td data-label="Source"></td>
                <td data-label="Loyality">{order.LoyalityPoint}</td>
                <td data-label="#">
                  <a onClick={()=>setShow(true)} className="button">
                    Show Details
                  </a>
                  {show ?
                  <ShowDetails action={()=>setShow(false)} />:null
}
                </td>
              </tr>))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default RunningOrder;
