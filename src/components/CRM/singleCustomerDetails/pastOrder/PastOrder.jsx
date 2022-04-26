import { data } from "jquery";
import React, { useEffect, useState } from "react";
import { crmServices } from "../../../../Services/CrmServices";
import "./pastOrder.scss";
function PastOrder({number}) {
  const [pastOrderClick, setPastOrderClick] = useState(false);
  const [pastOrder, setPastOrder] = useState([]);
  const [totalorder,setTotalorder] = useState('')
  const [totalLoyality,setTotalLoyality] = useState([])
  const [totalAmount,setTotalAmount] = useState([])

  useEffect(() => {
    if(number.lenth !== 0){
    crmServices.getPastorders(number)
    .then(data => {
      setPastOrder(data);
    });
   
  
}
  }, [])
 

 
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
                    <th >Order No</th>
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
                {pastOrder && pastOrder.map((order, index) => (
                  <tr>
                    <td data-label="oder no">{order.OrderNo}</td>
                    <td data-label="Date and Time">{order.Date}</td>
                    <td data-label="Type">{order.Ordertype}</td>
                    <td data-label="Time Taken">{order.ElapsedTime}</td>
                    <td data-label="Amount">OMR {order.Amount}</td>
                    <td data-label="Status">{order.Status}</td>
                    <td data-label="Driver">{order.DriverName}</td>
                    <td data-label="Agent">{order.Agent}</td>
                    <td data-label="Loyality">{order.LoyalityPoint}</td>
                  </tr>))}

    
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
                      <td>{totalorder}</td>
                      <td>{totalLoyality}</td>
                      <td className="total_amount">{totalAmount}</td>
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
