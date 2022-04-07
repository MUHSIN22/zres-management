import React, { useState, useEffect } from "react";
import axios from "axios";
import "./newOrder.scss";

function NewOrder() {
  const [detailsClicked, setDetailsClicked] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const [newOrderData, setNewOrderData] = useState([]);
  const [orderNoData,setOrderNoData] = useState()
  useEffect(() => {
    axios
      .get(
        "https://zres.clubsoft.co.in/DeliveryManager/GetAllNewOrders?CMPid=1"
      )
      .then((res) => {
        setNewOrderData(res.data);
      });
  }, []);
  const moreDetails = (id) =>{
    setDetailsClicked(!detailsClicked)
    setOrderNoData(id)
  }

  return (
    <div className="TableSection">
      <table className="table">
        <thead>
          <tr>
            <th className="orderNuber__th">Order Number</th>
            <th>Qty</th>
            <th>Elapsed Time</th>
            <th>Delivery Area</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {newOrderData.length > 0 &&
            newOrderData.map((data) => {
              return (
                <tr>
                  <td data-label="Order Number">
                    # {data.OrderNo} , {data.ItemName}
                    <a
                      href="#"
                      onClick={() => moreDetails(data.OrderNo) }
                    >
                      {" "}
                      {!readMore
                        ? "Click for more details..."
                        : "click to read less"}
                    </a>
                  </td>
                  <td data-label="Order Taken At">{data.Quantity}</td>
                  <td data-label="Elapsed Time" className="elapsedTime">
                    {data.ElapsedTime}
                  </td>
                  <td data-label="Delivery Area">{data.DeliveryArea}</td>
                  <td data-label="Amount">OMR{" "+data.Amount}.00</td>
                  <td data-label="">
                    {" "}
                    <a href="#" className="button">
                      Ready ?
                    </a>
                  </td>
                </tr>
              );
            })}
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
                      {newOrderData.filter(data=>{
                        return data.OrderNo === orderNoData
                      })
                      .map((data) => {
                        return(
                        <tr>
                          <td data-label="Order No">#{data.OrderNo}</td>
                          <td data-label="Amount">OMR{" "+data.Amount}.00</td>
                          <td
                            data-label="Order Performance"
                            className="diff__time__Cycle"
                          >
                            <div className="time__gap__sections">
                              <h5>{data.ItemName}</h5>
                            </div>
                          </td>
                          <td data-label="Total Time ">{data.ElapsedTime} Mins</td>
                          <td data-label="Status"></td>
                        </tr>);
                      })}
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

/* Pending 

*/
