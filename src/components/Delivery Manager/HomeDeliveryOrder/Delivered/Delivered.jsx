import React, { useEffect, useState } from "react";
import "./delivered.scss";
import Select from "react-select";
import axios from "axios";
function Delivered() {
  const [detailsClicked, setDetailsClicked] = useState(false);
  const [drivers, setDrivers] = useState([]);
  const [statusData, setStatusData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}DeliveryManager/GetDriver?CMPid=1`)
      .then((req) => {
        const data = req.data.map((data) => {
          return {
            label: data.Text,
            value: data.Value,
          };
        });
        setDrivers(data);
      });
    axios
      .get(`${process.env.REACT_APP_BASE_URL}DeliveryManager/DelivetStatus?CMPid=1`)
      .then((req) => {
        setStatusData(req.data);
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

  const [readMore, setReadMore] = useState(false);

  const [selected, setSelected] = useState([]);
  return (
    <>
      <div className="delivered">
        <div className="top__section">
          <div className="selectDriver__details">
            <Select options={drivers} placeholder="All Drivers" />
          </div>
          <div className="AverageDetails">
            <div className="sections">
             <h5>Average Delivery Time : </h5> {statusData.length>0 &&<h4> Less than a {statusData[0].AverageDeLiveryTime} minutes</h4>}
            </div>
            <div className="sections">
               <h5>Total Amount :</h5>{statusData.length>0 && <h4>{statusData[0].Amount} SGD</h4> }
            </div>
          </div>
        </div>
        <div className="bottom__section">
          <div className="table__sections">
            <table className="table">
              <thead>
                <tr>
                  <th className="orderNuber__th">Order Number</th>
                  <th>Order Taken At</th>
                  <th>Elapsed Time</th>
                  <th>Driver</th>
                  <th className="location__th">Location</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {statusData.map((data) => {
                  return (
                    <tr>
                      <td data-label="Order Number">
                        #{data.OrderNo} -{" "}
                        <a href="#" onClick={() => setReadMore(!readMore)}>
                          {" "}
                          {!readMore
                            ? "Click for more details..."
                            : "click to read less"}
                        </a>
                      </td>
                      <td data-label="Order Taken At">{data.OrderTakenAt}</td>
                      <td data-label="Elapsed Time" className="elapsedTime">
                        {data.ElapsedTime}
                      </td>
                      <td data-label="Driver">{data.DriverName}</td>
                      <td data-label="Location">{data.DeliveryArea}</td>
                      <td data-label="Amount">OMR {data.Amount}</td>
                      <td>
                        <h5 style={{ color: "green" }}>{data.Status}</h5>
                        {/* <h5 style={{ color: "red" }}>Not Delivered</h5> */}
                      </td>
                      <td data-label="#">
                        {detailsClicked === false && (
                          <button
                            className="button"
                            onClick={() => setDetailsClicked(true)}
                          >
                            Show Details
                          </button>
                        )}
                        {detailsClicked === true && (
                          <a
                            href="#"
                            className="button button__show__less"
                            onClick={() => setDetailsClicked(false)}
                          >
                            Hide Details
                          </a>
                        )}
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
                              <th>
                                Order Performance(Preparation/Pickup/Delivery)
                              </th>
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
                                  <div className="time__cycles__box pre">
                                    5 min Pre
                                  </div>
                                  <div className="time__cycles__box pick">
                                    15 min Pick
                                  </div>
                                  <div className="time__cycles__box delivery">
                                    15 min Delivery
                                  </div>
                                </div>
                              </td>
                              <td data-label="Total Time ">35 Mins</td>
                              <td data-label="Status"></td>
                            </tr>
                          </tbody>
                        </table>

                        <table className="table totaldetails">
                          <thead>
                            <tr>
                              <th>Total Delivery</th>
                              <th></th>
                              <th>Average Delivery Time</th>
                              <th>Average Time</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Total Delivery">1</td>
                              <td data-label="">100usd</td>
                              <td data-label="Average Delivery Time">
                                10 minutes
                              </td>
                              <td data-label="Average Time">20minutes</td>
                            </tr>
                          </tbody>
                        </table>
                      </>
                    )}
                  </td>
                </tr>

                {/* second*/}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Delivered;
