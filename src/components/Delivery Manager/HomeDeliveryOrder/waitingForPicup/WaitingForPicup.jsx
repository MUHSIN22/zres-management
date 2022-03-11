import React, { useState } from "react";
import "./waitingForPicup.scss";
import Select from "react-select";
function WaitingForPicup() {
  const [detailsClicked, setDetailsClicked] = useState(false);
  const options = [
    { label: "Mohan", value: "Mohan" },
    { label: "Ravi", value: "Ravi" },
    { label: "James", value: "James" },
    { label: "Karthik", value: "Karthik" },
    { label: "Roni", value: "Roni" },
    { label: "Sam", value: "Sam" },
  ];

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

  console.log(firstHalf, "second half", secondHalf);

  const [selected, setSelected] = useState([]);
  return (
    <div className="waitingForPicup">
      <div className="top__section">
        <h4>Select Driver:</h4>
        <div className="selectDriver__details">
          <Select options={options} placeholder="Select Driver" />
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
                <th>Order Taken At</th>
                <th>Elapsed Time</th>
                <th>Driver</th>
                <th className="location__th">Location</th>
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
                  <a
                    href="#"
                    onClick={() => setDetailsClicked(!detailsClicked)}
                  >
                    More details
                  </a>
                </td>
                <td data-label="Order Taken At">08.25 AM</td>
                <td data-label="Elapsed Time" className="elapsedTime">
                  03:01:30
                </td>
                <td data-label="Driver">UN-Assigned</td>
                <td data-label="Location">14 KK , Oman , Market Road</td>
                <td data-label="Amount">OMR 13.000</td>
                <td>
                  <a href="#" className="button">
                    Assign Driver
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
      </div>
    </div>
  );
}

export default WaitingForPicup;
