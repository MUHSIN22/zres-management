import React, { useState, useEffect } from "react";
import "./waitingForPicup.scss";
import Select from "react-select";
import axios from "axios";
function WaitingForPicup() {
  const [drivers, setDrivers] = useState([]);
  const [picupData, setPicupData] = useState([]);
  const [detailsClicked, setDetailsClicked] = useState(false);
  const options = [
    { label: "Mohan", value: "Mohan" },
    { label: "Ravi", value: "Ravi" },
    { label: "James", value: "James" },
    { label: "Karthik", value: "Karthik" },
    { label: "Roni", value: "Roni" },
    { label: "Sam", value: "Sam" },
  ];

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/DeliveryManager/GetDriver?CMPid=1`)
      .then((req) => {
        setDrivers(req.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/DeliveryManager/GetAllPickUpOrders?CMPid=1`
      )
      .then((req) => {
        setPicupData(req.data);
      });
  }, []);

  const list = [
    { ordername: "cheeeseDurger", qty: "2" },
    { ordername: "jerry", qty: "2" },
    { ordername: "pizza", qty: "3" },
    { ordername: "coke", qty: "3" },
  ];
  const half = Math.ceil(list.length / 2);
  const firstHalf = list.splice(0, half);
  const secondHalf = list.splice(-half);
  return (
    <div className="waitingForPicup">
      <div className="top__section">
        <h4>Select Driver:</h4>
        <div className="selectDriver__details">
          <select>
            <option value="" disabled selected hidden>
              Drivers
            </option>
            {drivers &&
              drivers.map((data) => {
                return <option value={data.value}>{data.Text}</option>;
              })}
          </select>
          <h5>Show Available Drivers</h5>
        </div>
        <div className="areatoDeliver">
          <h5>Area of Delivery: Oman</h5>
        </div>
      </div>
      <div className="bottom__section">
        <div className="table__sections">
          <table className="table">
            <thead>
              <tr>
                <th className="orderNuber__th">Order Number</th>
                <th>Qty</th>
                <th>Elapsed Time</th>
                <th>Driver</th>
                <th className="location__th">Location</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {picupData.map((data) => {
                return (
                  <tr>
                    <td data-label="Order Number">
                      #{data.OrderNo} -
                          {data.ItemName} 
                          {" "}
                      <a
                        href="#"
                        onClick={() => setDetailsClicked(!detailsClicked)}
                      >
                        More details
                      </a>
                    </td>
                    <td data-label="Order Taken At">{data.Quantity}</td>
                    <td data-label="Elapsed Time" className="elapsedTime">
                      {data.ElapsedTime}
                    </td>
                    <td data-label="Driver">UN-Assigned</td>
                    <td data-label="Location">{data.DeliveryArea}</td>
                    <td data-label="Amount">OMR {" "+data.Amount}.00</td>
                    <td>
                      <a href="#" className="button">
                        Assign Driver
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
      </div>
    </div>
  );
}

export default WaitingForPicup;
